# F461 — WebXR Gaze Online-MLP DOM Physics

## Concept
Novel combination that deliberately branches away from the recent evolutionary-genome / WebGPU SPH-PBD-spectral / hand-constraint / spatial-audio / L-system cluster.

True WebXR viewer pose (head orientation projected as gaze direction) with DeviceOrientation + pointer fallback supplies continuous causal input to a local tiny online-learning MLP (6→12→3). The MLP outputs force vectors that drive simple Verlet integration on floating DOM cards — a hybrid physical UI embodiment. Online updates occur on dwell proximity or explicit reward (click/button). Weights seal to IndexedDB under a short SHA-256 id. Single self-contained offline-capable file.

## Why novel
- Online-learning (simple supervised pull toward reward target) MLP driven by WebXR gaze has not appeared; prior MLPs were static random or evolutionary genomes.
- Hybrid embodiment: gaze/orientation → local model → physical DOM Verlet cards (not canvas particles, not WebGPU kernels, not constraint projections on points).
- Sealed local weight persistence in a new architecture tied to gaze-adaptive forces.
- No genomes, no multi-agent competition transfer, no spectral residuals, no pure NCA.

## Prior cluster branched from
Dominant recent cluster (F453–F460): L-systems, deviceorient Hebbian genome theft, semantic point morph, granular BroadcastChannel genome, spectral feedback swarm, WebXR hand PBD MLP constraints, WebGPU SPH MLP agents, spatial audio evolutionary agents.

## Interaction
- Pointer moves gaze proxy; DeviceOrientation tilts effective gravity.
- “Enter WebXR Gaze” requests immersive-vr and uses viewer pose orientation as gaze.
- Cards drift under MLP-predicted forces + orientation gravity; near-gaze cards highlight and accumulate dwell.
- Click a card or “Reward Dwell” performs online MLP update toward attracting that card to current gaze.
- “Seal MLP Weights” stores snapshot in IndexedDB with hash id; auto-loads on next visit.
- Reset repositions cards (weights persist).

## Files
- index.html — single self-contained runnable prototype

## Expected outcome
DOM cards physically respond to gaze-driven MLP forces; online learning shifts behavior after rewards; sealed weights persist across reloads. Works offline after load. WebXR falls back gracefully to pointer/orientation.

## Failure modes
- WebXR requires compatible browser/headset; most users stay on pointer proxy (visual + learning still functional).
- Online learning is untrained/random-init; forces are stable but not strongly optimized without repeated rewards.
- IndexedDB unavailable in private mode → seal reports hash but does not persist.
- High card count on low-end devices → reduce N (currently 8).

## Building blocks for next
True WebXR hand-joint gaze hybrid with hit-test, multi-peer WebRTC sealed weight exchange under hold-gate, WebGPU compute for denser DOM-synced softbody, local RNN sequence model on gaze history controlling CSS 3D transforms, persistent shared field across tabs via BroadcastChannel of sealed MLP states.
