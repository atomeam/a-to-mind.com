# F766-webgpu-wave-dampener-mlp-portal-mind

**Ledger ID**: F-766
**Slug**: webgpu-wave-dampener-mlp-portal-mind
**Date**: 2026-11-15
**Status**: frontier

## Concept
A novel hybrid spatial interface for The Verse canvas: a 2D finite-difference wave equation (linear acoustic wave with damping) runs as the primary substrate (pure-JS for reliability; WebGPU compute path prepared). Living DOM "dampener" portals are hybrid embodiments that actively modify the physics: each carries a tiny local MLP whose outputs set local damping strength around itself and mild position bias. Causal inputs are local wave height/velocity, pointer distance, and DeviceOrientation. Agents compete via fitness (absorbed energy + drag rewards). Seal transfers the winning genome and persists it in localStorage. Pointer/mouse injects sources; orientation adds a weak bias force.

## Novelty
Leaves the dominant recent cluster of WebGPU field/particle kernels (LBM fluid F760, N-body gravity F761, SDF raymarch F762, LIF spiking F763, KdV solitons F764, FFT spectral F765, optical-flow boids F758). Core novel combination is active agent control of the physical substrate itself (MLP-controlled local damping that shapes wave propagation) + wave-equation kernel (not fluid, not soliton, not spectral, not particle) + hybrid DOM portals that are both observers and actuators. Not a passive sampler of a pre-existing field.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, fully offline-capable.
- 48×48 grid wave equation: height h and velocity v updated via finite differences each frame.
- 5 absolute-positioned DOM portals. Each owns a 4→6→3 MLP.
- MLP inputs: [localH, localV, pointerDist, orientBeta]
- MLP outputs: [extraDamp, dxBias, dyBias]
- Portals apply extra damping in a 5×5 neighborhood and gently drift.
- Fitness accumulates |localH| + drag proximity.
- Seal button copies best weights to all others and stores in localStorage (`verse-f766-genome`).
- Canvas2D renders the wave height field (red/blue).
- DeviceOrientationEvent listened for tilt bias.
- WebXR presence detected (hand injection stubbed for future).

## Mechanics
1. Load: init wave grids, spawn portals with random MLPs, restore sealed genome if present.
2. Pointer move/down: inject source amplitude at grid cell.
3. Each frame: portals forward MLP, apply local damping, update positions, accumulate fitness; then wave step (laplacian → acceleration → integrate); render.
4. Drag a portal to reward its fitness and reposition it.
5. Seal: lock and spread the highest-fitness genome.

## Expected outcome
Open: wave ripples from mouse. Portals glow and drift, actively damping local regions according to their learned policy. Drag to train, Seal to evolve, reload preserves winner. Interactive spatial wave mind.

## Failure modes
- Low performance: drop to N=32.
- No orientation: zero bias.
- Storage blocked: session-only genomes.
- No pointer: static source.

## Building blocks
Reusable JS 2D wave equation with agent-controlled local parameters, MLP hybrid actuators, sealed competitive transfer. Expands for next WebGPU wave kernels, multi-band dampeners, or WebRTC shared wave fields.

Void is now Verse everywhere.

**Files**: drafts/F766-webgpu-wave-dampener-mlp-portal-mind/SPEC.md, drafts/F766-webgpu-wave-dampener-mlp-portal-mind/index.html
