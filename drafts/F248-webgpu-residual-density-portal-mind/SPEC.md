# F-248 · WebGPU Residual Density Portal Mind

## Concept
Novel combination of:
- Coarse residual density lattice (Canvas2D today, WebGPU compute path noted) whose cells hold short residual embeddings that diffuse under a residual-driven rate.
- Local Web Worker residual MLP (evolutionary hill-climb) that consumes device orientation tilt, microphone spectral energy, and a compact pointer-trajectory embedding; predicts next lattice residual norm. The residual error modulates diffusion, portal attraction, and page chrome.
- Floating DOM memory portals that query local lattice residual/density, receive 3D CSS transforms, scale, hue and backdrop-filter from those samples, and, when dragged, consolidate nearby residual embeddings into a sealed memory fragment written to IndexedDB while injecting a radial density wave.
- Progressive WebXR session entry that can promote portals toward spatial anchors.
- Generative Web Audio oscillators driven by residual spectrum.

Not a superficial variation of F-247 (free causal token particles with attention forces and passive thought-orbs): the substrate is a fixed residual density lattice with an explicit consolidation action performed by the portals themselves; the mind is a residual predictor of lattice entropy from multi-modal sensors rather than an attention-bias policy; embodiment is active memory-consolidating portals rather than passive orbs.

## Architecture
Single `index.html`. Main thread steps a 64×36 residual lattice, renders density to Canvas2D, positions and morphs DOM portals, updates CSS custom properties, and drives AudioContext. Blob Worker receives residual summary + sensors, runs a tiny residual MLP + hill-climb, returns best diffusion/portal/hue parameters every ~800 ms. IndexedDB stores sealed fragments. Optional XR entry.

## Expected outcome
Interactive residual density field that clusters and recolors under tilt, ambient sound and gesture. Portals drift toward high-residual peaks, morph in 3D, and when dragged consolidate a fragment and seed a visible wave. Page chrome and tones pulse with residual. Runnable offline. XR when supported.

## Mechanics
- Lattice cells: residual scalar + 2-dim embedding; diffusion rate from worker residual.
- Worker inputs: [tiltX, tiltY, spectralEnergy, trajSpeed, currentResidual]; outputs: [diffRate, portalGain, hueShift]; fitness = −|predicted − actual residual|.
- Portals: 5 absolute cards; lerp to peak residual cells; CSS rotateX/Y, scale, hue, blur from local residual + global residual.
- Drag: average nearby embeddings, SHA-style hash + params sealed to IndexedDB, inject radial residual wave.
- CSS vars: --hue, --blur, --contrast from residual.
- Audio: 2 oscillators, frequency/gain from residual and spectral energy.

## Failure modes
No Worker → static diffusion. Mic denied → spectral = 0. No orientation → tilt = 0. Canvas2D only (WebGPU stub). XR unsupported → pointer complete. Audio blocked until user gesture.

## Building blocks
Pure WebGPU residual density compute kernel, true residual transformer in the worker, multi-portal consensus seals, XR spatial consolidation rays. Next: multi-agent residual minds sharing a global consolidation buffer.

## V01D landing
Spatial residual-density-portal skill under `void-live-deploy/skills/`; testable via residual→portal scale stability and drag→IndexedDB seal + wave injection.
