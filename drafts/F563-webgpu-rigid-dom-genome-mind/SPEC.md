# F563 WebGPU-Ready Rigid DOM Competitive Genome Mind

**Slug**: `webgpu-rigid-dom-genome-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of DeviceOrientation LIF spike audio (F561), ESRN spatial UI morph (F560), FFT/WebXR Hopfield, RD attention verse (F562), SDF portals, electrostatic SVG, magnetic DOM. Explicitly leaves spiking networks, reservoirs, associative memories (Hopfield/ESRN), attention controllers, reaction-diffusion, SDF/raymarch, particle swarms, spectral residuals, pure NCA, softbody springs, orientation RNNs, and continuous field kernels.

**Concept**  
A population of rigid rectangular DOM elements act as the physical bodies themselves (hybrid embodiment). A local physics integrator (JS, WebGPU compute path reserved) applies DeviceOrientation-tilted gravity, friction, and restitution. Each body carries a sealed genome of physical parameters (mass, restitution, friction). On high-relative-velocity collisions, genomes compete: the higher-fitness (lower residual kinetic energy after impact) body can transfer a sealed copy of its parameter set to the other via BroadcastChannel + IndexedDB. Pointer drag injects impulse. The canvas shows the Verse of colliding minds whose physical laws evolve through contact.

**Novelty**  
Leaves the dominant recent clusters of sensor-driven neural/associative models steering continuous fields, morphs, or particles. Core novel combination is rigid DOM elements as true physical agents under multi-agent competition with sealed genome (parameter) transfer triggered by collision energetics, DeviceOrientation as causal gravity input to never-before-seen local (non-neural) physics model, persistent shared field via IndexedDB/BroadcastChannel in a new hybrid-embodiment architecture. Not softbody meshes, not granular DEM particles, not neural policies, not field kernels.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Rigid bodies: absolute-positioned DOM divs with CSS transform; AABB collision detection + impulse response in main-thread JS loop (WebGPU compute for integration reserved as future kernel).  
- Genome: {mass, restitution, friction, hue}; fitness = inverse residual KE post-collision.  
- DeviceOrientation (or pointer tilt proxy) sets gravity vector.  
- BroadcastChannel `f563-genome`: on seal-transfer, post genome; receiver adopts if fitness higher.  
- IndexedDB store `f563-rigid-dom-genome` for genomes + last positions.  
- Seal button; “Reset Bodies”, “Add Body”, “Randomize Gravity”.  
- Fallback: full JS always works; no WebGPU required for core.

**Expected outcome**  
Runnable prototype in which colored DOM rectangles fall, collide, bounce, and occasionally exchange sealed physical-parameter genomes. Tilting the device (or moving pointer) changes gravity. Dragging bodies injects energy. Seal restores the competitive population across reloads. Works offline.

**Mechanics**  
1. Spawn 6–8 rigid DOM bodies with random genomes; load from IndexedDB if present.  
2. On deviceorientation: update gravity.  
3. Each frame: integrate velocity/position with gravity + damping; detect AABB overlaps; resolve with impulse; if relative speed > threshold, compare fitness and transfer sealed genome.  
4. Pointer down/move: drag body, impart velocity on release.  
5. Seal: serialize genomes + positions to IndexedDB.  
6. Visual feedback: body hue from genome, overlay of last transfer event, live fitness.

**Failure modes**  
- DeviceOrientation unavailable: pointer-driven gravity proxy.  
- IndexedDB quota or blocked: in-memory only.  
- High body count: throttle collision checks.  
- Overlap tunneling: substep integration.  
- BroadcastChannel unsupported: local only.

**Files**  
- drafts/F563-webgpu-rigid-dom-genome-mind/SPEC.md  
- drafts/F563-webgpu-rigid-dom-genome-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/rigid-dom-genome/` or canvas tool; test that high-velocity collisions measurably transfer genome parameters and that DeviceOrientation changes the gravity vector affecting all body accelerations.
