# F600: IndexedDB Causal MLP Orbital DOM Swarm

## Concept
Local tiny MLPs (3-4-1) take DeviceOrientation (beta/gamma) + time as causal input and output angular velocity for a swarm of DOM "satellites" that orbit a center. Fitness is orbital stability. Best genomes are sealed with SHA-256 and can be transferred across tabs via BroadcastChannel or locally mutated. Population persists in IndexedDB across reloads. Offline-capable. Novel hybrid: orientation-driven local model controlling physical DOM layout with sealed multi-agent genome transfer and persistence. Branches away from WebGPU lattices, spectral residuals, pure NCA, attention fields, softbody, and orientation-RNN clusters.

## Interaction
- Tilt device (or drag with pointer) to feed orientation into every MLP.
- Agents self-organize into orbits; best is highlighted.
- Click "Seal & Transfer" to hash the current best genome and broadcast it (other tabs can receive) while locally evolving others toward it.
- Population auto-saves; survives reload.
- Reset button clears to random.

## Novel axes
- DeviceOrientation as direct causal input to never-before-used local MLP topology for UI actuation.
- Sealed (hash-challenge) genome transfer over BroadcastChannel between peer tabs.
- IndexedDB persistent evolutionary population of DOM controllers.
- Orbital locking physics purely in CSS transforms driven by the models.

## Failure modes
- DeviceOrientation requires HTTPS and permission on some devices; mouse fallback provided.
- BroadcastChannel only same-origin tabs.
- IndexedDB quota or private mode may fail; falls back to ephemeral.
- MLP is deliberately tiny and untrained beyond local fitness; behavior is emergent not optimal.

## Branch
Branched from recent clusters: WebGPU compute (F599 causal Fourier, F597 Hopfield), orientation RNN/MLP swarms (F598, F597), softbody/DOM physics, spectral/audio. This is pure local JS model + DOM + persistence + sealed broadcast.
