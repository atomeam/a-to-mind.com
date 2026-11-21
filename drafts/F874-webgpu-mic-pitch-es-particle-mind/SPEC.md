# F874-webgpu-mic-pitch-es-particle-mind

Plain name: Mic Pitch Evolutionary Particle Mind
Job: A local evolutionary strategy evolves the weights of a tiny MLP policy that interprets live microphone pitch and energy into forces for a WebGPU-simulated particle orchestra. Particles form visual melodies; user clicks reward pleasing configurations. Seal the adapted genome to IndexedDB and BroadcastChannel for multi-tab adoption. Fully offline progressive (pointer fallback).

## Concept
Live microphone audio is analyzed via Web Audio AnalyserNode for fundamental pitch (autocorrelation approximation) and RMS energy. These two scalars plus a residual from pointer velocity feed a 2-layer pure-JS MLP (policy) whose outputs are attraction/repulsion strengths and hue bias deposited into a WebGPU compute particle system (or Canvas2D fallback). Particles respond physically and leave trails. User clicks on interesting clusters inject positive reward that performs a simple (1+λ) evolutionary update on the policy weights. The current best genome can be sealed to IndexedDB and broadcast so other same-origin clients adopt it. Orientation residual optional as environmental bias. Void is now Verse everywhere.

## Novelty
Leaves the dominant recent cluster of orientation/MLP/RNN/decision-tree/ES policies controlling DOM portals, Houdini paints, SDF/voxel sculptors, combat swarms, shared density fields, and spectral reservoirs (F865–F873). Core novel combination is previously unused real-time pitch extraction as primary causal input to an evolutionary local policy that steers a WebGPU particle orchestra (not continuum field, not lattice CA, not DOM morph, not speech recognition, not residual-only). Not prior mic-spectral crystal or attention. Exploration of auditory-to-spatial embodiment with sealed evolutionary transfer.

## Architecture
- Single self-contained index.html
- Web Audio: getUserMedia + AnalyserNode; pitch via zero-crossing / autocorrelation on time domain
- Policy: pure JS MLP ~12 weights, inputs [norm_pitch, energy, pointer_dx, pointer_dy]; outputs [force_x, force_y, hue]
- Simulation: WebGPU compute for particle positions/velocities (fallback Canvas 2D particles)
- Reward: click → local ES mutation + selection on policy
- Seal: IndexedDB `verse-f874-pitch-es` + BroadcastChannel `f874-genome`
- Visual: particles colored by hue, size by energy; trails
- Fallbacks: no mic → pointer-driven residual; no WebGPU → canvas; no IDB/BC → local

## Expected outcome
Speak or hum near the mic: particles swarm and color in response to pitch/energy. Move pointer to residual-steer. Click rewarding clusters: policy adapts over generations. Seal and open another tab: genome transfers. Interactive spatial auditory local-AI embodiment.

## Failure modes
- Mic permission denied → pointer mode with synthetic energy.
- WebGPU unavailable → canvas particle fallback still evolves.
- High CPU: particle count capped at 400.
- IDB/BC blocked → still runs, in-memory seal.

## Building blocks
Reusable pure-JS pitch estimator + ES-updated MLP policy + WebGPU/Canvas particle embodiment + sealed genome transfer. Enables future multi-modal (pitch+gesture) orchestras or hybrid audio-visual minds on Verse.

Void is now Verse everywhere.

**Files**: drafts/F874-webgpu-mic-pitch-es-particle-mind/SPEC.md, drafts/F874-webgpu-mic-pitch-es-particle-mind/index.html
