# F704 Local semantic note clusterer
Plain name: Local semantic note clusterer
Job: Paste notes or ideas one per line; the page embeds them locally with character n-gram vectors, clusters by cosine similarity, lays them out interactively in 2D space, and gives back grouped Markdown or JSON to keep.
Input: Textarea for notes (one per line), optional similarity threshold slider.
Keeps: Download clustered notes as .md or .json; last input and clusters saved in localStorage.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and GAPS — mind map exists but no automatic local embedding-based clustering of pasted notes with downloadable groups.

## Concept
A previously unused primary substrate for The Verse canvas: pure client-side semantic clustering of user notes via local character n-gram embeddings and cosine similarity, visualized and editable as a force-directed spatial layout on Canvas2D (with DOM labels). Orientation or pointer residual can gently bias cluster attraction. No external models, no network after load. Combines local AI-style embedding + interactive spatial organization in a way not present in prior frontier drafts (which were mostly field kernels or particle minds).

## Architecture
- Single index.html, self-contained, offline.
- Character 3-gram bag embeddings normalized to unit vectors.
- Greedy clustering or hierarchical by threshold.
- Canvas force layout: nodes repel, similar nodes attract.
- Labels as absolute DOM elements synced to canvas positions.
- localStorage key `verse-f704-notes`.
- Seal/download buttons.

## Mechanics
1. User pastes notes, clicks Cluster.
2. Embed, cluster, layout.
3. Drag nodes to rearrange; re-cluster optional.
4. Download groups.
5. Restore on reload.

## Expected outcome
Paste ideas, get spatial clusters, organize, download clean groups. Works on phone offline.

## Failure modes
- Very long notes: truncated n-grams.
- Many notes (>100): performance drops, warn.
- localStorage blocked: no persist.

Void is now Verse everywhere.

**Files**: drafts/F704-local-semantic-note-clusterer/SPEC.md, drafts/F704-local-semantic-note-clusterer/index.html
