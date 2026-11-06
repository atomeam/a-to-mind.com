# F599 WebGPU Causal Fourier Mind

**Ledger ID**: F-599 (frontier series)

**Slug**: webgpu-causal-fourier-mind

**Date**: 2026-11-05

## Concept
A frequency-domain substrate (spectral bins) continuously sculpted by a tiny local feed-forward MLP whose causal inputs are DeviceOrientation history and pointer velocity. The spectrum is embodied simultaneously as (1) a visual morphing lattice drawn on Canvas2D (bars + interference field approximating inverse-FFT structure) and (2) a generative Web Audio oscillator bank whose frequencies and gains follow the bins. Floating DOM portals sample local spectral energy, scale/hue accordingly, and accept click rewards that perform a simple Hebbian update on the MLP. High-fitness spectra seal to IndexedDB. Page chrome morphs with spectral entropy and centroid. Progressive: WebGPU compute path for true GPU FFT noted as next building block; full Canvas2D + Web Audio offline-capable prototype.

## Novelty
Leaves the recent cluster of spatial continuum/particle/physics kernels (SPH, Hopfield fluid, predictive fog, implicit SDF, bandit SVG, decision-tree clippath, RNN orientation DOM swarms, softbody, NCA, Lenia, Ising, Physarum, vortex, etc. from F548–F598). Core novel combination is a previously unused primary substrate—the frequency domain itself—driven by a causal local MLP, with dual visual-lattice + audio-synthesis embodiment from the same spectral vector, and reward-gated sealed genome transfer. Not spatial agents, not cellular automata, not residual predictors on motion, not attention lattices, not evolutionary genomes on physics parameters. The mind lives in spectrum space and sings its own structure.

## Architecture
- Single index.html, fully self-contained, offline after load.
- Tiny MLP (input 6 → hidden 12 → output 24 spectral bins) in main thread.
- DeviceOrientation (fallback pointer) + pointer velocity as causal features.
- Canvas2D full-screen spectral bars + low-frequency interference overlay.
- Web Audio: 12–24 OscillatorNodes + GainNodes driven by bins; master gain low.
- 4–6 absolute DOM portals that sample energy at their positions, morph, accept click → reward.
- Seal (S key / button) / restore (R) via IndexedDB key `verse-f599`.
- CSS custom properties drive chrome (background hue from centroid, pulse from entropy).

## Building blocks for next
Frequency-domain minds as transferable controllers; dual audio-visual embodiment from one spectral genome; GPU FFT inversion for true volumetric spectral fields; speech or mic feedback into the same spectrum.

## Failure modes
- AudioContext requires user gesture.
- DeviceOrientation needs secure context + permission.
- High bin count or many oscillators may hit performance; clamped.
- IndexedDB private mode → session only.
- No true WebGPU FFT in this prototype (Canvas2D primary).

## Expected outcome
A living spectral document that hears the device’s tilt and pointer, sings a generative score from its own evolving spectrum, and lets the user reward and seal preferred “voices,” expanding the frontier beyond spatial substrates into frequency-domain local minds.
