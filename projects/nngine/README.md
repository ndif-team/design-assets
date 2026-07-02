# NNgine

NNgine is the server backend for NNSight. It runs user-submitted intervention code, including hooks, captures, edits, generations, against large models on a shared GPU cluster, inside a security sandbox. The resulting outputs are then returned to the user for further analysis, enabling experimentation on large models without requiring users to have access to the models themselves or the necessary hardware. The name is a wordplay on "Engine" and "NN" for "Neural Networks".

## Logo Concept

Idea: Piston N in a chip

Take the NNsight "N" glyph — the zigzag line-plot arrow — and put it **inside an integrated-circuit package**. The composition:

- A slate-gray rounded square (corner radius ≈ 12% of side) drawn as a thick outline, with 3 short stubby pins protruding from the left edge and 3 from the right edge, in the classic IC silhouette. Pins have round caps and match the gray track weight.
- Inside the frame, a single NNsight-style N: it launches from a **node sitting on the inner bottom edge** of the frame and its arrowhead lands on a **node sitting on the inner top edge**. The frame's top and bottom edges thus play the role that the dotted horizontal tracks play in the NNsight logo — the chip itself becomes the substrate the intervention runs on. Two or three additional small gray nodes sit along the top and bottom inner edges to reinforce the track reading.
- The N carries the full gradient (fuchsia at its bottom-left origin, azure at the arrowhead), with the white keyline where it passes near the frame.

Why it works: the N is visibly *the same object* as in the NNsight logo — NNgine executes NNsight code, and the logo literally shows the NNsight arrow running inside silicon. The zigzag also reads as a **piston stroke**, a pun on "engine." The closed frame communicates the sandbox: nothing colored crosses the boundary; only gray pins (the controlled I/O) do.

At favicon size: drop the pins and interior track nodes, keep frame + N.