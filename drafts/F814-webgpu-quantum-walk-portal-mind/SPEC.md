# F814-webgpu-quantum-walk-portal-mind

## Concept
A discrete-time quantum walk on a 2D lattice computed via WebGPU compute shaders. The walker's complex amplitudes evolve under a Hadamard coin and conditional shift. Multiple living DOM portals act as position-dependent phase potentials and absorbers. A small local recurrent network (pure JS) observes the probability density near portals and modulates the coin bias and portal phases. User drag injects a localized amplitude seed. Device orientation tilts the effective potential gradient. Generative audio is driven by the spectral content of the probability field. Fully offline, single-file prototype.

## Novelty
Departs from prior reaction-diffusion, SPH/LBM/lattice-gas, classical particle/boids, NCA, Hopfield, GNN, HMM, attention-force layouts, and CSS3D spiking embodiments. First quantum-walk substrate on Verse: interference, unitarity (approximate), and phase potentials controlling living portals. Not a classical diffusion or residual predictor.

## Architecture
- WebGPU compute: 128×72 lattice, 4-component complex amplitudes (real/imag for two coin states simplified to 2-state per direction pair).
- Portals: 4–6 absolute-positioned DOM elements; local probability samples drive size/hue; drag writes Gaussian amplitude.
- Local mind: tiny RNN (hidden=8) updates coin phase offset from portal observations.
- Audio: 3 oscillators modulated by low-frequency components of the field.
- Persistence: IndexedDB "f814-walk-state" for amplitudes + RNN weights.
- Fallback: Canvas2D classical random walk if no WebGPU.

## Expected outcome
Open: interference patterns bloom. Move mouse or tilt: portals drift and phase-shift the walk. Drag to seed a new walker packet. Hear evolving tones. Seal freezes state.

## Failure modes
- No WebGPU: classical fallback.
- Low GPU: reduce grid size.
- Audio blocked: silent until gesture.

## Building blocks
Quantum-walk substrate + phase-portal embodiment for future hybrid quantum-classical Verse minds.
