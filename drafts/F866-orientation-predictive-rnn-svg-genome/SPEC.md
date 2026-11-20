# F866 Orientation Predictive RNN SVG Genome Mind

## Concept
A local tiny Elman RNN (pure JS) takes DeviceOrientation history as causal input and predicts the next orientation delta. The prediction residual (error) drives the morphing of generative SVG paths (living "thought ribbons") on the page. Multiple competing agents (each a DOM-bound SVG group) evolve their RNN weights via simple Hebbian/reward updates based on residual minimization and user click rewards. Sealed genome (weights) transfer via BroadcastChannel + IndexedDB persistence for cross-tab/session sharing. Hybrid embodiment: the local model directly controls physical UI SVG elements.

## Novelty
Leaves the recent cluster of WebGPU physics kernels (LBM, Gray-Scott, percolation, softbody, SPH, NCA), residual predictors on motion fields, attention lattices, volumetric injection, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN on substrate simulations, and k-means particles. Core novel combination is DeviceOrientation as causal input to a predictive Elman RNN (not policy MLP or reservoir) whose residual directly sculpts generative SVG geometry (not canvas kernel, not DOM cards as passive portals), under multi-agent fitness competition with sealed weight-genome transfer over IndexedDB + BroadcastChannel in a hybrid predictive-generative embodiment not previously built.

## Files
- drafts/F866-orientation-predictive-rnn-svg-genome/SPEC.md
- drafts/F866-orientation-predictive-rnn-svg-genome/index.html

## Failure modes
- DeviceOrientation requires secure context / permission on some devices; falls back to mouse/pointer velocity as surrogate input.
- No WebGPU dependency for broader compatibility.
- BroadcastChannel limited to same-origin tabs.
