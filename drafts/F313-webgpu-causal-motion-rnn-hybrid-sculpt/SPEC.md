# F313 — WebGPU Causal Motion RNN Hybrid Sculpt

**Ledger ID**: F-313 (frontier series)

## Concept
Online-learning Elman RNN (weights updated every frame from residual) driven by DeviceMotionEvent acceleration (primary causal input) + pointer. RNN output injects force into a WebGPU compute particle kernel (512 particles). Particles and force jointly sculpt absolute-positioned DOM cards (hybrid embodiment). Champion genome seals to IndexedDB; exportable as copyable JSON for offline sealed transfer. Fully offline single file with canvas fallback.

## Novel combination / Branching
Deliberately leaves the recent cluster of static forward MLP/RNN competitive DOM orbs/arenas, orientation/gaze/WebRTC sealed transfer, and pure emergent physics (slime/LBM/particle-life/attention-wave).

Moves onto:
- **Online local learning** (Hebbian residual updates on RNN, not frozen forward pass)
- **DeviceMotion acceleration** as causal input (distinct from orientation/gaze)
- **WebGPU compute particle kernel** as active sculptor of hybrid DOM cards
- Persistent IndexedDB + clipboard JSON sealed genome transfer (no WebRTC this iteration)
- Hybrid canvas particles + DOM physical cards

Not a variation of F311 (WebRTC orientation MLP arena), F309 (gaze RNN orbs), F307/F310 (MLP physics or particle-life DOM), or F312 (attention wave).

## Architecture
- Single `index.html`.
- RNN 4→6→2 Elman, online update lr=0.01 on output weights.
- WebGPU compute dispatch updates particle pos/vel with force uniform.
- 6 DOM cards integrate velocity from RNN + noise, CSS morph.
- Seal: SHA-256 prefix of genome JSON → IndexedDB.
- Export/inject via textarea for sealed transfer.

## Expected outcome
Shaking the device or dragging the pointer trains the RNN in real time; particles swirl and cards are pushed/rotated according to learned force. Seal/load preserves policy. Runnable offline; WebGPU optional.

## Failure modes
- No WebGPU → 2D canvas particle fallback, DOM still active.
- DeviceMotion permission denied or desktop → pointer-only input.
- IndexedDB blocked → in-memory only.
- High particle count → drop to 256 if needed.

## Building blocks for next
Online RNN + WebGPU force kernel + hybrid DOM sculpt + sealed JSON transfer. Next: true WebXR hand skeletal as additional input channels, multi-peer WebRTC of sealed online genomes, or larger compute neural kernel.

## V01D landing
Skill under `void-live-deploy/skills/mini/webgpu-motion-rnn-sculpt/`; testable by motion/pointer changing card velocities and particle density, seal/load identity, online fitness improving with sustained input.
