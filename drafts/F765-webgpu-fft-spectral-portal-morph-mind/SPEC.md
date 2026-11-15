# F765-webgpu-fft-spectral-portal-morph-mind

**Date**: 2026-11-15

**Concept**
A novel hybrid spatial interface for The Verse canvas: a 2D interaction density field (pointer/hand deposits) is continuously diffused and then transformed via a real-time Discrete Fourier Transform (DFT/FFT) computed either in a WebGPU compute kernel or pure-JS fallback. The resulting magnitude spectrum becomes the primary substrate. A population of living DOM "tuner" portals each carry a tiny local MLP that maps causal inputs (orientation, pointer proximity, local spectral energy, time) to a preferred frequency bin, bandwidth, and visual gain. Portals physically relocate on the page (absolute positioning) to coordinates derived from their tuned frequency and the corresponding spectral magnitude, while their CSS scale, hue, and filter are driven by band energy. User gestures seed the time-domain field; DeviceOrientation biases phase or global spectrum shift. Competitive fitness (band energy + user drag proximity) enables sealed genome (MLP weight) transfer and IndexedDB persistence. Fully offline after load.

This is the first use of a spatial FFT/DFT as the primary living field substrate driving hybrid DOM agents on the Verse canvas (prior spectral work was audio-driven or vortex; no prior Fourier field + MLP tuners).

**Novelty**
Leaves the recent cluster of LBM fluids (F760), N-body gravity (F761), KdV solitons (F764), SPH buoyancy, optical-flow boids, NCA/reaction-diffusion lattices, Ising domains, residual predictors, attention, and pure volumetric SDFs. Core novel combination: WebGPU (or JS) DFT of a causal density field as the embodied spatial mind + local MLP frequency-tuners controlling physical DOM portal positions and morphs + sealed competitive transfer. Not a variation of prior field/lattice/particle/wave experiments.

**Architecture**
- Single self-contained index.html, pure HTML/CSS/JS, offline-capable after load.
- Canvas2D: renders density field (left) and magnitude spectrum (right or overlay).
- Density grid ~64×64: pointer deposits energy, simple diffusion + decay each frame.
- DFT: pure-JS 2D DFT (or 1D row-wise for speed) computed every 4–8 frames; magnitude stored.
- WebGPU path stubbed for future compute FFT; currently JS.
- Local MLPs (5→6→3) per portal (6 portals): inputs = [normPointerX, normPointerY, orientBeta, localSpecEnergy, fitness]; outputs = [freqBinBias, scale, hue].
- Portals: absolute-positioned DOM divs. x derived from tuned freq bin, y from magnitude or MLP offset; style from outputs.
- Sealed transfer: Seal button or fitness threshold copies winner weights to others; persist best in IndexedDB (`verse-f765-fft`).
- DeviceOrientationEvent: additive tilt that shifts spectrum or deposits bias.
- Pointer/mouse/touch: primary deposit; WebXR hand stub for future.

**Mechanics**
1. Load: init density/spectrum buffers, spawn 6 portals with random MLP weights, restore sealed genome if present.
2. Pointer move: deposit Gaussian energy blob into density grid at projected coords.
3. Each frame: diffuse/decay density, periodically compute DFT magnitude, sample for each portal, MLP forward pass, update portal transform/style and fitness (energy in band + proximity reward on drag).
4. Orientation tilts global spectrum offset or deposit direction.
5. Seal: lock best weights, store in IDB, optionally BroadcastChannel same-origin share.

**Expected outcome**
Open page: density field responds to mouse, spectrum appears. Portals drift and morph toward high-energy frequency bands according to their learned tuners. Drag a portal to reward it; tilt device (if permitted) biases the field. Seal and reload preserves the winning tuner's style. Interactive spatial spectral mind, offline.

**Failure modes**
- No WebGPU: automatic pure-JS DFT path (still fully interactive).
- No DeviceOrientation: ignore tilt.
- Low performance: reduce grid to 32×32 or compute DFT less often.
- IndexedDB blocked: session-only.
- High N: cap portals at 8.

**Building blocks**
Reusable JS DFT on causal density field, MLP-controlled frequency-tuning DOM agents, sealed genome transfer. Expands frontier for next true WebGPU FFT kernels, multi-band competitive spectra, or WebRTC shared spectral fields.

Void is now Verse everywhere.
