# F520 WebGPU Sandpile Self-Organized Criticality Mind

## Concept
Novel WebGPU compute kernel implementing a parallelized Abelian sandpile automaton (self-organized criticality). Local grains are added via pointer; when local height exceeds a threshold, cells topple and distribute to four neighbors, producing avalanches. A tiny local MLP (JS-side weights) modulates the toppling threshold based on a simple bias evolved by user button, creating a hybrid local-AI + compute-shader embodiment.

This deliberately branches from recent clusters of attention lattices, residual predictors, pure NCA/Gray-Scott, spectral/audio residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles, and standard fluid/wave/particle policies. Sandpile SOC is an unused kernel: discrete toppling rules leading to power-law avalanche statistics, not continuous PDE or neural lattice.

## Implementation
- Single-file index.html, offline-capable (no network after load).
- WebGPU compute shader (workgroup 8x8) performs one topple step per frame; double-buffer height/next.
- Render pass visualizes height as cyan intensity.
- Pointer drag injects grains; buttons for reset, random inject pulse, MLP weight mutation.
- MLP is 16-float random weights; evolve button mutates them, affecting threshold via uniform.

## Failure modes / notes
- Parallel toppling has race conditions on neighbor writes (true sandpile needs careful ordering or multi-pass relaxation). Avalanches are approximate but visually emergent.
- No full statistics (avalanche size histogram) computed yet; extension point.
- WebGPU required; graceful status message otherwise.
- Threshold modulation is minimal (bias only); full MLP forward pass could be moved to compute later.

## Next building blocks
- Sealed genome (crypto.subtle hash of MLP weights) transferable via BroadcastChannel for multi-tab competition.
- IndexedDB persistence of equilibrium height field.
- DeviceOrientation as global tilt bias on gravity-like preferred topple direction.
- Combine with WebXR gaze as injection cursor.

Dominant prior cluster branched from: WebGPU+MLP/RNN policy DOM/particle simulations and multi-agent (F512–F519).
