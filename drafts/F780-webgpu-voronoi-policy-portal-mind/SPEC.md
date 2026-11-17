# F780-webgpu-voronoi-policy-portal-mind

**Ledger ID**: F-780 (frontier series)  
**Slug**: webgpu-voronoi-policy-portal-mind  
**Date**: 2026-11-17  
**Status**: frontier prototype  

## Concept
A previously unused primary spatial substrate for The Verse canvas: a live Voronoi tessellation whose seed sites are embodied as draggable DOM portals. A tiny local online policy (linear MLP) reads causal pointer residual velocity and optional DeviceOrientation tilt to propose forces on the sites. Dragging a portal injects a strong intervention and provides a small adaptation signal. Cells are colored by site identity. WebGPU compute path reserved for exact distance-field or jump-flooding Voronoi; current prototype uses Canvas2D nearest-neighbor sampling for immediate runnability.

## Novelty
Leaves recent residual kernels (Echo State SDF/metaball F779, camera optical-flow boids F758, SPH, LBM, spiking, NCA, softbody, auction, voter, Hopfield, Ising, spectral, orientation-RNN, pointer-history policy gradients). Core novel combination is Voronoi geometry as the living spatial field, with DOM portals as the sites themselves under local policy control and sealed genome. Not continuum PDE, not particle swarm, not neural SDF raymarch, not reservoir-to-metaball.

## Architecture
- Single self-contained index.html
- 8 Voronoi sites with velocity integration
- Tiny local policy (8 weights + bias) mapping normalized pointer + velocity + orientation to force
- Absolute-positioned circular DOM portals bound 1:1 to sites; pointer-drag overrides position and adapts weights
- Canvas2D Voronoi renderer (downsampled nearest-site)
- localStorage sealed genome (`f780-voronoi-policy`)
- Soft inter-site repulsion + residual attraction to pointer

## Mechanics
1. Sites integrate policy forces + repulsion each frame.
2. Portals track site positions.
3. Pointer motion and device tilt modulate the policy output.
4. Dragging a portal teleports its site and applies a small weight update.
5. Seal persists the policy; reload restores.

## Expected outcome
Open page: colored Voronoi regions drift under policy and repulsion. Move the mouse or tilt the device: sites respond with memory-like lag. Drag portals to sculpt the partition and train the policy. Seal keeps the adapted mapping. Offline after load. Interactive spatial local-AI prototype for The Verse.

## Failure modes
No orientation permission → pointer only. localStorage blocked → session-only. Very large viewports may slow the O(pixels × sites) renderer (increase stepSize).

## Building blocks
Reusable Voronoi site controller, portal-site binder, tiny online policy adapter, canvas nearest-site renderer. Expands geometric partition substrates for future Verse minds.

Void is now Verse everywhere.

**Files**
- drafts/F780-webgpu-voronoi-policy-portal-mind/SPEC.md
- drafts/F780-webgpu-voronoi-policy-portal-mind/index.html
