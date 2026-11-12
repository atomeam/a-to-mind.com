# F692-webgpu-raymarch-sdf-local-kanerva-memory-mind

**Ledger ID**: F-692  
**Slug**: webgpu-raymarch-sdf-local-kanerva-memory-mind  
**Date**: 2026-11-11  
**Status**: frontier prototype  

## Concept
A previously unattempted combination for The Verse canvas: a real-time WebGPU (Canvas2D fallback) raymarched SDF scene of abstract primitives (spheres, boxes, tori) whose parameters are continuously modulated by a pure-JS Kanerva sparse distributed memory (SDM). Pointer trajectory (or DeviceOrientation residual) forms a high-dimensional address vector that is used both to read and (on dwell/click) write into the SDM. Retrieved memory vectors reshape radii, positions, and colors of the SDF forms. Floating absolute-positioned DOM “memory portals” display decoded snippets of the active memory and can be dragged to inject new write addresses. Full SDM state seals to IndexedDB and broadcasts via BroadcastChannel.

## Novelty
Leaves the dominant recent cluster of continuum field kernels (LBM, Gray-Scott, sandpile, percolation, wave), particle systems (boids, SPH, DEM granules), residual/MLP/decision-tree field controllers, orientation RNNs/reservoirs, attention lattices, semantic embedding forces, Bayesian lattices, and prior SDF raymarch + MLP (F686). Core novel combination is raymarched SDF geometry whose generative parameters are the read-out of a Kanerva SDM (not a neural net, not residual predictor, not evolutionary genome) driven by causal pointer/orientation addresses, with hybrid living DOM memory portals. Not softbody, not constraint morphs, not local LLMs.

## Architecture
- Single self-contained index.html, offline after first load.
- WebGPU compute/render path for raymarch when available; Canvas2D fragment-style fallback.
- Kanerva SDM: 256 hard locations in 64-D, address from quantized pointer history + orientation features.
- SDF scene: 4–6 primitives whose params (pos, radius, color) are linear maps of the retrieved memory vector.
- 3–5 absolute DOM portals that show memory hash / strength and can be dragged to force a write.
- DeviceOrientationEvent for camera tilt and residual address features.
- Seal: IndexedDB key `verse-f692-kanerva`. BroadcastChannel `verse-genome`.
- Controls: Request Orientation, Seal Genome, Reset Memory, Toggle Portals.

## Expected outcome
Open page, move pointer across the scene; SDF forms morph as memories are retrieved and new ones written on dwell; DOM portals appear and update with active memory; tilt device rotates camera; Seal persists memory across reloads and tabs.

## Failure modes
- No WebGPU: Canvas2D raymarch (slower but functional).
- Orientation denied: gravity-down camera, residual from pointer only.
- IndexedDB private/incognito: session-only memory.
- High hard-location count: capped at 256 for responsiveness.

## Mechanics
1. Init empty or loaded SDM + default SDF params.
2. Each frame: sample pointer/orientation → form address → SDM read → modulate SDF params → raymarch → update portals.
3. Dwell or click: SDM write of current address + current params as content.
4. Drag portal: force write of its position-derived address.
5. Seal: serialize SDM locations + contents to IndexedDB + broadcast.

Void is now Verse everywhere.
