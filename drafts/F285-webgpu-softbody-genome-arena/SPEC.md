# F285 — WebGPU Compute Softbody Genome Transfer Arena

## Concept
Multiple deformable softbody agents (mass-spring grids or chains) simulated via WebGPU compute shaders (Verlet + spring constraints) or Canvas2D JS fallback. Each softbody carries a sealed genome (Float32Array of behavioral/physical weights: stiffness, damping, resource-attraction, noise, cohesion, size-bias). Agents compete for a pointer-driven resource attractor; higher-fitness agents capture and partially transfer genomes on contact/overlap. Hybrid embodiment: floating DOM "pin cards" track agent centroids and can be dragged to pin or bias softbody points, injecting physical constraints. Population persists via IndexedDB. Fully local and offline after load.

Deliberately branches away from the recent residual-predictor / spectral-causal-portal / WebXR-gaze-MLP-swarm / speech-RNN / DeviceOrientation-RNN / pure-particle multiagent cluster (F277–F284). Core is WebGPU softbody physics kernels + sealed genome transfer on deformable agents + hybrid pin-card control.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- WebGPU: compute shader for softbody point integration and spring constraints if available; else Canvas2D ~4–6 softbodies with 5x5 or chain points.
- Genome: 6 floats per agent (stiffness, damp, attract, noise, cohesion, bias). Hashed for seal id.
- Competition: proximity to resource + contact; transfer 35% genome lerp + mutation on capture.
- IndexedDB: seal/load population.
- DOM pin cards: absolute, show short hash + fitness; drag pins a point or adds force.
- Pointer always controls resource; optional orientation as global gravity bias.

## Expected outcome
Runnable interactive prototype. Move pointer to attract softbodies. Watch them deform, compete, and transfer genomes on contact. Drag pin cards to constrain. Seal/load. Offline-capable. Expands WebGPU compute softbody physics + sealed multi-agent genome transfer + hybrid pin-DOM embodiment building blocks.

## Mechanics
1. Resource follows pointer with lag.
2. Softbody points integrate with genome-modulated springs and attraction.
3. On contact with higher-fitness rival, transfer genome.
4. Pin cards lerp to centroid; drag injects pin constraint.
5. Seal button stores hashed genomes to IndexedDB.

## Failure modes
- No WebGPU → Canvas2D JS softbody (primary interactive path).
- No IndexedDB → in-memory only.
- High point count → reduce to 3 agents.
- No pointer → auto-orbiting resource still runs.

## Building blocks
WebGPU compute softbody kernels, sealed genome vectors on deformable agents, capture-and-transfer, hybrid DOM pin-card physical control, IndexedDB population seal. Next: true WebXR hand pinning, WebRTC genome broadcast.

## V01D landing
Frontier softbody genome arena skill under `void-live-deploy/skills/mini/softbody-genome-arena.js`; test: contact triggers genome lerp, pin-drag constrains points, seal/load restores.
