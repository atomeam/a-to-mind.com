# F284 — Predictive Trajectory Residual Morph Arena

## Concept
Pointer trajectory history (sequence of positions + velocities, not single position) is the primary causal input to a local Web Worker tiny predictive model (Elman-style RNN or MLP residual predictor). The model predicts next position; the residual (prediction error / surprise) modulates a Canvas2D / WebGPU particle field (attractors and hue from residual magnitude). High residual spawns or morphs floating DOM "memory cards" that physically rearrange (lerp position/scale/color) based on local field density. Dragging a card injects a correction force and seals the corrected trajectory + model weights to IndexedDB. Optional residual-modulated Web Audio. Progressive WebXR gaze-as-trajectory stub.

Deliberately branches away from F283 (gaze MLP swarm competition), F282 (speech RNN portals), F026/F030 trajectory lattices, residual acoustic fields, and sealed pure-DOM arenas. Core is sequential trajectory prediction residual driving hybrid spatial morph + sealed correction loop.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Canvas2D particles (~40) with residual-driven forces (WebGPU compute path noted for Verlet + residual kernels).
- Worker: tiny predictive RNN (hidden state, weights ~16 floats) on trajectory buffer (last 8 points).
- Trajectory: continuous pointer (or WebXR gaze proxy) sampled; residual = ||predicted - actual||.
- Morph: residual > threshold spawns DOM card with short hash; cards sample density and lerp.
- IndexedDB: seal/load model + recent trajectories.
- Drag cards: inject impulse, update residual, optional seal.
- Offline-capable after load.

## Expected outcome
Runnable interactive prototype. Move pointer in paths to generate residual; watch field morph and cards appear/rearrange. Drag cards to correct. Seal/load. Offline-capable. Expands trajectory-sequence predictive residual + hybrid canvas-DOM morph + sealed correction building blocks.

## Mechanics
1. Pointer move records trajectory; Worker predicts next point.
2. Residual modulates particle attraction/hue and spawns cards on peaks.
3. Cards position near high-density residual zones and respond to drag.
4. Seal button hashes model state + residual stats to IndexedDB.
5. Load restores.

## Failure modes
- No Worker → main-thread predictor.
- No IndexedDB → in-memory only.
- No WebGPU → Canvas2D only (primary).
- Pointer only (no WebXR) → fully interactive.

## Building blocks
Trajectory sequence as causal stream, local predictive residual model in Worker, residual-modulated particle field, hybrid morphing DOM cards with correction loop, sealed genome (weights + traj). Next: WebGPU residual kernel; multi-user residual broadcast.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/trajectory-residual-morph.js`; test: trajectory produces residual >0, residual spawns/moves card, seal/load restores weights.
