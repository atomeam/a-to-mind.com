# F274 — Reservoir Gesture DOM Chain

## Concept
Novel combination: a fixed-random Echo State Network (reservoir computing) running in a Web Worker that continuously ingests a causal stream of DeviceOrientation + pointer velocity. Only the linear readout is trained online (LMS) to predict the next gesture delta. Reservoir state energy and prediction residual modulate the spring constants, damping, and target offsets of a chain of 7 floating DOM anchor elements that exert simple spring forces on each other. A Canvas2D background renders a fading input field. Dragging an anchor injects an external bias into the input stream, closing a physical-memory loop. IndexedDB seals the readout weights. Fully offline, hybrid DOM+canvas embodiment.

## Branch away from
Dominant recent cluster (F260–F272): WebGPU softbody/attention/cloth/NCA/MLP residual lattices, WebXR gaze/hand genome arenas, sealed competitions, orientation-direct physics, fluid-evolving-audio, spectral trajectories. Also branches from F273’s trained RNN memory field + residual portals. Core is under-explored reservoir (fixed recurrent dynamics + trained readout) driving a spring-connected physical DOM chain via gesture prediction residual — not force-law lattices, not evolutionary genomes, not attention weights, not pure residual predictors, not diffused deposit fields.

## Architecture
- Single self-contained `index.html` (inline CSS/JS).
- Main thread: pointer + DeviceOrientation listeners, 7 absolute-positioned DOM anchors with JS spring-mass integration (Verlet-like), Canvas2D for background input visualization, UI for seal/load/reset.
- Blob Worker: Echo State Network (reservoir size 32, spectral radius ~0.9, input scaling, leaky integration). Online LMS readout training on (reservoir_state → next_gesture). Returns residual magnitude and state summary each step.
- DOM chain: anchors connected in a line; residual increases stiffness (tighter chain when prediction is poor), state energy biases target positions.
- IndexedDB: seal/load readout weights + bias.
- Progressive: orientation if permitted; pointer always; no external deps.

## Expected outcome
Interactive hybrid canvas: move the pointer or tilt the device. The reservoir “remembers” recent dynamics and predicts the next move; residual tightens or loosens the floating anchor chain. Drag anchors to bias the input. Seal the learned readout. Offline-capable, expands reservoir + physical DOM embodiment building blocks.

## Mechanics
- Reservoir: N=32, W_res random sparse, leak=0.3, spectral radius scaled once at init.
- Input: [orient.beta, orient.gamma, vx, vy, speed] normalized.
- LMS: learning rate 0.01, predict next (vx, vy).
- Chain: 7 nodes, rest length ~80px, k = 0.08 + residual*0.4, damping 0.92.
- Background: simple particle or density trail of pointer.
- Step rate ~40 Hz.

## Failure modes
- Worker blocked → static chain, no learning.
- No orientation → pointer-only input (still works).
- IndexedDB denied → in-memory only.
- Low FPS: reduce reservoir size or chain integration steps.

## Building blocks
Reservoir computing substrate, online readout for causal prediction, residual-driven spring DOM chain, hybrid canvas+DOM embodiment, sealed weights. Next: WebGPU compute for larger reservoir or multi-reservoir hierarchies; WebRTC shared reservoir state.

## V01D landing
Spatial forager skill under `void-live-deploy/skills/mini/reservoir-gesture-chain.js`; testable via residual→stiffness mapping and readout seal/load restoring prediction behavior.
