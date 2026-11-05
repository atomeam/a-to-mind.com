# F559 WebGPU FFT Hopfield Spatial Memory Mind

**Slug**: `webgpu-fft-hopfield-spatial-memory-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of WebGPU SDF portals (F555), WebXR hand Hopfield DOM (F556), intersection-evo particles (F557), WebXR gaze SVG (F558). Explicitly leaves DOM portals, particle swarms, SDF raymarching, SVG electrostatics, WebXR hand/gaze, orientation sensors, self-vision retinas, NCA, and competitive genomes.

**Concept**  
A full-canvas spatial memory field where recent pointer trajectories are treated as time-series signals. Their spectral content (FFT magnitudes) becomes a pattern vector stored in a local Hopfield network. The network recalls stored spectral memories when idle or on demand, and the recalled vector continuously modulates a WebGPU (or Canvas2D fallback) particle/lattice visualization—color, velocity bias, and emission. User “teaches” by drawing paths; the system spontaneously morphs toward remembered spectral signatures. Seal persists the Hopfield weight matrix and pattern list to IndexedDB. Fully offline single-file prototype. No external sensors beyond pointer, no DOM cards as agents, no evolutionary GA on physics params, no audio spatialization.

**Novelty**  
Leaves the dominant recent clusters of sensor-driven (orientation/WebXR/gaze) neural controllers on particles/DOM/SVG/SDF, IntersectionObserver attention loops, competitive collision genomes, and self-referential visual retinas. Core novel combination is spectral (FFT) embedding of raw pointer trajectories as the pattern space for a classical Hopfield associative memory whose continuous recall state drives a GPU particle field. The mind remembers the “sound” of gestures (in frequency domain) and replays them as living spatial dynamics. Not time-domain residual predictors, not attention kernels on lattices, not Hebbian on spatial grids.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Pointer trajectory buffer (last 128 samples of x,y velocity).  
- Pure JS radix-2 FFT (or WebGPU compute if available) producing 32-bin magnitude spectrum as pattern.  
- Hopfield network: 32 neurons, Hebbian outer-product weights, asynchronous or synchronous update for recall. Capacity ~ few patterns.  
- Visualization: ~1k particles on Canvas2D (or WebGPU compute+render). Current Hopfield state vector biases particle hue, speed, and attractor.  
- IndexedDB store `f559-hopfield-memory` for weights + pattern list.  
- Seal button; optional “Recall” and “Clear”.  
- Fallback: full JS path always works; WebGPU used only for particle update if `navigator.gpu` present.

**Expected outcome**  
Runnable prototype in which drawing with the pointer stores spectral “memories”; after release the field morphs toward a recalled pattern (visible as coherent swirling or pulsing); Seal restores memories across reloads. Works offline; graceful Canvas2D path always available.

**Mechanics**  
1. Initialize empty Hopfield; load from IndexedDB if present. Spawn particles.  
2. On pointer move: append velocity samples; on pointer up compute FFT → store pattern (if distinct) via Hebbian update.  
3. Each frame: if idle or recall triggered, run 2–4 Hopfield iterations; map state to visual params.  
4. Update/render particles driven by current state.  
5. Seal: serialize weights + patterns to IndexedDB.  
6. Visual feedback: spectrum bar or current energy displayed.

**Failure modes**  
- WebGPU unavailable or context lost: Canvas2D + JS particles.  
- IndexedDB quota or blocked: in-memory only.  
- FFT numerical issues: clamp and normalize spectrum.  
- Too many patterns: Hopfield capacity exceeded → oldest discarded.  
- Low FPS: reduce particle count dynamically.

**Files**  
- drafts/F559-webgpu-fft-hopfield-spatial-memory-mind/SPEC.md  
- drafts/F559-webgpu-fft-hopfield-spatial-memory-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/spatial-memory/` or canvas tool; test that spectral store/recall changes particle statistics measurably.
