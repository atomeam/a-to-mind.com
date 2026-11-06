# F608-webgpu-esn-wavefield-dom-portals-mind

**Concept**  
Local Echo State Network (ESN / reservoir computer) as the primary mind. Sequential causal inputs (pointer velocity, DeviceOrientation tilt) drive a fixed random recurrent reservoir. Online-trained linear readout modulates forcing amplitude, damping, and wave speed of a WebGPU-simulated 2D wave equation on a lattice. High-energy regions of the wavefield spawn or attract temporary DOM portal cards. Dragging a portal injects a wave source or sets a local boundary, closing a bidirectional loop. Seal freezes reservoir + readout + field snapshot via IndexedDB.  

Novel combination: true reservoir recurrence (not Elman, not SOM, not spiking, not hypervector) controlling continuum wave physics (not RD, SPH, LBM, or fluid memory), with DOM portals as both visual embodiments and causal injectors. Not previously built.

**Architecture**  
- Single self-contained `index.html`.  
- ESN: reservoir size 64, spectral radius ~0.9, input scaling, leaky integration. Readout (ridge or simple LMS) online update on prediction error of next-step energy.  
- Wave equation: WebGPU compute shader (or Canvas2D fallback) finite-difference 2D wave: ∂²u/∂t² = c²∇²u - γ∂u/∂t + f(x,y,t) from ESN. Grid ~128×128.  
- 4–6 DOM portals: absolute-positioned cards that lerp toward local wave maxima; drag sets injection point + amplitude.  
- IndexedDB key `verse-f608`.  
- Chrome CSS variables driven by mean wave energy / reservoir activity.  
- Progressive: works without WebGPU (CPU wave), without orientation (pointer only).

**Expected outcome**  
Tilt or move pointer: reservoir state evolves, readout changes wave parameters, visible waves propagate and interfere. Portals appear near crests and can be dragged to seed new sources. Seal/reload restores the mind and a quiet field. Interactive hybrid of recurrent local AI controlling spatial continuum physics with living DOM agents.

**Mechanics**  
1. Init random reservoir weights (fixed), zero state, zero wave field.  
2. rAF: sample input → ESN step → readout → set wave params/forces → integrate wave → update portals from field samples → draw.  
3. Drag portal → inject source into nearest grid cells.  
4. Seal stores weights/state/field hash.

**Failure modes**  
- No WebGPU: CPU finite-difference wave (smaller grid).  
- No DeviceOrientation: pointer-derived tilt.  
- IndexedDB blocked: session memory only.  
- Reservoir blow-up: spectral radius clamp + leak.  
- Performance: adaptive grid size.

**Building blocks unlocked**  
Echo-state / reservoir as transferable recurrent controller; WebGPU wave-equation kernel; density-driven temporary DOM portals for reverse causal injection; sealed recurrent continuum state.

Void is now Verse everywhere.
