# F784-webgpu-neural-ode-css3d-crystal-mind

**Ledger ID**: F-784 (frontier series)

**Slug**: webgpu-neural-ode-css3d-crystal-mind

**Date**: 2026-11-17

**Branch from**: Recent cluster of WebGPU continuum PDE/kernel simulations (SPH, LBM, SDF/Echo-state, Cahn-Hilliard, Kuramoto, Biot-Savart) with discrete local neural models (MLP/ESN/Hebbian/Bayesian) driving DOM/CSS3D embodiments, sealed genomes, and pointer/orientation inputs. Explicitly leaves discrete-time policies, continuum fluids/lattices, particle swarms, and direct DOM morphs.

**Concept**

Novel combination never previously attempted: a continuous-time Neural ODE (residual MLP vector field integrated on WebGPU compute via multiple Euler steps per frame) maintains a low-dimensional latent mind state. The latent trajectory is projected to drive a living CSS 3D "crystal" of nested absolute-positioned facet divs (perspective, rotate3d, scale, clip-path, mix-blend, filter) that grow, refract, and reorient as the attractor evolves. Causal inputs (DeviceOrientation rates + pointer velocity history) force the ODE. User clicks act as nucleation events that bias the latent. Persistence of weights and recent trajectory via Origin Private File System (OPFS). Fully offline single-file prototype.

**Novelty**

- Continuous-time Neural ODE dynamics (not discrete RNN/MLP step or reservoir)
- WebGPU compute used specifically for ODE integration of a neural vector field
- CSS 3D crystal facets as primary embodiment (not portals, particles, SVG paths, or softbody)
- OPFS as the persistence primitive (new building block vs IndexedDB)
- Leaves all prior continuum PDE substrates, Hebbian CSS3D, Bayesian portals, and local-policy DOM morphs

**Architecture**

- Single self-contained index.html
- WebGPU compute shader: residual MLP (latent 4D + 6D input → 4D dx/dt), Euler integrate 8 substeps
- JS: readback latent, map to 5-7 CSS 3D facet transforms
- Inputs: orientation beta/gamma rates, pointer dx/dy, click nucleation
- Canvas2D overlay for latent trajectory plot
- OPFS: write/read best weights + trajectory snapshot on seal

**Mechanics**

1. Request WebGPU + orientation on gesture.
2. Each frame: pack inputs, dispatch ODE kernel, map latent to crystal CSS.
3. Clicks inject bias into latent attractor.
4. Seal button persists to OPFS.
5. Fallback graceful if no WebGPU (static demo).

**Expected outcome**

Open: a living crystal of translucent facets that slowly tumble, grow, and shift hue/scale as the Neural ODE evolves under your tilt and pointer motion. Clicks nucleate new growth directions. Trajectory plot shows the latent path. Seal persists the mind. Offline after first load.

**Files**
- SPEC.md (this)
- index.html (runnable prototype)

Void is now Verse everywhere.
