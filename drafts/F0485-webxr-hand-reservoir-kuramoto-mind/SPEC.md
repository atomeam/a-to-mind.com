# F0485 WebXR Hand Reservoir Kuramoto Mind

## Concept
WebXR hand pose (or DeviceOrientation + pointer fallback) drives a local Echo State Network (reservoir of 64 leaky units). The reservoir readout continuously sets natural frequencies ω and coupling K of a 32×32 Kuramoto phase-oscillator lattice simulated in a WebGPU compute shader (Canvas2D Euler fallback). Four living DOM portals phase-lock to lattice regions; their CSS transforms and glow track local order parameter r. High local coherence seals the current reservoir readout genome and transfers a mutated copy to a weaker portal on contact. Full state (phases, reservoir weights/state, portal bindings) seals to IndexedDB. Fully offline after load.

## Novelty
Leaves the recent cluster of photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA, and SDF recurrent reasoners. Core novel combination is reservoir computing (ESN, not MLP/RNN-policy) driven by true WebXR hand/gaze or DeviceOrientation, controlling a previously unused Kuramoto oscillator lattice kernel, with phase-coherence (order parameter) gating sealed genome transfer onto living phase-locked DOM portals. Not softbody, not wavelet, not photonic waveguide, not NCA, not attention lattice, not residual predictor.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Input: WebXR hand (if available) → DeviceOrientation → pointer velocity as reservoir drive
- Reservoir: 64-unit leaky ESN; spectral radius ~0.9; readout → 2 params (ω mean, K)
- Lattice: 32×32 phases; WebGPU compute Kuramoto step or JS Euler
- Portals: 4 DOM cards; local order parameter r drives scale/hue/glow; bind to lattice quadrants
- Transfer: when local r > 0.75 and portals near, seal leader readout, mutate, assign to weak
- IndexedDB: seal/restore phases, reservoir state/weights, portal params
- CSS custom properties from global order parameter for chrome morph
- No external dependencies

## Expected Outcome
Move hand/device/pointer: reservoir drives lattice frequencies; oscillators synchronize in regions; portals lock phase, glow and scale with coherence. Evolution improves locking. Seal restores living lattice + reservoir. Works offline; graceful Canvas2D path without WebGPU or WebXR.

## Failure Modes
- WebXR or DeviceOrientation permission denied → pointer only.
- WebGPU unavailable (Canvas2D fallback).
- Large lattice or high K causes phase slip or jank (keep ≤32²).
- IndexedDB private mode or quota.
- Reservoir washout if leak rate extreme.

## Interactivity
Move hand (WebXR), tilt device, or pointer to drive the reservoir. Portals morph with local order. Click to inject a phase kick. S to seal, R to restore. Buttons to reset lattice or toggle coupling.

## Building Blocks
Larger WebGPU Kuramoto with mean-field or chimera states, true multi-user WebRTC phase fragment exchange, OPFS full phase history, hand-gesture discrete events as reservoir inputs.

## V01D Landing
skills/mini/hand-reservoir-kuramoto-mind; testable via hand/orientation → order-parameter rise + portal glow, coherence → genome transfer, seal → IDB restore of phases + reservoir.

## Files
drafts/F0485-webxr-hand-reservoir-kuramoto-mind/SPEC.md
drafts/F0485-webxr-hand-reservoir-kuramoto-mind/index.html
