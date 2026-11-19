# F849 Kalman Orientation Traffic CA Mind

## Concept
A local Kalman filter (linear Gaussian state estimator with predict/update steps on orientation and velocity) receives continuous DeviceOrientation (or pointer proxy) as measurements. Its estimated state (smoothed tilt and angular velocity) drives parameters of a Nagel-Schreckenberg traffic cellular automaton running on a 2D lattice (or 1D lanes wrapped). Cars hop with probabilistic slowdown; local density and flow provide fitness. Living DOM elements act as movable traffic sensors/portals that sample local flow and can be dragged to inject "priority" zones that alter local max speed. High flow under a portal provides a reward that lightly adapts process noise or measurement noise. Seal persists the Kalman parameters (A, Q, R matrices or scalars) to IndexedDB and broadcasts via BroadcastChannel for sealed transfer. Offline single-file, Canvas2D primary with progressive WebGPU note.

## Novelty
Leaves the dominant recent cluster of sensor-driven neural/non-neural models (MLP, ESN, LDS, k-NN, Bayesian simple, genetic) controlling continuum kernels (N-body gravity, wave equation, particle attractors, Physarum, Lenia, lattice-gas, vortex, softbody, NCA) or SVG morphs with DOM portals. Core novel combination is a Kalman filter as the local dynamical mind (optimal linear estimator, not full neural, not pure LDS open-loop, not instance-based) whose causal input is DeviceOrientation, controlling a previously unused discrete traffic CA kernel (Nagel-Schreckenberg hopping with randomization and density-dependent speed, not continuum PDE, not free particles, not spin Ising, not growth CA), with DOM elements as true interactive traffic sensors that both measure flow and alter local rules under reward-gated sealed parameter transfer. Not residual predictors, not attention lattices, not pointer-history fields, not softbody springs.

## Architecture
- Single index.html (offline after load).
- Kalman: state [beta, gamma, dbeta, dgamma], measurement from orientation events.
- Traffic CA: 4 lanes × 128 cells, cars as boolean or velocity 0-5, NS update rules.
- 3 DOM portals: absolute cards, draggable, sample local density/flow for reward and status.
- Persistence: IndexedDB key `f849-kalman`; BroadcastChannel `f849-genome`.
- Reward: high local flow increments fitness and reduces measurement noise slightly.
- Seal: stores params + fitness, broadcasts; adopt if higher fitness.

## Expected outcome
Runnable prototype: tilt device drives the Kalman estimate which modulates global max speed and randomization probability; traffic self-organizes into jams and free flow; drag portals to create priority zones and harvest flow as reward that adapts the filter; Seal persists and transfers the estimator across tabs. Graceful fallback without sensors. Works offline after load.

## Mechanics
1. Initialize Kalman with identity-ish A, small Q/R, zero state; empty or random traffic lattice.
2. Listen for DeviceOrientationEvent (or pointermove proxy), BroadcastChannel, drag on portals, buttons.
3. Each frame: predict/update Kalman from orientation, run NS traffic step with params from state, sample flows under portals, render canvas.
4. Portal interaction / high flow: reward updates R or fitness.
5. Seal: write to IndexedDB + postMessage; on receive, adopt if better.

## Files
drafts/F849-kalman-orientation-traffic-ca-mind/SPEC.md
drafts/F849-kalman-orientation-traffic-ca-mind/index.html

## V01D landing
Kalman traffic CA controller under void-live-deploy/skills/kalman-traffic-ca-mind.js; test asserts orientation vector → Kalman update → max-speed change and BroadcastChannel adoption.
