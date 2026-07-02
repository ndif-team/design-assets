# NDIF brand conventions

This is a **brand-foundation kit**, not a UI component library: it ships the NDIF logos as components, the brand palette as CSS custom properties, and the Infra typeface. Build your own layout, controls, and content with plain elements styled by these tokens.

## Styling idiom: CSS custom properties

No utility classes. Style your own elements with the `var(--ndif-*)` tokens defined in `styles.css` (read it before styling — the palette lives in its `tokens.css` import):

- `--ndif-gradient-1` … `--ndif-gradient-11` — the 11-step brand gradient, fuchsia `#B875B1` → periwinkle `#838CC1` → azure `#4EA3D1`.
- `--ndif-gradient` — the full sweep as a ready `linear-gradient(to right, …)`. **Always left-to-right across the whole composition.** Use it for emphasis on the one "active" element (a hero band, a highlighted stroke, a progress fill), never as decoration everywhere.
- `--ndif-slate` (`#66686E`) — active structure: text, frames, arrows, icons.
- `--ndif-silver` (`#C8C9D2`) — passive structure: rails, ticks, borders, control backgrounds.
- `--ndif-font` — the Infra typeface stack. Set `font-family: var(--ndif-font)` on your root. Weights 400/500/600/700/800 (+ italics) ship via `@font-face`. Product-name text next to a logo uses SemiBold (600); headings 600–700; body 400–500.

Design principles from the brand guidelines (also shipped in `guidelines/`): flat vector aesthetic — no shadows, no 3D; white or transparent backgrounds; gradient for emphasis, gray for structure.

## Components (all of them)

Seven logo components, each rendering the official SVG at a `width` you set (height follows aspect ratio): `NdifLogo` (`variant`: `'color' | 'black' | 'white' | 'white-on-gradient'`), `NdifWordmark` (`layout`: `'horizontal' | 'stacked'`; `variant`: `'color' | 'black' | 'white'`), `NnbenchLogo` (`variant`: `'color' | 'gradient-needle' | 'black' | 'white'`), and `InifLogo`, `NnsightLogo`, `NnterpLogo`, `WorkbenchLogo` (`variant`: `'color' | 'black' | 'white'`). All accept `width`, `className`, `style`, `aria-label`. Use `'color'` on light backgrounds, `'white'` on slate or gradient backgrounds. No provider or wrapper is needed.

## Idiomatic example

```tsx
import { NdifWordmark } from 'ndif-brand';

function Header() {
  return (
    <header style={{ fontFamily: 'var(--ndif-font)', borderBottom: '1px solid var(--ndif-silver)', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
      <NdifWordmark width={200} />
      <div style={{ flex: 1 }} />
      <nav style={{ color: 'var(--ndif-slate)', fontWeight: 600 }}>Docs · Models · Status</nav>
      <div style={{ height: 3, background: 'var(--ndif-gradient)', position: 'absolute', left: 0, right: 0, bottom: -1 }} />
    </header>
  );
}
```
