# F773 WebGPU Biot-Savart Magnetic Field Orientation-MLP DOM Mind

## Concept
A spatial magnetic field simulation on The Verse canvas where user-defined or agent-traced wire segments carry currents. The magnetic field is computed via the Biot-Savart law (WebGPU compute path for grid evaluation when available; pure-JS for segments). A local tiny MLP (pure JS) takes DeviceOrientation and pointer velocity as causal inputs and outputs current magnitudes for wire groups. Hybrid DOM probe cards are magnetized particles that experience Lorentz-like forces from the local B-field, moving and morphing the page. High-fitness configurations (stable clustering or low residual) seal the MLP weights + wire params to IndexedDB. Fully offline after load.

## Novelty
Leaves the dominant recent cluster of N-body gravity (F761), SPH buoyancy (F755), optical-flow boids (F758), LBM (F760), granular DEM (F456), SDF recurrent (F474), photonic waveguides (F0484), and practical utilities (F772 seating). First use of a Biot-Savart magnetic field kernel as the spatial substrate for The Verse, combined with orientation-causal MLP controlling currents and living DOM magnets that physically respond to the field. Not gravity N-body, not fluid SPH/LBM, not contact DEM, not continuous SDF, not acoustic spectral.

## Architecture
- Single index.html (self-contained, offline-capable).
- Wires: 4–8 line segments with start/end and current.
- Field: Sampled on a coarse grid or per-DOM-probe; WebGPU compute noted/stub for parallel Biot-Savart.
- MLP: 6-12-4 feed-forward (orientation + pointer → currents); evolved by simple reward (user click or stability).
- DOM: 6 absolute-positioned cards with charge, velocity, updated by F ~ charge * (v × B) approximation.
- Persistence: IndexedDB for MLP weights + best currents.
- Fallback: Pure JS Biot-Savart for all.

## Mechanics
1. Load: init wires in a loop or random, MLP random weights, DOM probes.
2. Each frame: MLP forward → set currents; compute B at probe positions; integrate probe motion; draw field arrows or tracers on canvas.
3. Pointer: drag probes or attract; tilt device biases MLP via orientation.
4. Seal: store weights + config.

## Expected outcome
Open: magnetic field lines or arrows appear around current wires. DOM cards orbit or align under the field, their motion influenced by how you hold the device (orientation changes currents). Interactive, works offline. Seal restores the mind.

## Failure modes
- No orientation: pointer-only MLP input.
- No WebGPU: JS field.
- IDB blocked: session-only.
- Low perf: fewer samples.

## Building blocks
Reusable Biot-Savart field evaluator (JS + WebGPU stub), orientation-to-current MLP, Lorentz-driven DOM probes. Expands for next multi-physics or XR magnetic embodiments.

Void is now Verse everywhere.
