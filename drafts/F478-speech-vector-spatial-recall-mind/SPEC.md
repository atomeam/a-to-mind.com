# F478-speech-vector-spatial-recall-mind

## Concept
Local Speech Vector Spatial Recall Mind: Continuous local SpeechRecognition (with keyboard fallback) emits short text snippets that are immediately embedded into low-dimensional vectors via a pure client-side character bigram hash. Each memory becomes a spatial orb in a Canvas2D force-directed field (progressive WebGPU point-cloud path noted). Selecting or speaking a query activates cosine-similarity forces that pull related orbs toward the active locus, visualizing associative recall. A background Worker maintains the vector store and optional simple mutation of embedding basis. State seals to IndexedDB. CSS chrome morphs with memory entropy and recall strength. Fully offline after load; speech is the sole symbolic causal input.

## Novelty
Leaves the dominant recent clusters of WebGPU SDF/NCA/acoustic/spectral-policy/attention/particle morph-minds, DeviceOrientation MLP auctions, WebXR hand/gaze Hebbian/genome competition, L-system DOM cards, and pure lattice fields (F453–F477). Core novel combination is live local speech as the exclusive source of vector embeddings that drive physics-based spatial associative recall of memory orbs. Not residual predictors, not pure MLP policy evolution, not spectral audio features, not Hebbian weight transfer, not L-system turtle graphics, not orientation wind, not hand-grasp genome, not WebGPU continuous field kernels as primary substrate.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Speech: SpeechRecognition continuous (webkit fallback); keyboard textarea injects tokens
- Embedding: char bigram frequency hash → 8-D float vector (normalized)
- Orbs: up to 32 Canvas2D particles with position, velocity, vector, text
- Recall: on active query, cosine > threshold applies attraction force
- Worker: optional vector store sync and basis mutation (simple)
- IndexedDB: seal/restore memories, vectors, metrics
- CSS custom properties from entropy / average similarity for chrome morph
- No external dependencies

## Expected Outcome
Speak or type short phrases: orbs appear and, on subsequent related speech or click, related memories accelerate toward the active point, forming visible clusters. Seal restores the living recall field. Works offline; graceful without speech (keyboard).

## Failure Modes
No SpeechRecognition (keyboard fallback), mic permission denied, IndexedDB private-mode, too many orbs (cap at 32).

## Building Blocks
WebGPU for larger vector populations and compute-based similarity, WebXR gaze as query ray, OPFS for raw speech blobs, on-device fine-tune of embedding basis.

## V01D Landing
skills/mini/speech-vector-spatial-recall; testable via speech/type → orb spawn + similarity attraction, seal → IDB restore of vectors.

## Files
drafts/F478-speech-vector-spatial-recall-mind/SPEC.md
drafts/F478-speech-vector-spatial-recall-mind/index.html
