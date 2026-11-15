# F758 WebGPU Camera Optical Flow Boids Portal Mind

**Ledger ID**: F-758 (frontier series)

**Slug**: webgpu-camera-optical-flow-boids-mind

**Date**: 2026-11-14

## Concept
The live camera feed is downsampled and processed by a WebGPU compute shader (Canvas2D fallback) to extract a dense optical-flow vector field via multi-scale frame differencing and local gradient estimation. This flow field becomes an external wind force in a parallel boid simulation also running in compute (or JS). Boids flock, align, and ride the flow. High-density clusters spawn or attract floating hybrid DOM portals that render local flow arrows, magnitude, and boid count. A tiny local online MLP (pure JS, 8-16 weights) takes aggregate flow statistics and boid variance as input and modulates cohesion/separation strengths; user clicks on portals supply reward for Hebbian-style weight updates. Seal persists MLP weights + flow stats snapshot to IndexedDB. Offline-capable single file.

## Novelty
Leaves the dominant recent cluster of utility calculators (sleep-cycle F757, SSH key F752, encryptor F751, business-card F753, camera-palette F754) and residual spatial kernels (SPH buoyancy F755, OPFS genetic terrain F756, LBM, spiking, expression trees, softbody, NCA, spectral residuals). Core novel combination is previously unused camera-derived optical-flow kernel as the primary causal field driving a boid agent simulation, with living DOM portals as cluster embodiments under local online MLP adaptation and reward-gated sealed genome transfer. Not pointer residual, not orientation MLP on particles, not spectral audio, not continuum physics, not genetic terrain.

## Architecture
- Single index.html, pure HTML/CSS/JS, no external deps.
- getUserMedia → video → offscreen canvas for frames.
- WebGPU compute path attempted for flow + boids; graceful Canvas2D + JS boids fallback.
- 40–80 boids.
- 3–6 absolute-positioned DOM portals bound to cluster centroids.
- Tiny MLP: input [meanFlowX, meanFlowY, flowMag, boidVar]; output [cohesion, separation]; reward on portal click.
- IndexedDB key `f758-optical-flow-boids`.
- Seal button + status chrome.

## Mechanics
1. User grants camera; frames processed at ~15 Hz.
2. Flow field computed; boids update under flocking + flow force.
3. Clusters detected (simple spatial hash); portals move to centroids, show arrow.
4. Click portal → reward → update MLP weights.
5. Seal → store weights + recent flow mean to IndexedDB; reload restores.

## Expected outcome
Point camera at motion: boids stream with the flow, form groups, portals chase them and display vectors. Click interesting clusters to train the mind; seal and reload to keep the adapted behavior. Spatial, interactive, local-AI, camera-native.

## Failure modes
- Camera permission denied: show message, run on static noise fallback.
- No WebGPU: Canvas2D + JS path still fully interactive.
- Low light / static scene: flow near zero, boids pure flock (still works).
- IndexedDB quota: ignore persist.

## Building blocks
Reusable camera optical-flow extractor, flow-driven boid kernel, cluster-to-DOM portal binder, online MLP reward adapter. Expands frontier for vision-based causal fields on the Verse canvas.

Void is now Verse everywhere.

**Files**: drafts/F758-webgpu-camera-optical-flow-boids-mind/SPEC.md, drafts/F758-webgpu-camera-optical-flow-boids-mind/index.html
