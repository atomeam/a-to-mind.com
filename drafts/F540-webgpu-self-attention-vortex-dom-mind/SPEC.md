# F540 WebGPU Self-Attention Vortex DOM Weaver Mind

## Concept
Novel combination for The Verse canvas: A WebGPU particle vortex system whose local forces and emission are driven by a tiny multi-head attention mechanism running over a population of absolute-positioned DOM Verse cards (as tokens), pointer velocity history, and optional DeviceOrientation. Attention outputs morph the cards (scale, hue, opacity, slight spring positions) and control particle vortex centers that form around high-attention cards. Particles deposit a density field that feeds back into card "attention bias". User can drag cards to seed new attention anchors; Seal persists the attention weight prefix to IndexedDB with a simple hash; BroadcastChannel allows cross-tab adoption of higher-fitness genomes. Fully offline after load. Falls back to Canvas2D if WebGPU unavailable.

## Novelty
Leaves the dominant recent cluster of SPH fluids, lattice-gas/Ising/NCA, residual walks, pure orientation-RNN, WebXR hand tendrils, observer-based portals, and quantum-inspired oracles. Combines GPU particle vortex + local self-attention over DOM tokens + bidirectional morphing + sealed genome transfer in a way not previously attempted.

## Architecture
- Single `index.html` (no external dependencies)
- WebGPU: compute shader for ~2048 particles (pos, vel, latent); render as points or short trails. Attention computed on CPU (tiny, 6 cards × 4 heads) for simplicity and reliability, uniforms uploaded each frame.
- Attention: cards as keys/values (position, size, hue state); queries from pointer + orientation + global entropy. Outputs: per-card attraction strength, emission rate, morph scale.
- DOM: 5 absolute cards; their CSS transforms/filters driven by attention; drag updates position and injects attention bias.
- IndexedDB `f540-attention-vortex`; BroadcastChannel `f540-genome` for sealed transfer (FNV-like hash of weight prefix must match before adopt).
- Fitness proxy: attention entropy balance + particle density under cards + user drag count.
- Fallback: Canvas2D particle approximation; mouse-only.

## Expected outcome
Runnable prototype in which moving the pointer or tilting the device focuses the attention vortex around specific DOM cards; cards visually "weave" (scale, color shift, slight reposition) in response to the attention field; particles swarm and form transient vortices; Seal transfers a high-fitness attention policy across tabs. Visual feedback is immediate; offline capable.

## Mechanics
1. Initialize random particle distribution + random attention weights; load from IndexedDB if present.
2. Listen for pointermove, DeviceOrientationEvent, drag on cards, BroadcastChannel, Seal button.
3. Each frame: compute attention over cards + pointer, upload uniforms, dispatch particle compute (vortex forces from attention centers + density deposit), update DOM card styles from attention outputs, render particles.
4. Compute fitness; Seal writes weights + hash + fitness.
5. On receive: verify seal hash → adopt if fitness higher.

## Files
- drafts/F540-webgpu-self-attention-vortex-dom-mind/SPEC.md
- drafts/F540-webgpu-self-attention-vortex-dom-mind/index.html

## V01D landing
Self-attention vortex DOM weaver stage under `void-live-deploy/skills/webgpu-attention-vortex-dom.js`; test asserts pointer/orientation → attention scores → card morph + particle vortex center shift and BroadcastChannel sealed genome adoption.
