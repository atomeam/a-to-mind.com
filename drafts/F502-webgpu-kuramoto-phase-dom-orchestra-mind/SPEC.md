# F502-webgpu-kuramoto-phase-dom-orchestra-mind

**Ledger ID**: F-502  
**Slug**: webgpu-kuramoto-phase-dom-orchestra-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of ambient-light metabolic swarms (F501), amplitude-collapse portals (F500), battery-metabolism particles (F499), echo-state living DOM (F497). Explicitly leaves light sensors, battery curves, complex amplitudes, reservoirs/echo-state, WFC, Ising, IFS, SDFs, Kalman, hand constraints, and all prior particle/NCA/attention lattices.

## Concept
A population of coupled phase oscillators governed by the Kuramoto model is simulated in pure JS (WebGPU compute path reserved as next building block for the sine-coupling kernel). Each oscillator is embodied as an absolute-positioned DOM Verse card arranged on a ring. Instantaneous phase drives the card's rotation, hue, and radial scale; the global order parameter (synchronization) morphs page chrome. Coupling strengths form a genome evolved by a local Web Worker genetic algorithm that can be steered toward high synchronization ("orchestra") or controlled desynchronization ("polyphony") by user reward clicks. Pointer drag on a card injects a phase kick that propagates through the coupling. Full state (phases, frequencies, coupling matrix, fitness history) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

## Novelty
Core novel combination is the Kuramoto phase-synchronization substrate (never previously used in any Frontier Engine draft) whose oscillators are living DOM cards whose CSS transforms are directly phase-driven, closed-loop tuned by an evolutionary coupling genome under user-steerable sync/desync fitness, with sealed phase minds. Not particle forces, not amplitude collapse, not residual reservoirs, not light/battery metabolism, not constraint propagation, not softbody springs, not NCA, not LBM, not photonic waveguides.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Pure-JS Kuramoto integrator (N≈12 oscillators)
- DOM cards as physical oscillators (transform, hue, scale from θ)
- Web Worker GA evolving the coupling matrix
- Canvas2D overlay for coupling strength visualization and order-parameter ring
- IndexedDB seal of phases + genome + order-parameter hash
- Controls: nucleate, reward-sync, reward-desync, seal, restore, clear

## Expected outcome
Interactive living orchestra of phase-locked cards. Drag to kick phases and watch ripples of desync; reward synchronization and observe cards lock into coherent rotation/hue waves; reward polyphony and see independent orbits. Sealed states restore previous coupling minds. Chrome (background pulse, border) reacts to the order parameter. Runnable in any modern browser with no external dependencies.

## Mechanics
- Phase update: θ_i += ω_i + Σ K_ij * sin(θ_j - θ_i) * dt
- Embodiment: card.style.transform = `rotate(${θ}rad) scale(${1+0.3*sin(θ)})`; hue from θ
- Order parameter r = |mean exp(iθ)| drives CSS variables
- GA: population of coupling matrices; fitness = ±r + diversity bonus; mutate/crossover ~0.5 Hz
- Phase kick on pointer drag
- Seal: SHA-256 of serialized phases + K matrix + recent r

## Failure modes
- High N → CPU bound; cap at 16
- Worker blocked by CSP → main-thread GA fallback
- IndexedDB unavailable → localStorage or in-memory
- Too many cards → DOM thrash; cap at 12

## Files
drafts/F502-webgpu-kuramoto-phase-dom-orchestra-mind/SPEC.md
drafts/F502-webgpu-kuramoto-phase-dom-orchestra-mind/index.html

## V01D landing
Spatial stage skill under void-live-deploy/skills/kuramoto-phase-orchestra-mind.js; test asserts phase delta → card transform, reward → coupling evolution direction, and seal hash integrity.
