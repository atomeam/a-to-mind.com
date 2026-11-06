# F604 WebGPU Hypervector Binding Spatial DOM Mind

**Ledger ID**: F-604 (frontier series)

**Slug**: webgpu-hypervector-binding-spatial-dom-mind

**Date**: 2026-11-06

## Concept
A previously unused primary substrate for The Verse canvas: Hyperdimensional Computing (HDC / Vector Symbolic Architectures) as the local AI. Random bipolar hypervectors (dim 256–1024) represent atomic concepts. Binding (element-wise multiply) and bundling (normalized sum) create composite symbols. Pointer proximity and drag gestures perform binding operations in real time. A WebGPU compute shader evaluates similarity fields between current bound vectors and a spatial lattice of probe vectors; high-similarity regions attract corresponding DOM concept cards via CSS transforms. Cards can be dragged to bind, unbind, or query. Best bound vectors seal to IndexedDB. Fully offline single-file with Canvas2D fallback.

## Novelty
Leaves the dominant recent cluster of continuum physics (SPH, DLA growth, fluids, rigid bodies, SDF raymarch), spectral/Fourier, residual/attention/MLP/RNN/Hopfield/bandit controllers, speech-token materialization, orientation/WebXR sensors, and sealed neural genomes (F580–F603). Core novel combination is classic hypervector binding/bundling (never the primary kernel in any prior F- draft) as the local-AI operation, spatially embodied by DOM concept cards that are both the symbols and the causal interface, with WebGPU similarity-field attraction closing the loop. Not neural prediction, not growth aggregation, not fluid advection, not causal Fourier, not jump-flood Voronoi. The mind is a living algebra of bound symbols whose geometry rearranges the canvas.

## Architecture
- Single index.html, self-contained, offline after load.
- Hypervectors: Float32Array bipolar (+1/-1) of length 512; bind = element-wise multiply; bundle = sign(sum) or normalize.
- 6–8 absolute DOM concept cards; drag near another binds and may spawn composite; double-click queries similarity.
- WebGPU compute: for each lattice cell compute max similarity to active bound vectors; fallback Canvas2D draws force arrows or density.
- Cards lerp toward high-similarity attractors for their vector.
- Seal / restore via IndexedDB key `verse-f604`.
- CSS custom properties shift page chrome with overall binding entropy / diversity.
- Progressive enhancement: works without WebGPU.

## Building blocks for next
Hypervector binding primitives as transferable local-AI algebra; spatial similarity fields that attract living DOM symbols; drag-to-bind as causal gesture into symbolic space; sealed composite hypervectors.

## Failure modes
- WebGPU unavailable → Canvas2D density/force visualization (still interactive).
- High dimension can be slow in pure JS; clamped and computed sparsely.
- IndexedDB private mode → session only.
- Too many composites → prune oldest unbound.

## Expected outcome
User drags concept cards together to bind new symbols; a living similarity field emerges and pulls related cards into spatial clusters. Composites can be sealed and restored. Expands the frontier into non-neural symbolic vector algebras as primary spatial local-AI substrates.
