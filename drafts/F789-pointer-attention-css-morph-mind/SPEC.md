# F789 Pointer-History Causal Attention CSS Morph Mind

## Concept
A local pure-JS multi-head attention mechanism processes a rolling buffer of recent pointer events (position, velocity, buttons, timestamp deltas) as tokens. The attention outputs drive continuous morphing of living DOM "thought" portals (transform, scale, hue, opacity, and generated text labels). A residual between predicted next pointer and actual drives the morph intensity, creating a UI that physically responds to the agent's causal reasoning about user intent. Canvas overlay visualizes attention weights. Sealed parameters persist to IndexedDB. Fully offline single-file.

## Novelty
Leaves the recent cluster of Cellular Potts Model orientation minds (F788), Kohonen/SOM topographic portals (F787), worker-isolated genomes (F786), RBF kinetic mobiles (F785), neural-ODE CSS3D crystals (F784), Bayesian CSS portals (F783), Hebbian CSS3D (F782), WebXR magnetic strings (F781), and prior decision-tree CSS grids, MLP policies, physics substrates (CPM, NCA, Lenia, softbody, LBM, SPH), residual predictors, and k-means. Core novel combination is pure multi-head attention (not decision tree, not MLP, not Hebbian, not reservoir) over raw pointer-history tokens as the local causal mind, with residual-gated physical DOM morphing as the primary embodiment and sealed attention-parameter transfer. Not previously built. No continuum or discrete physics kernel.

## Architecture
- Single index.html
- Attention: 4 heads, sequence length 16, embedding dim 8, pure JS matrix ops
- 6 living DOM portals whose CSS transforms are driven by attention outputs + residual
- Canvas2D attention heatmap
- Persistence: IndexedDB `f789-attention`
- Reward: click portal → reinforce current attention pattern
- Offline after load; graceful without sensors (pointer only)

## Expected outcome
Runnable prototype. Move the pointer: portals morph and predict motion; residual highlights uncertainty. Click to adapt. Seal persists across reloads. UI physically changes with the local agent's reasoning.

## Files
drafts/F789-pointer-attention-css-morph-mind/SPEC.md
drafts/F789-pointer-attention-css-morph-mind/index.html
