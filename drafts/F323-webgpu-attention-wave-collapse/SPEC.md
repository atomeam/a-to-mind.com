# F323 — WebGPU Attention Wave Collapse

**Concept:** A discrete 2D wave lattice (Canvas2D baseline, WebGPU compute path prepared) whose driving potential is biased by a local multi-head attention mind processing pointer trajectory history and lattice energy. High local amplitude triggers "collapse" events that spawn hybrid DOM orbs representing the collapsed state. Users can drag orbs to re-inject phase/energy into the lattice. UI chrome morphs with global wave coherence. Sealed to IndexedDB. Fully offline, progressive.

**Novelty:** Combines quantum-inspired wave collapse visualization, local attention reasoning substrate, interactive DOM re-injection, and coherence-driven UI morph. Distinct from prior wave+reservoir (F300), k-means particles (F318), MLP physics (F307), decision trees, genomes, or pure attention lattices.

**Architecture:**
- Main thread: 64x64 wave lattice step (discrete Laplacian + damping + attention-biased sources)
- Attention mind: small query-key-value over recent pointer features + energy peaks (CPU)
- Collapse detector: local max > threshold → spawn DOM orb at position
- Orb drag: injects impulse back into lattice cells
- Seal: IndexedDB stores attention weights + lattice snapshot

**Expected outcome:** Interactive spatial wave field that "thinks" via attention on user gestures, collapses into tangible orbs the user can manipulate to reshape the field. Interface responds to coherence. Runnable in any modern browser.

**Mechanics:** See index.html. Pointer history → attention scores → source frequencies/positions; wave evolution; orb spawn on peaks; drag inject; seal/load.

**Failure modes:** High resolution drops FPS (capped); no IndexedDB → memory; no pointer → idle diffusion; WebGPU not used in this baseline (compute shader stub ready).

**Builds on:** F300 interference reservoir and F318 k-means by introducing attention-driven potential + explicit collapse-to-orb mechanic with bidirectional energy injection.

**Next building block:** Full WebGPU wave kernel with storage buffers; attention in compute shader; Web Audio sonification of spectral peaks; WebXR hand as additional pointer channel.
