# F568-webxr-hand-mlp-spatial-graph-mind

**Slug**: `webxr-hand-mlp-spatial-graph-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of WebGPU lattice-gas DOM flow (F567), multiagent RNN DOM competition (F567), SPH orientation genomes (F566), genetic particle GA genomes (F565), SOM topographic audio-DOM (F564), rigid DOM competitive genomes (F563), RD attention verse (F562). Explicitly leaves particle advection, SPH, LGA, genomes, SOM, RD lattices, and continuous physics kernels.  

**Novel combination**: True WebXR hand joint tracking (with pointer/DeviceOrientation fallback) as causal input features to a local online Hebbian/MLP that maintains a spatial graph of floating DOM portal cards. Graph nodes are absolute-positioned DOM elements whose 3D transforms are driven by MLP-predicted edge strengths and node embeddings. Sealed graph snapshots persist in IndexedDB. Dragging or hand-pinch injects nodes or strengthens causal edges. No WebGPU compute kernels, no particles, no reaction-diffusion, no genomes.

**Expected outcome**  
Runnable single-file prototype. Entering WebXR (or using pointer) moves and connects portal cards in 3D space. The MLP updates online based on hand/pointer trajectories predicting next node positions; successful predictions brighten edges. Seal button persists the graph and weights. Reload restores the sealed graph. Interactive offline.

**Mechanics**  
1. On load: request WebXR session if available (immersive-ar or vr fallback), else use pointer + optional DeviceOrientation. Load sealed graph/weights from IndexedDB `f568-spatial-graph`.  
2. Portal atoms: 4–8 absolute `<div class="portal">` cards with CSS 3D transforms.  
3. Local mind: tiny 2-layer MLP (input: relative hand/pointer velocity, distances to nodes; output: edge strength deltas and node velocity biases). Online update via simple Hebbian or residual reward on position prediction.  
4. Each frame: sample hand joints or pointer, step MLP, update node positions and edge opacities, render.  
5. Pinch/drag: inject new node or boost nearest edge.  
6. Seal: serialize nodes, edges, weights to IndexedDB.  

**Failure modes**  
- No WebXR: seamless pointer + orientation fallback.  
- IndexedDB blocked: session memory only.  
- Too many nodes: cap at 12, prune weakest.  
- Low FPS: reduce MLP update rate.  

**Files**  
- drafts/F568-webxr-hand-mlp-spatial-graph-mind/SPEC.md  
- drafts/F568-webxr-hand-mlp-spatial-graph-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/webxr-spatial-graph/` or spatial canvas tool; test that hand/pointer motion displaces portals, edge strength updates, and sealed graph restores on reload.
