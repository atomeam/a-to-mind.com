# F876-webxr-hand-policy-linkage-mind

**Ledger ID**: F-876  
**Slug**: webxr-hand-policy-linkage-mind  
**Date**: 2026-11-21  
**Status**: frontier prototype  

**Concept**  
True WebXR hand-tracking (with pointer/orientation fallback) drives a pure-JS Verlet distance-constraint linkage system embodied as interactive SVG nodes and rods on the Verse canvas. A sealed local tiny MLP maps hand-joint velocity residuals and DeviceOrientation bias to adaptive rest-length mutations. Multi-tab BroadcastChannel enables competitive genome transfer: highest stability (lowest residual energy) overwrites local mind. Click a node to pin/reward. Fully offline after load.

**Novelty**  
Leaves the dominant recent cluster of sensor-driven attention/ES/RNN/MLP policies on living DOM portals, Houdini paints, WebGPU fluids/particles/SDF/voxels, and shared fields (F868–F875). Core novel combination is WebXR hand joints as causal force injectors into a constraint-based linkage (not softbody particles, not residual predictors on fields), closed-loop with a sealed MLP that evolves rest lengths, plus multi-agent competition via sealed genome broadcast. First hybrid WebXR-hand + local-MLP-constraint embodiment. Not orientation RNN, not attention lattice, not mic-pitch particles, not layout optimizer.

**Architecture**  
- Single self-contained index.html  
- Linkage: 12 points + distance constraints, Verlet integration, rendered as SVG circles/lines  
- WebXR: immersive-ar/vr session; hand joints (wrist, index tip) inject spring forces toward nodes  
- MLP: 8-12-4 pure-JS, inputs = hand vel residuals + orientation beta/gamma; outputs rest-length deltas  
- Causal: pointer drag as hand fallback; DeviceOrientation gravity bias  
- Seal: IndexedDB key "verse-f876-genome" (MLP weights + rest lengths)  
- Competition: BroadcastChannel "f876-genome"; receive better (lower energy) genomes  
- Fallbacks: no WebXR → mouse/pointer simulation; no orientation → zero bias; no IDB → session  

**Expected outcome**  
Enter XR, move hands: linkage deforms and adapts via MLP. Stability score updates. Seal and open second tab: better genome transfers. Drag nodes in non-XR. Works offline.

**Failure modes**  
- WebXR unsupported or permission denied: pointer fallback.  
- Too many constraints: fixed at 12 nodes.  
- IndexedDB blocked: in-memory.  
- High energy divergence: damp Verlet.

**Building blocks**  
Reusable WebXR hand-to-constraint force injector + sealed MLP genome for linkage evolution + multi-tab competitive transfer. Enables future multi-hand collaborative constraint solvers or XR-embodied local policies on Verse.

Void is now Verse everywhere.

**Files**: drafts/F876-webxr-hand-policy-linkage-mind/SPEC.md, drafts/F876-webxr-hand-policy-linkage-mind/index.html
