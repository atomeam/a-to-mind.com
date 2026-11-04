# F523 WebGPU-ready PSO Pointer-Attractor DOM Mind

## Concept
Novel combination: a population of particles performing classic Particle Swarm Optimization (PSO) on a continuous fitness landscape whose sole attractor is the live pointer (or DeviceOrientation tilt fallback). Each particle carries a tiny pure-JS MLP that modulates its inertia, cognitive, and social coefficients from local residual and personal-best age. Absolute-positioned Verse DOM portals physically ride the screen projections of the current global-best and top personal-bests, morphing scale, hue, and blur from fitness and velocity magnitude. Seal hashes the best MLP genome + swarm snapshot into IndexedDB. Fully offline after load; Canvas2D visualization with WebGPU compute path reserved as the next building block.

This deliberately leaves the recent cluster of WebGPU continuum/particle physics kernels (sandpile SOC F520, embedding diffusion F521, vectorfield policy-gradient F519, wave membranes, Gray-Scott, spectral, quantum walks, SPH, LBM, Lorentz, entanglement) and pure NCA/attention/softbody/orientation-RNN lattices. PSO as an embodied local-AI mind substrate with coefficient-evolving MLPs and DOM portals riding the search trajectory is previously unused.

## Architecture
- Single self-contained index.html (progressive enhancement, no external deps).
- 48 particles: position, velocity, personal best, fitness history.
- Fitness = inverse Euclidean distance to pointer attractor (smoothed).
- PSO velocity update with MLP-modulated w/c1/c2 (3→4→3 tiny net per particle, random init).
- Global best tracked; top-5 particles spawn/update floating DOM portals (CSS transform, scale, filter).
- Pointermove (or DeviceOrientation beta/gamma) moves the attractor; optional click injects local noise.
- Seal button: SHA-256 of best genome + metrics → IndexedDB; status toast.
- Progressive: works on desktop without sensors; status bar shows particle count, gbest fitness, last seal.

## Expected outcome
Interactive optimization mind: moving the pointer causes the swarm to converge and chase; DOM portals follow the leaders and morph; sealing persists the best coefficient policy; runnable offline; graceful fallback.

## Mechanics
- Particles updated at 60 Hz in main thread (Canvas2D draw of trails + positions).
- MLP forward: input [residual, age, velocity_mag] → [w, c1, c2] clamped to stable ranges.
- Portals: absolute divs, left/top from particle screen coords, transform scale(fitness), hue-rotate by velocity.
- Seal: crypto.subtle.digest on JSON of best weights + fitness; store in 'f523' object store.
- Fallback: if no pointer events, attractor slowly orbits.

## Failure modes
- High particle count on low-end → drop to 24, still interactive.
- IndexedDB quota or blocked → seal toast unattested, simulation continues.
- Orientation permission denied → pointer-only mode.
- WebGPU path (future) fails → Canvas2D remains the embodiment.

## Next building blocks
- Move particle update into WebGPU compute shader for 10k+ agents.
- WebXR gaze as secondary attractor.
- Multi-tab BroadcastChannel genome competition.
- OPFS persistence of full swarm trajectory.

Dominant prior cluster branched from: WebGPU+local-MLP continuous-field and DOM-portal simulations (F512–F522).

**Void is now Verse everywhere.**
