# F283 — WebXR Gaze-Driven Tiny MLP WebGPU Swarm Arena

## Concept
True WebXR gaze (or pointer-as-gaze fallback) is the primary causal input to a population of local tiny MLPs (feed-forward, 4→8→2). Each MLP steers its agent’s force in a WebGPU compute particle swarm (or Canvas2D fallback). Agents compete for proximity to the gaze attractor; higher-fitness agents capture and partially transfer sealed genomes (MLP weights) from weaker neighbors. Genomes and population persist via IndexedDB. Hybrid embodiment: DOM cards track top agents and can be dragged to inject bias. Optional BroadcastChannel multi-tab shared field simulation. Fully offline after load.

Deliberately branches away from the recent cluster of spectral/acoustic residual fields, causal portals (speech/spectral), predictive force injection, sealed-genome pure DOM arenas, DeviceOrientation RNNs, and WebXR hand neural-cloth (F275–F282). Core is WebXR gaze + local MLP (not RNN) controlling WebGPU physics swarm + sealed genome transfer + persistent shared field.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- WebGPU: compute shader for Verlet integration + pairwise soft collisions if available; else Canvas2D ~24 agents.
- Worker: tiny MLP forward pass per agent (or batched main-thread for simplicity).
- Gaze: WebXR immersive-ar or inline with gaze-tracking if supported; else continuous pointer position.
- Genome: Float32Array of MLP weights (~20 floats). Hash for seal id.
- Competition: proximity to gaze target + energy; capture within radius copies 30% weights + mutation.
- IndexedDB: seal/load population.
- BroadcastChannel: optional “shared field” sync of sealed genomes across tabs (local multi-user proxy).
- DOM cards: absolute, show short hash + fitness; drag adds force.

## Expected outcome
Runnable interactive prototype. Move pointer (or enter WebXR) to attract the swarm. Watch genomes transfer on capture. Drag cards, seal/load. Offline-capable. Expands WebXR gaze causal stream + local MLP physics control + WebGPU compute swarm + sealed transfer + persistent shared field building blocks.

## Mechanics
1. Click “Enable Gaze / Start” (requests WebXR if present, else pointer mode).
2. Gaze/pointer position is attractor.
3. Each agent MLP maps local features (dist to attractor, nearest rival, own vel) → force.
4. Swarm integrates; capture transfers genome.
5. Seal button hashes and stores to IndexedDB; BroadcastChannel posts seal.
6. Cards lerp to agent positions.

## Failure modes
- No WebXR → pointer fallback (fully interactive).
- No WebGPU → Canvas2D only.
- No Worker → main-thread MLP.
- No IndexedDB → in-memory only.
- No BroadcastChannel → single-tab.
- Permission denied → still runs with pointer.

## Building blocks
WebXR gaze (or proxy) as causal input, local tiny MLP controlling physical agents, WebGPU compute physics kernel, sealed genome transfer on competition, IndexedDB + BroadcastChannel persistent shared field, hybrid DOM cards. Next: full WebRTC data-channel genome broadcast; multi-user sealed transfer; gaze-triggered portal.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/gaze-mlp-swarm.js`; test: gaze moves attractor, capture changes genome hash, seal/load restores population.
