# design-sync notes — ndif-brand

- This repo is a **brand-assets repo, not a JS design system**. A minimal React layer was scaffolded for the sync: `package.json` (root, name `ndif-brand`) + `web/` (component sources wrapping the repo's real SVGs, `tokens.css` from `brand/GUIDELINES.md`, `fonts.css` for the Infra OTFs).
- `web/src/svg-data.ts` is **generated** by `web/generate-svg-data.mjs` (= `cfg.buildCmd`) from the repo's SVG files. Run it after any SVG changes. A **new asset** needs: an entry in the script's `ASSETS` map, a component or variant in `web/src/`, and (if a new component) a `componentSrcMap` pin + a `.design-sync/previews/<Name>.tsx`.
- The converter must run with `--entry ./web/src/index.ts` — the package isn't installed under `node_modules`, and without the entry override discovery falls back to a nonexistent `.d.ts` tree (→ tokens-only). Components are pinned via `componentSrcMap`.
- Fresh clone deps: `npm i --no-save react react-dom @types/react @types/react-dom typescript` — **all in one command**; a later `npm i --no-save` prunes earlier unsaved installs (react-dom vanished mid-run this way).
- Converter deps live in `.ds-sync/` (esbuild, ts-morph, @types/react, playwright). Chromium headless shell cached at `~/Library/Caches/ms-playwright/chromium_headless_shell-1228`.
- Known render warns: none — all 4 components have authored previews, render check fully clean.
- Shell note: this machine's zsh — use `pipestatus` (lowercase), not bash's `PIPESTATUS`, when checking piped exit codes.
- **SVG id namespacing is load-bearing**: variants exported from the same source share internal ids (all three workbench files define `linearGradient503`); inlined on one page, `url(#id)` resolves to the first match in the document, so monochrome variants picked up the color gradient. `generate-svg-data.mjs` namespaces every `id=`/`url(#)`/`href="#"` per asset — keep that when touching the generator.
- **Brand naming (user feedback, 2026-07-02)**: the library is written "NNSight" (not "nnsight") and the app is "NDIF Workbench" (not "Workbench") in lockups/text; no tagline compositions with the NDIF wordmark; product-name text next to a logo is Infra SemiBold (600), not Bold.

## Re-sync risks

- `web/tokens.css` mirrors the palette table in `brand/GUIDELINES.md` **by hand** — a palette change there must be re-mirrored, nothing detects the drift.
- New/renamed font files in `brand/typography/` need matching `@font-face` entries in `web/fonts.css`.
- Logo-concept projects (inif, nnbench, nngine, nnterp) had **no assets yet** at first sync — when their logos land, add them per the new-asset recipe above.
- `svg-data.ts` goes stale if SVGs are edited without running `buildCmd`. **The resync driver does NOT run `cfg.buildCmd`** — always run `node web/generate-svg-data.mjs` by hand before any build (this shipped a stale bundle once: the id-namespacing fix was in the generator but never regenerated, so the "fixed" upload still had the gradient bleed). Verify a generator-level fix landed with `grep workbenchLogoWhite__ ds-bundle/_ds_bundle.js`.
- Grading lesson: logo variant colors are easy to misread at thumbnail size — screenshot the specific card cell zoomed (`?story=<Export>`, deviceScaleFactor 2) and compare against the standalone SVG rendered on a matching background before calling a color fix verified.
- The conventions header enumerates the tokens and 4 component names — re-validate it if tokens/components change.
