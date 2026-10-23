# F-247 · WebXR Gaze RNN DOM Portals

## Concept
Novel combination deliberately branching from the recent residual lattice / softbody / entanglement / acoustic-physics cluster (F239–F246):

- True WebXR gaze / head-pose ray (viewer pose from XRFrame; optional hit-test) as the sole primary causal input. Pointer + DeviceOrientation simulate gaze in flat mode.
- Local tiny RNN (one recurrent hidden state) running in a Web Worker maps gaze features (direction, angular velocity, dwell accumulator) to portal control signals: attraction, scale, activation.
- Hybrid embodiment: real DOM `<div class="portal">` elements whose CSS transforms, opacity and filter are driven by the RNN outputs. No particle lattice, no spring softbody, no energy field.
- Multi-agent competition: each portal accumulates a dwell score when the gaze ray is near it. Highest-score portal's RNN genome is sealed (SHA-256) to IndexedDB and offered via BroadcastChannel for same-origin multi-tab transfer; receiver validates hash before injection.
- Leaves residual predictors of field energy, volumetric injection, pure NCA, spectral residuals, pointer-history deposits, and physics kernels. Expands under-explored axes of true WebXR gaze as causal input + local RNN controlling pure physical DOM elements + sealed multi-tab genome competition.

## Architecture
Single self-contained index.html. Main thread samples gaze (XR or simulated), steps portal physics (simple Verlet on DOM positions), queries DOM for dwell, posts features to blob Worker. Worker runs RNN + hill-climb on fitness (dwell coherence), returns best weights. BroadcastChannel "F247-genomes" for transfer. IndexedDB seal. Canvas optional for ray visualization only.

## Expected outcome
Enter XR (or use pointer/tilt). Gaze (or simulated) attracts and activates floating DOM portals. Portals compete; best genome seals and can be transferred to another tab. Fully interactive offline after first load. Graceful degradation.

## Mechanics
- Gaze: ray origin + direction; dwell += 1 when ray within threshold of portal center.
- RNN: input 5 (gaze dir xy, ang vel, dwell, bias) → hidden 6 → output 3 (attr, scale, act). Recurrent hidden carried.
- Portals: 6–8 divs; position updated by attraction toward gaze point; CSS scale/opacity from outputs.
- Fitness: sum of dwell on "owned" portals; mutate if worse.
- Seal: digest of weights + hidden → IndexedDB "F247-champ".

## Failure modes
No WebXR → pointer/orientation complete. No Worker → static control. BroadcastChannel unavailable → local only. IndexedDB blocked → memory seal. Session denied → 2D remains usable.

## Building blocks
Full XR hit-test binding to portals, multi-peer WebRTC sealed transfer of RNN state, WebGPU compute for parallel portal RNNs, OPFS persistence of gaze trajectories. Next: gaze-triggered local model that opens sealed portals.

## V01D landing
Spatial gaze-RNN skill under void-live-deploy/skills/; testable via gaze→portal attraction and sealed hash round-trip after BroadcastChannel transfer.
