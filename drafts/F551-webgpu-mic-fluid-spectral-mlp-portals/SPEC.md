# F551: WebGPU Acoustic Fluid Spectral MLP Portals

## Concept
A WebGPU-accelerated Navier-Stokes fluid simulation (compute shaders for velocity/pressure) serves as the living medium of the Verse canvas. Ambient microphone input (or simulated oscillator) is analyzed via a pure-JS spectral filter bank (band energies). Each Verse portal is an embodied agent carrying a tiny pure-JS MLP (4→6→3) that maps local fluid velocity residual, spectral energy vector, and proximity to other portals into acoustic buoyancy, expansion rate, and emission strength. Portals are advected by the fluid velocity field and inject reverse pressure based on their resonance. High spectral energy accelerates metabolism, expands portals, and raises emission; low energy induces clustering and dormancy. On high-fitness resonance contact the higher-fitness agent seals and transfers a mutated genome (weights + spectral-history hash). Full state seals to IndexedDB. Fully self-contained, offline after first load. Pointer injects local vortices; keyboard can trigger spectral pulses.

## Branch
Away from particle swarms, SPH, wave interference, orientation MLPs, WebXR gaze/hand, NCA/spectral living cards, and sealed genomes triggered by proximity or prediction success (F501–F550).

## Novelty
- First use of WebGPU Navier-Stokes fluid as the causal medium driving DOM portal rearrangement.
- Microphone spectral features (not ambient light, orientation, or camera flow) as continuous environmental energy flux into local MLP agents.
- Reverse coupling: portals exert acoustic pressure back onto the fluid, creating a closed physical-AI loop never previously attempted.
- Genome sealing and transfer triggered by spectral resonance fitness, not spatial proximity or gaze prediction alone.

## Architecture
- Single index.html: WebGPU device/pipeline setup with compute shaders for fluid steps (advection, pressure, diffusion); fallback Canvas2D semi-Lagrangian approximation.
- AudioContext + AnalyserNode for live mic (permission) or oscillator simulation.
- Per-portal MLP forward pass in JS; soft force integration on absolute-positioned portal elements.
- AABB + resonance check for genome transfer (SHA-256 of weights + recent band history).
- IndexedDB persist of fluid state snapshot, portal poses, genomes.

## Expected outcome
Interactive spatial canvas where sound literally moves and grows the UI portals through a fluid medium controlled by local AI. Users can speak, play music, or inject vortices and watch portals respond metabolically. Demonstrates novel closed-loop WebGPU + local AI + physical DOM + sensory input.

## Failure modes
- WebGPU unavailable → Canvas2D fluid fallback (lower resolution).
- Microphone permission denied → simulated spectral oscillator.
- High portal count or resolution → frame drop; cap at 24 portals, 128² fluid.
- IndexedDB quota → in-memory only.

## Files
- index.html (self-contained, runnable)
- SPEC.md

## Integration
Lands as Verse canvas prototype; expands building blocks for WebGPU fluid media + spectral local models + reverse physical coupling.
