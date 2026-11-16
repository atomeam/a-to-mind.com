# F770 WebGPU Kuramoto Phase Oscillator MLP DOM Agents Mind

## Concept
A novel hybrid spatial interface for The Verse canvas: a 2D lattice of coupled phase oscillators governed by the Kuramoto synchronization model runs as the primary substrate (pure-JS finite-difference for reliability; WebGPU compute path prepared). Living DOM agents are hybrid embodiments that actively modulate local natural frequencies and coupling strengths via tiny local MLPs. Causal inputs are local mean-field phase (sin/cos), DeviceOrientation tilt, and pointer proximity. Agents compete via fitness (local order parameter + drag rewards). Seal transfers the winning genome and persists it in localStorage. Pointer injects phase resets; orientation globally biases frequencies.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum PDE/field kernels (LBM fluid F760, N-body gravity F761, SDF raymarch F762, LIF spiking F763, KdV solitons F764, FFT spectral F765, wave-equation dampeners F766, Cahn-Hilliard phase separation F767) and pure DOM walkers (F769) or utilities (F768). Core novel combination is the Kuramoto discrete phase-oscillator kernel (mutual phase coupling driving synchronization domains — not continuum fluid/wave/phase-field, not particle forces, not spectral, not spiking, not reaction-diffusion) driven by competing local MLPs that actively control local frequencies and couplings, with DOM agents as true hybrid actuators/observers of the synchronization field, and sealed competitive genome transfer. First use of synchronization dynamics as the spatial substrate for The Verse.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, fully offline-capable.
- 40×40 grid of phase oscillators: each has phase θ and natural frequency ω, updated via Kuramoto rule with neighbor coupling K.
- 6 absolute-positioned DOM agents. Each owns a 5→6→2 MLP.
- MLP inputs: [sin(localMeanθ), cos(localMeanθ), orientBeta, orientGamma, pointerDist]
- MLP outputs: [freqBias, couplingBias]
- Agents apply biases in a local neighborhood and gently drift toward higher local order.
- Fitness accumulates local |order parameter| + drag proximity.
- Seal button copies best weights to all others and stores in localStorage (`verse-f770-genome`).
- Canvas2D renders the phase field (HSV hue from θ).
- DeviceOrientationEvent listened for tilt bias.
- WebXR presence detected (hand injection stubbed for future).

## Mechanics
1. Load: init phase grid with random θ and ω, spawn agents with random MLPs, restore sealed genome if present.
2. Pointer move/down: optionally reset nearby phases to 0.
3. Each frame: agents forward MLP, apply local freq/coupling bias, update positions, accumulate fitness; then Kuramoto step for all oscillators; render phase field.
4. Drag an agent to reward its fitness and reposition it.
5. Seal: lock and spread the highest-fitness genome.

## Expected outcome
Open: colorful phase field evolves, domains of synchronized hue form and move. DOM agents drift, change color with local phase, respond to device tilt (frequency bias). Dragging rewards fitness. Seal freezes a high-sync genome across agents. Fully interactive offline.

## Failure modes
No orientation: bias=0, still fully functional with pointer. Low-end device: reduce grid to 24×24. Storage blocked: session-only. No WebGPU needed (JS primary).

## Building blocks
Reusable pure-JS Kuramoto lattice stepper, local MLP genome, hybrid DOM agent controller on synchronization field, localStorage seal. Ready for Verse canvas as interactive spatial synchronization mind. Expandable to WebGPU compute kernel, WebXR hand as phase injector, IndexedDB/WebRTC multi-tab genome sharing.

Void is now Verse everywhere.

**Files**: drafts/F770-webgpu-kuramoto-phase-mlp-dom-agents-mind/SPEC.md, drafts/F770-webgpu-kuramoto-phase-mlp-dom-agents-mind/index.html
