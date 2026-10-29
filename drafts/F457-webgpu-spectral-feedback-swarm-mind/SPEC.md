# F457-webgpu-spectral-feedback-swarm-mind

## Concept
Novel combination never built before: Canvas2D particle swarm (WebGPU compute path progressive) whose collective state drives a closed-loop Web Audio spectral feedback system. Multiple oscillators modulated by particle genes and centroid; AnalyserNode extracts spectral centroid, RMS, and band energies which are fed back as dynamic forces, damping, and gene modulators into the swarm. Spatial DOM probe cards morph in scale, hue, opacity and slight position based on regional density and live spectrum. DeviceOrientation provides tilt gravity; pointer injects forces or new genes. Sealed genomes + spectrum snapshots in localStorage. Fully offline single file.

Branches away from recent dominant cluster (WebGPU NCA / spatial lattices, orientation-MLP/RNN, residual predictors, WebXR hand verlet/Ising, L-system, HDC palace, semantic point agents, granular collision + BroadcastChannel): core is self-listening audio→force closed loop + spectral DOM morph, not pure physics, not residual, not multi-tab broadcast, not attention graph.

## Architecture
- Single index.html
- ~200 particles: pos, vel, genes (hue, freq_bias, damp)
- Web Audio Context: 8 OscillatorNodes + Gain + AnalyserNode
- Feedback: spectrum features → force vectors and parameter modulation each frame
- DOM: 4-6 absolute cards sampling canvas regions
- localStorage for seal/load of genes + params
- Canvas2D render; WebGPU compute noted for denser kernels

## Expected outcome
Particles swarm under tilt and feedback; evolving tones emerge from the collective; cards pulse and recolor with the mind's spectrum. Click to inject, seal to persist. Works offline after load.

## Failure modes
- Autoplay policy blocks audio → visual swarm continues, toast notes silent mode
- No DeviceOrientation support → mouse/pointer provides gravity override
- Private mode or quota → seal fails silently
- Very low-end device → reduce particle count automatically

## Building blocks for next
True WebGPU compute kernel with spectrum uniforms from readback, WebXR hand tracking as spectral force injectors into the field, on-device transformer embedding of audio features for gene evolution, multi-peer WebRTC spectrum seal transfer.
