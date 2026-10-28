# F312 — WebGPU Attention Wave Sonifier Mind

**Ledger ID**: F-312 (frontier series)

## Concept
A continuous spatial wave / reaction-diffusion lattice (Canvas2D primary, WebGPU compute path sketched) whose local diffusion and reaction rates are modulated in real time by the output of a small causal attention kernel. The attention parameters (query/key/value projections approximated as evolved gene vectors) are searched by a local Web Worker genetic algorithm under selection for field diversity + pointer-tracking residual. Field energy and attention focus drive CSS morph of surrounding chrome (hue-rotate, scale, filter on body and a floating card) and Web Audio synthesis (multiple oscillators whose frequencies track dominant spatial modes / energy bands). Pointer and optional DeviceOrientationEvent seed energy and bias attention. Seal hashes the best attention genome into IndexedDB.

## Novel combination / Branching
Deliberately branches from recent clusters: WebRTC sealed genome transfer (F311), Particle Life social matrices (F310), WebXR gaze RNN orbs (F309), LBM/Lenia/slime evolutionary physics (F304–F308), Hebbian spatial kernels (F297/F303), residual trajectory predictors, pure NCA, and spectral agents.

Moves onto:
- Evolutionary search over a **causal attention kernel** that directly parameterizes the spatial field update rule.
- Closed-loop **spatial field → audio sonification → (implicit) user feedback**.
- Hybrid Canvas2D/WebGPU noted lattice + Worker mind + DOM chrome morph + AudioContext.
- Persistent sealed attention genomes.

Not a variation of F-020 (FSM agents), F-023/F-025 (evolved fixed rules or boids), F-043/F-049 (velocity residual modulators), F-047 (attention lattice with movable nodes but different embodiment), or F298 (message-passing graph).

## Architecture
- Single self-contained `index.html` (no external deps, fully offline after load).
- 64×40 float grid, simple logistic + diffusion step modulated by attention-derived rates.
- Blob Worker maintains population of 6 gene vectors (attention biases, scales, residual gains); evaluates fitness on diversity + tracking; returns champion ~1 Hz.
- Main thread: rAF loop steps field, renders via ImageData upscale, applies CSS morph, updates Audio oscillators.
- Pointer injects energy; orientation (if available) biases wave direction.
- Seal: SHA-256 truncated of genome + metrics → IndexedDB.

## Expected outcome
Interactive spatial wave field that attends to recent gesture/tilt, discovers richer dynamics via evolved attention, warps the page chromatically and spatially, and sings a generative drone that follows field activity. Sealed genomes form local memory of successful attention policies. Runnable with graceful fallbacks (no Worker → fixed genes; no audio until gesture; no orientation → ignore; no WebGPU → Canvas2D).

## Mechanics
- Field step ~60 Hz: diffusion + reaction rates scaled by attention output (from recent energy samples + pointer history).
- Mind ~1 Hz: mutate, fitness = entropy + low residual to pointer velocity + diversity.
- Morph: energy → hue-rotate and scale; focus → blur/contrast.
- Audio: 3 oscillators, freqs from spatial band energies, gains from overall energy; resume on first gesture.
- Seal/load button stores/retrieves genome.

## Failure modes
- CSP blocks blob Worker → fixed genes, still interactive.
- AudioContext suspended until user gesture.
- DeviceOrientation requires HTTPS + permission; falls back.
- Low-end devices: drop resolution or skip every other frame.
- IndexedDB blocked → in-memory only.

## Building blocks for next
Evolved attention kernel controlling spatial substrate; field-to-audio mapping; sealed genome persistence. Next: true WebGPU compute shader for the attention aggregation and field update, WebXR head/hand as additional query tokens, multi-genome competition visualized as competing wave fronts, sealed genome breeding across sessions or peers.

## V01D landing
Skill under `void-live-deploy/skills/mini/attention-wave-sonifier/`; testable by pointer motion changing field rates and audio pitch, fitness increasing with sustained interaction, seal/load restoring morph behavior.
