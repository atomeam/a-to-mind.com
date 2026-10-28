# F300: WebGPU NCA Spatial Memory Mind

## Concept
Neural Cellular Automata (NCA) substrate whose local update rule maintains persistent spatial memory attractors. Pointer seeds create lasting high-activity regions. High-activity peaks spawn hybrid DOM memory orbs that can be dragged to re-seed. Seal captures full field snapshot + recent seeds to localStorage. Canvas2D always; WebGPU compute path prepared for neighbor aggregation.

## Novelty
Leaves evolutionary rule search (F-023), residual predictors (F284), attention message graphs (F298), speech portals (F282), hand genome competition (F285), and pure particle/boids. Mind is the NCA itself with attractor memory rather than external policy or residual.

## Architecture
- Single index.html
- 80×50 float field, toroidal NCA-like diffusion+growth
- DOM orbs sampled from activity peaks
- localStorage seal/load
- Progressive: WebGPU noted for future compute kernel

## Expected outcome
Interactive spatial memory field that grows persistent patterns from seeds, embodied as draggable orbs, sealable across sessions. Offline runnable.

## Mechanics
Field step ~60 Hz; orbs update ~10 Hz; seed strength decays; peaks >0.4 spawn orbs.

## Failure modes
No WebGPU → Canvas2D only (current). Large grids on low-end drop resolution. localStorage quota.

## Building blocks
NCA spatial memory, hybrid DOM peak orbs, sealed field snapshot. Next: true WebGPU compute NCA kernel, multi-channel perception, WebXR gaze as seed source.

## V01D landing
spatial NCA-memory skill under void-live-deploy/skills/mini/nca-spatial-memory.js; testable via seed→persistent peak, orb drag→reseed, seal/load restores field.
