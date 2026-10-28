# F309 — WebXR Gaze RNN Persistent Orb Field

## Concept
True WebXR (progressive immersive-vr head-pose gaze) or DeviceOrientation/pointer as continuous causal input to a population of local tiny Elman RNNs. The RNNs drive velocity biases on a hybrid set of DOM orbs + canvas field. Agents compete on gaze-proximity + click reward fitness. Champion genome seals to IndexedDB; field state (orb positions + genomes) persists across reloads. Offline-capable single file.

## Branching
Deliberately leaves the recent cluster of emergent physics simulations (LBM fluid wing evolution, slime-mold rail networks, Lenias gait, WebGPU particle physics kernels, sonar cartography, Hebbian spatial morph) and pure genome-orient competition arenas. Moves onto under-explored axes: **true WebXR gaze as primary input channel**, temporal RNN memory (not static MLP), persistent IndexedDB shared field of hybrid DOM+canvas embodiments, multi-agent competition with sealed genome transfer, no fluid/particle/NCA physics kernel.

## Mechanics
- 4 competing RNNs (6→8→2 Elman, tanh); input = normalized gaze xy, velocity, orient beta/gamma.
- 8 absolute DOM orbs; each bound to an agent; velocity integrated from RNN output + damping + bounce.
- Fitness: continuous proximity to gaze point + discrete click reward.
- Persistence: IndexedDB object stores for current field snapshot and sealed genomes.
- WebXR: requestSession immersive-vr; viewer pose matrix drives gaze proxy; falls back to pointer/DeviceOrientation.
- Evolve button: mutate non-champ from champ, decay fitness.

## Failure modes
- No WebXR (desktop/no headset) → pointer + DeviceOrientation still fully interactive.
- IndexedDB blocked (incognito/quota) → in-memory only; seal/load no-op.
- DeviceOrientation permission denied → zero tilt component.
- High DOM count or continuous save → minor jank (capped to 8 orbs, 8 s interval).

## Building blocks for next
WebXR head-pose → RNN temporal control, IndexedDB persistent multi-agent field, hybrid DOM orb + canvas density, sealed genome round-trip. Next: full hand tracking skeletal input, WebRTC peer genome exchange, larger spatial grid in WebGPU, gaze-ray intersection with 3D orbs.

## V01D landing
webxr-gaze-rnn-idb skill under void-live-deploy/skills/mini/; testable by gaze/pointer orb tracking, seal/load genome identity, fitness increment on proximity, field restore after reload, XR session mode switch.
