# F580 WebXR Hand Reservoir Vicsek Flock Mind

**Slug**: `webxr-hand-reservoir-vicsek-flock-mind`  
**Ledger ID**: F-580 (frontier series)  
**Date**: 2026-11-05

## Concept
True WebXR hand tracking (pinch + index tip) and gaze (viewer pose) as causal inputs to a local Echo State Network (fixed random reservoir, only readout trained online). Reservoir outputs modulate Vicsek flocking parameters (alignment strength, noise, speed) for a previously unused collective-motion kernel. Agents are living DOM “thought-birds” (absolute spans) advected by the Vicsek update; hand pinch grabs and repositions them. Sealed genome (readout weights + Vicsek hyperparams) persists in IndexedDB and migrates via BroadcastChannel under fitness competition. Fully offline single-file prototype with Canvas2D visualization of velocity field.

## Novelty
Leaves the dominant recent cluster of ambient-sensor / orientation MLP/RNN/attention driving wave-equation, flow-field, NCA, SDF+CSS-Paint, SVG ribbons, CSS-Grid Q-learning, and speech-seeded gardens (F572–F579). Core novel combination is WebXR hand/gaze → Echo State reservoir (not MLP/RNN/attention/Q) → Vicsek alignment kernel (never used in any prior F- draft) → living DOM bird-glyphs under sealed multi-tab genome transfer. Not continuous RD/NCA, not particle SPH/DEM, not spectral residuals, not Paint Worklet, not pure CSS Grid, not wave equation.

## Architecture
- Single `index.html`.
- WebXR: requestSession('immersive-vr', {optionalFeatures:['hand-tracking']}); fallback pointer + DeviceOrientation.
- Reservoir: 24-node Echo State (fixed sparse random W_res, spectral radius ~0.9), input projection from hand pinch distance + gaze angles + pointer Δ; only readout matrix updated on reward.
- Vicsek: 48 agents, local alignment within radius, noise scaled by reservoir output, Canvas2D velocity arrows + DOM birds.
- DOM birds: absolute-positioned spans with glyph + rotation from heading; pinch/pointer drag repositions and injects reward.
- Seal: IndexedDB store `verse-f580`; BroadcastChannel `f580-genome` for peer transfer (higher fitness adopts).
- Offline-capable after load; progressive enhancement.

## Expected outcome
Enter WebXR (or use pointer): hand pinch or click grabs birds; tilting/gazing steers alignment via reservoir; flock self-organizes into coherent streams; click rewards tighten alignment; multi-tab genomes migrate. Seal restores personality. Interactive spatial embodiment of collective motion under local reservoir mind.

## Mechanics
1. Init random reservoir + readout, place agents.
2. Each frame: sample hand/gaze/pointer → reservoir update → Vicsek params → agent step (alignment + noise + bounds).
3. Update DOM birds transforms; draw velocity field on canvas.
4. Pinch/click on bird: reward (coherence bonus), update readout (simple delta rule).
5. Every 10s: compute fitness (mean alignment), seal, broadcast.
6. On receive: if higher fitness, adopt + mutate slightly.

## Failure modes
- No WebXR/hand-tracking: full pointer + orientation fallback.
- Reservoir collapse: spectral radius clamped, leak rate 0.3.
- High agent count: capped, rAF throttled.
- BroadcastChannel restricted: local only.
- IndexedDB blocked: session memory.

## Files
drafts/F580-webxr-hand-reservoir-vicsek-flock-mind/SPEC.md  
drafts/F580-webxr-hand-reservoir-vicsek-flock-mind/index.html

## V01D landing
Skill under `void-live-deploy/skills/webxr-reservoir-vicsek/`; test that hand/pointer input changes Vicsek noise and that sealed readout restores flock coherence after reload.

Void is now Verse everywhere.
