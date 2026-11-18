# F800 Battery-Causal Kalman Filter Gravity Portal Mind

## Concept
A local Kalman filter (linear Gaussian state estimator with prediction-update cycle, not neural, not spiking, not lookup table, not decision tree, not LDS pure) receives continuous Battery Status API level/charging state (or pointer proxy) as observation. Its estimated state modulates gravity direction and strength in a Canvas2D particle field (previously unused simple Newtonian particles with mutual attraction and DOM mass sources). Absolute-positioned DOM portals act as movable mass attractors: dragging them repositions gravitational sources; their local particle density provides a measurement residual that updates the Kalman gain lightly. Seal persists the filter parameters (A, Q, R matrices) to IndexedDB and broadcasts via BroadcastChannel for multi-tab sealed transfer. Offline single-file prototype.

## Novelty
Leaves the recent cluster of WebGPU raymarched spiking volumes (F799), pure CSS3D spiking sparks (F798), lookup-table CSS growth (F797), decision-tree kinematic CSS3D (F796), CSS3D battery RNN (F795), attention-field portals (F794), living DOM RNN (F793), and prior WebGPU CA/particle/LGA/DLA/attractor/Potts/RD/SPH-like substrates. Branches from residual predictors, orientation RNNs, softbody DOM, NCA, spectral residuals, pointer-history fields, k-means particles. Core novel combination is a classical Kalman filter as the local mind whose causal input is Battery Status (level + charging as observation of "energy state"), controlling a simple mutual-gravity particle field, with DOM portals as true bidirectional mass sources (inject attraction, sample density residual for filter update) under reward-gated sealed covariance transfer. Not neural policy, not volumetric raymarch, not CSS3D pure embodiment, not continuum kernels.

## Architecture
- Single index.html (progressive; Canvas2D always works)
- Kalman: state dim 2 (gravity X/Y), observation from battery or proxy, lightly adaptive Q/R via residual
- Inputs: navigator.getBattery() level/charging or pointer velocity proxy
- Simulation: 200 particles with pairwise gravity + portal mass terms, Euler integration
- 4 DOM portals: absolute-positioned translucent cards, draggable; define mass centers; sample nearby particle count for residual
- Persistence: IndexedDB key `f800-kalman-params`; BroadcastChannel `f800-genome`
- Reward: high density under portal or click nudges filter toward current observation
- Seal button: stores {A, Q, R, fitness, timestamp}, broadcasts; incoming replaces if higher fitness (small mutation)

## Expected outcome
Runnable prototype: battery level (or pointer) drives Kalman estimate which tilts particle gravity; particles orbit and clump around dragged portals; high density rewards and adapts the filter; Seal persists and transfers the estimator across tabs. Graceful fallback without Battery API or sensors. Works offline after load.

## Mechanics
1. Initialize random Kalman matrices near identity, zero state, random particles.
2. Listen for battery (or pointermove proxy), BroadcastChannel, drag on portals, buttons.
3. Each frame: predict-update Kalman from battery observation, advance particles under gravity + portal masses, sample densities, render.
4. Portal interaction / high density: residual signal lightly updates Q/R.
5. Seal: write to IndexedDB + postMessage on channel; on receive, adopt if better.

## Files
drafts/F800-battery-kalman-gravity-portal-mind/SPEC.md
drafts/F800-battery-kalman-gravity-portal-mind/index.html

## V01D landing
Battery Kalman gravity portal controller under void-live-deploy/skills/battery-kalman-gravity-mind.js; test asserts battery vector → Kalman state update → gravity change and BroadcastChannel parameter adoption.

Void is now Verse everywhere.
