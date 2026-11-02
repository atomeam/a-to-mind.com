# F503-lennard-jones-mlp-dom-swarm-mind

**Ledger ID**: F-503  
**Slug**: lennard-jones-mlp-dom-swarm-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Kuramoto phase-DOM orchestras (F502), ambient-light metabolic swarms (F501), amplitude-collapse portals (F500), battery-metabolism particles (F499), echo-state living DOM (F497), WFC living grids (F498), Ising orient domains (F495). Explicitly leaves phase oscillators, light/battery sensors, complex amplitudes, reservoirs, WFC, Ising, IFS, SDFs, Kalman, hand constraints, photonic waveguides, LBM, SPH, and all prior particle force fields of those kinds.

## Concept
A swarm of particles interacting via the Lennard-Jones potential (short-range repulsion + longer-range attraction) is integrated in pure JS (WebGPU compute path reserved for the pairwise force kernel). Each particle is embodied as an absolute-positioned DOM Verse card. A tiny local MLP per particle modulates its interaction strength (ε) from local density and pointer proximity. DeviceOrientationEvent supplies a global gravity vector. Pointer drag injects a force kick. User can seal a particle’s MLP genome (weights hash + copy) and transfer it to another particle; full configuration (positions, velocities, weights) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

## Novelty
Core novel combination is the Lennard-Jones molecular-dynamics substrate (never previously used in any Frontier Engine draft) whose particles are living DOM cards whose CSS transforms/scale/hue are driven by kinetic energy, closed-loop tuned by per-particle local MLPs controlling interaction parameters, with user-sealed genome transfer and orientation-as-gravity. Not Kuramoto phases, not Ising, not reaction-diffusion/NCA, not SPH/LBM fluids, not softbody springs, not orientation RNN, not attention lattices, not metabolic resource fields.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Pure-JS LJ integrator (N≈12 particles, cutoff)
- DOM cards as physical particles (position from Verlet, scale/hue from speed)
- Per-particle tiny MLP (density + pointer → ε delta)
- DeviceOrientation gravity
- Pointer force injection
- IndexedDB seal of positions + velocities + MLP weights
- Controls: nucleate, seal-selected, transfer, seal-all, restore, clear

## Expected outcome
Interactive living molecular swarm. Particles cluster and bounce under LJ forces; tilt the device to apply gravity; drag to kick particles; seal a strong interactor and transfer its genome to a weak one and watch behavior change. Sealed states restore previous minds. Runnable in any modern browser with no external dependencies.

## Mechanics
- Force: LJ 12-6 truncated; ε_i modulated by MLP
- Integration: Velocity-Verlet, fixed dt
- Embodiment: card.style.transform = `translate(${x}px,${y}px) scale(${1+0.4*speed})`; hue from energy
- MLP: 3→4→1, ReLU, local density (neighbor count) + pointer dist + bias
- Seal: SHA-256 of serialized weights
- Gravity from beta/gamma orientation

## Failure modes
- High N → O(N²) CPU bound; cap at 16
- No DeviceOrientation permission or desktop → gravity zero
- IndexedDB unavailable → localStorage or in-memory
- Too many cards → DOM thrash; cap at 12
- LJ instability if ε large or dt large (clamped)

## Files
drafts/F503-lennard-jones-mlp-dom-swarm-mind/SPEC.md
drafts/F503-lennard-jones-mlp-dom-swarm-mind/index.html

## V01D landing
Spatial stage skill under void-live-deploy/skills/lennard-jones-mlp-dom-swarm-mind.js; test asserts force delta → position change, seal → weight hash, transfer → behavior shift, orientation → gravity vector.
