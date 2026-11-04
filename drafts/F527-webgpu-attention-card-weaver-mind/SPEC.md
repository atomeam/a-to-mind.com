# F527 WebGPU Attention Card Weaver Mind

## Concept
Novel combination: a small population of absolute-positioned Verse DOM cards treated as tokens in a multi-head self-attention mechanism whose core matrix multiplies and softmax are executed (when available) in a WebGPU compute shader. Attention scores generate pairwise attraction/repulsion forces and rendered link strengths (canvas overlay). User drag of a card injects a positive training signal that biases the query-key affinity for similar embeddings; a seal hashes the current attention weight matrices (or bias vector) into IndexedDB with BroadcastChannel multi-tab adoption. Pure local, offline-capable after load; progressive CPU fallback if WebGPU unavailable.

This deliberately leaves the recent cluster of WebGPU continuum/discrete physics kernels (sandpile, PSO, Langton's ant, vectorfield policies, wave membranes, Gray-Scott, spectral, quantum walks, SPH, embedding diffusion) combined with local MLP/RNN policies and sensor-driven DOM probes (accel, XR hand, speech, orientation, MIDI, acoustic). Self-attention over live DOM cards as tokens, with WebGPU compute path and drag-as-training, is previously unused.

## Architecture
- Single self-contained index.html.
- 8 Verse probe cards (absolute, CSS transforms, neon borders, content labels).
- Embeddings: per-card vector [norm_x, norm_y, norm_w, norm_h, hue_norm, content_hash_norm] (dim=6).
- WebGPU: compute pipeline for Q = X Wq, K = X Wk, scores = Q K^T / sqrt(d), softmax, optional value aggregation. Fallback: pure JS matrix ops.
- Forces: each card receives sum over others of attention * (pos_j - pos_i) * scale + damping.
- Links: canvas overlay lines with alpha = attention score, hue from head.
- Drag: on pointerup, if moved, add small positive bias to the attention affinity matrix for that pair (or update a low-rank bias).
- Seal: SHA-256 of JSON(weights/bias + fitness) → IndexedDB; BroadcastChannel post for other tabs to adopt best.
- Status: WebGPU support, card count, last seal, avg attention entropy.

## Expected outcome
Interactive spatial mind: cards attract/repel according to learned attention; links weave visually; dragging reinforces preferred clusters; sealing and multi-tab genome transfer works; runnable offline; graceful CPU fallback.

## Mechanics
- Embeddings updated each frame from live DOM positions/sizes.
- Attention computed at ~30 Hz.
- Physics integration: velocity += force; position += velocity; CSS left/top.
- Training: simple Hebbian-style bias increment on dragged pairs.
- Seal on button or double-click highest-fitness card.
- Progressive: if navigator.gpu fails, use CPU attention (same math).

## Failure modes
- WebGPU unsupported or adapter failed → CPU path, status note.
- Too many cards on low-end → reduce to 6, still interactive.
- IndexedDB/BroadcastChannel blocked → local only, unattested toast.
- Overlapping cards → soft repulsion added.

## Next building blocks
- Full multi-head with learned Wq/Wk/Wv in the compute shader, backprop-like local updates.
- OPFS persistence of full weight tensors + embeddings.
- Content embeddings from local tiny model or user text.
- WebXR ray as additional token.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations plus sensor-driven agents (F518–F526).

**Void is now Verse everywhere.**
