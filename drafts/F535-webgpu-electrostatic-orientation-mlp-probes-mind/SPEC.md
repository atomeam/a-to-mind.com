# F535 — WebGPU Electrostatic N-Body + Orientation-Causal MLP DOM Probes Mind

## Concept
Novel combination: a particle system under pure electrostatic (Coulomb) forces simulated in a WebGPU compute shader (previously unused kernel — not attention, not CA/Lenia/Ising/SIR, not fluid/wave/SPH, not reservoir, not PSO). DeviceOrientation (beta/gamma tilt) is the primary causal input to a local tiny MLP that interprets aggregate field statistics (mean energy, charge imbalance, tilt) and outputs morph + offset parameters applied to absolute-positioned Verse DOM probe cards. The probes are hybrid embodiments: they float at cluster centroids or policy-driven offsets, visually morph (scale, hue, blur), and can be clicked to reward the policy. High-fitness MLP + charge genomes are sealed (SHA-256) into IndexedDB and adopted across tabs via BroadcastChannel. Progressive: full Canvas2D CPU fallback if no WebGPU. Fully offline after load.

This deliberately leaves the recent cluster of sensor-driven lattices/CA (Ising/Lenia/SIR F531–F533), attention-particle policies (F534), reservoir/WebRTC genome competition (F530), and prior WebXR-hand RNN or standard MLP/decision-tree DOM agents.

## Architecture
- Single self-contained index.html.
- ~192 particles: pos, vel, charge (±1). Compute shader (or CPU) applies pairwise Coulomb forces (softened), Euler integration, damping, bounds.
- Orientation: DeviceOrientationEvent → normalized beta/gamma as causal features + optional global force bias.
- Local MLP: 5 inputs (beta_norm, gamma_norm, energy_norm, pointer_nx, pointer_ny), hidden 6 ReLU, 4 outputs (scale 0.7–1.6, hue 0–360, offset_x, offset_y). Weights evolved on click reward via simple mutation.
- 5 Verse probe cards: absolute, follow either policy offset or nearest high-|charge| particle cluster; CSS vars from policy + local density.
- Click probe: +fitness, mutate MLP if improved.
- Seal: SHA-256 of {weights, charges_sample, fitness} → IndexedDB 'f535'; BroadcastChannel 'f535-electro' for multi-tab adopt-if-better.
- Status overlay: particle count, energy, orientation support, last seal, fitness.
- Controls: toggle force strength, seal, reset, request orientation.

## Expected outcome
Interactive spatial mind: particles swarm and cluster under mutual electrostatic repulsion/attraction modulated by device tilt; Verse probes morph and drift according to the local MLP's continuous interpretation of the field + tilt; clicks train the policy; sealing and multi-tab genome transfer works; runnable offline; graceful on desktop (pointer-only) and mobile.

## Mechanics
- Orientation/pointer update features each frame.
- Particle step ~60 Hz in compute or rAF.
- MLP forward every ~120 ms sets CSS custom properties and probe transforms.
- Training: on click, if fitness rises, apply small Gaussian mutation and keep better after short eval.
- Probes lightly interactive (hover highlight).
- Failure modes: no WebGPU → Canvas2D N-body (N=64); orientation denied → pointer + zero tilt; IndexedDB blocked → in-memory only.

## Building blocks
Electrostatic N-body WebGPU kernel as mind substrate, orientation-causal local MLP that hybrid-embodies physical UI probes, sealed multi-tab transfer. Next: true WebXR gaze as ray-cast charge injector + OPFS field snapshot + multi-device WebRTC genome.

V01D landing: spatial electrostatic-policy skill under void-live-deploy/skills/electrostatic-mlp-probes.js; testable via tilt → probe morph fidelity and seal hash match.

**Void is now Verse everywhere.**
