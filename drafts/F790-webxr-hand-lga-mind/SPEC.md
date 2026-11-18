# F790 WebXR Hand Causal MLP Lattice Gas Automaton Mind

**Ledger ID**: F-790 (frontier series)

**Slug**: webxr-hand-lga-mind

**Date**: 2026-11-18

## Concept
True WebXR hand-tracking (progressive, with pointer/DeviceOrientation fallback) as continuous causal input to a tiny local MLP whose outputs bias the collision rules and particle injection of a Lattice Gas Automaton (LGA) running on Canvas2D (WebGPU compute path prepared). The LGA is a discrete hexagonal lattice of particles with 6 directions; collisions and streaming produce emergent fluid-like behavior. Hand joints (or pointer) inject particles and modulate local rest density via the MLP. Floating hybrid DOM cards represent high-density regions and can be dragged to re-inject. Multi-agent: 4 competing MLPs; user rewards via clicks. Sealed genomes (weights + hash) persist in IndexedDB and transfer via BroadcastChannel. Fully offline single-file.

## Branching
Deliberately leaves the recent dominant cluster of local unsupervised/supervised models driving pure CSS/DOM morphing portals (pointer-attention F789, Kohonen/SOM F787, Bayesian networks F783, neural-ODE CSS3D F784, Cellular Potts F788, RBF mobiles, worker-isolated genomes) and prior WebGPU continuum kernels (SDF, Voronoi, Fourier, Gray-Scott, SPH). Moves onto under-explored axes: **Lattice Gas Automaton as previously unused discrete kinetic kernel**, true WebXR hand as primary causal channel (not just gaze or orientation), local MLP modulating collision parameters rather than continuous forces, hybrid DOM density portals, sealed multi-agent genome competition over BroadcastChannel.

## Architecture
- Single index.html, no external deps.
- LGA: 80×60 hexagonal sites, 6 directions, streaming + collision (simple BGK-like or deterministic).
- MLP: 6→12→3 per agent (hand relative position, velocity, density local).
- Embodiment: Canvas2D visualization of particle densities; 6–8 DOM cards lerp to high-density centroids.
- Persistence: IndexedDB `verse-f790`; BroadcastChannel `f790-genome`.
- Progressive: WebXR if available (immersive-ar or vr hand-tracking), else pointer + orientation.

## Expected Outcome
Move hands or pointer → particles stream and collide in emergent vortices/flows → DOM cards migrate to density peaks. Click a card to reward its controlling MLP. Seal freezes best genome. Second tab can receive transfer. Interactive offline. Chrome hue shifts with global density variance.

## Failure Modes
- No WebXR: pointer fallback works.
- Performance: reduce lattice if <30fps.
- IndexedDB private mode: in-memory only.
- Hand tracking requires compatible hardware and secure context.

## Building Blocks
WebGPU compute LGA shader, multi-hand full joint skeleton, gaze+hand fusion, LGA parameter genomes evolved further.
