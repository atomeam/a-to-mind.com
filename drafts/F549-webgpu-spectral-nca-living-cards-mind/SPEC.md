# F549: WebGPU Spectral-NCA Living-Cards Mind

**Slug**: `webgpu-spectral-nca-living-cards-mind`  
**Date**: 2026-11-04  
**Branch from**: Semantic embedding swarm (F548), self-vision particles (F546), SPH buoyant (F539). Explicitly leaves particle swarms, embedding similarity forces, boid/MLP policies, reservoir competitive agents, and pure orientation-driven kernels.

## Concept
A WebGPU-accelerated Neural Cellular Automaton (NCA) whose grid is continuously seeded by live microphone spectral features (AnalyserNode peak bins treated as soft phoneme injections). High-activity regions of the growing NCA act as attractors that physically pull, scale, rotate and tint floating DOM cards (Verse-style sticky notes / tools) as if they were living organs of the field. A local Web Worker genetic algorithm evolves the NCA kernel weights for sustained growth entropy correlated with audio energy. The evolved kernel + last seed pattern is sealable to IndexedDB. Fully offline single-file prototype with Canvas2D fallback.

## Novelty
Leaves the dominant recent clusters of GPU particle forces (embedding/cosine, boids, SPH, self-attention vortices), residual oracles, Hopfield SVG, and pure sensor-policy agents. Core novel combination is live spectral seeding of a continuous NCA substrate whose emergent high-density zones become physical attractors for labeled DOM cards that morph as organs. Not particle swarms, not associative memories, not pointer-history fields, not orientation RNNs.

## Architecture
- Single index.html, offline after load.
- WebGPU compute path for NCA update (32x32 or 64x64 grid, fallback JS/Canvas2D).
- AnalyserNode on getUserMedia for 16-bin spectral vector injected as additive seeds every frame.
- Floating DOM cards (3–5 sticky-style divs) with positions updated by bilinear sample of NCA activity; CSS transforms for scale/rotation/opacity.
- Worker GA (pop 12, fitness = field entropy × audio-correlation + card engagement).
- Seal button writes kernel + pattern to IndexedDB; load restores.

## Expected outcome
User grants mic, speaks or plays sound: NCA grows organic patterns seeded by spectrum. Cards drift toward and morph around active regions. Evolution slowly improves growth. Seal preserves the current “mind”. Demonstrates novel spectral-NCA-to-DOM-organ coupling never previously built in the ledger.

## Mechanics
1. Request mic, create AnalyserNode, sample frequency data.
2. Each frame: inject top bins as seed values into NCA grid corners or random cells.
3. Run NCA step (WebGPU or JS): local 3x3 kernel convolution + activation.
4. Sample activity at card positions; apply force toward higher activity, modulate scale by local density.
5. Every N frames, Worker evaluates fitness, mutates, selects new kernel.
6. Render NCA to canvas overlay; cards float above.

## Failure modes
- No mic permission: falls back to pointer-velocity seeding.
- No WebGPU: Canvas2D JS NCA (slower but functional).
- Audio silence: pure spontaneous growth from residual seeds.
- IndexedDB unavailable: seal shows warning, continues in-memory.

## Files
- drafts/F549-webgpu-spectral-nca-living-cards-mind/SPEC.md
- drafts/F549-webgpu-spectral-nca-living-cards-mind/index.html
