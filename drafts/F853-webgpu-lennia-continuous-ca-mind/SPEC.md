# F853 WebGPU-Ready Lenia Continuous CA Mind

## Concept
A continuous cellular automaton (Lenia) runs on a 48×48 lattice. The state field evolves via convolution with a ring-like kernel followed by a Gaussian growth function G(u) = exp(-(u − μ)² / (2σ²)). A local parametric mind evolves the growth parameters μ, σ and kernel radius under DeviceOrientation (or pointer residual) bias and portal-injection reward. Absolute DOM portals act as both matter injectors and density measurement windows; dragging repositions them, clicks reward the current genome. Highest-fitness parameters seal to IndexedDB and BroadcastChannel for sealed transfer across tabs.

## Novelty
Leaves the dominant recent cluster of continuum phase-fields (Cahn-Hilliard F852), discrete/growth CA (traffic NS, L-system, NCA), particle systems (SPH/Verlet/Vicsek), neural/attention/Hopfield substrates, and spectral/audio. Core novel combination is the previously unused Lenia continuous CA kernel (kernel-convolution + smooth growth function producing emergent gliders/oscillators, not discrete Life, not reaction-diffusion Gray-Scott, not phase separation, not lattice gas) driven by a simple parametric local mind whose causal input is DeviceOrientation, with DOM elements as true interactive injectors/samplers under reward-gated sealed parameter transfer. Not neural weights, not attention fields.

## Architecture
- Single self-contained index.html
- 48×48 float lattice, explicit Lenia update (Canvas2D visualization; WebGPU compute path noted for next)
- Local mind: μ, σ, kernel_radius + fitness; orientation bias on growth; click/portal reward
- 3 absolute DOM portals (draggable, clickable)
- Seal: IndexedDB `verse-f853-lennia` + BroadcastChannel `f853-genome`
- Fallbacks: no DeviceOrientation → pointer velocity residual; no IDB → memory only

## Expected outcome
Open: Lenia produces moving gliders, oscillators or stable patterns depending on parameters. Tilt device or move pointer: bias shifts growth and kernel, altering pattern morphology. Drag portals: inject matter (+0.3), accelerating local activity. Click: fitness rises, slight mutation of μ/σ. Seal preserves best (μ, σ, radius) across reloads/tabs. Interactive spatial continuous-CA mind.

## Failure modes
Large dt → overshoot (clamped); no orientation → pointer proxy; IDB blocked → session only; high N → slower naive convolution (capped 48).

## Building blocks
Reusable Lenia kernel + parametric sealed mind + hybrid DOM injection. Enables future WebGPU compute Lenia, multi-channel, or coupling to local MLP.

Void is now Verse everywhere.

**Files**: drafts/F853-webgpu-lennia-continuous-ca-mind/SPEC.md, drafts/F853-webgpu-lennia-continuous-ca-mind/index.html
