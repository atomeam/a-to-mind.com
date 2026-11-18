# F794-attention-field-portal-mind

**Plain name:** Local Attention Field Portals

**Job:** Move pointer or tilt. A tiny local multi-head attention over a causal event history modulates a living density field. Floating DOM portals act as attention queries that both sample and rewrite the field. Drag portals to inject strong causal events. Seal the adapted attention weights.

**Concept**
A novel hybrid spatial/local-AI interface for The Verse canvas. A ring buffer of pointer positions, velocities, and device orientation (if available) forms the causal context. A small local multi-head attention mechanism (4 heads, learned QKV weights stored as a genome) treats each floating DOM portal as a query. Attention scores determine both the portal's target position/size/hue and the locations/strengths of density sources injected into a continuous 2D field.

The field (diffusion + sources + decay) is updated each frame and visualized on canvas. Portals seek the attention-weighted locations, display their current attention entropy or sampled density, and on drag inject a high-energy event into the history that reweights future attention. On seal, the current QKV weights, a short history snapshot, and field energy are written to IndexedDB. Fully offline. Progressive enhancement: pointer always works; orientation optional; WebGPU field update if available (Canvas2D primary for reliability).

**Novelty**
Leaves the recent cluster of continuum physics (SPH/LBM/SDF/Kuramoto/Biot-Savart/particle attractors), discrete CA/LGA/DLA, speech-to-lattice, WebXR hands, Echo State / MLP / Hebbian / Bayesian readouts, and pure peak-seeking portals. Core novel combination is bidirectional attention: portals are the queries that attend over causal sensor history to both move themselves and sculpt the continuous field they inhabit. Not previously built.

**Architecture**
- Causal history: ring buffer of {x, y, vx, vy, tiltX, tiltY, energy} events.
- Local attention: 4 portals × 4 heads; small learned Q/K/V matrices (genome); softmax attention over recent history tokens.
- Field: 96×54 density grid, simple diffusion + source injection from attention outputs + decay. Canvas2D render (WebGPU compute optional stub).
- DOM portals: 4 absolute cards, lerp to attention-derived targets, scale/hue by score, text shows score + sampled density. Drag → strong event injection + temporary query boost.
- Pointer / DeviceOrientation: continuous event stream.
- IndexedDB: seal/load genome (QKV + bias).
- Single-file HTML/CSS/JS, no external deps.

**Expected outcome**
Open page: soft density field drifts. Move mouse or tilt: attention reweights, portals drift to new foci and the field develops persistent structures around recent motion. Drag a portal to lock attention there. Seal persists the mapping. Works offline on desktop and mobile.

**Failure modes**
- No orientation: pointer only (still fully interactive).
- IndexedDB blocked: session memory only.
- Very low-end: reduce history length or field resolution.

**Building blocks**
Reusable local multi-head attention core over sensor history, attention-to-field source binder, bidirectional portal query system. Expands attention-mediated spatial minds for future Verse experiments.

**V01D landing**
Attention-field portal skill under void-live-deploy/skills/attention-field-portals.js; test asserts event → attention update → portal position change + field source injection and IndexedDB round-trip.

Void is now Verse everywhere.

**Files**
- drafts/F794-attention-field-portal-mind/SPEC.md
- drafts/F794-attention-field-portal-mind/index.html
