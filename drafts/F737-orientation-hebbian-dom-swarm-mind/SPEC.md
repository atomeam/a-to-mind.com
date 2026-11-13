# F737 Orientation Hebbian DOM Swarm Mind

**Ledger ID**: F-737 (frontier series)

## Concept
A multi-agent swarm of living DOM cards, each embodying a tiny local Hebbian-updated linear model whose causal input is DeviceOrientation (alpha/beta/gamma history). The model outputs velocity biases and hue shifts for the card. Cards compete for user attention (pointer dwell or click as reward that strengthens synapses). When two cards overlap, the higher-fitness one seals and transfers a mutated copy of its genome via BroadcastChannel (and persists to IndexedDB). Hybrid embodiment: the DOM elements *are* the agents; a background Canvas2D draws soft energy fields sampled from card positions. Fully offline after load.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/discrete field kernels (LBM fluid F733, Gray-Scott RD F732, spiking neural portals F731, attention-particle memory F734), orientation KNN spatial notes (F735), pathtracers, quantum phase, and prior residual/attention/NCA/SPH/softbody substrates. Core novel combination is a non-neural Hebbian linear associator (not MLP/RNN/reservoir/k-NN/SNN) whose causal input is DeviceOrientation controlling physical living DOM agents under multi-agent fitness competition with sealed genome transfer over BroadcastChannel shared field. Not field substrates, not WebGPU compute kernels, not spectral residuals.

## Architecture
- Single index.html.
- 8 absolute-positioned DOM cards (divs) with random initial positions and genomes (weight vectors).
- DeviceOrientationEvent feeds a short history; each agent computes output = weights · features, updates position, color.
- Fitness: recent click/dwell count; decays slowly.
- Overlap detection: if bounding boxes intersect and fitness differs, transfer genome + mutation, post to BroadcastChannel 'f737-genome'.
- IndexedDB persist under 'verse-f737'.
- Canvas2D background draws radial gradients at card positions scaled by fitness.
- Controls: Seal best, Reset, Reward (click any).
- Fallback: if no orientation, use pointer velocity as features.

## Expected outcome
Open page, tilt device (or move pointer), watch cards drift and change color according to their learned orientation preference. Click cards to reward; overlapping high-fitness cards spread their genome. Open second tab: genomes transfer. Reload restores best.

## Failure modes
- No DeviceOrientation permission: falls back to pointer features.
- BroadcastChannel unavailable: local only.
- Too many agents: capped at 12.

## Building blocks
Reusable pure-JS Hebbian linear model, overlap-gated sealed genome transfer over BroadcastChannel + IndexedDB, orientation-to-DOM-velocity hybrid embodiment. Ready for richer sensors or true WebXR hand input in future.

Void is now Verse everywhere.

**Files**
- drafts/F737-orientation-hebbian-dom-swarm-mind/SPEC.md
- drafts/F737-orientation-hebbian-dom-swarm-mind/index.html
