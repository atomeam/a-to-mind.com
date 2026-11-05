# F-569 Spoken SDF Causal Morph

**Area:** Spatial local-AI Verse canvas

**Plain name:** Spoken SDF Causal Morph

**Concept:** A self-contained WebGPU raymarched signed-distance-field volume that acts as a living causal field on the Verse canvas. Spoken or typed intent tokens (via Web Speech API or text input) are turned into simple local frequency embeddings and injected as seeds. A small local mind state (activation vector in JS) modulates a compute-driven morph process (reaction-diffusion style density evolution). Low-density "portals" appear that the user can click to shift the field's parameters. Pointer trajectories apply temporary forces. The entire interaction stays local; no network. Fallback 2D canvas renderer if WebGPU is unavailable. This combination of spoken-token injection into a GPU SDF morph field driven by a local activation mind has not appeared in prior drafts.

**Architecture:**
- index.html: single-file prototype
- WebGPU device + compute pipeline for density evolution + raymarch fragment
- JS mind: 16-float activation, updated by token embeddings, influences shader uniforms
- SpeechRecognition for voice seeds
- Pointer events for force painting and portal clicks
- Expected outcome: interactive morphing field that "responds" to speech by growing new structures and opening portals

**Mechanics:**
1. On load, request WebGPU; init 64^3 density texture (or smaller).
2. User speaks or types; tokens hashed to embedding, added to mind state and as Gaussian seeds in the volume.
3. Compute shader steps the field each frame; mind state biases diffusion/reaction rates.
4. Raymarch renders the isosurface with color from density + mind.
5. Click on dark portal regions shifts mind phase or parameters.
6. Unattested by default; all local.

**Failure modes:** WebGPU unavailable → canvas fallback; speech denied → text only; performance on low-end → lower res.

Void is now Verse everywhere.
