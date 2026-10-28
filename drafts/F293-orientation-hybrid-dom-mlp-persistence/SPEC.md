# F293-orientation-hybrid-dom-mlp-persistence

## Concept
Hybrid DOM + canvas embodiment controlled by DeviceOrientation as the primary causal input. A local tiny MLP (JS sigmoid single-layer) online-learns a global "stickiness" parameter from tilt angles and observed tile stability, applying it to simple particle-like physics of DOM tiles. Canvas provides a responsive background field. State (weights + positions) persists via IndexedDB for offline continuity.

Branched away from recent multi-agent WebGPU/WebXR genome arenas, reservoir/spectral/foraging clusters, residual predictors, and pure NCA. Focuses on under-explored hybrid DOM+canvas + local tiny model + DeviceOrientation causal + IndexedDB persistence.

## Architecture
- Single index.html, no external deps.
- DeviceOrientation (with permission request) or mouse-drag simulation.
- 8 DOM tiles with velocity/damping physics influenced by tilt "gravity".
- Tiny MLP: 3 inputs → sigmoid output; online GD update targeting higher stickiness under instability.
- Canvas linear-gradient background reacting to orientation.
- IndexedDB for restore/save of weights and tile positions.
- Offline capable; works without network.

## Failure modes
- Orientation permission denied → mouse simulation fallback.
- No IndexedDB → in-memory only.
- High tilt → tiles bounce at edges.

## Mechanics
Tilt device (or drag mouse) to apply gravity. MLP adapts stickiness over time. Reset button clears learned weights. Status shows live params.
