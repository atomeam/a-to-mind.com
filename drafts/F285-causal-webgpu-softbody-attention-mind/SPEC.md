# F285-causal-webgpu-softbody-attention-mind

## Concept
Novel combination: Canvas2D/WebGPU softbody particle lattice whose spring and cohesion forces are continuously modulated by a local multi-head attention mind (Web Worker) operating over sampled particle feature vectors. DeviceMotionEvent acceleration provides causal bias injected into attention queries. Draggable DOM probe cards act as embodied force sensors and impulse injectors. Global coherence and energy statistics morph page chrome (CSS custom properties: hue, radius, filter, perspective). IndexedDB seal persists attention weights and a particle snapshot.

Branches away from: predictive trajectory residual morph (F284), WebXR gaze MLP swarms (F283), speech RNN portals (F282), pure NCA/fluid/attention lattices, residual acoustic fields, and sealed pure-DOM arenas.

## Architecture
- Single index.html (inline CSS/JS).
- Main thread: particle integration (~200 particles), Canvas2D render, DOM card physics sampling, CSS morph, DeviceMotion listener.
- Blob Web Worker: tiny multi-head attention (4 heads, 8-dim) on 24 sampled particles every 4 frames; returns force biases.
- Optional WebGPU path sketched in comments (compute shader for force pass).
- Seal: IndexedDB store for weights + snapshot.

## Expected outcome
Interactive spatial softbody that clusters and stretches under attention-driven forces, reacts to device shake, moves and is moved by probe cards, and warps the surrounding UI chrome. Fully offline, no network, no external models.

## Mechanics
1. Particles have position, velocity, rest lengths to neighbors (local spatial hash or all-pairs subsampled).
2. Attention mind samples features (pos, vel, density proxy) → QKV → force residual added to integration.
3. Motion acceleration biases the query vectors.
4. Cards sample local particle density/force and translate; drag injects impulse.
5. Entropy proxy (velocity variance) drives CSS morph.

## Failure modes
- No DeviceMotion permission or desktop → static bias.
- Worker blocked by CSP → fixed forces.
- Low FPS → reduce N.
- WebGPU unavailable → Canvas2D only (primary path).

## Building blocks
Causal motion-to-attention injection, softbody + attention hybrid physics, embodied DOM probes, sealed local mind weights. Next: full WebGPU force kernel, multi-agent competing attention heads, WebXR head-tracked probes.
