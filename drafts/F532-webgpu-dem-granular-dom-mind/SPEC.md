# F532 WebGPU DEM Granular DOM Collision Mind

## Concept
Novel combination: a WebGPU compute-shader Discrete Element Method (DEM) granular simulation (previously unused kernel: free particles with pairwise contact detection, linear spring-dashpot forces, friction, cohesion, and restitution — not mass-spring softbody meshes, not lattice-gas streaming, not NCA/Lenia/SIR/Ising, not spectral residuals, not attention lattices). Multi-agent competition among "pile genomes" (parameter sets for friction/cohesion/restitution) where contact density between particle groups triggers sealed genome transfer over BroadcastChannel + IndexedDB. DeviceOrientation tilts the gravity vector as causal input to the physics (not to an MLP/RNN). Absolute-positioned DOM boxes act as true rigid physical bodies: their screen rects are sampled into the compute pass as moving obstacles that particles collide against, and high particle pressure can push the DOM elements. Fully self-contained single-file HTML, offline-capable after load, progressive fallback to Canvas2D if no WebGPU.

This deliberately leaves the recent cluster of orientation/sensor-driven neural policies (MLP/RNN/reservoir/k-NN) controlling cellular automata or continuous fields (SIR, Ising, Physarum, Lenia, lattice-gas, vectorfield, CA-rule) with DOM as sampling portals (F519–F531, F0489–F0492).

## Architecture
- Single index.html.
- WebGPU compute pipeline: particle buffer (positions, velocities, radii, genome-id), obstacle buffer from DOM rects, force accumulation via atomic or multi-pass contact.
- 4 competing piles (genome groups), particles colored by genome.
- Seal on button or auto when one genome dominates (>60% contacts); SHA-256 of genome params stored in IndexedDB, BroadcastChannel 'f532-dem' for multi-tab adoption of superior fitness (pile height or cohesion survival).
- Orientation: gravity = (sin(gamma), cos(beta), ...) or pointer as tilt fallback.
- DOM boxes: 3 draggable .box elements whose getBoundingClientRect are uploaded as AABBs each frame; particles bounce off them; if local pressure > threshold, apply CSS transform push to the box.
- Status overlay, controls: start orientation, seal, reset piles, toggle cohesion.

## Expected outcome
Interactive spatial mind: granular piles flow and collide under device tilt, DOM boxes physically interact as barriers/scoops, multi-agent genomes compete and transfer sealed parameters across tabs; runnable offline; graceful 2D fallback.

## Mechanics
- Particle step in compute shader (or JS fallback).
- Contact: for nearby pairs, compute overlap, apply normal force + friction.
- Genome transfer: if contact fraction between group A and B > threshold, copy B params to A if B fitness higher.
- Fitness: average height of particles or number surviving after tilt.

## Failure modes
- No WebGPU → Canvas2D particle loop with simplified contacts.
- No DeviceOrientation → mouse-drag tilt or auto-sway.
- IndexedDB/Broadcast blocked → local only.
- Too many particles → reduce to 512.

## Next building blocks
- True multi-body rigid body coupling beyond AABB.
- WebXR hand as additional scoop geometry.
- Persistent OPFS particle snapshots.
- Ambient light as cohesion modulator.

Dominant prior cluster branched from: orientation/sensor-driven neural local models (MLP etc.) + CA/continuous field substrates + DOM sampling portals with sealed transfer (F519–F531 and recent F048x).

**Void is now Verse everywhere.**
