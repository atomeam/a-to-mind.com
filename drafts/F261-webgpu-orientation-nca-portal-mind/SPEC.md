# F261: WebGPU Orientation-Causal Neural Cellular Automaton Portal Mind

## Concept
Novel combination: A WebGPU compute-driven Neural Cellular Automaton (NCA) lattice whose local rules are causally biased by DeviceOrientation (or pointer fallback). Reduced lattice statistics (density, entropy proxy, activity clusters) drive the physical morphing of DOM "portal" elements (clip-path, filter, scale) that act as interactive spatial UI. The current NCA rule genome can be sealed (SHA-256) to IndexedDB for persistence and later re-injection. Pure local, no external models, no network after load.

This expands the Void canvas with a living spatial field whose "thought" (lattice evolution) physically opens and reshapes interface portals, while orientation injects real-world causal force into the simulation.

## Why this branch
F260 used pure-JS RNNs on physical DOM cards with orientation. Prior NCA drafts (F043, F045, etc.) lacked orientation-causal injection combined with morphing portal UI and sealed genome. This deliberately combines GPU NCA + orientation bias + DOM portal morph + seal without residual attention lattices or softbody physics.

## Architecture
- Single self-contained index.html.
- WebGPU compute shader (WGSL) updates NCA grid (64x64 for reliability).
- JS reads back a reduced buffer (mean density, max activity) each frame.
- Portals: 4 absolute-positioned divs whose CSS clip-path / filter / opacity respond to stats.
- Orientation event (or pointer move) writes seed activations and rule bias into the GPU buffer.
- Seal button hashes the current rule parameters + timestamp, stores in IndexedDB.
- Canvas2D particle fallback if WebGPU unavailable.

## Expected outcome
Runnable prototype: tilt device or move pointer → NCA lattice reacts → portals morph (open, change shape, glow). Seal captures the moment. Offline-capable.

## Mechanics
- Pointer/tilt injects high-activation cells and modulates growth/decay rates.
- High density → portals expand and increase blur/saturation.
- Low entropy (ordered) → portals stabilize; high → jitter/clip.
- Click portal to focus seed at that region.
- Seal / Load Sealed buttons.

## Failure modes
- No WebGPU → Canvas2D fallback with simplified cellular rules.
- No DeviceOrientation → pointer only.
- IndexedDB blocked → in-memory only.
- High resolution on weak GPU → throttle to 32x32.

## Building blocks for next
Orientation-causal NCA kernels, reduced-stat portal morph controllers, sealed NCA genome persistence. Next: WebXR plane anchoring of portals, or multi-tab BroadcastChannel genome transfer.
