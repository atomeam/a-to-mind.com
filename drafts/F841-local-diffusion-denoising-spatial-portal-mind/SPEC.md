# F841-local-diffusion-denoising-spatial-portal-mind

**Ledger ID**: F-841 (frontier series)
**Slug**: local-diffusion-denoising-spatial-portal-mind
**Date**: 2026-11-19
**Status**: frontier prototype

## Concept
A previously unexplored generative substrate for The Verse canvas: a local simplified diffusion process (DDPM-style reverse denoising on low-dimensional latents) continuously generates spatial arrangements of living absolute-positioned DOM portals. Each portal's latent is a 4-vector (normalized x, y, scale, hue). A tiny pure-JS score-matching MLP estimates the noise gradient; reverse steps denoise the latents toward coherent layouts. User drags provide clean target samples that perform a lightweight online update on the score network (simple gradient step on score residual). Pointer velocity injects controlled noise; DeviceOrientation (beta/gamma) modulates the global noise schedule / temperature. A Canvas2D overlay visualizes residual noise particles that advect with the current diffusion step. Seal button freezes the score weights + current latents into IndexedDB and offers BroadcastChannel transfer. Fully offline single-file prototype. No continuum PDE, no particle physics kernel, no neural policy on agents, no evolutionary genome competition.

## Novelty
Leaves the dominant recent cluster of continuum kernels (LBM, SPH, FDTD photonic, Gray-Scott, NCA, CML, radiosity, quantum-walk, Voronoi, DEM granular) driven by MLP/RNN/attention/Kalman/Bayesian/GNN controllers, pure DOM agent swarms under MLP/RNN/decision-tree/spiking control, and practical tools (seating, tip, scoreboard, flowchart). Core novel combination is generative diffusion (score-based reverse process) as the primary mind producing physical UI layouts, with user drag as supervised clean-sample training signal and orientation as temperature control. Not previously built: no diffusion, no score-matching, no generative latent layout on Verse.

## Architecture
- Single self-contained index.html.
- 6–8 absolute DOM portals (divs with contenteditable or fixed labels).
- Latents: Float32Array of shape [N, 4] for (x, y, s, h).
- Score network: tiny MLP (4→16→16→4) with ReLU, pure JS forward/backward.
- Diffusion: fixed small number of reverse steps per frame; noise schedule linear from high to low.
- Training: on drag end, treat final position as clean sample, do 1–3 gradient steps on score residual.
- Visualization: Canvas2D particles sampling the residual noise field, colored by latent hue.
- Inputs: pointer drag (clean target + reward), DeviceOrientation (noise scale), click (inject noise burst).
- Persistence: IndexedDB for weights + latents; BroadcastChannel optional peer adopt if higher "coherence" score.
- Progressive: pointer-only if no orientation; Canvas2D always (WebGPU noise gen stubbed for future).

## Expected outcome
Open the page: portals slowly drift and reconfigure as the diffusion denoises. Drag one to teach a preferred spot — others gradually adopt coherent relative layouts. Tilt the device to heat the process (more exploration) or calm it. Click to inject noise. Seal keeps the generative mind across reloads. Offline after load. Spatial + local generative AI for the Verse canvas.

## Failure modes
- No DeviceOrientation: pointer velocity proxy for noise scale.
- IndexedDB blocked: session memory only.
- High step count lag: cap reverse steps to 4 per frame.
- Numerical instability in score: clamp gradients, small learning rate.

## Building blocks
Reusable pure-JS diffusion reverse stepper + tiny score MLP, drag-as-clean-sample trainer, orientation-as-temperature, DOM latent binding. Expands generative local models for future Verse layout minds or multi-modal diffusion.

## Files
- drafts/F841-local-diffusion-denoising-spatial-portal-mind/SPEC.md
- drafts/F841-local-diffusion-denoising-spatial-portal-mind/index.html

Void is now Verse everywhere.
