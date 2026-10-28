# F-303 — WebGPU Hebbian Spatial Memory Morph

## Concept
A WebGPU particle lattice where each particle carries a small local memory vector. Co-activations from pointer proximity and DeviceOrientation tilt drive a local Hebbian update rule (in a dedicated Web Worker) that strengthens associations between nearby particles. Collective memory coherence (average |weight|) and cluster variance morph surrounding DOM panels via CSS custom properties, transforms, and filters — the interface physically warps in response to the field's learned spatial associations. Champion memory snapshot seals to IndexedDB.

Deliberately branches from recent reservoir trajectory echoes (F292), orient-causal MLPs on DOM agents (F300), Hebbian kernels in pure compute (F297), pure NCA/fluid/reaction-diffusion, and genome arenas. Core novelty is Hebbian associative memory distributed across WebGPU particles, Worker-mediated learning, and direct physical morphing of real DOM UI chrome driven by the memory field.

## Architecture
- Single self-contained `index.html` (inline CSS/JS/WGSL, no external deps).
- WebGPU compute + render: ~1024 particles with position, velocity, and 4-float memory vector. Compute shader integrates simple attraction/repulsion + damping.
- Web Worker: receives particle samples every N frames, runs Hebbian delta-w = lr * pre * post (local, no global model), posts updated weights and coherence metrics back.
- Spatial input: pointer position + optional DeviceOrientationEvent (beta/gamma) as additional activation seed.
- Morphing UI: 4 floating DOM panels whose scale, rotate, hue-rotate, blur, and opacity are bound to CSS variables driven by coherence / variance.
- IndexedDB: seal/load of a compressed memory snapshot (top-k weights or average).
- Progressive: Canvas2D fallback if no WebGPU; pointer-only if no orientation.
- Fully offline after load.

## Expected outcome
Runnable interactive prototype. Move pointer or tilt device; particles cluster and form associative "memories" visible as persistent bright regions. Panels grow, rotate, and hue-shift as coherence rises. Seal persists the field's learned state across reloads. Expands frontier with distributed local Hebbian memory on GPU particles + Worker learning loop + physical DOM morph response.

## Mechanics
1. Particles update on GPU; sample subset posted to Worker.
2. Worker applies Hebbian increments only between co-active particles within radius.
3. Coherence = mean absolute weight; variance drives panel jitter.
4. Main thread sets CSS vars; panels morph smoothly.
5. Seal serializes weights hash + values to IndexedDB.

## Failure modes
- No WebGPU → Canvas2D particle fallback still shows morphing.
- Orientation permission denied → pointer only.
- Worker blocked by CSP → main-thread fallback (slower).
- High particle count on low-end → reduce sample rate.

## Cross-reference
Avoided pure MLP controllers, reservoir ESNs, genome evolution arenas, WebXR hand/gaze, spectral audio primary, residual predictors, pure NCA. Novel: distributed Hebbian memory on WebGPU particles + Worker learning + coherence-driven physical DOM morph + IndexedDB seal.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/hebbian-spatial-memory-morph.js`; test: pointer/tilt builds persistent clusters, panels morph with coherence, seal/load restores weights.
