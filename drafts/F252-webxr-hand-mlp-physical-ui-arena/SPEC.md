# F-252 · WebXR Hand MLP Physical UI Arena

## Concept
Novel combination deliberately branching from the recent residual-density / causal-lattice / intent-flow / recurrent-constraint / acoustic-softbody / MLP-particle-arena cluster (F244–F251):

- True WebXR hand (pinch + pose proxy) as primary causal input to per-agent local tiny MLPs.
- MLPs output spring targets and stiffness for hybrid DOM "limbs" (physical UI elements) + canvas force visualization.
- Multi-agent competition: 4 agents control groups of spring-mass limbs racing to capture a drifting energy orb.
- DeviceOrientation supplies secondary global bias to the energy and MLP inputs.
- Champion genome is sealed to IndexedDB; low-fitness agents receive mutated copies of the champion (sealed genome transfer).
- Embodiment is hybrid DOM cards that are physically simulated + Canvas2D energy field — not lattices, residuals, NCA, or pure particles.

Leaves residual embeddings, density lattices, attention graphs, pure NCA, spectral/audio residuals, pointer-history fields, and volumetric injection. Expands the under-explored axes of true WebXR hand as causal input, local MLP controlling physical UI elements, multi-agent competition with sealed genome transfer, and persistent IndexedDB.

## Architecture
Single self-contained `index.html`. Main thread runs tiny MLP forward passes, spring-mass integration, Canvas2D draw, and DOM positioning. WebXR session request with hand-tracking optional feature (desktop falls back to pointer as hand proxy). IndexedDB object store for sealed genomes. Orientation permission button. Fully offline after load.

## Expected outcome
Enable orientation or use pointer as hand. Limbs (DOM cards) spring toward MLP-predicted targets biased by hand pinch/position and tilt. Fitness accumulates for limbs near the energy orb. Every ~4 s the champion genome mutates into weaker agents. Seal button persists the champion. Interactive and graceful degradation.

## Mechanics
- Genome: Float32Array for MLP weights (5 inputs → 8 hidden tanh → 2 outputs) + biases.
- Inputs: tiltX/Y, handX-0.5, handY-0.5, pinch.
- Outputs drive target offset and stiffness for each limb.
- Physics: simple spring + damping on DOM-positioned limbs.
- Evolution: sort by fitness; mutate champion into agents below 60 % of best.
- Seal: write genome + fitness + timestamp to IndexedDB.

## Failure modes
- No WebXR → pointer proxy fully functional.
- Orientation denied → zero tilt, still interactive.
- IndexedDB blocked → in-memory only.
- Low performance → reduce LIMBS_PER.

## Building blocks
Full WebXR hand joint reference spaces driving per-joint MLPs; WebGPU compute shader for all spring integrations; WebRTC multiplayer shared sealed genomes; OPFS persistence of entire population state.

## V01D landing
Spatial hand-mlp-physical-ui-arena skill under `void-live-deploy/skills/`; testable via champion fitness rising under fixed hand pattern, sealed genome round-trip, and hand pinch visibly stiffening limbs.
