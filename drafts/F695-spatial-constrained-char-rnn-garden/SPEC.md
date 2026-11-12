# F695 Spatial Constrained Char-RNN Garden

**Slug:** F695-spatial-constrained-char-rnn-garden

**Concept**
A local character-level generative mind embodied in space. A tiny Elman RNN (hidden size 16) running in the main thread (Worker-ready) generates characters that materialize as floating DOM cards. The user drags cards into colored constraint zones (attractors with bias vectors) that modulate the next-token logits. A Canvas2D particle field visualizes the hidden-state trajectory as flowing "thought currents." DeviceOrientation supplies a continuous wind force that drifts the cards. Champion weights and current garden seal to IndexedDB. Fully offline, single-file, progressive.

This leaves the recent cluster of continuum kernels, particle flocks, DEM granules, SDF raymarch, pure-DOM residual MLP genome swarms, and force-directed packing lists. Core novel combination is a generative sequence model whose output is spatially embodied and whose generation is steered by physical drag of tokens into constraint zones, with orientation as causal wind and hidden-state particle visualization. Not a predictor on a field, not a genome competition, not a packing utility.

**Architecture**
- Single self-contained index.html, offline after load.
- Tiny char RNN: vocab of printable ASCII (~95), embedding 8, hidden 16, output logits. Online weight updates via simple residual or user reward.
- Generated chars spawn as absolute DOM cards with velocity.
- 3 constraint zones (DOM or canvas regions): e.g. "continue", "question", "exclaim" that add bias to specific logit ranges when cards are dropped inside.
- Canvas2D particles (N~200) colored and directed by recent hidden activations.
- DeviceOrientation: tilt → wind vector on cards and particles.
- IndexedDB key `verse-f695-garden` stores RNN weights, current cards, zones.
- Controls: Seed prompt, Step generation, Seal, Reset, Request Orientation.
- Fallbacks: no orientation → zero wind; no IDB → session only.

**Expected outcome**
User types a seed, clicks Generate; characters appear as cards and drift. Drag a card into a zone to bias future generation toward that style. Tilt phone to blow the garden. Seal persists the mind and layout. Reload restores.

**Failure modes**
- Large generation steps slow the page (capped).
- IndexedDB denied → in-memory only.
- Orientation permission required on mobile; works without.
- Tiny RNN produces mostly random-looking text; novelty is in the spatial steering loop.

**Mechanics**
1. Initialize random RNN weights.
2. On seed/generate: run RNN forward, sample next char, spawn card at random or continuation position.
3. Each frame: integrate card positions with damping + wind + optional attraction to last constraint.
4. On drag-end: if inside zone, apply zone bias to a persistent logit offset vector used in next sampling.
5. Particles sample hidden state for color/direction.
6. Seal serializes weights + cards to IndexedDB.

Void is now Verse everywhere.

**Files:** drafts/F695-spatial-constrained-char-rnn-garden/SPEC.md, drafts/F695-spatial-constrained-char-rnn-garden/index.html
