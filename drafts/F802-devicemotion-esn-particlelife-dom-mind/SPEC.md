# F802-devicemotion-esn-particlelife-dom-mind

**Ledger ID**: F-802 (frontier series)  
**Slug**: devicemotion-esn-particlelife-dom-mind  
**Date**: 2026-11-18

## Concept
A spatial multi-agent mind for The Verse canvas: a local Echo State Network (fixed random reservoir + trainable linear readout) is driven by a short history of DeviceMotion acceleration (x/y/z) or pointer-velocity proxy. The readout outputs a small set of inter-species attraction/repulsion coefficients for a multi-species Particle Life simulation. Particles are advanced on Canvas2D (WebGPU compute optional path reserved). Absolute-positioned living DOM portals sample local species densities and are scaled, rotated, and recolored accordingly. Portal clicks supply a reward signal that performs a simple LMS update on the readout. The sealed genome (reservoir seed + readout weights + fitness) persists to IndexedDB and is shared via BroadcastChannel for multi-tab adoption. Optional Web Speech Synthesis narrates high-activity states; Vibration API pulses on dense clusters.

## Novelty
Leaves the recent cluster of Cellular Potts (F788), spiking CSS3D (F798), decision-tree kinematics (F796), reaction-diffusion attention (F797), battery-Kalman gravity (F800), Vicsek Q-table (F801), and prior MLP/RNN/attention/policy substrates. Core novel combination is reservoir computing (echo-state, fixed recurrent reservoir, linear readout only) as the causal controller for a Particle Life (species-attraction matrix) substrate, embodied by density-driven DOM portals, with DeviceMotion input, reward-gated LMS, and sealed genome transfer. Not rate-coded MLP, not fully trained RNN, not spiking, not Potts/RD/SPH/Vicsek/LGA.

## Architecture
- Single index.html (Canvas2D primary; graceful sensor fallback)
- Reservoir: N=32 units, spectral radius ~0.9, fixed weights from seed
- Readout: 32→6 (3 species pairwise attractions)
- Particle Life: 3 species × 70 particles, attraction matrix from readout
- 4 DOM portals track high-density centroids per species
- Persistence: IndexedDB `f802-esn`; BroadcastChannel `f802-genome`
- Reward: click portal → LMS step on current reservoir state
- Optional: speechSynthesis.speak on entropy threshold; navigator.vibrate on cluster

## Expected outcome
Runnable offline prototype. Tilt or move pointer changes particle interaction rules; species form clusters or disperse; portals follow and morph. Click to adapt the mind. Seal shares across tabs. Graceful without DeviceMotion or speech.

## Failure modes
- No DeviceMotion: pointer velocity history used.
- Speech blocked: silent.
- IndexedDB unavailable: session-only.
- Low-end: reduce particles to 40/species.

## Building blocks
Causal ESN controlling continuous particle-life parameters, density-embodied DOM portals, reward-gated linear readout update, sealed reservoir genome. Expands hybrid reservoir + generative particle minds for future Verse experiments.

**V01D landing**  
skills/esn-particlelife-mind.js; test: motion → reservoir → attraction matrix → portal scale, click → LMS, seal round-trip.

Void is now Verse everywhere.
