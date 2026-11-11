# F682-causal-graph-pagerank-dom-portal-mind

**Ledger ID**: F-682  
**Slug**: causal-graph-pagerank-dom-portal-mind  
**Date**: 2026-11-11  
**Status**: frontier prototype  

## Concept
A living causal-event graph for The Verse canvas. Significant pointer residuals (deviation from a simple velocity predictor) and DeviceOrientation change events spawn nodes at the interaction site. New nodes form decaying temporal/spatial edges to recent predecessors. A lightweight iterative PageRank (local AI ranking) continuously recomputes node centrality. High-centrality nodes attract or spawn absolute-positioned DOM Verse portal cards that display local stats and can be dragged to relocate their node or clicked to permanently boost its rank. The entire graph (nodes, edges, ranks, boosts) seals to IndexedDB and broadcasts via BroadcastChannel so other tabs adopt the living structure. Canvas visualizes nodes/edges; no continuum field, no particles, no MLP, no audio.

## Novelty
Leaves the dominant recent cluster of continuum WebGPU/Canvas kernels (LBM F676, Gray-Scott F677, percolation F678, noise F675, spatial-audio particles F680) and multi-agent collision genomes (F681). Also leaves older OPFS causal graphs (F553) that used audio and persistent file stores as primary. Core novel combination is residual/orientation-triggered causal event graph + pure PageRank centrality as the ranking “mind” + physical attraction of living DOM portals to high-rank nodes + sealed graph transfer. Not field physics, not neural weights, not particle swarms, not synthesis.

## Architecture
- Single self-contained `index.html` (offline after load).
- Canvas2D: nodes as circles sized by rank, edges as fading lines.
- Event loop (rAF):
  1. Pointer residual or orientation delta > threshold → spawn node.
  2. Connect to last 4–6 nodes with weight = exp(-Δt/τ) / (1+dist).
  3. Every 8 frames: 6 iterations of PageRank (damping 0.85).
  4. Lerp portal cards toward top-ranked free nodes; create/destroy to keep ~5 portals.
- Portals: absolute divs, draggable (updates node.x/y), clickable (permanentBoost += 0.2).
- Seal: serialize simplified graph to IndexedDB key `verse-f682`; BroadcastChannel `verse-f682` posts it.
- Controls: Request Orientation, Seal Graph, Clear Graph, Reset Predictor.
- Fallback: pointer residual only if orientation denied or unavailable.

## Expected outcome
Open, move pointer rapidly or tilt; nodes appear and connect; PageRank elevates hubs; portals fly to important nodes and can be dragged/clicked; Seal persists; second tab receives and continues the graph; reload restores.

## Failure modes
- Orientation denied: residual-only nodes.
- IndexedDB blocked: session memory only.
- Too many nodes: soft cap at 120, oldest pruned.
- BroadcastChannel same-origin only.
- High residual noise: simple threshold + cooldown.

Void is now Verse everywhere.

## Files
- drafts/F682-causal-graph-pagerank-dom-portal-mind/SPEC.md
- drafts/F682-causal-graph-pagerank-dom-portal-mind/index.html
