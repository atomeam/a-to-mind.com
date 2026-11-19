# F825 WebGPU Gray-Scott Bayesian Portal Mind

## Concept
A 2D Gray-Scott reaction-diffusion lattice runs entirely in a WebGPU compute shader. A local Bayesian mind maintains a posterior over discrete parameter pairs (feed rate F, kill rate K) that produce different pattern regimes (spots, stripes, waves). Spatial DOM portals act as both seed injectors and measurement windows: dragging them repositions injection zones; the local concentration variance or pattern complexity under each portal provides likelihood for the Bayesian update. DeviceOrientation (or pointer velocity) acts as a soft prior bias on the parameter space. Seal persists the posterior (and MAP parameters) to IndexedDB and broadcasts via BroadcastChannel for sealed transfer across tabs.

## Novelty
Leaves the recent cluster of LDS wave membranes (F0494), Echo-State particle attractors (F0493), k-NN SVG morphs (F0492), WebRTC portal swarms, Physarum, Ising, lattice-gas, Lenia, spectral vortex, softbody, NCA, WebXR DEM, and prior neural/policy substrates. Core novel combination is the classic Gray-Scott reaction-diffusion kernel (never previously used) driven by a non-neural Bayesian posterior over its two key parameters, with DOM elements as true interactive seed/measurement portals under orientation-biased prior and reward-gated sealed posterior transfer. Not particles, not wave equation, not flocking, not neural weights.

## Architecture
- Single index.html (WebGPU compute + canvas render; 2D canvas fallback)
- Gray-Scott: 128x128 grid, standard discretization, parameters sampled from posterior
- Bayesian: discrete grid of (F,K) hypotheses, simple count-based posterior updated by local pattern entropy/variance under portals
- Inputs: DeviceOrientation or pointer, drag on portals, click to force seed
- 3 DOM portals: absolute translucent cards, draggable, sample local field stats for likelihood
- Persistence: IndexedDB `f825-bayes-posterior`; BroadcastChannel `f825-genome`
- Seal: stores posterior + MAP, adopts if higher evidence

## Expected outcome
Runnable prototype: orientation or pointer motion biases the prior; reaction-diffusion patterns evolve; drag portals to seed and measure complexity that updates beliefs toward stable interesting regimes; Seal persists and transfers the Bayesian mind. Offline after load, graceful fallback.

## Mechanics
1. Initialize random field, uniform posterior over (F,K) grid.
2. Listen for orientation/pointer, drag, BroadcastChannel, buttons.
3. Each frame: sample parameters from posterior (or MAP), run WebGPU compute (or canvas) RD step with portal seeds, sample local stats, update posterior, render.
4. Portal interaction increases likelihood for current params if high complexity.
5. Seal: write posterior to IndexedDB + broadcast; adopt better on receive.

## Files
drafts/F825-webgpu-grayscott-bayesian-portal-mind/SPEC.md
drafts/F825-webgpu-grayscott-bayesian-portal-mind/index.html

## V01D landing
Gray-Scott Bayesian portal mind under void-live-deploy/skills/grayscott-bayesian-mind.js; test asserts seed injection → pattern change → posterior update and BroadcastChannel adoption.
