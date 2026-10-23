# F-245 · WebGPU Acoustic Softbody WebXR Mind

## Concept
Novel combination of:
- Softbody particle lattice (CPU with WebGPU compute hook)
- Local Web Worker evolutionary MLP that adapts rest-length / stiffness / damping from multi-modal residual
- Microphone spectral energy + DeviceOrientation + optional WebXR hand joints as control signals
- Hybrid DOM anchors that are physically bound to softbody vertices and morph (scale/hue/filter) with local strain
- Generative Web Audio oscillators driven by residual prediction error and strain variance
- Progressive WebXR session; flat mode fully interactive
- Sealed policy weights to IndexedDB

Not a superficial variation of F-244 (hand neural softbody): here the physics parameters themselves are continuously adapted by a residual-minimizing worker mind whose inputs include acoustic spectrum, closing an audio→physics→audio loop, with strain-driven DOM embodiment and residual chrome morph.

## Architecture
Single `index.html`. Main thread steps softbody, queries DOM anchors, updates CSS custom properties, drives AudioContext. Blob Worker receives spectral bins + orientation + hand summary, runs tiny MLP + hill-climb on fitness (strain coherence around spectral peaks), returns best parameters every ~1s. IndexedDB seal on button.

## Expected outcome
Interactive softbody that stiffens or softens in response to ambient sound and tilt; dragging or hand-tracking sculpts it; floating DOM cards stretch and recolor with local deformation; page hue/blur and generative tones pulse with residual. Runnable offline. XR hand when supported.

## Mechanics
- Particles + springs with MLP-modulated k, d, rest scale
- Worker residual = |predicted strain - observed| ; fitness = -residual + spectral alignment
- Anchors lerp to bound particles; CSS filter/scale from strain
- CSS vars: --hue, --blur, --contrast from residual + energy
- Audio: oscillators frequency/gain from residual and variance

## Failure modes
No Worker → static params. Mic denied → spectral=0. No WebGPU → Canvas2D. XR unsupported → pointer mode. Audio blocked until gesture.

## Building blocks
WebGPU compute softbody kernel, full XR joint binding, sealed genome breeding across sessions, density feedback into acoustic fitness.

## V01D landing
Spatial acoustic-softbody skill under `void-live-deploy/skills/`; testable via residual→CSS and strain→anchor mapping stability.
