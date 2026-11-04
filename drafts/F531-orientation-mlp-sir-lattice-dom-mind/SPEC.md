# F531 Orientation-MLP SIR Lattice DOM Mind

## Concept
Novel combination: a discrete lattice of Susceptible-Infected-Recovered (SIR) epidemic dynamics (previously unused kernel: stochastic contact-process infection and recovery, not continuous RD/Gray-Scott/Lenia, not sandpile toppling, not Langton's ant, not PSO, not attention matrices, not reservoir, not decision-tree, not WebAudio, not WebRTC-primary) as the embodied mind substrate. A local pure-JS tiny MLP takes DeviceOrientation (or pointer velocity fallback) history as causal input and outputs the infection probability β and recovery rate γ. Absolute-positioned Verse DOM host cards sample local infection density, morph their scale/hue/content according to state (S green, I red, R blue), and can be dragged to inject "vaccination" (force S) or "infection" events. High fitness (controlled outbreak size or recovery fraction) or manual seal hashes the MLP weights + current rates into IndexedDB; BroadcastChannel enables multi-tab sealed genome adoption. Fully self-contained, offline after first load, progressive.

This deliberately leaves the recent cluster of sensor-driven local models (RNN/MLP/decision-tree/reservoir) + WebGPU physics/attention kernels + WebAudio resonators + WebRTC genome competition with DOM probes/portals (F523–F530). SIR contact process + orientation-MLP parameter control + host-card hybrid embodiment + sealed transfer is previously unused.

## Architecture
- Single self-contained index.html.
- Canvas2D grid (64x64) for SIR lattice; each cell 0=S, 1=I, 2=R.
- Update: for each I cell, infect random neighbors with p=β; recover with p=γ. (JS loop, WebGPU compute path reserved).
- Local MLP: 4 inputs (orient beta, gamma, dbeta, dgamma or pointer dx/dy), hidden 8, outputs 2 (β, γ clamped [0.01,0.5]). Weights random init, simple reward update on fitness delta.
- 6 DOM host cards: absolute, sample nearby 5x5 density, set background hue (green/red/blue mix), scale by activity, label "Host N: state".
- Drag cards: on release, inject S or I at canvas coords under card.
- Seal button: SHA-256 of JSON(weights + βγ + fitness) → IndexedDB store 'f531'; BroadcastChannel 'f531-sir' post for other tabs to adopt if better fitness.
- Status overlay: WebGPU note (fallback), grid size, current β/γ, last seal, infection fraction.
- Controls: start orientation (permission), seal, reset lattice, fitness mode (outbreak control vs recovery).

## Expected outcome
Interactive spatial mind: lattice evolves epidemic patterns driven by how the user holds the device; host cards morph and can be used to intervene; sealing and multi-tab genome transfer works; runnable offline; graceful pointer fallback if no orientation.

## Mechanics
- Orientation events update MLP inputs; MLP forward pass every 200ms sets β/γ.
- Lattice step every 50ms.
- Cards position fixed or lightly attracted to high-I regions.
- Training: if fitness improves, small Hebbian/reward weight update.
- Seal on button or auto on fitness > threshold.

## Failure modes
- No DeviceOrientation → pointer velocity as input, status note.
- Low-end device → reduce grid to 32x32.
- IndexedDB/BroadcastChannel blocked → local only.
- Over-infection → recovery boost.

## Next building blocks
- True WebGPU compute shader for parallel SIR update.
- WebXR gaze as infection cursor.
- Multi-agent competition with different genomes on sub-lattices.
- Persistent OPFS field snapshot.

Dominant prior cluster branched from: sensor-driven (orientation/speech/XR/accel) standard local models (RNN/MLP/decision-tree/reservoir) + WebGPU physics/attention kernels + WebAudio + WebRTC genome competition with DOM probes/portals (F523–F530).

**Void is now Verse everywhere.**
