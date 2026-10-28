# F311 — WebRTC Sealed Orientation-MLP DOM Arena

**Ledger ID**: F-311 (frontier series)

## Concept
A competitive multi-agent arena of pure DOM orbs whose velocities are driven by tiny local MLPs (genomes = weight matrices). Primary causal input is DeviceOrientationEvent (beta/gamma tilt) plus local resource proximity and peer density. Agents forage floating resource dots on a hybrid canvas density field. Highest-fitness genome seals to IndexedDB and can be transferred (sealed payload) over WebRTC datachannels to remote peers, which inject the received genome as a new agent. Offline-capable: falls back to local multi-agent competition with no signaling.

## Novel combination / Branching
Deliberately leaves the recent cluster of emergent physics simulations (Particle Life social matrices, LBM wing evolution, slime-mold rail networks, Lenia gait, WebGPU Hebbian spatial morph, WebGPU MLP physics pushers) and residual/spectral/attention lattices.

Moves onto preferred under-explored axes:
- Multi-agent competition with **sealed genome transfer** (explicit payload hash + peer injection)
- **WebRTC** shared field (datachannel for genome exchange; local fallback)
- **DeviceOrientation as causal input** to local tiny models
- Local tiny MLP controlling **physical UI elements** (absolute DOM orbs with integrated velocity)
- Persistent IndexedDB sealed genomes + field snapshot
- Hybrid DOM+canvas embodiment (orbs + density dots)

Not a variation of F309 (gaze RNN orbs), F310 (particle-life matrix), or prior orientation/genome arenas that lacked sealed peer transfer.

## Architecture
- Single self-contained `index.html` (no external deps, offline-capable).
- 6 local agents (DOM absolute-positioned orbs). Each has a 5→6→2 tanh MLP (weights ~40 floats = genome).
- Inputs: normalized orient beta/gamma, dx/dy to nearest resource, local peer density, own velocity.
- Outputs: vx, vy deltas; integrate with damping + bounce.
- Resources: 12 canvas dots that respawn on collection; fitness +=1 on contact.
- Seal: SHA-256 of flattened genome + fitness → IndexedDB; display hash.
- WebRTC: simple offer/answer via copy-paste signaling (or manual); datachannel sends sealed JSON {hash, genome, fitness}. Peer injects as new agent (replaces lowest fitness).
- Evolve: mutate non-champ from champ periodically or on button.
- DeviceOrientation: request permission on gesture; fallback to pointer tilt proxy.

## Expected outcome
Users tilt the device (or move pointer) to bias the competitive foraging of MLP-controlled DOM agents. Best genomes seal locally and can be copy-pasted or transferred to a second browser tab/device via WebRTC, expanding the shared competitive field. Density canvas visualizes resource/agent heat. Fully interactive offline.

## Mechanics
- MLP forward: matrix-vector, tanh.
- Integration: 60 fps rAF, velocity damping 0.95, speed cap.
- Fitness continuous proximity bonus + discrete collection.
- Seal/load: IndexedDB `void-f311` store.
- WebRTC: RTCPeerConnection with datachannel; signaling via textarea exchange.

## Failure modes
- No DeviceOrientation / permission denied → pointer-as-tilt proxy (mouse move relative to center).
- WebRTC blocked (CSP, no ICE) → local-only; seal still works.
- IndexedDB unavailable → in-memory genomes.
- High agent count or continuous RTC → minor jank (capped at 8).

## Building blocks for next
Sealed genome round-trip over WebRTC, orientation→MLP→DOM physics, competitive resource arena, hybrid density canvas. Next: true WebXR hand skeletal input to the same MLP agents, larger WebGPU compute MLP kernel, automatic signaling via a simple relay, or multi-peer mesh.

## V01D landing
Skill under `void-live-deploy/skills/mini/webrtc-sealed-orientation-mlp/`; testable by tilt/pointer changing orb velocities, fitness increment on resource contact, seal/load genome identity match, WebRTC genome injection producing a new agent with matching hash.
