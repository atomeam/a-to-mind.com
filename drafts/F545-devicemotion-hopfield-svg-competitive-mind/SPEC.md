# Frontier Engine F-545: DeviceMotion Hopfield SVG Competitive Mind

## Concept
A population of living SVG agents whose path geometry is generated from states recalled by a local Hopfield associative memory network. DeviceMotionEvent (acceleration history) and pointer trajectories imprint binary patterns into the Hopfield. Agents periodically query the memory; the recalled pattern morphs their SVG control points. Agents compete in screen space via simple physics; on collision the higher-stability agent transfers a sealed fragment of the current Hopfield weight matrix (hashed snapshot) to the other. Best patterns persist in IndexedDB. Fully offline single-file prototype. No WebGPU, no continuous field kernels, no MLP/RNN residual policies.

## Novelty
Leaves the dominant recent cluster of WebGPU continuous physics kernels (SDF raymarch, wave interference, self-attention vortex, SPH, camera flow, lattice-gas) coupled to evolutionary/MLP/RNN policies that sample or drive living DOM cards with sealed IndexedDB genomes. Core novel combination is a classical Hopfield associative memory (energy-minimizing binary patterns, not feed-forward MLP, not Elman RNN, not reservoir) whose causal input is DeviceMotion acceleration + pointer history, controlling generative SVG path morphs (not canvas particles, not DOM cards as primary agents, not softbody springs) under multi-agent collision-gated sealed weight-fragment transfer. Not substrate simulations, not neural policy gradients, not spectral/audio residuals.

## Architecture
- Single index.html, offline after load.
- Hopfield: N=64 binary units, Hebbian weights from imprinted patterns (up to 8 stored).
- 6–8 SVG <path> agents; control points decoded from recalled binary vectors.
- DeviceMotion: buffer last 32 accel samples, threshold to binary imprint on significant motion.
- Pointer: drag imprints trajectory-derived pattern.
- Competition: simple velocity + repulsion; on overlap transfer sealed fragment (JSON of weight slice + hash).
- IndexedDB `f545-hopfield-patterns`; Seal button stores current weights + patterns.
- Fallback: synthetic motion from pointer if DeviceMotion unavailable.

## Expected outcome
Runnable prototype in which shaking or gesturing the device (or moving the pointer) imprints patterns that agents recall and morph into; colliding agents exchange sealed fragments; Seal freezes the memory for reload. SVG shapes visibly change with recalled states.

## Mechanics
1. Initialize random Hopfield weights; load from IndexedDB if present.
2. Each frame: update agent positions, check collisions for transfer, occasionally recall and morph SVG.
3. DeviceMotion / pointer events imprint new patterns via Hebbian update.
4. Seal writes weights + hash.
5. Agents display current recalled pattern id.

## Failure modes
- DeviceMotion permission denied or desktop: pointer-only imprint path.
- Hopfield capacity exceeded: fade oldest pattern.
- SVG path invalid: clamp control points.
- IndexedDB unavailable: session-only memory.

## Files
- drafts/F545-devicemotion-hopfield-svg-competitive-mind/SPEC.md
- drafts/F545-devicemotion-hopfield-svg-competitive-mind/index.html

## V01D landing
Hopfield SVG competitive stage under void-live-deploy/skills/hopfield-svg-agents.js; test asserts DeviceMotion or pointer imprint → agent morph change and collision transfer updates peer weights.
