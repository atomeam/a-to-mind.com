# F816 - WebGPU Particle Swarm Online-MLP Mind with Embodied DOM Portals

## Concept
A local online-learning Multi-Layer Perceptron (MLP) mind that continuously adapts its weights via a lightweight policy-gradient style update from user reward signals. The MLP takes as input a short history of pointer velocity + DeviceMotion acceleration (or proxy) and outputs force vectors and emission parameters for a WebGPU compute particle swarm. The particles form emergent clusters whose centroids and densities drive the 3D CSS transforms, scale, and color of floating DOM "thought portals". Clicking a portal injects a positive reward that updates the MLP online; dragging portals injects mass/force back into the swarm. Seal persists the MLP weights to IndexedDB and broadcasts via BroadcastChannel.

## Novelty
Departs from prior evolutionary strategies, Kalman filters, NCA, reaction-diffusion, SPH, lattice-gas, Hopfield, GNN, and pure attention fields. Core novel combination is an *online-learning* (not batch evo or fixed) local MLP policy driving a WebGPU particle substrate, with true bidirectional embodiment where particle statistics physically morph DOM portals and portal interactions provide both force injection and reward for immediate weight updates. First online policy-gradient style local mind on The Verse particle substrate. Not continuum PDE, not discrete CA, not spectral, not sealed-genome-only.

## Architecture
- Single index.html (progressive enhancement; Canvas2D fallback if no WebGPU)
- Local MLP: 8-12-4 architecture, pure JS, weights updated every ~2s or on reward with small learning rate + eligibility traces proxy
- Inputs: pointer velocity (last 4 frames), DeviceMotion total acceleration or pointer speed proxy, portal proximity
- WebGPU: compute shader updates 1024 particles (position, velocity), render as points
- 5 absolute-positioned DOM portals: follow particle cluster centroids (lerp), color from local density, draggable to inject force
- Reward: click portal → positive reward proportional to current density, triggers MLP update toward that action
- Persistence: IndexedDB `verse-f816-mlp-weights`; BroadcastChannel `f816-weights`
- Seal: stores weights + fitness, broadcasts; incoming higher-fitness replaces with light mutation

## Expected outcome
Open page: particles swarm under MLP control. Move pointer or tilt device to influence. Portals drift toward clusters and change appearance. Click portals to reward and see immediate behavioral shift. Drag portals to stir the swarm. Seal to persist and transfer across tabs. Works offline after load; graceful no-WebGPU / no-motion fallbacks.

## Mechanics
1. Initialize random MLP weights.
2. Each frame: sample inputs → MLP forward → set particle forces/emission → WebGPU dispatch compute → render.
3. Cluster analysis (simple spatial bins or mean) → update portal transforms.
4. On portal click: compute reward, perform online update (gradient estimate via finite difference or direct reward-weighted).
5. Seal button: IndexedDB put + BroadcastChannel postMessage.

## Failure modes
No WebGPU: Canvas2D particle fallback. No DeviceMotion: pointer-only. IndexedDB blocked: in-memory. High particle count lag: reduce to 512.

## Building blocks
Reusable online-MLP policy controller, WebGPU particle force substrate, bidirectional particle-DOM embodiment, reward-gated weight transfer. Enables future multi-agent online learners, WebXR hand-reward, or larger local nets.

Void is now Verse everywhere.
