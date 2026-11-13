# SPEC — F735 DeviceOrientation KNN Spatial Cluster Notes Mind

**Plain name:** Spatial Note Clusterer  
**Job:** Add notes, drag them into groups, tilt to bias clustering; the local KNN learns your groupings and persists them.

**Ledger ID**: F-735 (frontier series)  
**Slug**: deviceorientation-knn-spatial-cluster-notes-mind  
**Date**: 2026-11-12  
**Status**: frontier prototype  

**Concept**  
A novel hybrid spatial interface for The Verse canvas: user-created DOM note cards live on a 2D canvas. A pure-JS k-nearest-neighbors (KNN) model continuously re-assigns each note to one of several clusters using a feature vector of normalized position, text length, and a simple hash. DeviceOrientation (beta/gamma) injects a mild bias into the feature space so tilting the device shifts cluster membership. Dragging a note teaches the model by appending the current features + assigned cluster as a training example (stored in memory and sealable to localStorage / BroadcastChannel). Background Canvas2D draws soft colored halos around notes according to cluster. No continuum fields, no WebGPU kernels, no particle swarms, no neural nets, no NCA.

**Novelty / Branch from**  
Last 8 drafts were dominated by WebGPU continuum/discrete field kernels (pathtracer spheres, discrete CA + audio, spiking neural portals, Gray-Scott reaction-diffusion, Lattice Boltzmann fluid advection, attention particles) mixed with DOM portals and local ML controllers. This deliberately leaves that cluster. First use of a non-parametric local KNN as the sole controller of spatial note clustering, with DeviceOrientation as a causal feature-space bias and drag-to-teach example accumulation. Sealed genome is the growing set of labeled examples transferred over BroadcastChannel. Unlike prior decision-tree agents, orientation RNNs, or MLP swarms.

**Architecture**  
- Single self-contained index.html, fully offline after load.  
- Notes: absolute-positioned DOM divs, pointer-draggable.  
- Features: [x/W, y/H, len/100, hash(text)].  
- KNN: majority vote of k=5 nearest examples (Euclidean).  
- Orientation bias added to x/y features before prediction.  
- Teaching: on pointer-up, push example. Cap at 200.  
- Persistence: localStorage `verse-f735` + BroadcastChannel `f735-genome`.  
- Visual: Canvas2D soft circles colored by cluster hue.  
- UI: textarea + Add / Seal / Clear.

**Expected outcome**  
Open the page. Add a few notes. Drag them into visual groups. Tilt the device (or simulate) and watch cluster colors shift. Seal, reload or open a second tab — examples transfer. Works offline, pointer-only fallback if no orientation.

**Failure modes**  
- No DeviceOrientation: bias stays zero, still fully usable.  
- BroadcastChannel blocked: localStorage only.  
- Too many notes: performance remains fine (KNN is O(n) per recluster, n small).

**Building blocks**  
Reusable pure-JS KNN, drag-to-teach example collection, DeviceOrientation feature bias, sealed example-set genome over BroadcastChannel. Ready for future richer features (embeddings, more sensors).

Void is now Verse everywhere.

**Files**  
- index.html (self-contained runnable prototype)  
- SPEC.md (this file)
