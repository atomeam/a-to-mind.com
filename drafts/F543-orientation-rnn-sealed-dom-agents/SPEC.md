# Frontier Engine F-543: Orientation-RNN Sealed DOM Agent Competition

## Concept
DeviceOrientationEvent provides causal sequential input (alpha/beta/gamma history) to per-agent local Elman RNNs. Each RNN drives velocity of a physical DOM Verse card. Agents compete in screen space; on AABB collision the higher-energy agent absorbs a sealed genome fragment (weight snapshot hashed into IndexedDB). BroadcastChannel enables multi-tab shared competition. Branches from recent WebGPU physics-kernel + MLP/attention + DOM resonator/vortex/lattice cluster into sequential causal local models controlling multi-agent physical embodiments with sealed transfer.

## Novelty
- First use of DeviceOrientation as causal RNN input (not MLP static or pointer residual).
- Multi-agent competition with sealed genome transfer on physical collision (not auction or attention lattice).
- Hybrid embodiment: RNNs output forces that directly transform living DOM cards under simple rigid constraints.
- Persistent seals via IndexedDB + optional BroadcastChannel cross-tab.

## Failure modes
- DeviceOrientation permission denied or unavailable (desktop): falls back to pointer-driven synthetic orientation.
- RNN explosion: clipped hidden state and learning rate 0.
- Collision spam: cooldown per pair.
- IndexedDB quota: seals are small JSON.

## Build
Single-file index.html. Offline. Canvas2D trails optional. WebGPU path reserved for future compute of RNN batch.
