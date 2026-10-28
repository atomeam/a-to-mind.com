# F280 — WebGPU Spectral Causal Portal Mind

## Concept
Novel combination of a spectral (frequency-bin) wave lattice, a local Worker causal residual predictor, and active morphing DOM portals that feed impulses back into the lattice.

Branch away from F-275 acoustic residual, F-274 reservoir-gesture DOM chain, F-273 causal RNN memory field, and prior WebGPU density/attention/NCA lattices: substrate is bin-wise spectral diffusion with explicit impulse injection; mind is a residual predictor whose outputs directly drive portal parameters; portals are bidirectional actuators.

## Architecture
- Single `index.html` (no build step, offline).
- Main: 64-bin spectral lattice (Canvas2D render; WebGPU compute path noted), portal lifecycle, Web Audio spectrum drive, DeviceOrientation + pointer residuals.
- Worker: compact causal residual state (hidden vector updated by orientation delta, pointer velocity, spectral energy); emits predicted portal targets (x, y, scale, hue, attract).
- CSS 3D morph + hue on portals from residual.
- IndexedDB seal of residual signature on portal drag-end.
- Optional progressive WebXR entry (stub).

## Expected outcome
Field resonates and clusters under tilt/gesture. Portals spawn/morph according to predictor residual. Dragging a portal injects a visible spectral impulse and seals a fragment. Measurable: residual→portal transform stability, impulse→lattice energy change.

## Mechanics
1. User grants orientation / clicks for audio.
2. Lattice steps: diffusion across bins + residual-modulated rate.
3. Worker receives sensor residuals each frame, updates hidden state, posts portal parameters.
4. Portals sample lattice, apply transforms, on drag-end inject impulse + seal.
5. Audio oscillators modulated by bin energies.

## Failure modes
- No WebGPU → Canvas2D fallback (still interactive).
- No orientation → pointer-only residual.
- Worker latency → main-thread predictor stub.

V01D landing: spatial spectral-portal skill under `void-live-deploy/skills/` or tool under `tools/`. Test: residual signature hash matches sealed IndexedDB entry; impulse changes lattice energy > threshold.
