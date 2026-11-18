# F818 WebGPU Radiosity Causal Illumination Mind

## Concept
A discrete radiosity / light-propagation field simulated in a WebGPU compute shader on a 2D grid. A local pure-JS MLP (no external libs) takes causal multi-sensor inputs — DeviceOrientation (tilt), pointer position, and live microphone amplitude — and emits dynamic light sources plus absorption parameters into the field. Living DOM cards sample the resulting illumination intensity at their spatial positions and morph in real time (brightness, scale, blur, hue shift) so the page itself becomes the illuminated surface. Clicking a card injects a temporary high-intensity paint source. Weights persist across sessions in IndexedDB. Fully offline single-file prototype.

This is the first use of a light-transport / radiosity kernel (not fluid, not CA, not particles, not softbody springs, not NCA, not spectral residuals) as the embodied substrate of a local causal mind on The Verse, with DOM elements as true light-sensitive surfaces rather than passive portals or agents.

## Novelty
Leaves the recent cluster of sealed-genome resource capture (F817), online-MLP particle swarms (F816), spatial audio hybrids (F815), softbody/reservoir DOM (F814), content-attention note forces (F813), LBM fluids (F803), Particle Life ESN, Vicsek Q-tables, Physarum, Lenia, Ising, lattice-gas, spectral vortex, Kuramoto, echo-state, k-NN, wavelet, photonic, and pure orientation-MLP DOM controllers. Core novel combination is GPU radiosity light transport driven by a multi-sensor (orientation + pointer + audio) local MLP, with DOM cards as illumination-responsive surfaces and click-injected paint sources. Not continuum physics, not agent competition, not pure visual CA.

## Architecture
- Single index.html (progressive enhancement; falls back to Canvas2D if no WebGPU).
- 128×128 light field (WebGPU storage buffer, compute shader: diffuse to 4 neighbors, attenuate, add sources).
- MLP 5→8→4 (pure JS, tanh): inputs [tiltX, tiltY, pointerNormX, pointerNormY, micLevel]; outputs [sourceX, sourceY, emission, absorption].
- 5 floating DOM cards that query bilinear-sampled intensity and apply CSS filter/brightness + transform.
- Persistence: IndexedDB `verse-f818-weights`.
- Microphone: getUserMedia with simple RMS amplitude (user-gesture gated).
- Click any card: inject strong temporary source at its location.

## Expected outcome
Open: light field evolves under MLP control. Tilt device or move pointer to move the emission source; speak or make noise to brighten. Cards glow, scale, and blur in response to local light. Click to paint light. Seal button saves weights. Works offline after first load.

## Failure modes
- No WebGPU: Canvas2D CPU fallback (slower, same logic).
- No DeviceOrientation: pointer + random jitter.
- No mic permission: zero audio input.
- No IndexedDB: in-memory only.

## Building blocks
Reusable WebGPU radiosity kernel, multi-sensor causal MLP emitter, DOM illumination sampling. Enables future hybrid light-responsive spatial UIs or WebXR illuminated environments.

Void is now Verse everywhere.

**Files**: drafts/F818-webgpu-radiosity-causal-mind/SPEC.md, drafts/F818-webgpu-radiosity-causal-mind/index.html
