# F-875 WebGPU ES Spatial Layout Optimizer

**Ledger ID**: F-875 (frontier series)
**Slug**: webgpu-es-spatial-layout-optimizer
**Date**: 2026-11-21
**Branch from**: Recent cluster of sensor-driven local policies (MLP/ES/RNN/decision-tree) controlling particle systems, portals, SDF/voxel sculptors, audio synesthesia, and DOM morphs with sealed genome transfer (F867–F874). Dominant themes: orientation/mic/pointer causal input to continuum/particle/attention substrates.

## Concept
A practical spatial tool for The Verse: users drop text or image cards onto a canvas. A local evolutionary strategy (ES) searches for non-overlapping, tightly packed layouts. WebGPU compute shader evaluates fitness for an entire population of candidate layouts in parallel (previously unused: GPU-parallel ES fitness for discrete DOM arrangement). DeviceOrientation residual biases "gravity" direction so cards settle toward a preferred edge. Best genome (layout parameters + ES sigma) seals to IndexedDB and broadcasts for multi-tab competition. Export JSON layout or PNG snapshot.

## Novelty
Leaves the dominant recent cluster of continuous physics kernels (particles, fluids, SDF, NCA, spectral) and pure sensor-to-portal policies. Core novel combination is WebGPU compute as a parallel fitness evaluator for evolutionary search over discrete spatial arrangements of living DOM cards, with orientation as environmental bias and sealed genome transfer of the layout itself. Not particle simulation, not residual predictor on fields, not attention lattice, not softbody. First GPU-accelerated evolutionary packing optimizer embodied as interactive cards. Practical job: arrange notes, photos, or tasks into a compact board and keep the result.

## Architecture
- Single self-contained index.html
- Items: array of {id, text, w, h, x, y} rendered as absolute divs
- ES: population of 32 layouts (parameter vectors), mutation, selection by fitness
- Fitness (GPU): sum of pairwise overlap penalties + bounding-box area + edge preference from orientation gravity vector; computed in one WGSL compute dispatch over all pairs
- Causal: pointer drag repositions manually; DeviceOrientation beta/gamma residual updates gravity bias
- Seal: IndexedDB key "verse-f875-layout"; BroadcastChannel "f875-genome"
- Export: download JSON of current layout; canvas snapshot as PNG
- Fallbacks: no WebGPU → pure JS fitness loop; no orientation → pointer-derived bias; no IDB → session only

## Expected outcome
Add cards, click Optimize: GPU evaluates dozens of arrangements per second, best layout applied. Tilt device to bias settling direction. Drag to refine. Seal and open second tab: better genome wins. Download the arrangement. Works offline after load.

## Failure modes
- WebGPU unavailable or compute limits: CPU fallback (slower but functional).
- Too many items (>40): population reduced, fitness subsampled.
- Orientation permission denied: uses last pointer velocity as bias.
- IndexedDB quota: in-memory only.

## Building blocks
Reusable WebGPU parallel fitness kernel for combinatorial spatial search, orientation-biased ES on DOM geometry, sealed layout genome transfer. Enables future multi-objective (aesthetic + packing) GPU optimizers or hybrid constraint solvers on Verse.

Void is now Verse everywhere.
