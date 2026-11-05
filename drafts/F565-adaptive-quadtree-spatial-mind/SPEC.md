# F565 Adaptive Quadtree Spatial Density Mind

**Slug**: `adaptive-quadtree-spatial-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of SOM topographic audio-DOM (F564), rigid DOM competitive genomes (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560), Hopfield/FFT/WebXR memories, attention lattices, residual predictors, volumetric injection, pure NCA, spectral/audio residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles. Explicitly leaves continuous neural fields, spiking nets, reaction-diffusion, rigid-body physics genomes, reservoir computing, associative memories, and particle swarms.

**Concept**  
A full-canvas adaptive spatial quadtree whose nodes recursively subdivide based on local pointer-density history. Each leaf runs a simple local rule (density accumulation + decay + neighbor coupling via parent) that determines color and a floating DOM label. High-density leaves split; low-density merge. The tree itself is the mind substrate: hierarchical spatial memory of interaction. Pointer movement injects density; the structure evolves offline. Seal persists the entire tree (bounds, densities, labels) to IndexedDB. Multi-tab optional via BroadcastChannel for shared density pulses. The Verse canvas becomes a living hierarchical partition that remembers where attention has been.

**Novelty**  
Leaves the dominant recent clusters of continuous/neural/physics simulations steering DOM or fields. Core novel combination is an adaptive hierarchical spatial data structure (quadtree) as the primary mind substrate, density-driven split/merge as the learning rule, leaf states embodied as real DOM labels, and sealed tree persistence. Not a field kernel, not a neural network, not multi-agent genomes, not sensor-driven continuous dynamics.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Quadtree: root covering canvas; max depth 6; split when density > threshold; merge when all children low.  
- Density: accumulated from pointer samples in leaf bounds, exponential decay, mild parent-child diffusion.  
- Visualization: Canvas2D draws tree bounds colored by density; leaves spawn/update absolute DOM labels showing density signature.  
- IndexedDB store `f565-quadtree-mind` for serialized tree.  
- Seal button; “Reset Tree”, “Pulse Center”.  
- BroadcastChannel `f565-density` for optional multi-tab pulse sharing.  
- No WebGPU required (JS tree always works).

**Expected outcome**  
Runnable prototype in which moving the pointer causes the canvas to recursively partition into denser colored regions; floating labels appear on leaves showing local density. The tree structure adapts live and persists across reloads via Seal. Works fully offline.

**Mechanics**  
1. Initialize empty root quadtree covering canvas; load from IndexedDB if present.  
2. On pointer move: find leaf, inject density.  
3. Each frame: decay all densities; diffuse slightly; check split/merge conditions; update DOM labels for leaves.  
4. Render tree on Canvas2D (lines + fills).  
5. Seal: serialize tree to IndexedDB.  
6. Visual feedback: live leaf count, max density, last split event.

**Failure modes**  
- IndexedDB quota or blocked: in-memory only.  
- High leaf count: throttle label updates.  
- Canvas resize: rebuild root bounds.  
- BroadcastChannel unsupported: local only.

**Files**  
- drafts/F565-adaptive-quadtree-spatial-mind/SPEC.md  
- drafts/F565-adaptive-quadtree-spatial-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/adaptive-quadtree-mind/` or canvas tool; test that pointer density causes measurable splits and that sealed tree restores the same partition after reload.
