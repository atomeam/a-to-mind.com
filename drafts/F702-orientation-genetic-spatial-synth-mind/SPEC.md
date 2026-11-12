# F702 Orientation Genetic Spatial Synth Mind

## Concept
A living spatial synthesizer whose multi-oscillator genomes evolve via a local genetic algorithm. DeviceOrientation (beta/gamma) acts as causal input modulating fitness and spatial panning. Each agent is a set of oscillators with frequency, amplitude, and 3D position genes; they produce sound through Web Audio PannerNodes for true spatialization. User clicks reward high-fitness genomes, triggering crossover and mutation with neighbors. Visual embodiment is a canvas spectrum + floating DOM note cards that ride the loudest agent. Best genomes seal to IndexedDB and BroadcastChannel. Fully offline single-file prototype. No WebGPU continuum, no particles, no MLP field controllers.

This deliberately leaves the dominant recent cluster of continuum WebGPU kernels (LBM, Gray-Scott, Poisson, wave, sandpile, NCA, Lenia, Physarum, vortex, softbody, SPH, SDF raymarch) + residual/MLP/RNN/decision-tree field controllers + DOM mosaic/path portals. Core novel combination is previously unused genetic evolution of spatialized audio genomes (not neural weights, not continuum fields) with DeviceOrientation as both fitness modulator and panner orientation, hybrid visual spectrum + DOM riders, and proximity-gated sealed genome transfer. Not a reaction-diffusion, not a CA, not particle physics, not softbody springs.

## Architecture
- Single index.html, self-contained, offline after first load.
- 4–6 agent genomes, each with 3 oscillators (freq, amp, panX/Y/Z).
- Web Audio context with OscillatorNodes + Gain + PannerNode per agent.
- Fitness: amplitude stability + user click rewards + orientation alignment residual.
- Crossover/mutation on proximity or click.
- Canvas 2D spectrum visualizer; DOM cards positioned by agent loudness.
- IndexedDB key `verse-f702`; BroadcastChannel `f702-genome`.
- Seal button persists best. Click card or canvas to reward nearest.

## Mechanics
1. Initialize random genomes; start audio on user gesture.
2. Loop: sample orientation → update fitness and panner orientations → evolve if generation interval or reward.
3. Render spectrum bars and position DOM cards at agent centroids.
4. Seal: serialize genomes + fitness to IndexedDB.
5. Restore on load if sealed.

## Expected outcome
Open page, click to start audio. Tilt device; sound spatializes and evolves. Click a card or spectrum to reward and breed. Seal and reload restores the evolved synth. Spatial audio responds to orientation.

## Failure modes
- AudioContext suspended until gesture: start button.
- Orientation denied: pointer residual + mouse tilt fallback.
- IndexedDB blocked: session memory only.
- No PannerNode 3D: fallback to stereo pan.

Void is now Verse everywhere.

**Files**: drafts/F702-orientation-genetic-spatial-synth-mind/SPEC.md, drafts/F702-orientation-genetic-spatial-synth-mind/index.html
