# F452: DeviceOrientation-Causal Local MLP Controlling Canvas Physical Agents with IndexedDB Persistence

## Concept
DeviceOrientationEvent provides causal input (tilt as environmental gravity) to a pure-JS tiny MLP. The MLP outputs a compensatory global force that is applied to a swarm of canvas-based physical agents (position/velocity with damping and bounce). User clicks in training mode supply sparse rewards that update the MLP weights online (simple REINFORCE-like rule). Weights persist across sessions via IndexedDB.

## Branch
Deliberately leaves the recent cluster of WebGPU NCA / LBM / PBF physics kernels, XR hand-tracking genome portals, orientation-MLP on DOM softbody, spatial memory palaces, and residual/attention lattices.

Novel combination: sensor (DeviceOrientation) → local tiny model (MLP) → hybrid embodied physical UI (canvas agents) + online learning + local persistence. Not pure simulation, not DOM softbody, not WebGPU compute kernel, not XR.

## Capabilities Expanded
- Local tiny models as controllers for physical UI elements
- DeviceOrientation as causal (not just display) input
- IndexedDB for model weight persistence in Verse experiments
- Online sparse-reward training in-browser without external libs

## Failure Modes / Notes
- Orientation requires permission on iOS; falls back gracefully.
- Learning is crude (no proper backprop library); intended as proof of hybrid embodiment, not high-performance AI.
- Canvas agents are the "physical UI"; interaction is click-to-reward.
- Fully offline after first load.

## Files
- index.html (self-contained, runnable)
