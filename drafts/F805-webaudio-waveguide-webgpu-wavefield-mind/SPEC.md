# F805-webaudio-waveguide-webgpu-wavefield-mind

## Ledger ID
F-805 (frontier series)

## Slug
webaudio-waveguide-webgpu-wavefield-mind

## Date
2026-11-18

## Concept
A novel hybrid spatial / local-AI / audio capability for The Verse canvas, never previously attempted: a Web Audio physical-model waveguide (Karplus-Strong string) whose pluck position, damping, and filter coefficients are continuously modulated by a tiny local MLP that reads average energy and centroid from a live WebGPU-simulated 2D wave equation field. User pointer clicks inject Gaussian disturbances into the wave lattice; the waves propagate and the MLP observes spatial statistics to "tune" the string. Absolute DOM listener portals sample local wave amplitude (via color or data) and style themselves (scale, hue, blur), and can be dragged to seed new wave sources. A seal button freezes the current MLP weights + wave snapshot to IndexedDB. Fully offline after load; pointer always works; graceful fallback if no WebGPU.

## Novelty
Leaves the recent cluster of SDF raymarched volumes (F799), spatial task boards (F804), LBM/SPH fluids, spiking LIF, reaction-diffusion, orientation MLPs, CSS3D swarms, and prior audio drones. Core novel combination is event-driven injection into a discrete wave equation on WebGPU compute, whose emergent field statistics drive a local MLP that parameters a physical modeling synthesizer (not a simple oscillator), with living DOM portals as both visualizers and interactive wave sources. Not a pure particle system, not rate-coded RNN, not pure CSS, not sealed genome competition only.

## Architecture
- Wavefield: WebGPU compute shader (or Canvas2D fallback) running a simple 2D discrete wave equation on a 128x128 lattice. Pointer click adds a positive/negative Gaussian source.
- MLP: 4-8-2 tiny network (energy, centroid_x, centroid_y, max_amp → pluck_pos, damping). Updated online with a simple Hebbian or residual rule on interaction.
- Audio: Web Audio AudioWorklet or ScriptProcessor-style Karplus-Strong delay line; parameters set each frame from MLP.
- Portals: 4 absolute DOM divs that color by approximate local amp and can be dragged to inject secondary sources.
- Persistence: IndexedDB "f805-genome" for MLP weights + optional snapshot.

## Expected outcome
Open: quiet wavefield, soft string tone. Click to splash waves; tone changes pitch/timbre as waves evolve. Drag portals to seed more. Seal saves state. Works offline.

## Failure modes
- No WebGPU: fall back to Canvas2D wave sim (slower but functional).
- No AudioContext: visual only.
- High CPU: reduce lattice size or step rate.

## Files
drafts/F805-webaudio-waveguide-webgpu-wavefield-mind/SPEC.md
drafts/F805-webaudio-waveguide-webgpu-wavefield-mind/index.html

Void is now Verse everywhere.
