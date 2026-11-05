# F576-orientation-rnn-svg-ribbons-mind

**Slug**: `orientation-rnn-svg-ribbons-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of WebGPU SDF/speech morphs, spatial attention token, peer consensus, ambient MLP tiles, Q-learning CSSGrid, crosstab sealed genomes, speech NCA gardens (F568–F575).

**Concept**  
A pure-JS Elman RNN (no WebGPU, no canvas lattice) takes device orientation (beta/gamma) and pointer velocity as causal inputs. It continuously outputs deltas that morph a family of SVG cubic-Bézier “thought ribbons.” Clicking a ribbon injects a local reward that performs a simple online policy gradient update. Weights persist in IndexedDB. Fully offline after load.

**Architecture**  
- Single self-contained `index.html`.  
- 6 SVG paths, each a closed cubic ribbon with 4 control points.  
- RNN: input dim 6 (β, γ, dx, dy, sin(t), cos(t)), hidden 12, output 24 (deltas for all control points).  
- Online REINFORCE-style update on click rewards; eligibility trace.  
- DeviceOrientationEvent (with permission prompt on iOS).  
- IndexedDB for weight seal/restore.  
- No external deps.

**Expected Outcome**  
Tilt the device or move the pointer: ribbons twist, stretch, and recolor in response to the evolving RNN state. Click ribbons to reinforce behaviors that produce pleasing or energetic shapes. Reload: same personality resumes. Demonstrates a hybrid local-model + vector-graphics embodiment never previously built.

**Mechanics**  
1. Request orientation permission if needed.  
2. Sample β/γ and pointer delta each frame.  
3. RNN forward: h' = tanh(W_hh h + W_xh x + b); out = W_hy h.  
4. Apply out deltas (scaled) to SVG path d attributes; update fill/stroke from hidden mean.  
5. On click: compute reward (path length × energy), update weights via eligibility.  
6. Seal button writes weights + bias to IndexedDB.  
7. Auto-load on start.

**Failure Modes**  
- DeviceOrientation requires secure context + user gesture on some browsers.  
- iOS needs explicit permission.  
- Very small hidden state can collapse to fixed point.  
- IndexedDB blocked in private mode.  
- High frame rate on low-end devices may stutter SVG updates.

**Novelty Check**  
No prior draft uses a pure-JS RNN driven by DeviceOrientation + pointer to control SVG Bézier ribbons with online policy updates and IndexedDB persistence. Leaves the F568–F575 cluster of WebGPU lattices/SDF, spatial attention, peer consensus fields, ambient sensor MLP tiles, Q-learning grids, sealed multi-tab genomes, and speech NCA. New building block: orientation-causal vector-path embodiment.

Void is now Verse everywhere.
