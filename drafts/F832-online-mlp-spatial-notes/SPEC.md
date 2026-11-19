# F832-online-mlp-spatial-notes

**Plain name:** Online-learned spatial notes layout

**Job:** Paste notes (one per line). A tiny local MLP learns to map each note’s text features + DeviceOrientation bias into canvas positions. Drag cards to teach preferred layout. Download the organized map as JSON or copy as Markdown. Auto-saves to IndexedDB.

**Input:** Text notes, DeviceOrientation (or pointer residual), drag feedback as supervision.

**Keeps:** Download JSON, copy Markdown, IndexedDB persistence.

**Not on Verse yet:** checked against recent F- drafts (no online-supervised MLP that places user content cards from text features + orientation, with drag-as-label learning).

**Concept**
A useful local-AI spatial tool for The Verse canvas. User pastes notes. Each note is featurized (simple char-trigram hash or TF bag). A shared tiny MLP (2-layer, ~20-30 weights) predicts (x, y) position from the feature vector plus a DeviceOrientation-derived bias vector. Cards are absolute-positioned DOM elements. Dragging a card provides an online supervised update (simple gradient step or delta rule on the MLP for that example). Background is a light Canvas2D that shows the current “preferred direction” from tilt. Seal / export persists the current layout + model weights.

**Novelty**
Branches away from the dominant recent cluster of physics substrates (DEM granular, Gray-Scott, Kalman chains, PSO, CML, GP wavefields, Coulomb DOM swarms) and from k-means particle or fixed clustering (F831). Core novel combination is an *online-learned* tiny MLP whose supervision comes from the user’s own drag corrections, with DeviceOrientation as a causal bias input, controlling pure living DOM note cards that hold the person’s content. Not a simulation to watch; a tool that takes notes and returns a learned spatial organization the user can keep and refine. First online-supervised layout mind on Verse.

**Architecture**
- Single index.html (offline after load, progressive, mobile-friendly)
- Featurizer: simple normalized bag of character trigrams or word hashes into 8-16 dim vector
- MLP: input (features + 2 orientation) → hidden (8) → (x, y); weights in Float32Array, updated with plain JS SGD on drag-end
- Cards: contenteditable or static text, draggable, colored lightly
- Persistence: IndexedDB `f832-spatial-notes`
- Export: JSON download or Markdown copy

**Expected outcome**
Paste notes → initial placement → tilt device to bias → drag cards to preferred spots (model updates) → export or reload later with learned positions. Works offline.

**Mechanics**
1. Tokenize / featurize notes.
2. Forward MLP → place cards.
3. On drag end: compute loss vs new position, update weights once or a few steps.
4. Orientation event adds bias to input or to predicted position.
5. Export current assignment.

**Failure modes**
No notes: prompt. No orientation support: fall back to pointer. Too many notes: limit or warn. Model diverges: reset button.

**Building blocks**
Reusable pure-JS online MLP + text featurizer + drag-supervised layout. Enables future personal spatial organizers without external models.

**Files**
- drafts/F832-online-mlp-spatial-notes/SPEC.md
- drafts/F832-online-mlp-spatial-notes/index.html

Void is now Verse everywhere.
