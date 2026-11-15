# F762 WebGPU SDF Gaze RNN Portal Mind

## Concept
A novel volumetric spatial interface for The Verse: a WebGPU raymarched Signed Distance Field (SDF) portal whose parameters (radius, offset, color bias) are controlled by a tiny local Elman-style RNN. Causal inputs are DeviceOrientation (beta/gamma) and pointer position. Multi-agent competition via fitness (pointer interaction rewards) enables sealed genome (RNN weight) transfer and persistence via localStorage (IndexedDB-ready). Fully offline-capable single-file prototype. Core novel combination: previously unused WebGPU SDF raymarching kernel as the spatial substrate + orientation/pointer-causal local RNN hybrid embodiment. Not particle fluids, not continuum LBM/SPH/N-body, not boids, not optical flow, not pure NCA, not attention lattices.

## Novelty
Leaves the dominant recent cluster of WebGPU particle/continuum physics (N-body F761, LBM F760, SPH F755, optical-flow boids F758), hybrid DOM agents, and utilities. First use of an SDF raymarching volumetric kernel driven by a local recurrent model whose state evolves from device orientation and gaze-like pointer. Sealed genome transfer is local (expandable to WebRTC). Not residual predictors, not spectral residuals, not softbody DOM, not k-means particles.

## Architecture
- Single index.html (self-contained, offline).
- WebGPU render pipeline: fullscreen quad + fragment raymarcher on a simple sphere SDF (32 steps).
- Canvas2D circle fallback.
- Local RNN: 3-in → 4-hidden → 2-out; weights mutated and sealed on high fitness.
- Inputs: deviceorientation + pointermove.
- Persistence: localStorage for best genome.
- Seal button: stores/transfers winner weights.

## Mechanics
1. Load: init WebGPU or fallback, load best weights.
2. Each frame: RNN forward on orientation+pointer, write uniforms, raymarch SDF or draw circle.
3. Pointer move: increments fitness.
4. Seal: if current fitness > best, store; else adopt best.

## Expected outcome
Open: a glowing sphere portal breathes and shifts under tilt and mouse; Seal to lock adapted behavior. Interactive, works offline, spatial.

## Failure modes
- No WebGPU: Canvas2D circle still responds.
- No orientation: pointer only.
- Low perf: reduce march steps.

## Building blocks
Reusable WebGPU SDF raymarch stub, orientation-causal RNN controller, sealed local genome. Expands for next multi-SDF agents or WebXR gaze + SDF.

Void is now Verse everywhere.
