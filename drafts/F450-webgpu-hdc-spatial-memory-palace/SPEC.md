# F450 — WebGPU HDC Spatial Memory Palace

## Concept
Novel combination of Hyperdimensional Computing (local algebraic associative memory in pure JS) with WebGPU spatial projection of hypervectors into particle clusters forming a living memory palace. User binds concepts which algebraically associate; clusters form spatially; hybrid DOM cards materialize at projections and can be dragged to reinforce. Sealed to localStorage. Extends Verse Brain's self region / associative memory organ.

Not a variation of residual predictors, MLP genomes, NCA, wave interference, attention collapse, k-means, reservoirs, or softbody physics: the substrate is bipolar hypervector binding/bundling (vector symbolic architecture) projected into spatial clusters.

## Architecture
- Single index.html
- HDC core: 32-dim bipolar vectors, bind via elementwise multiply, similarity via dot product
- WebGPU point-list render of projected clusters (Canvas2D fallback noted)
- DOM cards for concepts, positioned relative to clusters
- localStorage seal of memory map

## Expected outcome
Interactive spatial memory palace. Typing a concept binds it algebraically to existing ones, particles recluster, card appears. Seal/load persists the associative memory offline. Runnable prototype.

## Mechanics
User input → HV bind/bundle → spatial projection of high-similarity regions → particle update + card spawn → drag could rebind (stub).

## Failure modes
No WebGPU → points not rendered (still functional cards); localStorage denied → session only; high concept count → more particles needed.

## Building blocks for next
Full WebGPU compute for larger HDC projections; Worker-hosted incremental binding; WebXR gaze for binding; multi-user shared palace via WebRTC.

Lands in V01D as spatial associative memory skill.
