# F577 Orientation MLP Wave Equation Echo Mind

**Slug**: `orientation-mlp-wave-equation-echo-mind`  
**Date**: 2026-11-05  
**Ledger ID**: F-577

## Concept
A tiny local MLP (implemented in plain JS, 4-8-4) takes DeviceOrientation (beta/gamma tilt + recent angular velocity) as causal inputs and outputs wave-source parameters (normalized x/y, amplitude, damping bias). These drive a discrete 2D wave equation (finite-difference update with velocity and height fields) on a grid. The evolving height field is visualized on Canvas2D (or WebGPU if available for the step). Peaks above a threshold spawn or update floating DOM “echo nodes” that display a compact orientation signature and recent wave energy. Pointer clicks inject manual sources. A Seal button persists the MLP weights and last grid snapshot to IndexedDB. Fully offline single-file prototype.

## Novelty
Leaves the dominant recent cluster of discrete CA / CSS-Grid living layouts (F576), speech-NCA gardens (F575), sealed-genome CSS grids (F574), Q-learning spatial DOM agents (F573), ambient-sensor MLP tiles (F572), peer consensus morphs (F571), spatial-attention token morphs (F570), spoken-SDF morphs (F569), and prior NCA / SOM / lattice-gas / particle / attention / softbody / residual systems. Core novel combination is DeviceOrientation as direct causal input to a never-before-used local MLP that parametrizes a classic discrete wave-equation kernel (previously unused in any F- draft), with peak-driven embodiment of real DOM echo nodes. Not a cellular automaton, not reaction-diffusion, not neural weights on particles, not spectral residuals, not WebXR, not genome competition.

## Architecture
- Single index.html (progressive enhancement, offline after load)
- Tiny MLP: inputs [beta, gamma, dBeta, dGamma], hidden 8 tanh, outputs [srcX, srcY, amp, damp]
- Wave grid: 64×48 finite-difference (height + vel), sources from MLP each frame + click
- Visualization: Canvas2D colored by height; optional WebGPU compute stub
- DOM echo nodes: absolute cards spawned at peak locations, show signature text, draggable
- IndexedDB store `f577-wave-mlp-mind` for MLP weights + grid
- DeviceOrientationEvent (permission on iOS), pointer for injection
- Chrome: status, energy readout, Seal / Reset / Inject buttons

## Expected outcome
Runnable prototype: tilting the device (or moving mouse as proxy) drives the MLP which places sources; waves propagate visibly; high peaks spawn floating echo nodes that show the current orientation signature; clicks inject; Seal restores MLP and field across reloads. Works offline; graceful if no orientation.

## Mechanics
1. Init MLP random weights (or load), zero wave fields.
2. Each frame: read orientation (or pointer proxy), run MLP forward, inject source, step wave equation, paint canvas, spawn/update DOM echoes at peaks.
3. Click: inject high-amplitude source at pointer.
4. Seal: serialize MLP weights + grid to IndexedDB.
5. Drag echo: optional reinforce.

## Files
drafts/F577-orientation-mlp-wave-equation-echo-mind/SPEC.md
drafts/F577-orientation-mlp-wave-equation-echo-mind/index.html

## V01D landing
Orientation-MLP wave-equation skill under void-live-deploy/skills/orientation-wave-echo-mind.js; test asserts tilt input changes source position and that sealed MLP weights restore the same echo layout after reload.

## Frontier Engine F-577
Architecture: DeviceOrientation → local JS MLP → discrete 2D wave-equation kernel → Canvas visualization + peak-spawned DOM echo nodes + IndexedDB seal.  
Expected outcome: interactive spatial field of propagating waves whose sources are controlled by a tiny local model of device tilt, embodying echoes as living cards.  
Mechanics: orientation-driven source injection, finite-difference propagation, peak embodiment, sealed persistence.  
Outcome: prototype delivered; ready for ledger-guard append.
