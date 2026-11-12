# F695 Orientation Causal SVG Morph Genome Mind

**Ledger ID**: F-695 (frontier series)  
**Slug**: orientation-svg-morph-genome-mind  
**Date**: 2026-11-11  
**Branch from**: Recent cluster of WebGPU continuum/particle kernels (SDF raymarch Kanerva F692, DEM granular hand F691, boids flocking F690, semantic forces F689, sandpile F687), pure-DOM residual MLP genome swarms (F693), and spatial force practical tools (F694). Explicitly leaves continuum fields, particle systems, residual predictors, softbody DOM, NCA, spectral residuals, and WebGPU compute substrates.

## Concept
A living SVG path composed of competing agent segments. Each segment is controlled by an independent tiny local pure-JS MLP. Causal input is solely DeviceOrientationEvent (alpha/beta/gamma) plus a slow internal clock phase. MLP outputs continuous offsets for control points. Agents compete in parameter space: when two segments' control points are close, higher-fitness transfers a sealed (hashed) fragment of its weights to the lower one with mutation. Best genome persists in IndexedDB and is shared across tabs via BroadcastChannel. The SVG morphs in real time into emergent shapes driven by tilt. Fully offline single-file prototype. No canvas continuum, no WebGPU, no particle lattice, no residual pointer history.

This deliberately leaves the dominant recent continuum/particle WebGPU and residual-DOM genome clusters. Core novel combination is hybrid SVG embodiment (physical path control points as the agents) under pure orientation-causal local MLPs with proximity-gated sealed genome transfer in parameter space. New building block for The Verse: morphing vector UI driven by device tilt and local evolving minds.

## Architecture
- Single index.html, self-contained, offline after load.
- One SVG with a closed path of 8 cubic segments (24 control points). Each of 8 agents owns 3 points.
- Per agent: 3-6-3 MLP (orientation features → dx, dy, scale bias).
- Fitness: inverse of path energy (smoothness) + user click rewards on the SVG.
- On control-point proximity < 40: higher fitness seals and transfers 25% weights (mutated) to lower.
- IndexedDB key `verse-f695-svg`; BroadcastChannel `f695-genome`.
- Seal button persists best. Click SVG to reward nearby agent. Tilt to drive.
- Fallback: synthetic slow oscillation if no DeviceOrientation (desktop).

## Interaction
- Request Orientation permission (mobile).
- Tilt device: SVG morphs according to agent MLPs.
- Click path to boost fitness and trigger potential genome transfer.
- Seal button to persist best genome.
- Reload or other tab receives via channel/IndexedDB.

## Novelty
Leaves continuum WebGPU kernels, particle swarms, SDF, residual predictors, softbody, NCA, and prior orientation RNNs or attention lattices. New: orientation-causal pure-SVG multi-agent genome competition controlling a morphing path.

## Failure modes
- DeviceOrientation requires secure context + permission; falls back to clock.
- IndexedDB may fail in private mode (session only).
- BroadcastChannel same-origin only.
- Tiny MLP yields emergent but limited morphs.

## Files
drafts/F695-orientation-svg-morph-genome-mind/SPEC.md  
drafts/F695-orientation-svg-morph-genome-mind/index.html

Void is now Verse everywhere.
