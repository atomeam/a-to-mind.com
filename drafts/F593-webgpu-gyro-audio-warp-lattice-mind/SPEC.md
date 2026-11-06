# F593: WebGPU Gyro-Audio Warp Lattice Mind

## Concept
A novel spatial interface for The Verse canvas: a lattice of interactive thought-nodes whose 3D CSS transforms and visual properties are continuously warped by a multi-scale displacement/velocity field computed on the GPU.

The field is driven by real-time fusion of:
- DeviceOrientationEvent (alpha/beta/gamma gyro + absolute orientation)
- Web Audio AnalyserNode spectral energy and centroid (microphone if granted, or synthetic driver)
- Pointer dwell and trajectory

A local evolutionary strategy (simple (μ,λ)-ES running in the main thread) adapts the field's diffusion rates, injection gains, and coupling strengths based on aggregate node stability (dwell time, collision count, audio-energy correlation). The result is an adaptive, sensor-driven spatial mind that has no prior counterpart in the ledger.

## Architecture
- **WebGPU compute**: Two ping-pong storage buffers (or textures) for a 64×64 scalar potential + 2-channel velocity. Compute shaders perform diffusion, advection, orientation-based force injection, and audio-band modulation. Periodic readback of a downsampled field (or via mapped buffer) to JS.
- **Sensor fusion**: DeviceOrientation + DeviceMotion events normalized into injection impulses. Audio: AnalyserNode.getByteFrequencyData() → low/mid/high bands → field sources.
- **DOM lattice**: 16–25 absolutely positioned nodes in a perspective container. Each frame, sample the field at node UVs (or nearest grid points) and apply translate3d, rotateX/Y, scale, opacity, and hue-shift via CSS custom properties or direct style.
- **Local evolutionary loop**: Every ~2s, evaluate fitness = weighted sum of mean dwell time, low collision rate, and audio-field correlation. Mutate a small parameter vector (diffusion, gain, decay) and keep elites. Parameters are written into GPU uniform buffer.
- **Interaction**: Click/drag nodes to "pin" or "seed" a thought (stores short string in local Map). Hover increases local dwell. Pointer position also injects a secondary source.

## Expected Outcome
- Nodes visibly float, drift, and breathe in response to tilting the device and ambient/synthetic sound.
- Over 30–60s the evolutionary adaptation stabilizes or diversifies the field (observable via a small parameter readout).
- Fully local: no network, no external models. Works offline after load.
- Graceful fallback: if WebGPU unavailable, a Canvas2D reaction-diffusion approximation drives the same DOM warp.

## Mechanics
1. User grants orientation (and optionally mic) permission.
2. GPU field initializes to near-zero with small noise.
3. Each frame (~60Hz): update sensors → dispatch compute → readback → warp DOM nodes → accumulate dwell/collision stats.
4. Every N frames: run ES step, upload new params.
5. User can click a node to inject a labeled "memory" that slightly biases local field potential.

## Failure Modes
- WebGPU not supported (older browsers, some mobile): fallback path activates; reduced fidelity.
- DeviceOrientation requires secure context + user gesture on iOS; permission denied → orientation injection zeroed, audio/pointer still active.
- High GPU load on low-end devices: compute resolution auto-drops or frame skip.
- Evolutionary divergence: if fitness is poorly scaled, parameters can explode → clamped ranges + reset button.
- Audio permission denied or no mic: synthetic low-frequency driver takes over.

## Novelty Check
Not a variation of prior F- drafts (NCA, fluid, boids, sandpile, reservoir, attention-token, orientation-cssgrid, predictive-fog, WebXR-hand, etc.). This is the first combination of WebGPU displacement-field warping of a DOM lattice driven by gyro+audio sensor fusion with online evolutionary parameter adaptation.

## Files
- index.html (self-contained runnable prototype)
- SPEC.md (this file)
