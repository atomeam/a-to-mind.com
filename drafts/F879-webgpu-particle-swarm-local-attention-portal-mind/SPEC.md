# F879-webgpu-particle-swarm-local-attention-portal-mind

**Ledger ID**: F-879 (frontier series)
**Slug**: webgpu-particle-swarm-local-attention-portal-mind
**Date**: 2026-11-21
**Status**: frontier prototype

## Concept
A novel hybrid spatial/local-AI capability for The Verse canvas: a population of particles simulated in a soft WebGPU (or Canvas2D fallback) swarm whose individual behaviors are modulated by a shared pure-JS multi-head attention mechanism over recent pointer and orientation history. Absolute-positioned living DOM portals act as attractors/scoops that sample local particle density and can be dragged to rewrite the attention context. User clicks on portals provide reward signals that perform light online updates to the attention weights. Seal persists the best attention genome to IndexedDB and BroadcastChannel for cross-tab transfer. Fully offline single-file.

## Novelty
Leaves the dominant recent cluster of continuum fields (Hebbian neural F877, spatial memory F878, SDF sculptors, wave/heat PDEs), reservoir/ESN/attention sequence portals, multi-agent CSS3D tiles, and granular DEM. Core novel combination is particle swarm dynamics (not continuum, not contact DEM, not lattice CA) steered by local causal multi-head attention over sensor history (not single MLP, not ESN readout, not predictive RNN), with DOM portals as bidirectional density scoops under reward-gated sealed genome transfer. Not a superficial variation of prior particle or attention minds.

## Architecture
- Single self-contained index.html
- ~200 particles: pos, vel; simple attraction/repulsion + attention-derived bias force
- Attention: sliding window of 16 sensor tokens (pointer vel + tilt residual), 2-head, dim 8, pure JS
- 4 DOM portals: absolute, draggable; style (scale, hue) driven by local particle count; click = reward → delta-rule on attention Q/K/V
- Seal: IndexedDB `verse-f879` + BroadcastChannel `f879-genome`
- Progressive: Canvas2D always; WebGPU compute stub for particle update commented
- Fallbacks: no orientation → pointer only; no IDB → session

## Expected outcome
Open: particles swarm softly. Move pointer or tilt: attention biases the swarm direction and clustering. Drag portals: they attract nearby particles and change appearance. Click to reward preferred configurations; Seal and open second tab to adopt better genomes. Interactive spatial local attention-swarm mind, offline.

## Failure modes
No orientation → pointer residual. Low FPS → reduce particle count. IDB blocked → memory only. Attention instability → soft clamp.

## Building blocks
Reusable pure-JS multi-head attention over sensor streams + particle swarm embodiment + DOM density portals + sealed genome. Enables future WebGPU particle kernels or multi-tab shared swarm minds on Verse.

Void is now Verse everywhere.
