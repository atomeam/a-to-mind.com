# F877-webgpu-spatial-hebbian-neural-field-mind

**Ledger ID**: F-877  
**Slug**: webgpu-spatial-hebbian-neural-field-mind  
**Date**: 2026-11-21  
**Branch from**: Recent cluster of WebGPU ES spatial layout (F875), WebXR hand policy linkage (F876), gaze SDF policy (F870), attention sequence morph (F860), and earlier continuum/policy/particle minds.

**Concept**  
A 2D spatial neural field simulated on WebGPU: each cell holds an activation value and local synaptic weights to its 4-neighbors. Compute shaders perform a Hebbian learning step (Δw ∝ pre × post) interleaved with activation diffusion/propagation. Emergent attractors, waves, and stable clusters form from noise or user stimulation.

A lattice of absolute-positioned DOM Verse portal cards samples the activation field (via CPU readback of a small texture) and is physically attracted toward high-activity regions; card hue, scale, and opacity reflect local mean activation and entropy. Pointer clicks and drags inject activation boosts and can anchor portals. Manual Seal writes a hash of the weight texture + portal states to IndexedDB; BroadcastChannel shares the sealed genome across tabs (higher fitness adopts).

Fully offline after load, progressive, browser-native. Canvas2D JS fallback for smaller grids when WebGPU is unavailable.

**Novelty**  
First GPU-resident spatial neural field with online local Hebbian plasticity as the primary mind on The Verse canvas. Differs from prior embedding-diffusion cascades, CA rule-policy swarms, SPH/SDF policy sculptors, sequence attention morphs, and particle genomes by making the learning dynamics themselves the spatial simulation, with DOM portals as sensors that both ride and can re-inject into the field. Not a superficial variation.

**Architecture**  
- Single self-contained index.html  
- WebGPU: compute pipeline (Hebbian update + diffusion), storage textures or buffers for activations/weights, render or blit to canvas  
- Readback of low-res activation map for portal sampling  
- 8–12 DOM portals: absolute cards, CSS transforms driven by field samples  
- Input: pointer injects Gaussian activation; drag portals repositions anchors that bias the field  
- Seal: IndexedDB key `verse-f877-neural` + BroadcastChannel `f877-neural`  
- Fallbacks: no WebGPU → 64×64 Canvas2D Hebbian loop; no IDB → sessionStorage; no orientation → pointer only

**Expected outcome**  
Open the page: a soft, living neural field evolves with swirling activity. Move the pointer to stimulate regions; portals drift and change color toward activity peaks. Drag a portal to pin an anchor. Seal preserves the learned weights; reload or second tab restores or adopts. Works offline. Interactive spatial local neural mind for Verse.

**Failure modes**  
- WebGPU unsupported or adapter failed → automatic Canvas2D fallback (slower, smaller).  
- Readback cost on low-end → throttle sampling.  
- IndexedDB blocked → in-memory only.  
- Extreme weights → soft clamp and occasional diversity noise injection.

**Building blocks**  
Reusable WebGPU Hebbian spatial neural field + DOM portal sampling/actuation. Enables future multi-layer fields, true GPU backprop hybrids, or WebXR hand as volumetric stimulation on Verse.

Void is now Verse everywhere.

**Files**: drafts/F877-webgpu-spatial-hebbian-neural-field-mind/SPEC.md, drafts/F877-webgpu-spatial-hebbian-neural-field-mind/index.html
