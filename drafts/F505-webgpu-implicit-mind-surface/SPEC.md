# F505-webgpu-implicit-mind-surface

**Ledger ID**: F-505  
**Slug**: webgpu-implicit-mind-surface  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Poisson potential DOM (F504), Lennard-Jones DOM swarms (F503), Kuramoto phase-DOM (F502), ambient-light metabolic (F501), amplitude-collapse portals (F500). Explicitly leaves 2D particle force fields, phase oscillators, resource/metabolic fields, Ising, LBM, SPH, softbody springs, orientation RNNs, attention lattices, NCA, reservoirs, WFC, and all prior DOM-advection substrates. Introduces 3D implicit surface as the primary mind embodiment.

## Concept
A full-viewport WebGPU raymarched signed-distance field (SDF) of a living metaball / implicit mind surface. A tiny per-session MLP (CPU, 4→8→6) continuously modulates the positions, radii, and blend weights of 4 spheres from pointer proximity, DeviceOrientation tilt, and elapsed time. The surface is the interface: pointer rays report approximate hit depth and local field value; "injection" temporarily biases a sphere. User seals the current MLP genome (weights hash + copy) and can transfer it, instantly warping the surface morphology. Full state (MLP weights + last parameters) seals to IndexedDB for offline restore. Hybrid: the raymarched surface is primary; optional floating DOM probe labels project from surface sample points. Fully self-contained, offline after first load.

## Novelty
Core novel combination is the WebGPU raymarched 3D implicit SDF substrate (never previously used as the living mind body in any Frontier Engine draft) whose geometry is directly controlled by a local MLP under pointer + orientation inputs, with sealed genome transfer that morphs the surface itself. Not 2D particle/force/phase/resource fields, not DOM cards as primary agents, not NCA, not softbody, not reservoirs, not attention lattices. The mind is the continuous surface; interaction is spatial probing of the implicit field.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- WebGPU fragment shader raymarches a 4-sphere metaball SDF (smooth min)
- Tiny MLP (4 inputs → 8 hidden → 6 outputs) modulating sphere centers and radii
- Pointer position + DeviceOrientation beta/gamma + time as MLP inputs
- Uniform buffer updated each frame from MLP forward pass
- IndexedDB seal of MLP weights + last parameters
- Controls: nucleate (randomize weights), seal, transfer (apply sealed to live), restore, clear
- Optional: project 2–3 surface sample points to screen for floating labels

## Expected outcome
Interactive living 3D mind surface. Move pointer or tilt device and watch the metaballs flow and merge; seal a distinctive morphology and transfer it to observe the surface snap to the sealed genome; restore previous minds offline. Runnable in any modern browser with WebGPU (Chrome/Edge/Firefox Nightly with flag); graceful fallback message otherwise. No external dependencies.

## Mechanics
- SDF: smoothMin of 4 spheres; raymarch 64 steps max; simple Lambert shading from normal
- MLP: ReLU hidden, outputs clamped; sphere centers in [-1.5,1.5], radii [0.3,1.2]
- Advection of parameters: MLP output is absolute target; lerp toward it each frame
- Injection: on click, temporarily boost nearest sphere radius by 0.4 for 2s
- Seal: SHA-256 of serialized Float32 weights
- Projection: sample points on largest spheres, perspective project, position absolute DOM labels

## Failure modes
- No WebGPU → show fallback text; still run MLP in canvas 2D if desired (not required)
- High raymarch steps → GPU bound; cap 64
- No DeviceOrientation permission or desktop → bias zero
- IndexedDB unavailable → localStorage or in-memory
- Too many projected labels → DOM thrash; cap at 3
- Shader compilation failure on older GPUs → reduce complexity

## Files
drafts/F505-webgpu-implicit-mind-surface/SPEC.md
drafts/F505-webgpu-implicit-mind-surface/index.html

## V01D landing
Spatial stage skill under void-live-deploy/skills/webgpu-implicit-mind-surface.js; test asserts MLP forward → uniform update, seal → weight hash, transfer → surface parameter change, orientation → bias vector, raymarch hit depth report.
