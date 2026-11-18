# F799 WebGPU Raymarched Spiking Volume Mind

**Plain name:** Raymarched Spiking Volume

**Job:** Move pointer or tilt device. A local LIF spiking network drives parameters of a living WebGPU raymarched SDF volume. Floating DOM portals sample density, get styled by the field, and inject spikes or reward when interacted with. Seal the adapted weights.

## Concept
Novel hybrid spatial / local-AI capability for The Verse canvas, never previously attempted: a pure-JS Leaky Integrate-and-Fire (LIF) spiking network whose membrane potentials and recurrent weights modulate the uniforms of a true WebGPU fragment-shader raymarched volumetric SDF (blended spheres + noise). Absolute-positioned DOM portals act as bidirectional probes: they sample local density for visual style (scale, hue, blur) and, on click/drag, inject spikes or reward into the network. Average volume energy drives a simple Web Audio drone. Seal serializes the spiking genome to IndexedDB + BroadcastChannel for cross-tab persistence and competition. Offline after load; pointer always works.

## Novelty
Leaves the recent cluster of pure CSS3D spiking sparks (F798), reaction-diffusion attention audio portals (F797), decision-tree kinematic chains, living DOM rate-based RNN, attention-field portals, CSS3D battery RNN, and prior WebGPU CA/particle/LGA/DLA/attractor/Potts/RD substrates. Branches from prior SDF approximations, residual predictors, orientation MLPs, softbody meshes, NCA, and spectral residuals. Core novel combination is event-driven LIF spiking dynamics controlling a true WebGPU raymarched volumetric SDF scene, with living DOM portals as density sensors and spike injectors (bidirectional physical embodiment), not rate-coded networks, not canvas particles, not pure CSS transforms, not RD/CA kernels.

## Architecture
- Spiking: N=32 LIF neurons, recurrent weights, membrane + adaptation; causal input from pointer velocity bins + DeviceOrientation (or mouse fallback).
- Volume: WebGPU canvas, fragment raymarch of 4–6 soft-blended spheres whose centers, radii, and blend weights are driven by normalized membrane potentials; simple noise modulation.
- Portals: 5 absolute DOM divs that project into the volume (sample density via approximate screen-space or uniform), style themselves, and on interaction inject into specific neurons or provide STDP-like reward.
- Audio: Web Audio oscillator + filter modulated by mean membrane / density.
- Seal: IndexedDB store of weights + base SDF params; BroadcastChannel for mean-weight competition across tabs.
- Progressive: if WebGPU unavailable, fall back to Canvas2D metaball approximation.

## Expected outcome
Open: dark canvas with volumetric blobs. Move mouse or tilt → spikes cause the volume to morph, pulse, and change color. Portals float and react to local density. Click a portal to reward and strengthen connections. Seal persists the mind; open second tab to see competition. Chrome (background, borders) reacts to global activity. Fully self-contained, no external libs or network after load.

## Failure modes
- No WebGPU: automatic Canvas2D fallback.
- No DeviceOrientation: pointer velocity still drives.
- IndexedDB blocked/private mode: session-only seal + broadcast.
- Low-end GPU: reduce raymarch steps or N.

## Building blocks
True WebGPU raymarch SDF kernel controlled by spiking dynamics, bidirectional DOM portal sensors/actuators, sealed spiking genome competition, volume-driven audio. Expands volumetric embodiment and event-driven local models for Verse. Next experiments can reuse the raymarch kernel with other minds or multi-volume scenes.

Void is now Verse everywhere.

## Files
- drafts/F799-webgpu-raymarched-spiking-volume-mind/SPEC.md
- drafts/F799-webgpu-raymarched-spiking-volume-mind/index.html
