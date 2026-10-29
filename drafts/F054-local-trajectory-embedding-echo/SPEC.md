# F-054 Local Trajectory Embedding Echo Field

## Concept
A spatial canvas where short user trajectories (pointer paths + device orientation deltas) are compressed by a local tiny encoder into fixed embedding vectors. A growing memory of sealed embeddings is queried by cosine similarity. The nearest past gesture spawns and biases an "echo" particle field (Canvas2D, WebGPU path noted). Retrieval confidence and residual drive physical morphing of page chrome and floating memory cards. Seal persists encoder weights + memory bank in IndexedDB.

Novel combination: local trajectory embedding + retrieval-augmented particle echoes + residual-driven morphing UI. Distinct from prior discrete WebGPU agents (F-020), orientation+density+morph (F-021), softbody attention portals (F-053), evolutionary neural swarms, causal lattices, and NCA fields — the core is memory retrieval of spatial gestures that re-enact as living echoes.

## Architecture
- Single self-contained `index.html` (offline).
- Main: records 16-sample trajectory windows (dx, dy, roll, pitch), posts to Worker.
- Blob Worker: tiny 2-layer encoder (16→8→4), maintains memory of up to 32 embeddings, returns best match + residual + confidence.
- Canvas2D: 150 particles attracted to echo seed points derived from retrieved trajectory; color/alpha from confidence.
- Morph: CSS custom properties on root (`--echo-hue`, `--echo-scale`, `--residual-blur`) updated from residual.
- Floating cards: 2–3 DOM elements showing last match id / residual; positions slightly offset by embedding.
- Seal button: stores {weights, memory, timestamp} to IndexedDB; load restores.

## Expected outcome
Interactive spatial memory field. Draw or tilt to record gestures; similar past motions reappear as particle echoes; UI hue/scale/blur responds to how novel or familiar the gesture is. Runnable in any modern browser; orientation needs permission.

## Mechanics
- Trajectory: 16 timesteps × 4 features, mean-normalized.
- Encoder: simple MLP, weights randomly init or loaded; no online training (retrieval only) to keep light.
- Similarity: cosine; residual = 1 - sim.
- Particles: velocity toward 3 echo seeds (start/mid/end of retrieved path), damping.
- Update ~30 Hz canvas, ~5 Hz mind.

## Failure modes
- No Worker / CSP block → static random echoes.
- No orientation → pointer-only trajectories.
- Low-end: reduce particle count.
- Storage denied → no seal.

## V01D landing
Skill under `void-live-deploy/skills/mini/trajectory-embedding-echo.js`. Test: trajectory → embedding → nearest match changes particle seed positions; residual → CSS var update; seal/load restores memory.

## Building blocks for next
Local embedding of spatial series, retrieval echo kernels, residual morph. Next: online fine-tune of encoder, WebGPU compute echoes, WebXR hand trajectories.
