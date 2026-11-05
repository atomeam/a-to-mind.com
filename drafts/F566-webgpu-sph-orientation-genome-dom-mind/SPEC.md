# F566 WebGPU-Ready SPH Fluid Orientation Genome DOM Mind

**Slug**: `webgpu-sph-orientation-genome-dom-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of genetic particle GA genomes (F565), SOM topographic audio-DOM (F564), rigid DOM competitive genomes (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560), Hopfield/FFT memories, SDF portals. Explicitly leaves unsupervised topographic maps, genetic algorithms, rigid-body DOM physics, reaction-diffusion, spiking LIF, reservoirs, associative memories (Hopfield/ESRN), attention controllers, SDF/raymarch, softbody springs, pure NCA, Ising/Physarum/Lenia, orientation RNNs/MLPs as primary, and continuous field kernels other than particle hydrodynamics.

**Concept**  
A population of fluid particles simulated with a simplified Smoothed Particle Hydrodynamics (SPH) kernel (density estimation, pressure forces, viscosity) on Canvas2D (WebGPU compute path reserved for parallel neighbor search). DeviceOrientation provides a causal external gravity/acceleration field. Each particle carries a sealed micro-genome of fluid parameters (rest density, viscosity, pressure stiffness). When particles form high-density clusters near the pointer or under stable orientation, elite clusters spawn floating DOM “verse droplets” that inherit the average genome and morph in scale/hue. Dragging a droplet can inject its parameters back into nearby particles or seal a transfer. High-fitness (stable high density + low kinetic residual) genomes can be sealed to IndexedDB and BroadcastChannel for multi-tab sharing. The Verse canvas becomes a living fluid whose physical laws evolve through spatial clustering and user interaction.

**Novelty**  
Leaves the dominant recent clusters of neural/associative/evolutionary models (SOM, GA, LIF, ESRN, Hopfield) and rigid/softbody/field kernels. Core novel combination is a previously unused SPH particle hydrodynamics kernel as the embodied substrate, DeviceOrientation as direct causal force input to the fluid (not to a neural model), hybrid embodiment where density clusters become living DOM droplets under parameter genomes, and sealed genome transfer triggered by spatial density thresholds in a new architecture. Not neural weights, not GA breeding, not rigid collisions, not chemical RD.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Particles: 80–120 on Canvas2D; each has pos, vel, density, pressure, genome[3]: [restDensity, viscosity, stiffness].  
- SPH: simple neighbor loops (radius h=40), density sum, pressure = stiffness*(density-rest), forces = pressure gradient + viscosity.  
- DeviceOrientation (gesture-gated) sets external accel.  
- DOM droplets: absolute cards for top density clusters; CSS vars from genome; draggable.  
- IndexedDB store `f566-sph-mind` for elite genomes + positions.  
- Seal button; “Add Fluid”, “Reset”, “Tilt Proxy”.  
- BroadcastChannel `verse-sph-genome` for optional transfer.  
- WebGPU: compute shader stub (falls back to JS always).

**Expected outcome**  
Runnable prototype: particles flow and cluster under gravity/pointer. High-density regions materialize as floating DOM droplets reflecting genome params. User tilt changes flow; dragging droplets injects parameters. Seal restores evolved fluid state across reloads. Works offline; Canvas2D primary.

**Mechanics**  
1. Initialize random particles/genomes or load from IndexedDB.  
2. Each frame: compute densities/pressures/forces via neighbor search; integrate with orientation accel; paint Canvas.  
3. Periodically cluster high-density particles and update/spawn DOM droplets.  
4. Pointer: inject force or particles.  
5. Orientation: set gravity vector.  
6. Drag DOM: on drop, average genome into nearby particles.  
7. Seal: serialize elites + state to IndexedDB.

**Failure modes**  
- Orientation denied: pointer-driven force proxy.  
- IndexedDB blocked: in-memory.  
- High particle count: subsample neighbors.  
- WebGPU unavailable: JS path primary.  
- No gesture: sensors idle.

**Files**  
- drafts/F566-webgpu-sph-orientation-genome-dom-mind/SPEC.md  
- drafts/F566-webgpu-sph-orientation-genome-dom-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/sph-fluid-genome/` or canvas tool; test that DeviceOrientation changes particle accelerations and that sealed genomes restore droplet morphs after reload.
