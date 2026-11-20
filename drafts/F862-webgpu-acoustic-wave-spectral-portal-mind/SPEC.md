# F862 WebGPU Acoustic Wave Spectral Portal Mind

## Concept
A 2D acoustic wave equation evolves on a spatial canvas. Live microphone spectrum (Web Audio AnalyserNode frequency bands) injects pressure sources. A local tiny MLP (pure JS) takes spectral energy + DeviceOrientation as causal input to control wave speed, damping, and injection gain. DOM portals are positioned over the field; their visual style (scale, hue, opacity) is driven by local wave amplitude. Clicking a portal rewards the MLP (Hebbian-like weight update) and can inject a secondary pulse. Best weights seal to IndexedDB and BroadcastChannel for sealed transfer across tabs/sessions. Progressive: Canvas2D always; WebGPU compute path sketched for the wave kernel.

This is a novel combination of continuum acoustic PDE substrate (not heat, not Cahn-Hilliard, not Lenia, not DEM particles), spectral audio causal input (not pure orientation or pointer residual), local evolving MLP controlling physics parameters, and hybrid DOM portals that both sample and inject into the living wave field under reward-gated sealed genome transfer.

## Novelty
Leaves the dominant recent cluster of DEM granular contact (F861), heat-equation MLPs (F859), Cahn-Hilliard phase (F852), Lenia continuous CA (F853), boids/MLP (F855), CSS3D motion cards (F854), self-attention portals (F851), WebXR hand Verlet (F856), orientation-spiking softbodies (F857), WebRTC MLP auctions (F858), L-systems (F850), and practical time-card tools (F860). Core novel combination is the previously unused 2D wave equation (hyperbolic PDE, finite-difference, not diffusion, not phase-field, not particle contact) driven by spectral microphone features through an evolving local MLP, with DOM elements as true bidirectional acoustic portals (inject + sample amplitude) under sealed parameter transfer. Not a superficial variation of prior continuum or particle minds.

## Architecture
- Single self-contained index.html
- 96×54 float grid for pressure u and velocity-like du; explicit finite-difference wave equation (c²∇²u - ∂²u/∂t² = 0, with damping)
- Local MLP: 6-8-3 (inputs: low/mid/high spectral energy, tiltX, tiltY, pointerProx; outputs: speed, damping, gain)
- 3 absolute DOM portals (draggable, clickable); style driven by sampled amplitude
- Fitness: click reward + coherence of wave energy
- Seal: IndexedDB `verse-f862-wave` + BroadcastChannel `f862-genome`
- Progressive: Canvas2D visualization always; WebGPU compute shader stub commented for future acceleration
- Fallbacks: no mic → pointer clicks inject; no orientation → pointer velocity residual; no IDB → memory only

## Expected outcome
Open: quiet field or residual noise. Grant mic permission: spectrum drives pulsing sources. Tilt device: MLP biases propagation. Drag portals: they float and change appearance with wave energy; click to reward and pulse. Seal preserves best MLP; second tab adopts higher-fitness genome. Interactive spatial acoustic mind, offline after load (mic requires gesture).

## Failure modes
No mic permission → click-to-inject fallback. Large dt or high c → instability (clamped). No orientation → pointer proxy. IDB blocked → session only. High grid → slower JS (capped).

## Building blocks
Reusable pure-JS 2D wave kernel, spectral feature extractor, tiny MLP controller, hybrid acoustic DOM portals, sealed genome transfer. Enables future WebGPU compute wave solvers, multi-frequency sources, or coupling to local audio synthesis.

Void is now Verse everywhere.

**Files**
- drafts/F862-webgpu-acoustic-wave-spectral-portal-mind/SPEC.md
- drafts/F862-webgpu-acoustic-wave-spectral-portal-mind/index.html
