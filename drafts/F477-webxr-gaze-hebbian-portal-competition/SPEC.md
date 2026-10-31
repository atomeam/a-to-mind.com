# F477-webxr-gaze-hebbian-portal-competition

## Concept
WebXR Gaze Hebbian Portal Competition Mind: Optional WebXR session (immersive-ar preferred; inline or pointer fallback) provides a gaze ray or pointer as the sole causal cue. A population of spatial agents (Canvas2D orbs) each carries a local tiny Hebbian weight matrix (8×8 associations). Gaze proximity co-activates an agent’s state vector; Hebbian update strengthens associations between gaze features and agent identity. Agents compete for limited “portal energy.” When two agents collide while one is under sustained gaze focus, a sealed (SHA-256 hashed fragment) transfer of the stronger Hebbian weights occurs to the weaker agent. Recalled associations bias agent velocity toward the gaze hit point via simple spring forces. State seals to IndexedDB. Fully offline after load.

## Novelty
Leaves the dominant recent cluster of WebGPU SDF/NCA/acoustic/spectral-policy/attention/particle morph-minds, DeviceOrientation MLP auctions, WebXR hand-MLP residual genome competition, and WebRTC-IDB occupancy (F464–F476). Core novel combination is WebXR gaze (or pointer) as exclusive causal cue into a local Hebbian associative model whose sealed weight fragments transfer only on gaze-gated collision, with agents under spring-constraint physics toward the gaze portal. Not residual predictors, not pure MLP policy evolution, not spectral audio, not orientation wind, not hand-grasp genome, not WebGPU continuous field kernels.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- WebXR: try immersive-ar or inline with gaze/hand pointer; fallback mouse/touch pointer
- Agents: 16 Canvas2D orbs with position, velocity, energy, Hebbian matrix (Float32Array)
- Hebbian: outer-product update on gaze-coactivation; decay
- Transfer: on gaze-sustained + collision, compare activation, hash and mutate-copy winner weights
- Physics: Verlet-like + spring to gaze hit if focused
- IndexedDB: seal/restore population, matrices, metrics
- CSS custom properties from average energy / association strength for chrome morph
- No external dependencies

## Expected Outcome
Move pointer or enter XR and look: agents swarm toward your gaze, form associations, compete and transfer sealed memories on contact. Seal restores a living competitive associative population. Works offline; graceful without XR.

## Failure Modes
No WebXR (pointer fallback), XR permission denied, IndexedDB private-mode, low-end device (reduce agents).

## Building Blocks
WebGPU for larger Hebbian populations, WebRTC sealed transfer across peers, DeviceOrientation as additional co-activation cue, on-device fine-tune of association strength.

## V01D Landing
skills/mini/webxr-gaze-hebbian-portal; testable via gaze+collision → weight change, association strength increase, seal → IDB restore.

## Files
drafts/F477-webxr-gaze-hebbian-portal-competition/SPEC.md
drafts/F477-webxr-gaze-hebbian-portal-competition/index.html
