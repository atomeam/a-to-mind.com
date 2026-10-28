# F286 — WebRTC Sealed RNN Orientation Shared Arena

## Concept
True WebRTC DataChannel shared multi-agent field. Each agent is a hybrid DOM card + canvas particle driven by a local tiny Elman RNN whose genome (weights) is sealed by simple hash. DeviceOrientation (beta/gamma) is the primary causal input biasing RNN forces and gravity. Agents compete by scoring near a pointer attractor; on collision the higher-score agent transfers a mutated copy of its genome to the lower one. Genomes and transfers sync over WebRTC when peers are connected via manual SDP exchange. Local seals persist to IndexedDB. Fully offline-capable for single-player; multi-peer when signaling is completed.

Deliberately branches away from the recent dominant cluster of WebGPU softbody/genome arenas, residual morphs, WebXR gaze/hand + MLP/swarm/cloth, speech-RNN portals, spectral causal fields, and pure DeviceOrientation-RNN DOM arenas (F278–F285). Core novelty is true WebRTC peer shared field + sealed genome transfer across devices + local RNN controlling hybrid DOM+canvas physical agents under orientation causal input.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Canvas2D for particle field + attractor.
- Absolutely positioned DOM agent cards (draggable, show seal/score) that track agent positions — hybrid embodiment.
- Tiny Elman RNN (4-in, 4-hidden, 2-out) per agent; genome = weights + biases; hash seal.
- DeviceOrientation as global causal tilt (permission button).
- Pointer/click sets attractor; agents seek it and score.
- Collision detection triggers genome transfer (lerp/mutate from winner).
- WebRTC: RTCPeerConnection + DataChannel; manual offer/answer SDP copy-paste (STUN only). On connect, genome updates broadcast.
- IndexedDB store for sealed winner genomes.
- Offline first; peer is progressive enhancement.

## Expected outcome
Runnable interactive prototype. Enable orientation and tilt to bias agent motion. Drag cards or click canvas to attract. Watch collisions transfer genomes (seal changes). Create offer, paste to second browser, connect, observe remote genome sync. Seal winner to IndexedDB. Offline single-tab fully works.

## Mechanics
1. RNN step takes normalized vector-to-attractor + tilt as input; outputs force bias.
2. Physics integrates force + orientation gravity + seeking.
3. Collision: higher score mutates genome onto lower, updates seal, optional WebRTC send.
4. Cards lerp/track positions; drag overrides physics.
5. Seal button stores best genome + seal to IDB.

## Failure modes
- No DeviceOrientation / permission denied → zero tilt (still interactive via pointer).
- WebRTC blocked or no second peer → local only (primary path).
- Manual signaling required (no public signaling server) — copy-paste SDP.
- No IndexedDB → in-memory seals.
- High agent count → simple O(n²) collisions; keep <12.
- Mobile Safari needs user gesture for orientation.

## Building blocks
True WebRTC DataChannel sealed-genome sync, orientation-causal local RNN on hybrid DOM+canvas agents, collision-triggered remote-capable genome transfer, IndexedDB seal store. Next: automatic signaling, WebGPU force kernel, multi-peer mesh.

## V01D landing
Frontier shared-arena skill under `void-live-deploy/skills/mini/webrtc-rnn-arena.js`; test: tilt biases forces, collision changes seal, offer/answer connects and syncs genome, seal loads from IDB.
