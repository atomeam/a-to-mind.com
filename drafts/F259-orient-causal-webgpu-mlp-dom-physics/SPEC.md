# F259: Orientation-Causal WebGPU MLP Softbody DOM Physics

## Concept
DeviceOrientation (or keyboard fallback) injects causal gravitational/wind forces into a softbody particle system. A tiny local MLP (4-4-2) observes orientation + velocity statistics and emits stabilizer forces that evolve the structure. Hybrid embodiment: Canvas2D (WebGPU init optional) renders the field; four DOM orbs can be dragged to pull particles. State (particles + MLP weights) persists in IndexedDB.

## Why this branch
Last 8 drafts clustered around WebGPU attention/residual/volumetric/NCA lattices, spatial morph UI, WebXR hand/gaze arenas, and sealed genome competitions. This deliberately leaves that cluster for:
- DeviceOrientation as primary causal input (under-explored axis)
- Pure physics (softbody springs) rather than neural field evolution
- Local MLP as controller, not residual predictor or attention kernel
- Hybrid DOM+canvas without volumetric injection
- IndexedDB persistence of evolved controller

## Interaction
- Tilt device (or arrow keys) to apply forces.
- Drag the four blue DOM orbs to attract particles.
- Reset / Save / Load buttons exercise IndexedDB.
- Offline-capable; no network required after load.

## Failure modes noted
- WebGPU path is init-only; physics remains CPU for reliability across devices.
- Softbody is nearest-neighbor springs only (no full SPH).
- MLP is not trained online in this prototype (weights can be manually evolved or loaded).

## Files
- index.html (self-contained, runnable)
