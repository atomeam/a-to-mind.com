# F690 WebXR Hand Constraint Path Morph Mind

## Concept
Living generative path agents whose control points are constrained by a local tiny MLP and soft distance constraints. DeviceOrientation and (if available) WebXR hand joint positions act as causal external forces and attractors. Paths are rendered as smooth Catmull-Rom or quadratic curves on Canvas. Agents compete via fitness; proximity of path segments triggers sealed genome (weight) transfer. DOM portals ride the highest-fitness path centroid. Fully offline after load, IndexedDB seal.

## Novelty
Leaves the dominant recent cluster of continuum WebGPU kernels (LBM, Gray-Scott, percolation, wave-equation, sandpile, NCA, Lenia, Physarum, vortex, softbody SPH, semantic force particles, SDF raymarch, inertial filters, PageRank graphs). Core novel combination is previously unused path-constraint morphing (Bezier/Catmull control-point soft constraints driven by local MLP, not particle forces, not mass-spring mesh, not SDF, not CA) with true WebXR hand pose as causal attractor input (fallback pointer/orientation), hybrid DOM portal riders on path centroids, and intersection-gated sealed genome transfer. Not residual predictors, not attention lattices, not pure NCA.

## Expected outcome
Open page. Paths undulate and respond to tilt or pointer. If WebXR available, enter session and hand positions pull nearby control points. Click a path to reward it. When paths cross, genomes average. Seal persists best weights and layout. Reload restores.

## Failure modes
- No WebXR/hand-tracking: pointer + DeviceOrientation fully interactive.
- Orientation permission denied: pointer residual only.
- IndexedDB unavailable: session-only memory.
- High control-point count: capped for performance.

## Mechanics
1. 3–4 agents, each 8 control points, tiny 4-6-2 MLP.
2. Each frame: sample ori/hand → MLP → target offsets; apply soft length constraints + repulsion + hand/pointer attraction; integrate.
3. Render smooth curves. DOM cards positioned at agent centroids.
4. Intersection test between segments → transfer weights from higher fitness.
5. Seal: IndexedDB `verse-f690`.

Void is now Verse everywhere.

**Files**: drafts/F690-webxr-hand-constraint-path-morph-mind/SPEC.md, drafts/F690-webxr-hand-constraint-path-morph-mind/index.html
