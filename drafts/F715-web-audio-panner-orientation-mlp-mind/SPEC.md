# F715 Web Audio Panner Orientation MLP Mind

**Ledger ID**: F-715 (frontier series)  
**Slug**: web-audio-panner-orientation-mlp-mind  
**Date**: 2026-11-12  
**Branch from**: Recent cluster of Bayesian Coulomb portals (F714), Q-learning spatial audio agents (F713), multi-wave genomes, temporal attention, orientation MLP clip-path and SVG morphs (F695-F696), pure-DOM residual swarms (F693). Explicitly leaves continuum WebGPU kernels, particle physics, residual predictors on fields, SDF raymarch, Hopfield, Bayesian regression on charges, and pure visual morphs.

## Concept
A previously unattempted combination for The Verse canvas: a swarm of spatial audio sources embodied as living DOM cards. Each source is a Web Audio API OscillatorNode + PannerNode (HRTF panning). Position (x,y mapped to audio space) and frequency offset are driven by an independent tiny local pure-JS MLP. Causal inputs are DeviceOrientationEvent (beta/gamma) plus a short internal phase. MLP outputs continuous velocity and frequency bias. Users hear the spatialized tones move with device tilt. Clicking a card rewards its fitness (volume boost, color change) and triggers proximity-gated genome transfer of MLP weights to nearby agents. Best genome seals to IndexedDB and broadcasts via BroadcastChannel. Visual projection of the 3D audio positions on a 2D canvas or CSS transforms. Fully offline single-file prototype. No WebGPU, no particle continuum, no residual pointer history as primary.

## Novelty
Leaves the dominant recent neural/tabular policy minds controlling visual continuum or DOM morphs. Core novel combination is spatial audio (PannerNode HRTF) as the primary embodiment medium for local MLPs driven solely by orientation, with hybrid living DOM cards that both visualize projected positions and serve as interaction surfaces for genome sealing/transfer. Not a visual-only swarm, not Q-learning audio, not continuum field, not Bayesian linear on forces.

## Architecture
- Single index.html, pure HTML/CSS/JS, no libraries.
- Web Audio: AudioContext, 6 OscillatorNodes (sine, different base freqs), each with GainNode and PannerNode (panningModel: 'HRTF', distanceModel: 'inverse').
- Positions in audio space [-1..1, -1..1, 0], updated by MLP.
- Each agent: 3-6-3 MLP (orientation beta/gamma + phase → vx, vy, freqDelta).
- Fitness: inverse distance to pointer + click rewards + volume persistence.
- Proximity < 100px: higher fitness transfers 40% weights with mutation to lower.
- IndexedDB key `verse-f715-audio-mlp`. BroadcastChannel `verse-f715`.
- Canvas2D or absolute DOM for visual projection of sources (circles with trails).
- Controls: Enable Audio / Orientation, Seal Genome, Reset, Mute.
- Progressive: if no AudioContext, visual-only fallback.

## Mechanics
1. Init AudioContext on user gesture, create oscillators + panners, load or random MLPs.
2. Each frame: sample orientation + phase → MLP → update positions/freqs → set PannerNode.positionX/Y, oscillator.frequency.
3. Pointer proximity increases fitness, updates visual.
4. Click card: reward, potential transfer.
5. Seal: serialize best MLP weights to IndexedDB + broadcast.
6. Second tab adopts genome.

## Expected outcome
Grant audio and orientation. Tilt device to hear sources move in space and see their visual projections shift. Click cards to train and transfer genomes. Seal persists across reloads. Offline after load. Spatial audio creates an embodied mind that can be heard and seen.

## Failure modes
- AudioContext suspended until gesture: button unlocks.
- Orientation denied: phase-only drive, still spatial.
- IndexedDB fail: session-only.
- HRTF not supported: falls back to equalpower.
- High CPU: limit to 6 agents.

Void is now Verse everywhere.

**Files**: drafts/F715-web-audio-panner-orientation-mlp-mind/SPEC.md, drafts/F715-web-audio-panner-orientation-mlp-mind/index.html
