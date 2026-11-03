# F518 BroadcastChannel Sealed Genome Competition Mind

## Concept
DeviceOrientation (or pointer velocity fallback) drives a population of local tiny MLPs that control a Canvas2D particle field (each agent owns a subset of particles). Living DOM cards are the agents themselves; their CSS transforms and glow track their particle swarm’s centroid and kinetic energy. Multi-agent competition uses a previously unused architecture: sealed genomes (MLP weights + fitness) are transferred via BroadcastChannel (same-origin multi-tab or self-message) when a high-fitness agent “broadcasts” on proximity or button; receivers mutate and adopt. Full state seals to IndexedDB. Fully offline after load; BroadcastChannel works without network.

## Novelty
Leaves the recent cluster of quantum-walk observers (F510), memory-palace evolutionary (F511), Lorentz magnetic (F511), entangled-pair portals (F512), MLP voter models (F513), acoustic-swarm consonance (F514), MLP auction DOM (F515), WebMIDI local RNN (F516), and Gray-Scott mic-spectral garden (F517). Core novel combination is DeviceOrientation as causal input to competing local MLPs controlling particle swarms embodied as physical DOM cards, with sealed genome transfer over BroadcastChannel (new shared-field architecture, not proximity-only collision or IndexedDB-only). Not RD/Gray-Scott, not quantum/magnetic, not auction/voter, not acoustic residual, not softbody/waveguide, not pure NCA.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Input: DeviceOrientation → pointer velocity as drive to agent MLPs
- Policy: 4 tiny MLPs (4→6→2); outputs particle force bias
- Field: 80 particles assigned to agents; Canvas2D
- Embodiment: 4 DOM cards; position from swarm centroid, scale/hue from fitness
- Transfer: high fitness agent posts sealed genome to BroadcastChannel; others listen, mutate, adopt if weaker
- IndexedDB: seal/restore weights, particle assignments, fitness
- CSS custom properties from global energy for chrome morph
- No external dependencies

## Expected Outcome
Tilt device or move pointer: agents drive their particles, cards drift and glow with fitness. High-fitness agents broadcast genomes; others adopt mutated versions, improving the population. Seal restores. Works offline across tabs via BroadcastChannel; graceful pointer-only.

## Failure Modes
- DeviceOrientation denied → pointer only.
- BroadcastChannel unavailable (rare) → local-only transfer.
- IndexedDB private mode.
- High particle count jank.

## Interactivity
Tilt device or move pointer to drive agents. Cards morph with swarm energy. Click a card to force broadcast its genome. S to seal, R to restore. Open a second tab to observe cross-tab transfer.

## Building Blocks
WebRTC data-channel upgrade for true multi-user, OPFS history, WebXR hand as additional drive, larger populations.

## V01D Landing
skills/mini/broadcast-genome-competition; testable via orientation → particle motion + card glow, broadcast → genome adopt in listener, seal → IDB restore.

## Files
drafts/F518-broadcast-channel-genome-competition-mind/SPEC.md
drafts/F518-broadcast-channel-genome-competition-mind/index.html
