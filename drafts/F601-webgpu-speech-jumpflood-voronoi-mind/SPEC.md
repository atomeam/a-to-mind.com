# F601-webgpu-speech-jumpflood-voronoi-mind

**Ledger ID**: F-601 (frontier series)

**Slug**: webgpu-speech-jumpflood-voronoi-mind

**Date**: 2026-11-06

**Concept**
A spatial Voronoi substrate continuously reseeded by live Web Speech API tokens. Sites are particles whose positions and fitness are driven by a tiny local MLP that takes causal features (speech energy, token length/confidence, pointer velocity). The diagram is rendered as a colored cell field (Canvas2D distance-field approximation of jump-flood; WebGPU compute path noted for true parallel JFA). Floating DOM portals lock to high-fitness cell centroids, display the seeding token, morph in scale/hue/opacity with local energy, and accept click rewards that perform a simple Hebbian update on the MLP. Sealed genomes (weights + active sites) persist in IndexedDB. Chrome (background hue, pulse) follows global site entropy and speech activity. Progressive enhancement: speech permission optional; pointer-only fallback; WebGPU upgrade path for GPU jump-flood.

**Novelty**
Departs from the recent continuum of spatial particle/physics kernels, NCA, spectral/frequency domains, hopfield fluids, implicit SDFs, attention lattices, and orientation-driven swarms (F548–F600). Core novel combination is a previously unused primary substrate—the dynamic Voronoi diagram itself—seeded and evolved by local speech tokens rather than pure motion or sensors, with geometric cell-attached DOM portals that receive reward-gated updates. The mind lives in the dual of sites-and-cells; speech is the causal seed, not a caption or transcript overlay.

**Architecture**
- Single self-contained index.html, offline after load (speech requires mic permission).
- Tiny MLP (input 5 → hidden 8 → output 2 velocity + 1 fitness) in main thread.
- Web Speech API continuous recognition → tokens seed or boost sites.
- ~32–64 sites; Canvas2D full-screen render of approximate Voronoi (per-pixel or grid distance).
- 4–6 absolute-positioned DOM portals bound to selected cell centroids.
- Seal (S / button) / restore (R) via IndexedDB key `verse-f601`.
- CSS custom properties drive chrome from entropy and speech activity.

**Expected outcome**
User grants mic, speaks; new colored cells appear and drift under MLP control; portals float over cells showing recent tokens and react to clicks with visible reward pulse; seal persists state across reloads; fallback works without speech.

**Failure modes**
Speech API not supported or permission denied → pointer-only mode. Canvas performance on low-end → reduce site count or grid resolution. WebGPU JFA not implemented in this draft (noted as next block).

**Building blocks for next**
Speech-seeded geometric substrates; cell-attached portals as reward interfaces; GPU jump-flood as transferable spatial primitive; sealed Voronoi genomes as transferable spatial minds.
