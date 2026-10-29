# F300 — WebGPU Interference Reservoir Morph

## Concept
Spatial wave-interference field (2D discrete wave equation on a lattice) whose source frequencies and amplitudes are continuously adapted by a local reservoir computer (echo-state network) that consumes pointer trajectory history and field energy. Constructive zones attract or morph floating DOM node cards; dragging a card injects energy into the lattice. The field statistics can drive simple generative audio (extension). Champion reservoir state + source configuration seals to localStorage / IndexedDB. Canvas2D primary path with WebGPU compute upgrade noted. Fully offline, progressive.

## Architecture
- Main thread: Canvas2D visualization of wave field (N=96), source injection, DOM node cards with drag-to-inject.
- Reservoir: 32-unit echo state, tanh activation, pointer + energy input; mean state biases one source.
- Interaction: Pointer move feeds history; click adds source; drag node injects impulse.
- Persistence: localStorage seal of sources + reservoir state.
- Progressive: Works without WebGPU, without audio, without orientation.

## Novelty vs prior
Branches away from residual linear predictors (F275/F284), attention message-passing graphs (F298), decision-tree orbs (F296), genome competitions (F285), online-learning agents (F286), hum-crystal PPM (F299), particle flocks, NCA, fluid, softbody, Hebbian kernels.
Novel combination: discrete wave-interference lattice as the spatial substrate + reservoir computing as the causal mind + energy-injection DOM nodes that close the loop by physical drag. Not particle forces, not graph embeddings, not residual error modulation of diffusion.

## Expected outcome
Interactive spatial canvas. Moving the pointer trains the reservoir which retunes source frequencies, producing evolving interference patterns. Clicking places new sources; dragging node cards punches energy into the field. Seal persists the mind and configuration. Visual field responds in real time; UI cards scale with reservoir energy.

## Mechanics
1. Wave step: second-order discrete Laplacian + damping + sinusoidal source injection.
2. Reservoir step: leaky tanh echo of [px, py, energy, sin(t)]; mean biases source.freq/amp.
3. Node cards: spawned at sources, mild attraction, scale with energy, drag injects field impulse.
4. Seal: JSON of sources + resState to localStorage.

## Failure modes
- High N drops frame rate on low-end (cap at 96).
- localStorage blocked → in-memory only.
- No pointer → reservoir idles on energy alone (still evolves).
- WebGPU path not implemented in this draft (CPU lattice always works).

## Building blocks for next
Wave-equation substrate, reservoir-driven source control, energy-injection DOM nodes, sealed reservoir state. Next: full WebGPU compute wave kernel with larger N; multi-source reservoir readout; Web Audio spectral sonification of the field; WebXR hand as additional source injector.

## V01D landing
spatial-interference-reservoir skill under void-live-deploy/skills/mini/f300-interference-reservoir.js; testable via pointer→frequency shift, drag→field impulse, seal/load restores sources + state.

_Renumbered on 2026-10-29: this draft was F300-webgpu-interference-reservoir-morph (F-300), a number it shared with F300-orient-causal-mlp-physical-dom-agents. Its number is now F-441; see drafts/NUMBERS.md._
