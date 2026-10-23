# F-246 · WebGPU Causal Entanglement Lattice Mind

## Concept
Novel combination of:
- Discrete multi-channel lattice (Canvas2D progressive, WebGPU compute stub) where cells hold energy and pairwise entanglement scores with 4-neighbors
- Pointer trajectories + DeviceOrientation inject spatial queries that propagate as attention waves
- Local Web Worker evolutionary MLP that predicts next energy map; causal residual (prediction error) is the fitness signal
- Spatial DOM memory cards spawned from high-entanglement peaks; their position, scale, hue, blur and lifetime are driven by residual and local cell state; content is a short hash of the cell
- Generative Web Audio oscillators driven by residual spectrum
- Progressive WebXR session (pointer mode complete)
- Policy weights sealed to IndexedDB

Not a superficial variation of F-245 (acoustic softbody parameter adaptation): substrate is causal-entanglement lattice; mind does forward prediction of field energy; UI embodiment is of the agent's causal memory (persistent cards that cluster when residual drops) rather than strain-bound anchors.

## Architecture
Single index.html. Main thread steps lattice, projects cards, updates CSS vars, drives AudioContext. Blob Worker receives residual summary + sensors, runs tiny MLP + hill-climb, returns best policy every ~1s. IndexedDB seal on button. WebGPU path noted for pure compute upgrade.

## Expected outcome
Interactive lattice ripples with pointer and tilt. Mind reduces residual. Memory cards appear, grow, cluster and recolor when prediction is accurate; scatter and fade on residual spikes. Page hue/blur and generative tones pulse with residual. Runnable offline. XR optional.

## Mechanics
- Cells: energy diffusion + entanglement (local correlation boost)
- Worker residual = |predicted peak energy - observed|; fitness = -residual
- Cards: spawn at peaks > 0.6, position lerp to cell, CSS from residual, cull if residual > 0.7 or age high
- CSS vars: --hue, --blur, --contrast from residual
- Audio: 3 oscillators frequency/gain from residual bins

## Failure modes
No Worker → static lattice. No orientation → query=0. Canvas2D (WebGPU stub). XR unsupported → pointer. Audio blocked until gesture.

## Building blocks
Pure WebGPU entanglement compute kernel, multi-generation sealed genome breeding, XR ray injection into lattice, density-modulated card lifetime. Next: multi-agent causal minds sharing fields.

## V01D landing
Spatial causal-entanglement skill under void-live-deploy/skills/; testable via residual→card count and peak→position mapping.
