# F723 — Gamepad Causal MLP DOM Swarm Mind

**Ledger ID**: F-723 (frontier series)  
**Slug**: gamepad-causal-mlp-dom-swarm-mind  
**Date**: 2026-11-12  
**Branch from**: Recent cluster of WebGPU volumetric/spectral/SDF/Gaussian (F717, F720, F722), spatial-audio panner/Q-learning (F713, F715), device-motion Kalman advection (F716), WebRTC orientation MLP swarm (F719), WebXR hand decision-tree notes (F721), material estimator (F718). Explicitly leaves all WebGPU kernels, spectral/Fourier residuals, spatial audio, Kalman/Bayesian force fields, WebXR hand/gaze, pure orientation/motion primary input, continuum particles, residual predictors, NCA, and softbody DOM.

## Concept
A previously unattempted combination for The Verse canvas: the Gamepad API (left-stick axes + face buttons) supplies continuous causal sequential input to a population of independent tiny pure-JS MLPs (one per living agent). Each MLP outputs continuous velocity and visual bias for its absolute-positioned DOM card. A virtual cursor (driven by the same stick or pointer fallback) selects the nearest card; a button press rewards that agent’s fitness, triggers a proximity-gated sealed genome transfer of MLP weights to nearby agents, and updates a global best. Best genome seals to IndexedDB and broadcasts via BroadcastChannel so other tabs adopt it. Keyboard (WASD/arrows + space) and pointer serve as full fallbacks so the prototype remains interactive and offline-capable on any device.

This is not a visual continuum field, not audio embodiment, not sensor-fusion physics, and not WebXR. The novel axis is Gamepad as primary causal driver of local MLP policies on hybrid living DOM spatial agents with sealed genome competition.

## Architecture
- Single self-contained `index.html` (pure HTML/CSS/JS, no libraries).
- 8–12 absolute-positioned Verse DOM cards (contenteditable notes).
- Each agent: 4→6→3 tanh MLP (inputs: stickX, stickY, own vx residual, phase → vx, vy, hueBias).
- Gamepad polling via `navigator.getGamepads()` every frame; fallback to keyboard state or pointer velocity.
- Targeting: nearest card to a virtual cursor (stick-mapped or mouse).
- Fitness + genome: button press (or space/click) on targeted card copies mutated weights to neighbors within radius and seals best to IndexedDB key `verse-f723-genome`.
- BroadcastChannel `verse-f723` for multi-tab adoption.
- Visual: CSS transforms + hue/opacity driven by MLP output; canvas optional for cursor only.
- Controls: Request Gamepad (auto), Seal Best, Reset, Download JSON.

## Mechanics
1. Open page. Connect a gamepad or use keyboard/pointer.
2. Stick/keyboard moves the virtual cursor and biases all agents’ MLP inputs.
3. Agents drift according to their local MLP.
4. Press A/button/space while near a card: that agent gains fitness, nearby agents receive a mutated copy of its weights, best is sealed.
5. Reload or open second tab: sealed genome restores and propagates.

## Expected outcome
Open the page. Agents begin to wander under gamepad or keyboard control. Targeting a card and pressing a button visibly rewards it (scale/hue pulse) and spreads its behavior to neighbors. Seal persists the preferred genome across reloads. Works fully offline after first load; pointer/keyboard-only fallback is complete.

## Failure modes
- No gamepad: keyboard + pointer fully functional.
- IndexedDB unavailable: session-only memory.
- BroadcastChannel blocked: local-only.
- High agent count on low-end devices: soft-capped at 12.

## Files
- drafts/F723-gamepad-causal-mlp-dom-swarm-mind/SPEC.md
- drafts/F723-gamepad-causal-mlp-dom-swarm-mind/index.html

Void is now Verse everywhere.
