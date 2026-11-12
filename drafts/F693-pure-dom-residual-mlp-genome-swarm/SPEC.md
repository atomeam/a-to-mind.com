# F693 Pure DOM Residual MLP Genome Swarm

**Ledger ID**: F-693 (frontier series)  
**Slug**: pure-dom-residual-mlp-genome-swarm  
**Date**: 2026-11-11  
**Branch from**: Recent cluster of WebGPU continuum/particle kernels (raymarch SDF + Kanerva F692, DEM granular F691, boids flocking F690, semantic embedding forces F689, sandpile avalanche F687, wave-equation F686, anchor-positioning agents F685, inertial filters F684). Explicitly leaves continuum fields, particle systems, SDF raymarch, fluid kernels, sandpile SOC, and WebGPU compute substrates.

## Concept
A swarm of living absolute-positioned DOM cards that are the agents themselves. Each carries a tiny local pure-JS MLP. Causal inputs are DeviceOrientation (beta/gamma tilt) plus a short pointer-velocity residual (actual delta minus a simple linear predictor). MLP outputs continuous velocity and style biases. Agents compete by proximity: the higher-fitness card seals and transfers a hashed fragment of its weights to the lower one. Best genomes persist in IndexedDB and migrate across tabs via BroadcastChannel. Fully offline single-file prototype. No canvas continuum, no WebGPU, no particle lattice.

This deliberately leaves the dominant recent continuum/particle WebGPU cluster. Core novel combination is pure hybrid physical UI embodiment (DOM cards as the sole agents) under residual-causal local MLPs with proximity-gated sealed genome transfer. Not a field kernel, not particle physics, not residual predictor on a continuum, not softbody springs.

## Architecture
- Single index.html, self-contained, offline after load.
- 8 absolute DOM cards, each with independent 4-8-2 MLP (orientation + residual → vx, vy).
- Pointer residual: maintain short history, simple AR(1) predictor, residual feeds MLP.
- Fitness: inverse distance to pointer + click rewards + stability.
- On proximity < 80px: higher fitness transfers 30% of weights (with small mutation) to lower.
- IndexedDB key `verse-f693`; BroadcastChannel `f693-genome`.
- Seal button persists best. Click card to reward. Drag to reposition temporarily.
- Fallback: pointer-only if no DeviceOrientation.

## Interaction
- Tilt device or move pointer to drive residual + orientation.
- Click cards to boost fitness and trigger potential transfer.
- Seal button to persist.
- Reload restores from IndexedDB.

## Novelty
Leaves continuum WebGPU kernels, particle swarms, SDF, fluids, sandpile, and prior orientation RNNs or attention lattices. New building block: residual-causal pure-DOM multi-agent genome competition.

## Failure modes
- DeviceOrientation requires secure context + permission.
- IndexedDB may fail in private mode (falls back to session).
- BroadcastChannel same-origin only.
- MLP is tiny; behavior is emergent.

## Files
drafts/F693-pure-dom-residual-mlp-genome-swarm/SPEC.md  
drafts/F693-pure-dom-residual-mlp-genome-swarm/index.html
