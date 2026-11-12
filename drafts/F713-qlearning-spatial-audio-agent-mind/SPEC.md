# F713-qlearning-spatial-audio-agent-mind

**Ledger ID**: F-713
**Slug**: qlearning-spatial-audio-agent-mind
**Date**: 2026-11-12
**Status**: frontier prototype

## Concept
A novel combination never previously attempted on The Verse canvas: a swarm of agents governed by pure tabular Q-learning (no neural weights, no expression trees, no reservoirs) that learn spatial policies from pointer proximity and click rewards. Each agent drives a dedicated Web Audio oscillator whose frequency and stereo pan emerge from its position and fitness, creating a living spatial soundscape. DeviceOrientation supplies a continuous tilt bias. Best Q-tables seal to localStorage and can migrate via BroadcastChannel. Fully self-contained, offline after first load.

This leaves the recent cluster of WebGPU continuum kernels, MLP/RNN/reservoir/decision-tree/expression-tree policies, WebXR hand/gaze, genetic programming DOM morphs, WebRTC peer genomes, and spectral residual predictors. Core novelty is tabular RL agents embodied as spatial audio sources whose learned policies produce emergent sonic structure under causal orientation + pointer input.

## Architecture
- Single index.html, self-contained.
- Canvas2D: 12 agents, simple Euler integration with Q-selected discrete actions (N/S/E/W/stay).
- State discretization: relative pointer angle (8 bins), distance (3 bins), orientation residual (3 bins) → ~72 states.
- Q-table per agent: 72 × 5 floats.
- Reward: inverse distance to pointer + click bonus; small penalty for wall collision.
- Web Audio: one OscillatorNode + GainNode + StereoPannerNode per agent; freq = 220 + fitness*2, pan = (x-0.5)*1.6.
- DeviceOrientationEvent for tilt force.
- Persistence: localStorage `verse-f713-q`.
- BroadcastChannel `verse-f713` for optional multi-tab policy share.
- Controls: Start Audio, Seal, Reset, Reward mode toggle.

## Mechanics
1. Initialize random Q-tables (or load).
2. Frame: discretize state → ε-greedy action → integrate → update Q via TD → draw agent + trail.
3. Update audio params from position/fitness.
4. Click nearest agent for +reward.
5. Seal persists all Q-tables as JSON.

## Expected outcome
Open page, click Start Audio. Agents learn to approach the pointer (or tilt direction). Spatial tones shift and pan as agents move; higher fitness agents louder/higher pitch. Click to reinforce. Seal and reload preserves learned behavior. Second tab can receive policies.

## Failure modes
- Web Audio blocked until user gesture: button required.
- Orientation denied: pointer-only (still learns).
- localStorage full/denied: session only.
- High ε exploration keeps it lively.

Void is now Verse everywhere.
