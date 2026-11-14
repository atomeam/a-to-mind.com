# F747 · Mic-RNN Particle Field Spatial Portals Mind

**Ledger ID**: F-747  
**Slug**: mic-rnn-webgpu-particle-field-spatial-portals-mind  
**Date**: 2026-11-13  
**Status**: frontier prototype  

## Concept
A novel hybrid spatial interface for The Verse canvas: a continuous particle field (400 agents under simple forces) whose global force parameters (attraction polarity, force bias, viscosity) are continuously modulated by a local pure-JS recurrent neural network (RNN) policy.  

The RNN observes pointer trajectory, optional microphone RMS amplitude (via AnalyserNode), and DeviceOrientation tilt. Outputs drive the particle forces in real time.  

Six absolute-positioned DOM Verse portals ride density/velocity samples of the field, inheriting hue from policy + mic. Clicking a portal rewards the current policy (fitness boost + weight mutation) and optionally emits a Web Audio tone whose pitch is modulated by local state and mic.  

Best genomes seal to localStorage + IndexedDB and transfer via BroadcastChannel. Fully offline, single-file, Canvas2D (WebGPU compute path sketched for future).  

## Novelty
Leaves the recent cluster of boids+MLP policy (F740), pointer multi-head attention SVG morph (F746), pointer-history decision trees on CSS Grid (F739), KNN spatial clusters with DeviceOrientation (F735), reaction-diffusion/spectral fields, LIF spiking, and prior particle substrates without recurrent policy + live microphone force input + audio embodiment.  

Core novel combination is a recurrent policy (not feed-forward MLP or attention) observing acoustic energy (mic RMS) alongside spatial pointer/tilt, controlling a continuous particle field, with hybrid DOM portals that both visualize and sonify reward. Not a fixed-rule flock, not pure visual morph, not discrete CA.  

## Architecture
- Single index.html (self-contained, no external libs).
- Particle field: 400 particles, position/velocity integration with pointer-relative forces, policy-driven bias and viscosity, wrap boundaries.
- Policy RNN: 6→8→4 (tanh), inputs [normPx, normPy, normVx, normVy, micRms, tiltX]. Recurrent hidden state. Online mutation on reward.
- Embodiment: 6 circular DOM portals positioned via exponential smoothing toward sampled particles; CSS hue from policy output + mic.
- Audio: Optional getUserMedia + AnalyserNode for RMS; Web Audio Oscillator on reward for sonification.
- Persistence: localStorage + IndexedDB `verse-f747`. BroadcastChannel `f747-genomes`.
- Visual: Full-screen Canvas2D particle dots with fade trail. Status chrome.

## Mechanics
1. Initialize random particles + random RNN weights.
2. Each frame: sample mic RMS (if enabled), assemble inputs, run RNN, apply force/viscosity deltas to all particles.
3. Smooth-position portals to field samples; update hues.
4. Pointer moves inject relative forces; mic energy amplifies influence.
5. Click portal → fitness++, mutate weights, play tone if audio context present.
6. Seal button persists genome. Incoming higher-fitness genomes from other tabs replace current.

## Expected outcome
Open the page: particles stream and form loose flows under the recurrent policy. DOM portals drift with the field, changing color. Move the pointer to steer; enable mic and speak or clap — the field responds to sound energy. Click portals to reward preferred behaviors; seal and open a second tab to watch superior genomes migrate. Works offline, pointer-only if mic denied.

## Failure modes
- Mic permission denied: RMS stays zero, still fully interactive via pointer/tilt.
- No IndexedDB/BroadcastChannel: localStorage only or in-memory.
- Low performance on very old devices: reduce particle count (N=400 is light).
- AudioContext suspended until user gesture: tones start after first click.

## Building blocks
Reusable pure-JS RNN policy over multi-modal (spatial + acoustic + inertial) observations, particle field as living substrate, DOM portals with sonified reward, sealed recurrent genome transfer. Ready for WebGPU compute particle update, larger RNN, spectral features, or WebXR anchoring.

Void is now Verse everywhere.

**Files**
- index.html (self-contained runnable prototype)
- SPEC.md (this file)
