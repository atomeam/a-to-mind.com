# F534 — WebGPU Attention Particle Swarm + Local Policy DOM Morpher Mind

## Concept
Novel combination: a particle swarm simulated with soft attention mechanics (each particle attends to a global mean plus local neighbors via distance-weighted influence, previously unused — not lattice CA/Ising/Lenia/SIR, not reservoir ESN, not pure MLP policy on DOM, not fluid, not wave, not NCA) as the embodied mind substrate. A local pure-JS tiny MLP policy takes swarm aggregate statistics (mean position, variance, energy) plus pointer/orientation as causal input and outputs morph parameters (scale factor, hue shift, blur radius, opacity pulse) that are applied in real time to absolute-positioned Verse DOM host cards. The cards physically change (CSS transform, filter, background) in response to the policy's continuous "reasoning" over the swarm state. User clicks on cards provide a sparse reward that evolves the policy weights via a simple evolutionary strategy (mutation + selection on fitness). High-fitness policies can be sealed (SHA-256 hash of weights) into IndexedDB with BroadcastChannel multi-tab adoption. Fully self-contained, offline after first load, progressive: Canvas2D particle loop primary, WebGPU compute shader path reserved and stubbed for larger N.

This deliberately leaves the recent cluster of sensor-driven lattices/CA (Ising, Lenia, SIR) + MLP param control + DOM probes (F531–F533) and reservoir/WebRTC genome competition (F530). Attention-particle swarm as mind + local policy that morphs the host UI physically + sealed transfer is previously unused.

## Architecture
- Single self-contained index.html.
- Canvas (full viewport) for 180 particles; each has pos, vel, attention_weight.
- Update: pointer as soft attractor; each particle computes attention to mean of all (global) and 4 nearest (local approx), applies force; simple Euler integration with damping.
- Local MLP policy: 6 inputs (norm_mean_x, norm_mean_y, var_x, var_y, pointer_norm_x, energy), hidden 8 ReLU, outputs 4 (scale [0.6-1.8], hue [0-360], blur [0-12], pulse [0.4-1.0]). Weights random init ±0.3, evolved on reward.
- 6 DOM host cards: absolute positioned, styled with CSS vars set from policy outputs + local particle density under card (sampled). Label shows local energy.
- Click on card: +fitness, small ES mutation of policy weights if fitness improved.
- Seal button: SHA-256 of JSON(weights + fitness) → IndexedDB store 'f534'; BroadcastChannel 'f534-attention' for other tabs to adopt if superior.
- Status overlay: particle count, current policy outputs, last seal, fitness.
- Controls: toggle attractor strength, seal, reset swarm, start orientation (optional, pointer always works).
- Progressive: if WebGPU available, note and future path for compute shader particle update.

## Expected outcome
Interactive spatial mind: particle swarm flows and clusters under user pointer with attention-driven cohesion; the Verse host cards continuously morph in scale, color, and blur according to the local policy's interpretation of the swarm; clicks train the policy so cards respond more usefully over time; sealing and multi-tab genome transfer works; runnable offline; graceful on all devices.

## Mechanics
- Pointer/orientation update features each frame (~60 Hz).
- Particle step: attention forces + integration.
- Policy forward every 100 ms sets CSS custom properties on :root and individual cards.
- Training: on click reward, if new fitness > best, mutate weights (Gaussian noise 0.05) and keep if better after 2s eval; else revert.
- Cards can be lightly dragged; position influences local sampling.
- Failure modes: no WebGPU (Canvas fine), IndexedDB blocked (in-memory), high particle count on low-end (reduce to 80).

## Building blocks
Attention-particle swarm mind, local policy that physically morphs host UI, sealed multi-tab transfer. Next: true WebGPU compute for 10k particles + WebXR gaze as attractor + OPFS trajectory log.

V01D landing: spatial attention-policy skill under void-live-deploy/skills/attention-particle-policy.js; testable via pointer → card morph fidelity and seal hash match.

**Void is now Verse everywhere.**
