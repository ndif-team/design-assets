# INIF

INIF, The INterpretability Interchange Format, is a JSON-based format for tokenized LLM generation traces with support for contiguous token annotations, position selection, and efficient storage of interpretability outputs, designed as the interchange layer between generation and evaluation frameworks and interpretability tools in the NDIF ecosystem to support reproducible results and experimentation.

## Logo Concept

The two most recognizable objects in this domain, combined: JSON braces and a tokenizer's colored token strip — with interpretability rising through the data.

- Center: **three rows of rounded-rectangle token chips of varied widths**, tightly spaced with small gaps, all painted by **one continuous left-to-right gradient** (fuchsia → periwinkle → azure) so the color of each chip is set by its position — the sequence *is* the gradient. Anyone who has used a tokenizer playground will recognize the object instantly; the varied widths and stacked rows read as real tokenized samples rather than a striped bar. Chips are solid fills, no strokes.
- Flanking the block: **tall slate curly braces `{ }`**, drawn as thin round-capped strokes slightly taller than the chip stack. They say "JSON" without a single letter.
- Through the middle: chips are omitted to leave a **staircase-shaped void across all three rows**, and inside it rises a **full-height N-shaped gradient arrow** — the family's rise–dip–rise letterform with the rounded triangular arrowhead, fuchsia at its foot and azure at the tip. It is the format's initial and the interpretability signal climbing through the tokenized data, fully enclosed by the chips but never touching them (clear gaps on all sides, per the brand keyline rule).
- Monochrome variants keep the same gaps as the color mark (single-color paints).

At favicon size: the N-arrow with one or two flanking chips — the full three-row block is too dense to stay legible small.