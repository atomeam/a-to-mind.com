# F734-webgpu-attention-particle-dom-mind

**Concept**
A previously unattempted combination for The Verse canvas: a WebGPU compute-driven particle field that encodes a living key-value memory. Each particle carries a low-dimensional key vector. A local pure-JS causal attention module treats the current pointer position (or DeviceOrientation tilt) as a query, computes softmax attention over a subsample of particles, and produces an attended feature vector. This vector continuously drives CSS transforms, scale, hue, and opacity of a sparse lattice of absolute-positioned DOM Verse portals. Dragging a portal injects a new key into the nearest particle and rewards fitness. The highest-fitness particle state + attention weights seal to IndexedDB and transfer via BroadcastChannel. Visual trails and particle density are rendered by the WebGPU pipeline. Fully offline after load; no external models or libraries.

**Novelty**
Leaves the recent cluster of continuum fluid kernels (LBM F733, Gray-Scott F732), discrete CA/audio, quantum phase, pathtracers, WebXR hand/gaze, and prior MLP-policy / residual / NCA / SPH substrates. Core novel combination is WebGPU particle compute as an explicit key-value store under pure-JS multi-head-style attention (query from spatial input), with the attended latent physically morphing living DOM portals that both visualize and rewrite the memory. Not a visual-only particle swarm, not fluid advection, not fixed-rule CA, not SDF raymarch.

**Architecture**
- Single self-contained index.html (HTML/CSS/JS + inline WGSL).
- WebGPU: compute shader updates particle positions + stores key vectors in storage buffers; render pipeline draws points with additive blending.
- JS attention: subsample 64 particles, compute Q·K similarities, softmax, weighted sum of values → 4-D latent.
- 6–8 DOM portals: position/scale/hue driven by latent + local particle density; pointer-drag injects keys.
- DeviceOrientation: optional query bias.
- Persistence: IndexedDB `verse-f734-attn`, BroadcastChannel `f734-genome`.
- Controls: Init GPU / Orientation, Seal, Reset, Density slider.

**Expected outcome**
Open page, grant GPU. Particles swirl. Portals morph and drift as attention focuses on different regions. Drag a portal to inject a key and watch attention shift and portals respond. Tilt device to bias query. Seal and open second tab to transfer genome. Works offline; graceful fallback to Canvas2D particles if no WebGPU.

**Failure modes**
- No WebGPU: Canvas2D particle fallback, attention still runs.
- No orientation: pointer-only query.
- Low particle count on weak GPU: auto-reduce.
- IndexedDB blocked: in-memory only + toast.

**Building blocks**
Reusable WebGPU particle key-value buffer, pure-JS spatial attention module, DOM morph from attended latent, sealed genome transfer.

Void is now Verse everywhere.
