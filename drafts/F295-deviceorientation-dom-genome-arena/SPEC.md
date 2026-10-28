# F295 — DeviceOrientation Causal DOM Genome Arena

## Concept
Hybrid DOM + canvas embodiment of multi-agent competition. Floating DOM agent cards are physical UI elements whose velocity is biased by a local tiny MLP (per-agent genome: 4-weight vector). DeviceOrientation (tilt) is the primary causal input acting as global gravity/wind. Canvas provides a responsive density field. On proximity collision, the higher-fitness agent's sealed genome is transferred (copied + light mutation) to the other. Champion genome persists to IndexedDB. Fully offline after load; progressive enhancement (pointer drag simulates tilt if no orientation).

Deliberately branches away from the recent dominant cluster of residual predictors, WebGPU reservoir/fluid morphs, WebXR hand/gaze genome arenas, spectral self-listening, trajectory echo lattices, and pure NCA (F287–F294). Core novelty is DeviceOrientation as sealed causal control of local-MLP-driven physical DOM agents with explicit genome transfer on collision + hybrid canvas field + IDB champion persistence.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- 10 absolute-positioned DOM agent cards with simple velocity physics.
- Tiny MLP: 3 inputs (tiltX, tiltY, local energy) → 2 outputs (accel bias X/Y); genome = weights.
- DeviceOrientationEvent for gravity; mouse drag fallback.
- Canvas2D background reacting to average agent density / orientation.
- Genome transfer on distance < threshold: winner copies weights to loser with mutation.
- IndexedDB: seal/load champion genome + generation.
- Offline first; no permissions beyond orientation (prompted).

## Expected outcome
Runnable interactive prototype. Tilt device (or drag): agents accelerate under gravity, MLP biases their response, collisions transfer genomes. Seal persists champion. Load seeds next population. Expands DeviceOrientation causal + hybrid DOM physical UI controlled by tiny models + sealed genome transfer building blocks.

## Mechanics
1. Orientation or pointer supplies tilt vector each frame.
2. Each agent evaluates MLP → acceleration bias; integrate velocity with damping and bounds.
3. Proximity check: transfer genome from higher fitness (longevity + capture) agent.
4. Fitness updates; best eligible for seal.
5. Seal button stores champion to IndexedDB; load restores.

## Failure modes
- Orientation denied or unsupported → mouse simulation.
- No IndexedDB → in-memory only.
- Small screens → fewer agents, larger cards.
- High tilt → agents cluster at edges.

## Cross-reference
Avoided residual morphs, fluid/reservoir, WebXR hand/gaze as primary, spectral, NCA, pointer-history fields as core. Novel combination of DeviceOrientation causal + local MLP policy on physical DOM agents + multi-agent sealed genome transfer on collision + hybrid canvas field + IndexedDB persistence.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/deviceorientation-dom-genome-arena.js`; test: tilt produces non-zero MLP output and agent motion, proximity transfers genome (weights change), seal/load restores champion.
