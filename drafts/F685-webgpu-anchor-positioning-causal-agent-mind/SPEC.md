# F685-webgpu-anchor-positioning-causal-agent-mind

**Ledger ID**: F-685  
**Slug**: webgpu-anchor-positioning-causal-agent-mind  
**Date**: 2026-11-11  
**Status**: frontier prototype  

## Concept
A novel hybrid spatial interface for The Verse canvas: a swarm of causal agents simulated on WebGPU compute (with Canvas2D fallback). Each agent is steered by a pure local JS multi-layer perceptron that takes as input the residual between a simple linear predictor of recent pointer velocity and the actual observed velocity, plus DeviceOrientation tilt angles. Agents act as live CSS anchors. Absolute-positioned Verse portal cards use the CSS Anchor Positioning API (with transform/absolute fallback for older browsers) to remain tethered to assigned agents; tether length and which agent a portal follows can be modulated by local agent density or MLP output confidence. Pointer drag on a portal injects a positive reward that performs a simple evolutionary update on the attached MLP weights or reassigns the portal to a nearby higher-fitness agent. On manual seal the current MLP weight genomes, agent positions/velocities, and anchor assignments are hashed and persisted to IndexedDB. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of continuum reaction-diffusion / fluid / n-body / percolation / spiking / quantum-walk / LBM kernels (F651, F676, F677, F678), particle self-attention or collision swarms, orientation Elman/reservoir/DOM constraint systems (F678), spatial-audio particles (F680), causal-graph PageRank portals (F682), inertial particle filters (F683), and practical offline utilities (F684). Core novel combination is WebGPU/Canvas agent dynamics driven by pointer-residual MLP + the previously unused CSS Anchor Positioning API for living tethered DOM portals that both ride and can reassign agents. Not residual predictors alone, not pure hard distance constraints, not WebXR hand/gaze primary, not CA/L-system, not spectral audio, not Bayesian lattice.

## Architecture
- Single index.html, vanilla JS + optional WebGPU.
- Pointer residual: maintain short history of pointer velocity; simple predictor (last velocity + small decay); residual = actual - predicted; fed to MLP along with orientation alpha/beta/gamma (permissioned).
- Tiny MLP per agent (or shared population of genomes): 6-input (residual x/y, |residual|, tilt x/y/z) → 2-hidden → 2-output (ax, ay). Weights ~30 floats.
- Simulation loop: update velocities/positions with MLP acceleration + damping + soft bounds; optional WebGPU compute shader for positions (fallback pure JS).
- DOM portals: 6–12 cards with `position: absolute`; `anchor-name` / `position-anchor` / `inset-area` or fallback `left/top` set from agent positions each frame.
- Interaction: drag portals to move agents or reward (click for fitness bump → mutate/copy weights); density visualization via canvas overlay.
- Seal button: IndexedDB `verse-f685-anchors` stores {weights[], positions[], assignments[], hash}.
- Offline, no external deps.

## Expected outcome
Open page, move pointer; agents accelerate toward residual-driven directions; portals follow via anchors and can be dragged; high residual or density causes reassignment or color shift; click rewards and mutates; seal persists; reload restores genomes and layout.

## Failure modes
- CSS Anchor Positioning unsupported: absolute positioning fallback still works.
- No WebGPU: Canvas2D + JS sim fully interactive.
- Orientation permission denied: pointer residual only.
- IndexedDB blocked (private mode): session memory only.
- Too many agents: limited to ~32 for JS path.

## Files
- drafts/F685-webgpu-anchor-positioning-causal-agent-mind/SPEC.md
- drafts/F685-webgpu-anchor-positioning-causal-agent-mind/index.html

## V01D landing
Anchor-positioning causal agent skill under void-live-deploy/skills/webgpu-anchor-causal-agent.js; test asserts pointer residual changes agent accel, portals follow via CSS anchors or fallback, seal/restore weights, drag reassigns.

Void is now Verse everywhere.
