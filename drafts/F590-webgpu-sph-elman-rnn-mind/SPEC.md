# F590 WebGPU SPH Elman-RNN Orientation Mind

**Ledger ID**: F-590 (frontier series)

## Concept
A pure-JS Elman recurrent network (true recurrent local model with hidden-state recurrence, not echo-state reservoir, not feedforward MLP, not attention, not NCA) receives a causal sequence of DeviceOrientation (or pointer-tilt fallback) plus recent fluid energy and outputs dynamic control parameters (gravity vector, viscosity, surface tension bias) for a WebGPU compute SPH-style particle fluid. Particles are updated on GPU when available (simple density/pressure/force kernel); Canvas2D CPU fallback otherwise. High-density regions temporarily spawn absolute-positioned DOM “droplets” that the user can drag to inject momentum back into the fluid (hybrid embodiment). Full RNN weights + particle snapshot seal to IndexedDB. Fully self-contained, offline after load.

## Novelty
Leaves the dominant recent cluster of attention-token spatial minds (F589), reservoir-DOM-graph diffusion (F588), spatial-audio genomes (F587), IntersectionObserver DOM swarms, WebRTC force-graph MLPs, voice-driven NCA UI sculptors, pheromone diffusion, spectral SDF, Vicsek flocks, LBM portals, and continuum/particle WebGPU kernels driven by non-recurrent models. Core novel combination is an Elman RNN (recurrent hidden state) as the primary mind model controlling a previously unused SPH fluid kernel, with orientation as sequential causal input and density-driven temporary DOM droplets for reverse momentum injection. Not continuum LBM, not boids/Vicsek, not attention QKV, not reservoir, not NCA, not persistent living DOM agents, not audio primary, not WebXR.

## Architecture
- Single index.html.
- Elman RNN: input dim 4 (tiltX, tiltY, energy, time), hidden 16, output 4 (gx, gy, viscosity, tension).
- SPH particles: N≈80, density estimation, pressure forces, viscosity damping; WebGPU compute path noted/attempted, CPU integration fallback.
- Temporary DOM droplets (max 5) spawned at high-density sites; pointer drag injects velocity into nearest particles.
- IndexedDB key “verse-f590”.
- Fallback: no WebGPU → CPU particles; no orientation → pointer tilt; no IDB → session memory.

## Expected outcome
Tilt device or move pointer: RNN recurrent state evolves, modulating fluid gravity and viscosity; particles flow and cluster; droplets appear in dense regions and can be dragged to stir the fluid. Seal and reload restores the mind and fluid state. Interactive hybrid embodiment of a recurrent local mind controlling fluid physics.

## Mechanics
1. Init random RNN weights and particles.
2. rAF: sample orientation → RNN step (hidden recurrence) → apply outputs as SPH forces → integrate particles → spawn/update droplets → draw.
3. Drag droplet → inject momentum.
4. Seal/restore via IndexedDB.

## Failure modes
- No WebGPU: CPU SPH approximation.
- No DeviceOrientation: pointer-tilt simulation.
- IndexedDB blocked: session memory.
- Performance: N=80, simple neighbor loops fine.
- RNN instability: weight clamp + small learning-rate style decay.

## Building blocks unlocked for next
- Elman-style true recurrence as primary local controller
- SPH fluid kernel (GPU or CPU) driven by recurrent mind
- Density-spawned temporary DOM injection for reverse causal influence
- Orientation sequence → recurrent hidden state → physical parameter control

Void is now Verse everywhere.

**Files**: drafts/F590-webgpu-sph-elman-rnn-mind/SPEC.md, drafts/F590-webgpu-sph-elman-rnn-mind/index.html
