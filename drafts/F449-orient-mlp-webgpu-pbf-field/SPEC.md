# F449 — Orient-MLP WebGPU PBF Field

## Concept
DeviceOrientation (or pointer proxy) is the causal input to a local tiny MLP that continuously modulates the viscosity and damping of a WebGPU compute-based Position-Based Fluid (PBF-like) particle field. The MLP is a 4-input → hidden → viscosity output network trained online from recent orientation history. Particle positions, velocities, and MLP weights persist in IndexedDB so the field remembers across reloads. No genomes, no NCA rules, no LBM lattice, no XR hands, no attention.

## Branch
Leaves the dominant recent cluster (F441–F448): WebGPU interference-reservoir morph, Kuramoto phase-lock, NCA spatial-memory / XR-residual, LBM evolved swimmers, and WebXR hand-Verlet genome portals. New combination: orientation-driven local MLP → WebGPU PBF kernel (previously unused density/pressure force approximation) + IndexedDB memory traces of the spatial field and controller.

## Files
- index.html — single self-contained interactive prototype (WebGPU preferred, Canvas2D fallback)

## Mechanics
- Particles experience density estimation, pressure repulsion, orientation-derived body force, and MLP-controlled viscosity.
- MLP inputs: normalized beta/gamma, running average, difference; online weight nudge toward stable viscosity.
- Persistence: full snapshot (positions, velocities, weights) in IndexedDB.
- Interactive: device tilt or drag stirs the field; seed/reset buttons.
- Offline-capable.

## Failure modes
- No WebGPU → pure Canvas2D particle approximation.
- IndexedDB unavailable → session-only.
- No DeviceOrientation → pointer drag proxy.
- High N on weak GPU → reduce particle count.

## Building blocks for next
WebGPU compute PBF/density kernels as spatial embodiment, orientation→MLP parameter modulation with online local learning, IndexedDB of hybrid AI+physics state.
