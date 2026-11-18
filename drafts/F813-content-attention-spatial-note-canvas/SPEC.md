# F813 Content-Attention Spatial Note Canvas
Plain name: Spatial notes that cluster by content
Job: Paste or type notes; related ones automatically drift together on a living canvas so you can see clusters; drag to rearrange, edit in place, export as Markdown or JSON.
Input: Text fields on each note card (create new by double-click or button); pointer drag to move.
Keeps: Positions, texts and learned embeddings saved in IndexedDB; download Markdown or JSON of the whole board; shareable hash in URL optional.
Not on Verse yet: checked against llms.txt (mind-map maker exists but is manual; no auto-clustering by local attention) and GAPS.md (no spatial content-clustering note tool).

**Ledger ID**: F-813
**Slug**: content-attention-spatial-note-canvas
**Date**: 2026-11-18
**Branch from**: Recent cluster of WebGPU SPH hand policy (F812), spatial weekly timecard (F811), local GNN dynamic graph (F810), local HMM spatial intent (F809).

**Concept**
A spatial canvas of user-editable DOM note cards. Each card maintains a small local embedding (bag-of-words hashed into a fixed dim vector). A pure-JS multi-head attention mechanism computes content similarity (plus a weak positional bias). High attention scores generate attraction forces so semantically related notes physically cluster; low attention allows repulsion or free drift. User typing updates embeddings live; dragging injects a temporary "user intent" boost that the attention matrix can reinforce via simple Hebbian update. Background Canvas2D draws attention edges. Fully offline, single-file. Pointer always works.

**Novelty**
Leaves the recent continuum/physics cluster (SPH/LBM/lattice-gas/particles), orientation/motion RNN/MLP/Hopfield/GNN/HMM controllers on fixed fields or non-content DOM, and manual spatial boards. Core novel combination is content-derived embeddings + multi-head attention driving physical force layout of living editable text cards that the user authors. Not residual predictors, not pure physics, not sealed genomes on agents, not WebGPU compute kernels, not sensor-only causal input.

**Architecture**
- 8–16 absolute-positioned contenteditable or textarea DOM cards.
- Embeddings: dim=16, simple token hash + count, L2-normalized.
- Attention: 2 heads, Q/K/V from embeddings (tiny learned or fixed projection matrices that Hebbian-update on drag).
- Forces: attraction ∝ attention score, soft repulsion at close range, damping, weak center.
- Persistence: IndexedDB `verse-f813-notes`.
- Export: Markdown (## title\nbody) or JSON.

**Expected outcome**
Open: empty or restored notes. Type related phrases (e.g. "groceries milk bread" and "shopping list"); they drift together. Drag to separate; typing updates clusters live. Seal/export works. Runs offline on phone/desktop.

**Failure modes**
- No IndexedDB: session memory only.
- Very long notes: truncate embedding window.
- High card count: limit to 12, lower update rate.

**Building blocks**
Reusable content-embedding + attention-force layout for future spatial knowledge canvases on Verse.
