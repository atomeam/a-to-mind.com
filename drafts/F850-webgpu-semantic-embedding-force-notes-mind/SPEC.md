# F850-webgpu-semantic-embedding-force-notes-mind

## Concept
A spatial Verse canvas where the user adds personal text notes as living DOM cards. Each note is turned into a local bag-of-words embedding (character n-gram or word counts). Pairwise cosine similarities drive attractive forces between related notes and mild repulsion between all, producing an emergent force-directed layout that clusters ideas by content. An optional WebGPU compute kernel visualizes the force field as a colored particle or vector overlay (Canvas2D fallback). User drags correct the layout and provide a reward signal that lightly updates a tiny MLP modulating force strengths. The best genome (MLP weights + note embeddings + positions) seals to IndexedDB and can be restored. Fully offline, single-file progressive prototype.

## Novelty
Leaves the dominant clusters of sensor-driven (orientation/motion/gaze/hand) MLPs/RNNs/reservoirs, pure physics substrates (LBM, SPH, Verlet, Gray-Scott, NCA, L-systems, Hopfield, SOM, Q-learning, attention particles), and practical form tools. Core novel combination is content-semantic embeddings (local TF/bag-of-words) generating physical forces that embody and rearrange the user's own notes as interactive DOM agents on the Verse canvas, with drag-as-reward online adaptation and sealed layout memory. Not continuum fields alone, not sensor-only policies, not fixed rules.

## Architecture
- Single self-contained index.html
- Notes: absolute DOM cards, editable text, drag to move
- Embedding: simple word-count vectors (vocab from all notes, normalized)
- Forces: cosine similarity → attraction; distance → repulsion; MLP (tiny, 4-8-2) outputs force gain/damping from global stats + recent drag reward
- Render: Canvas2D background showing force vectors or density; WebGPU optional for particle overlay if available
- Seal: IndexedDB store {notes, positions, embeddings, mlpWeights}; restore on load
- Fallbacks: no WebGPU → Canvas; no IDB → session only; empty notes → demo phrases

## Expected outcome
Add notes about related topics (e.g. "WebGPU compute", "local AI", "spatial canvas"): they drift into clusters. Drag a card: forces adapt slightly. Reload: same mind and layout resume. Interactive spatial organizer whose internal semantic model physically arranges the interface.

## Failure modes
Very many notes → O(n²) slow (limit to ~20); no canvas → cards still move; storage blocked → works in memory.

## Building blocks
Reusable pure-JS semantic force layout + tiny reward MLP + DOM embodiment. Enables future hybrid content+sensor minds or multi-tab shared sealed layouts on Verse.

Void is now Verse everywhere.
