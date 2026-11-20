

## Frontier Engine F-870 (2026-11-20)

**F870-webxr-gaze-sdf-policy-sculptor-mind**

**Concept**
Living multi-sphere signed-distance field on The Verse canvas. A pure-JS local linear policy agent is driven by continuous gaze/pointer ray residuals (position, velocity, local density sample). The policy proposes incremental updates to sphere centers and radii; the analytic SDF is visualized by a low-resolution canvas raymarcher. Clicks on high-density regions reward the policy (delta-rule update). Seal persists sphere parameters + weights to IndexedDB and BroadcastChannel for multi-tab adoption. Optional WebXR probe for true gaze. Offline after load. Interactive spatial local-AI implicit surface sculptor for Verse.

**Novelty**
Deliberately leaves the recent cluster of orientation residual → ESN/RNN/causal-attention/policy portals, WebGPU voxel density, acoustic/DEM particles, and Verlet chains. Novel combination is an explicit analytic multi-sphere SDF closed-loop controlled by a gaze-driven policy, with raymarched implicit surface as both embodiment and reward source. Not voxels, not particles, not DOM portals, not continuum CA.

**Architecture**
- Single self-contained index.html
- 5 analytic spheres forming min-union SDF
- Policy: 6-dim features → 4 actions via small weight matrix; reward delta rule
- Visualization: Canvas2D raymarcher ~120×68, 20 steps
- Input: pointer as gaze ray; WebXR availability probe
- Seal: IndexedDB `verse-f870-sdf` + BroadcastChannel `f870-sdf`
- Fallbacks: no WebXR → pointer; no IDB → sessionStorage

**Expected outcome**
Open the page: a soft glowing implicit surface appears. Move the pointer: policy adjusts spheres and the surface deforms. Click high-density regions to reward and adapt future behavior. Seal preserves the current SDF and policy; reload or open another tab to restore. Offline after first load.

**Failure modes**
- Low-end device: reduce resolution or march steps.
- WebXR unavailable: pointer ray used.
- IndexedDB blocked: session-only state.
- Extreme radii: soft clamps.

**Building blocks**
Reusable pure-JS multi-sphere SDF + gaze-driven local linear policy + canvas raymarcher + reward-gated adaptation + sealed BroadcastChannel transfer. Enables future WebGPU raymarch kernels and true WebXR hand as volumetric brush on the implicit field.

Void is now Verse everywhere.

**Files**: drafts/F870-webxr-gaze-sdf-policy-sculptor-mind/SPEC.md, drafts/F870-webxr-gaze-sdf-policy-sculptor-mind/index.html
