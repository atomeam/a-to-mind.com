# F680 WebGPU Spatial Audio Particle Mind

## Concept
A novel hybrid spatial interface for The Verse canvas: a swarm of particles simulated (WebGPU compute path preferred, Canvas2D fallback) where a subset act as mobile sound sources. Each source is a Web Audio OscillatorNode + PannerNode (HRTF spatialization) whose frequency, gain, and 3D position are continuously modulated by a pure-JS tiny MLP. The MLP takes as causal input the residual of the user's recent pointer trajectory (actual vs predicted) plus DeviceOrientation tilt. Pointer drag injects "attraction" or new sources; high local particle density or audio energy spawns or attracts floating DOM portals that can be clicked to reward the MLP or drag to re-seed. Emergent spatial soundscapes and particle flows appear. The current particle snapshot + MLP weights + audio param snapshot is sealed (simple hash) and persisted via IndexedDB. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of continuum reaction-diffusion / fluid / n-body / percolation / spiking / quantum-walk / LBM kernels (F651 spiking, F676 LBM, F677 Gray-Scott, F510 quantum walk, F678 DOM constraints) and practical offline utilities. Core novel combination is WebGPU/Canvas particle dynamics + browser-native Web Audio spatialization (PannerNode HRTF, never previously used as primary embodiment) driven by a local residual-MLP controller, with density/energy-gated living DOM portals and sealed particle+audio+genome export. Not spectral analysis of mic input, not oscillator sonification of fields alone, not pure particle life, not NCA, not softbody springs.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS + Web Audio + optional WebGPU:
- Particles: 200–400, positions/velocities updated in rAF (WebGPU compute sketched; CPU path always works).
- Audio: AudioContext, 8–12 OscillatorNodes + Gain + PannerNodes. Positions mapped from particle coords to listener-relative 3D. MLP outputs modulate base freq, detune, gain.
- MLP: 6-12-4 (inputs: residualX, residualY, residualMag, tiltBeta, tiltGamma, localDensity → freqMul, gainMul, forceX, forceY). Simple Hebbian/reward update on click.
- DOM portals: 4–6 absolute cards that sample nearest particle cluster; click rewards; drag repositions.
- Seal: download JSON (weights, particle stats, audio params) + optional PNG of particle density. IndexedDB key `verse-f680`.
- Controls: Seal, Reset, Enable Audio (user gesture), Request Orientation.
- Fallback: always pointer-driven; no WebGPU required; audio optional but core.

## Expected outcome
Open page, click Enable Audio, move pointer or tilt device; particles flow, spatial tones move and change pitch/volume according to MLP; portals appear near dense clusters and can be dragged/clicked; seal persists state; reload restores; second tab can observe via BroadcastChannel if implemented.

## Failure modes
- AudioContext blocked until gesture: button required.
- Orientation denied: pointer only.
- No WebGPU: Canvas2D particles fine.
- IndexedDB private: session only.
- Too many oscillators: limited to 12.

Void is now Verse everywhere.

## Files
- drafts/F680-webgpu-spatial-audio-particle-mind/SPEC.md
- drafts/F680-webgpu-spatial-audio-particle-mind/index.html
