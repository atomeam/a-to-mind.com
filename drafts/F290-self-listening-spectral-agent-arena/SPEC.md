# F290 — Self-Listening Spectral Agent Arena

## Concept
A local evolving agent (tiny 6-8-4 MLP genome in Web Worker) generates its own audio (4 Web Audio oscillators whose frequencies and gains are agent outputs). An AnalyserNode extracts a 16-bin spectrum that is fed back as causal input to the agent, closing a self-listening loop. The agent's hidden state and residual (prediction error on next spectrum) drive a Canvas2D particle field (WebGPU compute path prepared for future spectral fluid kernel). Particle density hotspots spawn and morph floating DOM insight cards (position, opacity, hue, label from quantized state). User drag of a card injects a reward pulse into the genome fitness; seal persists champion genome + oscillator params to IndexedDB. Fully offline after load; progressive enhancement (pointer fallback, no mic required).

Deliberately branches away from the recent dominant cluster of WebXR hand/gaze genome arenas, reservoir/fluid morphs, orientation-primary causal inputs, softbody/cloth, pure NCA, speech portals, and residual trajectory predictors (F281–F289). Core novelty is the closed self-listening audio loop (agent generates → spectrum → causal input) combined with spectral residual driving spatial particles + dynamic DOM card morph + sealed genome persistence.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Worker: MLP (inputs: 8 spectrum bins + residual + bias; outputs: 4 freq deltas + 4 particle force biases).
- Web Audio: 4 OscillatorNodes + GainNodes + AnalyserNode; spectrum every ~50ms.
- Canvas2D: ~40 particles with agent-biased velocity + attraction to energy.
- 4 DOM insight cards: absolute, semi-draggable, content from agent state hash; lerp to particle centroids.
- IndexedDB: seal/load champion genome + generation.
- Offline first; no permissions beyond optional audio context resume on gesture.

## Expected outcome
Runnable interactive prototype. Click "Start" to resume audio context; agent begins self-listening loop, particles swirl, cards morph and rearrange. Drag a card to reward (fitness increases, genome eligible for seal). Seal/load restores dynamics. Offline-capable. Expands self-generated audio causal loops + spectral residual spatial fields + dynamic DOM morph from agent state + sealed evolutionary policy building blocks.

## Mechanics
1. Audio context generates tones from current agent outputs.
2. Spectrum → Worker MLP → new outputs + residual.
3. Particles integrate forces from agent; density sampled.
4. Cards sample nearest particle energy, morph transform/content; drag freezes and on release adds reward to fitness.
5. Seal button stores best genome to IndexedDB; load seeds.

## Failure modes
- Audio context suspended → requires user gesture (button).
- No Worker → main-thread MLP.
- No IndexedDB → in-memory only.
- No WebGPU → Canvas2D fully functional (primary path).
- Small screens → larger card hit areas, fewer particles.

## Cross-reference
Avoided WebXR hand/gaze, orientation-as-primary, reservoir computing, softbody physics, pure NCA, speech causal portals, WebRTC sharing, residual trajectory morphs as core. Novel combination of self-listening spectral generation loop + local MLP policy + particle spatial field + dynamic DOM card morph + sealed genome.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/self-listening-spectral-agent.js`; test: spectrum produces non-zero MLP output, residual drives particle motion, card morphs with energy, seal/load restores genome frequencies.
