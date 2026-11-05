# F560 WebGPU ESRN Spatial UI Morph Mind

**Slug**: `webgpu-esrn-spatial-ui-morph-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of spectral Hopfield memory (F559), FFT spatial, WebXR Hopfield, NCA, competitive genomes, SDF portals. Explicitly leaves associative memories (Hopfield), spectral embeddings of trajectories, particle swarms driven by recall, NCA rule evolution, and sensor-driven (orientation/WebXR) controllers.

**Concept**  
A full-canvas spatial visualization of an Echo State Reservoir Network (ESRN / liquid state machine). Pointer trajectories inject sparse input into a large leaky reservoir of recurrent neurons. The high-dimensional reservoir state is continuously projected to a low-dimensional “reasoning” vector. That vector drives CSS custom properties on surrounding DOM elements, causing them to physically morph (scale, rotate, hue-rotate, blur, position offsets) in real time as the network’s internal dynamics evolve. The canvas shows a particle field whose velocities and colors are biased by reservoir activations, embedding the mind spatially. Seal persists the reservoir weight matrices and current state to IndexedDB. Fully offline single-file prototype. No external sensors beyond pointer, no Hopfield recall, no FFT, no DOM cards as agents, no evolutionary GA.

**Novelty**  
Leaves the dominant recent clusters of Hopfield associative memory on spectral or spatial patterns, competitive MLP genomes, SDF raymarching portals, WebXR hand/gaze controllers, IntersectionObserver attention, and NCA. Core novel combination is reservoir computing (local recurrent AI with fixed random weights + trainable readout) whose continuous internal state physically morphs the surrounding DOM UI via CSS variables, while the same state is visualized as a living particle field. The mind’s “thoughts” (reservoir activity) literally reshape the interface around the canvas. Not pattern storage/recall, not spectral gesture memory, not competitive agents.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Echo State Reservoir: N=128 leaky neurons, sparse random recurrent weights (spectral radius ~0.9), input weights from pointer velocity/position.  
- Readout: fixed random projection of reservoir state to 6–8 dimensions that map to CSS variables (`--scale`, `--rot`, `--hue`, `--blur`, `--dx`, `--dy`, etc.).  
- Visualization: ~600 particles on Canvas2D (WebGPU compute+render used if available for particle update). Particles sample nearby reservoir activations for color/velocity bias.  
- Surrounding UI: floating panels and labels whose styles are bound to the CSS vars; they morph continuously.  
- IndexedDB store `f560-esrn-mind` for reservoir weights, readout, and last state.  
- Seal button; optional “Reset Reservoir” and “Inject Pulse”.  
- Fallback: full JS reservoir + Canvas2D always works; WebGPU accelerates particles only.

**Expected outcome**  
Runnable prototype in which moving the pointer injects energy into the reservoir; the surrounding UI elements continuously scale, rotate, shift hue, and blur in response to the evolving internal state; the particle field swirls with colors reflecting reservoir activity. Seal restores the mind’s weights and last state across reloads. Works offline; graceful Canvas2D path always available.

**Mechanics**  
1. Initialize random sparse reservoir weights and input weights; load from IndexedDB if present. Spawn particles and DOM morph targets.  
2. On pointer move: compute velocity/position features and inject into reservoir input.  
3. Each frame: leaky update of reservoir state (tanh activation, leak rate ~0.1–0.2); project state to CSS vars; apply to UI elements.  
4. Update/render particles driven by sampled reservoir activations.  
5. Seal: serialize weights + state to IndexedDB.  
6. Visual feedback: current reservoir energy and dominant projection values displayed.

**Failure modes**  
- WebGPU unavailable or context lost: Canvas2D + JS particles.  
- IndexedDB quota or blocked: in-memory only.  
- Reservoir instability (spectral radius too high): clamp activations.  
- Low FPS: reduce particle count or reservoir size dynamically.  
- CSS morph too extreme: clamp projected values.

**Files**  
- drafts/F560-webgpu-esrn-spatial-ui-morph-mind/SPEC.md  
- drafts/F560-webgpu-esrn-spatial-ui-morph-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/reservoir-mind/` or canvas tool; test that pointer injection changes CSS transform statistics of surrounding elements and particle velocity distribution measurably.
