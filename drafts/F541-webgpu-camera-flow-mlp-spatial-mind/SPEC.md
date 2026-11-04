# F541 WebGPU Camera-Flow MLP Spatial Mind

## Concept
Novel combination for The Verse canvas: Opt-in getUserMedia camera provides a live low-resolution luminance field. Simple frame-differencing estimates optical flow. A tiny local MLP (CPU, ~40 weights) maps flow statistics (magnitude bins, direction histogram) + pointer velocity to particle force scales, emission rates, and spatial attraction. A Canvas2D (WebGPU compute extension point) particle system is advected by the projected flow field. Absolute-positioned DOM cards track and morph toward high-flow regions projected from the camera view onto the canvas, embodying real-world motion as a spatial Verse field. Fitness = particle density on high-flow zones + card tracking error inverse. Seal persists MLP weights to IndexedDB with FNV-like hash; BroadcastChannel enables cross-tab adoption of higher-fitness genomes. Offline after permission grant. Deliberately leaves recent clusters of orientation-MLP lattices, SPH/fluids, self-attention particles, WebXR tendrils, residual walks, and pure pointer fields. Camera input is unused in prior F drafts.

## Novelty
First use of live camera optical-flow as primary causal input to a local MLP that steers a spatial particle field and DOM card embodiment. Combines real-world visual motion capture, local evolutionary policy, GPU-ready particle advection, and sealed genome transfer in a way not previously attempted.

## Architecture
- Single `index.html` (no external dependencies)
- Camera: getUserMedia video → offscreen canvas for 32x24 luminance sampling; frame difference for flow mag/dir.
- MLP: 12 inputs (flow bins, pointer, entropy) → 8 hidden → 4 outputs (force, viscosity, emit, card bias). Online fitness from density + tracking.
- Particles: ~800 points advected by interpolated flow + MLP forces; rendered as trails.
- DOM: 4 absolute cards; each frame their position lerps toward projected high-flow centroids; scale/hue by local flow.
- IndexedDB `f541-camera-flow-mlp`; BroadcastChannel `f541-genome` (hash must match before adopt).
- Fallback: synthetic mouse-driven flow if camera denied; Canvas2D always; WebGPU probe for future compute path.

## Expected outcome
Runnable prototype in which granting camera permission makes particles swarm and DOM cards drift toward areas of real-world motion (hand waves, objects); MLP adapts force response; Seal transfers a high-fitness flow-response policy across tabs. Immediate visual feedback; works offline after first load.

## Mechanics
1. Initialize random particles + random MLP weights; load from IndexedDB if present.
2. Button requests camera; on success, sample frames for flow.
3. Each frame: compute flow stats, forward MLP, advect particles, update card positions/styles, render.
4. Compute fitness; Seal writes weights + hash + fitness.
5. On receive: verify seal hash → adopt if fitness higher.

## Files
- drafts/F541-webgpu-camera-flow-mlp-spatial-mind/SPEC.md
- drafts/F541-webgpu-camera-flow-mlp-spatial-mind/index.html

## V01D landing
Camera-flow MLP spatial stage under `void-live-deploy/skills/webgpu-camera-flow-mlp.js`; test asserts camera frame difference → MLP → particle advection + card tracking and BroadcastChannel sealed genome adoption.
