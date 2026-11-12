# F700-webgpu-poisson-orientation-mlp-sealed-swarm-mind

## Concept
Multi-agent sealed genome competition using local tiny MLPs driven by DeviceOrientation and pointer input to place and modulate electrostatic charges. The potential field is solved in real-time by a WebGPU compute shader running Jacobi iterations on the discrete Poisson equation (previously unused kernel). Fitness is derived from user interactions and field energy. Top genomes (MLP weights) transfer mutated copies to bottom agents via IndexedDB sealing. Branched away from residual predictors, attention lattices, NCA/wave/spectral, softbody DOM, orientation RNN, and pointer-history fields.

## Architecture
- Single index.html, vanilla JS + WebGPU.
- One main canvas for field visualization (potential as color).
- 4 independent agents, each with a tiny MLP (4→8→2) outputting charge strength and position offset.
- DeviceOrientation provides causal tilt input to all MLPs.
- IndexedDB key: `f700-poisson-genomes`.
- Offline after load; WebGPU fallback to CPU Jacobi.

## Mechanics
1. Initialize 4 agents with random MLP weights (genomes).
2. Loop: sample orientation → MLP → place Gaussian charges on grid.
3. WebGPU (or CPU) solves ∇²φ = ρ via Jacobi (20 iters).
4. Render |φ| as heatmap. Pointer click adds fitness proportional to local |φ|.
5. Every 10s: rank by fitness, mutate+transfer top genome to lowest, reset low fitness.
6. Seal button persists all genomes+fitness to IndexedDB.
7. Restore on load.

## Failure modes
- No WebGPU: CPU fallback (slower, smaller grid).
- Orientation denied: zero bias, still works with pointer.
- IndexedDB blocked: session-only.
- High load: auto-reduce iterations/grid.

Void is now Verse everywhere.
