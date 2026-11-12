# F0494 DeviceMotion LDS Wave Membrane Mind

## Concept
A local Linear Dynamical System (LDS: state x_{t+1} = A x_t + B u_t, with fixed or lightly adaptive A/B matrices) receives continuous DeviceMotion acceleration (or pointer proxy) as input u. Its state outputs modulate parameters (wave speed, damping, source amplitude) of a 2D discrete wave-equation lattice advanced entirely in a WebGPU compute shader. Living DOM elements act as movable semi-reflective membranes: dragging them repositions collision zones that damp or reflect wave energy. Local wave energy under each membrane provides a reward signal that lightly adapts the LDS matrices. Seal persists the LDS parameters to IndexedDB and broadcasts them via BroadcastChannel for multi-tab sealed transfer. Offline single-file prototype.

## Novelty
Leaves the recent cluster of Echo-State Networks on particle attractors (F0493), k-NN SVG morph swarms (F0492), WebRTC causal portal swarms (F0491), Physarum trail agents (F0490), Ising/Metropolis spin domains (F0489), lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), and prior orientation RNN / softbody / residual / attention / pure NCA / reservoir substrates. Core novel combination is a non-neural Linear Dynamical System (linear state evolution, not MLP/RNN/ESN/k-NN/reservoir) whose causal input is DeviceMotion acceleration, controlling a previously unused WebGPU wave-equation kernel (not particles, not NCA, not Lenia, not lattice-gas, not vortex, not softbody springs), with DOM elements as true interactive membranes that both affect and measure the field under reward-gated sealed parameter transfer. Not neural policy, not spectral residuals, not pointer-history fields.

## Architecture
- Single index.html (progressive enhancement; works without WebGPU via 2D canvas fallback)
- LDS: state dim 4, input dim 3 (accX, accY, accZ or proxy), lightly adaptive A/B via small outer-product reward updates
- Inputs: DeviceMotion acceleration or pointer velocity proxy, normalized
- WebGPU compute: 64x64 wave lattice (displacement + velocity), finite-difference wave update with source injection and membrane damping
- 3–4 DOM membranes: absolute-positioned translucent cards that can be dragged; their positions define damping zones; sample local energy for reward
- Persistence: IndexedDB key `f0494-lds-params`; BroadcastChannel `f0494-genome`
- Reward: high local energy under membrane nudges LDS toward current input-state pair
- Seal button: stores {A, B, fitness, timestamp}, broadcasts; incoming replaces if higher fitness (small mutation)

## Expected outcome
Runnable prototype: shake or tilt the device (or move pointer) drives the LDS which modulates wave sources and parameters; waves propagate across the lattice; drag membranes to reflect/damp waves and harvest energy as reward that adapts the LDS; Seal persists and transfers the dynamical mind across tabs. Graceful fallback without sensors or WebGPU. Works offline after load.

## Mechanics
1. Initialize random LDS matrices A/B near stable, zero or small state, random wave fields.
2. Listen for DeviceMotionEvent (or pointermove proxy), BroadcastChannel, drag on membranes, buttons.
3. Each frame: update LDS state from acceleration input, run WebGPU compute (or canvas) wave step with membrane zones, sample energies, render status.
4. Membrane interaction / high energy: reward signal lightly updates A/B.
5. Seal: write to IndexedDB + postMessage on channel; on receive, adopt if better.

## Files
drafts/F0494-devicemotion-lds-wave-membrane-mind/SPEC.md
drafts/F0494-devicemotion-lds-wave-membrane-mind/index.html

## V01D landing
DeviceMotion LDS wave membrane controller under void-live-deploy/skills/lds-wave-membrane-mind.js; test asserts acceleration vector → LDS state update → wave source change and BroadcastChannel parameter adoption.
