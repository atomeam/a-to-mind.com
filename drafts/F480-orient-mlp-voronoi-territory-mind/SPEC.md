# F480 Orient-MLP Voronoi Territory Mind

## Concept
DeviceOrientation (beta/gamma/alpha) is causal input to a local tiny MLP (3→4→2) that biases agent velocities. Agents compete for territorial ownership via an inverse-square influence field rendered as a coarse Voronoi-like grid on canvas. Fitness = owned area fraction. When the fitness gap between leader and weakest exceeds a threshold, a sealed genome transfer occurs: the leader's MLP weights are mutated and assigned to the weak agent. Genomes and positions persist offline via IndexedDB seal/restore. Desktop fallback uses pointer position as tilt proxy. Nucleate by click, drag agents, add/seal/restore controls.

## Branch
Deliberately leaves the recent cluster of residual crystal lattices, speech-vector recall, WebXR gaze Hebbian portals, mic-spectral policy morphs, acoustic NCA weavers, SDF recurrent reasoners, and pure orientation-MLP genome auctions. Novel combination: orientation-driven local MLP + territorial Voronoi influence competition + sealed genome transfer under area fitness, persisted in IndexedDB. No attention lattices, pure NCA, spectral residuals, pointer-history fields, softbody DOM, or k-means.

## Novel building blocks
- Local tiny MLP as causal controller of territorial claim bias from DeviceOrientation.
- Inverse-square influence field producing dynamic ownership grid (Voronoi-like without full geometry).
- Fitness-gated sealed genome transfer (mutate-and-replace) between competing agents.
- Hybrid pointer/orientation input with offline IndexedDB genome persistence.

## Failure modes
- DeviceOrientation permission denied or unavailable (falls back to pointer proxy and synthetic jitter).
- Too many agents (>12) degrades ownership loop performance on low-end devices.
- Genome transfer can collapse diversity if leader dominates too strongly (mutation rate mitigates).
- IndexedDB quota or private mode may silently fail seal.

## Interactivity
Tilt (after permission) or move pointer to bias all agents via their individual MLPs. Click empty space to nucleate a new agent with fresh MLP. Drag existing agents. Leader steals/mutates genome into weakest when area gap is large. Seal stores all genomes; Restore reloads them. Offline-capable after first load.
