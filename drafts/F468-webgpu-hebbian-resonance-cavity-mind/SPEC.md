# F468-webgpu-hebbian-resonance-cavity-mind

## Concept
Hebbian Resonance Cavity Mind: a spatial wave-equation cavity (Canvas2D, WebGPU compute path noted) whose local propagation speeds and damping are biased by a running Hebbian co-activation matrix learned from user pulse injections and tile interactions. Absolute-positioned contenteditable Verse tiles act as embodied resonators: their text length, edit frequency, and drag position inject or absorb energy and strengthen Hebbian links between cavity regions. Residual of a one-step energy predictor (main-thread) injects turbulence. Optional device orientation tilts the cavity potential; optional microphone spectral centroid modulates global damping. Sealing captures field snapshot, Hebbian weights, tile texts, and residual metrics to IndexedDB for living memory restore. CSS chrome (hue, scale, background gradient) morphs continuously with total cavity energy and Hebbian entropy.

## Novelty
Not a superficial variation of F467 causal-echo-lattice (trajectory delay lines + residual predictor on particles), F466 spectral-cloth-weaver (mass-spring mesh + spectral stiffness), F465 Hebbian-mic-swarm-morph (particle swarm with mic-driven Hebbian), residual density lattices, NCA, or pure predictive orbs. Core is continuous wave-equation cavity whose anisotropic propagation is Hebbian-learned from co-occurring energy injections, coupled to spatial DOM resonators that both seed and are warped by the field, with sealed cavity-memory.

## Architecture
- Single index.html (no external deps)
- Canvas2D 2D wave equation (u[t+1] = 2u[t] − u[t−1] + c²∇²u − d·u) on ~80×50 grid
- Hebbian matrix (coarse 8×5 regions) updated on co-activation of high-energy bins; biases local c
- Absolute-positioned contenteditable tiles (5) with drag-to-seed and click-to-pin
- Main-thread linear residual predictor on total energy (Worker evolutionary upgrade noted)
- DeviceOrientationEvent for gravity tilt potential
- Optional AnalyserNode spectral centroid → damping
- IndexedDB seals (field, weights, tiles, residual)
- CSS custom properties driven by energy/entropy for chrome morph

## Expected Outcome
Interactive spatial resonance cavity that rings and propagates under pointer, tilt, and voice; learns preferred pathways between user-seeded regions; lets editable tiles act as resonators that inject energy and are visually warped by local amplitude; restores sealed memories as living fields. Fully offline after load.

## Failure Modes
No orientation (tilt=0), mic denied (damping fixed), Canvas2D only (WebGPU next), private mode IndexedDB quota, high grid size CPU-bound.

## Building Blocks
True WebGPU compute wave kernel with Hebbian texture, Worker residual MLP, WebXR tracked resonator hands, multi-tab BroadcastChannel cavity sharing, local TF-IDF tile embeddings modulating resonance frequencies.

## V01D Landing
skills/mini/hebbian-resonance-cavity; testable via pulse→Hebbian bias change, drag→seed injection + tile warp, seal→IDB restore of field+weights.

## Files
drafts/F468-webgpu-hebbian-resonance-cavity-mind/SPEC.md
drafts/F468-webgpu-hebbian-resonance-cavity-mind/index.html
