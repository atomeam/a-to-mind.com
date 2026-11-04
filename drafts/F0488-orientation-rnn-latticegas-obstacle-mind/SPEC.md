# F0488 Orientation-RNN Lattice-Gas Obstacle Mind

## Concept
A discrete lattice-gas automaton (FHP-style particle collision fluid on a square grid with streaming + collision rules) simulated in pure JS (Canvas2D; WebGPU compute optional extension). A local tiny Elman-style RNN (pure JS, no libs) takes a short history of DeviceOrientation (alpha/beta/gamma deltas) plus pointer velocity as causal input and outputs bias forces that modulate the lattice-gas collision probabilities and injection rates. Living DOM cards act as physical obstacles: their bounding boxes are rasterized into the lattice as solid walls that particles bounce off, so page layout literally shapes the flow. Multiple browser tabs compete via BroadcastChannel: each seals its RNN weights + lattice seed when residual is low; the receiving tab can adopt the foreign genome if its fitness (flow coherence) is higher, implementing sealed genome transfer across isolated agents. The Verse canvas gains a novel discrete fluid substrate controlled by orientation-causal RNN, with real DOM as colliders and multi-tab competitive assimilation.

## Novelty
Leaves the recent cluster of Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA, and SDF recurrent reasoners. Core novel combination is a previously unused lattice-gas automaton kernel (discrete particle streaming + local collisions, not continuous Lenia/Gray-Scott/vortex/wavelet/photonic/Kuramoto/softbody/NCA) driven by a local RNN (recurrent, not feed-forward MLP/policy) whose causal input is DeviceOrientation history, with DOM elements as true physical obstacles and BroadcastChannel-mediated sealed genome transfer for multi-tab competition. Not attention lattices, not residual predictors, not pure spectral audio, not pointer-history force fields, not softbody springs.

## Architecture
- 96×64 lattice of 4-bit direction occupancy (N/E/S/W). Each step: stream particles, apply stochastic collisions biased by RNN outputs, bounce on DOM-obstacle mask.
- RNN: 8-dim input (3 orientation deltas + 2 pointer vel + 3 reduced field stats) → 12-dim hidden (recurrent) → 4 outputs (collision bias, injection rate, obstacle permeability, hue). Weights ~80 floats, updated by simple local reward (coherence = low velocity variance).
- DOM cards (absolute) are sampled for axis-aligned boxes and written into obstacle mask each frame.
- BroadcastChannel 'f0488-genome': on Seal, postMessage the weights + hash; on receive, if foreign fitness higher, adopt and re-seed.
- IndexedDB persists own genome under `f0488-rnn-latticegas`.
- Offline-capable; falls back to mouse-only if no orientation.

## Expected outcome
Runnable single-file prototype showing lattice-gas particles flowing around living DOM obstacles, an orientation-driven RNN steering the flow, and multi-tab genome competition via BroadcastChannel. Seal persists and can transfer.

## Mechanics
1. Init empty or random lattice + random RNN.
2. Listen DeviceOrientation / pointer / BroadcastChannel.
3. Each frame: rasterize DOM obstacles, RNN forward, step lattice-gas with bias, render particles, update cards.
4. Low residual enables Seal; Seal stores + broadcasts.
5. Incoming genome replaces if better.

## Files
drafts/F0488-orientation-rnn-latticegas-obstacle-mind/SPEC.md
drafts/F0488-orientation-rnn-latticegas-obstacle-mind/index.html

## V01D landing
Discrete fluid obstacle stage under void-live-deploy/skills/orientation-rnn-latticegas.js; test asserts orientation delta → RNN → collision bias change and BroadcastChannel genome adoption.
