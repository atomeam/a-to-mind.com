# F581 WebGPU LBM Attention Portal Mind

**Slug**: `webgpu-lbm-attention-portal-mind`  
**Ledger ID**: F-581 (frontier series)  
**Date**: 2026-11-05

## Concept
A discrete Lattice Boltzmann Method (LBM) fluid kernel running primarily on WebGPU compute (with Canvas2D fallback) models a 2D "thought fluid" of density and velocity. A pure-JS causal multi-head attention mechanism consumes a short history of pointer trajectories and sampled fluid moments (density, vorticity at cursor). Attention outputs continuously modulate LBM force sources, relaxation time, and boundary injection. High-vorticity loci spawn living DOM portals (absolute-positioned divs) whose visual style (gradient, scale, opacity) is driven by local fluid statistics. User clicks on portals supply reward that evolves the attention parameters via a lightweight evolutionary strategy. The sealed genome persists in IndexedDB and migrates via BroadcastChannel under fitness competition. Fully self-contained single-file offline prototype.

## Novelty
Leaves the dominant recent cluster of WebXR hand/gaze reservoirs driving Vicsek flocks (F580), multi-head attention on flow-field kernels with living glyphs (F579), ambient-sensor MLPs with WebGPU SDFs + CSS Paint Worklets (F578), wave-equation echoes, discrete CA/CSS-Grid layouts, speech-NCA gardens, sealed-genome grids, Q-learning spatial agents, continuous RD/NCA, particle SPH/DEM, spectral residuals, and pure CSS Grid systems (F572–F579). Core novel combination is WebGPU Lattice Boltzmann fluid (never used as substrate in any prior F- draft) modulated by causal multi-head attention (not reservoir/MLP/Q-table) that births and styles living DOM portals at vorticity peaks under evolutionary genome transfer. Not Vicsek, not simple advection-diffusion, not reaction-diffusion, not particle systems, not WebXR primary, not Paint Worklet primary.

## Architecture
- Single self-contained `index.html` (no external dependencies).
- WebGPU device + compute pipeline for LBM collide-stream steps on a 64×64 lattice (density + 9 discrete velocities); Canvas2D visualization of density/vorticity field. Progressive fallback to pure Canvas2D LBM-like update if WebGPU unavailable.
- Causal history buffer (last 12 samples of pointer Δ + fluid samples).
- Tiny multi-head attention (3 heads, pure JS) produces modulation scalars for force magnitude, tau (relaxation), and source strength.
- 8 living portals (DOM divs) spawned/updated at top vorticity sites; style driven by local density and curl.
- Evolutionary update: on portal click, mutate top-k attention weights toward higher vorticity-engagement fitness.
- Seal button serializes genome (attention weights + LBM hyperparameters) to IndexedDB store `verse-f581`; BroadcastChannel `f581-genome` for peer transfer (higher fitness adopts).
- Offline-capable after load; progressive enhancement.

## Expected outcome
Pointer motion injects forces and attention steers the fluid; vortical structures emerge and birth floating portals whose appearance reflects local flow; clicking portals rewards and evolves the mind; multi-tab genomes migrate. Seal restores personality. Interactive spatial embodiment of a local attention-modulated lattice-Boltzmann thought fluid with living portal agents.

## Mechanics
1. Init random attention weights + LBM lattice (equilibrium density).
2. Each frame: sample pointer + fluid moments → attention update → modulate LBM parameters → collide-stream step → compute vorticity.
3. Update portal positions/styles at high-curl sites; draw density field.
4. Click portal: reward (vorticity × engagement), evolve attention (simple mutation toward fitness).
5. Every 8s: compute fitness (mean vorticity + portal stability), seal, broadcast.
6. On receive: if higher fitness, adopt + slight mutation.

## Failure modes
- No WebGPU: full Canvas2D LBM-like fallback (still interactive).
- Attention collapse: weights clamped, learning rate low.
- High lattice cost: resolution capped, rAF throttled.
- BroadcastChannel restricted: local only.
- IndexedDB blocked: session memory only.

## Files
drafts/F581-webgpu-lbm-attention-portal-mind/SPEC.md  
drafts/F581-webgpu-lbm-attention-portal-mind/index.html

## V01D landing
Skill under `void-live-deploy/skills/webgpu-lbm-attention-portals/`; test that pointer input changes fluid forces via attention and that sealed genome restores portal behavior after reload.

Void is now Verse everywhere.
