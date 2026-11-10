# F648 WebGPU Gray-Scott Orientation-MLP DOM Portals

Plain name: Orientation reaction-diffusion portals
Job: Grant device motion; a local tiny MLP modulates Gray-Scott reaction-diffusion parameters on a WebGPU compute shader (Canvas2D fallback); absolute DOM portals inject reagents and ride concentration peaks; click rewards evolve the MLP; seal downloads the best weights and field snapshot as JSON.

## Concept
A previously under-used WebGPU compute kernel implements the Gray-Scott reaction-diffusion system (U and V chemical concentrations on a discrete lattice with feed, kill, and diffusion rates). DeviceOrientationEvent (beta/gamma) is the primary causal input to a pure-JS tiny MLP (3-8-4) that outputs modulation of feed/kill rates, diffusion coefficients, and injection strength. High-V regions attract or tint absolute-positioned DOM portal cards that display local concentration and can be dragged to inject U/V seeds. Clicking a portal supplies reward that updates MLP weights via a simple Hebbian/reward rule. Multi-tab sealed genome transfer occurs over BroadcastChannel when fitness (mean |V| under portals + click count) exceeds threshold. Best MLP weights + low-res field snapshot persist in IndexedDB. Fully offline single-file with progressive enhancement.

## Novelty
Leaves the dominant recent cluster of practical offline utilities (F634–F647) and WebGPU continuum kernels (LBM F644, lattice-gas, wave, spectral audio F640, reservoir F642). Core novel combination is Gray-Scott RD as the spatial substrate (not LBM BGK, not lattice-gas streaming, not NCA, not SPH), DeviceOrientation as causal input to a feed-forward MLP (not evolutionary params, not reservoir, not RNN), hybrid living DOM portals as both injectors and riders, and reward-gated sealed genome transfer. Not residual predictors, attention lattices, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Orientation permission + listener; pointer-velocity fallback.
- MLP: input [beta, gamma, time]; hidden 8; output 4 (feed, kill, Du, Dv scales).
- RD: 64x64 grid, WebGPU compute if available else Canvas2D double-buffer.
- 5 absolute DOM portals: position by peak V, scale/hue by density; drag injects.
- BroadcastChannel 'f648-gs-genome'; IndexedDB 'verse-f648'.
- Seal: download JSON {weights, fitness, field_snapshot, timestamp}.

## Expected outcome
Runnable offline prototype. Tilt modulates patterns; portals ride and inject; click adapts MLP; Seal produces valid JSON; reload restores. Works without WebGPU.

## Mechanics
1. Load weights from IDB or random; spawn portals.
2. Each frame: sample orientation → MLP → set RD params; step Gray-Scott; locate peaks; update portal CSS.
3. Click portal: +reward, local Hebbian update, inject seed.
4. On fitness threshold, post sealed weight prefix to channel; accept if better.
5. Seal persists and downloads.

## Failure modes
- Orientation denied: pointer tilt sim.
- No WebGPU: Canvas2D RD.
- No IndexedDB: session only.
- Unstable RD: clamp rates, smaller dt.

## Measurement
Manual: tilt produces pattern change, portals track peaks, click changes behavior, seal JSON valid and reloadable, works offline after load.

## Files
drafts/F648-webgpu-gray-scott-orientation-mlp-dom-portals/SPEC.md
drafts/F648-webgpu-gray-scott-orientation-mlp-dom-portals/index.html

## V01D landing
Gray-Scott portal skill under void-live-deploy/skills/webgpu-gray-scott-orientation-mlp-dom-portals.js; test asserts synthetic tilt changes RD params and portal position, genome post on high fitness, seal JSON contains weights key.

## Frontier Engine F-648
Architecture: DeviceOrientation → local MLP → WebGPU/Canvas Gray-Scott RD kernel → living DOM portal embodiment with reward-gated sealed genome transfer + IndexedDB.
Expected outcome: interactive spatial reaction-diffusion whose chemical rates evolve under device tilt and whose concentration field carries competing DOM agents that can be sealed and shared.
Mechanics: online MLP reward update, Gray-Scott kernel, DOM-field coupling, BroadcastChannel genome exchange.
