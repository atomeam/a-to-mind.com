# F697 WebGPU Temporal Attention Pointer Portal Mind

## Concept
A living spatial Verse canvas. A pure-JS multi-head causal attention mechanism maintains a rolling buffer of the last 32 pointer events (x, y, vx, vy, dt). Current pointer state forms the query; history forms keys/values. The attended summary vector (weighted past positions/velocities) drives attraction forces in a WebGPU compute particle simulation (Canvas2D fallback always available). Particles form transient structures around attended loci. Absolute-positioned DOM portals spawn or re-anchor at the highest-attention locations and display local attention score / residual. Clicking a portal injects a positive reward that performs a lightweight Hebbian update on the Q/K/V projection matrices (increase alignment with rewarded context). Manual Seal persists the projection weights, particle snapshot, and portal assignments to IndexedDB. DeviceOrientation (when permitted) adds a gentle global bias to the attention residual. Fully self-contained, offline after first load.

## Novelty
Leaves the entire recent cluster of residual-MLP controllers, Elman/ESN/reservoir, fixed-lattice attention, clip-path polygon morphs (F696), NCA/Lenia/Physarum, continuum fluids/SDF/raymarch/wave/sandpile, boids, decision trees, k-NN, Hopfield, and pure DOM constraint systems. Core novel combination is temporal multi-head causal attention over raw pointer history (not spatial grid, not residual predictor, not RNN recurrence) as the sole local AI, embodied simultaneously in WebGPU particle forces and living DOM portals that both visualize and reinforce the attention. Not a variation of prior pointer-history fields or attention lattices.

## Expected outcome
User moves pointer → history buffer fills → attention concentrates on recent coherent motions → particles stream toward attended past loci → portals appear and can be clicked to reinforce those temporal patterns → sealed genome restores the same attentional biases on reload. Emergent “memory traces” of how the user has been moving.

## Mechanics
1. Pointermove populates circular buffer (32 slots).
2. Each frame: form Q from current (x,y,vx,vy); K/V from buffer; compute scaled dot-product attention (2 heads, d=8); produce attended (x,y) target.
3. WebGPU (or CPU) particles receive force toward attended target + weak noise + orientation bias.
4. Portals track top-2 attention peaks; click → reward scalar → Hebbian ΔW ∝ outer(Q, K_rewarded).
5. Seal → IndexedDB `f697-attn-genome`.

## Failure modes
- WebGPU unavailable → Canvas2D particles (still fully interactive).
- DeviceOrientation denied → no bias (attention still works).
- IndexedDB blocked → session-only.
- Very rapid pointer motion → buffer saturates; attention remains stable due to fixed window.

## Files
- index.html (self-contained prototype)
- SPEC.md

Void is now Verse everywhere.
