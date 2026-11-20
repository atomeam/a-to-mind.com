**Plain name:** Attention Sequence Morph Portals  
**Job:** Feed pointer or tilt history into a local multi-head attention mind that morphs and positions living DOM portals; drag to teach the weights, then seal the learned genome so the mind resumes.

**Ledger ID**: F-860  
**Slug**: attention-sequence-dom-morph-mind  
**Date**: 2026-11-20  
**Branch from**: Recent cluster of heat-equation orientation MLP portals (F859), WebRTC sealed genome auctions (F858), continuum phase/CA/L-system/boids/CSS3D/self-attention/WebXR/spiking minds (F850–F857), semantic force notes (F850), and earlier single-step MLP/RNN/reservoir policies.

**Concept**  
A causal sequence of recent user actions (pointer position/velocity + DeviceOrientation residual) is buffered and fed to a tiny pure-JS multi-head self-attention layer (1–2 heads, d_model=8). The attention outputs control both the absolute positions and the morphological CSS parameters (clip-path polygon vertices, border-radius, filter hue/blur, scale) of 6 living absolute-positioned DOM portals on The Verse canvas. A background Canvas2D (WebGPU compute optional) visualizes the attention energy as a soft field. Dragging a portal supplies a supervised target that performs a simple gradient step on the attention projection weights. Highest-fitness genome (weights + portal states) seals to IndexedDB and restores on reload. Optional BroadcastChannel shares sealed weights across tabs (adopt if higher fitness).

**Novelty**  
Leaves the dominant recent cluster of single-step MLP/RNN policies, continuum fields (heat, Cahn-Hilliard, Lenia, SPH, DEM), softbody/Verlet chains, particle swarms, self-attention as forces only, WebRTC auctions, and semantic embeddings. Core novel combination is sequence-level multi-head attention operating on a causal history buffer (not instantaneous features), driving not only translation but true morphological deformation of DOM elements via dynamic clip-path and filters, with drag-as-online-supervised update, computed alongside an optional worker-offscreen visualization path. Not a superficial variation of prior attention-cluster or portal minds.

**Architecture**  
- Single self-contained index.html (offline after load, progressive)  
- History ring buffer (length 12): normalized pointer + velocity + orientation  
- Tiny multi-head attention (1 head, d=8, pure JS matrix ops) produces per-portal style and position deltas  
- 6 DOM portals: absolute cards with dynamic clip-path (hex-to-star morph), hue-rotate, scale by attention energy  
- Canvas2D background draws attention field; WebGPU path reserved for particle overlay if available  
- Online update: drag delta → target → one gradient step on W_q, W_k, W_v (learning rate 0.01)  
- Fitness: dwell time + successful drag alignment  
- Seal: IndexedDB `verse-f860-attn-morph` stores weights, history stats, portal states; BroadcastChannel `f860-genome` for peer adopt  
- Fallbacks: no orientation → pointer residual only; no IDB → memory; no WebGPU → Canvas2D  

**Expected outcome**  
Open: portals drift and morph under the attention mind driven by pointer motion or tilt. Drag a portal toward a preferred shape/position: weights update, future morphs adapt. Reload or open another tab: sealed genome resumes and may spread. Interactive spatial mind whose local sequence model physically deforms the interface in response to causal history.

**Failure modes**  
No DeviceOrientation permission → pointer proxy (still fully interactive). IDB blocked → session only. Very rapid input → buffer saturates (throttled). WebGPU unavailable → Canvas2D visualization only.

**Building blocks**  
Reusable pure-JS multi-head attention on causal sequences, drag-supervised weight update, morphological CSS embodiment of attention outputs, sealed sequence genome. Enables future hybrid sequence models with WebGPU kernels or multi-device shared attention minds on Verse.

Void is now Verse everywhere.

**Files**: drafts/F860-attention-sequence-dom-morph-mind/SPEC.md, drafts/F860-attention-sequence-dom-morph-mind/index.html
