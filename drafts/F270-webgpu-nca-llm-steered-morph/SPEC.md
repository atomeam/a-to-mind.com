# F270 — WebGPU NCA LLM-Steered Morph

## Concept
Novel combination of a WebGPU-accelerated Neural Cellular Automata (NCA) spatial field, a local AI agent (Web Worker) that "reasons" over field statistics and user spatial inputs to dynamically mutate NCA rules or inject seeds, and a morphing UI (DOM cards + CSS variables) that rearranges and restyles in response to emergent NCA activity patterns.

Builds on prior NCA, fluid, and attention lattice experiments by closing the loop: local agent steers the simulation rules live, and the interface physically responds to the field's coherence and motifs. Not a superficial variation of F-020/F-021 agents or later fluid/evo variants.

## Architecture
- Canvas2D fallback (WebGPU compute path stubbed for NCA step) for a grid of cells with multi-channel state.
- Web Worker runs a tiny local "mind": observes density, entropy, cluster count from main; uses simple online rules + optional small MLP-like blending of user motion vectors to decide rule mutations (e.g., growth rate, inhibition) or seed patterns.
- User pointer/orientation trails inject "thought" seeds into the NCA.
- Main thread renders NCA, extracts activity hotspots, morphs CSS (hue, scale, grid) and repositions floating DOM cards labeled by the agent.
- Optional IndexedDB for sealing agent decisions.

## Expected Outcome
Interactive spatial canvas where painting with the mouse seeds growing/decaying patterns. The local agent periodically comments and mutates the rules, causing the field to shift behavior. UI cards drift toward active regions and the whole page hue/scale responds to field entropy. Runnable without external deps.

## Mechanics
- NCA: classic Gray-Scott or simple neural-like update on CPU (for reliability); agent overrides params.
- Agent: every ~2s analyzes stats, outputs new params + label; main applies.
- Morph: CSS custom properties driven by entropy; cards use absolute positioning interpolated toward hotspots.

## Failure Modes
- High resolution NCA drops FPS on CPU; WebGPU path not fully implemented in this prototype.
- Agent mutations may stabilize or explode the field; clamps applied.
- Too many cards clutter; limit to 8.

## Next Building Block
Full WebGPU compute shader for NCA step; integrate tiny Transformers.js embedding for richer agent "reasoning".
