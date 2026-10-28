# F279 DeviceOrientation Causal RNN Physical UI Arena

## Concept
DeviceOrientation tilt (beta/gamma) is the primary causal input to per-agent tiny Elman-style RNNs. Each RNN outputs force biases that, together with the raw tilt-as-gravity, drive a simple 2D physics simulation of hybrid DOM agents (absolutely positioned cards). Agents collide, bounce, and on collision probabilistically transfer a sealed genome (RNN weights + hidden state) from winner to loser with light mutation. State persists via localStorage (IndexedDB-ready). Fully offline, no network, single file.

## Branch
Deliberately leaves the recent cluster of WebGPU compute kernels, attention/residual lattices, NCA, spectral/audio residuals, volumetric injection, and pure pointer-history fields (F271–F278). Focuses on under-explored DeviceOrientation as causal driver + local tiny RNN controlling physical UI DOM elements + sealed genome transfer on physical collision + hybrid DOM embodiment.

## Interaction
- Tap "Enable Orientation" (required on iOS).
- Tilt the device: agents feel gravity + RNN-modulated intent forces.
- Collisions transfer genomes (visual flash on winner).
- Add/Reset agents. State auto-saves.

## Failure modes
- Orientation permission denied or unsupported → falls back to zero tilt (agents still bounce via residual velocity and can be observed).
- Too many agents (>30) → simple O(n²) collisions slow; acceptable for prototype.
- No WebGPU/WebXR in this draft (intentionally branched).

## Building blocks added
DeviceOrientation causal stream, online tiny RNN per physical agent, collision-triggered sealed genome transfer, hybrid DOM physics cards, persistent local state.
