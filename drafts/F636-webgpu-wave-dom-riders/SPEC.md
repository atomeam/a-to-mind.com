# F636 WebGPU Wave Equation DOM Riders

Plain name: Wave riders
Job: Tilt your device or move the pointer; a local evolutionary policy modulates a WebGPU wave equation height field while floating DOM cards ride the crests, compete for fitness, and transfer sealed genomes; seal saves the best policy and field state.

## Concept
A previously unused WebGPU compute kernel solves a discrete 2D wave equation on a height field (second-order central differences, damping, reflective boundaries). A local evolutionary algorithm maintains a small population of parameter genomes (wave speed, damping, source amplitude, frequency bias). DeviceOrientation (beta/gamma) and pointer velocity serve as causal inputs that bias selection and mutation. High-amplitude cells spawn or attract absolute-positioned DOM rider cards that physically track wave crests via CSS transforms. Clicking a rider injects a reward that increases fitness of the current genome. Multi-agent competition: riders with higher sustained proximity or amplitude trigger sealed genome fragment transfer over BroadcastChannel. Best genome + field snapshot persist in IndexedDB. Canvas2D fallback if WebGPU unavailable. Fully offline single-file.

## Novelty
Leaves the dominant recent cluster of practical utility tools (teleprompters, scoreboards, rotas, estimators — F631–F635) and sensor-driven neural policies on DOM constraints or intent fields (F630 WebXR hand MLP constraints, F629 orientation RNN WebGPU fields). Core novel combination is an unused wave-equation kernel as the spatial substrate, a non-neural evolutionary policy (mutation/selection on parameter vectors, not MLP/RNN/SOM/Hopfield) driven by DeviceOrientation + pointer as causal input, hybrid embodiment of living DOM cards as physical riders on the continuum field, and proximity/amplitude-gated sealed genome transfer over BroadcastChannel + IndexedDB. Not residual predictors, not attention lattices, not pure NCA, not spectral residuals, not softbody springs, not k-means particles, not orientation RNNs, not hand-tracked constraints.

## Architecture
- Single index.html.
- WebGPU compute shader: ping-pong storage buffers for height and velocity; update kernel for wave step; render as texture or via canvas.
- Local EA: population of 8 genomes (4–6 floats each); tournament selection + mutation each ~30 frames; fitness = sum of rider amplitudes + click rewards.
- 6–8 absolute DOM rider cards positioned by sampling high |height| locations or tracking peaks.
- Sensors: DeviceOrientationEvent or pointermove; normalized deltas feed bias into selection.
- BroadcastChannel 'f636-genome'; IndexedDB 'verse-f636'.
- Seal button persists best genome.

## Expected outcome
Runnable prototype where tilting or moving creates propagating waves that DOM cards ride; evolutionary policy adapts parameters to user motion style; high-fitness riders visibly transfer genomes (hue or scale shift); Seal + reload restores. Offline-capable. Progressive WebGPU/Canvas2D fallback.

## Mechanics
1. Initialize random population or load from IDB; spawn riders.
2. Each frame: sample sensors; bias EA; step wave equation (WebGPU or JS); position riders on crests; update CSS.
3. On fitness threshold, hash genome prefix, post to channel, accept incoming if better.
4. Click rider: reward current genome, inject source into field.
5. Seal persists.

## Failure modes
- No WebGPU: Canvas2D JS wave step remains interactive.
- Orientation permission denied: pointer-only, noted.
- IndexedDB blocked: session-only.
- Low FPS: reduce grid size (64x64) or rider count.

## Files
drafts/F636-webgpu-wave-dom-riders/SPEC.md
drafts/F636-webgpu-wave-dom-riders/index.html

## V01D landing
Wave-equation DOM rider skill under void-live-deploy/skills/webgpu-wave-dom-riders.js; test asserts pointer motion produces wave propagation and rider displacement, genome post on high fitness, reload restores at least one parameter.

## Frontier Engine F-636
Architecture: Local evolutionary policy on DeviceOrientation + pointer → WebGPU discrete wave equation height field → living DOM rider embodiment with fitness-gated sealed genome transfer + IndexedDB persistence.
Expected outcome: interactive spatial wave field whose parameters evolve under user motion and whose crests carry competing DOM agents that can be sealed and shared.
Mechanics: online EA selection/mutation, WebGPU wave kernel, DOM-field coupling, BroadcastChannel genome exchange.
