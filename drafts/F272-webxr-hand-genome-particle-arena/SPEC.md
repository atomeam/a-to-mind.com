# F-272: WebXR Hand-Steered Multi-Agent Genome Particle Arena

## Concept
True WebXR hand tracking (pinch-to-grab, point-to-steer) as primary causal input into a multi-agent competition. Tiny local MLP genomes (population of 6 agents) each control a cluster of particles on a Canvas2D/WebGPU physics arena. Agents compete for resource particles; fitness is capture rate + diversity. Successful genomes seal to IndexedDB and can be transferred via clipboard. DeviceOrientation tilts gravity. Hybrid DOM agent cards float and update with scores. Progressive: no XR → pointer; no WebGPU → CPU.

## Branch away from
Dominant recent cluster (F264–F271): spectral trajectory harmonics, causal intent attention cards, NCA-LLM morphs, fluid density audio minds, orientation cloth DOM anchors, sealed MLP resource arenas, gaze-persistent IDB fields, intent-RNN fluid orbs. This prioritizes live WebXR hand interaction as the genome steering mechanism over passive pointer/orientation deposits or spectral residuals, with explicit multi-agent competition and sealed transfer.

## Architecture
Single self-contained `index.html`.
- Main: WebXR session request (immersive-ar preferred, inline fallback), hand joint poses → force injection or agent selection.
- Particle arena: 200–400 particles, simple Verlet or Euler integration; resources are glowing particles.
- Agents: each has a 2-layer tiny MLP (8-4-2) that outputs force vector based on relative resource position and local density. Fitness evaluated every 2s; mutation on low performers.
- Worker optional for evolution step.
- IndexedDB for seal/load of best genome.
- CSS 3D or absolute DOM cards for agent status.
- Fallbacks throughout.

## Expected outcome
Enter XR (or use pointer) to grab/steer particle clusters with your hand. Competing agent minds evolve to better harvest resources under your influence. Seal the champion genome. Offline, interactive, expands WebXR + sealed multi-agent building blocks.

## Mechanics
1. Request XR session; track hand joints if available.
2. Pinch or pointer drag applies impulse to nearest particle cluster.
3. Each agent MLP predicts desired force; applied to its particles.
4. Resources respawn; agents score on proximity capture.
5. Periodic evolution: mutate worst, keep best.
6. Seal writes weights + fitness to IndexedDB.
7. Orientation → gravity vector.

## Failure modes
No WebXR → pointer mode complete. No hand tracking → controller or pointer. IndexedDB blocked → in-memory. High particle count may drop FPS on mobile; auto-reduce. Audio optional not included to avoid gesture dependency.

## Building block for future
WebGPU compute shader for particle integration + MLP forward passes; WebRTC datachannel for live genome exchange between peers; sealed genome marketplace on canvas.

## V01D landing
Frontier arena skill (`skills/mini/webxr-hand-genome-arena.js`); test: hand pinch moves cluster, fitness rises over 30s, seal/load restores weights.
