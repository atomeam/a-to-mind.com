# F0493 WebGPU Echo-State Network Spatial Portal Mind

## Concept
A local Echo State Network (fixed random reservoir + trainable output weights) running in pure JavaScript receives continuous DeviceOrientation (or pointer proxy) and optional microphone energy. Its outputs drive parameters of a WebGPU compute shader that advances a particle attractor field. Emergent particle clusters host living DOM portals whose positions and styles are sampled from the field. User clicks on portals provide reward signals that update only the output weights (ridge-style or Hebbian). Seal persists the trained readout weights to IndexedDB and broadcasts them via BroadcastChannel for multi-tab shared-field transfer. Offline single-file prototype.

## Novelty
Leaves the recent cluster of k-NN SVG morph swarms (F0492), WebRTC causal portal swarms (F0491), Physarum trail agents (F0490), Ising/Metropolis spin domains (F0489), lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs, softbody policy meshes, speech-seeded NCA, and prior orientation MLP / residual / attention / pure NCA substrates. Core novel combination is an Echo State Network (reservoir computing with frozen recurrent dynamics, only readout trained) as the local policy mind whose causal input is DeviceOrientation, controlling a WebGPU compute particle attractor field, with DOM portals physically bound to cluster centroids and reward-gated sealed readout transfer. Not full MLPs, not instance-based k-NN, not Kuramoto oscillators, not NCA, not softbody springs, not spectral residuals.

## Architecture
- Single index.html (progressive enhancement; works without WebGPU via 2D canvas fallback)
- Echo State Network: reservoir size 32, spectral radius ~0.9, fixed random W_res, trainable W_out (2 outputs: attractor strength, rotation)
- Inputs: [beta, gamma, pointerX, pointerY, micRMS] normalized
- WebGPU compute: simple particle update (position += velocity; velocity += force toward attractors modulated by ESN)
- 3–5 DOM portals: absolute-positioned cards that track particle cluster centroids (k-means or simple binning)
- Persistence: IndexedDB key `f0493-esn-readout`; BroadcastChannel `f0493-genome`
- Reward: click portal increments fitness and nudges W_out toward current state
- Seal button: stores {W_out, fitness, timestamp}, broadcasts; incoming replaces if higher fitness (small mutation)

## Expected outcome
Runnable prototype: tilt or move pointer steers the particle field via the ESN; portals follow clusters; clicking a portal rewards and adapts the readout; Seal persists and transfers the trained mind across tabs. Graceful fallback without sensors or WebGPU. Works offline after load.

## Mechanics
1. Initialize random reservoir weights, zero readout, random particles.
2. Listen for DeviceOrientationEvent, pointermove, getUserMedia (optional), BroadcastChannel, buttons.
3. Each frame: update ESN state, run WebGPU compute (or canvas), compute cluster positions, move portals, render status.
4. Portal click: reward signal updates W_out via simple outer-product or least-squares step.
5. Seal: write to IndexedDB + postMessage on channel; on receive, adopt if better.

## Files
drafts/F0493-webgpu-echo-state-portal-mind/SPEC.md
drafts/F0493-webgpu-echo-state-portal-mind/index.html

## V01D landing
Echo-state spatial portal controller under void-live-deploy/skills/echo-state-portal-mind.js; test asserts orientation vector → ESN state update → particle force change and BroadcastChannel readout adoption.
