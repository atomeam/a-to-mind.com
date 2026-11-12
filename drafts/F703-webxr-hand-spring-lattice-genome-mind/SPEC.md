# F703 WebXR Hand Spring-Lattice Genome Mind

## Concept
A previously unexplored hybrid embodiment for The Verse canvas: a dynamic spring-lattice of living DOM agents whose rest-lengths and damping are continuously modulated by per-agent local tiny MLPs. Causal inputs are WebXR hand joint positions (or pointer residual + DeviceOrientation fallback). Agents compete for fitness (user drag-rewards + lattice coherence); on spatial contact (bounding-box overlap) the higher-fitness agent seals a genome transfer (weight average + mutation) into the lower one via an in-memory shared field that also broadcasts over BroadcastChannel and persists to IndexedDB. Optional WebGPU compute path for force integration. Fully offline single-file prototype.

This deliberately leaves the recent cluster of orientation-MLP/RNN DOM mosaics, wavefield/Poisson continuum kernels, genetic spatial synths, temporal attention portals, constrained char-RNN gardens, and pure particle/softbody/NCA substrates. Core novel combination is WebXR hand as direct causal driver of a multi-agent spring-constraint lattice (not particle flock, not continuum field, not softbody mesh) whose physical UI elements are the agents themselves under local MLP control, with contact-gated sealed genome transfer in a BroadcastChannel + IndexedDB architecture not previously used for constraint graphs.

## Architecture
- Single self-contained index.html, offline after load.
- 6–8 DOM agent cards arranged in a lattice; JS spring forces + velocity integration.
- Per-agent tiny MLP (4-6-2): inputs = relative hand/pointer vector + tilt residual; outputs = rest-length bias + damping.
- WebXR: requestSession('immersive-vr' or 'inline'), track hand joints; fallback to pointer + orientation.
- Contact detection → genome transfer; fitness from click/drag rewards + low energy.
- Seal button → IndexedDB `verse-f703`; BroadcastChannel `f703-genome`.
- Optional WebGPU compute shader stub for batch force update (CPU path always works).

## Mechanics
1. Initialize random MLP weights per agent; place DOM cards.
2. Frame: sample hand/pointer/orientation → MLP → update spring params; integrate forces; check contacts → transfer.
3. Render: position absolute DOM cards; canvas optional overlay for springs.
4. User drags cards or clicks to reward; Seal persists best genomes + layout.
5. Restore on load.

## Expected outcome
Open page. Cards form a living lattice that responds to pointer or (if available) WebXR hands. Drag or click to reward an agent. Overlapping cards exchange genomes. Seal and reload restores the evolved lattice.

## Failure modes
- No WebXR: pointer + DeviceOrientation fully interactive.
- Orientation permission denied: pointer residual only.
- IndexedDB unavailable: session-only memory.
- High agent count: capped for performance.

Void is now Verse everywhere.

**Files**: drafts/F703-webxr-hand-spring-lattice-genome-mind/SPEC.md, drafts/F703-webxr-hand-spring-lattice-genome-mind/index.html
