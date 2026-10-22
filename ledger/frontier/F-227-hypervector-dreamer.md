# F-227 — Hypervector Dreamer

Date: 2026-10-21 · Draft: `drafts/F227-hypervector-dreamer/`

## Concept (novel combination)
Hyperdimensional computing (vector-symbolic memory) + wave function collapse + a 3D world whose undecided cells physically show the solver's uncertainty. You paint a small example land; every adjacency "tile a has tile b to its right/below/left/above" is bound into a hypervector key `T[a] XOR rotate_d(T[b])` and added to one integer accumulator per direction. Painting adds and subtracts keys in place, so the memory is edited live, never retrained. The bundle is then decoded by matching pursuit (explaining away): take the key that best explains the remaining memory, estimate its count, subtract it, and stop when the best remaining key is within the memory's own crosstalk noise (z < 4). The recovered rules drive a wave-function-collapse dreamer with local repair (reset a small hole around a contradiction and re-propagate from its border instead of restarting). In WebGL2 every undecided cell is a translucent pillar coloured by the mix of tiles it could still be, with height set by how many options are left, so the world visibly condenses as the solver commits. A damage slider negates a chosen fraction of memory dimensions to show graceful forgetting, and a toggle squashes the memory to 1 bit per dimension.

## Why it is not a variation
Grep of ledger and drafts before this run: hyperdimensional / vector symbolic 0 hits, wave function collapse 0, hopfield 0, matching pursuit 0. Earlier runs used neural nets (MLP/RNN/NCA), spiking nets (F-217), compression (F-210, F-215) and n-gram models (F-225) as minds. None used algebraic hypervector binding as memory, none decoded a superposition by explaining away, and none used a constraint solver whose uncertainty is the rendered geometry.

## Architecture
- `core.js` (ES module, runs in Node and the browser): `TileMind(nTiles, D)` with `observe`, `learnMap`, `edit` (unlearn old relations, learn new ones), `setDamage(p)`, `keys()` (bipolar keys plus their Gram matrix per direction), `decode(mode, z)` (matching pursuit; dot products are updated through the Gram matrix so each peel costs O(keys) instead of O(D)), `rules()` (symmetrised allowed-neighbour bitmasks); `WFC` (bitmask cells, min-entropy weighted collapse, stack propagation, local repair, gives up after 400 repairs); `exactRules`, `violations`, `sampleMap` (value-noise heightmap quantised into 7 terrain bands plus a road row).
- `index.html`: paintable 24×24 sample (persisted in localStorage), palette, memory-size select (512 / 2048 / 8192), damage slider, 1-bit toggle, rule heatmap, live stats; WebGL2 instanced boxes (solids first, then blended ghost pillars by moving the instance attribute offset) with a slow orbit; Canvas2D fallback; WFC time-sliced at 6 ms per frame; `window.__f227` and `?auto=1` for tests.

## Measured outcome
Node (`bench-node.json`, 5 procedural 24×24 samples, 150–164 true directed rules each):
- Matching-pursuit decode, integer memory, no damage: precision 1.0 and recall 1.0 at D = 2048 and 8192; recall 0.88 (0.99 of rules seen at least twice) at D = 512.
- The same memory read with one-shot thresholded scoring (`bench-oneshot-z4.json`) only reached recall 0.60 at D = 8192 and 0.17 at D = 512, because the very common same-tile pairs (deep next to deep, counts near 100) swamp rare pairs with crosstalk. Explaining away is what makes the memory readable: about 4× the recall at D = 512 for no extra storage.
- 1-bit memory with pursuit: recall 0.62 at D = 8192 (binarising loses count information, so peeling leaves residue).
- Damage (negating a fraction of dimensions), D = 8192 integer: 20% → recall 0.59, 35% → 0.24, 45% → 0.01. Precision stayed 1.0 at z = 4 across every setting; at z = 3 it drops to 0.93 under heavy damage.
- WFC 40×40, 40 runs per rule source: exact rules, HDC D = 8192, HDC D = 512 and the 1-bit memory all finished with 0 failures and 0 rule violations against the true example. With 35% damage it still never failed (0.23 repairs per run) but produces simpler worlds, since fewer rules survive.
- Timing: learn a 24×24 sample at D = 8192 ~95 ms, decode ~120 ms (first call builds keys and Gram), one painted cell ~3 ms.
Headless Chrome (`bench-browser.json`, SwiftShader WebGL2): fresh page recall 1.0, precision 1.0 (150 of 150 rules), 48×48 world fully decided with 0 repairs and all 8 tile types used; after the synthetic painter put snow inside the water, 164 of 164 rules recovered; at 30% damage 46 of 164 rules (precision 1.0) and the world used only 5 tile types. No page errors (one favicon 404).

## Failure modes / knowledge
- A plain threshold on a bundle is dominated by its heaviest members; decoding superpositions needs explaining away (or count-normalised bundling).
- Gram-matrix updates make matching pursuit cheap, but keys must be near-orthogonal; at D = 512 cross-key correlations (±0.1) start to create spurious leftovers, which the z = 4 stop rule held back.
- Squashing to 1 bit is not free here: the sign of a sum hides how many times a rare pair was seen.
- Damage removes rare rules first, so a damaged mind dreams a plainer world rather than a broken one; that is graceful, but it also means WFC success alone is not a good health check for the memory.
- In SwiftShader the 6 ms step budget makes a 48×48 dream take ~10 s; on a real GPU it is bounded by the same budget, which is deliberate so the condensing is visible.

## Building blocks for next runs
A tiny, editable, damage-tolerant associative memory with an honest noise-aware decoder; local-repair WFC; uncertainty-as-geometry rendering. Next: bind more roles (height, time, a visitor's topic) into the same keys to dream 3D voxel worlds or comic-panel layouts from examples, share hypervector memories between tabs (bundles add, so two minds merge by addition), or let the F-225 text model and this memory co-dream (text describing a place constrains the collapse).
