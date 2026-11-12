# F691 WebXR Hand DEM Granular MLP Mind

## Concept
A previously unused 2D Discrete Element Method (DEM) kernel: circular particles with pairwise contact forces (Hertz-like repulsion + Coulomb friction approximation + optional cohesion). True WebXR hand tracking (or pointer fallback) treats the hand as a moving rigid collider that can scoop, push, and pile the granules. A local tiny MLP (6→8→3) takes DeviceOrientation residual + hand velocity as causal input to modulate friction coefficient, restitution, and cohesion. Reward from pile height or captured particles evolves the weights. Living DOM portals can be dropped as additional physical masses or labels that ride clusters. Full state + weights persist in IndexedDB; sealed genome via BroadcastChannel.

## Novelty
Leaves the dominant recent cluster of continuum kernels (LBM, Gray-Scott, percolation, wave-equation, Abelian sandpile), boids/flocking rules, SPH, softbody springs, NCA/Lenia/Physarum, residual predictors, orientation RNNs, attention lattices, and pointer-history fields. Core novel combination is contact-mechanics granular DEM (not continuum CA, not agent rules, not toppling thresholds) embodied by true WebXR hands as rigid tools, with DeviceOrientation as causal input to a local MLP that controls material parameters, and hybrid DOM masses. Not particle life, not fluid solvers, not constraint path morphs.

## Architecture
- Single self-contained index.html, offline after load.
- ~120 DEM particles: pos, vel, radius, mass. Contact resolution each frame.
- MLP modulates μ (friction), e (restitution), cohesion.
- WebXR hand (if available) or pointer as circular collider.
- DeviceOrientation for gravity direction and residual features.
- 3–4 absolute DOM portals that can be dragged and "dropped" to become dynamic masses.
- Canvas2D rendering with trails. WebGPU compute path noted for future.
- Seal: IndexedDB key `verse-f691`. BroadcastChannel `verse-genome`.
- Controls: Request XR / Orientation, Seal Genome, Reset Granules, Toggle DOM Masses.

## Expected outcome
Open page, move pointer or enter XR and move hand; granules pile, avalanche, and respond to material params; tilt device changes gravity; drop DOM elements to weigh piles; click rewards and mutates MLP; Seal persists across reloads and tabs.

## Failure modes
- No WebXR/hand-tracking: pointer collider fully functional.
- Orientation denied: gravity down, residual from pointer.
- IndexedDB private: session only.
- High particle count: capped at 120 for 60fps.
- WebGPU unavailable: Canvas2D is the primary path.

## Mechanics
1. Init particles + random/loaded MLP.
2. Each frame: sample orientation + hand residual → MLP → update μ,e,cohesion → resolve contacts + gravity → integrate.
3. Hand/pointer collider applies impulses.
4. Drop DOM: convert to dynamic particle-linked mass.
5. Click: fitness++, mutate weights.
6. Seal: persist to IndexedDB + broadcast.

Void is now Verse everywhere.
