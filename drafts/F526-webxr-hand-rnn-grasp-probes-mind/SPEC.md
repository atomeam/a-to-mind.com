# F526 WebXR Hand RNN Grasp Probes Mind

## Concept
Novel combination: true WebXR hand tracking (immersive-ar or vr session with hand-tracking feature, progressive fallback to pointer "virtual hand") as the sole causal driver for a population of local tiny RNNs. Each RNN controls the velocity, rotation, and visual style of an absolute-positioned DOM Verse probe card. Probes have sealed genomes (RNN weight vectors). When the hand (or pointer) is near a probe, a grasp interaction activates: the probe is attracted/springs to the palm joint and can be moved; on release or explicit seal, the genome is hashed (SHA-256) and stored in IndexedDB + BroadcastChannel for multi-tab adoption (other tabs replace lowest-fitness probe). Pure local JS + DOM physics, no WebGPU kernels, no continuous field, no NCA, no sandpile, no ants, no pointer-history residual. Fully offline after load.

This deliberately leaves the recent cluster of WebGPU discrete/continuous physics kernels (Langton's ant F524, PSO F523, sandpile SOC F520, vectorfield F519, embedding diffusion F521, wave membranes) combined with local MLP/RNN policies and DOM portals or sensor-driven agents (accel F525, orientation F522). Hand-grasp causal RNN-controlled physical UI probes with contactless sealed multi-tab genome transfer is previously unused hybrid embodiment.

## Architecture
- Single self-contained index.html.
- 6 Verse probe cards (absolute, CSS transforms, neon borders, grasp highlight).
- WebXR: requestSession with optional hand-tracking; in XR frame, extract palm/wrist joints → low-pass filtered position/velocity → each probe's RNN (input 6 → hidden 8 → output 4: vx, vy, rot, style). Fallback: pointer position/velocity as synthetic hand.
- Hidden state carries motion memory.
- Fitness: how well probe stays near screen center or tracks hand + stability + grasp success count.
- Grasp: if hand within threshold, probe follows with spring force; click or button seals best or grasped probe's genome.
- Seal: crypto.subtle.digest SHA-256 on JSON.stringify(weights + metrics) → IndexedDB, BroadcastChannel post.
- Progressive: status shows XR support, sensor/hand state, probe count, last seal.

## Expected outcome
Interactive spatial mind: moving the hand (or pointer) makes probes swarm and morph according to their RNN genomes; grasping and sealing works; multi-tab genome transfer; runnable offline; graceful desktop fallback.

## Mechanics
- Hand/pointer: position deltas, low-pass filtered.
- RNN: simple tanh recurrent, weights random init per probe.
- Physics: pos += vel; vel = rnn_out * scale + damping + optional spring to hand if grasping.
- Style: hue from hidden state, scale from fitness, glow on grasp.
- Seal: on button or probe click (prefer grasped).
- Fallback: always pointer mode if no XR.

## Failure modes
- WebXR unsupported or permission denied → pointer synthetic hand mode, status note.
- BroadcastChannel or IndexedDB blocked → local only, unattested toast.
- Too much motion → clamp velocities.
- XR session exit restores 2D canvas.
- iOS/Android XR support limited; pointer works everywhere.

## Next building blocks
- Full multi-hand independent control + gaze as secondary causal input.
- OPFS persistence of full population + hidden states + XR poses.
- WebGPU for larger probe counts if desired.
- WebRTC datachannel for cross-device sealed genome competition.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations plus sensor-driven agents (F518–F525).

**Void is now Verse everywhere.**
