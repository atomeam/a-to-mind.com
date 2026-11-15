# F761 WebGPU N-Body WebRTC DOM Agents Mind

## Concept
A novel hybrid spatial interface for The Verse canvas: a population of gravitational N-body particles whose mutual forces are accumulated by a WebGPU compute kernel (pure-JS O(N²) fallback). A subset of particles are embodied as living DOM agent cards. Each agent owns a tiny local MLP whose causal inputs include DeviceOrientation deltas and local field samples; the MLP modulates the agent's effective mass and force bias. Multi-agent competition via fitness (pointer proximity + coverage) enables sealed genome (MLP weight) transfer over WebRTC DataChannels (BroadcastChannel same-origin fallback) and persistence in IndexedDB. Fully offline-capable after initial load. Core novel combination: discrete N-body gravity kernel (previously unused; not SPH, not LBM, not boids, not Biot-Savart vortices) + local MLP hybrid DOM embodiments + WebRTC/IndexedDB sealed genome sharing architecture driven by orientation and pointer.

## Novelty
Leaves the dominant recent cluster of practical utilities (F753 business-card, F754 palette, F757 sleep, F759 trajectory logger), SPH buoyancy (F755), optical-flow boids (F758), OPFS genetic terrains (F756), and WebXR-hand LBM portals (F760). First use of an N-body gravitational force kernel as the spatial substrate for The Verse, combined with WebRTC DataChannel sealed genome transfer (cross-instance) and orientation-causal MLPs on hybrid DOM agents. Not residual predictors, not attention lattices, not pure volumetric injection, not continuum fluids.

## Architecture
- Single index.html (self-contained, offline-capable).
- Agents: 48 N-body particles; 8 bound to absolute-positioned DOM cards.
- Kernel: WebGPU compute for force accumulation when available; pure-JS fallback.
- Genome: MLP weights (small 4-8-2) evolved by mutation + selective copy from higher-fitness agents; sealed and shared via WebRTC or BroadcastChannel.
- Physics: velocity Verlet-like + gravity + soft walls; orientation biases global gravity; pointer attracts.
- Persistence: IndexedDB for best genome; WebRTC for live peer transfer.

## Mechanics
1. Load: init particles, MLPs, try WebGPU, IndexedDB load, optional WebRTC peer.
2. Each frame: accumulate forces, integrate, MLP forward on orientation+local, update DOM transforms/styles.
3. Pointer drag: attract nearby particles, reward fitness.
4. Seal button: transfer high-fitness genomes to peers and store in IDB.

## Expected outcome
Open: particles orbit/cluster under mutual gravity, DOM agents morph and move under their MLPs and orientation tilt. Multi-tab or peer seal shares genomes. Interactive, works offline.

## Failure modes
- No WebGPU: JS N-body.
- No WebRTC: BroadcastChannel or local-only.
- IDB blocked: session-only.
- Low perf: reduce N.

## Building blocks
Reusable WebGPU N-body kernel stub, WebRTC sealed genome channel, orientation-MLP hybrid DOM agents. Expands for next multi-kernel or XR+N-body embodiments.

Void is now Verse everywhere.
