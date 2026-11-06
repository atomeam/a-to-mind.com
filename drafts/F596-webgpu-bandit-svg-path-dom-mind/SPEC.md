# F596 Bandit-Driven Generative SVG Path Mind

**Ledger ID**: F-596 (frontier series)

**Slug**: webgpu-bandit-svg-path-dom-mind

**Date**: 2026-11-05

## Concept
A set of living SVG cubic-Bézier paths whose control-point growth styles are selected each step by a local multi-armed bandit (ε-greedy, 6 arms) running in a Web Worker. Pointer trajectories deposit decaying energy into a Canvas2D density field (WebGPU compute path noted for next). Path ends are attracted toward high-density regions. User clicks on path segments reward the current arm; rewards update bandit estimates. Floating editable DOM cards are bound to path control points and can be dragged to re-seed density. Page chrome (hue, contrast) morphs with bandit entropy and field energy. State seals to IndexedDB. Progressive: WebGPU density kernel when available; flat-mode fully interactive.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/SDF/particle/fog/warp/electrostatic kernels (F590–F594) and the non-neural decision-tree clip-path swarm (F595). Core novel combination is a local multi-armed bandit as the generative controller for living SVG vector paths, with causal density attraction and reward from direct path interaction, embodied by editable DOM cards attached to control points. Not residual predictors, not attention lattices, not NCA, not softbody springs, not orientation-bin trees, not neural weights. The mind is a bandit policy over path-generation styles whose fitness is user-directed path engagement.

## Architecture
- Single index.html, fully self-contained, offline after load.
- Canvas2D full-screen density field (80×50 logical, upsampled).
- SVG overlay with 5 living cubic paths; each path has 4–6 control points.
- Blob Worker maintains 6 bandit arms (style vectors: curvature bias, growth rate, attract gain, noise).
- Main thread steps paths, samples density for attraction, updates DOM card transforms from control-point positions.
- Click path → reward current arm; drag card → inject density seed.
- Seal (S) / restore (R) via IndexedDB key `verse-f596`.
- CSS custom properties drive chrome morph from entropy + energy.

## Building blocks for next
Bandit genomes as transferable non-neural generative controllers; living SVG paths as vector embodiment; density-attracted control points; editable DOM cards as spatial seeds.

## Failure modes
Worker CSP block → static arm. Extreme path values clamped. IndexedDB may fail in private mode → session only. No WebGPU (Canvas2D primary). Pointer-only interaction.
