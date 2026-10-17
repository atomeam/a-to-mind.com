# A-to-Mind Feature Assimilation Ledger

... [full content would be here; in practice the append is the new section below the existing Halt records]

## Frontier Engine Experiments (Void canvas spatial / local-AI)

Permanent concept memory for novel combinations. Append only. Each experiment: architecture, expected outcome, mechanics, failure modes, and how it expands the frontier.

### 2026-10-17 — webgpu-attention-field (run frontier-001)

**Slug:** webgpu-attention-field  
**Novel combination:** WebGPU compute shader for local affinity/attention forces + interactive 2D canvas particle field + hash-derived feature vectors as lightweight local "embedding" (no external model). Not a superficial variation of prior CSS-3D graphs or hold-gated UI; first GPU-accelerated spatial concept explorer for the Void canvas.

**Architecture:**
- Single self-contained HTML/JS/WGSL.
- Particles carry position, velocity, 3-component feature hash from label text.
- Compute pass (workgroup 64): integrates damped forces — mouse/query attraction, sampled repulsion, feature-dot-product affinity boost.
- Readback + Canvas2D draw (hybrid for prototype; pure render pipeline is next building block).
- Fallback to pure CPU if no WebGPU.
- UI: query input spawns high-affinity attractor particle; add arbitrary concepts.

**Expected outcome:**
- Interactive spatial field where typed queries pull semantically-similar (hash-close) particles into clusters.
- User can drag mouse to sculpt the field; emergent grouping demonstrates local AI-like attention without network calls.
- Runnable immediately in any WebGPU browser; expands next experiments toward full render pipeline, WebXR embedding, or real local embeddings (Transformers.js / WebLLM) driving the same force field.

**Mechanics:**
- Feature hash: simple rolling hash to [0,1]^3.
- Affinity: dot product of feature slices with query feature.
- Integration: Euler with 0.95 damping.
- Readback each frame for visualization (acceptable for N=128; larger N would stay on GPU).

**Failure modes observed / anticipated:**
- Readback every frame is bandwidth-heavy; pure GPU render is required for scale.
- Hash features are crude; real local embeddings would improve clustering quality.
- No persistence yet; next: IndexedDB of user-added concepts or ledger import.
- WebGPU unavailable on some devices → graceful 2D fallback.

**Expansion:**
- Building block for Void canvas: drop-in spatial tool that can later consume real note embeddings or MCP-sourced concepts.
- Enables future experiments: WebXR stereo view of the same field, local LLM generating new particle labels on the fly, or compute-shader attention over a growing ledger graph.

Draft: `drafts/frontier-webgpu-attention-field/index.html`
