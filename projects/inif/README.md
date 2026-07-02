# INIF

INIF, The INterpretability Interchange Format, is a JSON-based format for tokenized LLM generation traces with support for contiguous token annotations, position selection, and efficient storage of interpretability outputs, designed as the interchange layer between generation and evaluation frameworks and interpretability tools in the NDIF ecosystem to support reproducible results and experimentation.

## Logo Concept

The two most recognizable objects in this domain, combined: JSON braces and a tokenizer's colored token strip.

- Center: a horizontal row of **five rounded-rectangle token chips**, tightly spaced with small gaps, filled with discrete steps of the gradient left to right (fuchsia → orchid → periwinkle → steel → azure). Anyone who has used a tokenizer playground will recognize the object instantly, and the brand gradient maps perfectly onto it — the sequence *is* the gradient. Chips are solid fills, no strokes, corner radius ≈ 25% of chip height. Slightly varied chip widths (e.g., wide, narrow, medium, narrow, wide) so it reads as real tokenization rather than a striped bar.
- Flanking the row: **large slate curly braces `{ }`**, drawn in the family's heavy round-capped stroke, at ~1.6× the height of the token strip. They say "JSON" without a single letter.
- Below the strip: a **slate annotation bracket** (a thin square bracket lying flat, or a rounded underline with short upturned ends) spanning chips 2–4, with one small node at its midpoint — this is the "contiguous token annotation," the format's distinctive feature, drawn as linguists and interp researchers actually draw span annotations.
- Optional interchange cue if the mark needs more motion: two small slate chevrons (‹ ›) just outside the braces pointing outward, suggesting data flowing in and out. Recommend trying the mark without them first; the braces may be enough.

At favicon size: token chips only — the five-step gradient strip is self-sufficient and extremely legible small.