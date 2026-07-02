# NDIF Ecosystem Design Assets

Reusable graphic assets for the [NDIF](https://ndif.us/) ecosystem: logos, color palettes, diagrams, and social/promotional material for NDIF and its tools.

## Structure

```
design-assets/
├── brand/                → Org-level NDIF brand assets
│   ├── logos/            → NDIF logos and wordmarks
│   ├── typography/       → Fonts
│   └── GUIDELINES.md/    → Branding guidelines
├── projects/             → Per-tool assets (one folder per project)
├── diagrams/             → Architecture / ecosystem diagrams
├── social/               → Social previews, banners, talk headers
├── templates/            → Reusable templates (slides, posters, cards)
├── src/                  → Editable source files (.fig, .ai, .xcf)
└── web/                  → Web assets generated with /design-sync, for use with Claude Design
```

See [Getting Started with Claude Design](https://support.claude.com/en/articles/14604416-get-started-with-claude-design) for more information on how to use the web assets in Claude Design. If new assets are manually added to the repo, they should be added to the web assets using `/design-sync` so that they are available in Claude Design.

## Conventions

- **SVG is the source of truth** for logos and icons where possible; keep PNG exports alongside for quick use.
- **Naming**: `<project>-<asset>-<variant>.<ext>`, lowercase kebab-case — e.g. `nnsight-logo-dark.svg`, `ndif-wordmark-horizontal.png`.
- **Variants**: suffix with `-white` / `-black` / `-color`.
- **Exports**: for raster exports include the size when relevant, e.g. `nnterp-logo-512.png`.
- **Editable sources** (Figma exports, Illustrator, Affinity files) go in `src/`, mirroring the folder they belong to (e.g. `src/projects/nnsight/`).
