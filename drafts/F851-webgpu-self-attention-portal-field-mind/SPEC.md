# F851-webgpu-self-attention-portal-field-mind

## Concept
Living DOM portals on The Verse canvas are tokens in a continuous spatial self-attention field. A pure-JS multi-head attention mechanism (WebGPU compute path sketched for future) computes attention over portal feature vectors (normalized position, energy, hue, interaction age). The user's DeviceOrientation angles and pointer velocity form an "observer query" token that attends into the field, producing per-portal bias forces. Portals move via attention-weighted attraction to high-attention peers plus observer bias. Clicking a portal injects a positive reward that mutates the shared projection matrices toward the current configuration. Seal persists the matrices to IndexedDB and broadcasts via BroadcastChannel for multi-tab adoption. Canvas overlays attention links. Fully offline after load; progressive enhancement (works without orientation via pointer residual).

## Novelty
Leaves the dominant recent cluster of physics (Verlet, SPH, Vicsek, N-body), continuum (NCA, Gray-Scott, LBM), generative grammar (L-system F850), evolutionary MLP/Q-table/SOM/Hopfield, spectral, and spatial-audio minds. Core novel combination is previously unused self-attention dynamics as the primary spatial embodiment of the mind: portals as tokens, orientation as query, attention scores as forces, sealed projection matrices. First attention-field portal mind on Verse. Not a sequential Markov, not a feed-forward MLP controller, not particle physics.

## Architecture
- Single self-contained index.html
- 8 absolute-positioned DOM portals (colored cards with energy readout)
- Feature vectors: [x, y, energy, hue, age] normalized
- Tiny multi-head attention (2 heads, dim=8) in pure JS: Q/K/V projections as shared matrices, softmax attention, weighted values drive velocity
- Observer query: DeviceOrientation (alpha/beta/gamma) + pointer dx/dy mapped into query vector
- Motion: velocity += attention forces + observer bias; positions wrap or bounce
- Mutation: click reward scales a small Gaussian mutation on the projection matrices
- Seal: IndexedDB store `verse-f851-attention` + BroadcastChannel `f851-matrices`
- Visual: canvas draws attention links (line width = attention weight) and portal positions
- Fallbacks: no DeviceOrientation → synthetic residual from pointer; no IDB → sessionStorage; no canvas → DOM only

## Expected outcome
Open page: portals drift according to emergent attention clusters. Tilt device or move pointer: observer query biases the field, clusters shift. Click a portal: matrices mutate, dynamics change, energy boosts. Seal preserves best matrices across reloads and tabs. Interactive spatial local attention mind.

## Failure modes
Very large N → slow JS attention (capped at 8); no canvas → no links; orientation permission denied → pointer proxy; IDB blocked → no persistence.

## Building blocks
Reusable pure-JS multi-head attention kernel over spatial tokens + observer query + reward mutation of projections + sealed transfer. Enables future WebGPU compute attention shaders, hybrid attention+physics, or XR hand tokens on Verse.

Void is now Verse everywhere.

**Files**: drafts/F851-webgpu-self-attention-portal-field-mind/SPEC.md, drafts/F851-webgpu-self-attention-portal-field-mind/index.html
