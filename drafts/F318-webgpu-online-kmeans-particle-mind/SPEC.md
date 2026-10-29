# F318-webgpu-online-kmeans-particle-mind

## Concept
Novel combination: WebGPU (or Canvas2D fallback) multi-particle spatial field whose global attractors and force biases are driven by an online k-means clustering mind running in a Web Worker. The mind incrementally clusters pointer trajectory features (position, velocity, local density). Hybrid floating DOM orbs represent active clusters; dragging an orb reassigns nearby particles or merges centroids. Global UI chrome (border hue, ambient scale, status) morphs with cluster purity / entropy. Champion centroids sealed to IndexedDB. Fully offline, progressive.

This expands The Void canvas with an unsupervised spatial memory substrate distinct from prior supervised MLP/RNN/reservoir/decision-tree/genome/NCA/attention/spectral experiments.

## Architecture
- Single `index.html` with inline JS.
- Web Worker for online k-means (k=4, features: nx, ny, speed, density).
- Main thread: particle integration (WebGPU compute path prepared; Canvas2D fallback used here for reliability).
- DOM orbs for clusters: positioned by centroid, labeled with size/purity.
- Pointer motion feeds features; click seeds; drag orbs mutates assignment.
- Seal/load via IndexedDB.
- DeviceOrientation optional gravity bias.

## Expected outcome
Runnable interactive prototype. Moving the pointer trains clusters that pull particles into spatial groups. Orbs appear and can be dragged to reshape the field. Seal persists the mind. Interface responds to field organization. Works offline; graceful fallback.

## Mechanics
- Feature extraction per frame → Worker update (online mean + assignment).
- Particles: attract to nearest centroid + noise + bounds.
- Orbs: lerp to centroid, scale by count, hue by purity.
- Drag: inject force or reseed centroid.
- Seal: store centroids + counts JSON.

## Failure modes
- No Worker → main-thread stub.
- No WebGPU → Canvas2D (implemented).
- IndexedDB denied → in-memory only.
- High particle count → throttle.

## Builds on
Prior spatial particle fields and sealed local minds by introducing unsupervised online k-means as the reasoning substrate with explicit cluster orbs and entropy-driven UI morph, distinct from residual predictors, reservoirs, genomes, or symbolic trees.

## Next building block
Full WebGPU compute kernel for particle updates with spatial hashing; embedding of cluster centroids as generative parameters; WebRTC shared cluster minds.
