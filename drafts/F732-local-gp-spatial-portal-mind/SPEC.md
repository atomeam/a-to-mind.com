# F732 Local Gaussian Process Spatial Portal Mind

## Concept
A Canvas2D particle field whose attraction strength is driven by a local online Gaussian-process proxy (linear feature kernel regression) trained on pointer clicks as positive rewards. High predicted density regions spawn draggable DOM portals that inject corrective rewards when dragged. Champion weights sealed to localStorage. Extends Verse Brain self-region / imagination by adding a non-parametric local regression mind controlling spatial portals, distinct from prior MLP, reservoir, k-NN, NCA, or expression-tree substrates.

## Architecture
- Main thread Canvas2D particles (N=120) with mouse-attract force scaled by GP prediction.
- Local GP: 8 linear features (pos, time harmonics, bias) with online gradient update on reward clicks.
- Hybrid DOM portals (up to 6) spawned in high-pred regions; drag reseeds reward.
- Seal stores weights to localStorage.
- Progressive, fully offline, single-file.

## Expected outcome
Interactive spatial canvas. Pointer motion and clicks train the local regressor which organizes particles into denser clusters; portals materialize and can be dragged to reshape the mind. Seal persists across reloads. Status reports residual.

## Mechanics
Feature extraction from pointer → weighted sum prediction → attract force + spawn probability; online update gpWeights += lr * err * features; portals lerp scale with prediction.

## Failure modes
localStorage denied → memory only; high N FPS drop (capped); no clicks → weak attraction.

## Novelty
Leaves recent clusters of device-motion LDS wave membranes (F0494), WebGPU echo-state portals (F0493), orientation k-NN SVG morphs (F0492), WebRTC causal portal swarms (F0491), Physarum policy portals (F0490), and prior neural/NCA/softbody substrates. Core novel combination is a non-parametric local Gaussian process proxy (kernel regression on explicit features, not neural weights, not instance k-NN store) as the sealed mind controlling particle attraction and DOM portal embodiment, with click-reward online updates. Not previously built.

## Files
drafts/F732-local-gp-spatial-portal-mind/SPEC.md
drafts/F732-local-gp-spatial-portal-mind/index.html
