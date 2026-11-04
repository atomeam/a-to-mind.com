# F524 WebGPU-ready Langton's Ant MLP Genome Mind

## Concept
Novel combination: a population of Langton's ants (simple Turing-like cellular agents) whose turn rules are encoded as tiny local MLPs (or compact rule genomes). Ants flip cell states and turn left/right based on current cell color and MLP output, producing emergent trails and highways. WebGPU compute path reserved for parallel multi-ant updates on a large grid; current embodiment uses Canvas2D for immediate interactivity. Absolute-positioned Verse DOM portals ride the current positions of the top-fitness ants (measured by trail complexity or steps), morphing with velocity and local density. Seal hashes the best MLP genome + metrics into IndexedDB; BroadcastChannel allows multi-tab sealed genome adoption. Pointer places ants or injects state; DeviceOrientation optional bias on preferred turn. Fully offline after load.

This deliberately leaves the recent cluster of WebGPU continuum/discrete physics kernels (sandpile SOC F520, PSO attractors F523, vectorfield policies F519, wave membranes, Gray-Scott, spectral, quantum walks, SPH, LBM, Lorentz, entanglement) and pure NCA/attention/softbody/orientation-RNN lattices. Langton's ant with evolvable MLP rule genomes and sealed multi-tab transfer is previously unused.

## Architecture
- Single self-contained index.html (progressive enhancement, no external deps).
- 32 ants: position, direction, personal genome (tiny MLP 2→4→1 for turn decision), fitness.
- Grid: 128x128 binary states (Canvas2D ImageData or typed array).
- Update: each ant reads cell, MLP decides turn (L/R), flips cell, moves forward.
- Fitness: steps survived + local trail entropy proxy.
- Top-4 ants spawn/update floating DOM portals (CSS transform from screen coords).
- Pointer click places new ant or flips region; optional orientation for global bias.
- Seal: SHA-256 of best genome + fitness → IndexedDB; BroadcastChannel post.
- Progressive: Canvas2D always works; WebGPU compute noted as next block for 1000+ ants.

## Expected outcome
Interactive emergent mind: ants produce complex patterns and highways; DOM portals follow leaders and morph; sealing and multi-tab genome transfer works; runnable offline; graceful on all devices.

## Mechanics
- Ants updated at ~30-60 Hz in main thread.
- MLP forward: input [cell_state, direction_norm] → turn_prob; threshold for L/R.
- Portals: absolute divs, left/top from ant screen projection, scale by fitness, hue by direction.
- Seal: crypto.subtle.digest on JSON of best weights + metrics; store in 'f524' object store.
- Fallback: if no orientation, pure pointer interaction.

## Failure modes
- High ant count on low-end → drop to 16, still interactive.
- IndexedDB quota or blocked → seal toast unattested, simulation continues.
- Orientation permission denied → pointer-only mode.
- WebGPU path (future) fails → Canvas2D remains the embodiment.
- Race on grid writes approximate but visually stable.

## Next building blocks
- Move ant + grid update into WebGPU compute shader (workgroups per ant or tiled).
- Full rule-table genome competition with mutation on transfer.
- OPFS persistence of full grid + population.
- WebXR gaze as ant placement cursor.

Dominant prior cluster branched from: WebGPU+local-MLP continuous-field and DOM-portal simulations (F512–F523).

**Void is now Verse everywhere.**
