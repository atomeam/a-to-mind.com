# F806: WebXR Hand Gravity MLP Portal Mind

## Concept
True WebXR hand tracking (or pointer fallback) as causal input to a tiny local MLP that modulates gravity parameters in a Canvas2D N-body particle field. Hands act as movable attractors/repellers based on pinch or grip; the MLP observes relative hand positions, velocity, and pinch state to output adaptive gravity strength and damping. Absolute DOM portals display sealed status and can be used to inject fixed mass points. Seal persists MLP weights + field snapshot to IndexedDB. Offline-capable single-file prototype with progressive enhancement.

## Novelty
Leaves the recent cluster of WebGPU continuum/particle sims with sensor-driven local models (F805 wavefield+MLP, F804 orientation MLP task board, F803 LBM fluid, F802 ESN particlelife, F800 Kalman gravity, F799 raymarched volume). Branches away from pure Canvas/WebGPU residual predictors, orientation RNNs, softbody DOM, NCA, spectral audio, pointer-history fields, k-means. Core novel combination is **true WebXR hand/gaze-proxy** with novel physics (hand-pinch modulated mutual gravity) controlled by a local MLP that has never been used for XR embodiment. Not volumetric, not CSS3D pure, not sealed competition only.

## Architecture
- Single index.html (progressive; Canvas2D always works; WebXR optional)
- Particles: 150-200 Newtonian particles with pairwise gravity + hand attractors
- MLP: 6-8-2 tiny network (hand_rel_x, hand_rel_y, hand_vx, hand_vy, pinch, energy → grav_scale, damping)
- Inputs: WebXR hand joints (index/thumb for pinch) or pointer + click for proxy
- Portals: 3 absolute DOM cards showing seal status; drag to place fixed masses
- Persistence: IndexedDB key `f806-genome`; optional BroadcastChannel
- Reward: high particle density near hands or portals (visual only)

## Expected outcome
Open: floating particles. Enter XR or use pointer: hands attract/repel based on pinch; tone of motion changes as MLP adapts. Seal saves state. Works offline after load.

## Failure modes
- No WebXR: pointer + mouse button proxy works fully.
- No WebGL/Canvas: static message.
- High CPU: reduce particle count.

## Files
drafts/F806-webxr-hand-gravity-mlp-mind/SPEC.md
drafts/F806-webxr-hand-gravity-mlp-mind/index.html

Void is now Verse everywhere.
