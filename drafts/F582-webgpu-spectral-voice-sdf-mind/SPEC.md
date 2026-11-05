# F582 WebGPU Spectral Voice SDF Mind

**Slug**: `webgpu-spectral-voice-sdf-mind`  
**Ledger ID**: F-582 (frontier series)  
**Date**: 2026-11-05

## Concept
Microphone frequency spectrum (AnalyserNode bin magnitudes) supplies continuous harmonic coefficients to a pure-JS evolutionary strategy that tunes the parameters of a WebGPU raymarched SDF surface. The surface is a sum of modulated primitives (spheres, capsules, and low-frequency noise) whose radii, positions, and frequencies are genome-controlled. Spectral centroid and peak bins act as fitness signals: the ES mutates toward higher "vocal resonance" (proxy match between spectrum energy distribution and surface projected curvature). DeviceOrientation tilts the raymarch view. High-resonance loci spawn floating DOM portals styled by harmonic strength. Sealed genome (SDF params + ES population) persists in IndexedDB. Canvas2D fallback projects a 2D slice. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of WebGPU LBM attention portals (F581), Vicsek/WebXR flocks, multi-head attention flow, ambient MLPs + SDFs + Paint Worklets (F578), wave-equation echoes, CA/CSS-Grid, speech-NCA gardens, sealed-genome grids, Q-learning spatial agents, continuous RD/NCA, particle SPH/DEM, and pure lattice systems. Core novel combination is spectral audio (AnalyserNode) as the sole external driver of an evolutionary strategy that sculpts a WebGPU raymarched SDF mind-surface, with resonance fitness sealing living harmonic portals. Not fluid lattices, not particle systems, not NCA, not attention primary, not hand tracking, not orientation MLP primary.

## Architecture
- Single self-contained `index.html` (no external dependencies).
- Web Audio AnalyserNode for live spectrum (getFloatFrequencyData); fallback slider for simulated spectrum.
- Pure-JS evolutionary strategy (population of 16 genomes) updating SDF parameters each frame.
- WebGPU fragment shader raymarches the SDF (progressive: if no WebGPU, Canvas2D draws a 2D spectral slice + portal positions).
- 6 living DOM portals positioned at high-resonance sites; style (scale, hue, opacity) driven by bin energy.
- Seal button serializes top genome + recent spectrum hash to IndexedDB `verse-f582`.
- Controls: start mic, seal, restore, clear, spectrum override.
- Offline-capable after load; progressive enhancement.

## Expected outcome
Speak or hum and watch the SDF surface morph to embody the voice harmonics; portals bloom at resonant peaks; tilt the device to change the view angle. Seal restores the vocal mind. Interactive spatial embodiment of a local evolutionary spectral-SDF thought surface with living harmonic portals.

## Mechanics
1. Init random SDF genomes (radii, offsets, freq multipliers).
2. Each frame: sample spectrum → compute centroid/peaks → ES step (mutate/select on resonance fitness) → update uniforms.
3. Raymarch or 2D project the surface; place portals at top spectral-energy projected sites.
4. Resonance fitness = correlation between spectrum bins and local curvature proxy.
5. On seal: store genome + fitness; restore loads and injects.

## Failure modes
- No mic permission: spectrum slider + random walk.
- No WebGPU: Canvas2D 2D spectral projection still interactive.
- High cost: raymarch steps capped, population small.
- IndexedDB blocked: session only.

## Files
drafts/F582-webgpu-spectral-voice-sdf-mind/SPEC.md  
drafts/F582-webgpu-spectral-voice-sdf-mind/index.html

## V01D landing
Skill under `void-live-deploy/skills/webgpu-spectral-voice-sdf/`; test that spectrum change alters SDF uniforms via ES and sealed genome restores surface after reload.

Void is now Verse everywhere.
