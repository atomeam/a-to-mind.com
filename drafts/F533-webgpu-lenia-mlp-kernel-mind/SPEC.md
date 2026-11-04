# F533 — WebGPU Lenia MLP Kernel Mind

## Concept
Novel combination: a continuous Lenia cellular automaton (smooth floating-point field evolved by radial kernel convolution + Gaussian growth; previously unused — not discrete Ising Metropolis, not SIR contact, not sandpile, not reaction-diffusion, not Langton's ant, not PSO, not attention, not reservoir) as the embodied mind substrate. A local pure-JS tiny MLP takes DeviceOrientation (or pointer velocity fallback) history as causal input and outputs the growth center μ and growth width σ (and optionally kernel radius scale). Absolute-positioned Verse DOM host cards sample local activity density, morph their scale/hue/content according to local potential, and can be dragged to inject "seeds" (local density boost) into the field. High fitness (sustained activity or pattern persistence) or manual seal hashes the MLP weights + current params into IndexedDB; BroadcastChannel enables multi-tab sealed genome adoption. Fully self-contained, offline after first load, progressive. WebGPU compute path reserved; Canvas2D fallback for broad runnability.

This deliberately leaves the recent cluster of sensor-driven local models + discrete lattice kernels + WebAudio/WebRTC with DOM probes (F523–F532). Continuous Lenia growth/kernel + orientation-MLP parameter control + host-card hybrid embodiment + sealed transfer is previously unused.

## Architecture
- Single self-contained index.html.
- Canvas2D grid (64×64) for Lenia field A ∈ [0,1]; optional WebGPU note.
- Update: simplified spatial convolution with fixed radial bell kernel (radius ~8–12), then Gaussian growth G(U) = 2*exp(-(U-μ)²/(2σ²))-1, A ← clamp(A + dt*G, 0, 1). JS loop for demo; WebGPU FFT path future.
- Local MLP: 4 inputs (orient beta_proxy, gamma, dbeta, dgamma or pointer dx/dy), hidden 8, outputs 2 (μ clamped [0.05,0.3], σ clamped [0.01,0.08]). Weights random init, simple reward update on fitness delta.
- 6 DOM host cards: absolute, sample nearby 5×5 activity, set background hue (activity-mapped), scale by density, label "Probe N: a=..".
- Drag cards: on release, inject seed (boost A) at canvas coords under card.
- Seal button: SHA-256 of JSON(weights + μσ + fitness) → IndexedDB store 'f533'; BroadcastChannel 'f533-lenia' post for other tabs to adopt if better fitness.
- Status overlay: grid size, current μ/σ, last seal, mean activity.
- Controls: start orientation (permission), seal, reset field (noise or blob), fitness mode (activity vs persistence).

## Expected outcome
Interactive spatial mind: continuous field evolves lifelike patterns driven by how the user holds the device (orientation sets growth parameters); host cards morph and can be used to seed new organisms; sealing and multi-tab genome transfer works; runnable offline; graceful pointer fallback if no orientation. Progressive WebGPU upgrade path noted.

## Mechanics
- Orientation events update MLP inputs; MLP forward pass every 200 ms sets μ/σ.
- Lattice steps: full convolution + growth every 50–80 ms (JS).
- Cards position fixed or lightly attracted to high-activity regions.
- Training: if fitness improves, small Hebbian/reward weight update.
- Failure modes: no orientation (pointer ok), no Worker needed, low FPS on large grid (64 ok), no WebGPU (Canvas fine).

## Building blocks
Continuous Lenia kernel, orientation-MLP parameter control, embodied DOM probes, sealed multi-tab genome. Next: WebGPU compute/FFT kernel + XR immersion of the field.

V01D landing: spatial continuous-life skill under void-live-deploy/skills/lenia-mlp-kernel.js; testable via orientation → μ change and seed injection fidelity.
