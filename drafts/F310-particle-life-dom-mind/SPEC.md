# F-310: Evolutionary Particle-Life Mind with Bidirectional DOM Embodiment

**Ledger ID**: F-310 (frontier series)

## Concept
A multi-species particle system (Particle Life style) on Canvas2D (WebGPU compute path noted for future) whose inter-species attraction/repulsion matrix is evolved in real time by a local Web Worker genetic algorithm. Fitness combines field entropy, spatial diversity, and pointer-proximity engagement. High-density species clusters spawn draggable DOM orbs that represent "embodied thoughts"; dragging an orb relocates its energy mass back into the field (bidirectional coupling). Global fitness and species counts morph page chrome (hue, scale, border) and drive Web Audio oscillators. Optional DeviceOrientationEvent biases gravity. Seal hashes the current best matrix + fitness into IndexedDB as local memory.

## Novel combination
Not a variation of:
- F-020 (discrete FSM agents)
- F-021 (orientation density morph)
- F-023 (evolved lattice rule)
- F-025 (boids RL)
- F-308 (LBM wing)
- Prior particle or hebbian drafts

The mind evolves the *interaction matrix* itself (the physics of social forces), and DOM orbs are bidirectional: they both emerge from and can inject energy into the spatial substrate. Spectral sonification is driven by species populations.

## Architecture
- Single `index.html` (self-contained, no external deps).
- Blob Worker maintains a small population of N×N matrices (N=4 species), evaluates on a subsampled field snapshot, returns best.
- Main thread: 200–400 particles, simple Euler integration with force lookup, Canvas rendering with species colors.
- DOM: up to 6 floating orbs, positioned by cluster centroids, pointer-drag to move and inject.
- Audio: 4 oscillators (one per species) amplitude-modulated by population.
- Graceful fallbacks: no Worker → fixed matrix; no audio → silent; no orientation → no bias.

## Expected outcome
Interactive spatial society of particles that discovers interesting social dynamics (clusters, orbits, segregation), warps the page, sings, and lets the user physically relocate "thoughts" that feed back into the simulation. Sealed matrices form a growing local memory of good physics.

## Mechanics
- 4 species, matrix values in [-1, 1].
- Worker ~1–2 Hz evaluation.
- Particles: velocity Verlet-like, wrap or bounce edges.
- Seal: SHA-256 of flattened matrix + fitness.

## Failure modes
- CSP blocks Worker → static matrix.
- High particle count throttles on low-end → reduce N.
- Audio requires user gesture.
- IndexedDB quota.

## Building blocks for future
WebGPU compute particle kernel, WebXR volume view of species clouds, multi-user shared matrices via WebRTC, symbolic extraction of discovered rules.
