# F589 Local Attention WebGPU Particle DOM Token Mind

**Ledger ID**: F-589 (frontier series)

## Concept
A pure-JS local multi-head-style attention mind (not MLP, reservoir, NCA, or evolutionary genome as primary) attends over a field of WebGPU-computed particles. User pointer and optional DeviceOrientation define the query focus. Attention scores externalize as living DOM "thought tokens" (absolute-positioned cards) whose positions, scales, hues, and content are driven by the attended particles. High-attention particles spawn or amplify tokens; low-attention ones fade them. Tokens can be clicked to inject a boost back into the attention matrix. Simple Web Audio oscillators are modulated by attention energy. Full state (particle positions, attention weights, token genomes) seals to IndexedDB. Fully self-contained, offline after load. WebGPU compute for particle update if available; Canvas2D fallback.

## Novelty
Leaves the dominant recent cluster of reservoirs+DOM graphs (F588), spatial-audio genomes (F587), IntersectionObserver fitness, WebRTC force-graph MLPs, sandpile SOC, voice-driven NCA UI sculptors, LBM attention portals, spectral SDF, Vicsek flocks, and continuum/particle WebGPU kernels. Core novel combination is pure local attention (query-key-value over particle features) as the mind model driving both a WebGPU particle substrate and the physical creation/morph of DOM thought-tokens, with click-to-boost reverse attention and optional orientation as query tilt. Not continuum fields, not particle physics primary, not audio primary, not WebXR, not softbody, not NCA, not evo-genome primary.

## Architecture
- Single index.html.
- 16 particles with positions, velocities, features (energy, hue).
- Local attention: query from pointer/orientation, keys/values from particles; softmax scores.
- 5-8 DOM tokens whose transforms and styles are soft-attracted by top-attended particles.
- Click token → boost its linked particle's value in attention.
- Web Audio: 2-3 oscillators whose frequencies track attention peaks.
- IndexedDB key "verse-f589".
- Fallback: no WebGPU → Canvas2D particles; no orientation → pointer only; no audio → silent.

## Expected outcome
Move pointer or tilt: attention focus sweeps the particle field; DOM tokens drift, resize, and recolor toward high-attention regions; tones shift with focus energy. Click a token to lock attention on it. Seal and reload restores the mind. Interactive hybrid embodiment of a local attention mind on particles and living DOM tokens.

## Mechanics
1. Init particles and tokens.
2. rAF: update particles (WebGPU or CPU), compute attention from focus, apply scores to token styles/positions, modulate audio.
3. Click handlers inject boosts.
4. Seal/restore via IndexedDB.

## Failure modes
- No WebGPU: Canvas2D particle sim.
- No DeviceOrientation: pointer-only query.
- IndexedDB blocked: session memory.
- AudioContext suspended: require gesture; visual still runs.
- Performance: attention O(N) fine for N=16.

## Building blocks unlocked for next
- Pure local attention (QKV) as primary mind controller
- Attention-driven spawning/morph of DOM tokens from particle field
- Click-to-boost reverse attention path
- WebGPU particle substrate coupled to attention scores

Void is now Verse everywhere.

**Files**: drafts/F589-webgpu-attention-token-spatial-mind/SPEC.md, drafts/F589-webgpu-attention-token-spatial-mind/index.html
