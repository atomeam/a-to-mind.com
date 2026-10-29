# F-313 WebGPU NCA Spatial Memory Mind

## Concept
Neural Cellular Automata (NCA) evolved on a WebGPU compute grid. A local Web Worker hill-climbs a reaction bias from field energy and interaction statistics. User pointer deposits seeds that propagate through the NCA. Field energy and orientation morph page chrome via CSS variables. Floating DOM probes sample the field and can seal a pattern fragment to IndexedDB. Progressive fallbacks for non-WebGPU browsers.

Not a variation of prior lattice/attention/residual/agent experiments: the core is a GPU-resident NCA update kernel whose parameters are adapted by a worker residual-style hill-climb, with explicit spatial memory seals and probe embodiment.

## Architecture
- Single index.html
- WebGPU compute shader (8×8 workgroups) on 128×128 float grid, double-buffered storage
- Blob Worker for 1 Hz adaptation of reaction bias
- CSS custom properties driven by energy / orientation
- IndexedDB seal of pattern snapshots
- Pointer + DeviceOrientation input

## Expected outcome
Interactive spatial NCA field that grows, decays, and reorganizes under gesture and tilt. Page chrome warps with field energy. Probes appear at deposits and can be sealed. Runnable offline; WebGPU preferred, Canvas2D fallback.

## Mechanics
seed deposit → neighbor diffusion + sinusoidal reaction modulated by worker bias → energy estimate → CSS morph + probe spawn → optional IndexedDB seal.

## Failure modes
No WebGPU → Canvas2D clear only; Worker blocked → static bias; no orientation permission → no tilt hue; IndexedDB unavailable → seal status only.

## Building blocks for next
True WebGPU NCA with learned kernels (MLP in compute), multi-layer residual state, WebXR plane projection of the grid texture, sealed pattern replay as seed texture.
