# F-606: WebRTC Sealed Genome Gossip Swarm Mind

## Concept
A multi-instance local-AI swarm where tiny MLP agents compete on a shared WebGPU-simulated constraint graph. Genomes (connection weights) are sealed by SHA-256 hash and transferred via WebRTC data-channel gossip only when a local agent's interaction entropy exceeds a threshold. DeviceOrientation provides the causal "gravity" tilt that biases the constraint solver. Agents control floating DOM portals that cluster into emergent structures. Persistent across sessions in IndexedDB. Single-tab fallback is fully offline.

This deliberately branches from the recent WebGPU+MLP/RNN+orientation/DOM-physics cluster (rigidbody, PBD, quadtree, hypervector, DLA, electrostatic, hopfield, fourier, voronoi, speech-jumpflood) by introducing a gossip-protocol sealed genome transfer architecture over WebRTC, with a Jacobi iterative constraint kernel that has not been used before.

## Novelty Check
- Not an attention lattice, residual predictor, volumetric injection, pure NCA, spectral/audio residual, pointer-history field, softbody DOM, orientation RNN, or k-means particles.
- New combination: WebRTC gossip + sealed hash genomes + Jacobi constraint solver + DeviceOrientation causal bias + IndexedDB persistence + DOM portal swarm.
- Unlike prior IndexedDB-causal-MLP-orbital or WebXR-hand-MLP-PBD.

## Implementation
Single self-contained `index.html`. WebGPU compute shader runs Jacobi iterations on a sparse agent-graph. Fallback Canvas2D. WebRTC uses a simple signaling via BroadcastChannel for same-origin tabs (no external server). Genomes sealed before transfer.

## Failure Modes
- WebGPU unavailable → Canvas2D particle fallback.
- No WebRTC peers → pure local simulation.
- Orientation permission denied → pointer-only input.
- IndexedDB quota → in-memory only.

## Assimilation Note
Would land in void-loop as a skill under `void-live-deploy/skills/gossip-swarm/` or a tool for multi-tab local-AI collaboration. Test: open two tabs, tilt device, observe genome hash transfer and portal clustering.