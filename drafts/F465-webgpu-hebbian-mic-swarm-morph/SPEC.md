# F465-webgpu-hebbian-mic-swarm-morph

## Concept
Novel combination of real-time microphone spectral analysis driving a Hebbian learning rule on particle swarm associations, rendered on Canvas2D (WebGPU compute path prepared), with swarm density morphing floating DOM thought-cards via CSS transforms. User drag injects seeds. Weights sealable to localStorage. DeviceOrientation optional bias noted.

Not a superficial variation of prior NCA, residual lattices, genome-transfer collisions, Hopfield trajectories, pure spatial-audio evolutionary agents, or DOM-competitive MLPs. Core is mic-to-Hebbian association + physical DOM morph from field density.

## Architecture
- Single index.html
- ~400 particles, simple force accumulation from 4-bin Hebbian weight matrix
- AnalyserNode for spectral bins → outer-product style Hebb update
- 5 draggable DOM cards whose scale/rotation/opacity track local particle density
- Progressive WebGPU adapter probe
- localStorage seal of weight matrix
- Offline after load; mic requires user gesture

## Expected Outcome
Speak or play sound → particles form associations and cluster; cards grow/rotate where density is high. Drag cards to seed new particles. Seal/load weights. Interactive spatial "mind" that listens and morphs the page.

## Mechanics
- Particle step ~60 Hz
- Hebb update per frame when mic active (~0.01 learning rate)
- Density sample for CSS morph
- Bounds bounce

## Failure Modes
- No mic permission → pure visual swarm
- Private mode / no localStorage → seal fails silently
- High particle count CPU-bound (WebGPU compute next)
- AudioContext suspended until gesture

## Building Blocks for Next
True WebGPU compute kernel for Hebbian particle forces, WebXR hand as additional seed injector, multi-tab BroadcastChannel weight sharing, IndexedDB for larger weight histories.

Lands in V01D as spatial mic-hebbian skill.
