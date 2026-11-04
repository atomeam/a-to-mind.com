# F0491 WebRTC Causal Portal Swarm

## Concept
Living DOM portals are autonomous agents in a 2D physics swarm on the page. Each portal owns a local tiny MLP that takes a short history of DeviceOrientation deltas + local pointer velocity as causal input and outputs force gains (repulsion, attraction-to-center, damping). Portals move under simple Verlet/force integration, collide/repel, and compete for screen real estate. Fitness is inverse collision rate + coverage. High-fitness genomes seal to IndexedDB and transfer via BroadcastChannel (multi-tab shared field) or WebRTC data channels (multi-device). Receiving peers adopt the genome if fitness is higher, then mutate slightly. The Verse canvas gains a novel multi-agent competition of physical UI elements controlled by orientation-causal local models, with sealed genome transfer over a shared field architecture never previously used for this embodiment.

## Novelty
Leaves the recent cluster of Physarum trail agents (F0490), Ising/Metropolis spin domains (F0489), lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes, speech-seeded NCA, and prior orientation RNN / pointer-history / residual / attention / volumetric / pure NCA substrates. Core novel combination is multi-agent competition where the agents *are* the living DOM portals (hybrid embodiment of physical UI elements under local MLP control), driven by DeviceOrientation as causal input to a feed-forward MLP (not RNN), with sealed genome transfer over a WebRTC/BroadcastChannel shared field architecture (persistent IndexedDB + live peer exchange) in a way not previously built. Not substrate simulations on a canvas with DOM as passive portals, not softbody meshes, not NCA, not spectral residuals.

## Architecture
- Single index.html (progressive enhancement, offline-capable after load)
- 8–12 absolute-positioned DOM portals (colored cards)
- MLP per portal: 5-dim input (3 ori deltas + 2 pointer vel) → 6 hidden → 3 outputs (repelGain, centerGain, damp). Weights ~40 floats
- Physics: force integration, mutual repulsion, weak center attract, damping; collision detection
- Fitness: low collisions + high unique coverage; Seal when local fitness high
- Shared field: BroadcastChannel 'f0491-genome' for multi-tab; optional WebRTC data channel stub for multi-device (offer/answer via channel or manual)
- IndexedDB persists own best genome under `f0491-portal-swarm`
- CSS custom properties from global fitness for chrome morph
- Mouse/pointer fallback if no orientation

## Expected outcome
Runnable single-file prototype showing orientation-driven MLP portals swarming, colliding, competing; Seal persists and transfers genomes across tabs; higher fitness adopted. Works offline; graceful without WebXR/orientation.

## Mechanics
1. Init random portals + random MLPs.
2. Listen DeviceOrientation / pointer / BroadcastChannel / drag (optional).
3. Each frame: MLP forward per portal, compute forces, integrate, detect collisions, update fitness, render positions via transform.
4. High fitness enables Seal; Seal stores + broadcasts genome + fitness.
5. Incoming genome replaces if higher fitness (with mutation).

## Files
drafts/F0491-webrtc-causal-portal-swarm/SPEC.md
drafts/F0491-webrtc-causal-portal-swarm/index.html

## V01D landing
Multi-agent causal portal swarm under void-live-deploy/skills/webrtc-causal-portal-swarm.js; test asserts orientation delta → MLP → force gain change and BroadcastChannel genome adoption.
