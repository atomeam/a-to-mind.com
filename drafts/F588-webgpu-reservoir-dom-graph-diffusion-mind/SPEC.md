# F588 WebGPU Reservoir DOM Graph Diffusion Mind

**Ledger ID**: F-588 (frontier series)

## Concept
A local echo-state reservoir network (previously under-used as the primary mind model) receives DeviceOrientation + pointer as causal input and outputs target attractors for a living graph of absolute-positioned DOM nodes. Values on the nodes diffuse across proximity edges (simple graph diffusion kernel). Fitness is value-coherence. Higher-fitness sealed genomes transfer over BroadcastChannel; state persists in IndexedDB. Canvas draws the dynamic edges. Fully self-contained, offline after load. WebGPU path is noted as next (current CPU diffusion is the working kernel).

## Novelty
Leaves the dominant recent cluster of spatial-audio genome swarms (F587), IntersectionObserver fitness DOM (F586), WebRTC force-graph MLPs (F585), sandpile SOC, voice-driven NCA, LBM attention portals, spectral SDF, Vicsek flocks, and continuum/particle WebGPU kernels. Core novel combination is reservoir computing (echo-state, not MLP/RNN/Q-table) driving a previously unused discrete graph-diffusion substrate whose nodes *are* the living DOM elements, with orientation as causal input and sealed genome transfer on a shared BroadcastChannel field. Not continuum fields, not particle physics, not audio primary, not WebXR, not softbody, not NCA.

## Architecture
- Single index.html.
- 8 living DOM nodes whose positions and styles are driven by reservoir outputs.
- Reservoir size 32; random sparse-like weights; tanh activation.
- Graph diffusion: neighbors within 180px average values.
- IndexedDB key "verse-f588".
- BroadcastChannel "f588-genome" for peer adoption of higher fitness.
- Pointer drag repositions nodes.
- Fallback: no orientation → pointer tilt; no IDB → memory; no BC → local only.

## Expected outcome
Tilt or move pointer: nodes drift toward coherent color/value clusters; edges form and values equalize; genomes mutate and can transfer across tabs. Seal restores the mind. Interactive hybrid embodiment of a reservoir mind on a living DOM graph.

## Mechanics
1. Init random reservoir weights and node positions.
2. rAF: step reservoir on orientation/pointer → apply outputs as soft attractors → diffuse values on proximity graph → update styles → draw edges.
3. Periodic light mutation; post genome if connected.
4. Seal/restore via IndexedDB.

## Failure modes
- No DeviceOrientation: pointer simulation.
- IndexedDB blocked: session memory.
- BroadcastChannel unavailable: local evolution only.
- Performance: O(N²) fine for N=8.

## Building blocks unlocked for next
- Echo-state reservoir as primary local controller for DOM graph
- Discrete proximity-graph diffusion kernel
- Orientation-causal input to non-feedforward local models on living UI elements

Void is now Verse everywhere.

**Files**: drafts/F588-webgpu-reservoir-dom-graph-diffusion-mind/SPEC.md, drafts/F588-webgpu-reservoir-dom-graph-diffusion-mind/index.html
