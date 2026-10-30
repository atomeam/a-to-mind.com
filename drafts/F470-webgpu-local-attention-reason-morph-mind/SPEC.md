# F470-webgpu-local-attention-reason-morph-mind

## Concept
Local Attention Reason Morph Mind: a lightweight local AI agent maintains a rolling memory of spatial-interaction tokens (pointer bins, click events, microphone spectral energy, contenteditable tile content features). It computes multi-head self-attention (pure-JS scaled dot-product, WebGPU compute path noted for larger matrices) over the token sequence. Attention weights drive:
- Spatial reconfiguration of absolute-positioned contenteditable "thought" cards (proximity and scale reflect mutual attention; high-attention cards drift toward each other and enlarge).
- Generation of short reasoning sentences from template slots filled by top-attended tokens, injected as new or updated card text.
- A Canvas2D (WebGPU compute/render path for field) visualization of projected attention energy as a flowing particle or gradient field that the cards sit above.
User pointer, drag, and typing close the loop by adding tokens and updating features. Residual of a one-step attention-entropy predictor injects "surprise" turbulence into the field. Optional device orientation biases token spatial features; optional mic modulates global attention temperature. Sealing captures token memory, attention snapshot, card texts/positions, and metrics to IndexedDB for living restore. CSS chrome (hue, blur, scale) morphs with attention entropy and total energy.

## Novelty
Not a superficial variation of F469 evo-particle-spatial-audio (genome particles + panners + tile push), F468 Hebbian-resonance-cavity or webrtc-expression-agent, F467 causal-echo-lattice, F466 spectral-cloth, F465 Hebbian-mic-swarm, or earlier NCA/RD/predictive lattices. Core novel combination is an explicit local self-attention agent whose internal attention graph physically rearranges and populates spatial DOM thought cards in real time, while a GPU-accelerated field visualizes the attention energy; closed-loop with user spatial input and sealed attention-memory. Previous agents were physics-driven or evolutionary; this is attention-mechanism-driven spatial UI morph + thought generation.

## Architecture
- Single index.html (no external deps, progressive enhancement)
- Token memory: fixed ring of 32 events, each feature vector [type, nx, ny, intensity, content_hash_norm]
- Self-attention: 2-head scaled dot-product on CPU (matmul small); WebGPU noted for future larger
- Thought cards: 5 absolute contenteditable divs; positions updated via requestAnimationFrame from attention-derived forces (attraction between high-weight pairs)
- Reasoning generator: template sentences ("Attending to {top} near {pos} with energy {e}") injected on attention spikes
- Canvas2D field: particles or radial gradients whose velocities biased by attention-projected energy map
- Main-thread residual: linear predictor of next entropy; residual adds field turbulence
- DeviceOrientation + AnalyserNode optional
- IndexedDB seals
- CSS custom properties from entropy/energy for chrome morph
- Offline after load

## Expected Outcome
Interactive spatial canvas where the local attention agent continuously rearranges thought cards according to what it is "attending to" in recent user actions and tile content; generates short reasoning notes into the cards; visual field pulses and flows with attention energy. Sealing restores the living attention state and cards. Runnable fully offline; graceful degradation without WebGPU/mic/orientation.

## Failure Modes
Attention computation lag on very low-end devices (cap tokens, throttle), IndexedDB quota in private mode, AudioContext suspended until gesture, orientation permission denied (bias=0), no WebGPU (Canvas2D only, already primary), browser blocks autoplay.

## Building Blocks
WebGPU compute matmul for multi-head attention, WebXR hand-tracked tokens, on-device fine-tuning of projection matrices, BroadcastChannel multi-tab shared attention memory, embedding of full tile text via local TF.js or WebNN.

## V01D Landing
skills/mini/attention-reason-morph; testable via token inject → attention change → card reposition + text update, seal → IDB restore of tokens+cards.

## Files
drafts/F470-webgpu-local-attention-reason-morph-mind/SPEC.md
drafts/F470-webgpu-local-attention-reason-morph-mind/index.html
