# F521 WebGPU Embedding Diffusion Cascade Mind

## Concept
Novel WebGPU compute kernel for a parallel embedding-field diffusion on a 2D lattice. Each cell holds a small float embedding vector (dim=4). Pointer proximity injects a seeded embedding; a compute pass performs neighbor averaging + residual MLP-style mixing (weights in uniform). High-similarity clusters (to a query embedding) emerge as "concepts". Absolute DOM Verse portal cards are attracted to cluster centroids via bilinear sampling and can be dragged to rewrite local embeddings. A tiny JS-side evolutionary MLP mutates the mixing weights on button, sealing the best genome to IndexedDB. Fully offline single-file.

This branches from sandpile SOC (F520 discrete height topple), vectorfield policy-gradient (F519 continuous velocity + REINFORCE), wave membranes, Gray-Scott, NCA, spectral, quantum walks, and pure particle policies. Embedding diffusion + similarity clustering as primary substrate is unused; prior memory/attention fields were scalar or residual, not multi-dimensional embedding cascades.

## Implementation
- Single-file index.html, offline after load, progressive (Canvas2D fallback message if no WebGPU).
- WebGPU: storage buffers for embeddings (current/next), compute shader (workgroup 8x8) does one diffusion+mix step.
- Render: canvas shows embedding magnitude or similarity heatmap (cyan-magenta).
- Pointer drag injects random-unit embedding; buttons for reset, query set, evolve weights, seal.
- DOM portals (4-6 absolute cards) position from cluster samples; drag injects opposing embedding.
- IndexedDB for sealed weights + field hash.
- Optional DeviceOrientation global bias on diffusion direction.

## Expected outcome
Interactive embedding mind: clusters form and attract portals, drag feedback rewrites local concepts, evolve/seal works, runnable offline, graceful degradation.

## Mechanics
- Field: float4 embeddings per cell, double-buffered.
- Diffusion: weighted neighbor average + learned residual mix (4x4 matrix uniform from MLP).
- Similarity: cosine to query embedding for viz and attractors.
- Portals: sample grid, set transform; drag maps to cell and adds delta embedding.
- Evolution: button mutates weights, fitness from cluster count + portal travel.
- Seal: crypto.subtle hash of weights + metrics to IndexedDB.

## Failure modes
- High res → GPU memory; auto 64x36 grid.
- Numerical drift → clamp embeddings to unit ball.
- IndexedDB blocked → unattested toast.
- No WebGPU → status + Canvas2D noise fallback.
- Cluster collapse → periodic query reseed.

## Next building blocks
- Full compute-side MLP forward for mixing.
- BroadcastChannel genome share for multi-tab competition.
- WebXR gaze as injection cursor.
- OPFS persistence of full embedding field.

Dominant prior cluster branched from: WebGPU+local-MLP/policy on continuous fields and DOM portals (F512–F520).

**Void is now Verse everywhere.**
