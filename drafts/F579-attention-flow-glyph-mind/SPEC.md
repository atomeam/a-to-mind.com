# F579 Attention-Flow Glyph Mind

**Slug**: `attention-flow-glyph-mind`  
**Ledger ID**: F-579 (frontier series)  
**Date**: 2026-11-05

## Concept
A local pure-JS multi-head attention mechanism processes a short causal history of pointer velocities and DeviceOrientation events. Attention outputs modulate injection and damping parameters of a discrete 2D flow-field kernel (velocity grid with simple advection and diffusion, previously unused as primary substrate). Living DOM glyphs (absolute-positioned spans drawn from a sealed alphabet) are continuously advected, rotated, and styled by sampled local flow (velocity, divergence, curl). User clicks on glyphs supply a reward signal that evolves the attention parameters via a lightweight evolutionary strategy. The sealed genome (attention weights + flow hyperparameters) persists in IndexedDB and can migrate via BroadcastChannel. Fully self-contained, offline after first load. Canvas2D visualizes the flow; WebGPU compute path is sketched as future extension.

## Novelty
Leaves the dominant recent cluster of wave-equation echoes (F577), ambient-sensor MLP + WebGPU SDF + CSS Paint Worklet (F578), discrete CA / CSS-Grid living layouts (F576), speech-NCA gardens (F575), sealed-genome CSS grids (F574), Q-learning spatial DOM agents (F573), and prior continuous-field / particle / NCA / spectral / softbody / residual systems. Core novel combination is causal multi-head attention (not MLP/RNN/reservoir/k-NN/Q-table) driving a previously unused discrete flow-field kernel, with true living DOM glyphs as the embodied agents that both sample and receive the flow, under evolutionary genome transfer. Not a cellular automaton, not reaction-diffusion, not neural weights on particles, not spectral residuals, not WebXR, not Paint Worklet, not wave equation.

## Architecture
- Single self-contained `index.html` (no external dependencies).
- Causal history buffer (last 16 samples of pointer Δ + orientation).
- Tiny multi-head attention (4 heads, pure JS matrix ops) produces modulation scalars.
- Flow kernel: 32×32 velocity grid, simple semi-Lagrangian advection + diffusion + source injection biased by attention.
- 12 living glyphs (DOM elements) positioned via transform, content from sealed alphabet ["V","E","R","S","E","M","I","N","D","A","T","O"], style driven by local flow stats.
- Evolutionary update: on glyph click, mutate top-k attention weights toward higher local curl/engagement fitness.
- Seal button serializes genome to IndexedDB; BroadcastChannel for peer transfer (optional).
- Fallback: if WebGPU unavailable, pure Canvas2D + DOM (current implementation).

## Expected outcome
Interactive spatial canvas where the page’s own typography becomes a living flow-following organism controlled by a local attention mind that adapts to how the user moves the pointer and orients the device. Glyphs cluster, stretch, and rotate in response to the evolving flow. Clicking rewards and steers the mind. Demonstrates a previously unbuilt hybrid of causal attention, discrete flow kernel, and DOM-glyph embodiment.

## Mechanics
1. Load: initialize random attention weights, flow grid, place glyphs.
2. Pointer/orientation → history → attention → flow sources.
3. Flow step → sample velocities at glyph positions → update transforms/styles.
4. Click glyph → reward → evolutionary mutate.
5. Seal: store genome. Optional BroadcastChannel receive replaces if higher fitness.
6. Reset clears history and reseeds.

## Files
drafts/F579-attention-flow-glyph-mind/SPEC.md  
drafts/F579-attention-flow-glyph-mind/index.html

## Failure modes
- DeviceOrientation permission denied → falls back to pointer-only.
- High glyph count causes reflow cost → capped at 12, requestAnimationFrame throttled.
- Attention numerical instability → weights clipped and renormalized each step.
- IndexedDB quota → seal fails silently with console note; in-memory continues.

## Next frontier building blocks
Sealed attention genomes + flow kernels that can be composed with future WebGPU compute shaders or WebXR-placed glyph clusters.
