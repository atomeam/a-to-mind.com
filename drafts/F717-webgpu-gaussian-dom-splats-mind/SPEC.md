# F717-webgpu-gaussian-dom-splats-mind

**Ledger ID**: F-717 (frontier series)
**Slug**: webgpu-gaussian-dom-splats-mind
**Date**: 2026-11-12
**Status**: frontier prototype

## Concept
A novel hybrid spatial interface for The Verse canvas: a small number of living "Gaussian splat" agents embodied as absolute-positioned DOM cards whose position, scale, opacity, blur, and hue are controlled by a pure local tiny MLP (no attention, no reservoir, no Q-table). A parallel WebGPU compute kernel maintains a residual density field that the MLPs read as contextual features. Pointer or DeviceOrientation injects attraction/repulsion; click rewards fitness. High-fitness genomes (MLP weights) transfer with mutation on proximity and can be sealed to IndexedDB + BroadcastChannel. Offline after load. Not previously built: Gaussian-style soft splat embodiment (CSS filter + transform) driven by local MLP reading a WebGPU density residual, with sealed genome transfer.

## Why Novel
Leaves the dominant recent clusters of continuum fields (LBM, wave, SPH, Gray-Scott, SDF raymarch), particle systems, attention matrices, reservoirs/ESN, expression trees, Q-learning, hypervectors, and Paint Worklets. Core novel combination is CSS-embodied soft Gaussian splats (position + scale + blur + opacity as splat parameters) whose controller is a local MLP that reads a WebGPU residual density field, with fitness-gated sealed genome exchange. Not discrete CA, not rigidbody/PBD, not audio primary, not WebXR primary.

## Architecture
- Single index.html, self-contained.
- WebGPU (fallback Canvas2D density viz) runs a simple diffusion residual on a low-res grid.
- 12 DOM "splat" cards.
- Each has a 6-input (density sample + pointer delta + orientation + fitness) → 5-output (dx, dy, dscale, dopacity, dhue) MLP (~40 weights).
- Fitness: inverse pointer distance + click rewards – overlap penalty.
- Proximity < 80px: transfer 30% weights + mutation.
- IndexedDB key `verse-f717-splats`. BroadcastChannel `verse-f717`.
- Seal button persists best. Reset re-randomizes.
- Pointer velocity substitutes for orientation on desktop.

## Interaction
- Request Orientation if available.
- Move pointer or tilt: splats drift, grow/shrink, blur, and recolor according to their MLPs while a soft density field evolves underneath.
- Click a splat to reward it.
- Seal to persist best genome.
- Second tab can receive genomes.

## Expected outcome
Interactive spatial soft-splat mind whose visual parameters are learned locally from user motion and residual density, with sealed multi-tab transfer. Expands the frontier into CSS-native soft particle embodiment controlled by local models reading GPU residual fields.

## Failure modes
- WebGPU unavailable → Canvas2D density only, DOM still works.
- Orientation denied → pointer residual only.
- IndexedDB blocked → session-only.
- High blur on many cards: limit count to 12.

Void is now Verse everywhere.

**Files**: drafts/F717-webgpu-gaussian-dom-splats-mind/SPEC.md, drafts/F717-webgpu-gaussian-dom-splats-mind/index.html
