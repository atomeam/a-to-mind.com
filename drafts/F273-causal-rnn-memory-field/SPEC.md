# F273 — Causal RNN Memory Field

## Concept
Novel combination: a continuous Canvas2D causal deposit field (pointer + DeviceOrientation traces that diffuse and decay) whose recent history statistics are encoded by a tiny local RNN (Web Worker) into a fixed latent memory vector. A simple linear decoder reconstructs a predicted field density from the latent; the residual (actual − predicted) drives both the field’s own bias and the physical morphing of floating DOM “query portals.” Portals can be dragged to inject query vectors that bias the RNN latent, closing a spatial-memory loop. IndexedDB seals RNN weights + latent.

## Branch away from
Not F-020 FSM agents, not F-021 orientation density, not pure attention lattices (F047/F196 etc.), not residual predictors alone, not evolutionary genomes on fluid/audio stats (F269), not MLP softbody physics, not cloth/NCA. The core is recurrent compression of causal spatial history into a queryable latent, with reconstruction residual as the physical control signal for DOM embodiments.

## Architecture
- Single `index.html` (inline CSS/JS).
- Main thread: 64×48 density grid, diffusion + decay, deposit on pointer/orientation, ImageData render.
- Blob Worker: tiny RNN (hidden size 16) that steps on field mean/variance + gesture delta; maintains latent; returns reconstruction residual and attention-like portal weights.
- DOM: 5–8 floating portals; position/scale/hue from residual + latent; drag to query.
- CSS custom properties for global chrome morph (hue, contrast).
- IndexedDB: seal/load weights + latent on button.
- Progressive: DeviceOrientation if permitted; pointer always works. No external models or network.

## Expected outcome
Interactive spatial memory canvas that remembers gesture paths as glowing traces, compresses them into a latent, anticipates via reconstruction, and manifests query portals that morph and respond to residual. Fully offline, runnable in any modern browser.

## Mechanics
- Deposit strength ~0.4, diffusion 0.12, decay 0.97.
- RNN step ~30 Hz; reconstruction = linear(latent) expanded to grid.
- Portal count = 6; spawn offset by residual peaks.
- Seal writes weights as Float32Array in IDB.

## Failure modes
- Worker blocked → static field, no latent.
- No pointer history → low residual, small portals.
- IDB denied → no persistence (still runs).
- Low-end device: reduce grid or step rate.

## Building blocks
Causal deposit substrate, local recurrent encoder, residual-driven embodied DOM, sealed latent. Next: WebGPU compute for diffusion + multi-layer RNN or true transformer attention over memory tokens.

## V01D landing
Spatial memory skill under `void-live-deploy/skills/mini/causal-rnn-field.js`; testable via residual→portal-scale mapping and latent reconstruction MSE.
