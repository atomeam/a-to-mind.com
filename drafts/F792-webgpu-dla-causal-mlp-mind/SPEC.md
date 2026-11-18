# F792 WebGPU-Ready DLA Causal MLP Mind

## Concept
A previously unused primary spatial substrate: Diffusion-Limited Aggregation (DLA). Random-walking particles stick to a growing fractal aggregate when they contact it. A local tiny MLP (pure JS) takes short history of DeviceOrientation deltas + pointer velocity as causal input and outputs adaptive walk bias, stick probability, and injection rate. Living DOM portals act as movable seed sites: dragging one places a new sticky seed that grows its own branch. Multi-agent: 3 competing MLPs; clicks on a portal reward its genome. Seal persists weights to IndexedDB and broadcasts via BroadcastChannel for sealed transfer. Offline single-file. Canvas2D implementation (WebGPU compute path sketched for future diffusion steps).

## Novelty
Leaves the recent cluster of WebGPU continuum/discrete kernels (particle attractors F791, LGA F790, Cellular Potts F788, Voronoi, residual SDF, SPH, LBM, Cahn-Hilliard, spectral, Lenia, Physarum, softbody springs, NCA, lattice-gas, Hopfield, Ising, Kuramoto, LIF) and local models driving pure CSS/DOM morphs (attention F789, SOM F787, Bayesian, neural-ODE, RBF, Hebbian). Core novel combination is DLA fractal growth as the living spatial field under competitive local MLP control, with DOM elements as true interactive seed portals that initiate and sample branches, driven by orientation/pointer causal input, with sealed genome transfer. Not particle attractors, not continuum fluids, not CSS morphs, not NCA, not residual predictors.

## Architecture
- Single index.html
- DLA: grid of sticky sites + free walkers (N~200), random walk with bias, stick on contact
- MLP: 4→8→3 per agent (orientX, orientY, ptrVX, ptrVY → biasX, biasY, stickP)
- Embodiment: Canvas2D fractal render; 4 DOM seed portals (absolute, draggable) that inject sticky pixels and sample local density for reward
- Persistence: IndexedDB `verse-f792`; BroadcastChannel `f792-genome`
- Progressive: DeviceOrientation or pointer proxy

## Expected outcome
Runnable prototype: tilt/move pointer biases walker directions and stickiness via MLP; fractal aggregates grow from seeds; drag portals to plant new seeds; click to reward; Seal transfers best genome. Graceful without sensors. Works offline.

## Mechanics
1. Initialize random MLP weights, empty aggregate with one center seed, walkers.
2. Listen orientation/pointer, drag, click, BroadcastChannel, buttons.
3. Each frame: update MLPs from input, step walkers (biased RW, stick if neighbor sticky), inject from portals, render.
4. Click portal: reward its MLP (Hebbian-like weight nudge).
5. Seal: store best {weights, fitness} to IndexedDB + post; adopt if better.

## Files
drafts/F792-webgpu-dla-causal-mlp-mind/SPEC.md
drafts/F792-webgpu-dla-causal-mlp-mind/index.html

## V01D landing
DLA causal MLP controller under void-live-deploy/skills/dla-causal-mlp-mind.js; test asserts orientation vector → MLP output → walker bias change and BroadcastChannel adoption.
