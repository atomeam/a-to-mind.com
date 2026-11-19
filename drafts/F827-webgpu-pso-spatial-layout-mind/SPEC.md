# F827 WebGPU PSO Spatial Layout Mind

Plain name: Spatial layout optimizer
Job: Arrange content cards on a spatial board using a local particle swarm optimizer that responds to device tilt and click preferences; download the final layout as JSON or PNG.
Input: DeviceOrientation (tilt as preferred direction), clicks to attract cards, drag to manually adjust.
Keeps: Download JSON of positions, or PNG of the canvas; auto-save to IndexedDB.
Not on Verse yet: checked against recent F- drafts (no PSO-driven DOM layout optimizer with orientation bias and sealed transfer).

## Concept
A local Particle Swarm Optimization (PSO) "mind" evolves the positions of a set of absolute-positioned DOM cards on the Verse canvas. Each card is bound to a swarm particle. Fitness rewards non-overlap, proximity to recent click attractors, and alignment with DeviceOrientation-derived preferred direction. A Canvas2D (or optional WebGPU) background visualizes the swarm density or best path. Clicking injects an attractor; Seal persists the best genome (positions + PSO params) to IndexedDB and broadcasts via BroadcastChannel for sealed transfer across tabs.

## Novelty
Leaves the recent cluster of Kalman chain (F826), Gray-Scott Bayesian portals (F825), DEM granular (F824), Hopfield (F823), spatial transformers (F822), LDS waves, Echo-State, Physarum, Ising, Lenia, lattice-gas, softbody, NCA, spectral, quantum walk, SPH/LBM. Core novel combination is Particle Swarm Optimization (population-based non-gradient optimizer, not MLP/RNN/Kalman/Bayesian counts/ESN/Q-table/ES) as the sealed local mind whose causal inputs are DeviceOrientation and click history, controlling pure living DOM card layout (not physics kernel substrate, not portals sampling a field). Background visualization is secondary. Not previously built.

## Architecture
- Single index.html (Canvas2D swarm viz + absolute DOM cards; offline after load; progressive)
- PSO: 20 particles, standard velocity update with inertia, cognitive, social terms; positions map to card coords
- Fitness: inverse overlap + attractor proximity + orientation alignment
- Inputs: DeviceOrientation or pointer residual for bias; click for attractor; drag cards for manual override
- 8 DOM cards: draggable, labeled, morph slightly by fitness
- Persistence: IndexedDB `f827-pso-layout`; BroadcastChannel `f827-genome`
- Seal adopts higher fitness

## Expected outcome
Runnable prototype: tilt or move to bias preferred direction; click to attract swarm; cards rearrange under PSO; drag to correct; Seal persists/transfers the layout mind. Graceful fallback if no orientation.

## Failure modes
No DeviceOrientation → pointer bias; IndexedDB denied → memory; too many cards → slow (capped).

## Files
drafts/F827-webgpu-pso-spatial-layout-mind/SPEC.md
drafts/F827-webgpu-pso-spatial-layout-mind/index.html

## V01D landing
PSO spatial layout mind under void-live-deploy/skills/pso-layout-mind.js; test asserts click attractor → card movement → fitness improvement and BroadcastChannel adoption.
