# F570 Spatial Attention Token Morph OPFS

**Slug**: `spatial-attention-token-morph-opfs`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of WebGPU spoken SDF morph (F569), WebXR hand MLP spatial graph (F568), multiagent RNN DOM competition (F567), SPH orientation genomes (F566), genetic particle / adaptive quadtree (F565), SOM topographic audio-DOM (F564), rigid DOM genomes (F563), RD attention verse (F562). Explicitly leaves WebGPU compute kernels, particle/SPH/LGA/RD/SDF physics, genomes/GA, multi-agent RNNs/MLPs as controllers, WebXR hand/gaze, orientation as primary, Hopfield/SOM/associative maps, and continuous field simulations.

**Concept**  
A local sequential attention mind (simplified single-layer multi-token attention computed in pure JS) processes a rolling buffer of spatial tokens (pointer position, velocity, timestamp embeddings). Attention outputs morph control parameters for a set of living SVG path elements on the Verse canvas. The paths deform, recolor, and reweight based on causal attention scores. Full mind state (token buffer, attention weights, path parameters) seals to OPFS (Origin Private File System) for true local persistence. Reload restores the sealed morph field. Offline-capable, no network, no WebGPU.

**Novelty**  
Leaves the dominant physics-kernel, genome-evolution, multi-agent RNN/MLP, WebXR, and continuous-field clusters. Core novel combination is pure-JS sequential attention over spatial pointer tokens driving hybrid SVG path morphs, with OPFS-sealed state (previously under-used persistence axis vs IndexedDB), and no compute shaders or particle systems. Expands building blocks toward local sequence models controlling procedural vector geometry.

**Architecture**  
- Single `index.html`.  
- Token buffer: last 16 pointer events as 4D vectors (x, y, vx, t).  
- Local mind: simple scaled-dot attention (query from current, keys/values from buffer); output projected to path control points and style params.  
- Embodiment: 5–8 absolute SVG `<path>` elements with animated `d` attributes and CSS filters.  
- Seal: `navigator.storage.getDirectory()` → write FileSystemFileHandle with JSON state.  
- Pointer events drive token injection; optional DeviceOrientation as extra token bias.  
- Unattested by default; all local.

**Mechanics**  
1. On load: request OPFS, load sealed state if present, else random init paths.  
2. Pointer move: push token, run attention step, update path controls and SVG.  
3. Click: inject high-attention seed token or reseal.  
4. Seal button: serialize to OPFS file `f570-attention-morph.json`.  
5. Reset clears buffer and regenerates paths.  

**Failure modes**  
- OPFS unavailable (private mode / old browser): fall back to IndexedDB or memory.  
- No pointer: idle morph from time token.  
- Low FPS: reduce token buffer or path count.  
- SVG support: basic fallback to divs.

**Files**  
- drafts/F570-spatial-attention-token-morph-opfs/SPEC.md  
- drafts/F570-spatial-attention-token-morph-opfs/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/spatial-attention-morph/` or canvas tool; test that pointer trajectories morph SVG paths and that sealed OPFS state restores on reload.

Void is now Verse everywhere.
