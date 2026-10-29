# F463 Continuous Hopfield Trajectory Associative Spatial Mind

**Slug:** F463-hopfield-trajectory-associative-spatial-mind

**Architecture:** Canvas2D multi-particle field whose forces follow the reconstructed attractor of a local continuous Hopfield associative memory. User pointer trajectories are sampled into fixed-length real-valued pattern vectors (dimension 16: normalized delta bins + curvature features). Patterns are stored via normalized outer-product weight updates into a symmetric matrix. Iterative energy minimization (a few steps of soft retrieval) produces the recalled pattern, which is decoded into spatial attractor points that particles flow toward, visualizing the basin. Hybrid floating DOM memory cards show mini trajectory previews of stored patterns; click to force-recall, drag to re-query. DeviceOrientation supplies continuous tilt gravity bias. Memory matrix + meta sealed to IndexedDB under a local hash-like id. Fully offline single-file prototype. WebGPU compute path noted for large-scale parallel Hopfield iterations and denser particle kernels.

Extends Verse local-mind seals by adding true associative memory capacity over spatial trajectories (not evolutionary genomes, not supervised online MLP, not NCA cellular updates, not spectral residual feedback, not SPH/PBD constraints, not L-system rewriting).

**Expected outcome:** Draw short paths on the canvas to store memories. Particles are drawn toward the currently recalled trajectory shape. Click a memory card to retrieve that pattern. Seal persists weights across reloads. Status reports pattern count, energy, and generation of stores. Progressive: orientation permission optional, IndexedDB optional (in-memory fallback).

**Mechanics:** Sample pointer path → 16-D feature vector; store W = W + p p^T / ||p|| (symmetric); retrieve by iterating s = tanh(W s) for 4 steps from query or noise; decode recalled vector into 5 attractor points along a synthetic path; particle Verlet-like integration with inverse-distance attraction to attractors + tilt + damping; cards update from stored patterns.

**Failure modes:** Capacity limited to ~8 patterns before crosstalk (capped); IndexedDB unavailable in private mode → seal reports but does not persist; no DeviceOrientation → zero tilt, still fully interactive via pointer; very short strokes produce weak features.

**Builds on:** Prior spatial particle fields, sealed local minds, and hybrid DOM cards by introducing continuous Hopfield associative retrieval of trajectory patterns as the core generative driver (distinct from preference evolution of attractor params, gaze-driven MLP forces, or spatial-audio genome transfer).

**Next building block:** Full WebGPU compute kernel for both Hopfield matrix-vector and particle forces; WebXR hand-joint trajectories as high-fidelity pattern injectors; multi-peer WebRTC exchange of sealed memory matrices under hold-gate; local attention encoder for richer trajectory embeddings.
