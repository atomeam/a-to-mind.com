# F525 Accelerometer RNN Verse Probes Mind

## Concept
Novel combination: DeviceMotion (accelerometer + rotation rate) as the sole causal driver for a population of local tiny RNNs. Each RNN controls the velocity, rotation, and visual style (scale, hue, opacity) of an absolute-positioned DOM Verse probe card. Probes have sealed genomes (RNN weight vectors). User can drag probes, click to seal the best-tracking probe's genome (SHA-256 hash of weights + fitness), store in IndexedDB, and BroadcastChannel for multi-tab adoption. Other tabs replace lowest-fitness probe with incoming sealed genome. Pure DOM + JS physics, no WebGPU, no continuous field, no NCA, no sandpile, no ants, no pointer-history residual. Fully offline after load.

This deliberately leaves the recent cluster of WebGPU discrete/continuous physics kernels (Langton's ant F524, PSO F523, sandpile SOC F520, vectorfield F519, wave membranes, embedding diffusion, Gray-Scott, spectral, LBM, SPH) combined with local MLP/RNN policies and DOM portals. Motion-causal RNN-controlled physical UI probes with contactless sealed multi-tab genome transfer is previously unused hybrid embodiment.

## Architecture
- Single self-contained index.html.
- 5 Verse probe cards (absolute, CSS transforms, neon borders).
- DeviceMotionEvent (permission where needed) → low-pass filtered accel + gyro → each probe's RNN (input 6 → hidden 8 → output 4: vx, vy, rot, style).
- Hidden state carries motion memory.
- Fitness: how well probe stays near screen center or tracks a soft pointer attractor + stability.
- Seal button or click probe: hash genome, IndexedDB, BroadcastChannel post.
- Pointer drag moves probes manually; mouse as fallback motion source (synthetic accel from pointer velocity).
- Progressive: status shows sensor, probe count, last seal.

## Expected outcome
Interactive spatial mind: tilting/moving the device makes probes swarm and morph according to their RNN genomes; sealing and multi-tab genome transfer works; runnable offline; graceful desktop fallback.

## Mechanics
- Motion: accelerationIncludingGravity or acceleration + rotationRate, filtered.
- RNN: simple tanh recurrent, weights random init per probe.
- Physics: pos += vel; vel = rnn_out * scale + damping; rotation from gyro.
- Style: hue from hidden state, scale from fitness.
- Seal: crypto.subtle.digest SHA-256 on JSON.stringify(weights + metrics).
- Fallback: pointermove velocity → synthetic accel.

## Failure modes
- Motion permission denied or unsupported → pointer synthetic mode.
- BroadcastChannel or IndexedDB blocked → local only, unattested toast.
- Too much motion → clamp velocities.
- iOS requires user gesture for motion events.

## Next building blocks
- Full WebXR hand tracking as additional causal input for probe grasp.
- OPFS persistence of full population + hidden states.
- WebGPU for larger probe counts if desired.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations (F518–F524).

**Void is now Verse everywhere.**
