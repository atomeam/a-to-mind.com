# F726-webxr-hand-spring-evo-spatial-cards

## Concept
True WebXR hand tracking (wrist/palm positions when available) drives continuous spring-physics attraction for a population of floating DOM spatial note cards. Each card is controlled by a local evolutionary strategy that adapts its spring stiffness, damping, and attract radius based on user feedback (hold duration near hand, click-to-reward, or successful drag-to-rest). Best parameter genomes seal to IndexedDB and transfer via BroadcastChannel for multi-tab adoption. Pointer fallback for non-XR. Hybrid physical UI embodiment controlled by local non-neural model.

Branches away from: recent WebGPU volumetric/spectral/quantum fields (F720, F722, F725), discrete decision-tree hand policies (F721), MLP/RNN sensor swarms (F719, F723), L-system genetic growth (F724), softbody DOM, pure NCA, attention lattices, residual predictors.

## Architecture
- Single index.html, pure HTML/CSS/JS, offline-capable.
- WebXR: requestSession('immersive-ar' or 'inline') with hand-tracking; map joint positions to screen space for attractors.
- Physics: simple Euler integration of position/velocity with spring to target + damping + light gravity/bias.
- Local model: per-card genome [stiffness, damping, attractStrength]; mutate on generation, select by fitness (proximity time + explicit rewards).
- Persistence: IndexedDB `verse-f726-spring-genomes`; BroadcastChannel `f726-genomes`.
- Interaction: drag to reposition (fitness boost), click to reward, seal button, reset.

## Expected outcome
Open page. Cards float with spring dynamics. With WebXR hand support, palm acts as attractor; otherwise pointer. Hold near cards or click to reward; genomes evolve toward stable, responsive springs. Seal and open second tab to share best parameters. Fully offline, interactive.

## Failure modes
- No WebXR/hand-tracking: seamless pointer fallback.
- IndexedDB unavailable: session-only.
- High card count: limit to 8-12 for performance.
- XR session end: revert to 2D pointer mode.

Void is now Verse everywhere.
