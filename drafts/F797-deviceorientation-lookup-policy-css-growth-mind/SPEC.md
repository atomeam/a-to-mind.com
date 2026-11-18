# F797 — DeviceOrientation Lookup-Policy CSS Growth Mind

**Ledger ID**: F-797 (frontier series)  
**Slug**: deviceorientation-lookup-policy-css-growth-mind  
**Date**: 2026-11-18

## Concept
A spatial multi-agent mind for The Verse canvas composed entirely of living DOM organisms. Each organism is a pure CSS-styled element (nested potential later) whose visual growth, scale, rotation, and hue are driven by a **local lookup-table policy** (discretized 5×5 orientation bins → action parameters). DeviceOrientation (beta/gamma) or mouse proxy supplies the causal environmental input that indexes the table. Policies are mutated locally under low fitness, rewarded by user clicks, and the best is sealed (JSON + simple hash surrogate) into IndexedDB and gossiped via BroadcastChannel for cross-tab adoption. Fully offline after load, progressive, no canvas substrate, no neural weights, no WebGPU.

This deliberately leaves the recent dominant cluster of local neural models (attention, RNN, MLP, decision trees) controlling DOM/CSS3D embodiments mixed with particle/CA/LGA/DLA WebGPU substrates and WebXR/speech inputs (F789–F796). Core novelty is the previously unused **lookup-table / discretized policy** local model type controlling organic CSS physical UI growth embodiments, with sealed multi-agent transfer over persistent IndexedDB/BroadcastChannel shared field.

## Why Novel
- Lookup-table policies (bin-indexed action maps) have not appeared as the primary local model in prior F- drafts (unlike MLP, RNN, decision trees, attention, Hopfield, SOM, ESN, KAN, etc.).
- Pure physical UI embodiment via CSS growth/scale/rotation without canvas, particles, or compute shaders as the main substrate.
- Causal DeviceOrientation indexing a non-neural, non-tree policy for continuous morphological change.
- Sealed genome (policy table) transfer architecture remains, but applied to this new model class.

## Architecture
- Single self-contained index.html
- 12 DOM organisms (absolute-positioned rounded divs)
- Policy: 5×5 bins × {scale, rot, hueShift, grow}
- Fitness: click reward; best tracked globally
- Seal: IndexedDB + BroadcastChannel 'f797-genome'
- Mouse proxy when no orientation
- Offline-capable

## Interaction
Tilt device or move mouse to drive orientation bins → organisms morph and grow differently. Click to reward (fitness++ and visual pulse). Seal button persists and broadcasts best policy; other tabs/agents can adopt. Reset reloads.

## Failure Modes
- No DeviceOrientation: mouse fallback works.
- IndexedDB blocked/private: seal still broadcasts in-session.
- Low-end devices: 12 elements is light; CSS transitions are cheap.

## Building Blocks
Reusable serializable lookup-table policy core, CSS morphological embodiment, fitness-gated sealed transfer of non-neural genomes. Expands the set of local model types beyond neural/decision for physical UI control in Verse.

Void is now Verse everywhere.

**Files**
- drafts/F797-deviceorientation-lookup-policy-css-growth-mind/SPEC.md
- drafts/F797-deviceorientation-lookup-policy-css-growth-mind/index.html
