# F500-webgpu-amplitude-collapse-portal-mind

**Ledger ID**: F-500  
**Slug**: webgpu-amplitude-collapse-portal-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU WFC/MLP living grids (F498), Echo State living DOM (F497), DeviceMotion Kalman portals (F496), Ising orient domains (F495), IFS fractal policies (F494), implicit SDF sculptors (F493), battery-metabolism particles (F499). Explicitly leaves constraint propagation, residual reservoirs, sensor-fusion physics, spin systems, fractals, SDFs, metabolic Battery Status, hand constraints, genome auctions, Bayesian message passing, softbody, NCA, LBM, and photonic waveguides.

## Concept
A discrete 2D complex-amplitude field (wavefunction-like) is evolved on a Canvas2D grid (WebGPU compute path is the natural next building block; prototype is universal). Pointer motion injects local phase and magnitude perturbations. A small population of local tiny MLPs (pure JS, 4→4→2) act as measurement agents: each chooses a sample coordinate, reads local |ψ|² and phase gradient, and decides a collapse probability. Successful collapses spawn or morph hybrid DOM Verse portals whose CSS transform, scale, hue, and blur are driven by the measured complex value. Agents compete on a fitness that rewards both high-magnitude collapses and spatial diversity of portal placements. On proximity contact the stronger agent seals and transfers a mutated genome. Full state (field snapshot hash, genomes, portal poses) seals to IndexedDB for offline restore. Fully self-contained, offline after first load. Pointer is the primary causal input; DeviceOrientation provides a secondary phase bias.

## Novelty
Core novel combination is a complex-amplitude interference substrate whose local measurement/collapse events are controlled by competing pure-JS MLPs that physically embody and morph interactive DOM portals. Not WFC constraint solving, not Ising spins, not Kalman tracking, not IFS/fractal iteration, not SDF particle attraction, not echo-state reservoirs, not battery metabolism, not hand-constraint networks, not attention clusters, not softbody mass-spring, not NCA, not LBM fluid, not photonic wave equation.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Canvas2D complex field (real/imag buffers, simple diffusion + interference kernel)
- Local MLP agents (position, velocity, weights) sample and collapse
- DOM portals created on collapse; CSS vars driven by measured amplitude/phase
- IndexedDB seal of field hash + genomes + portal state
- Controls: nucleate, seal, restore, clear

## Expected outcome
Interactive living field of interfering amplitudes. Pointer writes ripples. Agents autonomously measure and collapse high-amplitude regions into morphing DOM portals that respond to the complex value. Sealed states restore previous minds. Chrome (border, glow) reacts to global |amplitude| entropy. Runnable in any modern browser with no external dependencies.

## Mechanics
- Field update: diffusion of real/imag + local phase injection from pointer velocity
- Measurement: MLP outputs sample offset + collapse threshold; if |ψ|² > threshold, collapse (zero local region, spawn portal)
- Fitness: sum of collapsed magnitudes + portal spread
- Genome transfer on AABB overlap when fitness gap > threshold
- Seal: SHA-256 of serialized field moments + weights

## Failure modes
- High grid resolution → CPU bound; drop to 64×64
- Too many portals → DOM thrash; cap at 12
- WebGPU path not implemented in prototype (Canvas only)

## Files
drafts/F500-webgpu-amplitude-collapse-portal-mind/SPEC.md
drafts/F500-webgpu-amplitude-collapse-portal-mind/index.html

## V01D landing
Spatial stage skill under void-live-deploy/skills/amplitude-collapse-mind.js; test asserts collapse → portal transform and seal hash integrity.
