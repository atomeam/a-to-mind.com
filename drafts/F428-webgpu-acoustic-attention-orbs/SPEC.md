# F-233 WebGPU Acoustic Spatial Attention Lattice with Morphing Probe Orbs

**Concept:** A diffusing spatial lattice whose local update incorporates a simplified multi-head attention bias. Global acoustic energy and spectral centroid (AnalyserNode) plus device orientation inject real-time bias into the attention weights. High-attention peaks manifest as floating DOM probe orbs whose size, position, and blur track field energy. Page chrome (hue, brightness, blur) morphs continuously with energy, entropy, and residual. Pointer deposits causal energy. Optional seal to localStorage. Designed for progressive enhancement toward a true WebGPU compute kernel.

**Branch from:** F-229 WebGPU Causal Attention Probes, F-225 Acoustic Causal Lattice, F-190 causal memory field, F-021 orientation density. Explicitly adds acoustic spectral bias into the attention mechanism itself and embodied probe orbs as field queries, rather than pure residual predictors or orientation-only density.

**Novel combination:** Acoustic spectral + orientation bias driving spatial attention lattice + embodied morphing DOM probes + chrome morph from entropy/residual. Local-only, offline after load.

**Architecture:** Single index.html. Main-thread Canvas2D field (128×72) with neighborhood average + attention-style bias. AnalyserNode for audio. DeviceOrientationEvent. DOM orbs positioned at peaks. CSS custom properties for morph. localStorage seal on 's'.

**Expected outcome:** Grant mic; speak or move device — field brightens and orbs cluster toward energy. Drag/click deposits trails. Entropy increases with activity; chrome shifts hue. Runnable without WebGPU (Canvas fallback). Fully local.

**Failure modes:** Mic denied (pointer-only), orientation unsupported (no tilt bias), low-end device (smaller grid), localStorage blocked (no persist).

**Building blocks:** Acoustic-biased spatial attention, peak-embodied DOM probes, entropy-driven chrome. Next: move the lattice step into a WebGPU compute shader with true multi-head attention, or add WebXR for spatial projection of the orbs.

**V01D landing:** spatial acoustic skill under void-live-deploy/skills/; test via energy→orb stability and seal round-trip.

_Renumbered on 2026-10-29: this draft was F233-webgpu-acoustic-attention-orbs (F-233), a number it shared with F233-panel-play. Its number is now F-428; see drafts/NUMBERS.md._
