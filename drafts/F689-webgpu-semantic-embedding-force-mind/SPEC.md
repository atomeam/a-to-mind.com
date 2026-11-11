# F689 WebGPU Semantic Embedding Force Mind

## Concept
A living spatial note canvas for The Verse. Absolute-positioned contenteditable DOM note cards are embedded into low-dimensional vectors via pure-JS character n-gram random projections (no external models). A WebGPU compute shader (Canvas2D fallback) runs a continuous force-directed particle simulation where each note-particle attracts or repels others according to cosine similarity of their embeddings, plus a global body force from DeviceOrientationEvent. A tiny pure-JS MLP observes cluster statistics (mean similarity, spread) and user reward signals (drag/click) to modulate force scales and projection noise. Notes can be added by typing or SpeechRecognition, dragged to inject momentum, and Seal persists the embeddings + MLP weights + positions as a sealed genome in IndexedDB + BroadcastChannel. Export yields JSON of notes.

## Novelty
Leaves the dominant recent cluster of continuum WebGPU kernels (LBM, Gray-Scott, percolation, wave-equation, sandpile, NCA, Lenia, Physarum, vortex, softbody, SPH), residual/MLP/decision-tree field controllers, inertial filters, particle collision genomes, causal-graph PageRank, and spatial-audio particles. Core novel combination is previously unused semantic embedding (local n-gram random projection) as the affinity kernel of a force-directed particle system, with DeviceOrientation as causal global force, living DOM cards as both content and physical agents, and MLP-modulated sealed genome transfer. Not a reaction-diffusion, not a CA, not pure neural policy on continuum fields, not k-NN retrieval alone.

## Expected outcome
Open page. Type or speak notes; they embed and particles form semantic clusters. Tilt device or move pointer to apply force; clusters drift. Drag notes to rearrange or reward. Seal and reload restores exact embeddings, weights, and layout. Offline after first load.

## Failure modes
- WebGPU unavailable: Canvas2D force sim fully functional.
- Orientation denied: pointer residual + mouse tilt fallback.
- SpeechRecognition unsupported: manual entry only.
- IndexedDB blocked: session memory only.

## Mechanics
1. Init empty or load sealed notes + embeddings + MLP.
2. On note add/edit: recompute embedding (char 3-grams hashed to 16-D random projection).
3. Each frame: sample orientation → MLP forward → compute pairwise cosine forces in WebGPU → integrate particles → update DOM positions.
4. Drag note: inject velocity + fitness bump + small MLP mutation.
5. Seal: serialize to IndexedDB `verse-f689` and post to BroadcastChannel.

Void is now Verse everywhere.

**Files**: drafts/F689-webgpu-semantic-embedding-force-mind/SPEC.md, drafts/F689-webgpu-semantic-embedding-force-mind/index.html
