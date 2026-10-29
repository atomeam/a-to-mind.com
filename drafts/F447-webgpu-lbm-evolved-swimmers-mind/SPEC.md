# F200 WebGPU LBM Evolved Swimmers Mind

## Concept
Novel combination: Lattice Boltzmann Method (LBM) fluid kernel in WebGPU compute (previously unused in Verse; prior fluids were SPH/vortex or simple particles) + local tiny evolved MLP controllers for "swimmer" agents that sense local fluid density/velocity gradients and apply thrust. Agents compete by consuming energy from high-density regions, grow, and on collision can transfer sealed genome fragments. Genomes (MLP weights) sealed via Web Crypto SHA-256 and persisted in IndexedDB. User injects momentum by pointer drag. Completely offline, no WebXR, no orientation primary, no attention lattice, no softbody DOM.

Branched away from dominant recent cluster: orientation/DeviceOrientation MLP/RNN hybrids, WebXR hand/gaze controllers, attention/spectral swarms, sealed WebRTC genome fields, softbody/cloth kernels.

## Why novel
- LBM is a lattice-based mesoscopic fluid model (streaming + collision), distinct from particle SPH or NCA.
- Agents are embodied controllers whose policy is evolved locally, not residual predictors or attention.
- Genome sealing + IndexedDB local only (no WebRTC).
- Hybrid: compute fluid + JS/CPU tiny MLPs for agents (or GPU if extended).

## Architecture
- Single index.html
- WebGPU preferred for LBM grid; Canvas2D fallback for density/velocity viz + agents
- IndexedDB for sealed genomes
- Pointer events for fluid injection
- Tiny MLP: 4 inputs (local vx,vy,density,energy) -> 2 outputs (thrust x,y), 1 hidden layer, weights evolved by simple genetic algo or hill-climb on fitness (energy gain)

## Failure modes
- No WebGPU: falls back to 2D canvas simple advection field
- No IndexedDB: genomes session-only
- Performance: small grid 64x64

## Building blocks for next
- Full GPU LBM with agent sensors sampled in compute
- WebXR immersion of the fluid volume
- Multi-tab BroadcastChannel genome exchange
- OPFS persistence of full field state

_Renumbered on 2026-10-29 from F200 (shared with F200-webxr-hand-rnn-dom-physics, the older) to F447: drafts/NUMBERS.md._
