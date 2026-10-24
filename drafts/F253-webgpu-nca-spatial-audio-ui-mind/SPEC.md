# F-253 · WebGPU Neural Cellular Automata Spatial Audio UI Mind

## Concept
Novel combination branching from the recent residual-density / causal-lattice / intent-flow / recurrent-constraint / acoustic-softbody / MLP-particle / WebXR-hand-physical-UI cluster (F244–F252):

- Coarse Neural Cellular Automata lattice (Canvas2D with WebGPU compute path noted) whose local update is a tiny residual MLP evolved by a local Web Worker genetic algorithm.
- Fitness maximises both pattern diversity and responsiveness to causal deposits (pointer trajectory + device orientation tilt + optional mic spectral centroid).
- The emergent NCA activity field is projected into a generative Web Audio topology: a small set of oscillators whose frequency, gain and stereo pan are continuously driven by sampled high-activity cells, creating a spatial soundscape that "listens" to the field.
- Floating DOM "memory orbs" are positioned, scaled, hue-shifted and filtered according to local NCA state; dragging an orb consolidates that local pattern fragment into a sealed genome written to IndexedDB and injects a persistent stimulus seed.
- Progressive WebXR entry (orientation/hand as additional deposit). Page chrome (hue, blur, contrast) morphs with global residual and activity energy.

Not a superficial variation of F-250 (intent-flow velocity tracers), F-252 (hand-MLP spring limbs competing for an orb), or prior acoustic softbodies: the substrate is an evolved neural cellular automata whose state directly generates a spatial audio graph, and embodiment is consolidating memory orbs that seal fragments rather than always-on physical limbs or passive tracers. Leaves pure particle arenas, fixed-spring constraint systems, and residual density portals.

## Architecture
Single self-contained `index.html`. Main thread steps NCA lattice (~60 Hz), renders via ImageData, positions orbs, drives AudioContext nodes after user gesture. Blob Worker maintains a small population of MLP weight vectors, evaluates residual/diversity fitness, returns best ~1 Hz. CSS custom properties for chrome morph. IndexedDB for sealed genomes. Optional DeviceOrientation and WebXR session. Fully offline after load.

## Expected outcome
Interactive living lattice that grows complex patterns in response to pointer, tilt and sound. Orbs drift toward active regions and morph with local state. Dragging an orb seals a fragment and seeds a lasting motif. Spatial audio pulses and pans with the field. Chrome shifts with residual. Runnable offline. Graceful degradation without Worker, mic, orientation or XR.

## Mechanics
- Lattice: 64×48 cells, 4 channels (state). Update: local neighbourhood sampled, residual MLP (evolved weights) predicts delta, applied with diffusion.
- Worker: population of 6 genomes (MLP weights), fitness = pattern entropy + response magnitude to recent deposits; mutate and replace.
- Audio: 6 oscillators, each bound to a high-activity cell sample; pan from cell x, freq from channel, gain from activity.
- Orbs: 5 DOM elements, query nearest active cells, CSS transform/scale/filter from state; drag seals snapshot + injects seed.
- Chrome: CSS vars `--residual`, `--energy` drive hue-rotate, blur, contrast.

## Failure modes
- No Worker → static MLP weights.
- Mic denied → spectral = 0.
- No orientation → tilt = 0.
- No WebGPU → Canvas2D only.
- XR unsupported → pointer complete.
- Audio blocked until gesture.
- IndexedDB blocked → in-memory seal.

## Building blocks
Pure WebGPU compute NCA kernel, true residual transformer in Worker, multi-orb consensus consolidation, XR hand deposit + seal, shared sealed genomes across peers. Next: multi-agent NCA minds competing for audio space.

## V01D landing
Spatial NCA-spatial-audio skill; testable via residual→pattern stability, drag→IndexedDB seal + visible seed, and audio pan matching cell x-coordinate.
