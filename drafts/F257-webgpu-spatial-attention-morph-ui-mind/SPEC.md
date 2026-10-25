# F257-webgpu-spatial-attention-morph-ui-mind

## Concept
Novel combination that deliberately leaves the recent WebXR-gaze-WebGPU-constraint / causal-RNN-sealed-peer / NCA-spatial-audio / orientation-sealed-physics / MLP-particle / residual-density cluster (F247–F256):

- WebGPU compute shaders run a compact multi-head attention kernel over a 2D spatial lattice of concept tokens (position + embedding vectors).
- User pointer trajectory (or DeviceOrientation proxy) is injected as a dynamic query token that attends across the lattice.
- Resulting attention maps directly morph a hybrid DOM UI: concept cards are CSS-transformed (position, scale, rotation, opacity, hue) according to attention weights; global chrome morphs via CSS custom properties driven by attention entropy and energy.
- Local evolution: interaction fitness (dwell time near attended cards + clicks) mutates the embedding genome; champion embeddings + SHA-256 seal written to IndexedDB and broadcast via BroadcastChannel for multi-tab transfer.
- Canvas overlay visualizes attention heat and query vector.

Leaves pure physics/constraint solvers, RNN hidden-state controllers, NCA lattices, volumetric/spectral residuals, and gaze-primary systems. Expands WebGPU attention as the primary local-AI substrate binding spatial tokens to morphing physical UI + sealed evolutionary embeddings.

## Architecture
Single self-contained `index.html`.

- Main thread: pointer/orientation sampling, DOM card positioning from readback, IndexedDB seal, BroadcastChannel, UI controls, canvas overlay.
- WebGPU device: compute pipeline for batched multi-head attention (QKV from embeddings + query) + softmax. CPU JS fallback for attention when WebGPU unavailable.
- 8×6 spatial tokens. Genome: embedding matrix (48 tokens × 16 dims). Query: 16-dim from pointer features.
- Offline-capable after load. Audio optional (simple pulse on high attention after gesture).

## Expected outcome
Move pointer or tilt: query attends to lattice, DOM cards spring/morph toward high-attention regions, global UI hue/blur shifts with entropy. Click high-attention cards to boost fitness. Seal champion embeddings; open another tab to receive genome. Interactive with graceful degradation.

## Mechanics
1. Pointer delta + position + velocity → query embedding.
2. WebGPU (or JS) attention: tokens attend to query and each other; scores modulate card transforms.
3. Dwell when pointer near high-score card → fitness++.
4. Every 7s: sort fitness, seal top embedding + hash to IndexedDB, BroadcastChannel post, mutate into lower tokens.
5. Canvas: draw lattice points colored by attention, query ray.
6. CSS vars `--attn-energy`, `--attn-entropy` drive filter/hue-rotate on root.

## Failure modes
- No WebGPU → pure JS attention matrix (slower but functional).
- Orientation denied → pointer only.
- IndexedDB/BroadcastChannel blocked → in-memory single-tab.
- Audio blocked until gesture → silent morph only.
- Low performance → reduce heads or lattice size.

## Building blocks for next
WebGPU multi-head attention kernels over spatial embeddings, attention-driven CSS morph of hybrid DOM, sealed embedding genome transfer. Next: full WebXR hand joints as multi-query tokens, or WebRTC for real peer embedding exchange, or diffusion-style denoising of the attention field.

## V01D landing
Spatial attention-morph skill under void-live-deploy/skills/; testable via pointer→attention→DOM transform response, sealed hash round-trip, fitness rise under fixed dwell pattern.
