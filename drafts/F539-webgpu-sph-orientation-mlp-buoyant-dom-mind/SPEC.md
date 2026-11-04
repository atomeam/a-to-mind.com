# F539 WebGPU SPH Orientation-MLP Buoyant DOM Mind

## Concept
Novel combination for The Verse canvas: continuum Smoothed Particle Hydrodynamics (SPH) fluid simulated in a WebGPU compute shader (density + pressure + viscosity forces; previously unused kernel — distinct from discrete lattice-gas streaming). A tiny local MLP (orientation Δβ/Δγ + pointer velocity → force injection strength, viscosity multiplier, target density) causally steers the fluid. Absolute-positioned DOM cards act as true buoyant bodies: each frame their bounding boxes sample local fluid density/velocity and receive force impulses that translate/rotate them, closing a hybrid physics loop. Fitness = sustained float stability + density concentration under cards. Seal persists MLP weights to IndexedDB and broadcasts via BroadcastChannel so other tabs adopt higher-fitness genomes. Offline after first load. Deliberately leaves the recent cluster of discrete lattices (SIR/Ising/LGA), residual walks, attention particles, electrostatic probes, Lenia/NCA, WebXR hand tendrils, and pure orientation-RNN DOM agents.

## Architecture
- Single `index.html` (no external deps)
- WebGPU compute: ping-pong storage buffers of ~1024 SPH particles (position, velocity, density, pressure). Compute shader evaluates density (smoothing kernel), pressure forces, viscosity; injects MLP-controlled forces.
- MLP: 6 inputs (Δβ, Δγ, pointer vx/vy, avg density, fitness proxy) → 8 hidden → 3 outputs (force scale, viscosity, target density bias). ~60 floats. Online reward = float vertical stability + density under cards.
- DOM buoys: 4–6 absolute cards; occupancy + center sampled each frame; force = local density * buoyancy constant − gravity; velocity damping.
- IndexedDB `f539-sph-mlp`; BroadcastChannel `f539-genome` for sealed transfer (FNV-like hash of weight prefix must match before adopt).
- Fallback: Canvas2D particle approximation if WebGPU unavailable; mouse-only if no DeviceOrientation.

## Expected outcome
Runnable prototype in which tilting the device (or moving the pointer) changes fluid viscosity and force sources via the MLP; DOM cards bob, drift, and cluster according to local density; Seal transfers a high-fitness control policy across tabs. Particle count conserved; visual density field responds immediately to orientation and cards.

## Mechanics
1. Initialize random particle distribution + random MLP weights; load from IndexedDB if present.
2. Listen for DeviceOrientationEvent, pointermove, BroadcastChannel, Seal button.
3. Each frame: forward MLP, update uniforms, dispatch SPH compute (density/pressure/viscosity + force inject), read back density/velocity samples for DOM forces, apply buoyancy impulses, render density as colored points.
4. Compute fitness; Seal writes weights + hash + fitness.
5. On receive: verify seal hash → adopt if fitness higher.

## Files
- drafts/F539-webgpu-sph-orientation-mlp-buoyant-dom-mind/SPEC.md
- drafts/F539-webgpu-sph-orientation-mlp-buoyant-dom-mind/index.html

## V01D landing
SPH buoyant-DOM stage under `void-live-deploy/skills/webgpu-sph-orientation-mlp.js`; test asserts orientation delta → MLP → viscosity/force change and BroadcastChannel sealed genome adoption.
