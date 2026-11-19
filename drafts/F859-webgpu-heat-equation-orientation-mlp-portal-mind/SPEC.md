# F859 WebGPU Heat Equation Orientation MLP Portal Mind

**Plain name:** Heat-source portal mind  
**Job:** Tilt or point to guide living heat sources that shape a diffusion field; seal the best genomes so other tabs can adopt them.  

**Ledger ID**: F-859  
**Date**: 2026-11-19  
**Branch from**: Recent dominant cluster of continuum phase fields (Cahn-Hilliard F852), continuous CA (Lenia F853), L-systems (F850), classical boids under MLP control (F855), CSS3D DeviceMotion MLP cards (F854), self-attention portal fields (F851), WebXR hand Verlet portal chains (F856), orientation-spiking softbody portals (F857), and WebRTC MLP competitive DOM auctions (F858).  

## Concept
A 2D linear heat equation (∂T/∂t = α∇²T + sources − sinks) is evolved on a WebGPU compute shader (Canvas2D fallback). Absolute-positioned living DOM portals act as active heat injectors/samplers. Each portal is controlled by its own tiny pure-JS MLP (inputs: DeviceOrientation residual + pointer proximity; outputs: heat strength and local drift). Agents compete on fitness (user click reward + local temperature coherence). High-fitness genomes seal to IndexedDB and transfer via BroadcastChannel; receivers adopt only superior weights. Pointer injects temporary sources; tilt biases all exploration.

## Novelty
Leaves the dominant recent cluster of phase-separation, continuous CA, L-systems, boids, CSS3D, self-attention portals, WebXR Verlet chains, spiking softbodies, and WebRTC auctions. Core novel combination is the previously unused linear heat-equation kernel (not reaction-diffusion Gray-Scott, not Cahn-Hilliard phase, not wave, not particle SPH/DEM/Lenia) driven by competing local MLPs whose causal input is DeviceOrientation, with DOM elements as true interactive heat-source embodiments under reward-gated sealed genome transfer. Not a superficial variation of prior continuum fields.

## Architecture
- Single self-contained index.html (offline after load, progressive)
- WebGPU compute for diffusion + source injection (64×64 grid); Canvas2D fallback
- 4 DOM portals: absolute translucent cards, draggable, color/scale by heat strength and fitness
- Per-portal MLP: 4-8-2 (orientX, orientY, dxPtr, dyPtr → heat, drift)
- Fitness: click reward + mean local temperature
- Seal: IndexedDB `verse-f859-heat-mlp` + BroadcastChannel `f859-genome` (adopt higher fitness)
- Fallbacks: no WebGPU → Canvas2D; no orientation → pointer residual; no IDB → memory

## Expected outcome
Open: diffusion field evolves from portal sources. Tilt device or move pointer: portals adjust heat and drift. Click a portal: fitness rises, genome may seal and transfer to other tabs. Superior heat-control minds spread. Interactive spatial mind whose local models physically shape a living diffusion field via DOM injectors.

## Failure modes
No WebGPU → Canvas2D (still interactive). No orientation permission → pointer proxy. IDB blocked → session only. High grid size → throttle.

## Building blocks
Reusable WebGPU heat-equation kernel, orientation-MLP heat control, DOM-as-source embodiment, sealed genome transfer. Enables future multi-physics hybrids or sensor-modulated continuum on Verse.

Void is now Verse everywhere.

**Files**: drafts/F859-webgpu-heat-equation-orientation-mlp-portal-mind/SPEC.md, drafts/F859-webgpu-heat-equation-orientation-mlp-portal-mind/index.html
