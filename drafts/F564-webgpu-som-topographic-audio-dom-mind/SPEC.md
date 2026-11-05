# F564 WebGPU-Ready SOM Topographic Audio-DOM Spatial Mind

**Slug**: `webgpu-som-topographic-audio-dom-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of rigid DOM genome physics (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560), Hopfield/FFT/WebXR memories, SDF portals. Explicitly leaves rigid-body competitive genomes, reaction-diffusion chemistry, spiking LIF networks, reservoirs (ESRN), associative memories (Hopfield), attention controllers, SDF/raymarch, particle swarms, spectral residuals, pure NCA, softbody springs, and continuous field kernels.

**Concept**  
A Self-Organizing Map (Kohonen SOM) whose 16×12 grid of multi-dimensional weight vectors topographically organizes live multi-modal sensory streams (pointer trajectory deltas + Web Audio frequency spectrum bins). Best-matching units (BMUs) are found each frame; the winning cell lights on a Canvas2D visualization of the map and embodies a floating DOM “memory node” that displays a compact signature of the input (velocity, spectral centroid, timestamp). Dragging a node injects a supervised reinforcement or relocation of its weight vector. A simple online learning rule (learning rate + Gaussian neighborhood) updates the map. WebGPU compute path is reserved for parallel distance search on larger maps. Seal persists the full weight matrix and active node positions to IndexedDB. The Verse canvas becomes a living topographic sensory cortex that grows spatial memory nodes from what it hears and feels.

**Novelty**  
Leaves the dominant recent clusters of physics-based DOM agents, continuous chemical/field simulations, and associative/recurrent neural memories. Core novel combination is an unsupervised topographic Self-Organizing Map as the primary spatial substrate, multi-modal (pointer kinematics + audio spectrum) online organization, BMU-driven embodiment of real DOM nodes as persistent sensory memories, and sealed weight-matrix persistence. Not a Hopfield attractor, not a reservoir echo, not a GA-evolved policy, not a reaction-diffusion or particle field.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- SOM: 16×12 grid, input dim = 8 (4 pointer history + 4 audio bins). Weights initialized randomly or loaded from IndexedDB.  
- Visualization: Canvas2D colored by BMU activity and quantization error.  
- DOM nodes: absolute-positioned cards spawned/moved to screen coords of BMU; show signature text; draggable.  
- Audio: AnalyserNode on oscillator bank or getUserMedia (gesture-gated); 4 log-spaced bins.  
- Pointer: velocity and acceleration history.  
- Learning: classic SOM update on each input.  
- IndexedDB store `f564-som-mind` for weights + node state.  
- Seal button; “Reset Map”, “Inject Tone”, “Add Noise”.  
- WebGPU: compute shader stub for future BMU search (falls back to JS always).

**Expected outcome**  
Runnable prototype in which moving the pointer and (optional) audio input cause the SOM grid to reorganize live. Bright BMU cells spawn or move floating DOM memory nodes that display what the map is currently “hearing/feeling.” Dragging nodes adjusts their weights. Seal restores the topographic organization and nodes across reloads. Works offline.

**Mechanics**  
1. Initialize 16×12 SOM weights (or load). Spawn initial nodes from random BMUs.  
2. Each frame: build input vector from pointer + audio; find BMU (JS Euclidean); update neighborhood; paint Canvas; position/create DOM node at BMU screen location.  
3. Pointer move: record velocity history.  
4. Drag DOM node: on drop, reinforce its weight toward current input or inject custom.  
5. Seal: serialize weights + node data to IndexedDB.  
6. Visual feedback: node hue from spectral centroid, overlay of last BMU, live quantization error.

**Failure modes**  
- getUserMedia denied or no mic: oscillator fallback.  
- IndexedDB quota or blocked: in-memory only.  
- High grid size: throttle updates.  
- WebGPU unavailable: JS path always works.  
- Audio context suspended: resume on first gesture.

**Files**  
- drafts/F564-webgpu-som-topographic-audio-dom-mind/SPEC.md  
- drafts/F564-webgpu-som-topographic-audio-dom-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/som-topographic-mind/` or canvas tool; test that pointer+audio inputs measurably move BMUs and that sealed weights restore the same node layout after reload.
