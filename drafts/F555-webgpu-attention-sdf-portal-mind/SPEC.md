# Frontier Engine F555: Attention-Map Sculpted SDF Volumes with Predictive Portal Spawn

**Slug**: `webgpu-attention-sdf-portal-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of competitive MLP portals (F554), OPFS causal graphs (F553), WebXR hand volumetric NCA (F552), orientation evo DOM physics (F551). Explicitly leaves per-agent MLPs, OPFS graphs, hand-sculpted NCA, and pure particle/DOM systems.

## Concept
A pure-JS causal multi-head attention mechanism runs over a rolling window of pointer trajectories and optional DeviceOrientation samples. The resulting attention map is downsampled and uploaded every frame as a WebGPU texture. A raymarched SDF volume is sculpted by sampling this attention texture as a density/offset field, producing living organic forms that grow and dissolve with user attention. High-energy regions of the SDF automatically spawn absolute-positioned DOM portals whose text content is a short-horizon linear prediction of the next pointer delta (local causal mind). Portals can be clicked to reinforce the prediction path. All attention weights seal to IndexedDB. Fully offline after load, single self-contained file. Canvas2D fallback if WebGPU unavailable.

## Novelty
Leaves the dominant recent clusters of independent agent MLPs, spatial-audio graphs, hand-tracked volumetric NCA, and embedding swarms. Core novel combination is real-time pure-JS causal attention maps used as the direct sculpting substrate for a WebGPU raymarched SDF volume, with the emergent high-density regions physically spawning and positioning predictive DOM portals. Attention is no longer a policy or card-weaver; it is the geometry itself. Not residual predictors, not flocking, not OPFS-primary.

## Architecture
- Single `index.html`.
- Rolling history buffer (last 32 pointer + orientation samples).
- Pure-JS multi-head attention (4 heads, d_model=16) producing a 32×32 attention map.
- Map downsampled to 64×64 and uploaded to WebGPU texture every frame.
- Raymarch fragment shader samples the texture to offset an SDF sphere into organic forms.
- High-density voxels (threshold) emit DOM `.portal` elements at projected screen positions; each portal displays a predicted next delta (simple online linear regression on recent deltas).
- IndexedDB store `f555-attention` for sealed weight snapshots.
- DeviceOrientationEvent (permission on click) augments the history.
- Seal button forces persist of current attention weights.

## Expected outcome
Runnable prototype in which moving the pointer (and tilting the device) grows living SDF forms on the WebGPU canvas; bright regions spawn small floating portals that show predicted next movements; clicking a portal reinforces that path; sealing and reloading restores the attention state. Offline-capable. Canvas2D density fallback when WebGPU is absent.

## Mechanics
1. Initialize random attention weights or load from IndexedDB.
2. On pointermove / orientation: push sample into history, run attention forward, produce map.
3. Upload map as texture; raymarch and render SDF.
4. Sample high-density regions, spawn or update portals with linear predictions.
5. On portal click: boost the corresponding history weight.
6. Seal persists weights.

## Failure modes
- No WebGPU: fall back to Canvas2D visualization of the attention map + still spawn portals.
- No DeviceOrientation: pointer-only history still fully functional.
- Too many portals: cap at 12, prune oldest.

## Files
- drafts/F555-webgpu-attention-sdf-portal-mind/SPEC.md
- drafts/F555-webgpu-attention-sdf-portal-mind/index.html

## V01D landing
Attention-to-SDF sculptor stage under void-live-deploy/skills/attention-sdf-portal.js; test asserts pointer motion produces non-zero attention map, Seal persists weights, and at least one portal appears after sustained motion.
