# F826 DeviceMotion Kalman WebGPU Chain Mind

## Concept
A linear mass-spring chain (beads linked by springs) is simulated with Verlet integration. A local Kalman filter (linear Gaussian state estimator) treats DeviceMotion acceleration (or pointer residual) as noisy measurements of user intent velocity and updates its state estimate. The estimated intent is applied as a force on the free end of the chain. Absolute-positioned DOM beads ride the chain nodes and can be dragged to inject corrective positions. Reward (key R) boosts fitness of the closest bead and slightly adapts process noise. Seal (key S) persists the Kalman parameters + fitness to IndexedDB and broadcasts via BroadcastChannel for sealed transfer; receivers adopt only if higher fitness.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum kernels (Gray-Scott Bayesian F825, DEM granular F824/F532, Hopfield attractors F823, spatial transformers F822, LDS wave membranes F0494, Echo-State particles F0493, Physarum/Ising/Lenia/lattice-gas/softbody meshes, NCA, spectral residuals). Core novel combination is a previously unused local model—the Kalman filter (recursive linear state estimation, not MLP/RNN/ESN/k-NN/Bayesian counts/Hopfield energy)—whose causal input is DeviceMotion, controlling a linear chain/rope embodiment (not mesh softbody, not wave equation, not particle field, not CA lattice). DOM elements are the physical beads themselves. Sealed partial-parameter transfer over IndexedDB + BroadcastChannel. Not neural weights, not continuum fields, not pointer-history force fields.

## Architecture
- Single index.html (Canvas2D visualization + DOM beads; offline after load)
- Chain: 12 nodes, spring constraints, damping, gravity
- Kalman: 2-state velocity estimator, predict/update with process/measurement noise
- Inputs: DeviceMotion (accelIncludingGravity) or pointer residual; drag beads
- Persistence: IndexedDB `f826-kalman-chain`; BroadcastChannel `f826-genome`
- Seal adopts only higher fitness

## Expected outcome
Runnable prototype: tilt device or move pointer to drive chain via Kalman intent estimate; drag beads to reshape; reward closest; seal to persist/transfer the estimator. Graceful if no DeviceMotion (pointer fallback).

## Failure modes
No DeviceMotion permission → pointer only; IndexedDB blocked → memory only; high N may drop FPS (capped at 12).
