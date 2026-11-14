# F755 WebGPU SPH Orientation MLP Buoyancy Mind

## Concept
DeviceOrientation and pointer as causal inputs to a local tiny MLP that modulates gravity and forces in a simplified SPH (Smoothed Particle Hydrodynamics) particle fluid. Living DOM portals act as buoyancy sensors and seekers of high-density regions, providing fitness for sealed genome evolution via IndexedDB/localStorage. Hybrid embodiment: particles on canvas + physical UI elements.

## Novelty
Leaves the dominant recent cluster of practical local utility tools (F748 debt planner, F749 chore rota, F751 encryptor, F752 SSH key, F753 business card, F754 camera palette) and prior spatial clusters (attention lattices, residual predictors, volumetric injection, pure NCA, spectral/audio residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles, lattice-gas, vortex, Lenia, Physarum, Ising, boids, Kuramoto). Core novel combination is SPH density-pressure kernel (previously unused) driven by orientation-MLP, with DOM elements as true buoyancy agents under multi-agent fitness competition and sealed genome transfer. Not simple particles, not NCA, not softbody springs.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, offline-capable.
- Canvas 2D particle simulation with Gaussian kernel density estimation and pressure/viscosity forces (SPH approximation).
- Tiny MLP (4-6-2) pure JS, inputs: orientation beta/gamma + mouse, outputs: gravity modifiers.
- 4 DOM portals that seek local density, scale with it, draggable.
- Fitness from portal densities; Seal button mutates and persists genome in localStorage.
- DeviceOrientation for causal tilt; mouse for interaction/injection.
- Fallback: works without orientation (mouse only).

## Mechanics
1. Particles compute pairwise density, apply pressure forces + MLP gravity.
2. Portals compute local density and move toward denser fluid.
3. User tilts device or moves mouse; high fitness on Seal evolves weights.
4. Genome persists across reloads.

## Expected outcome
Open page: fluid particles flow under tilt/mouse, portals float to dense regions and glow/scale. Seal when fitness high to evolve better buoyancy control. Interactive, spatial, offline.

## Failure modes
- No DeviceOrientation: mouse still works.
- Low performance on many particles: reduce N.
- localStorage blocked: session-only evolution.

## Building blocks
Reusable pure-JS SPH density kernel, orientation-to-MLP force modulator, density-seeking DOM portals, sealed genome persistence. Expands frontier for next hybrid fluid+AI embodiments.

Void is now Verse everywhere.

**Files**: drafts/F755-webgpu-sph-orientation-mlp-buoyancy-mind/SPEC.md, drafts/F755-webgpu-sph-orientation-mlp-buoyancy-mind/index.html
