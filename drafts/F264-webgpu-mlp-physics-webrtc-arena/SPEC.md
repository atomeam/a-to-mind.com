# F264: WebGPU Multi-Agent MLP Physics Arena with WebRTC Sealed Genome Transfer

## Concept
Novel combination: WebGPU compute shader runs parallel tiny MLPs (per-agent weights) that emit forces for a multi-agent soft-particle physics arena. DeviceOrientation (or pointer) injects a global causal bias force. Agents compete for energy orbs; highest-fitness genome is sealed (SHA-256 of weights) to IndexedDB and can be transferred peer-to-peer via WebRTC data channel (or BroadcastChannel fallback). Hybrid embodiment: each agent owns a floating DOM badge that mirrors its position and fitness. Pure local after load; offline-capable.

This expands the Void canvas with GPU-native neural physics kernels, causal orientation input, competitive multi-agent genomes, and true peer sealed transfer.

## Why this branch
Last 8 (F256–F263) clustered on spectral/wave portals, causal attention over trajectories, volumetric residual attention, orientation-causal DOM physics, WebXR hand/gaze MLP arenas, and NCA portals. This deliberately leaves that cluster by using WebGPU compute for neural (MLP) force kernels (not spectral, not residual attention, not volumetric, not NCA), multi-agent competition with sealed genome transfer via WebRTC, DeviceOrientation as primary causal bias, and hybrid DOM badges controlled by the GPU simulation.

## Architecture
- Single self-contained index.html.
- WebGPU: compute shader steps N=32 agents; each has weights for tiny MLP (inputs: pos, vel, energy, orientation bias, nearest orb; outputs force).
- Main thread: readback positions/energies, update DOM badges + Canvas2D fallback.
- DeviceOrientationEvent → global force vector uploaded each frame.
- Pointer as complete fallback (attracts orbs or bias).
- Seal: copy best agent's weights, hash, store IndexedDB, offer WebRTC send.
- WebRTC: simple peer connection with data channel for genome blob (manual signaling via copy-paste room or BroadcastChannel for same origin).
- Offline after first load.

## Expected outcome
Runnable prototype: agents swarm and chase orbs under individual MLP policies biased by device tilt. Select/seal champion, transfer genome to peer tab/device. DOM badges float with agents. Interactive, offline-capable with Canvas2D fallback.

## Mechanics
- MLP per agent: fixed architecture, weights evolve or mutate on low fitness.
- Energy from orbs; collision soft repulsion.
- Orientation adds uniform acceleration.
- Fitness = cumulative energy.
- Seal / Load / Send Genome / Receive.

## Failure modes
- No WebGPU → Canvas2D CPU simulation of same agents/MLPs.
- No DeviceOrientation → pointer bias.
- WebRTC blocked or no peer → IndexedDB + BroadcastChannel only.
- IndexedDB blocked → memory only.

## Building blocks for next
WebGPU parallel MLP physics kernels, sealed genome WebRTC transfer, orientation-causal multi-agent arenas, hybrid GPU-sim + DOM embodiment. Next: true WebXR gaze as per-agent target, or persistent shared field via WebRTC.
