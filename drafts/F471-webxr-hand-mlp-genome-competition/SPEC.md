# F471-webxr-hand-mlp-genome-competition

## Concept
WebXR Hand-MLP Genome Competition Mind: Immersive or inline WebXR session (hand-tracking preferred; mouse/touch proxy fallback) drives a local tiny MLP (4-8-2) per competitive agent. Agents are spatial orbs on a Canvas2D field. Each carries a sealed genome (MLP weights). Hand pinch/grasp or proxy click near an agent “selects” it; when two agents collide while one is grasped, a sealed genome transfer occurs: the lower-fitness agent donates a mutated copy of its weights to the higher-fitness one. Fitness is the negative residual of the MLP’s one-step prediction of the next hand position. DeviceOrientation (optional) adds a weak bias to agent drift. Sealing stores population genomes, positions, and hand residual stats to IndexedDB for living restore. CSS chrome morphs with average residual entropy.

## Novelty
Leaves the recent WebGPU attention/evo/Hebbian/spectral/causal lattice-particle-residual-DOM cluster (F465–F470). Not a variation of prior WebXR hand pieces (verlet genome portal, ising MLP, PBD constraint, gaze DOM physics) or competitive fields. Core novel combination is hand-grasp contact as the exclusive sealed-genome-transfer gate, with fitness defined by the local MLP’s prediction residual on the same hand trajectory. No attention mechanism, no residual field injection, no NCA, no spectral audio, no softbody DOM.

## Architecture
- Single index.html (progressive enhancement, offline after load)
- WebXR: optional immersive-ar or inline session with hand-tracking; fallback pointer events
- Agents: 12–24 Canvas2D orbs, each with MLP weights (Float32Array)
- MLP: pure-JS forward (tanh), weights evolve only via sealed transfer + small mutation
- Contact transfer: on grasp+collision, compare residuals, mutate and copy winner←loser
- IndexedDB: seal/restore population + metrics
- Optional DeviceOrientationEvent for gravity bias
- CSS custom properties from residual entropy for chrome morph
- No external deps

## Expected Outcome
Interactive spatial canvas where hand (or pointer) grasp mediates competition; agents “eat” genomes via contact; local MLPs improve at predicting the hand; sealing restores a living competitive population. Fully offline; graceful without XR or orientation.

## Failure Modes
No WebXR/hand-tracking (pointer fallback), XR permission denied, IndexedDB private-mode quota, orientation denied (bias=0), low-end device (cap agents).

## Building Blocks
WebGPU compute for larger agent populations, BroadcastChannel multi-tab shared genomes, WebRTC sealed transfer across peers, on-device fine-tune of MLP via residual.

## V01D Landing
skills/mini/webxr-hand-mlp-genome-competition; testable via grasp+collision → genome change, residual decrease, seal→IDB restore.

## Files
drafts/F471-webxr-hand-mlp-genome-competition/SPEC.md
drafts/F471-webxr-hand-mlp-genome-competition/index.html
