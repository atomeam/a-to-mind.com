# F810 - Local GNN Dynamic Graph Spatial Mind

**Concept**: Living spatial DOM cards form a dynamic graph whose structure is continuously inferred from proximity and user interaction. A lightweight local Graph Neural Network (message-passing) evolves node embeddings that in turn drive card kinematics, appearance, and a shared intent field. Weights are locally updated by interaction reward and sealed for persistence. Novel combination of dynamic spatial graph construction + on-device GNN message passing + bidirectional embedding-to-physics loop. Not previously built (prior attention, HMM, MLP, NCA, particle, or continuum systems did not treat the cards themselves as the primary graph nodes with learned message passing).

**Architecture**
- 10 absolute-positioned DOM cards (divs) with CSS transforms.
- Dynamic graph: edges when Euclidean distance < 180px or recent click; edge weight = exp(-dist/80) + click boost.
- GNN (1 layer, embed dim = 4):
  - Message aggregation: weighted mean of neighbor embeddings.
  - Update: ReLU(W_self * self + W_msg * msg + bias), then L2-normalize.
  - Small genome: two 4×4 matrices + bias (≈40 floats).
- Physics: each card has velocity; attraction/repulsion force proportional to embedding cosine similarity × edge weight; damping + weak center pull.
- Background: Canvas2D draws edges (opacity by weight) and optional embedding heatmap.
- Input: pointer move injects temporary high-weight edges to nearest cards; click/drag on card gives positive reward that Hebbian-updates the matrices toward reinforcing the current message path.
- Persistence: IndexedDB key `verse-f810-gnn`.
- Optional: BroadcastChannel `f810-genome` for simple competition.
- Single-file HTML/CSS/JS, no external deps. Works offline.

**Expected outcome**
Open page: cards drift and form loose clusters. Move pointer: nearby cards briefly strengthen edges and adjust embeddings. Drag or click a card: it and its neighbors reinforce connections and the group tightens or spreads according to learned similarity. Seal button saves genome; reload restores. Graph visualization shows living connectivity. Pointer always works; orientation optional (not required).

**Mechanics**
1. Initialize random orthonormal-ish weight matrices.
2. Each frame (~60 Hz):
   - Compute pairwise distances, build sparse edges.
   - Run one GNN message-passing step on all nodes.
   - Apply embedding-driven forces to velocities, integrate positions, clamp to viewport.
   - Update card transforms and styles from embedding components.
   - Draw graph on canvas.
3. On pointer: boost edges to 2 nearest cards for 8 frames.
4. On card interaction: local additive Hebbian update to W_msg / W_self favoring current aggregates, then renormalize rows.
5. Seal: store genome JSON in IndexedDB; optional broadcast.

**Failure modes**
- No IndexedDB (private mode): session-only memory.
- Very small viewport: reduce card count to 6.
- High CPU: lower to 30 Hz or embed dim 2.
- Numerical drift: periodic re-orthonormalize or clamp weights.

**Building blocks**
Reusable dynamic proximity graph builder, single-layer message-passing GNN core, embedding-to-force binder, Hebbian local update. Enables future multi-layer or attention-augmented spatial graphs for Verse.

**V01D landing**
Local GNN spatial skill under void-live-deploy/skills/gnn-spatial-graph.js; test asserts pointer proximity → edge formation → embedding update → position change and IndexedDB round-trip.

Void is now Verse everywhere.
