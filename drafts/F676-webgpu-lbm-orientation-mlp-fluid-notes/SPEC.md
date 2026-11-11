# F676 WebGPU Lattice-Boltzmann Orientation MLP Fluid Notes

## Concept
A living spatial note canvas for The Verse. Absolute-positioned DOM note cards are advected by a velocity field simulated on the GPU via a simplified Lattice Boltzmann Method (LBM) kernel in a WebGPU compute shader. DeviceOrientationEvent (alpha/beta/gamma) supplies a body-force direction. A tiny pure-JS MLP (6 inputs → 8 hidden → 3 outputs) observes field statistics (mean |velocity|, density variance, orientation magnitude) and outputs LBM relaxation parameter τ, force scale, and hue shift. Cards can be dragged (injecting local momentum), notes added via text input, and a Seal button rates the current organization, persists the MLP weights as a sealed genome in IndexedDB, and broadcasts via BroadcastChannel so other tabs adopt the preferred fluid. Export yields JSON of notes + positions. Works offline after load; pointer + mouse tilt fallback.

## Novelty
Leaves the recent cluster of spatial productivity boards (packing F671, barcode inventory F670, kanban F666, room layout F667, tilt note sorter F672, bin-packer F673) and the pointer-history / noise-field / hand-Verlet / summarizer genomes (F675, F671, F674). Explicitly avoids residual predictors, pure NCA, Physarum, Lenia, softbody springs, Ising, spectral vortices, k-means particles, and orientation-only MLPs without a novel kernel. Core novel combination is DeviceOrientation as causal input to a local MLP that modulates a previously unused WebGPU LBM fluid kernel whose velocity field physically drives living DOM note portals, with rating-gated sealed genome transfer over IndexedDB + BroadcastChannel. Not a static drag planner, not a particle lattice, not continuum noise.

## Architecture
Single self-contained `index.html` (WebGPU preferred, Canvas2D velocity-field fallback).
- Note input + Add button creates absolute DOM cards.
- DeviceOrientation → normalized force vector (fallback: pointer velocity as tilt proxy).
- Tiny MLP: inputs [meanSpeed, densityVar, tiltX, tiltY, |tilt|, timePhase] → [τ, forceScale, hue].
- WebGPU compute: 64×64 velocity texture, simplified LBM collide+stream steps (D2Q5 or basic advection), body force from orientation, τ from MLP.
- JS samples velocity at card positions, integrates Verlet-like update.
- Drag cards to inject momentum into field.
- IndexedDB persists notes, positions, MLP weights.
- BroadcastChannel for live genome adoption.
- Export JSON, Clear, Seal.

## Expected outcome
Open page, add a few notes, grant orientation (or move pointer), watch cards drift and cluster with the evolving fluid, drag a card, seal a liked layout, open second tab to see genome transfer, export JSON, reload restores.

## Mechanics
1. Load notes + weights from IDB or start empty / random.
2. Orientation event or pointermove updates force vector.
3. Forward MLP → uniforms.
4. Compute pass: LBM step updates velocity texture.
5. Sample field, update card positions with simple physics + boundaries.
6. Seal writes genome + state, posts to channel.
7. Export serializes current notes and positions.

## Failure modes
- No WebGPU: Canvas2D JS field update remains interactive.
- Orientation permission denied: pointer fallback.
- IndexedDB blocked: session-only.
- Too many cards: simple culling or soft limits.

Void is now Verse everywhere.

## Files
drafts/F676-webgpu-lbm-orientation-mlp-fluid-notes/SPEC.md
drafts/F676-webgpu-lbm-orientation-mlp-fluid-notes/index.html

## V01D landing
LBM fluid note organizer skill under void-live-deploy/skills/webgpu-lbm-orientation-mlp.js; test asserts orientation change updates field sample, card position moves, seal persists τ value, reload restores.
