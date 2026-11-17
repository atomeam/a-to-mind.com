# F783 Local Policy DOM Morph Mind

## Concept
A novel hybrid spatial interface for The Verse canvas: a population of tiny local policy networks (pure JS feed-forward MLPs, no external libs) directly control the physical transforms (position, scale, rotation, hue) of living DOM portal elements. Causal inputs are a short history of pointer deltas, DeviceOrientation tilt, and relative bounding-box features. Portals compete for user attention (hover duration + clicks as reward). Best genomes are sealed to IndexedDB. A canvas overlay visualizes decision vectors and residual fields. Fully offline-capable after load. WebGPU path prepared for future particle density but pure 2D for reliability.

## Novelty
Leaves the dominant recent cluster of continuum field kernels (Kuramoto F770, Biot-Savart F773, Cahn-Hilliard, LBM, N-body, etc.), pure DeviceMotion Hebbian CSS3D (F782), and substrate-mediated DOM morphs (softbody, wavelet, Physarum). Core novel combination is direct evolutionary local-policy control of living DOM layout as the primary embodiment, with multi-portal competitive fitness and sealed genome transfer, without an underlying physics or CA substrate mediating the motion. Not particle swarms, not phase oscillators, not magnetic fields, not CSS3D alone.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS.
- 6 living DOM portals (absolute positioned cards).
- Each portal bound to a 8-6-4 MLP (inputs: pointer dx/dy, orient gamma/beta, relative x/y, density proxy; outputs: vx, vy, scale delta, hue delta).
- Population of 4 genomes; fitness = hover time + click rewards - spatial collapse penalty.
- Canvas overlay: draw lines from pointer to portals weighted by policy confidence, simple particle trails.
- Persistence: IndexedDB under key `f783-policy-dom-morph`.
- Fallback: no WebGPU required; pure 2D.

## Mechanics
1. Load: init random MLP weights for portals, position them, request orientation permission on gesture.
2. Each frame: sample inputs, forward MLPs, integrate transforms on DOM elements, update fitness, draw overlay.
3. Pointer: move feeds deltas; hover on portal accumulates reward; click reinforces.
4. Evolve: every 120 frames, mutate lower-fitness genomes toward winner.
5. Seal: store best weights + positions.

## Expected outcome
Open: DOM portals drift and morph in response to how you move the pointer and tilt the device. Overlay shows influence lines. Clicking a portal makes it "claim" more space. Seal persists the mind across reloads. Offline after first load.
