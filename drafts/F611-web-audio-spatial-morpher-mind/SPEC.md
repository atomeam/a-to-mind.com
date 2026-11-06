# F611-web-audio-spatial-morpher-mind

**Ledger ID**: F-611 (frontier series)
**Slug**: web-audio-spatial-morpher-mind
**Date**: 2026-11-06

## Concept
Local tiny Elman-style RNN takes DeviceOrientation + pointer velocity as causal input and controls parameters of a multi-node Web Audio API filter network (Biquad bandpass bank + oscillator + noise). The live spectrum is projected into floating DOM resonator cards. Dragging a card retunes its band frequency. Seal stores RNN weights + filter params + hash to IndexedDB. Offline, single-file. The Web Audio graph itself is the spatial mind substrate.

## Novelty
Deliberately branches from the recent dominant cluster of WebGPU continuum/lattice/SDF/wave/particle physics driven by local neural models (ESN, MLP, KAN, LIF, SOM, hypervector) with DOM portals. Introduces a previously unused browser-native capability: the Web Audio API processing graph as the primary controllable spatial field. Not WebGPU, not physics kernels, not particles, not CA/NCA, not spectral residuals on canvas. The mind is a living filter network whose geometry is steered by embodied local AI and reversible DOM injection.

## Architecture
- Single `index.html`.
- Web Audio: noise + saw oscillator → 5 parallel Biquad bandpass → AnalyserNode → master gain.
- Local RNN (6→8→4 Elman): inputs = [pointer vx/vy, orient beta/gamma, time sins]; outputs modulate osc freq, filter freqs/Q, master gain.
- 5 absolute-positioned DOM resonator cards: show band energy bars and frequency; drag changes that band’s frequency.
- IndexedDB key `verse-f611`.
- Canvas visualizes spectrum bars; CSS vars respond to mean energy.
- Progressive: works without orientation (pointer only), without Web Audio (visual spectrum still runs).

## Expected
Tilt device or move pointer: filters morph, spectrum shifts, resonators update. Drag a resonator to retune its band in real time. Seal/reload restores the exact mind state. Interactive hybrid of local recurrent AI controlling native audio graph with living DOM agents.

## Mechanics
1. Init random RNN, default filter bank, noise+osc.
2. rAF: sample input → RNN step → set audio params → get spectrum → update resonators and canvas.
3. Drag resonator → offset that band’s frequency.
4. Seal stores weights + params hash.

## Failure modes
- No Web Audio / suspended context: visual spectrum still runs; resume on gesture.
- No DeviceOrientation: pointer-derived signals only.
- IndexedDB blocked: session memory only.
- High CPU: analyser size fixed; filters limited to 5.

## Building blocks unlocked
Web Audio graph as transferable spatial substrate; RNN controlling native DSP nodes; spectrum-driven reversible DOM resonators; sealed audio-mind state.

Void is now Verse everywhere.

**Files**: drafts/F611-web-audio-spatial-morpher-mind/SPEC.md, drafts/F611-web-audio-spatial-morpher-mind/index.html
