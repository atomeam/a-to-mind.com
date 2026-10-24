# F-251 · WebGPU MLP-Policy Particle Swarm Arena

## Concept
Novel combination deliberately branching from the recent residual-density / intent-flow / recurrent-constraint / causal-lattice / acoustic-softbody / sealed-genome-webrtc cluster (F243–F250):

- Multi-agent particle swarm in which discrete agent groups are controlled by local tiny MLP force policies (not residual predictors or RNNs with hidden state).
- Physics (Euler integration, wall bounce, energy attraction) runs on the main thread (full CPU path complete); WebGPU adapter is detected and reported as an expansion hook for a future compute-shader kernel that would update all particles in one dispatch.
- DeviceOrientation supplies continuous global tilt force and slowly advects energy wells; no pointer-history embedding, no spectral residual, no density lattice.
- Competitive fitness is particles gathered near dynamic energy wells; every ~5 s the champion genome is mutated into under-performing agents. Champion can be sealed to IndexedDB.
- Hybrid embodiment: Canvas2D particle field + floating DOM score badges that highlight the current champion.
- Leaves residual embeddings, density lattices, attention graphs, pure NCA, spectral/audio residuals, pointer-history fields, and volumetric injection. Expands the under-explored axis of local MLP neural kernels outputting physical forces for competitive particle groups under orientation-driven energy competition with persistent sealed genome transfer.

## Architecture
Single self-contained `index.html`. Main thread owns particle arrays, runs MLP forward + integration, draws to Canvas2D, updates DOM badges. IndexedDB object store for sealed genomes. Orientation permission button where required. Offline after load.

## Expected outcome
Grant orientation (or leave zero). Particles of each color/agent accelerate according to their MLP policies toward energy wells that drift with tilt. Fitness counters rise for agents that keep particles near wells. Low-fitness agents receive mutated champion weights. Seal button persists the chosen genome. Fully interactive with graceful degradation.

## Mechanics
- Genome: Float32Array packing MLP weights (5 inputs → 6 hidden tanh → 2 force outputs) + biases.
- Inputs per particle: unit vector to nearest energy, tiltX/Y, speed.
- Forces: MLP output + orientation gravity + soft attraction to energy.
- Evolution: sort by fitness every 300 frames; mutate champion into agents below 60 % of best.
- Seal: write genome + fitness + timestamp to IndexedDB `seals` store.

## Failure modes
- No orientation permission → zero tilt, still fully interactive via energy wells and evolution.
- IndexedDB blocked → in-memory only.
- No WebGPU → CPU path (primary).
- Low performance → reduce PARTICLES_PER.

## Building blocks
Full WebGPU compute shader that evaluates all MLPs + integrates particles in one dispatch with readback; multi-agent energy sharing via WebRTC; WebXR hand that can grab and reassign particle groups; OPFS persistence of entire population.

## V01D landing
Spatial MLP-particle-arena skill under `void-live-deploy/skills/`; testable via champion fitness rising under fixed energy pattern, sealed genome round-trip, and orientation tilt visibly biasing particle velocities.
