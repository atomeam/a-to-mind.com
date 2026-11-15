# F760 WebXR Hand LBM Portal Mind

## Concept
A true WebXR hand-tracked (with pointer/orientation fallback) spatial mind where tracked hand joints inject localized forces and parameter modulations into a previously unused WebGPU compute kernel implementing a 2D Lattice Boltzmann Method (LBM) fluid simulation. Living DOM portals are hybrid-embodied agents bound to emergent high-density or high-velocity clusters; each carries a tiny local MLP whose causal inputs include hand proximity and DeviceOrientation. Multi-agent competition via fitness (density sampling + user drag rewards) enables sealed genome (MLP weight) transfer. Persistence via IndexedDB. Deliberately leaves recent clusters of SPH particle fluids, optical-flow boids, motion trajectory loggers, OPFS genetic terrains, and utility tools.

## Novelty
Leaves the dominant recent cluster of SPH buoyancy minds (F755), camera optical-flow boids (F758), device-motion trajectory loggers (F759), OPFS genetic terrains (F756), and practical utilities (F752–F754, F757). Core novel combination is WebXR hand tracking as causal spatial input to a Lattice Boltzmann Method fluid kernel (discrete velocity streaming + BGK collision on a D2Q9 lattice — not SPH particles, not boids, not NCA, not softbody springs, not vortex curl) driving hybrid DOM portal agents under local MLP control with sealed weight transfer. Not residual predictors, not attention lattices, not pure volumetric injection.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, offline-capable after load.
- WebGPU compute pipeline for LBM (grid of 128x128, 9 velocities); Canvas2D density visualization fallback.
- WebXR: requestSession('immersive-vr' or 'inline'), hand tracking joints projected to canvas space for force injection.
- Local MLPs (8-4-2) per portal: inputs = [handDist, orientBeta, density, velocityMag]; outputs = [forceScale, relaxMod].
- Portals: absolute-positioned DOM divs sampling nearby LBM density/velocity, scaled/colored by MLP output.
- Sealed transfer: on Seal or high fitness, copy winner weights to others; persist best in IndexedDB.
- DeviceOrientation for global tilt force.

## Mechanics
1. Load: init WebGPU LBM buffers, spawn 6 portals with random MLP weights.
2. Pointer/hand move: inject force at position; orient tilts global force.
3. Each frame: LBM stream+collide, sample for portals, MLP forward, update portal transform/style.
4. Drag portal: reward signal updates local weights (simple Hebbian).
5. Seal: evolve population by transferring high-fitness genomes, store in IDB.

## Expected outcome
Open: LBM fluid swirls under mouse/hand/tilt, portals seek dense regions and morph via their MLPs. Drag to train, Seal to evolve. Works offline, interactive spatial.

## Failure modes
- No WebGPU: Canvas2D approx density field.
- No WebXR/hands: pointer + orientation fallback.
- IDB blocked: session-only.
- Low perf: reduce grid.

## Building blocks
Reusable WebGPU LBM kernel, hand-to-force injector, MLP-controlled hybrid portals, sealed genome IDB transfer. Expands for next XR+LBM or multi-kernel embodiments.

Void is now Verse everywhere.
