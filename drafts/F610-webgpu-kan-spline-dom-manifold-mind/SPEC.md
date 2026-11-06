# F610-webgpu-kan-spline-dom-manifold-mind

**Ledger ID**: F-610 (frontier series)
**Slug**: webgpu-kan-spline-dom-manifold-mind
**Date**: 2026-11-06

## Concept
Local Kolmogorov-Arnold Network whose univariate spline activations are live, draggable DOM/SVG curves. Editing a curve instantly modulates a WebGPU (Canvas2D fallback) density/attractor field on the Verse canvas. Pointer residuals can lightly evolve the knots. Seal writes knots + field hash to IndexedDB. Offline, single-file, progressive.

## Novelty
Leaves the recent cluster of continuum physics, spectral, residual/attention/MLP/RNN/Hopfield/bandit, speech, hypervector, quadtree, SOM, LIF, ESN, SDF raymarch, and prior implicit SDF sculptor (F493). Core novel combination is the KAN edge functions themselves as the exposed, physically editable interface that is the local-AI substrate driving the spatial manifold. Not a fixed lattice, not particles, not CA/NCA, not symbolic vectors. The mind is a living set of editable univariate functions whose geometry is the controller.

## Architecture
- Single `index.html`.
- Tiny KAN: 2→3→2 with piecewise-cubic or simple spline bases on edges, evaluated in JS.
- 5 interactive SVG cards showing current activation curves; control points are draggable DOM elements.
- WebGPU compute path preferred for density field; Canvas2D fallback always present.
- Pointer injects residual signal for optional micro-evolution of knots.
- Seal: SHA-256(knots JSON + canvas dataURL) → IndexedDB.
- Subtle chrome response to mean residual.

## Expected
Dragging a spline control point warps the live density field in real time. Multiple edits produce non-linear emergent patterns. Seal restores exact function set. Runnable offline.

## Mechanics
User interaction on SVG → update knots → recompute KAN outputs → push to GPU uniforms or CPU field → render. Optional residual-driven knot nudge. Seal/restore.

## Files
drafts/F610-webgpu-kan-spline-dom-manifold-mind/SPEC.md
drafts/F610-webgpu-kan-spline-dom-manifold-mind/index.html
