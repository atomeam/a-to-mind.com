# F824 WebXR Hand DEM Granular Mind

**Ledger ID**: F-824  
**Slug**: webxr-hand-dem-granular-mind  
**Date**: 2026-11-18  
**Status**: frontier prototype

## Concept
True WebXR hand tracking (pointer fallback) acts as physical colliders inside a previously unused Discrete Element Method (DEM) granular particle simulation. Hand joints (or pointer) push grains via contact repulsion + friction. A tiny local pure-JS MLP takes DeviceOrientation + hand openness as causal input and modulates global material properties (friction, cohesion). High-density clusters softly bind to living absolute-positioned DOM portals that the user can drag or that follow grain aggregates. Seal persists the MLP weights + material params + portal content/positions in IndexedDB. Single-file, offline after load, Canvas2D primary (WebGPU-ready architecture).

## Novelty
Leaves the dominant recent cluster of local neural/associative models (transformer sequence attention F822, Hopfield attractors F823, ES F823, MLPs) driving floating DOM portals or WebGPU continuum kernels (radiosity F818, SPH, LBM, particles, quantum walks). Also leaves speech/flowchart, multitouch SVG, softbody, residual, pure NCA, and spectral residuals.  
Core novel combination: DEM granular contact physics (pairwise overlap repulsion, tangential friction, weak cohesion — not continuum fluid, not SPH kernel, not lattice gas, not softbody springs) + WebXR hands as literal physical colliders + tiny MLP material controller + density-bound living DOM portals. First granular DEM substrate on Verse.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, offline after load.
- ~280 particles with radius, velocity; O(N²) pairwise DEM forces (acceptable at this scale).
- Colliders: pointer (always) + optional WebXR hand joints as soft spheres.
- Tiny MLP: 4 inputs (sin(beta), sin(gamma), pointer down, hand scale) → 4 outputs; tanh; friction/cohesion taken from first two.
- Portals: absolute divs, draggable, soft repulsion from grains, gentle attraction to local high-density regions.
- Persistence: IndexedDB `verse-f824` stores MLP weights, friction/cohesion, portal positions + HTML.
- Controls: Seal, Reset, Add Portal, manual friction/cohesion sliders (overridden by MLP when orientation active).

## Mechanics
1. Load: random grains, two portals, random or restored MLP.
2. Pointer-down or WebXR hands push grains; tilt device (if permitted) drives MLP material changes.
3. Grains pile, form clusters; portals follow dense aggregates or can be dragged through the field.
4. Seal freezes genome; reload restores.

## Expected outcome
Open page: grains settle under gravity. Drag/pointer-down to scoop and pile them. Tilt phone (or move pointer) to change friction/cohesion via MLP — piles become stickier or looser. Portals drift toward piles or can be used as barriers. Seal and reload preserves behavior.

## Failure modes
- No DeviceOrientation: MLP falls back to pointer/hand features; still interactive.
- No WebXR: pointer-only colliders (fully functional).
- IndexedDB blocked: session-only.
- High particle count on low-end: capped at 280, pairwise is the limit.
- Private mode: no persistence.

## Building blocks
Reusable pure-JS DEM contact solver (repulsion + friction + cohesion), WebXR/pointer collider injection into particle fields, density-to-portal binding, tiny MLP material controller. Enables future hybrid granular + sealed multi-agent or WebGPU-accelerated DEM kernels on Verse.

Void is now Verse everywhere.

**Files**: drafts/F824-webxr-hand-dem-granular-mind/SPEC.md, drafts/F824-webxr-hand-dem-granular-mind/index.html
