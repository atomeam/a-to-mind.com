Plain name: Spiking neural field sculptor
Job: Paint stimuli with your pointer (or tilt the device) onto a living 2D field of leaky integrate-and-fire spiking neurons simulated on WebGPU; a local tiny MLP adapts the coupling strengths online from recent spike rates; watch the emergent wave and avalanche patterns; seal downloads the current weight matrix + a PNG snapshot of the spike density.
Input: Pointer drag or click to inject current; optional device orientation to bias the field; click "Reward" on high-activity regions; Seal button.
Keeps: Download JSON of the adapted weights, spike statistics and a PNG of the density field; IndexedDB restores the last sealed weights on reload; works offline after first load.
Not on Verse yet: checked against recent F- (n-body Elman F649, Gray-Scott orientation MLP F648, implicit SDF F594, practical utilities F650) — no discrete spiking neural field on WebGPU compute with online local MLP weight adaptation and sealed genome export.

**Concept**
A novel hybrid spatial interface for The Verse canvas: a 64×64 (or 128×128 fallback) grid of leaky integrate-and-fire (LIF) spiking neurons whose membrane potentials and binary spikes are updated in a WebGPU compute shader. Local connectivity is governed by a small set of learnable coupling parameters that a pure-JS tiny MLP (input: local spike-rate histogram + pointer velocity; hidden 4; output: Δweights) updates online every few frames. Pointer events inject excitatory current; device tilt (or synthetic) biases a global drive. Emergent traveling waves, synchrony and avalanches appear. High-activity regions can be rewarded to bias the MLP. The best weight set is sealed (simple hash) and persisted. Fully self-contained, offline after load, Canvas2D particle/spike fallback if WebGPU unavailable.

**Novelty**
Branches away from the dominant recent cluster of continuum reaction-diffusion / fluid / n-body kernels (F648 Gray-Scott, F644 LBM, F649 n-body), feed-forward or Elman controllers on particles/DOM, and practical offline utilities. Core novel combination is discrete-time spiking neural field (LIF dynamics + refractory) executed as a WebGPU compute kernel (not continuous field, not particle agents, not NCA, not lattice-gas), a local online MLP that adapts the synaptic coupling parameters from observed spike statistics (Hebbian-inspired but MLP-mediated), spatial pointer/tilt stimulus injection, and sealed weight-matrix genome export with PNG density snapshot. Not residual predictors, attention, reservoirs, orientation RNNs, softbody, or pure evolutionary genomes.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS + WebGPU:
- WebGPU compute pipeline: storage buffers for V (membrane), S (spike), W (coupling params). Shader implements LIF step: dV/dt = -V/τ + I_syn + I_stim; spike if V>θ, reset, refractory.
- JS side: tiny MLP (manual forward, simple reward-modulated update), pointer/orientation event handlers, IndexedDB 'verse-f651'.
- Canvas for visualization of spike density or membrane heatmap (or DOM overlay for a few "portal" cells).
- Fallback: pure JS loop over smaller grid on Canvas2D.
- Seal: serialize weights + stats to JSON download; optional canvas.toBlob PNG.

**Expected outcome**
Runnable prototype. Painting with the pointer produces propagating spike waves that evolve as the MLP adapts coupling; rewarding regions biases future patterns; Seal downloads valid JSON + PNG; reload restores weights. Works offline. Graceful fallback without WebGPU.

**Mechanics**
1. Init random or loaded weights; allocate WebGPU buffers.
2. Each frame: map pointer/tilt to stimulus texture or buffer → dispatch compute LIF step → read back spike counts for MLP input → MLP predicts ΔW → apply small update → render density to canvas.
3. On reward click: boost MLP learning rate or target.
4. Seal: download JSON {weights, stats, hash} and PNG.

**Failure modes**
WebGPU not supported: falls back to slower JS grid. Large grid may drop frames on low-end devices. Orientation permission denied: pointer-only. IndexedDB quota: still runs, just no persist.

**Files**
drafts/F651-webgpu-spiking-neural-field-mind/SPEC.md
drafts/F651-webgpu-spiking-neural-field-mind/index.html

**V01D landing**
Spiking field sculptor skill under void-live-deploy/skills/webgpu-spiking-neural-field-mind.js; test asserts synthetic stimulus increases local spike rate, MLP weight change after reward, seal JSON contains weights key.

Void is now Verse everywhere.
