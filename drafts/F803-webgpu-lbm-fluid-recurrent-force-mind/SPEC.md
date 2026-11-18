# F803 WebGPU LBM Fluid Recurrent Force Mind

## Concept
Novel continuum fluid simulation using Lattice Boltzmann Method (D2Q9) on a grid, with forces injected by a tiny local recurrent network (simple Elman-style RNN) whose causal inputs are pointer velocity history + DeviceOrientation rates. Optional WebXR hand tracking for force injection when available. Floating DOM probes sample density/velocity and can be dragged to seed momentum. Seal serializes the RNN weights to IndexedDB + BroadcastChannel for cross-tab genome transfer. Offline-capable single-file prototype.

## Novelty
Leaves the recent cluster of Particle Life ESN (F802), Vicsek Q-table (F801), battery-Kalman gravity (F800), raymarched spiking volume (F799), CSS3D spiking (F798), RD attention (F797), decision-tree kinematics (F796), and prior particle/flocking/RD/spiking/CSS3D/attention/MLP substrates. Core novel combination is LBM continuum fluid kernel (not particle, not CA, not RD, not SPH forces) controlled by a lightweight recurrent force predictor (not ESN reservoir, not Q-table, not Kalman, not attention), with hybrid pointer/orientation/XR input and sealed transfer. Not previously built.

## Architecture
- Grid: 96x54 LBM D2Q9 (f_i distributions), density + velocity reconstruction
- RNN: 8-unit Elman recurrent layer, input [dx, dy, speed, tilt rates], output force vector added to local cells near pointer/hand
- Probes: 4 absolute DOM cards sampling bilinear density, draggable to inject Gaussian momentum
- Persistence: IndexedDB "f803-rnn-weights", BroadcastChannel "f803-genome"
- Fallback: no WebGPU required (pure JS LBM); pointer if no orientation/XR; silent if no audio

## Expected outcome
Open: swirling fluid appears. Move mouse or tilt: forces reshape flow. Drag probes to stir. Seal to lock current RNN; other tabs or reload adopt it.

## Failure modes
- No orientation: pointer only.
- Low FPS: reduce steps or grid.
- No WebGPU: JS path.

## Files
drafts/F803-webgpu-lbm-fluid-recurrent-force-mind/SPEC.md
drafts/F803-webgpu-lbm-fluid-recurrent-force-mind/index.html

Void is now Verse everywhere.
