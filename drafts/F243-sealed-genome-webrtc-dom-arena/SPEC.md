# F-243 Sealed Genome WebRTC DOM Arena

**Date:** 2026-10-23  
**Status:** runnable prototype  
**Slug:** F243-sealed-genome-webrtc-dom-arena

## Concept
Novel combination deliberately branching from the recent acoustic-orientation crystal / memory-lattice / neural-DOM-policy / fluid cluster (F238–F242):

- Multi-agent competition with sealed genome transfer realized over a local WebRTC data-channel peer pair (manual offer/answer signaling via copy buttons; BroadcastChannel fallback for same-browser multi-tab).
- Agents are hybrid DOM embodiments: floating physical cards (CSS transforms + simple Verlet) whose acceleration is produced by a local tiny RNN (one hidden state) rather than MLP.
- WebGPU compute path (when available) evaluates the RNN step for all agents in one dispatch; CPU fallback otherwise.
- DeviceOrientation is a shared causal "wind" vector that biases every agent's physics on both peers.
- Champion genome is hashed (SHA-256) and sealed to IndexedDB; on transfer the remote peer receives only the sealed payload and must re-validate the hash before injection.
- Leaves pure field lattices, spectral residuals, pointer-history deposits, and visual-only consolidation. Expands under-explored axes of true peer-to-peer sealed genome transfer + local RNN controlling physical UI elements.

## Architecture
- Single self-contained index.html.
- Agents: 6–12 real `<div class="agent">` elements.
- Genome: Float32Array packing RNN weights + bias (input 5 → hidden 8 → output 2 + recurrent).
- Physics: Verlet integration, boundary reflection, orientation wind.
- WebGPU: compute shader reads state+genome buffers, writes new velocity; readback for DOM update.
- WebRTC: RTCPeerConnection with data channel "genomes"; offer/answer + ICE candidate exchange via UI copy/paste (or BroadcastChannel when same origin).
- Seal: crypto.subtle.digest of champion weights → IndexedDB "F243-champions".
- Progressive: buttons for orientation permission, WebRTC start, seal, and XR stub.
- Offline-capable after first load (WebRTC requires network for STUN but signaling is manual).

## Expected outcome
Open two tabs or two devices. Start peer, copy offer, paste into other, complete handshake. Tilt device; agents on both sides feel the same wind. Local agents compete for energy deposits (click). Every few seconds the local champion is sealed and offered for transfer; remote injects if hash matches. Fully interactive with CPU fallback.

## Failure modes
- No WebGPU → CPU RNN path.
- Orientation denied → zero wind.
- WebRTC ICE failure → BroadcastChannel local mode only.
- IndexedDB blocked → memory-only seals.
- Autoplay / permission blocks → graceful degradation.

## Building blocks for next
- Full WebXR hand/gaze that grabs and mutates an agent genome in place.
- Automatic signaling via a tiny public STUN-only helper or WebSocket.
- OPFS persistence of full population genomes.
- Larger recurrent kernels or multi-step unrolls in the compute shader.

V01D landing: skill under void-live-deploy/skills/sealed-genome-arena or canvas mode. Test: sealed hash round-trips; remote agent fitness improves after successful transfer; orientation wind matches across peers within tolerance.
