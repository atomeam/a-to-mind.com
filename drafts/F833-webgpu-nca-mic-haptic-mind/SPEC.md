# F833 WebGPU Neural Cellular Automaton Mic-Haptic Mind

**Ledger ID**: F-833 (frontier series)

**Plain name**: Living sound-responsive cellular tissue with haptic pulse

**Concept**
A Neural Cellular Automaton (NCA) runs as the primary spatial substrate on The Verse canvas. A shared tiny MLP defines the local update rule. Live microphone spectral features (centroid, flux, energy from AnalyserNode) are injected as global causal inputs into every cell. The field grows, pulses, and self-organizes in response to ambient sound. DOM “membrane portals” sample local field statistics and physically morph (size, hue, opacity, slight translation). High local activity triggers the Vibration API for closed-loop haptic feedback. DeviceOrientation tilts the growth bias. Genome (MLP weights) can be sealed to localStorage.

**Novelty**
Deliberately leaves the recent cluster of continuum/discrete physics kernels (DEM granular, Gray-Scott RD, Kalman chains, PSO, CML, GP wavefields, Coulomb DOM swarms, LBM, SPH, particle attractors, LGA, DLA, Cellular Potts, Kuramoto, Biot-Savart, SDF raymarchers), pure DOM/CSS3D agent competitions (RNN, decision-tree, attention, Hebbian, RBF, battery-modulated), online-supervised layout tools (F832), k-means particles, and residual/attention fields. Core novel combination is a true Neural Cellular Automaton (learned local rule, not fixed CA, not continuum PDE, not particle forces) driven by live microphone spectral features as primary causal input, with bidirectional DOM membrane embodiment and Vibration API haptic closed-loop, plus orientation bias. First NCA on The Verse; first audio-to-NCA-to-haptic loop. Not previously built.

**Architecture**
- Single self-contained index.html (offline after load, progressive, mobile-friendly)
- NCA: 64×64 or 128×128 grid of float states (or RGB), updated by shared 2-layer MLP (~40–60 weights) that takes 3×3 neighborhood averages + 4 audio features + 2 orientation
- Audio: getUserMedia + AnalyserNode → spectral centroid, spectral flux, RMS energy, zero-crossing rate (normalized)
- Visualization: Canvas2D color-mapped field (or WebGPU compute + render if available; progressive CPU fallback)
- DOM portals: 6–8 absolute-positioned divs that lerp to high-activity centroids, size/color from local mean state
- Haptics: navigator.vibrate(short pattern) when global or local energy exceeds threshold
- Persistence: localStorage `verse-f833-genome`
- Progressive: No WebGPU → pure JS NCA; no mic → synthetic oscillator or pointer-as-energy; no orientation → pointer residual; no vibration → visual flash only

**Expected outcome**
User grants mic → field starts sparse and grows/pulses in response to voice, music, or ambient sound. Tilt device to bias growth direction. Portals drift and swell with the tissue. Phone vibrates on energetic bursts. Seal button freezes a preferred rule. Works offline after initial load.

**Mechanics**
1. Initialize random sparse seed + random MLP weights (or load sealed).
2. Every frame: compute audio features → inject into MLP input.
3. For each cell (or in compute shader): gather neighborhood, forward MLP, write new state with residual/damping.
4. Sample field for portal positions and morphs.
5. If energy high, trigger short vibration.
6. Orientation event adds directional bias to MLP input or post-update advection.

**Failure modes**
Mic permission denied → fall back to pointer-driven energy or auto-oscillator. No vibration support → ignore. Large grid on weak device → auto-downsample. MLP explodes → clamp states and reset button. WebGPU unavailable → transparent CPU path.

**Building blocks**
Reusable pure-JS (or WGSL) NCA kernel with shared MLP rule, live spectral feature extractor, DOM membrane sampling, and haptic energy gate. Enables future evolved CA rules, multi-rule competition, or NCA-controlled generative audio.

**Files**
- drafts/F833-webgpu-nca-mic-haptic-mind/SPEC.md
- drafts/F833-webgpu-nca-mic-haptic-mind/index.html

Void is now Verse everywhere.
