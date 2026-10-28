# F288 — WebGPU Reservoir Fluid Orientation Morph

## Concept
Device orientation (beta/gamma) and pointer residual (local prediction error from a tiny linear readout) are causal inputs to a local Echo State Network (reservoir computing) running in a Web Worker. The reservoir's high-dimensional state modulates a Canvas2D diffusion/particle fluid field (WebGPU compute path prepared for future spectral fluid kernel). Fluid energy hotspots attract and morph floating DOM "memory probes" that can be dragged; drop injects a corrective impulse back into the reservoir state (leak + pulse), closing a physical feedback loop. Seal persists reservoir weights + state snapshot to IndexedDB. Page chrome hue and filter morph with mean reservoir energy. Fully offline-capable after load; progressive enhancement.

Deliberately branches away from F287 (orientation MLP DOM forage + drag-merge genome), F286 (WebRTC sealed RNN orientation shared), F285 (softbody attention/genome), F284 (trajectory residual morph), F283 (WebXR gaze MLP swarm), and earlier spectral/NCA/hand/cloth clusters. Core novelty is reservoir computing (fixed random recurrent dynamics + trained readout) as the causal model, with DOM drag injecting directly into reservoir state rather than transferring genomes, and fluid diffusion as the embodied field.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Canvas2D ~60 particles with orientation-biased diffusion + reservoir-modulated viscosity/force (WebGPU note: compute shader for spectral fluid or Navier-Stokes).
- Worker: Echo State Network, reservoir size 16, sparse random W, leak rate 0.3; inputs [beta/90, gamma/90, residual, bias]; linear readout predicts next residual.
- Residual = |actual pointer delta - predicted|.
- 3 DOM memory probes: absolute, draggable, sample local energy, lerp transform/opacity; drop pulses reservoir.
- IndexedDB: seal/load weights + state.
- Offline first.

## Expected outcome
Runnable interactive prototype. Enable orientation and move pointer to drive residual; watch fluid warp and probes morph/rearrange. Drag a probe to inject impulse (reservoir state jumps). Seal/load restores dynamics. Offline-capable. Expands reservoir-computing causal models + fluid spatial fields + physical DOM-to-model feedback + sealed state building blocks.

## Mechanics
1. Orientation + pointer residual fed to Worker reservoir each frame.
2. Reservoir state → fluid viscosity scalar + particle force bias.
3. Probes sample energy density and morph; drag freezes, drop adds pulse vector to reservoir state.
4. Seal button hashes/stores reservoir W, state, recent residual stats to IndexedDB.
5. Load restores.

## Failure modes
- Orientation denied → residual + random still drive.
- No Worker → main-thread reservoir.
- No IndexedDB → in-memory only.
- No WebGPU → Canvas2D fully functional (primary path).
- Small screens → larger probe hit areas.

## Cross-reference
Avoided MLP genomes, softbody physics, residual trajectory predictors, spectral/audio primary, NCA lattices, WebXR hand/gaze, speech portals, WebRTC sharing, pure particle swarms. Novel combination of reservoir computing + orientation/residual causal + fluid diffusion field + DOM impulse injection into reservoir + sealed snapshot.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/reservoir-fluid-morph.js`; test: orientation/residual produces non-zero reservoir energy, energy morphs probe, drag injects measurable state change, seal/load restores weights.
