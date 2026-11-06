# F606 WebGPU Self-Organizing Map Spatial DOM Mind

**Ledger ID**: F-606 (frontier series)

**Slug**: webgpu-som-spatial-dom-mind

**Date**: 2026-11-06

## Concept
A previously unused unsupervised local-AI substrate: the Kohonen Self-Organizing Map (SOM). A 2D lattice of neurons receives continuous causal spatial inputs (pointer trajectory velocity history + DeviceOrientation beta/gamma) and self-organizes in real time via competitive Hebbian learning and neighborhood Gaussian. Each neuron is embodied as a living absolute-positioned DOM card: its screen position, scale, hue, and opacity are driven by its current weight vector and distance to the Best Matching Unit (BMU). Dragging a card injects a supervised training vector at that location. Quantization error warps the surrounding chrome. WebGPU compute (with Canvas2D fallback) accelerates the all-to-all Euclidean distance and weight-update kernels for a 16×16 map. Sealed map genomes (weight matrix + learning rate) persist in IndexedDB under SHA-256; BroadcastChannel enables multi-tab competition where lower error + higher engagement wins and transfers.

This deliberately leaves the recent cluster of adaptive spatial partitions (quadtree F605), hypervector binding (F604), DLA growth (F603), rigid-body constraints (F602), speech-seeded jump-flood Voronoi (F601), Position-Based Dynamics (F605 alt), SPH/Elman, Fourier spectral minds, and all prior continuum/particle/NCA/attention/RNN/MLP/Hopfield/bandit substrates.

## Architecture
- Single self-contained `index.html` (no external libs, no network after load).
- SOM: N=256 neurons on a toroidal 16×16 lattice. Input dim=6 (vx, vy, speed, beta, gamma, time-phase).
- Learning: competitive BMU + Gaussian neighborhood, decaying σ and η.
- Embodiment: 256 DOM cards (capped/pool) or a representative subset for performance; positions from projected weights.
- WebGPU: compute shader for distance matrix + update when available; else pure JS.
- Persistence: IndexedDB `f606-som-mind` stores sealed weights + hash.
- Multi-agent: BroadcastChannel `f606-genome` posts sealed map; receiver adopts if lower error.
- Fallback: pointer-only if no orientation; Canvas2D heatmap of activation if no WebGPU.

## Expected Outcome
User tilts device or moves pointer → map reorganizes → DOM cards migrate, recolor, and resize in real time, forming emergent spatial clusters that reflect the recent input trajectory. Dragging a card permanently biases a local region of the map. Seal button freezes a genome; opening a second tab and sealing a better (lower error) map transfers it. Page remains interactive offline. Chrome warps under high quantization error.

## Mechanics / Interaction
- Move pointer or tilt → continuous unsupervised training.
- Drag any card → inject that card’s current position as a labeled sample (supervised pull).
- Click Seal → SHA-256(weights) → IndexedDB + BroadcastChannel.
- Status overlay: BMU id, quantization error, learning rate, WebGPU on/off, sealed hash prefix.
- R key or button: reward (reduce error target slightly).
- Progressive: works with pointer alone; enhances with orientation + WebGPU.

## Novelty Justification
SOM / Kohonen maps have never been the primary mind kernel in any prior F- draft. The combination of (1) classic unsupervised competitive learning, (2) each neuron literally being a draggable living DOM element that both samples and is driven by the map, (3) WebGPU-accelerated distance/update, (4) sealed genome transfer of the weight matrix under quantization-error fitness, and (5) DeviceOrientation + pointer trajectory as the sole causal inputs is previously unbuilt. Not a neural policy controlling a separate simulation substrate; the map *is* the interface.

## Files
drafts/F606-webgpu-som-spatial-dom-mind/SPEC.md
drafts/F606-webgpu-som-spatial-dom-mind/index.html

## Failure Modes
- No WebGPU: falls back to JS (slower, smaller map).
- No DeviceOrientation: pointer-only mode.
- Too many DOM nodes: pool to 64 visible cards representing BMU neighborhoods.
- IndexedDB quota: keep only latest sealed map.
- Secure context required for orientation.

## Building Blocks for Future
WebGPU SOM on higher-dim embeddings, multi-map hierarchies, transfer of sealed maps into larger local transformers, WebXR gaze as input vector, or SOM-driven CSS Paint Worklet glyphs.
