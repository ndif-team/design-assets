# Design Guidelines

## Color Palette

| Role | Hex | Usage |
|---|---|---|
| Gradient step 1 (fuchsia) | `#B875B1` | Left end of every gradient |
| Gradient step 2 | `#AD7AB4` | Gradient step 2 |
| Gradient step 3 | `#A37EB7` | Gradient step 3 |
| Gradient step 4 | `#9883BB` | Gradient step 4 |
| Gradient step 5 | `#8E87BE` | Gradient step 5 |
| Gradient step 6 (periwinkle) | `#838CC1` | Gradient midpoint |
| Gradient step 7 | `#7891C4` | Gradient step 7 |
| Gradient step 8 | `#6E95C7` | Gradient step 8 |
| Gradient step 9 | `#639ACB` | Gradient step 9 |
| Gradient step 10 | `#599ECE` | Gradient step 10 |
| Gradient step 11 (azure) | `#4EA3D1` | Right end of every gradient |
| Slate (dark gray) | `#66686E` | Active props (tracks, nodes, frames, arrows), text |
| Silver (light gray) | `#C8C9D2` | Passive props (rails, ticks, backgrounds of controls) |

## Design Principles

- The gradient is always **linear, left-to-right across the whole composition**. The "active" element usually carries the gradient; everything static or structural is gray.
- Design primitive: circles connected by lines.
- Where a gradient element crosses a gray prop, keep a **thin keyline gap** around the gradient element, to improve aesthetic rendition and emphasize important elements. The gap is **empty, never painted white**, and it **hugs the gradient element's contour** at a constant thin width: cut the gray prop with the dilated silhouette of the crossing element (e.g. mask a slightly larger copy of a node or stroke out of the rail), rather than simply stopping the gray prop short. The background shows through, so the mark works on any background.
- Flat vector only, no shadows, no 3D, use white or transparent background. Main lines should be sufficiently thick to be visible at small sizes, but not so thick as to appear heavy or clunky. Use the gradient for emphasis, not decoration.
- Wordmark lockups use the NDIF gray (`#66686E`) in the same heavy geometric sans as the NDIF logotype, with [InfraExtraBold](typography/InfraExtraBold.otf) for the logotype and [InfraBold](typography/InfraBold.otf) for wordmarks.