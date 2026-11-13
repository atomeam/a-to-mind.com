# F739 Pointer-History Decision Tree CSS Grid Living Layout Mind

**Ledger ID**: F-739 (frontier series)

**Slug**: pointer-history-decision-tree-css-grid-mind

**Date**: 2026-11-13

**Branch from**: Recent dominant cluster of WebGPU continuum/particle physics kernels (spiking neural portals F731, Gray-Scott MLP fields F732, LBM fluid advection F733, attention particles F734) and orientation-driven local models (k-NN notes F735, Hebbian DOM swarm F737, HMM state portals F738). Explicitly leaves WebGPU compute shaders, continuum/particle/physics substrates, DeviceOrientation primary, neural/probabilistic sequential models (MLP/RNN/ESN/k-NN/HMM/Hebbian), and canvas-primary embodiments.

## Concept
A pure-JS online decision tree (non-neural, threshold-based splits on pointer trajectory statistics) takes a short history of pointer velocity, acceleration, and curvature as causal input. It outputs control parameters for a living CSS Grid of absolute/relative DOM portals that dynamically reflow, resize, recolor, and morph content. Multiple competing local trees (agents) own grid regions; fitness from pointer dwell-time and clicks rewards better trees. Overlap or high fitness triggers sealed genome transfer of the tree structure (thresholds + leaf params) over BroadcastChannel + IndexedDB. Hybrid embodiment: the DOM elements themselves are the spatial agents and the layout is the mind's body. Offline-capable single-file HTML. Progressive: works with mouse/pointer only.

## Novelty
Leaves the recent cluster of WebGPU physics kernels with sensor-driven neural/probabilistic policies and DOM sampling portals (F731–F738). Core novel combination is a previously unused local model type (online decision tree / threshold cascades, not MLP/RNN/reservoir/k-NN/HMM) whose causal input is pure pointer-history features, controlling a previously unused primary substrate (CSS Grid living layout reflow as the mind embodiment, not particles/fields/NCA/canvas), with multi-agent sealed tree-genome transfer. Not WebGPU, not orientation sensors, not neural weights, not continuum simulation.

## Architecture
- Single index.html.
- Pointer event history ring buffer (positions → vel/accel/curvature features).
- Simple decision tree per agent: fixed-depth binary tree with learnable thresholds on features; leaves hold {cols, hue, scale, contentSeed}.
- CSS Grid container; portals are grid items whose styles are set from tree leaves. Tree decides which agent controls which cells.
- Fitness: time pointer spends over an agent's portals + click rewards. Periodic selection and sealed transfer.
- IndexedDB persists best genome; BroadcastChannel for multi-tab transfer.
- Status chrome for features, fitness, Seal button.

## Mechanics
1. Initialize 3 agents with random thresholds.
2. On pointermove, update history, compute features, traverse trees, assign grid params, reflow.
3. Measure dwell, update fitness. On click, boost fitness and reinforce leaf.
4. Every N frames, if fitness differential high, mutate and transfer winning tree via channel.
5. Seal persists current best.

## Expected outcome
Move pointer around the grid: layout columns, colors, and portal sizes change according to your movement style (fast sweeps vs slow circles). Click portals to reward; better-matching trees expand. Seal and reload keeps the preferred tree. Open second tab to see genome migration. Fully interactive offline.

## Failure modes
- No pointer events: static grid.
- IndexedDB blocked: session only.
- BroadcastChannel unavailable: local only.
- Tree depth fixed to avoid explosion.

## Building blocks
Reusable pure-JS decision tree on trajectory features, CSS Grid as living causal embodiment, sealed non-neural genome transfer over BroadcastChannel + IndexedDB. Ready for deeper trees, WebXR hand as additional features, or Houdini paint integration.

Void is now Verse everywhere.

**Files**
- drafts/F739-pointer-history-decision-tree-css-grid-mind/SPEC.md
- drafts/F739-pointer-history-decision-tree-css-grid-mind/index.html
