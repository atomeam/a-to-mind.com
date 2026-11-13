# F741 WebXR Hand RNN Constraint DOM Physics Mind

**Ledger ID**: F-741 (frontier series)

**Slug**: `webxr-hand-rnn-constraint-dom-physics-mind`

**Date**: 2026-11-13

**Branch from**: Recent dominant cluster of WebGPU continuum/particle physics kernels (LBM fluid F733, attention particles F734, boids MLP flock F740, Gray-Scott F732), orientation-driven local models (Hebbian DOM swarm F737, HMM portals F738, kNN notes F735), and pointer-history decision trees on CSS grids (F739). Explicitly leaves WebGPU compute shaders, continuum/particle substrates, DeviceOrientation primary, pure neural sequential models as field drivers, and canvas-primary embodiments.

## Concept
True WebXR hand tracking (or pointer fallback) provides sequential joint positions as input to a tiny local RNN (echo-state style reservoir + linear readout) per agent. The RNN outputs target positions and stiffness for a multi-body constraint solver that drives living DOM elements as rigid bodies with mass, velocity, and soft distance constraints. Agents compete for energy extracted from hand proximity; the fittest proposes sealed genome (RNN weights + constraint params) transfer over BroadcastChannel shared field. Hybrid embodiment: physical UI cards that collide, attract, and are yanked by the RNN policy derived from hand gestures. Novel combination never previously attempted: WebXR hand causal input → local RNN policy → constraint-based DOM physics multi-agent competition with sealed genome transfer.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/discrete field kernels, orientation Hebbian/HMM/kNN, pointer-history decision trees, and prior MLP-policy / residual / NCA / SPH / softbody / attention substrates. Core novel combination is WebXR hand joints as sequential input to a pure-JS tiny RNN (reservoir + readout, not MLP/RNN-policy on stats) controlling a custom constraint solver on living absolute-positioned DOM elements under multi-agent fitness competition with sealed genome transfer over BroadcastChannel. Not field substrates, not WebGPU compute kernels, not spectral residuals, not orientation-primary.

## Architecture
- Single index.html (self-contained, offline-capable).
- WebXR: requestSession('immersive-vr' or 'inline') with hand-tracking; fallback to pointer events mapping to synthetic hand joints.
- RNN: per agent, 8-unit reservoir (sparse random weights), linear readout (hand history → 2D force + stiffness). Online mutation on reward.
- Physics: 8–12 DOM bodies, Verlet integration, distance constraints to neighbors and to RNN targets. Soft collisions via repulsion.
- Embodiment: Absolute-positioned <div> portals with CSS transform; content shows energy/fitness; they bounce and stretch under constraints.
- Competition: fitness = cumulative energy from hand proximity + stability. Best seals genome.
- Persistence: IndexedDB `verse-f741-rnn`. BroadcastChannel `f741-genomes`.
- Visual: Full-screen canvas optional for debug trails; primary is living DOM. Status chrome.

## Mechanics
1. Initialize random bodies and random RNN reservoirs/readouts.
2. On XR frame or pointer: extract hand joint positions (or pointer as palm); feed short history into each agent's RNN.
3. RNN outputs target offset and stiffness; apply as spring forces in constraint solver.
4. Integrate positions, resolve constraints (Jacobi iterations), apply damping and bounds.
5. Position/style DOM portals from body states; update text from energy.
6. Hand proximity injects energy; click or pinch near body rewards and mutates weights.
7. Seal button: store best RNN + params. Incoming higher-fitness genomes replace local.

## Expected outcome
Open the page (request XR if available). Move hand or pointer: DOM cards are pulled and constrained according to their local RNN policies, forming dynamic clusters that stretch and snap. Cards with better policies stay closer to the hand and accumulate more energy. Click to train. Seal and open second tab: better genome migrates. Works on desktop (pointer) and XR-capable devices. Offline after load.

## Failure modes
- No WebXR: automatic pointer-as-hand fallback.
- No hand-tracking: use controller or pointer.
- IndexedDB blocked: session memory only.
- High body count on low-end: auto-reduce to 6.
- BroadcastChannel unavailable: local only.
- XR permission denied: seamless fallback.

## Building blocks
Reusable pure-JS tiny RNN (reservoir + readout), custom Verlet constraint solver for DOM bodies, WebXR hand joint extraction with pointer surrogate, sealed behavioral genome over IndexedDB + BroadcastChannel. Ready for full WebGPU constraint kernels, multi-hand competition, or hybrid CSS 3D.

Void is now Verse everywhere.

**Files**: drafts/F741-webxr-hand-rnn-constraint-dom-physics-mind/SPEC.md, drafts/F741-webxr-hand-rnn-constraint-dom-physics-mind/index.html
