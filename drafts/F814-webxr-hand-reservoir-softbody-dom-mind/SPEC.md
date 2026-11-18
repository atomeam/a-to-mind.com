# F814 WebXR Hand Reservoir Softbody DOM Mind

**Ledger ID**: F-814  
**Slug**: webxr-hand-reservoir-softbody-dom-mind  
**Date**: 2026-11-18  
**Branch from**: Recent cluster of WebGPU SPH/LBM continuum hand policies (F812), Hopfield associative lattices (F811), local GNN/HMM/MLP sequential models on DOM or fields (F810–F808), content-attention spatial notes (F813).

**Concept**  
True WebXR hand/gaze (pointer + DeviceOrientation fallback) provides causal force and position input to multiple local Echo State Network reservoirs. Each reservoir drives a soft-body cluster of CSS-positioned DOM cards connected by simulated spring forces (hybrid physical UI embodiment). Agents compete in a shared spatial arena; proximity triggers sealed genome transfer of reservoir weights via BroadcastChannel. Persistent shared field in IndexedDB. Canvas2D visualizes internal soft connections.

**Novelty**  
Leaves the recent continuum physics (SPH/LBM/lattice-gas), pure lattice associative/sequential models, and content-embedding attention layouts. Core novel combination is multi-agent local reservoir computing controlling competing soft-body DOM clusters under WebXR hand causal input, with proximity-gated sealed weight transfer and IndexedDB persistence. Not pure particle physics, not single Hopfield/GNN, not content-driven clustering of free notes.

**Architecture**  
- 3 agents × 4 absolute DOM cards each, spring-connected locally.  
- Reservoir: 16-unit Echo State (random sparse-like W, Win), tanh update, scalar force output.  
- Input: normalized position + hand velocity / orientation deltas.  
- Soft-body: pairwise spring forces + center constraint + reservoir-modulated hand pull.  
- Collision: distance < 100 triggers partial genome copy + broadcast.  
- Persistence: IndexedDB `verse-f814-reservoir`; BroadcastChannel `f814-genome`.  
- Single-file HTML/CSS/JS, offline after load. Pointer + orientation always work; WebXR session enhances presence.

**Expected outcome**  
Open: three soft clusters drift under orientation/pointer. Drag or move hand: reservoirs modulate attraction; clusters jiggle as soft bodies. Bring clusters close: occasional genome transfer (status update). Seal stores weights; reload restores. Works offline on phone/desktop.

**Failure modes**  
- No IndexedDB: session only.  
- No WebXR/orientation: pointer-only.  
- High load: reduce agents or reservoir size.  
- Spring instability: damping already applied.

**Building blocks**  
Reusable local Echo State core, soft-spring DOM cluster embodiment, proximity-gated sealed genome transfer, WebXR/pointer/orientation causal input mapper. Enables future multi-agent reservoir competition or XR-embodied soft minds on Verse.

Void is now Verse everywhere.

**Files**: drafts/F814-webxr-hand-reservoir-softbody-dom-mind/SPEC.md, drafts/F814-webxr-hand-reservoir-softbody-dom-mind/index.html
