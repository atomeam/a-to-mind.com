# F562 WebGPU Reaction-Diffusion Attention Spatial Verse Mind

**Slug**: `webgpu-rd-attention-spatial-verse`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of DeviceOrientation LIF spike audio (F561), ESRN spatial UI morph (F560), FFT Hopfield, WebXR Hopfield/electrostatic, NCA, competitive genomes, SDF portals. Explicitly leaves spiking neural networks, reservoir computing, associative memories (Hopfield/ESRN), spectral embeddings, particle swarms, SDF/portals, WebXR controllers, IntersectionObserver attention, evolutionary GA, and rate-based continuous neural fields.

**Concept**  
A full-canvas WebGPU compute simulation of Gray-Scott reaction-diffusion producing living organic chemical patterns. A compact local attention controller (JS-implemented multi-head on pattern statistics + pointer) continuously modulates the feed and kill rates across spatial regions, “attending” to novelty and user input to steer the chemistry. Emergent high-density regions seed and position spatial “Verse” typography fragments (short phrases drawn from a sealed local lexicon) that drift, scale, and fade with the local concentration field. The mind’s chemistry literally writes and rewrites spatial verse. Seal persists the chemical state grid and attention weights to IndexedDB. Fully offline single-file prototype. Mouse/pointer primary; no external sensors required.

**Novelty**  
Leaves the dominant recent clusters of spiking LIF audio, continuous rate-based reservoirs/Hopfield driving morphs or particles, NCA rule evolution, and sensor-driven controllers. Core novel combination is GPU-accelerated reaction-diffusion chemistry whose parameters are steered by a local attention mechanism over spatial statistics, with the resulting concentration field physically instantiating and animating kinetic typography fragments that form an emergent spatial verse. The mind’s internal chemistry authors visible text in space. Not pattern storage/recall, not residual predictors, not softbody DOM agents, not k-means particles.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Gray-Scott RD: WebGPU compute shader on 256×256 grid (or Canvas2D fallback), two chemicals U/V, classic feed/kill with spatial variation.  
- Attention controller: small multi-head attention over binned pattern stats (mean, variance, local maxima) + pointer velocity; outputs regional Δfeed/Δkill.  
- Typography: pool of ~40 absolute-positioned DOM text nodes (“verse fragments” from sealed lexicon: short poetic tokens). Density peaks spawn/position/scale/opacity them.  
- IndexedDB store `f562-rd-verse-mind` for U/V grids (downsampled) and attention weights.  
- Seal button; “Reset Chemistry”, “Inject Seed”, “Silence Verse”.  
- Fallback: full JS RD + Canvas2D always works; WebGPU accelerates the chemistry only.

**Expected outcome**  
Runnable prototype in which the canvas blooms with organic reaction-diffusion patterns. Moving the pointer steers the chemistry via attention; dense regions birth floating verse fragments that drift and morph with the field, composing an emergent spatial poem. Seal restores the chemical mind across reloads. Works offline; graceful Canvas2D path always available.

**Mechanics**  
1. Initialize random U/V near equilibrium; load from IndexedDB if present. Setup WebGPU or fallback. Seed verse lexicon.  
2. On pointer move: update attention keys/queries from local stats and velocity.  
3. Each frame: run RD steps (compute or JS); sample density field; update verse fragment positions/scales/opacities from peaks; apply attention-modulated rates.  
4. Render chemistry as color-mapped texture or canvas.  
5. Seal: serialize downsampled grids + weights to IndexedDB.  
6. Visual feedback: live feed/kill map, attention energy, verse count.

**Failure modes**  
- WebGPU unavailable or context lost: Canvas2D + JS RD.  
- IndexedDB quota or blocked: in-memory only.  
- High density: throttle verse spawn.  
- Low FPS: reduce grid resolution dynamically.  
- Attention instability: clamp rate deltas.

**Files**  
- drafts/F562-webgpu-rd-attention-spatial-verse/SPEC.md  
- drafts/F562-webgpu-rd-attention-spatial-verse/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/rd-verse-mind/` or canvas tool; test that pointer attention changes regional feed/kill statistics and that density peaks measurably increase verse fragment spawn rate and spatial dispersion.
