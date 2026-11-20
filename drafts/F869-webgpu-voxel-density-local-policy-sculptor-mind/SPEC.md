# F869-webgpu-voxel-density-local-policy-sculptor-mind

Plain name: Voxel Density Local Policy Sculptor
Job: Let a local policy agent and your pointer/tilt sculpt a living density volume; Verse portals embody the high-density cores and adapt when rewarded.

## Concept
A compact 3D voxel density volume (16³ grid) lives entirely in the browser. A pure-JS local policy agent (small linear map over features: orientation residual, pointer velocity history, local density gradient, time) proposes density increments or decrements at chosen voxels each step. Direct pointer clicks (or drag) immediately sculpt density at the projected location. Device orientation supplies a shared bias/gravity that the policy reads. High-density “cores” are embodied as floating absolute DOM Verse portals whose screen positions are simple orthographic projections of the core centroids, with CSS scale, hue, and blur driven by local density and agent confidence. Clicking a portal rewards the current policy (delta-rule update toward the action that produced the pleasant state). Seal persists agent weights + a compressed density snapshot to IndexedDB (and BroadcastChannel for multi-tab). Fully offline single-file prototype. WebGPU storage-buffer path prepared for larger volumes; Canvas2D projection used for immediate runnability.

## Novelty
Leaves the dominant recent clusters of 2D lattice CA/NCA/reaction-diffusion, particle MD/SPH/LBM/DEM, continuous SDF/metaball fields, causal/spatial attention, orientation RNN/ESN/MLP portals, WebXR Verlet/tendril chains, and multi-agent genome tiles. Core novel combination is an explicit volumetric voxel density structure whose evolution is closed-loop controlled by a local policy agent, with living DOM portals as projected embodiments of the density cores that both visualize and provide reward signals back to the sculptor. Not a 2D field, not implicit SDF, not particle system, not fixed rule CA.

## Architecture
- Single self-contained index.html
- Density: Float32Array 16×16×16, relaxed by light diffusion each frame
- Policy: 8-dim feature → 4 actions (dx,dy,dz, strength) via small weight matrix; updated by reward delta rule
- Portals: 5 absolute divs tracking top density clusters (simple k-means-ish or max-finding)
- Projection: orthographic with slight perspective foreshortening
- Input: pointer ray-ish hit for direct sculpt; DeviceOrientationEvent for tilt features
- Seal: IndexedDB key `verse-f869-voxel` + BroadcastChannel `f869-voxel`
- Fallbacks: no orientation → pointer residual; no IDB → sessionStorage; no WebGPU → pure JS volume

## Expected outcome
Open the page: a soft density volume appears (rendered as layered heat or point cloud). Tilt the device or move the pointer: the policy agent begins proposing and applying density changes; cores drift and portals follow, changing size and color. Click directly on the volume to sculpt. Click a portal to reward the agent and watch its future proposals adapt. Seal preserves the current volume and policy; reload or open another tab to restore. Offline after first load. Interactive spatial local-AI volumetric sculptor for Verse.

## Failure modes
- Very low-end device: reduce grid to 8³ or update rate.
- Orientation permission denied: pointer residual used.
- IndexedDB blocked: session-only state.
- Portal projection singularity: clamp and soft-reset cores.

## Building blocks
Reusable pure-JS 3D voxel density + local linear policy sculptor + projected DOM portal embodiment + reward-gated adaptation + sealed transfer. Enables future WebGPU compute kernels for larger sparse volumes, WebXR hand as volumetric brush, and multi-agent policies sharing the same density mind.

Void is now Verse everywhere.
