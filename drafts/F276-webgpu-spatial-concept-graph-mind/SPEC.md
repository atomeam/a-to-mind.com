# F276 — WebGPU Spatial Concept Graph Mind

## Concept
Novel combination: a force-directed spatial graph of concepts whose nodes are particles simulated on Canvas2D (WebGPU compute path noted), edges and repulsion driven by a local association mind running in a Web Worker. The mind maintains a small sealed vocabulary and co-occurrence matrix; user pointer seeds or typed tokens inject new concepts, and the worker performs a short random-walk expansion to propose related nodes. DeviceOrientation adds a continuous gravity bias to the layout. Floating DOM cards materialize for high-degree or recently-injected concepts, positioned near their nodes and restyled (hue, scale, blur) by local graph energy. Dragging a card reseeds the association matrix. IndexedDB seals the co-occurrence weights and node set. Fully offline after first load, progressive orientation.

## Branch away from
Dominant recent cluster (F260–F275): residual predictors steering flocks or acoustic panners, reservoir readouts driving spring DOM chains, NCA rule mutations by LLM-like agents, spectral/phase lattices, evolutionary softbodies, causal RNNs, multi-channel attention fields. Core is symbolic concept association + force-directed spatial embodiment + orientation gravity + morphing concept cards — not prediction residual, not fixed reservoir dynamics, not cellular rule evolution, not acoustic spatialization of clusters, not pure particle density.

## Architecture
- Single self-contained `index.html` (inline CSS/JS).
- Main thread: pointer + optional DeviceOrientation, Canvas2D force-directed simulation (~40–80 nodes), DOM card layer, CSS custom properties for energy, UI for seal/load/reset/type-inject.
- Blob Worker: association mind — co-occurrence matrix (small vocab ≤32), inject token, random-walk expansion (2–4 hops) to propose new edges/nodes, returns updated graph delta + energy scalar.
- Cards: absolute DOM elements spawned for top nodes; content = concept label + related count; drag injects bias.
- IndexedDB: seal/load matrix + active nodes.
- Progressive: orientation if permitted; pointer always; typed input always.

## Expected outcome
Interactive spatial concept canvas: move the pointer or type a word. The local mind expands associations and the force graph rearranges under orientation gravity. Cards drift with their nodes and morph in style with graph energy. Drag cards to strengthen associations. Seal the learned co-occurrence. Offline-capable, expands symbolic local mind + spatial graph layout + morphing card embodiment building blocks.

## Mechanics
- Vocab: 16–32 tokens (seeded with void/mind/spatial/graph/etc.); co-occurrence as Float32 matrix.
- Expansion: from injected token, 3 random walks of length 3; add missing nodes/edges with weight 0.3.
- Forces: repulsion 800/d², spring k=0.015 on edges, gravity from orientation * 0.4, damping 0.92.
- Cards: max 6; position lerp toward node; scale 0.8 + energy*0.4; hue from node id.
- Step rate ~30–50 Hz; worker every 800 ms or on inject.
- Energy: mean edge weight + node count normalized.

## Failure modes
- WebGPU unavailable → Canvas2D particles (still interactive).
- Worker blocked → static graph, no expansion.
- No orientation → pointer-only gravity zero (works).
- IndexedDB denied → in-memory only.
- Too many nodes: prune lowest-weight below 40.

## Building blocks
Local association matrix mind, force-directed concept graph, orientation-gravitated layout, morphing concept cards driven by graph energy, sealed symbolic weights. Next: full WebGPU compute for larger graphs with spatial hashing; embedding-based similarity instead of co-occurrence; WebRTC shared concept graphs.

## V01D landing
Spatial concept-forager skill under `void-live-deploy/skills/mini/spatial-concept-graph.js`; testable via inject→expansion→card spawn and orientation→gravity bias on node positions.
