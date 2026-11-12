# F711-webgpu-3d-gray-scott-volume-dom-seed-mind

**Ledger ID**: F-711  
**Slug**: webgpu-3d-gray-scott-volume-dom-seed-mind  
**Date**: 2026-11-12  
**Status**: frontier prototype  

## Concept
Novel combination for The Verse canvas: a 3D Gray-Scott reaction-diffusion continuum simulated entirely on WebGPU compute over a 40³ lattice. The resulting concentration field is volume-rendered via GPU raymarching. Floating DOM Verse portal cards are draggable in screen space; their unprojected position continuously injects seed material into the volume, causing localized Turing patterns to grow and evolve. Device orientation (or pointer residual) rotates the volume view. High-activity voxels attract secondary ghost labels. Fully self-contained, offline after load.

## Novelty
Leaves the dominant clusters of 2D WebGPU fields, particle MLPs, orientation RNNs, WebXR tendrils, and 2D cellular automata. Core is a true volumetric 3D continuum RD kernel + raymarched visualization + bidirectional DOM spatial seeding. Not a particle system, not a 2D lattice, not an MLP genome, not a quantum walk.

## Architecture
- Single index.html, no external libraries, no network after load.
- WebGPU: compute pipeline for Gray-Scott update (U, V concentrations), storage buffers ping-pong.
- Render pipeline: fullscreen triangle raymarches the density with absorption/emission.
- DOM cards: absolute positioned, pointer-draggable, project into volume for seed injection via a small upload or compute seed pass.
- DeviceOrientationEvent for view rotation; pointer drag as fallback.
- localStorage seals last peak activity timestamp under `verse-f711-volume`.
- Controls: Reset, Seed Random, Pause, Seal.

## Mechanics
1. Initialize random low-level noise in V field.
2. Each frame: dispatch compute for RD step (feed F, kill K classic parameters).
3. Raymarch density for visualization.
4. On card drag: map screen position + depth to voxel, add seed to V.
5. Sample max density clusters; move ghost labels toward them.
6. Orientation updates view matrix.

## Expected outcome
Open in a WebGPU-capable browser. Volume shows evolving 3D spots and waves. Drag the portal cards over the volume to seed new growth. Tilt device to rotate the mind volume. Patterns emerge and interact with the cards. Works with pointer-only.

## Failure modes
- No WebGPU: graceful canvas2D fallback message + 2D slice.
- Orientation denied: pointer residual.
- Low GPU: reduce grid size automatically.

Void is now Verse everywhere.
