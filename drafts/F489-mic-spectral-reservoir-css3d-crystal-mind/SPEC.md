# F489 — Mic Spectral Echo-State Reservoir CSS3D Crystal Mind

## Concept
Live microphone audio is analysed into spectral bins that continuously drive a shared local echo-state reservoir (fixed random recurrent weights, spectral radius scaled). The reservoir state is projected onto a population of CSS 3D floating crystals inside a perspective scene. Each crystal’s position, velocity, hue, scale, and glow are driven by slices of the reservoir vector. Crystals interact with simple state-similarity forces (attract similar, repel dissimilar), producing emergent spatial clusters. High reservoir energy or user click seals a SHA-256 hash of the current spectral-reservoir state to IndexedDB as a recallable tone memory that can bias future input. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of WebGPU continuous field kernels (LBM, photonic, wavelet, softbody, NCA), particle self-attention swarms, orientation Elman RNNs / reservoirs with DOM auctions (F486–F488), and pure MLP-DOM transfers. Core novel combination is live mic spectral features as sequential input to a shared echo-state reservoir that physically embodies and morphs interactive CSS 3D crystals which interact spatially and seal spectral memories. Not device-orientation sequential nets, not AABB genome auctions, not residual predictors, not pure NCA, not WebGPU compute kernels, not WebXR hand/gaze, not attention lattices.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Audio: getUserMedia + AnalyserNode → 8 spectral bins (normalised log magnitude) as input vector
- Reservoir: N=24, fixed random W_res (spectral radius ~0.85), W_in; h = tanh(W_res @ h + W_in @ x + b) each frame
- Crystals: 7 absolutely-positioned divs inside a perspective container; each owns a 3-slice of h for pos/hue/scale
- Physics: vel += similarityForce * 0.3 + pointerBias; pos += vel; soft bounds; damping
- Similarity: cosine between crystal state slices → attract if >0.4 else repel
- Morph: CSS custom props --hue, --scale, --glow, transform: translate3d + rotate from reservoir angle
- Seal: on energy > threshold or click, SHA-256(h + bins) → IndexedDB; restore biases input
- Pointer: mouse/touch sets global attractor
- No external dependencies

## Expected Outcome
Grant mic: crystals float, pulse, and cluster in 3D space in response to voice, music, or ambient sound. Speak or make noise to drive motion and morph. Click a crystal to seal its memory. Seal/restore buttons persist the mind. Works offline after load; graceful without mic (pointer + noise drive).

## Failure Modes
- No mic permission or getUserMedia fail → zero spectral input, still fully pointer-interactive with noise.
- IndexedDB private mode/quota → no persist.
- High crystal count or large reservoir on low-end → jank (fixed small).
- Reservoir spectral radius too high → instability (scaled to 0.85).
- Audio context suspended until user gesture.

## Interactivity
Request mic. Speak, hum, or play sound to drive crystals. Move pointer to attract. Click a crystal to seal it. S or button to seal full state, R to restore. Reset clears.

## Building Blocks
WebGPU parallel reservoir + crystal force compute; WebXR hand as 3D attractor; OPFS for long spectral history; multi-tab BroadcastChannel of sealed tone hashes; online ridge readout trained on user rewards.

## V01D Landing
skills/mini/mic-spectral-reservoir-css3d-crystal; testable via mic → crystal motion + morph, click crystal → IDB seal, restore → state bias.

## Files
drafts/F489-mic-spectral-reservoir-css3d-crystal-mind/SPEC.md
drafts/F489-mic-spectral-reservoir-css3d-crystal-mind/index.html
