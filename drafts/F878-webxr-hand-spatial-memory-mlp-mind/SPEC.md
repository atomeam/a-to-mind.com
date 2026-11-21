# F878 WebXR Hand Spatial Memory MLP Mind

## Concept
A progressive WebXR (or pointer-fallback) experience where hand joint or pointer motion injects into a persistent 2D spatial memory field stored in IndexedDB. A local tiny MLP (pure JS) takes hand velocity/position as causal input, queries the memory field for context, and outputs forces that control competing DOM portal agents. Reward clicks adapt the weights lightly; Seal broadcasts the genome via BroadcastChannel and persists memory+weights. Agents compete by fitness for space near memory peaks.

## Novelty
Leaves the dominant recent cluster of sensor-driven local policies (MLP/ESN/RNN/ES/Hebbian/decision-tree/Kalman/GP/k-NN) controlling particle/portal/fluid/SDF/neural-field/DOM substrates with sealed transfer (F867–F877). Core novel combination is WebXR hand tracking (or proxy) as direct causal input to a local MLP that both reads and is modulated by a persistent spatial memory grid (not continuum kernel, not particle attractor, not attention lattice), embodied as competing physical DOM portals whose layout is the mind's output. Memory itself is the shared field, not just genome parameters. Not previously built: hand-injected spatial memory as context for local model controlling hybrid UI agents.

## Architecture
- Single index.html (offline after load)
- Spatial memory: 32x32 decaying grid, inject on hand/pointer, query by portal position
- MLP: 4→6→3 tanh, weights persist
- Portals: 5 absolute DOM divs driven by MLP forces + memory attraction
- WebXR: optional immersive-vr with hand-tracking feature (stub + progressive pointer)
- Seal: IndexedDB `verse-f878` + BroadcastChannel `f878-genome` (higher fitness adopts)
- Fallbacks: no WebXR → pointer; no IDB → memory only

## Expected outcome
Move pointer or enter XR and move hand: memory field lights up and persists. Portals are attracted toward high-memory regions under MLP control. Click portals to reward; Seal and open second tab to transfer better genomes. Interactive spatial local-AI with persistent memory field for Verse.

## Failure modes
- WebXR unsupported → pointer proxy works.
- IDB blocked → in-memory only.
- Too many portals → capped at 5.

## Building blocks
Reusable spatial memory grid + MLP controller + WebXR hand proxy + sealed genome. Enables future true hand-joint feature extraction or multi-user WebRTC shared memory fields on Verse.

Void is now Verse everywhere.

**Files**: drafts/F878-webxr-hand-spatial-memory-mlp-mind/SPEC.md, drafts/F878-webxr-hand-spatial-memory-mlp-mind/index.html
