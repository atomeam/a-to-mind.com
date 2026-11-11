# F686 WebGPU Wave Equation Orientation MLP DOM Mind

## Concept
A previously unused 2D discrete wave-equation kernel (vibrating membrane) on Canvas2D/WebGPU hybrid, driven by DeviceOrientation and pointer as causal inputs to competing tiny MLPs. Living DOM portals ride the wave height (hybrid embodiment), and proximity triggers sealed genome transfer of the higher-fitness MLP. Persistent via IndexedDB.

## Novelty
Leaves the dominant recent cluster of continuum WebGPU kernels (LBM, Gray-Scott, percolation, noise), multi-agent collision particles, graph PageRank, inertial filters, step counters, anchor-positioning agents, spatial planners, residual predictors, pure NCA, spectral/audio residuals, pointer-history fields, softbody DOM, orientation RNN, and k-means particles. Core novel combination is DeviceOrientation as causal input to local MLPs controlling a wave-equation source/damping field, with DOM cards as physical riders and collision-gated sealed genome transfer in a shared spatial field. Not a continuum RD or LBM, not particle swarms, not softbody springs.

## Architecture
- Single self-contained index.html, offline after load.
- 128x128 discrete wave equation (CPU step for reliability; WebGPU context available for future compute).
- Two competing 4-4-2 MLPs take [oriX, oriY, ptrX, ptrY] → [sourceAmp, dampBias].
- 6 absolute DOM portals (3 per agent) that translate/scale with local wave height and drift toward agent sources.
- Pointer move + optional DeviceOrientation (permissioned).
- Click portal to reward its agent (fitness++).
- Proximity of opposite-agent portals: winner seals (averages) genome into loser.
- Seal button → IndexedDB `verse-f686`. Reload restores.
- Fallback: always works without WebGPU or orientation.

## Expected outcome
Open page, move pointer or tilt; waves propagate from agent sources modulated by MLP; portals bob and drift; click to reward; near collisions transfer genomes; seal persists state across reloads.

## Failure modes
- Orientation denied or unsupported: pointer only.
- IndexedDB private mode: session only.
- High grid: kept at 128 for smooth CPU.
- WebGPU unavailable: Canvas2D fully interactive.

## Files
drafts/F686-webgpu-wave-orientation-mlp-dom-mind/SPEC.md
drafts/F686-webgpu-wave-orientation-mlp-dom-mind/index.html

Void is now Verse everywhere.
