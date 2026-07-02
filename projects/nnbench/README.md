# NNBench

NNBench is a systems performance + coverage benchmark for interpretability workloads run through NNsight across serving backends. nnsight's promise is "write one intervention, run it on any backend" (HuggingFace, vLLM, NDIF). NNBench measures where that actually holds — which interpretability workloads run, error loudly, silently produce wrong numbers, or merely run degraded — and how fast — across HF vs vLLM.

### Logo Concept

A semicircular speedometer dial: light-gray tick marks inside the arc (with a small gap off the arc), the arc itself stroked with the gradient (fuchsia at the left/slow end, azure at the right/fast end), and the needle replaced by a **compact NNsight N-arrow in slate** (the gradient stays on the arc; the needle is an active gray prop per the brand palette) pointing to the upper right. The tick at the needle's slot is omitted — the needle occupies it. Emphasizes the "speed" component of benchmarking.