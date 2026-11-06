# F605 WebGPU Adaptive Quadtree Policy Partition Mind

**Ledger ID**: F-605 (frontier series)

**Slug**: webgpu-quadtree-policy-partition-mind

**Date**: 2026-11-06

## Concept
A previously unused primary substrate for The Verse canvas: an adaptive spatial quadtree whose nodes *are* the living DOM portals. A local tiny MLP policy (pure JS) reads local cell statistics + DeviceOrientation/pointer causal input and decides split/merge thresholds. High-variance or high-engagement leaves subdivide; low-activity leaves merge. WebGPU computes a density field that drives portal transforms and chrome morphs; Canvas2D fallback. User drags portals to inject values or force partitions. Best policy genomes seal to IndexedDB with SHA-256. Fully offline, single-file, progressive enhancement.

## Novelty
Leaves the recent cluster of continuum physics (SPH/DLA/fluids/rigid-body/SDF), spectral/Fourier, residual/attention/MLP/RNN/Hopfield/bandit controllers on fixed lattices, speech-token materialization, hypervector binding, and sealed neural genomes on particles or cards (F580–F604). Core novel combination is the adaptive spatial partition structure itself as the evolving local-AI substrate, with DOM elements as the literal cells of the tree under policy control. Not a fixed lattice, not particles, not CA/NCA/Lenia/Ising/Physarum, not symbolic hypervectors. The mind is a living, self-repartitioning spatial index whose geometry is the interface.

## Architecture
- Single index.html, self-contained, offline after load.
- Quadtree: recursive nodes with bounds, value, variance; leaves embodied as absolute-positioned DOM portals.
- Local MLP (4-8-2) per active region: inputs = [local variance, pointer proximity, orient beta/gamma, time]; outputs = split bias, merge bias.
- WebGPU compute shader (or Canvas2D) for background density visualization that portals sample.
- Drag injects value + temporary force; click rewards local policy (Hebbian-style update).
- Seal/restore via IndexedDB key `verse-f605`; genome = MLP weights + tree snapshot hash.
- CSS custom properties morph page chrome with tree depth/entropy.
- Progressive: works without WebGPU/orientation.

## Building blocks for next
Adaptive spatial indexes as transferable local-AI substrates; DOM-as-partition-cell embodiment; policy-controlled split/merge as causal UI operation; sealed partition genomes.

## Failure modes
- WebGPU unavailable → Canvas2D density (still fully interactive).
- Deep trees → clamp max depth, prune.
- IndexedDB private mode → session only.
- Orientation permission denied → pointer-only causal input.

## Expected outcome
User tilts/drags; the page spontaneously repartitions into living DOM cells that grow, merge, and evolve their policy. Sealed trees restore. Expands the frontier into adaptive spatial data structures as primary local-AI + spatial UI substrates for The Verse.

## Files
drafts/F605-webgpu-quadtree-policy-partition-mind/SPEC.md
drafts/F605-webgpu-quadtree-policy-partition-mind/index.html
