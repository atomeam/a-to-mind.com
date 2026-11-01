# F486 — Orientation RNN DOM Physical Genome Auction Mind

## Concept
A population of hybrid-embodied agents exist as physical DOM elements (absolutely positioned cards). Each is controlled by its own local tiny Elman RNN that maintains sequential hidden state over DeviceOrientation samples (plus pointer attractor relative). The RNN outputs local force and stiffness deltas. Simple Euler physics under continuous orientation-derived gravity/wind, with AABB collision resolution. On collision the higher-fitness agent seals (SHA-256 hash of weights) and transfers a mutated genome to the weaker. DOM appearance (hue, scale, rotation, glow) is driven directly by RNN hidden-state energy. Full population seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of WebGPU LBM/photonic/wavelet/softbody/NCA/spectral-MLP field kernels, hand/gaze PBD/Verlet MLP competitions, and pure MLP-DOM transfers (F464). Core novel combination is DeviceOrientation as sequential causal input to independent local RNNs that physically embody and control their own DOM bodies, with sealed genome auction on physical AABB contact. Not residual predictors, not pure NCA, not spectral/audio residuals, not pointer-history fields, not softbody DOM meshes, not orientation-MLP, not WebGPU continuous kernels, not WebXR hand/gaze.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Agents: 6 DOM cards; each owns RNN weights (hidden=4, input=5: ox,oy,ax,ay,h_norm)
- RNN: Elman; h = tanh(W_xh @ x + W_hh @ h + b); force = W_hy @ h
- Physics: vel += force + orient_gravity * 0.15; pos += vel * dt; damping; bounds bounce; AABB separate + transfer
- Fitness: low kinetic energy + center proximity EMA
- Transfer: on overlap, hash winner weights, mutate-copy to loser (rate 0.08)
- Morph: CSS custom props --hue, --scale, --rot from ||h|| and angle
- IndexedDB: seal/restore all weights, hidden, positions, fitness
- Optional BroadcastChannel for top-genome share (multi-tab)
- Pointer: click sets attractor visible to all RNNs
- No external dependencies

## Expected Outcome
Tilt the device: agents drift, compete, morph under their RNN state, and auction sealed genomes on contact. Click to attract. Seal restores the living population. Works offline; graceful without orientation (pointer + zero bias).

## Failure Modes
- No DeviceOrientation permission or support → zero bias, still fully pointer-interactive.
- IndexedDB private mode/quota → no persist.
- High agent count on low-end → jank (fixed at 6).
- Mutation too aggressive → homogenization (tuned low).

## Interactivity
Request orientation. Tilt to bias physics. Click canvas or agents to set attractor or reward. Agents morph and transfer on collision. S or button to seal, R to restore. Reset button.

## Building Blocks
WebRTC true datachannel sealed genome exchange; WebGPU parallel RNN forward; CSS 3D transform physical constraints; sequence length extension on orientation history.

## V01D Landing
skills/mini/orient-rnn-dom-physical-auction; testable via tilt → agent motion + morph, collision → weight change, seal → IDB restore of RNNs + poses.

## Files
drafts/F486-orient-rnn-dom-physical-auction-mind/SPEC.md
drafts/F486-orient-rnn-dom-physical-auction-mind/index.html
