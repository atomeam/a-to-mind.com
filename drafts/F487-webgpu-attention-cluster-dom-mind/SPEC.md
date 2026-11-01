# F487 — Local Attention Particle Swarm with Spatial Cluster DOM Projection Mind

## Concept
A swarm of particles lives on a 2D canvas. Each particle carries a short state vector and, each frame, computes a simplified local self-attention over its k-nearest neighbors (similarity of state + spatial proximity). The attention-weighted message becomes a force that updates velocity. Emergent spatial clusters are detected by grid binning; each coherent cluster projects a living DOM card whose hue, scale, blur, and text content are driven directly by the cluster’s aggregated attention energy and mean state. The user’s pointer acts as a global observation that biases every particle’s attention keys. When a cluster’s attention coherence exceeds a threshold it seals a SHA-256 hash of its state vector to IndexedDB. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of WebGPU LBM/photonic/wavelet/softbody/NCA/spectral-MLP field kernels, orientation-RNN DOM physical auctions (F486), orientation-MLP Voronoi territories, and pure MLP-DOM transfers. Core novel combination is particle-level local self-attention (not residual MLP, not RNN, not NCA update) that both drives motion and nucleates spatial clusters whose consensus is projected as interactive DOM Verse cards. Not fluid kernels, not audio closed-loops, not device-orientation sequential RNNs, not genome auctions on AABB.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Particles: 80 on Canvas2D (WebGPU compute path noted as building block)
- State: 4-d vector per particle
- Attention: k=6 nearest; score = exp(-dist/σ) * cosine(state); softmax message → force
- Physics: vel += force * 0.4 + pointerBias; pos += vel; damping; soft bounds
- Clusters: 16×16 grid bins; bins with ≥4 particles and high mean attention become a cluster
- DOM cards: absolute-positioned; CSS vars --hue, --scale, --blur from cluster energy; text = rounded mean state
- Seal: on coherence > 0.75, SHA-256(state) → IndexedDB; restore on load
- Pointer: mouse/touch sets global observation bias
- No external dependencies

## Expected Outcome
Move the pointer: particles stream, form coherent clusters, and living cards appear and morph over the canvas. Click a card to reinforce its cluster (boost energy). Seal restores prior cluster states. Works offline; graceful on low-end (particle count fixed).

## Failure Modes
- No IndexedDB (private mode) → no persist, still fully interactive.
- Very low particle count or high damping → no stable clusters.
- Canvas resize mid-run → temporary cluster flicker.
- WebGPU not used in this prototype (Canvas2D primary; compute path is future building block).

## Interactivity
Move pointer (or touch) to bias attention. Cards appear over clusters and morph. Click a card to reward its cluster. S or button to seal, R to restore. Reset clears particles and seals.

## Building Blocks
WebGPU compute shader for parallel local attention; WebXR hand as 3D observation bias; OPFS for full trajectory history; multi-tab BroadcastChannel of sealed cluster hashes; true multi-head attention.

## V01D Landing
skills/mini/attention-particle-cluster-dom; testable via pointer → cluster cards appear + morph, click card → energy rise, seal → IDB restore of cluster states.

## Files
drafts/F487-webgpu-attention-cluster-dom-mind/SPEC.md
drafts/F487-webgpu-attention-cluster-dom-mind/index.html
