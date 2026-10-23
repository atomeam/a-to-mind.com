# F-247 · WebGPU Causal Token Swarm Mind

## Concept
Novel combination of:
- Continuous particle swarm where each particle is a spatial "token" carrying a short embedding vector (4-dim)
- Pointer trajectory samples + microphone spectral bins + device orientation act as live query tokens
- Local Web Worker evolutionary MLP that predicts next gesture residual / cluster center; residual is fitness
- Particles update position and embedding via attention-weighted forces from recent queries (simple dot-product attention)
- Spatial DOM thought-orbs bound to the highest-attention tokens; their position, scale, hue, filter and procedural "thought" label (hash of embedding) morph with attention residual and embedding norm
- Generative Web Audio: oscillators + PannerNodes driven by residual spectrum and token positions
- Progressive WebXR (session entry; hand rays as extra queries when available)
- Best policy sealed to IndexedDB

Not a superficial variation of F-246 (causal-entanglement lattice with memory cards on peaks): substrate is free token particles with embeddings and attention forces; mind is residual-minimizing policy over query-token attention; embodiment is dynamic thought-orbs that carry embedding-derived content and spatial audio, not persistent field cards.

## Architecture
Single index.html. Main thread steps ~180 tokens on Canvas2D (WebGPU compute path noted for upgrade), projects orbs, updates CSS vars, drives AudioContext with panners. Blob Worker receives residual summary + sensors, runs tiny MLP + hill-climb, returns best attention-bias / force-gain every ~1 s. IndexedDB seal. Optional XR.

## Expected outcome
Interactive token swarm that clusters and recolors around your gestures and ambient sound. Thought-orbs appear on high-attention particles, drift, scale and change labels as residual falls. Page chrome and spatial tones pulse with residual. Runnable offline. XR when supported.

## Mechanics
- Tokens: pos, vel, emb[4], attn score
- Attention: score = exp(dot(query, emb) / temp) * proximity; forces pull toward high-score queries
- Worker: MLP(spectral+tilt+residual) → forceGain, attnTemp, embDecay; fitness = -|predicted cluster residual|
- Orbs: top-5 attn tokens; lerp position; CSS scale/hue from attn and residual; text from emb hash
- CSS vars: --hue, --blur, --contrast from residual
- Audio: 3 osc + panners, freq/gain/pan from residual and token x

## Failure modes
No Worker → static forces. Mic denied → spectral=0. No orientation → tilt=0. Canvas2D (WebGPU stub). XR unsupported → pointer complete. Audio blocked until gesture.

## Building blocks
Pure WebGPU particle+attention compute kernel, multi-query XR hand embeddings, sealed multi-genome transfer, density feedback into fitness. Next: multi-agent token minds sharing a global query buffer.

## V01D landing
Spatial causal-token-swarm skill under void-live-deploy/skills/; testable via residual→orb count stability and attention→position mapping.
