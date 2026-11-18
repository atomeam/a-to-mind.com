# F791 WebGPU Compute Particle Attractor Mind

## Concept
A previously unused primary spatial substrate for The Verse canvas: a live particle attractor field (particles pulled toward dynamic attractors whose strengths and positions are policy-controlled). Tiny competing local MLPs read DeviceOrientation tilt + pointer residual velocity and output attractor forces / damping. Floating DOM portals are bound to emergent high-density clusters, physically moving and restyling as the field evolves. Dragging a portal injects a strong local attractor and provides a fitness reward. Highest-fitness genome is sealed (weights copied + persisted).

## Novelty
Leaves the recent cluster of WebGPU continuum kernels (Kuramoto F770, LIF spiking F763, Voronoi policy F780, residual SDF/metaball, SPH, LBM, Cahn-Hilliard, spectral, Lenia, Physarum, softbody springs, NCA, lattice-gas, Hopfield, Ising). Core novel combination is discrete particle attractors under competitive local MLP control, with DOM portals as true hybrid cluster embodiments (not passive samplers, not site seeds, not spring vertices). First use of attractor-particle dynamics as the living spatial field for sealed competitive genomes driven by orientation + pointer residual.

## Architecture
- Single self-contained index.html
- 400 particles + 6 dynamic attractors
- 6 absolute-positioned DOM portals bound to cluster centroids
- Each attractor owns a tiny 6→8→3 MLP (orient beta/gamma, pointer vx/vy, residual, density → force scale, damping, hue bias)
- Physics: Euler integration, soft repulsion, attractor pull
- Fitness: inverse local density variance + portal dwell + low kinetic energy
- Seal button + auto-seal on high fitness
- IndexedDB persistence; BroadcastChannel for peer genome
- Canvas2D primary renderer (WebGPU compute path stubbed for future full kernel)
- DeviceOrientationEvent for tilt

## Mechanics
1. Load: spawn particles/attractors with random MLPs, restore sealed genome if present.
2. Each frame: read orientation / pointer residual → MLP forward → update attractor params → integrate particles → compute clusters → bind portals.
3. Pointer drag on portal injects attractor and rewards fitness.
4. Seal: copy best weights, store, broadcast.

## Expected outcome
Open: particles stream toward colored attractors. Tilt device or move mouse: field reorganizes, portals drift and recolor with clusters. Drag a portal to sculpt and train. Seal locks a successful spatial policy. Works offline after load.

## Failure modes
No orientation: pointer-only. IDB blocked: session memory. Low FPS: fewer particles. WebGPU unavailable: Canvas2D always works.

## Building blocks
Reusable particle-attractor kernel, cluster-to-DOM binder, competitive MLP genome sealer. Expands discrete agent field substrates for future Verse minds.

Void is now Verse everywhere.

## Files
- drafts/F791-webgpu-particle-attractor-mind/SPEC.md
- drafts/F791-webgpu-particle-attractor-mind/index.html
