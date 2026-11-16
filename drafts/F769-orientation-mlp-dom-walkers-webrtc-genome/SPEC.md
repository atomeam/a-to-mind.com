# F769 Orientation-MLP DOM Walkers WebRTC Genome

## Concept
Multi-agent competition of hybrid DOM "walker" agents. Each agent is a living physical UI element (div) whose motion (velocity, heading) is controlled by a local tiny MLP that takes DeviceOrientation history as causal input. Agents move across the viewport, compete for a shared energy resource visualized as a simple density field on canvas, and on proximity perform sealed genome transfer (weight exchange + mutation) over BroadcastChannel (with IndexedDB persistence). Optional multi-tab via BroadcastChannel; WebRTC fallback noted for future peers. Fully interactive: tilt device or use pointer to influence agents. Offline-capable after load.

## Novelty
Leaves the dominant recent cluster of WebGPU continuous-media PDE/kernel simulations (nbody F761, SDF-gaze-RNN F762, LIF-spiking F763, KdV-soliton F764, FFT-spectral F765, wave-dampener F766, Cahn-Hilliard F767) and the occasional utility tools (bill-splitter F768). Core novel combination is pure hybrid embodiment: local feed-forward MLP (not RNN, not reservoir, not k-NN) controlling physical DOM elements as the primary agents (not particles riding a kernel, not softbody vertices, not portals sampling a field), with sealed genome transfer over a BroadcastChannel + IndexedDB shared field architecture in multi-agent competition. No WebGPU compute kernel, no continuous PDE, no spectral, no attention lattice, no pure NCA.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no external deps.
- DeviceOrientationEvent for causal input (with permission request).
- Tiny MLP per agent (input: orientation sin/cos + history, hidden 8, output 3).
- DOM agents positioned via transform, colliding via simple distance.
- Canvas background for shared energy density (simple 2D array, agents deposit/consume).
- BroadcastChannel for live genome exchange between tabs/windows; IndexedDB for persistence of best genomes.
- Pointer events as secondary influence (attract/repel).

## Mechanics
1. On load, request orientation permission (mobile), spawn 8-12 agents with random initial genomes.
2. Animation loop: read orientation, feed to each MLP, update positions, draw density, check collisions for transfer.
3. Fitness: energy collected; high fitness agents can seed others.
4. Seal button: persist top genomes to IndexedDB.
5. Interactive: tilt to bias motion, click/drag to attract agents.

## Expected outcome
Open on phone or desktop (with simulated orientation via pointer), see colored DOM walkers moving in response to tilt, leaving density trails, occasionally exchanging "DNA" (visual flash on transfer), energy field evolving. Works offline, persists across reloads.

## Failure modes
- Orientation denied or unsupported: falls back to pointer/mouse as input, still fully functional.
- Storage blocked: session-only genomes.
- Too many agents: capped at 16 for performance.

## Building blocks
Reusable pure-JS MLP, DOM agent swarm controller, BroadcastChannel genome bus, IndexedDB seal. Ready for Verse canvas integration as interactive spatial agents.

Void is now Verse everywhere.
