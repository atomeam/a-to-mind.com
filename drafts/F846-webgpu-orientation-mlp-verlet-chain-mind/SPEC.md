# F846 WebGPU Orientation MLP Verlet Chain Mind

## Concept
A local tiny feed-forward MLP whose causal inputs are DeviceOrientation Euler angles + normalized pointer. The MLP outputs per-link rest-lengths and damping coefficients for a chain of 32 particles integrated with Verlet in a WebGPU compute shader. The chain is the hybrid physical embodiment: particles are rendered on canvas, and selected links are bound to living DOM labels that ride the positions. User clicks inject impulses and provide reward that updates the MLP via a simple delta rule. High-fitness weight sets seal to IndexedDB and broadcast over BroadcastChannel for sealed genome transfer across tabs. Falls back to Canvas2D JS integration if no WebGPU.

## Novelty
Leaves the dominant recent cluster of spatial portal minds (SOM, MCTS planning, spiking, diffusion, SPH continuum, gaze-SDF, WebRTC arenas). Core novel combination is DeviceOrientation as causal input to a never-before-seen local MLP that directly modulates the physical parameters of a WebGPU compute Verlet chain (previously unused discrete chain kernel, not continuum SPH, not softbody mesh, not NCA, not portal lattice). Hybrid embodiment of DOM elements riding the chain vertices. Not a superficial variation of prior softbody DOM cloth or orientation RNN.

## Architecture
- Single self-contained index.html (offline after load, progressive)
- WebGPU compute: Verlet integration, constraint projection for rest lengths from MLP
- Fallback: pure JS Verlet on Canvas2D
- MLP: 4-8-2 (inputs: alpha, beta, ptrX, ptrY; outputs: restScale, dampScale)
- 32 particles in a chain, fixed ends optional
- DOM: 4 labels absolutely positioned at sampled chain points
- Seal: IndexedDB `f846-mlp-chain` + BroadcastChannel `f846-genome`
- Reward: click near chain increases fitness, updates weights

## Expected outcome
Tilt device or move pointer: chain stiffness and damping morph in real time. Click to reward and perturb. Seal transfers learned parameters. Interactive spatial local-AI capability turning pose into living chain dynamics.

## Mechanics
1. Initialize random MLP weights and chain positions.
2. On orientation/pointer: forward MLP → set rest lengths / damping.
3. Compute shader (or JS): Verlet step + distance constraints.
4. Render particles + lines; position DOM labels.
5. On click: impulse + SGD update on MLP toward higher coherence.
6. Periodic seal / adopt higher fitness genomes.

## Failure modes
No WebGPU → JS fallback. No DeviceOrientation → pointer-only. IndexedDB blocked → memory-only. High load → reduce particle count.

## Building blocks
WebGPU Verlet chain kernel, orientation-causal MLP parameter control, DOM-on-chain hybrid embodiment, sealed weight transfer. Expands discrete physics + local model hybrids for future Verse.

**Files**: drafts/F846-webgpu-orientation-mlp-verlet-chain-mind/SPEC.md, drafts/F846-webgpu-orientation-mlp-verlet-chain-mind/index.html
