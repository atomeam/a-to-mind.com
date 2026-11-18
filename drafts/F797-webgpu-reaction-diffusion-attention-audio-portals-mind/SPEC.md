# F797-webgpu-reaction-diffusion-attention-audio-portals-mind

**Plain name:** Reaction-Diffusion Attention Audio Portals

**Job:** Move pointer or tilt device. A local multi-head attention over causal motion history modulates a living reaction-diffusion field. Floating DOM portals sample the field, get carried by emergent patterns, and inject seeds when dragged. The field drives a generative Web Audio soundscape. Seal the adapted attention weights and parameters.

**Concept**
Novel hybrid spatial / local-AI / audio capability for The Verse canvas, never previously attempted: a Gray-Scott reaction-diffusion simulation (CPU or WebGPU compute) whose feed/kill rates are spatially modulated by a pure-JS multi-head attention mechanism reading a ring buffer of pointer velocity, position entropy, and device orientation. Absolute-positioned DOM portals act as queries that both sample concentration for visual style and rewrite local chemistry on drag. Concurrently, regional field statistics modulate a small bank of Web Audio oscillators and filters, producing an emergent closed-loop soundscape. Seal serializes the attention genome + RD hyperparameters to IndexedDB and BroadcastChannel for cross-tab persistence.

**Architecture**
- Grid: 128×72 float32 buffers for U (activator) and V (inhibitor)
- Update: classic Gray-Scott diffusion + reaction, 4-8 steps per frame, with local feed/kill offsets from attention
- Attention: 4 heads, QKV from 16-step causal window of [dx, dy, speed, tiltX, tiltY, entropy]
- Portals: 5–8 absolute divs; position = bilinear sample of V; drag injects Gaussian seed
- Audio: 4 oscillators (saw/sine) + lowpass; frequency and gain driven by average V near each portal
- Seal: IndexedDB key "f797-genome" + BroadcastChannel "f797-seal"
- Fallback: no WebGPU required; pure JS RD; pointer proxy for orientation; silent if AudioContext blocked

**Expected outcome**
Open the page: a colorful living field appears. Move mouse or tilt phone — patterns shift and migrate. Portals drift toward high-concentration regions and change color/size. Drag a portal to seed a new spot of activity. Hear a soft generative drone that evolves with the field. Click Seal to freeze current attention weights; reload to restore.

**Failure modes**
- No DeviceOrientation: pointer velocity used as proxy.
- AudioContext suspended until user gesture: button to resume.
- IndexedDB unavailable: session-only.
- Low-end device: reduce grid to 64×36, fewer RD steps.

**Building blocks**
Causal multi-head attention controlling continuous PDE parameters, reaction-diffusion as living substrate for DOM portals, closed-loop Web Audio from simulation state, sealed attention genome. Expands hybrid embodiment and generative audio for future Verse minds.

**V01D landing**
skills/reaction-diffusion-attention-audio.js; test: motion → attention → RD rates → portal motion + audio modulation, seal round-trip.

Void is now Verse everywhere.
