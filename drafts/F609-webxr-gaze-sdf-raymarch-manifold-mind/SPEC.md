# F609 WebXR Gaze SDF Raymarch Manifold Mind

**Ledger ID**: F-609 (frontier series)

**Slug**: webxr-gaze-sdf-raymarch-manifold-mind

**Date**: 2026-11-06

**Concept**
True WebXR (or pointer/orientation fallback) gaze/hand rays drive a local tiny MLP that modulates parameters of a WebGPU raymarched SDF manifold (metaball-like spheres + twist). Hit distances and normals project floating DOM thought-portals that can be dragged to inject new primitives or bias the MLP. Best MLP weights + SDF state seal to IndexedDB with SHA-256. Fully offline, single-file, progressive enhancement.

**Novelty**
Deliberately branches from the recent dominant cluster of WebGPU continuum/lattice/particle/spatial-index simulations (ESN-wave, LIF, SOM, hypervector, quadtree, rigidbody, DLA, speech-jumpflood, WebRTC genome gossip) + local neural models embodied as DOM portals. Introduces a previously unused kernel: interactive WebGPU raymarching of a dynamic SDF manifold, with true WebXR gaze/hand as primary causal input to a local MLP controller. Not fixed-grid CA/NCA/RD, not particles/boids, not softbody/PBD, not spectral. The mind is a living volumetric manifold whose geometry is steered by embodied local AI and reversible DOM injection.

**Architecture**
- Single self-contained index.html.
- WebGPU render pipeline: fullscreen quad + WGSL raymarcher for SDF of 6 spheres (smooth min) + optional twist, lighting via normals.
- Local MLP (6-8-4): inputs = [gaze dir x/y/z, pointer speed, orient beta/gamma or XR pose]; outputs = sphere radii biases + twist.
- Optional WebXR session (immersive-vr or inline): uses viewer pose / targetRay as gaze; hand joints if available as additional attractors.
- 4–6 absolute-positioned DOM portals: positioned by projecting primary hit points; drag injects a temporary sphere or adjusts MLP target.
- IndexedDB key `verse-f609`.
- Chrome morphs via CSS vars from average SDF energy / hit rate.
- Progressive: Canvas2D CPU raymarch fallback (low res), no WebGPU, no XR → pointer only.

**Expected outcome**
Move pointer or enter XR and look around: manifold morphs smoothly as MLP responds to gaze. Portals appear near surface features and can be dragged to grow or shift blobs. Seal/reload restores the mind state. Interactive hybrid of local AI controlling volumetric SDF geometry with living DOM agents.

**Mechanics**
1. Init random MLP weights, fixed sphere base positions, zero biases.
2. rAF / XR frame: sample gaze/pose → MLP forward → update SDF params → render raymarch → project hits to position portals.
3. Drag portal → add temporary attractor sphere or nudge MLP.
4. Seal stores weights + params hash.

**Failure modes**
- No WebGPU: low-res CPU raymarch on Canvas2D.
- No WebXR hardware/permission: pointer + DeviceOrientation.
- IndexedDB blocked: session memory only.
- High step count: adaptive max steps / resolution.
- XR session end: return to 2D.

**Building blocks unlocked**
WebGPU raymarch SDF as spatial substrate; gaze/hand ray as causal input to local MLP; projected volumetric hits driving reversible DOM portals; sealed manifold mind state.

Void is now Verse everywhere.

**Files**: drafts/F609-webxr-gaze-sdf-raymarch-manifold-mind/SPEC.md, drafts/F609-webxr-gaze-sdf-raymarch-manifold-mind/index.html
