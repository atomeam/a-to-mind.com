# F298 — WebGPU Attention Message Graph Mind

## Concept
A dynamic spatial concept graph whose node embeddings are updated by a local attention-based message-passing step. Primary path uses a WebGPU compute kernel (when available) to perform neighbor aggregation and residual embedding updates; CPU mirror always runs. Floating DOM concept cards are physically attracted to high-attention clusters and morph size/opacity with embedding magnitude. Pointer drag injects a temporary query node that biases attention weights. Champion graph (embeddings + adjacency) seals to IndexedDB. Fully offline after load; progressive enhancement (Canvas2D + CPU message passing always works).

Deliberately branches from the recent dominant cluster of Hebbian spatial kernels (F297), decision-tree orbs, DeviceOrientation genome arenas, residual trajectory predictors, reservoir/echo lattices, self-listening spectral agents, neural foraging genomes, and WebXR hand/gaze MLPs. Core novelty is the WebGPU compute kernel as the attention message-passing substrate itself controlling hybrid particle nodes + physical DOM concept cards, rather than grid Hebbian, CPU MLP/reservoir/decision-tree policies, or genome transfer.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Up to 48 concept nodes (CPU array of {x,y,vx,vy,embed[4]} + optional GPU storage buffer).
- Dynamic edges (k-nearest or distance threshold); message passing: attention-weighted sum of neighbor embeds → residual update.
- WebGPU compute pipeline (workgroup 64) that samples local neighborhood and updates embeddings; uniform carries pointer query.
- 5 absolute DOM concept cards with spring physics attracted to high-magnitude clusters; drag injects query.
- IndexedDB: seal/load serialized embeddings + positions + generation stamp.
- Offline first; no permissions required.

## Expected outcome
Runnable interactive prototype. Drag on canvas or a card: new temporary query biases attention, embeddings evolve (visualized as particle colors and edge strengths), cards drift toward coherent clusters and scale with attention mass. Seal persists the graph. Load restores associations. Offline-capable. Expands WebGPU compute attention kernels + spatial graph message passing + hybrid DOM physical UI controlled by learned embeddings + sealed persistent concept graph building blocks.

## Mechanics
1. Pointer or card drag creates/updates a query embedding that modulates attention scores to nearby nodes.
2. Compute (or CPU) step performs one message-passing round: each node aggregates attention-weighted neighbor embeds and applies residual + mild decay.
3. Cards integrate forces from high-magnitude nodes + pointer; bounds clamp; visual scale reflects cluster energy.
4. Seal writes node array (positions + embeds) to IndexedDB; load restores and re-uploads to GPU if present.

## Failure modes
- No WebGPU or init failure → Canvas2D fully functional with CPU message passing (primary interactive path).
- No IndexedDB → in-memory only.
- Small screens → cards remain usable, fewer nodes.
- High teaching rate → embeddings saturate; reset available.

## Cross-reference
Avoided genome contact transfer, residual predictors, reservoir computing, spectral self-listening, NCA, WebXR hand/gaze as primary, DeviceOrientation causal, pointer-history fields as core, decision trees, pure CPU MLP policies, and pure grid Hebbian. Novel combination of WebGPU compute attention message-passing kernel + spatial dynamic graph + particle/node embodiment + physical DOM concept cards + sealed incremental concept association.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/webgpu-attention-message-graph-mind.js`; test: drag produces non-zero embedding change, cards move toward high-attention clusters, seal/load restores node embeddings array.
