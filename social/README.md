# Social

Social previews, banners and talk headers for NDIF and its tools.

## LinkedIn Page cover

| File | Size | Use |
|---|---|---|
| `ndif-linkedin-banner-light-1512.png` | 1512 × 256 | Light cover, exact spec size |
| `ndif-linkedin-banner-light-3024.png` | 3024 × 512 | Light cover, 2× for retina |
| `ndif-linkedin-banner-dark-1512.png` | 1512 × 256 | Dark cover, exact spec size |
| `ndif-linkedin-banner-dark-3024.png` | 3024 × 512 | Dark cover, 2× for retina |

The light 2× file is the one currently published on the NDIF LinkedIn Page.

### Design

The Page avatar already carries the NDIF logo, so the cover carries only the
line — no logo, no supporting paragraph. The copy is NDIF's own hero headline
from [ndif.us](https://ndif.us/), and the split colouring matches that hero:
"Cracking open" in the brand gradient, the rest in ink. That keeps the gradient
doing what [GUIDELINES.md](../brand/GUIDELINES.md) asks of it — emphasis on one
element rather than coverage.

The gradient is painted with `background-clip: text` on the inline span, so it
runs true left-to-right across exactly those words: fuchsia at the left edge of
"Cracking", azure at the right edge of "open".

The light ground is `#F3F4F8`, a very light cool neutral, rather than pure
white. LinkedIn's own page background is white, so a white cover has no visible
edge and dissolves into the page.

The dark variant is a deliberate departure from the guidelines, which specify a
white or transparent background. It matches the website's dark hero and carries
further in a feed; the light variant is the canonical one.

### Sizing

LinkedIn's [Page image specifications][spec] give 1512 × 256 as both the
minimum and the recommended cover size, PNG or JPEG, 3 MB maximum. Third-party
guides still widely quote the retired 1128 × 191 and 4200 × 700 figures — check
the spec page rather than those before re-cutting.

LinkedIn overlays the Page logo on the lower-left of the cover and warns
against detail near the edges, "especially in the lower-right corner". The line
is centred, so it clears both.

[spec]: https://www.linkedin.com/help/linkedin/answer/70781

## Regenerating

```sh
python3 src/social/build_linkedin_banner.py
```

Stdlib only, plus Google Chrome for rasterising (set `CHROME` to override the
browser path). Infra is read from `brand/typography/`, so the exports always
track the fonts in this repo. Edit the copy, colours or canvas size at the top
of the script.
