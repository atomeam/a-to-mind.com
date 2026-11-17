# F779 – WebGPU Echo State SDF Portal Mind

**Ledger ID**: F-779

**Concept**
A spatial mind on The Verse canvas where a local Echo State Network (reservoir computing) processes continuous pointer trajectories, device orientation, and click injections into a high-dimensional dynamical state. The reservoir readout controls a canvas-based Signed Distance Field / metaball visualization whose primitives morph, merge, and pulse according to the evolving internal state. Floating DOM portals are bound to the highest-activation reservoir nodes; dragging a portal injects a localized perturbation back into the reservoir. Seal button freezes and persists the readout weights + a snapshot of reservoir connectivity in localStorage as a sealed genome. Fully offline after load.

**Novelty**
Deliberately leaves the recent cluster of continuum physics kernels (SPH F777, Kuramoto F770, Biot-Savart F773, SDF sculpt F774) driven by single-layer MLPs, multi-tab genome competition via BroadcastChannel (F778), and practical utilities. Core novel combination is reservoir computing (echo state / liquid state machine — recurrent random projection with only the linear readout trained/adapted) as the local AI substrate controlling an SDF/metaball field with bidirectional DOM portal embodiment. First use of an Echo State Network for spatial interaction on The Verse; no trained recurrent weights, no pure feedforward MLP, no PDE continuum as the primary substrate.

**Architecture**
- Single self-contained index.html
- Echo State Network: reservoir size 48, spectral radius ~0.9, leak 0.3, sparse random W
- Inputs: pointer x/y (normalized), vx/vy, DeviceOrientation beta/gamma, click energy
- Linear readout (48→6) produces: 3 metaball centers (x,y), radii, and a global hue/energy
- Canvas2D metaball / soft density rendering with color from reservoir energy
- 6 absolute-positioned DOM portals bound to top-activation nodes; drag injects delta into corresponding reservoir units
- localStorage sealed genome (readout + seed)
- Optional Vibration API on high total energy

**Mechanics**
1. Reservoir updates each frame: x(t+1) = (1-leak)*x(t) + leak*tanh(W*x(t) + W_in*u(t))
2. Readout produces control signals that move and size the metaballs.
3. Portals seek the projected positions of highest |activation| nodes and inherit color/size.
4. Dragging a portal adds a strong input pulse to that node.
5. Seal slightly mutates readout and persists.

**Expected outcome**
Open page: soft metaballs drift and merge under reservoir dynamics. Move mouse or tilt phone: patterns respond with lag and memory (echo). Drag portals to sculpt local activity. Seal locks an adapted mapping. Offline capable.

**Failure modes**
No orientation permission → pointer only. localStorage blocked → memory only. Very old devices may drop frames (reduce reservoir size).

**Building blocks**
Reusable Echo State Network core (init, step, readout), reservoir-to-DOM portal binder, canvas metaball renderer driven by high-dim state.

**Files**
- drafts/F779-webgpu-echo-state-sdf-portal-mind/SPEC.md
- drafts/F779-webgpu-echo-state-sdf-portal-mind/index.html
