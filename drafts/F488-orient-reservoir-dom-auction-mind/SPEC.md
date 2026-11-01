# F488 — Orientation-Driven Echo State Reservoir Mind with Hybrid DOM Embodiments and Sealed Readout Auction

## Concept
A population of hybrid-embodied agents exist as physical DOM cards. Each owns a tiny echo-state reservoir (fixed random recurrent weights, spectral radius scaled) that maintains sequential state over DeviceOrientation samples plus relative pointer attractor. A trainable linear readout maps the reservoir state to local force and morph deltas. Simple Euler physics under continuous orientation-derived gravity. On AABB collision the higher-fitness agent seals a SHA-256 hash of its readout weights and transfers a mutated copy to the weaker agent. DOM appearance (hue, scale, rotation, glow) is driven directly by reservoir energy. Full population seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of WebGPU/Canvas continuous field kernels (NCA, softbody, wavelet, photonic waveguide, LBM), particle self-attention swarms, orientation Elman RNNs, and pure MLP-DOM transfers (F480–F487). Core novel combination is DeviceOrientation as sequential causal input to independent local echo-state reservoirs (fixed random recurrence, only readout trained/evolved) that physically embody and control their own DOM bodies, with sealed readout auction on physical AABB contact. Not residual predictors, not pure NCA, not spectral/audio residuals, not pointer-history fields as force, not softbody DOM meshes, not attention lattices, not trained RNNs, not WebGPU continuous kernels, not WebXR hand/gaze.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Agents: 5 DOM cards; each owns reservoir (N=8, spectral radius ~0.9) + readout weights (8→3: fx, fy, morph)
- Reservoir: fixed random W_res, W_in; h = tanh(W_res @ h + W_in @ x + b); x = [ox, oy, px_rel, py_rel, energy]
- Readout: linear; force/morph = W_out @ h
- Physics: vel += force + orient_gravity * 0.12; pos += vel * dt; damping; bounds bounce; AABB separate + transfer
- Fitness: low kinetic energy + pointer proximity EMA
- Transfer: on overlap, hash winner readout, mutate-copy to loser (rate 0.06)
- Morph: CSS custom props --hue, --scale, --rot from ||h|| and angle
- IndexedDB: seal/restore all readouts, reservoir states, positions, fitness
- Pointer: click sets attractor visible to all reservoirs
- No external dependencies

## Expected Outcome
Tilt the device: agents drift, compete, morph under their reservoir state, and auction sealed readouts on contact. Click to attract. Seal restores the living population. Works offline; graceful without orientation (pointer + zero bias).

## Failure Modes
- No DeviceOrientation permission or support → zero bias, still fully pointer-interactive.
- IndexedDB private mode/quota → no persist.
- High agent count on low-end → jank (fixed at 5).
- Mutation too aggressive → homogenization (tuned low).
- Reservoir spectral radius too high → instability (scaled to 0.85).

## Interactivity
Request orientation. Tilt to bias physics. Click canvas or agents to set attractor or reward. Agents morph and transfer on collision. S or button to seal, R to restore. Reset button.

## Building Blocks
WebRTC true datachannel sealed readout exchange; WebGPU parallel reservoir forward; CSS 3D transform physical constraints; online ridge regression on readout from user rewards; multi-head reservoir.

## V01D Landing
skills/mini/orient-reservoir-dom-auction; testable via tilt → agent motion + morph, collision → readout change, seal → IDB restore of reservoirs + poses.

## Files
drafts/F488-orient-reservoir-dom-auction-mind/SPEC.md
drafts/F488-orient-reservoir-dom-auction-mind/index.html
