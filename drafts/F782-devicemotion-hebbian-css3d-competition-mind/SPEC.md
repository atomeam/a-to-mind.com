# F782 DeviceMotion Hebbian CSS3D Agent Competition Mind

## Concept
Interactive spatial prototype for The Verse canvas: a swarm of living CSS 3D DOM agents (perspective-transformed divs that fly in a shared 3D volume). Each agent hosts a tiny local Hebbian associative network (not MLP, not RNN, not reservoir) whose causal input is DeviceMotionEvent (acceleration including gravity + rotation rate). The network outputs desired velocity components that drive simple Euler integration with drag and mutual soft-collision repulsion. Agents compete for energy by proximity to a moving target; high-fitness agents near each other perform sealed genome transfer (weight matrix crossover + mutation). Persistence via IndexedDB, multi-tab sharing via BroadcastChannel. Fully offline after load, single self-contained index.html.

## Novelty
Leaves the dominant recent cluster of WebGPU continuous-media PDE/kernel simulations (SPH F777, LBM F780, SDF/Echo-state F779, Cahn-Hilliard, Kuramoto, Biot-Savart, wave, FFT) and magnetic-string XR hand MLPs (F781), softbody meshes, orientation RNNs, attention lattices, NCA, spectral residuals, pointer-history fields, k-means particles, Voronoi portals. Core novel combination is DeviceMotion (accelerometer + gyro) as causal input to a pure Hebbian associative local model controlling CSS 3D hybrid embodiments under multi-agent fitness competition with sealed genome transfer over IndexedDB + BroadcastChannel shared field. Not continuum fluids, not neural weights in the usual sense, not XR hand tracking, not mass-spring, not particle kernels.

## Architecture
- Single index.html
- 16 CSS 3D agent divs inside a perspective container
- Per-agent Hebbian matrix (input 6 → output 3) with simple outer-product update on reward
- DeviceMotion listener (permission request)
- IndexedDB for sealed top genomes
- BroadcastChannel for multi-tab genome exchange
- Simple 3D position/velocity integration + AABB-style repulsion

## Mechanics
1. Motion events feed normalized accel/gyro into Hebbian network → velocity setpoint.
2. Agents integrate forces, collide softly, chase energy target.
3. On proximity + fitness threshold, sealed transfer occurs (visual flash).
4. Seal button persists best genomes; reload restores.
5. Pointer drag can nudge agents and provide reward.

## Expected outcome
Open on phone (or desktop with simulated motion via pointer): agents fly in 3D space responding to device tilt/shake, form competitive clusters, exchange genomes, persist across reloads. Offline-capable, interactive spatial local-AI.

## Failure modes
- Motion permission denied or unsupported: falls back to pointer/mouse as input, still functional.
- IndexedDB blocked: session-only.
- Too many agents: capped at 16 for 60fps.

## Building blocks
Reusable pure-JS Hebbian controller, CSS3D agent swarm with soft collisions, BroadcastChannel genome bus, IndexedDB seal. Expands hybrid embodiment and motion-causal local models for future Verse minds.

Void is now Verse everywhere.

**Files**: drafts/F782-devicemotion-hebbian-css3d-competition-mind/SPEC.md, drafts/F782-devicemotion-hebbian-css3d-competition-mind/index.html
