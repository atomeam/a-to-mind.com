# Frontier Engine F546: WebGPU Self-Vision Particle Mind

**Slug**: `webgpu-self-vision-particle-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of DeviceMotion-Hopfield SVG competitive agents (F545), WebGPU wave interference phase-DOM (F542), self-attention vortex (F540), reservoir-orientation competitive DOM (F541). Explicitly leaves associative memories (Hopfield), continuous wave kernels, self-attention, residual RNNs, orientation sensors, DeviceMotion imprinting, SVG path morphs, and all prior external-sensor-driven particle/MLP systems.

## Concept
A WebGPU compute particle swarm (Canvas2D fallback) whose shared tiny pure-JS MLP controller receives, each frame, a downsampled "retina" of the previous rendered frame in addition to local particle statistics. Particles render glowing points and trails; the network observes the emergent visual field it itself produces and modulates global attractors, emission rates, and velocity biases, closing a self-referential visual feedback loop. Pointer plants a temporary energy source that the particles chase and the network "sees". Seal persists MLP weights + visual-hash snapshot to IndexedDB. Fully offline single-file prototype. No external sensors (no orientation, motion, audio, light), no DOM cards as primary agents, no evolutionary genome transfer between agents.

## Novelty
Leaves the dominant recent clusters of sensor-driven (orientation/DeviceMotion/audio/camera) MLP/RNN/Hopfield policies controlling particles, SVG morphs, or DOM cards, and continuous physics kernels (waves, SPH, attention vortices). Core novel combination is a closed-loop local visual cortex: the simulation observes its own previous render target (downsampled retina) as primary input to the neural controller that then steers the same simulation. Not feed-forward external sensing, not associative pattern recall, not phase-coupled resonators. The mind sees what it draws and changes what it draws next.

## Architecture
- Single `index.html`, offline after load.
- WebGPU preferred: compute shader updates particle positions/velocities from shared uniforms (MLP outputs); render pass draws points. Canvas2D fallback with requestAnimationFrame.
- MLP: pure JS, 72→16→8→4 (64 retina + 8 summary stats → biases, attractor strength, hue shift, trail decay).
- Retina: after each frame, getImageData, average to 8×8 grayscale, normalize, feed to MLP.
- Pointer: sets a decaying attractor position sampled into the summary stats.
- IndexedDB `f546-self-vision-weights`; Seal button stores weights + simple perceptual hash of last retina.
- Fallback synthetic noise retina if canvas sampling fails.

## Expected outcome
Runnable prototype in which particles form self-organized patterns (clusters, swirls, pulses) that evolve in response to the visual structure they create; moving the pointer injects visible chase behavior that the network incorporates into future dynamics; Seal restores the learned weights across reloads. Works offline; graceful Canvas2D path always available.

## Mechanics
1. Initialize random MLP weights (or load from IndexedDB); spawn ~2k–4k particles.
2. Each frame: sample previous frame to 8×8 retina + particle stats → MLP forward pass → update global params (attractor, color, decay).
3. Update particles (WebGPU compute or JS); render to canvas.
4. Pointer move/click sets attractor; decay over time.
5. Seal button: serialize weights + retina hash to IndexedDB.
6. On load: restore if present; otherwise random init and begin observing.

## Failure modes
- WebGPU unavailable on some devices → Canvas2D path must remain fully interactive.
- getImageData security/taint → synthetic retina fallback.
- Feedback loop collapse to uniform field or explosion → clamp MLP outputs, add mild damping.
- IndexedDB quota → silent fail, continue in-memory.
