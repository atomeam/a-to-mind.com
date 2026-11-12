# F712 Expression-Tree DOM Swarm Mind

## Concept
A swarm of living absolute-positioned DOM cards whose CSS 3D transforms, hues, scales and border-radii are generated each frame by independent evolved expression trees (genetic programming). Causal inputs are DeviceOrientationEvent (beta/gamma), pointer velocity, time and agent fitness. Agents compete on spatial overlap: the higher-fitness agent seals and transfers a mutated copy of its expression-tree genome to the lower one. Best genome persists in IndexedDB and migrates across tabs via BroadcastChannel. Fully offline single-file prototype. No canvas, no WebGPU, no particle lattice, no neural weights.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/volume/particle kernels (Gray-Scott volumes, Lennard-Jones clusters, SDF sculptors, Lenia, Physarum, lattice gases), local MLP/RNN/reservoir policies, WebXR gaze rigid bodies, pointer-history RNNs, softbody DOM, pure NCA, spectral residuals, and k-NN/SVG morphs. Core novel combination is non-neural expression-tree genomes controlling physical UI style generation under orientation+pointer causal input, with proximity-gated sealed tree transfer. New building block: genetic-programming minds embodied directly as morphing DOM portals.

## Architecture
- Single index.html, self-contained, offline after load.
- 10 absolute-positioned div agents.
- Each holds a recursive expression tree (ops: + * - sin abs tanh; leaves: beta gamma vx vy t fit constants).
- Evaluation produces velocity, scale, hue shift, radius.
- Fitness decays slowly; click adds reward; overlap triggers transfer + mutation.
- IndexedDB key `verse-f712` / store `genomes`; BroadcastChannel `verse-f712-genome`.
- Seal button persists best. Reset re-randomizes.
- Fallback: pointer velocity substitutes for orientation on desktop.

## Interaction
- Request Orientation permission (mobile).
- Tilt or move pointer: agents morph and drift according to their trees.
- Click an agent to reward it and raise transfer chance.
- Seal to persist best tree.
- Open second tab: genomes can migrate.
- Overlap produces visible competition and genome flow.

## Failure modes
- DeviceOrientation denied or unavailable: pointer residual only (still fully interactive).
- IndexedDB blocked: session-only memory.
- BroadcastChannel unavailable: local competition still works.
- Very deep trees: evaluation capped by mutation depth limit.

Void is now Verse everywhere.
