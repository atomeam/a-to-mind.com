# F263: WebGPU Causal Spectral Portal Mind

## Concept
Novel combination: WebGPU compute shader evolves a multi-channel spectral/wave lattice (simplified 2D wave equation with damping and injection). A local causal attention controller (tiny multi-head attention over a ring buffer of recent pointer trajectories, velocities, and reduced field stats) runs in a Web Worker, predicting intent and biasing lattice parameters (injection strength, damping, frequency bias). Reduced spectral statistics (energy, dominant mode proxy, variance) drive physical morphing of interactive DOM "portal" cards (CSS transform, filter, opacity, position). Portals act as spatial probes: drag/click injects energy into the lattice at the corresponding region and focuses the attention buffer. Optional Web Audio API sonifies dominant energy peaks as oscillators with frequency modulated by field stats. The attention controller genome (weights) can be sealed via SHA-256 + IndexedDB for persistence and later re-injection across sessions. Pure local, no external models or network after load.

This expands the Void canvas with a spectral mind whose causal prediction of user history physically reshapes interface portals while the field resonates and can be sonified, with sealed evolutionary controller states.

## Why this branch
Recent cluster (F257–F262) centered on orientation-NCA, residual attention lattices, volumetric residuals, orientation-causal DOM physics, and WebXR hand-tracked MLP particle arenas. This deliberately leaves that cluster by using a spectral/wave lattice (not NCA, not particle physics, not residual volumetric), causal attention over trajectory history (not orientation, not hand pose, not RNN on cards), portals as both morph targets and energy injectors, and spectral sonification. No WebXR dependency, no DeviceOrientation as primary.

## Architecture
- Single self-contained index.html.
- WebGPU compute shader (WGSL) steps the wave lattice (64x64 grid, multiple channels for different frequencies).
- Web Worker hosts the causal attention controller (ring buffer of last 32 events; tiny 4-head attention → bias vector).
- Main thread reads back reduced stats each frame, applies CSS to 5 portal divs.
- Pointer events feed the Worker and can inject into GPU buffer.
- Seal button: serialize attention weights + timestamp, SHA-256, store in IndexedDB.
- Load injects sealed weights into Worker.
- Canvas2D particle/wave fallback if WebGPU unavailable.
- Web Audio oscillators optional, started on first user gesture.

## Expected outcome
Runnable prototype: move pointer → attention predicts and biases the spectral field → portals morph, orbit, glow according to resonance; drag portal to seed energy; seal captures a successful controller state. Offline-capable with graceful fallbacks.

## Mechanics
- Pointer trajectory + velocity + field energy → attention inputs.
- Attention outputs bias injection rate, damping, and frequency shift.
- High energy / low damping → portals expand, saturate, increase motion.
- Dominant spectral peak modulates audio frequency and portal rotation.
- Click portal: inject local energy + add focused event to attention buffer.
- Seal / Load Sealed.

## Failure modes
- No WebGPU → Canvas2D simplified wave simulation with same attention controller.
- Worker blocked (CSP) → attention runs on main thread.
- No Web Audio / gesture → silent but fully visual/interactive.
- IndexedDB blocked → in-memory only, status message.
- Low-end GPU → throttle grid to 32x32, lower step rate.

## Building blocks for next
Spectral wave kernels in WebGPU, causal attention controllers over spatial trajectories, portal probes that both observe and inject into the field, sealed attention-genome persistence, spectral-to-audio mapping. Next: multi-tab BroadcastChannel genome races, WebXR gaze injection into spectral field, or true FFT compute shader for richer spectral analysis.
