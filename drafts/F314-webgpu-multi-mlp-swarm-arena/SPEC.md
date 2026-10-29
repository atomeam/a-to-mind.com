# F314 — WebGPU Multi-MLP Compute Swarm Arena

**Ledger ID**: F-314 (frontier series)

## Concept
A competitive multi-agent arena where four independent tiny MLPs (genomes) each steer a swarm of particles. Primary update runs in a WebGPU compute shader (particle position/velocity integration with per-swarm force bias uploaded from CPU MLP forwards). Fitness is spatial cohesion + resource proximity. Champion genome seals to IndexedDB and is exportable as copyable JSON for offline sealed transfer. Pure canvas/WebGPU embodiment — no physical DOM cards or orbs. DeviceOrientation optional global bias. Fully offline single file with Canvas2D fallback.

## Novel combination / Branching
Deliberately leaves the recent cluster of hybrid DOM physical sculptors/pushers/orbs (F307, F310, F311, F313), DeviceMotion/Orientation-primary causal neural controllers of UI elements, attention-wave sonifiers, Particle-Life bidirectional DOM, and residual predictors.

Moves onto:
- **True WebGPU compute shader as the physics kernel** for multi-swarm particles
- Local tiny MLPs evaluated on CPU but driving GPU forces in parallel competition
- Multi-agent competition with sealed genome (IndexedDB + clipboard JSON)
- Pure spatial canvas embodiment (no DOM physical UI elements)
- Optional DeviceOrientation as secondary bias only

Not a variation of F307 (MLP physics DOM pushers), F311 (orientation MLP DOM arena), F313 (causal motion RNN hybrid sculpt), or F310 (particle-life DOM).

## Architecture
- Single `index.html`.
- 4 agents × 128 particles in GPU storage buffer.
- MLP 4→6→2 tanh; weights ~30 floats per genome.
- Compute shader: integrate vel += force * dt + damping, bounce, optional inter-swarm repulsion.
- CPU: each frame forward MLPs from swarm stats + pointer, upload force buffer, dispatch.
- Fitness: average pairwise cohesion + proximity to mouse-placed resources.
- Seal: SHA-256 prefix of best genome → IndexedDB.
- Export/inject via textarea.
- Fallback: full Canvas2D Euler if no WebGPU.

## Expected outcome
Particles form competing colored swarms steered by evolving MLPs. User places resources by click; tilt optionally biases. Best genome seals and can be transferred. Runnable offline; WebGPU preferred.

## Failure modes
- No WebGPU → Canvas2D particle fallback, still competitive.
- DeviceOrientation denied → pointer-only.
- IndexedDB blocked → in-memory + clipboard only.
- High particle count → drop to 64 per swarm.

## Building blocks for next
WebGPU multi-swarm compute kernel + CPU neural force drivers + sealed multi-agent genomes. Next: full WGSL neural kernel (MLP inference on GPU), WebXR hand as per-agent input, WebRTC mesh of sealed swarms.

## V01D landing
Skill under `void-live-deploy/skills/mini/webgpu-multi-mlp-swarm/`; testable by swarm motion responding to pointer/resources, fitness increasing, seal/load identity, JSON transfer producing matching behavior.
