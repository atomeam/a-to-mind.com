# F831 Idea cluster canvas
Plain name: Idea cluster canvas
Job: Paste a list of notes or ideas (one per line); the page builds local TF-IDF embeddings, clusters them with k-means, lays the clusters out as spatial groups of draggable cards; rearrange if needed, then copy organized Markdown or download JSON.
Input: Pasted text (one idea per line), optional k (number of clusters)
Keeps: Copy Markdown groups, download JSON of clusters + positions
Not on Verse yet: checked against lab tools; no prior text-clustering spatial organizer.

## Concept
A useful local-AI spatial tool for organizing unstructured notes. User pastes ideas. Pure JavaScript TF-IDF produces sparse embedding vectors. K-means clusters them. Cards are placed in spatial groups on a free canvas (absolute positioned, draggable). User can drag a card to another cluster to reassign. Export preserves the organization.

## Novelty
Leaves the dominant recent cluster of physics substrates (Coulomb DOM, SPH, Gray-Scott, LBM, DEM, wavefields, particle MLPs), pointer/orientation causal nets (attention, HMM, Kalman, MLP, ESN, GNN), sealed genomes, and WebGPU continuum kernels. Core novel combination is unsupervised local text embedding (TF-IDF) + k-means clustering driving a free-form spatial canvas of living note cards with drag-to-recluster and immediate Markdown/JSON export. Not a demo swarm or mind to poke; a tool that takes the person's notes and returns organized structure they can keep. First such text-to-spatial-cluster tool on The Verse.

## Architecture
- Single index.html (offline, progressive, mobile-friendly)
- Input: <textarea>, number input for k (default 4, max 12)
- Embedding: simple tokenizer (lower, split on non-alphanum), TF per doc, IDF across corpus, L2-normalized vectors
- Clustering: k-means++ init, 20 iterations, Euclidean
- Canvas: absolute #stage, cards as divs with contenteditable, colored by cluster, position near cluster centroid + jitter
- Interaction: pointer drag to move; drop near another cluster reassigns and updates color/centroid
- Export: button copies Markdown (## Cluster N\n- note), or downloads clusters.json
- Persistence: localStorage for last input and clusters

## Expected outcome
Paste notes, click Cluster, see spatial groups, drag to refine, copy or download the result. Works offline, no network, no external libs. Useful for brainstorming, meeting notes, idea sorting.

## Mechanics
1. Parse lines into documents.
2. Build vocabulary, compute TF-IDF matrix.
3. Run k-means.
4. Compute centroids, place cards.
5. On drag end, reassign to nearest cluster center if closer than current.
6. Export reflects current assignment.

## Failure modes
Empty input: prompt. Very short texts: falls back to random or length-based. Too many notes (>200): warn and sample. No JS: static message.

## Building blocks
Reusable pure-JS TF-IDF + k-means, spatial card canvas with drag-recluster, export helpers. Enables future semantic tools without models.

**Files**
- drafts/F831-idea-cluster-canvas/SPEC.md
- drafts/F831-idea-cluster-canvas/index.html

Void is now Verse everywhere.
