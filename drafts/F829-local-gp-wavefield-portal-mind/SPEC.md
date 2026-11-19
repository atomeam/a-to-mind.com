# F829 Local Genetic Programming Wavefield Portal Mind

**Ledger ID**: F-829  
**Slug**: local-gp-wavefield-portal-mind  
**Date**: 2026-11-19  

## Concept
A pure-JS genetic programming system evolves mathematical expression trees that map DeviceOrientation (or pointer velocity residual) and time into source terms and damping coefficients for a 2D wave equation. The wavefield is simulated on a discrete lattice (WebGPU compute preferred, Canvas2D fallback). Absolute-positioned living DOM portals display the current best expression as readable text, sample local wave amplitude to modulate their scale and hue, and accept click rewards that boost fitness. Dragging a portal injects a Gaussian seed into the field. Seal persists the winning expression genome to IndexedDB and broadcasts via BroadcastChannel; receivers adopt only higher-fitness genomes.

## Novelty
Leaves the recent cluster of Coupled Map Lattice + MLP (F828), PSO layout optimizers (F827), Kalman chain (F826), Gray-Scott Bayesian portals (F825), DEM granular (F824), Hopfield attractors (F823), spatial transformers (F822), LDS waves, Echo-State, Physarum, Ising, Lenia, lattice-gas, softbody, NCA, spectral, quantum walk, SPH/LBM. Core novel combination is previously unused genetic programming of symbolic expression trees (not neural weights, not particle-swarm positions, not Kalman state estimates, not Bayesian counts) as the local causal mind controlling a wave-equation substrate, with the expressions themselves embodied as living readable text portals under reward-gated sealed genome transfer. Not previously built.

## Architecture
- Single index.html (progressive, offline after load)
- GP: population 16, max depth 5, ops + - * / sin cos abs, terminals: o (orientation magnitude), p (pointer residual), t (time), constants
- Wavefield: 48×48 grid, discrete wave equation, source from eval(expression)
- 3 DOM portals: absolute, draggable, text = best expr, scale by local amp, click = reward
- Persistence: IndexedDB `f829-gp`; BroadcastChannel `f829-genome`
- Seal adopts higher fitness

## Expected outcome
Runnable prototype: tilt or move pointer evolves expressions that drive wave patterns; portals show and pulse with the math; click to reward good ones; Seal persists and transfers the mind. Graceful fallbacks.

## Failure modes
No DeviceOrientation → pointer residual only; no WebGPU → Canvas2D; IndexedDB denied → memory; expression eval errors clamped.

## Files
drafts/F829-local-gp-wavefield-portal-mind/SPEC.md
drafts/F829-local-gp-wavefield-portal-mind/index.html
