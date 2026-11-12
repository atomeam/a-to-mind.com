# F732-webgpu-gray-scott-mlp-param-field-dom-portals-mind

**Ledger ID**: F-732 (frontier series)  
**Slug**: webgpu-gray-scott-mlp-param-field-dom-portals-mind  
**Date**: 2026-11-12  
**Status**: frontier prototype  

**Concept**  
A novel hybrid spatial interface for The Verse canvas: a Gray-Scott reaction-diffusion field (U, V concentrations) simulated on a discrete grid, where the feed (F) and kill (K) rates are not fixed but form a spatially varying parameter field continuously modulated by a population of local pure-JS tiny MLPs.  

Each MLP observes local concentration statistics (mean U/V, gradient, entropy proxy) plus causal pointer proximity and DeviceOrientation tilt, outputting parameter deltas that evolve the local reaction kinetics. High-activity or high-V regions attract and morph a lattice of absolute-positioned DOM Verse portal cards (position, scale, hue, border driven by local field samples).  

Users click or drag to inject seed patterns or force local parameter overrides. Best evolved MLP genomes (weights) seal to IndexedDB with a field hash.  

WebGPU compute path reserved for the diffusion/reaction kernel (pure-JS grid fallback for universal compatibility). Fully offline, single-file, progressive enhancement.  

**Novelty**  
Leaves the recent cluster of WebGPU continuum/discrete field kernels (spectral, pathtracer, discrete CA audio, quantum), spiking neural portals (F731), gaze-Bayesian, gamepad MLP swarms, WebXR hand decision trees, and prior NCA/Lenia/CA/SPH/SDF/attention.  

Core novel combination is the Gray-Scott reaction-diffusion substrate (never previously used) whose kinetic parameters are a living field steered by competing local MLPs that both ride and rewrite the continuum, with physical DOM portals as embodied attractors and sealed genome persistence. Not fixed-rule CA, not particle forces, not rate-based spiking, not Bayesian posteriors.  

**Architecture**  
- Single self-contained index.html.  
- Grid ~96×96: dual buffers for U, V. Laplacian via 5-point stencil. Standard Gray-Scott update:  
  dU = Du∇2U − UV² + F(1−U)  
  dV = Dv∇2V + UV² − (F+K)V  
  with spatially varying F, K.  
- 12 local MLPs (2-hidden, ~30 weights): input [localU, localV, grad, pointerDist, tilt]; output [ΔF, ΔK]. Applied to nearby cells.  
- 8 floating DOM portals: seek high-V centroids via simple attraction; style driven by bilinear sample of V and F.  
- Pointer: inject V seed or local F/K override. Orientation: global bias to parameters.  
- Persistence: IndexedDB `verse-f732-rd`.  
- Visual: Canvas2D colormap of V (or U−V), optional WebGPU texture upload if adapter present.  

**Expected outcome**  
Reaction-diffusion patterns (spots, stripes, waves) emerge and morph as MLPs evolve local F/K. Portals drift toward active regions and change appearance. Pointer seeds new patterns that propagate. Sealed genomes restore on reload. Works offline with or without WebGPU/orientation.  

**Failure modes**  
- No WebGPU: automatic JS path (still interactive).  
- IndexedDB blocked: session-only.  
- High grid cost: adaptive step or smaller grid.  
- Pattern collapse: periodic random seed injection.  

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a living reaction-diffusion mind whose kinetic parameters are themselves a policy field, and whose portals are physical DOM objects that both ride and rewrite the continuum.  

**Files**: drafts/F732-webgpu-gray-scott-mlp-param-field-dom-portals-mind/SPEC.md, drafts/F732-webgpu-gray-scott-mlp-param-field-dom-portals-mind/index.html  
