# F504-webgpu-stable-fluids-mlp-advection-mind

**Ledger ID**: F-504  
**Slug**: webgpu-stable-fluids-mlp-advection-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Lennard-Jones DOM swarms (F503), Kuramoto phase-DOM orchestras (F502), ambient-light metabolic swarms (F501), amplitude-collapse portals (F500). Explicitly leaves molecular dynamics, phase oscillators, light/battery sensors, complex amplitudes, reservoirs, WFC, Ising, IFS, SDFs, Kalman, hand constraints, photonic waveguides, LBM, SPH, and all prior particle force fields of those kinds.

## Concept
A 2D Navier-Stokes fluid (stable fluids method: advection, diffusion, projection via Jacobi) is simulated with a WebGPU compute path reserved; the prototype runs a pure-JS grid version for universal compatibility. Dye and velocity are injected by the pointer and by a small population of living DOM Verse cards. Each card is an agent carrying a tiny pure-JS MLP that, given local velocity magnitude, dye concentration, and pointer proximity, outputs an injection force vector and strength. The resulting velocity field advects the cards themselves (they are carried by the flow), morphing page layout in real time. Global kinetic energy and dye entropy drive CSS chrome morphs and a simple Web Audio drone. Full state (velocity/dye moments, MLP weights) seals to IndexedDB. Fully self-contained, offline after first load.

## Novelty
Core novel combination is the stable-fluids Navier-Stokes substrate (never previously used) whose velocity field both carries living DOM agent cards and is driven by those same agents' MLP-controlled force injections, forming a closed physical-AI loop. Not LBM/SPH, not Lennard-Jones, not Kuramoto, not reaction-diffusion rule evolution, not particle neighborhoods, not softbody springs.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Pure-JS 64×64 velocity + dye grids (advection semi-Lagrangian, diffusion Jacobi, projection)
- DOM cards as advected agents with per-agent MLP (local |u|, dye, pointer dist → force)
- Pointer dye+force injection; optional DeviceOrientation bias
- IndexedDB seal of field moments + weights
- Web Audio oscillators modulated by mean kinetic energy
- Controls: add agent, seal, restore, clear, viscosity slider

## Expected outcome
Interactive fluid mind. Cards are swept by swirls they help create; pointer paints dye and kicks flow; agents learn (via sealed transfer or manual) to reinforce interesting vortices. Sealed states restore previous policies. Runnable in any modern browser with no external dependencies; WebGPU compute is the clear next building block for the projection kernel.

## Mechanics
- Grid: 64×64, dt=0.1, viscosity tunable
- Advection: semi-Lagrangian back-trace
- Diffusion/projection: 20 Jacobi iterations
- Agents: N≈6, position updated by bilinear sample of velocity
- MLP: 4→6→2, ReLU
- Seal: SHA-256 of serialized weights + mean |u|
- Chrome morph: hue from dye entropy, scale from kinetic energy

## Failure modes
- High resolution or iterations → CPU bound; drop to 48×48 or fewer Jacobi
- Too many agents → DOM thrash; cap at 8
- WebGPU path not implemented in prototype (JS only)
- IndexedDB unavailable → localStorage fallback
- Numerical blow-up if viscosity too low (clamped)

## Files
drafts/F504-webgpu-stable-fluids-mlp-advection-mind/SPEC.md
drafts/F504-webgpu-stable-fluids-mlp-advection-mind/index.html

## V01D landing
Spatial stage skill under void-live-deploy/skills/stable-fluids-mlp-advection-mind.js; test asserts velocity sample → agent displacement, MLP output → force injection, seal hash integrity.
