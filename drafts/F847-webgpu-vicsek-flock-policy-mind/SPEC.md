# F847 WebGPU Vicsek Flock Policy Mind

## Concept
A local tiny feed-forward MLP whose causal inputs are DeviceOrientation Euler angles + normalized pointer. The MLP outputs per-frame interaction radius and noise amplitude for a Vicsek alignment flocking model of 256 particles integrated in a WebGPU compute shader. Particles self-organize into coherent flocks. Selected flock centroids are bound to living DOM portals that ride the positions and inherit visual properties from local order. User clicks inject impulses and provide reward that updates the MLP via a simple delta rule. High-fitness weight sets seal to IndexedDB and broadcast over BroadcastChannel for sealed genome transfer across tabs. Falls back to Canvas2D JS integration if no WebGPU.

## Novelty
Leaves the dominant recent cluster of spatial portal minds (SOM, MCTS, spiking, diffusion, SPH, Verlet chains, N-body gravity, Physarum trails, Lenia, softbody meshes, NCA, spectral vortex, lattice-gas, Ising). Core novel combination is DeviceOrientation as causal input to a local MLP that directly modulates the physical parameters of a previously unused Vicsek alignment kernel (discrete particles that average neighbor headings within a radius plus noise, not force-based springs, not continuum, not growth kernels, not residual predictors). Hybrid embodiment of DOM portals riding emergent flock centroids. Not a superficial variation of prior particle or policy minds.

## Architecture
- Single self-contained index.html (offline after load, progressive)
- WebGPU compute: Vicsek update (neighbor average heading, noise, wrap or bounce)
- Fallback: pure JS Vicsek on Canvas2D
- MLP: 4-8-2 (inputs: alpha, beta, ptrX, ptrY; outputs: radiusScale, noiseScale)
- 256 particles
- DOM: 4 portals absolutely positioned at sampled cluster centroids
- Seal: IndexedDB `f847-vicsek-mlp` + BroadcastChannel `f847-genome`
- Reward: click near flock increases fitness, updates weights

## Expected outcome
Tilt device or move pointer: flock coherence and spread morph in real time. Click to reward and perturb. Seal transfers learned parameters. Interactive spatial local-AI capability turning pose into living flock dynamics.

## Mechanics
1. Initialize random MLP weights and particle positions/headings.
2. On orientation/pointer: forward MLP → set radius / noise.
3. Compute shader (or JS): average neighbor headings within radius, add noise, update positions.
4. Render particles; detect simple clusters; position DOM portals.
5. On click: impulse + SGD update on MLP toward higher local order.
6. Periodic seal / adopt higher fitness genomes.

## Failure modes
No WebGPU → Canvas2D. No DeviceOrientation → pointer-only. Too many particles on low-end → reduce count. IndexedDB quota → memory-only.

## Building blocks
Pure-JS online MLP, Vicsek alignment kernel (WebGPU or JS), orientation causal embedding, DOM-centroid embodiment, sealed weight transfer. Expands alignment-based spatial minds for future Verse experiments.

## Files
drafts/F847-webgpu-vicsek-flock-policy-mind/SPEC.md
drafts/F847-webgpu-vicsek-flock-policy-mind/index.html
