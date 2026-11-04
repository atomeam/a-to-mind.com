# F532 Orientation-MLP Ising Lattice Mind

## Concept
Novel combination: a 2D Ising model lattice (previously unused kernel: Metropolis-Hastings spin flips with nearest-neighbor energy, ferromagnetic coupling, external field; not SIR contact process, not sandpile toppling, not reaction-diffusion, not Lenia, not Langton's ant, not PSO, not attention, not reservoir, not decision-tree, not WebAudio, not WebRTC-primary) as the embodied mind substrate. A local pure-JS tiny MLP takes DeviceOrientation (or pointer velocity fallback) history as causal input and outputs the inverse temperature β (controls order/disorder) and external field h (bias). Absolute-positioned Verse DOM host cards sample local magnetization (average spin), morph their scale/hue/content according to domain (up/down), and can be dragged to inject spin flips or field bias. High fitness (magnetization magnitude or criticality measure) or manual seal hashes the MLP weights + current params into IndexedDB; BroadcastChannel enables multi-tab sealed genome adoption. Fully self-contained, offline after first load, progressive.

This deliberately leaves the recent cluster of sensor-driven local models (RNN/MLP/decision-tree/reservoir) + WebGPU physics/attention kernels + WebAudio resonators + WebRTC genome competition with DOM probes/portals (F523–F531). Ising Metropolis + orientation-MLP parameter control + host-card hybrid embodiment + sealed transfer is previously unused.

## Architecture
- Single self-contained index.html.
- Canvas2D grid (48x48) for Ising lattice; each cell spin +1 or -1.
- Update: Metropolis: pick random site, compute ΔE = 2*spin*(J*sum_neighbors + h), accept flip with min(1, exp(-β*ΔE)).
- Local MLP: 4 inputs (orient beta_proxy, gamma, dbeta, dgamma or pointer dx/dy), hidden 8, outputs 2 (β clamped [0.1,2.0], h clamped [-1,1]). Weights random init, simple reward update on fitness delta.
- 6 DOM host cards: absolute, sample nearby 5x5 magnetization, set background hue (red for + , blue for -), scale by |m|, label "Domain N: m=..".
- Drag cards: on release, inject flips or set local h bias at canvas coords under card.
- Seal button: SHA-256 of JSON(weights + β h + fitness) → IndexedDB store 'f532'; BroadcastChannel 'f532-ising' post for other tabs to adopt if better fitness.
- Status overlay: grid size, current β/h, last seal, magnetization.
- Controls: start orientation (permission), seal, reset lattice (random or ordered), fitness mode (magnetization vs energy).

## Expected outcome
Interactive spatial mind: lattice evolves magnetic domains driven by how the user holds the device (orientation sets temperature/field); host cards morph and can be used to intervene by flipping regions; sealing and multi-tab genome transfer works; runnable offline; graceful pointer fallback if no orientation.

## Mechanics
- Orientation events update MLP inputs; MLP forward pass every 200ms sets β/h.
- Lattice steps: 200 Metropolis trials every 40ms.
- Cards position fixed or lightly attracted to high |m| regions.
- Training: if fitness improves, small Hebbian/reward weight update.
- Seal on button or auto on fitness > threshold.

## Failure modes
- No DeviceOrientation → pointer velocity as input, status note.
- Low-end device → reduce grid to 32x32, fewer trials.
- IndexedDB/BroadcastChannel blocked → local only.
- Too cold → frozen domains; too hot → random.

## Next building blocks
- True WebGPU compute shader for parallel Metropolis or heat-bath updates.
- WebXR gaze as field bias cursor.
- Multi-agent competition with different genomes on sub-lattices.
- Persistent OPFS field snapshot of spin configuration.

Dominant prior cluster branched from: sensor-driven (orientation/speech/XR/accel) standard local models (RNN/MLP/decision-tree/reservoir) + WebGPU physics/attention kernels + WebAudio + WebRTC genome competition with DOM probes/portals (F523–F531).

**Void is now Verse everywhere.**
