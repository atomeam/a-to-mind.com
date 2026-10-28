# F307 — WebGPU MLP Physics DOM Pushers

## Concept
True WebGPU compute shader runs a multi-particle physics kernel (velocity/position update with damping and bounds). A population of local tiny MLPs (5→8→3) process DeviceOrientation (beta/gamma), pointer position, and field energy to output global force biases that modulate the compute kernel. Hybrid DOM cards are physically pushed by nearby particle velocities (readback). Agents compete on engagement fitness; champion genome seals to IndexedDB and can spawn mutated offspring. Progressive: CPU Canvas2D fallback if no WebGPU. Fully offline, single-file.

## Branching
Deliberately leaves the recent cluster of Canvas2D local minds (RNN/reservoir/Hebbian/attention/NCA/slime/genome-orient competition, decision-tree orbs, WebXR hand stubs, spectral/audio). Moves onto under-explored axes: **actual WebGPU compute shader for physics kernel** (not just path noted), local tiny MLP controlling the GPU forces, DeviceOrientation as continuous causal input to the neural kernel, hybrid DOM+canvas embodiment where GPU particles push physical UI cards, multi-agent competition with sealed genome transfer via IndexedDB.

## Mechanics
- Particles: N=512 stored in GPU storage buffer; compute shader applies force from uniform (MLP output) + damping + bounce.
- MLP: 5 inputs (orient beta/gamma, pointer x/y, field variance) → 3 outputs (fx, fy, bias); tanh; serializable weights.
- Competition: 3 agents; fitness accumulates from output magnitude + reward button; best steers the force each frame.
- DOM: 4 absolute cards; nearby particle velocities accumulate push; drag overrides; claim highlight for champ.
- Persistence: IndexedDB object store for champion serialized weights.
- Readback: every 4 frames for DOM sync and CPU render.

## Failure modes
- No WebGPU (adapter/device fail or unsupported) → CPU Euler fallback, still interactive.
- DeviceOrientation permission denied or unsupported → zero tilt (pointer + reward still train).
- IndexedDB private/incognito or quota → seal fails silently, in-memory only.
- High N or slow readback → FPS drop (capped dispatch, infrequent map).
- No pointer/orient → idle forces still evolve via reward.

## Building blocks for next
WebGPU compute physics kernel + neural force uniform, MLP genome seal, hybrid GPU-particle → DOM push, orientation-causal neural input. Next: per-particle MLP or attention kernel, WebXR gaze as extra input channel, WebRTC shared force field / genome exchange, larger compute grid.

## V01D landing
webgpu-mlp-physics-dom skill under void-live-deploy/skills/mini/; testable by orientation tilt force change, seal/load weight roundtrip, offspring mutation variance, card push from particle velocity, reward fitness increment.
