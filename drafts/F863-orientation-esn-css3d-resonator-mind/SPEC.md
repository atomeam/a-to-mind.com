Plain name: Orientation ESN CSS3D Resonators
Job: Tilt your device or move the pointer. A local Echo State Network (fixed reservoir + adaptive readout) receives causal orientation residuals. Its states drive a set of absolute-positioned CSS 3D transformed DOM resonators that pulse, rotate, and sonify via Web Audio. Click or drag a resonator to provide a teaching signal that updates the readout weights. Seal the adapted readout genome for persistence and cross-tab transfer.

**Concept**
Novel hybrid spatial / local-AI capability for The Verse canvas, never previously attempted: a pure-JS Echo State Network (reservoir computing) whose sparse recurrent reservoir is fixed and random, while a linear readout is continuously adapted from user teaching signals. Causal input is DeviceOrientationEvent residual (or pointer-velocity residual). The reservoir states are embodied as 8–12 absolute-positioned DOM elements with CSS preserve-3d transforms (translateZ, rotateX/Y, scale) that act as physical resonators. Average reservoir energy drives a small Web Audio bank. User click/drag on a resonator injects a target and performs a simple LMS-style readout update. Seal serializes the readout weights to IndexedDB and BroadcastChannel for multi-tab sealed genome competition (higher recent reward wins). Fully offline after load; progressive (pointer always works).

**Novelty**
Leaves the recent cluster of WebGPU continuum/physics kernels (heat equation, DEM granular, acoustic wave, boids), orientation MLP portals, spiking softbodies, WebXR hand Verlet chains, and WebRTC MLP auctions (F855–F862). Branches from prior rate-based RNNs, residual predictors, pure NCA, softbody DOM, spectral residuals, pointer-history fields, and k-means particles. Core novel combination is reservoir computing (untrained sparse reservoir + online-trained readout) as the local mind, causally driven by orientation residual, embodied as living CSS 3D resonators with closed-loop Web Audio and reward-gated sealed readout transfer. Not MLP, not spiking, not continuum field, not canvas substrate.

**Architecture**
- Single self-contained index.html
- Reservoir: N=48 units, sparse recurrent weights (spectral radius ~0.9), fixed
- Readout: linear weights from reservoir to 4 control dimensions (position bias, scale, hue, audio freq)
- Inputs: DeviceOrientation alpha/beta/gamma deltas or pointer velocity bins
- Resonators: 8 absolute divs with transform-style: preserve-3d; driven by readout + local reservoir sample
- Audio: 3 oscillators + filters modulated by reservoir mean activity
- Teaching: click/drag → LMS update on readout (target = current interaction vector)
- Seal: IndexedDB key "f863-esn-readout"; BroadcastChannel "f863-genome" (fitness = recent reward sum)
- Fallbacks: no orientation → pointer residual; AudioContext resume button; IDB session-only

**Expected outcome**
Open: floating 3D resonators gently pulsing. Tilt phone or move mouse → reservoir activates, resonators dance in 3D space and change color/size; soft generative tones evolve. Click a resonator to teach it a preferred state; behavior adapts. Seal persists the readout; open second tab to compete genomes. Works offline.

**Failure modes**
- No DeviceOrientation: pointer velocity residual used.
- AudioContext suspended: explicit resume button.
- IndexedDB unavailable: session-only seal + broadcast.
- Low-end device: reduce reservoir size.

**Building blocks**
Reusable pure-JS Echo State Network with online readout adaptation, CSS 3D physical embodiment of reservoir states, orientation residual causal channel, sealed readout genome competition, reservoir-driven Web Audio. Expands non-gradient local models and pure CSS3D minds for Verse. Next can combine reservoir with other embodiments or WebGPU sampling.

**V01D landing**
skills/orientation-esn-css3d-resonator.js; test: orientation residual → reservoir activation → resonator transform + audio change, teaching update, seal round-trip.

Void is now Verse everywhere.
