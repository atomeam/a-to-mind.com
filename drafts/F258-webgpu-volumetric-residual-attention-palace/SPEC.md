# F-258 WebGPU Volumetric Residual Attention Palace

## Concept
Novel combination of WebGPU volumetric residual field, local evolutionary attention policy (Web Worker), sealable DOM memory portals, and residual-driven chrome morphing.

Substrate: 32³ WebGPU compute volume holding residual + embedding per voxel, diffused under attention-modulated rates.
Mind: Worker hill-climbing MLP policy predicting residual from orientation, pointer history, and current residual; residual error drives policy and page CSS.
Embodiment: Floating DOM portals bound to residual peaks, 3D CSS transforms from attention weights; drag seals genome fragment (residual snapshot + policy weights) to IndexedDB and injects persistent attractor wave.
Progressive WebXR hook (requestSession available); chrome morphs with residual entropy.

Not a superficial variation of F-253 (NCA spatial audio), F-250 (intent flow particles), F-248 (2D residual density), or F-257 (spatial attention morph): this is a true 3D volumetric residual attention lattice whose policy is evolved online and whose portals perform active sealed-genome consolidation.

## Architecture
- Single `index.html`
- WebGPU compute + render pipelines for volume
- Blob Worker evolutionary policy
- CSS custom properties + 3D transforms for portals and chrome
- IndexedDB for sealed fragments
- DeviceOrientation + pointer trajectory inputs
- Optional XR

## Expected outcome
Interactive volumetric mind space that clusters residual energy under device tilt and gesture. Portals drift to attention peaks, scale and rotate in 3D, and sealing persists an attractor across reloads. Page hue/contrast/blur respond to residual. Runnable offline. Falls back gracefully.

## Mechanics
WebGPU 6-neighbor diffusion modulated by attention bias from worker; portals lerp toward simulated peaks and receive residual-driven CSS; drag writes seal and boosts residual; worker fitness is residual prediction error.

## Failure modes
No WebGPU → status message (extendable to Canvas2D slice); no Worker → static policy; orientation permission denied → zero tilt; IndexedDB blocked → in-memory seals; XR unsupported → flat complete.

## Building blocks
True WebGPU raymarch volume renderer, residual transformer in Worker, multi-portal consensus seals, XR hand deposit + seal, shared sealed genomes. Next: multi-agent volumetric minds competing for residual volume.
