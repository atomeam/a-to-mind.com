# F623 Orientation-MLP Spatial Card Weaver

Plain name: Orientation-driven living card weaver
Job: Tilt your device (or move the pointer) to continuously reorganize a set of draggable memory cards. A tiny local MLP learns which arrangements you reinforce by clicking. Seal the learned weights so they persist and can migrate to other tabs.

## Concept
DeviceOrientationEvent (beta/gamma) plus a short pointer-velocity history form the causal input vector to a pure-JS 3-layer MLP (no external libraries). MLP outputs continuously drive CSS transforms (translate, scale, rotate, hue) and SVG stroke parameters for connections between absolute-positioned DOM cards. Clicking a card injects a positive reward that performs a simple Hebbian-style weight update biased toward the current orientation. A Canvas2D background visualizes residual energy / activation magnitude. Seal button hashes the weight vector (FNV-like) and stores it in IndexedDB; BroadcastChannel `f623-genome` allows higher-fitness genomes to migrate. Fully self-contained single-file HTML, offline after first load, pointer-only fallback when orientation is unavailable.

## Novelty
Leaves the dominant recent cluster of pure utility tools (bill splitters, tip calculators, GPA, packing lists, pomodoro, signature pads, sound meters — F612–F622). Core novel combination is DeviceOrientation as exclusive causal input to a local MLP that controls hybrid DOM+SVG embodiment of living cards under reward-gated Hebbian update and sealed multi-tab genome transfer. Not continuous PDE/NCA/SPH/LBM/particle kernels, not attention matrices, not residual velocity predictors, not softbody springs, not WebXR primary, not Paint Worklets.

## Architecture
- Single `index.html`.
- 6–8 absolute DOM cards (content editable on double-click).
- SVG overlay for dynamic connection lines whose opacity/width track MLP activations.
- Canvas2D residual field.
- IndexedDB key `verse-f623`.
- BroadcastChannel for sealed transfer.
- Status chrome: orientation readout, fitness, Seal / Restore / Reset buttons.

## Interaction
1. Grant orientation permission (or use pointer motion).
2. Drag cards; their positions bias the fitness landscape.
3. Click a card to reward the current arrangement.
4. Seal to persist weights; open another tab to observe migration.
5. Cards remain editable; layout yields to the learned controller.

## Failure modes
- Orientation permission denied → pointer-velocity proxy.
- No IndexedDB → in-memory only.
- BroadcastChannel blocked → local seal only.
- High residual can temporarily pin cards via user drag.

## Files
drafts/F623-orientation-mlp-spatial-card-weaver/SPEC.md
drafts/F623-orientation-mlp-spatial-card-weaver/index.html
