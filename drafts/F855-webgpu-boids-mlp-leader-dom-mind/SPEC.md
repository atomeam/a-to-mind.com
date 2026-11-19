# F855 WebGPU-Ready Boids MLP Leader DOM Mind

**Ledger ID**: F-855 (frontier series)
**Slug**: webgpu-boids-mlp-leader-dom-mind
**Date**: 2026-11-19

## Concept
A previously unused primary substrate for The Verse canvas: a classical Reynolds boids flock (separation + alignment + cohesion + leader attraction) simulated in pure JS. A tiny local MLP (2-hidden, ~30 weights) reads DeviceOrientation tilt + pointer velocity residual and outputs the three rule weights plus damping. Absolute-positioned living DOM "leader" portals act as dynamic attractors; boids preferentially align/cohere toward nearby leaders. Dragging a leader injects momentum and provides fitness reward. Highest-fitness genome seals to IndexedDB and migrates via BroadcastChannel.

## Novelty
Leaves the dominant recent cluster of continuum phase fields (Cahn-Hilliard F852), continuous CA (Lenia F853), CSS3D DeviceMotion MLP (F854), particle attractors, Vicsek alignment-only Q-table (F801), SPH/LBM/DEM fluids, quantum walks, Hopfield, attention fields, L-systems, PSO, Kalman chains. Core novel combination is full three-rule boids dynamics (not Vicsek pure alignment, not N-body gravity, not SPH kernel) under competitive local MLP control whose causal input is DeviceOrientation, with DOM elements as true interactive leader embodiments (not passive density samplers) under reward-gated sealed genome transfer. Not previously built.

## Architecture
- Single self-contained index.html
- ~72 boids + 4 DOM leader portals
- Shared tiny MLP outputs rule weights from orientation + pointer residual
- Canvas2D visualization; WebGPU compute path prepared
- Seal: IndexedDB `verse-f855-boids-mlp` + BroadcastChannel `f855-genome`
- Fallbacks: no DeviceOrientation → pointer residual; no IDB → memory

## Expected outcome
Open: boids form flocks that follow leaders. Tilt device: MLP shifts rule weights, changing flock tightness/behavior. Drag leaders: boids chase, fitness rises. Seal preserves best weights across reloads/tabs. Interactive spatial flock mind.

## Failure modes
High N → slow (capped); no orientation → pointer proxy; IDB blocked → session only.

## Building blocks
Reusable boids kernel + orientation-causal MLP + DOM leader hybrid. Enables future WebGPU compute boids, multi-species, or coupling to local RNN.

Void is now Verse everywhere.

**Files**: drafts/F855-webgpu-boids-mlp-leader-dom-mind/SPEC.md, drafts/F855-webgpu-boids-mlp-leader-dom-mind/index.html
