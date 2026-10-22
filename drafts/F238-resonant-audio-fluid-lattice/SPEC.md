# F-238 Resonant Audio Fluid Lattice

**Date:** 2026-10-22  
**Status:** runnable prototype  
**Slug:** F238-resonant-audio-fluid-lattice

## Concept
Novel combination of:
- Canvas2D particle fluid (viscous agents with mutual attraction and boundary bounce)
- Multi-modal input: DeviceOrientation bias + Web Audio AnalyserNode amplitude
- Tiny residual predictor (tanh MLP-like on feature history) that modulates viscosity and force strength
- Density-peak orbs (DOM elements) that can be dragged to inject momentum back into the lattice
- CSS custom properties + filter morph on page chrome driven by global density and AI residual
- Seal snapshot (residual, history, density) to IndexedDB

Builds on prior orientation/audio/MLP/morphing-DOM cluster (F-229–F-237) by making the fluid itself the medium that the residual mind controls, and by closing the loop through physically draggable peak orbs that alter the simulation the mind is predicting.

## Architecture
- Main thread: particle step, drawing, orb peak detection, CSS morph, sensor listeners
- No Worker required for the residual (kept tiny and inline for zero-latency)
- Orbs are pure DOM, positioned at sampled density peaks, pointer-drag injects velocity
- Chrome (HUD border-radius, body filter) reacts continuously to `--density` and `--ai`

## Expected outcome
Tilt the device or make sound → particles stream and cluster; peaks spawn orbs; drag an orb to stir the lattice; residual and viscosity shift visibly; page hue and glow follow the activity. Seal button persists a compact state.

## Failure modes / notes
- DeviceOrientation requires HTTPS + user gesture (and permission on iOS)
- Mic requires secure context + user gesture
- Peak detection is coarse grid sampling (not true fluid density field)
- Residual is a fixed-weight demo, not trained; serves as closed-loop control signal
- Canvas2D fallback only; no WebGPU in this pass (next experiment can port the force kernel)

## V01D landing
Would land as a skill under `void-live-deploy/skills/resonant-fluid` or a canvas mode in the Void page. Test: orientation + audio change particle streaming and orb count within 2 s; seal round-trips via IndexedDB.
