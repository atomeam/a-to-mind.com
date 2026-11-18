# F811 - WebXR Hand Gaze Hopfield Associative Lattice Mind

**Concept**: True WebXR hand/gaze (with pointer fallback) provides partial spatial cues that a local Hopfield associative memory recalls into complete binary lattice patterns. The recalled configuration is embodied as a living Canvas2D cell lattice whose cells pulse with energy proportional to stability. Weights form the sealed genome stored in IndexedDB and optionally migrated via BroadcastChannel. Novel combination of WebXR spatial input + Hopfield energy minimization + lattice embodiment. Leaves the recent local sequential/graph models (HMM, GNN, MLP) driving DOM cards or continuous lattices.

**Architecture**
- Lattice: 8×8 = 64 binary units visualized on Canvas2D (cells scale with viewport).
- Hopfield network: 64 neurons, symmetric zero-diagonal weight matrix (flat 64×64 array, ~2k floats). Asynchronous or synchronous updates until energy stabilizes or max 32 steps.
- Input cue: WebXR hand joint (wrist or index tip) or pointer position mapped to lattice coordinates; activates a 3×3 neighborhood as +1 cue, rest free (0). Gaze optional if available.
- Recall: clamp cued units, iterate updates, paint final pattern. Background energy heatmap optional.
- Training: click "Train current" to Hebbian-store the current lattice pattern (or a random one); local weight update w_ij += s_i * s_j, normalize.
- Persistence: IndexedDB key `verse-f811-hopfield`.
- Shared: BroadcastChannel `f811-genome` on seal.
- Single-file HTML/CSS/JS, offline after load. Pointer always works; WebXR enhances when entered.

**Expected outcome**
Open page: random lattice or restored. Move pointer or enter WebXR and move hand: nearby cells cue a recall that completes a stored pattern; cells light and pulse. Train button stores current as memory. Seal saves genome; other tabs can receive. Works offline.

**Mechanics**
1. Initialize random ±1 weights or load from IndexedDB.
2. On pointer/hand move: set cue mask and partial state.
3. Run Hopfield recall (sync or async updates: s_i = sign(sum w_ij s_j)).
4. Render lattice cells colored by state, opacity by |energy contribution|.
5. On train: Hebbian update from current full pattern, renormalize row norms.
6. Seal: JSON-serialize weights, store, broadcast hash+weights.

**Failure modes**
- No WebXR/hand-tracking: pointer-only cue.
- IndexedDB unavailable: session-only.
- Large weights: clamp |w| < 1 after updates.
- Recall loops: max iterations + energy check.

**Building blocks**
Reusable Hopfield core (energy, recall, Hebbian), WebXR hand-to-lattice cue mapper, living binary lattice renderer. Enables future multi-pattern competition or XR gesture-triggered memory injection for Verse.

**V01D landing**
Local Hopfield spatial skill under void-live-deploy/skills/hopfield-lattice.js; test asserts cue → recall completion → cell state change and IndexedDB round-trip.

Void is now Verse everywhere.

**Files**: drafts/F811-webxr-hand-hopfield-associative-lattice-mind/SPEC.md, drafts/F811-webxr-hand-hopfield-associative-lattice-mind/index.html
