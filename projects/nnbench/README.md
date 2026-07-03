# NNBench

NNBench is a systems performance + coverage benchmark for interpretability workloads run through NNsight across serving backends. nnsight's promise is "write one intervention, run it on any backend" (HuggingFace, vLLM, NDIF). NNBench measures where that actually holds — which interpretability workloads run, error loudly, silently produce wrong numbers, or merely run degraded — and how fast — across HF vs vLLM.

### Logo Concept

A semicircular speedometer dial: silver tick marks inside the arc (with a small gap off the arc, their outer endings cut flat to follow the dial's curvature, including one tick at each end of the arc on the baseline), the arc itself stroked with the gradient (fuchsia at the left/slow end, azure at the right/fast end), and the needle replaced by a **compact NNsight N-arrow in slate** rising from a round pivot dot (the gradient stays on the arc; the needle is an active gray prop per the brand palette) pointing to the upper right. The tick at the needle's slot is shortened to the portion left visible beside the arrowhead. Emphasizes the "speed" component of benchmarking.

An alternate variant (`nnbench-logo-alt-color.svg`) swaps the emphasis: slate-gray dial, with the needle and pivot carrying the gradient (fuchsia pivot → azure arrowhead).