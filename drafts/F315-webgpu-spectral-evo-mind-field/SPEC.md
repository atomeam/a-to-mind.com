# F315 — WebGPU Spectral Evolutionary Mind Field

**Ledger ID**: F-315 (frontier series)

## Concept
A spatial spectral mind field where a WebGPU compute shader maintains a grid of multi-frequency oscillators (wave interference). Pointer movement and optional DeviceOrientation inject frequency seeds and phase offsets. A local Web Worker runs a lightweight evolutionary algorithm that mutates and selects spectral filter parameters (frequency weights, damping) based on field entropy and spatial clustering fitness. High-activity regions dynamically spawn and morph floating CSS 3D mind-nodes (scale, hue, rotation respond to local spectral density). Nodes can be clicked to seal a spectral snapshot to localStorage. Pure offline single-file with Canvas2D fallback.

## Novel combination / Branching
Deliberately leaves recent clusters of particle swarms (F314 multi-MLP), causal motion RNN hybrid DOM sculptors (F313), NCA spatial memory, attention-wave sonifiers, particle-life DOM, and pure physics kernels.

Moves onto:
- **Spectral / multi-frequency oscillator field** as the core compute substrate (wave interference, not particles or NCA cells)
- Local evolutionary algorithm in Worker selecting spectral parameters (not forward MLP/RNN or Hebbian residual)
- Emergent activity spawning morphing CSS 3D mind-nodes (spatial UI physical response to spectral peaks)
- Pointer + orientation as frequency injectors
- Spectral snapshot sealing to localStorage

Not a variation of F314 (swarm particles), F313 (RNN motion particles), F021 (density worker + particle field), or prior spectral resonance attempts if any.

## Architecture
- Single `index.html`.
- WebGPU compute: 128×128 grid of complex oscillators or phase/amplitude pairs; inject from pointer/orient; evolve with selected filters.
- Worker: population of 8 parameter sets (freq weights, damp); fitness from sampled entropy + cluster count; tournament select + mutate.
- Main: render field to canvas (or fallback 2D); every ~20 frames sample peaks to create/update up to 6 floating nodes.
- Seal: click node → hash of local spectrum slice → localStorage.
- Fallback: Canvas2D wave approximation if no WebGPU.

## Expected outcome
Field develops evolving interference patterns driven by user spatial input and local evolution. Bright clusters spawn glowing mind-nodes that morph in 3D space. User can tilt or drag to seed frequencies; best spectral params persist across generations. Runnable offline.

## Failure modes
- No WebGPU → Canvas2D spectral fallback, nodes still morph from CPU sim.
- Orientation denied → pointer-only seeding.
- localStorage blocked → in-memory seals only.
- Low-end GPU → reduce grid to 64×64.

## Building blocks for next
Spectral compute kernel + worker evolutionary filter selection + activity-driven morphing spatial nodes. Next: WebXR hand as multi-point frequency injectors, GPU-side evolution of spectral kernels, multi-field resonance coupling.

## V01D landing
Skill under `void-live-deploy/skills/mini/webgpu-spectral-evo-mind/`; testable by field responding to pointer/orientation, nodes morphing with activity, evolution improving entropy over time, seal/load of spectral snapshots.
