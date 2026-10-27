# F275 — WebGPU Acoustic Residual Spatial Mind

## Concept
Novel combination: a WebGPU (fallback Canvas2D) particle flock whose attraction, separation, and noise parameters are modulated in real time by the prediction residual of a local Web Worker residual predictor (tiny online linear model on DeviceOrientation + pointer velocity history). Particle cluster centroids and residual energy drive multiple Web Audio oscillators with HRTF-like spatial panning (PannerNode). Floating DOM “listener portals” can be dragged to reposition the virtual listener and inject bias into the predictor input, closing an acoustic-spatial loop. CSS chrome morphs with residual magnitude. IndexedDB seals the predictor weights. Progressive DeviceOrientation.

## Branch away from
Dominant recent cluster (F260–F274): WebGPU softbody/attention/cloth/NCA/MLP residual lattices, WebXR gaze/hand genome arenas, sealed competitions, orientation-direct physics, fluid-evolving-audio, spectral trajectories, causal RNN memory field, reservoir gesture DOM chain. Core is residual-driven particle flock + spatial acoustic embodiment via Web Audio panning + draggable listener portals — not fluid density, not recurrent compression of deposits, not fixed reservoir + spring chain, not evolutionary genomes on audio stats, not force-law softbodies.

## Architecture
- Single self-contained `index.html` (inline CSS/JS).
- Main thread: particle simulation (Canvas2D primary; WebGPU compute path stubbed/noted), DeviceOrientation + pointer listeners, Web Audio graph (Oscillator + Gain + PannerNode per cluster), DOM portals, CSS custom properties.
- Blob Worker: online residual predictor (simple LMS linear on 8-dim history features → next delta); returns residual magnitude and predicted vector each step.
- Particles: ~200 boids-like; residual increases attraction to predicted direction, energy scales size/hue.
- Audio: 3–5 oscillators; frequency from residual, position from k-means-like cluster centroids (simple grid binning), panning relative to listener portals.
- IndexedDB: seal/load predictor weights.
- Progressive: orientation if permitted; pointer always; audio after user gesture.

## Expected outcome
Interactive acoustic-spatial canvas: tilt or move the pointer. The residual mind anticipates gesture dynamics and steers the particle flock. Clusters generate spatial sounds that move with the flock. Drag listener portals to change the acoustic viewpoint and bias the predictor. Seal the learned residual model. Offline-capable, expands residual prediction + spatial audio + particle embodiment building blocks.

## Mechanics
- Predictor: feature dim 8 (orient β/γ, vx/vy, speed, history lags), LMS lr=0.02, residual = ||actual - pred||.
- Particles: cohesion/separation/alignment base, modulated by residual*0.5; step ~30–60 Hz.
- Audio: base freq 220 + residual*200 Hz; panner position from cluster mean.
- Portals: 3 absolute DOM elements; drag updates listener position and adds bias term to input.
- Background render: particles as points/circles colored by residual.

## Failure modes
- WebGPU unavailable → Canvas2D particles (still interactive).
- Worker blocked → static particles, no residual modulation.
- Audio blocked until gesture; no AudioContext → visual only.
- No orientation → pointer-only (works).
- IndexedDB denied → in-memory only.
- Low-end: reduce particle count.

## Building blocks
Residual predictor substrate, particle flock steered by prediction error, spatial Web Audio from cluster statistics, draggable listener portals for closed loop, sealed weights. Next: full WebGPU compute shader for larger flocks with spatial hashing; multi-head residual attention; WebRTC shared acoustic scenes.

## V01D landing
Spatial acoustic-forager skill under `void-live-deploy/skills/mini/acoustic-residual-spatial.js`; testable via residual→particle attraction and portal-drag→panner position + predictor bias.
