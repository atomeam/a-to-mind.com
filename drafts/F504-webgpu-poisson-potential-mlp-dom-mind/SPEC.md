# F504-webgpu-poisson-potential-mlp-dom-mind

**Ledger ID**: F-504  
**Slug**: webgpu-poisson-potential-mlp-dom-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Lennard-Jones DOM swarms (F503), Kuramoto phase-DOM orchestras (F502), ambient-light/pressure-tilt metabolic (F501), amplitude-collapse portals (F500), battery-metabolism particles (F499), echo-state living DOM (F497), WFC living grids (F498), Ising orient domains (F495). Explicitly leaves particle force fields, phase oscillators, light/battery sensors, complex amplitudes, reservoirs, WFC, Ising, LBM, SPH, softbody springs, orientation RNNs, attention lattices, and all prior metabolic/resource fields.

## Concept
A 2D Poisson equation (∇²φ = ρ) is relaxed via Jacobi iteration in pure JS (WebGPU compute path reserved for the stencil kernel). Local tiny MLPs (one per agent) inject charge density ρ from pointer proximity and DeviceOrientation tilt bias. The resulting potential gradient advects embodied absolute-positioned DOM Verse cards (velocity ∝ −∇φ). User seals an MLP genome (weights hash + copy) and transfers it to another agent; full state (potential grid + positions + weights) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

## Novelty
Core novel combination is the Poisson potential field solver substrate (never previously used in any Frontier Engine draft) whose gradient drives living DOM cards, with per-agent local MLPs controlling source terms under orientation bias and sealed genome transfer. Not Lennard-Jones/Kuramoto/Ising/LBM particles or phases, not metabolic resource fields, not residual predictors, not NCA, not softbody DOM, not orientation RNNs, not pointer-history force fields.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Pure-JS Jacobi Poisson solver (32×32 grid, ~8 iterations/frame)
- DOM cards as physical agents (position from gradient advection)
- Per-agent tiny MLP (3→4→1, ReLU) outputting charge injection
- DeviceOrientation as global source bias
- Pointer proximity as local source
- IndexedDB seal of grid + positions + MLP weights
- Controls: nucleate, seal-selected, transfer, seal-all, restore, clear

## Expected outcome
Interactive living potential field. Cards flow along gradients; tilt device to bias sources; drag or hover to inject charge and reshape the field; seal a strong injector and transfer its genome to a weak agent and watch flow patterns change. Sealed states restore previous minds. Runnable in any modern browser with no external dependencies.

## Mechanics
- Solver: Jacobi φ_new = (neighbors + ρ)/4, fixed iterations
- Advection: v = −∇φ * strength; position += v * dt; wrap or bounce
- Embodiment: card.style.transform = `translate(${x}px,${y}px) scale(${1+0.3*speed})`; hue from local φ
- MLP: inputs = local |∇φ| + pointer dist + orient bias; output = ρ delta
- Seal: SHA-256 of serialized weights
- Gravity/bias from beta/gamma orientation

## Failure modes
- High grid or iterations → CPU bound; cap 32² / 8 iters
- No DeviceOrientation permission or desktop → bias zero
- IndexedDB unavailable → localStorage or in-memory
- Too many cards → DOM thrash; cap at 8
- Solver divergence if ρ too large (clamped)

## Files
drafts/F504-webgpu-poisson-potential-mlp-dom-mind/SPEC.md
drafts/F504-webgpu-poisson-potential-mlp-dom-mind/index.html

## V01D landing
Spatial stage skill under void-live-deploy/skills/webgpu-poisson-potential-mlp-dom-mind.js; test asserts source injection → gradient change, seal → weight hash, transfer → flow shift, orientation → bias vector.
