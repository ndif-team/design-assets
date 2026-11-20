#!/usr/bin/env python3
"""
Generate the NDIF LinkedIn Page cover images into ../../social/.

    python3 src/social/build_linkedin_banner.py

Design notes
------------
The LinkedIn Page avatar already carries the NDIF logo, so the cover carries
only the line -- no logo, no supporting paragraph. The copy is NDIF's own hero
headline from ndif.us, and the split colouring matches that hero: "Cracking
open" in the brand gradient, the rest in ink. That keeps the gradient doing
what brand/GUIDELINES.md asks of it -- emphasis on one element, not coverage.

The gradient is painted with `background-clip: text` on the inline span, so it
runs true left-to-right across exactly those words: fuchsia at the left edge of
"Cracking", azure at the right edge of "open". No glyph measurement needed.

The light ground is a very light cool neutral rather than pure white, because
LinkedIn's own page background is white and a white cover has no visible edge.

Canvas is LinkedIn's current Page cover spec: 1512x256, where the stated
minimum and recommended sizes are the same. The 3024x512 export is a 2x copy
for retina displays; LinkedIn resamples it and both sit far under the 3MB cap.

Requirements: Python 3.9+ (stdlib only) and Google Chrome. Set CHROME to
override the browser path.
"""
import base64
import os
import pathlib
import shutil
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parents[2]
FONT = ROOT / "brand" / "typography" / "InfraExtraBold.otf"
OUT_DIR = ROOT / "social"

W, H = 1512, 256

# brand/GUIDELINES.md
FUCHSIA, PERI, AZURE = "#B875B1", "#838CC1", "#4EA3D1"

HEAD_GRADIENT = "Cracking open"
HEAD_REST = "’s black box"
HEAD_MID = " AI"          # kept plain so the gradient stops after "open"

SIZE = 60
TRACKING = "-0.015em"
OPTICAL_NUDGE = -2        # px; see the comment on h1 in html()

VARIANTS = {
    "light": {"bg": "#F3F4F8", "ink": "#3F414A"},
    "dark": {"bg": "#0F172A", "ink": "#FFFFFF"},
}

CHROME_CANDIDATES = [
    os.environ.get("CHROME", ""),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "google-chrome",
    "chromium",
]


def find_chrome() -> str:
    for c in CHROME_CANDIDATES:
        if not c:
            continue
        if os.path.isfile(c) and os.access(c, os.X_OK):
            return c
        found = shutil.which(c)
        if found:
            return found
    sys.exit(
        "Could not find Google Chrome. Install it, or set CHROME=/path/to/chrome"
    )


def html(variant: str) -> str:
    v = VARIANTS[variant]
    font_b64 = base64.b64encode(FONT.read_bytes()).decode("ascii")
    return f"""<!doctype html>
<html><head><meta charset="utf-8"><style>
@font-face{{
  font-family:'Infra';
  src:url(data:font/otf;base64,{font_b64}) format('opentype');
  font-weight:800;font-style:normal;font-display:block;
}}
*{{margin:0;padding:0;}}
html,body{{width:{W}px;height:{H}px;overflow:hidden;background:{v['bg']};}}
.wrap{{display:flex;align-items:center;justify-content:center;
       width:{W}px;height:{H}px;}}
/* Flexbox centres the line box, which reserves room for descenders and so
   parks the visible text slightly low. The nudge centres on cap height
   instead, and matches the asset published on the LinkedIn Page. */
h1{{font-family:'Infra',sans-serif;font-weight:800;font-size:{SIZE}px;
    line-height:1;letter-spacing:{TRACKING};color:{v['ink']};
    white-space:nowrap;-webkit-font-smoothing:antialiased;
    transform:translateY({OPTICAL_NUDGE}px);}}
.grad{{
  background-image:linear-gradient(to right,
    {FUCHSIA} 0%, {PERI} 50%, {AZURE} 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
}}
</style></head>
<body><div class="wrap">
<h1><span class="grad">{HEAD_GRADIENT}</span>{HEAD_MID}{HEAD_REST}</h1>
</div></body></html>"""


def render(chrome: str, page: pathlib.Path, out: pathlib.Path, scale: int):
    out.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as profile:
        subprocess.run(
            [
                chrome, "--headless", "--disable-gpu", "--no-sandbox",
                "--hide-scrollbars", f"--user-data-dir={profile}",
                f"--force-device-scale-factor={scale}",
                "--virtual-time-budget=4000",
                f"--screenshot={out}", f"--window-size={W},{H}",
                page.as_uri(),
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    if not out.exists():
        sys.exit(f"Chrome did not write {out}")


def main():
    if not FONT.exists():
        sys.exit(f"Missing {FONT.relative_to(ROOT)}")
    chrome = find_chrome()

    with tempfile.TemporaryDirectory() as tmp:
        for variant in VARIANTS:
            page = pathlib.Path(tmp) / f"{variant}.html"
            page.write_text(html(variant), encoding="utf-8")
            for scale in (1, 2):
                name = (f"ndif-linkedin-banner-{variant}-"
                        f"{W * scale}.png")
                out = OUT_DIR / name
                render(chrome, page, out, scale)
                print(f"  {name}  {W * scale}x{H * scale}  "
                      f"{out.stat().st_size // 1024}KB")


if __name__ == "__main__":
    main()
