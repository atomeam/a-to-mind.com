# F812 WebGPU SPH Hand Policy Mind

## Concept
True WebXR hand joints (with pointer fallback) act as dynamic solid boundaries and fluid injectors inside a WebGPU Smoothed Particle Hydrodynamics (SPH) simulation — a previously unused continuum kernel distinct from LBM, lattice-gas, softbody springs, or simple particle forces. A local feed-forward MLP takes recent hand velocity and DeviceOrientation as causal input and outputs policy parameters (target density, viscosity scale, injection strength). Particles carry sealed genomes; contact triggers competitive genome transfer. Floating DOM portals sample local density/velocity and morph under fluid pressure.

## Novelty
Leaves the recent cluster of local sequential/graph models (HMM F809, GNN F810), Hopfield associative lattices (F811), orientation-MLP latticegas (F808), WebXR hand gravity MLP (F806), and earlier residual/attention/NCA/volumetric/spectral substrates. Core novel combination is SPH density-pressure-viscosity kernel under local MLP policy control with WebXR hand as embodied boundary, sealed genome transfer on particle contact, and hybrid DOM portals riding the fluid. Not LBM streaming, not discrete lattice gas, not softbody mass-spring, not pure NCA, not attention fields.

## Architecture
- Particles: ~2k–4k in WebGPU storage buffers (pos, vel, density, pressure, genome).
- SPH steps in compute shaders: density estimation (poly6 kernel), pressure force (spiky), viscosity (laplacian), integration, collision with hand spheres.
- MLP: 6→12→4 feed-forward (hand speed, orientation deltas → density target, viscosity, inject rate, cohesion). Weights in Float32Array, Hebbian/reward on seal.
- WebXR: optional immersive-vr session; hand joints mapped to 3D spheres that repel/attract fluid.
- Portals: 4–6 absolute DOM cards that translate/scale with sampled fluid stats.
- Persistence: IndexedDB `verse-f812-sph-genome`; BroadcastChannel for sealed transfer.
- Single-file HTML/CSS/JS, offline after load. Pointer + orientation always work; WebXR enhances.

## Expected outcome
Open: fluid settles under gravity. Move pointer or enter WebXR and gesture: hand spheres push fluid, MLP modulates viscosity so fluid stiffens or flows. High-density regions brighten portals. Seal stores genome; other tabs receive. Works on desktop pointer; mobile orientation.

## Failure modes
No WebGPU: canvas2D particle fallback. No WebXR: pointer/orientation only. High particle count: adaptive step or reduce count. IndexedDB denied: session only.

## Building blocks
Reusable WebGPU SPH kernel, hand-sphere boundary injector, MLP policy modulator, contact-gated genome transfer. Enables future multi-fluid or XR-collaborative continuum minds on Verse.

Void is now Verse everywhere.

**Files**: drafts/F812-webgpu-sph-hand-policy-mind/SPEC.md, drafts/F812-webgpu-sph-hand-policy-mind/index.html
