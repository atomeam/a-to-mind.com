# F530 WebRTC Reservoir Genome Competition Mind

## Concept
Novel combination: a population of absolute-positioned Verse DOM agent cards controlled by local Echo State Networks (reservoir computing: fixed sparse random recurrent reservoir + linear trainable readout). Causal inputs are pointer position/velocity (always) plus optional DeviceMotionEvent acceleration. Agents compete on a fitness that rewards spatial coverage, stability, and user click energy. Higher-fitness readout genomes (the only trainable part) are sealed with SHA-256 and transferred either via BroadcastChannel (multi-tab) or true WebRTC DataChannel (multi-device, with copy-paste offer/answer signaling for no-server offline-capable demo). Receivers verify the hash and adopt a lightly mutated copy only if fitness is superior. Full population persists in IndexedDB. Canvas2D overlay visualizes reservoir activity as a particle cloud whose density follows mean |state|. Pure browser-native, progressive, fully offline after load except for optional cross-device WebRTC.

This deliberately leaves the recent cluster of standard MLP/RNN/decision-tree policies driving DOM probes under DeviceOrientation/Speech/WebXR/Accel, WebGPU continuum or discrete kernels (CA, sandpile, PSO, attention, wave, Gray-Scott, Langton, embedding diffusion), and WebAudio harmonic resonators. Reservoir computing (non-trainable recurrent dynamics + readout only) + true WebRTC P2P sealed genome transfer is previously unused.

## Architecture
- Single self-contained index.html.
- 6 Verse agent cards (absolute, CSS transforms, neon borders colored by readout-driven hue).
- Reservoir: N=24 units, spectral radius ~0.9, sparsity 0.1, leak 0.3; state updated each tick from input + recurrent.
- Readout: 24→4 linear weights → [vx, vy, rot, hue]; evolved by simple ES or Hebbian-style reward on clicks.
- Inputs: [norm_x, norm_y, dx, dy, ax, ay] (motion fallback to 0).
- Fitness: grid coverage + inverse collisions + click rewards + center bias.
- Transfer: BroadcastChannel 'f530-reservoir'; WebRTC DataChannel for peers (createOffer / setRemoteDescription via textareas).
- Seal: crypto.subtle.digest SHA-256 on JSON(readout + fitness) → IndexedDB 'f530'.
- Visualization: 120 Canvas2D particles driven by reservoir mean activity.
- Status: peer state, last seal, avg fitness, motion support.

## Expected outcome
Interactive spatial mind: agents swarm according to their reservoir readouts; user clicks reward and bias evolution; sealing and multi-tab / multi-device genome transfer works with hash verification; canvas shows reservoir life; runnable offline; graceful pointer-only mode.

## Mechanics
- Pointer/motion update features each frame.
- Reservoir tick ~30 Hz; readout produces velocity.
- Physics: pos += vel; soft repulsion; damping.
- Click on card: positive reward to that agent's fitness and small readout nudge.
- Seal button or long-press best agent posts genome.
- WebRTC: local offer generation, paste remote answer to connect; genomes auto-exchange on higher fitness.

## Failure modes
- WebRTC blocked or no peer → BroadcastChannel + IndexedDB only.
- DeviceMotion denied → pointer-only, status note.
- IndexedDB unavailable → in-memory only.
- Too much motion → clamp velocities.
- Private browsing → no persistence.

## Next building blocks
- OPFS recording of reservoir trajectories.
- WebGPU for larger reservoirs or parallel fitness eval.
- Gaze as additional input feature via WebXR.
- Hybrid readout with tiny online-learned MLP.

Dominant prior cluster branched from: sensor-driven (orientation/speech/XR/accel) standard local models (RNN/MLP/decision-tree) + WebGPU physics/attention kernels + WebAudio resonators (F522–F529).

**Void is now Verse everywhere.**
