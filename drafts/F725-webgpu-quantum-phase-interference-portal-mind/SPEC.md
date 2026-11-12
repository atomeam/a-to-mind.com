# F725 – WebGPU Quantum Phase Interference Portal Mind

## Concept
A novel discrete quantum-walk / phase-interference lattice computed on WebGPU. User pointer gestures inject localized phase shifts that propagate and interfere across the lattice. Constructive interference peaks spawn or attract floating DOM "portal" anchors whose labels encode the dominant local phase mode. The sealed genome is the learned potential landscape (or initial phase seed) persisted via IndexedDB and transferable over BroadcastChannel. Completely offline after first load. Canvas2D fallback if WebGPU unavailable.

This is not a continuous fluid/NCA/wave field, not a particle swarm, not an MLP/RNN policy, not a spectral Fourier portal, not a Markov gesture SDF, not a Hopfield or Hebbian kernel, and not a WebXR hand lattice. Core novelty is phase-coherent interference driving emergent portal placement with a sealed potential genome.

## Architecture
- Single self-contained `index.html`.
- Lattice: 128×128 complex amplitudes (or simplified amplitude+phase).
- WebGPU compute shader (or JS fallback loop): each step applies a local phase rotation + neighbor averaging with a potential map that can be edited by the user.
- Pointer: injects a phase kick and small amplitude boost at the nearest cell.
- Visualization: density `|\u03c8|²` rendered as a color field (WebGPU render pass or Canvas2D ImageData).
- Portals: 4–8 absolute-positioned DOM divs that migrate toward the current top-N density peaks and display a short label derived from the local phase angle (e.g. “mode π/4”).
- Persistence: IndexedDB key `verse-f725-phase-genome` stores the potential texture + fitness. BroadcastChannel `f725-genome` for multi-tab adoption of lower-entropy genomes.
- Controls: Seal Genome, Reset Lattice, Clear Potential, Toggle Barriers (click to paint absorbing walls).

## Mechanics
1. Initialize random phases or a uniform ground state; potential starts flat.
2. On pointermove: compute velocity → inject phase delta proportional to speed and direction.
3. Each frame (or every N ms): run one interference step, extract density, sort peaks, lerp portal positions toward peaks, update labels from phase.
4. Seal: serialize potential (and optional phase snapshot) + entropy metric to IndexedDB and broadcast.
5. Incoming genomes with higher coherence (lower entropy or user-clicked reward) replace the local one.

## Expected outcome
Open the page. Drag the pointer: ripples of phase interference appear, bright constructive peaks form, and DOM portals glide to those peaks while their text updates with the local phase mode. Click to paint barriers that reshape the interference. Seal and open a second tab to transfer the learned potential. Works without WebGPU via Canvas2D simulation. Fully offline.

## Failure modes
- No WebGPU: automatic Canvas2D fallback (slower but functional).
- IndexedDB quota or blocked: session-only memory.
- High-DPI / low-end GPU: reduce lattice to 64×64 automatically.
- Pointer lock or touch: velocity estimated from last positions.

## Files
- drafts/F725-webgpu-quantum-phase-interference-portal-mind/SPEC.md
- drafts/F725-webgpu-quantum-phase-interference-portal-mind/index.html

Void is now Verse everywhere.
