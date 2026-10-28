# F300 — webgpu-causal-wave-portal-mind

## Concept
Multi-modal causal drivers (microphone spectral energy + pointer velocity + optional device orientation tilt) feed a WebGPU compute kernel (Canvas2D CPU fallback) running a discrete wave equation / interference field on a spatial grid. High-amplitude or high-coherence regions spawn hybrid DOM "wave portals" that display local spectral snapshots and phase. Dragging a portal injects a localized phase impulse back into the field, closing the causal loop. Coherent states can be sealed (wave snapshot + portal metadata) to IndexedDB for later replay. Fully offline after load; progressive enhancement.

## Branch away from
Speech-RNN portals (F282), attention message graphs (F298), hum-crystal music boxes (F299), residual acoustic flocks, orientation MLPs, Hebbian lattices, and pure particle agents.

## Architecture
- **Inputs**: Web Audio AnalyserNode (FFT bins → spectral centroid / energy), pointer events, DeviceOrientationEvent.
- **Compute**: WebGPU compute shader for wave update (if available); otherwise CPU grid in Worker or main thread. Simple discrete Laplacian + damping.
- **Visual**: Canvas2D particle/energy field or direct grid coloring. Hybrid DOM portals positioned over high-energy cells.
- **Feedback**: Portal drag → impulse injection into wave field + residual bias.
- **Persistence**: IndexedDB for sealed genomes (wave state + portal positions).
- **Fallback**: Always works without WebGPU, mic, or orientation (demo mode with synthetic input).

## Expected outcome
Interactive spatial mind: audio and gesture create traveling waves; portals emerge and can be manipulated to reshape the field; sealed states restore previous dynamics. Demonstrates closed-loop multi-modal causal wave computation driving embodied UI.

## Mechanics
1. Mic FFT or synthetic energy modulates source terms in the wave equation.
2. Wave field evolves; local energy above threshold spawns a portal (DOM element with spectral viz).
3. Dragging portal samples current phase and injects Gaussian impulse at its grid location.
4. Orientation tilts "gravity" or damping gradient.
5. Seal button serializes grid + portals to IDB; load restores and continues.

## V01D landing
spatial-wave-portal skill under `void-live-deploy/skills/mini/webgpu-causal-wave-portal-mind.js`. Test: inject spectral → wave amplitude rises; drag portal → visible impulse propagates; seal/load restores field.

## Building blocks for next
WebGPU wave/interference kernels, spectral causal injection, hybrid DOM portals with impulse feedback, sealed multi-modal states. Next: full WebXR hand as additional driver; multi-user sealed transfer; learned coupling parameters.