# F852 WebGPU-Ready Cahn-Hilliard Phase Separation Mind

## Concept
A continuum phase-field simulation of the Cahn-Hilliard equation (∂c/∂t = ∇²(c³ − c − ε²∇²c)) runs on a 64×64 lattice. A local parametric mind evolves the interface-width ε and mobility M under DeviceOrientation (or pointer residual) bias and portal-injection reward. Absolute DOM portals act as both phase injectors and measurement windows; dragging repositions them, clicks reward the current genome. Highest-fitness parameters seal to IndexedDB and BroadcastChannel for sealed transfer across tabs.

## Novelty
Leaves the dominant recent cluster of particle physics (Verlet/SPH/Vicsek/N-body/chains F844–F847), continuum CA (NCA/Gray-Scott/L-system/traffic F849–F850), neural/attention/Hopfield/SOM/ESN (F845/F848/F851), and spectral/audio substrates. Core novel combination is the previously unused Cahn-Hilliard phase-separation kernel (diffuse-interface continuum dynamics, not discrete CA, not particle, not reaction-diffusion Gray-Scott, not wave equation) driven by a simple parametric local mind whose causal input is DeviceOrientation, with DOM elements as true interactive injectors/samplers under reward-gated sealed parameter transfer. Not neural weights, not attention fields, not L-systems.

## Architecture
- Single self-contained index.html
- 64×64 float lattice, explicit finite-difference Cahn-Hilliard (Canvas2D visualization; WebGPU compute path noted for next)
- Local mind: ε, M parameters + fitness; orientation bias on flux; click/portal reward
- 4 absolute DOM portals (draggable, clickable)
- Seal: IndexedDB `verse-f852-ch` + BroadcastChannel `f852-genome`
- Fallbacks: no DeviceOrientation → pointer velocity residual; no IDB → memory only

## Expected outcome
Open: binary phases coarsen into domains. Tilt device or move pointer: bias shifts interface motion. Drag portals: inject +1/−1 phase, accelerating local separation. Click: fitness rises, slight mutation. Seal preserves best (ε, M) across reloads/tabs. Interactive spatial phase mind.

## Failure modes
Large dt → instability (clamped); no orientation → pointer proxy; IDB blocked → session only; high N → slower JS (capped 64).

## Building blocks
Reusable Cahn-Hilliard kernel + parametric sealed mind + hybrid DOM injection. Enables future WebGPU compute Cahn-Hilliard, multi-phase, or coupling to local MLP.

Void is now Verse everywhere.

**Files**: drafts/F852-webgpu-cahn-hilliard-phase-mind/SPEC.md, drafts/F852-webgpu-cahn-hilliard-phase-mind/index.html
