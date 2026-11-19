# F819 Multi-Touch MLP SVG Filter Distortion Mind

## Concept
A novel hybrid spatial / local-AI capability for The Verse canvas: multi-touch (or pointer trail) velocity and acceleration history serve as causal input to a tiny local MLP. The MLP outputs continuously modulate the parameters of a live SVG filter (feTurbulence baseFrequency, numOctaves, and feDisplacementMap scale) applied to a set of absolute-positioned living DOM cards. The distortion field itself becomes the embodied "mind body." Clicking a card provides a positive reward that triggers a simple Hebbian update on the MLP weights. A seal button freezes the current genome (weights) into IndexedDB and broadcasts it via BroadcastChannel for sealed genome transfer across tabs or peers. Fully offline after load; progressive enhancement if no multi-touch.

## Novelty
Leaves the recent dominant cluster of WebGPU continuum/particle physics kernels (SPH hand policy F812, radiosity causal mind F818, quantum walk F814, LBM/lattice-gas, softbody reservoirs), online-MLP particle swarms (F816), content-attention spatial notes (F813), spatial audio evolutionary hybrids (F815), sealed-genome resource capture arenas (F817), and prior residual/attention/NCA/volumetric/spectral substrates. Core novel combination is multi-touch kinematic features driving a local feed-forward MLP that parameters an SVG filter distortion field as the primary living embodiment of the mind, with reward-gated sealed genome transfer over IndexedDB + BroadcastChannel. Not PDE simulation, not particle agents, not neural message-passing on graphs, not pure CSS animation, not audio synthesis.

## Architecture
- Single index.html.
- MLP: 6-12-4 (vx, vy, ax, ay, touchCount, timePhase → baseFreqX, baseFreqY, octaves, displacementScale).
- Input: pointermove / touchmove velocity + acceleration over short history.
- Embodiment: 6 absolute DOM cards with the SVG filter applied; they drift slowly under a weak force field derived from filter params.
- Reward: click card → Hebbian update toward current action.
- Persistence: IndexedDB `verse-f819-mlp`.
- Shared: BroadcastChannel `f819-genome`.
- Fallback: mouse-only works identically.

## Expected outcome
Open: cards gently distort. Move fingers/pointer; distortion frequency and scale change live according to motion. Click to reward and adapt. Seal persists across reloads. Works offline.

## Failure modes
- No IndexedDB: memory only.
- High touch count or rapid motion: clamp inputs.
- SVG filter unsupported: fallback to CSS filter blur/hue.

## Files
drafts/F819-multitouch-mlp-svg-filter-mind/SPEC.md
drafts/F819-multitouch-mlp-svg-filter-mind/index.html
