# Frontier Engine F605: WebXR Hand / Pointer MLP-Driven Position-Based Dynamics Mind Swarm

## Concept
True hybrid embodiment: WebXR hand joints (or pointer fallback) serve as causal input to a tiny local MLP that modulates rest lengths and stiffness of distance constraints in a Position-Based Dynamics (PBD) particle swarm. The swarm is a spatial "mind field" of nodes that self-organize under iterative constraint projections. Genomes (MLP weights) are sealed via SHA-256 hash and persist in IndexedDB for potential multi-instance competition or transfer. Novel combination of WebXR hand tracking + local MLP + PBD constraint solver (previously unused kernel type) controlling spatial nodes. Branches away from recent WebGPU pure simulation kernels, orientation RNNs, attention lattices, NCA, spectral residuals, and softbody DOM.

## Why Novel
- PBD iterative constraint projection has not appeared in prior F- drafts (unlike Verlet, SPH, rigidbody, hopfield, fourier, DLA, hypervector).
- Local MLP directly outputs physical constraint parameters (not just forces or positions) driven by hand/gaze-like input.
- Sealed genome (hashed weights) + IndexedDB persistence for branching competition.
- Offline-capable single file; WebXR optional, pointer always works.

## Implementation Notes
- Single index.html: canvas visualization of particles + constraints.
- Tiny 2-layer MLP in pure JS (no deps).
- PBD: Verlet integration + Gauss-Seidel distance constraint iterations.
- Hand: if navigator.xr and hand-tracking available, use index tip; else pointer position as attractor input to MLP.
- Seal: button to hash current weights, store in IndexedDB.
- Interactive: drag/pointer moves attractor, particles respond via MLP-modulated constraints.

## Failure Modes
- No WebXR hardware: falls back gracefully to pointer.
- IndexedDB quota: seals in memory only.
- High particle count: drop to 64 for stability.

## Next Building Blocks
- Full WebGPU compute PBD shader.
- Multi-agent genome exchange via BroadcastChannel.
- Gaze ray as additional MLP input.
