# F458 — WebXR Hand → PBD Constraint Mind (local MLP)

## Concept
Novel combination that deliberately branches away from the recent evolutionary-genome / spectral-feedback / NCA / L-system / Ising / HDC / orientation-MLP-canvas cluster.

True WebXR hand-joint tracking (with pointer + DeviceOrientation fallback) supplies dynamic distance constraints into a Position-Based Dynamics (PBD)-style solver. A local tiny MLP (8→16→4) takes joint-velocity residuals + hand position + orientation as input and outputs compliance / damping / attract / noise parameters that modulate the constraint projections. Weights can be sealed to a short hash id. Offline-capable single-file prototype.

## Why novel
- PBD-style constraint projection driven by live hand joints has not appeared in prior F- drafts.
- MLP acts as a causal compliance controller rather than a direct policy or genome-evolver.
- Hybrid embodiment: XR hand → physics constraints → particle field, with sealed local model.

## Prior cluster branched from
Dominant recent cluster (F450–F457): evolutionary genomes, spectral feedback swarms, granular broadcast, semantic point agents, device-orient Hebbian theft, L-systems, expression trees, Ising+MLP, HDC memory palaces, orient-MLP canvas persistence.

## Interaction
- Pointer moves the hand proxy and generates 4 joints.
- DeviceOrientation tilts gravity.
- “Enter WebXR Hand” attempts immersive-vr + hand-tracking (falls back gracefully).
- Seal MLP Weights produces a local hash id of the weight tensors.
- Reset Particles reinitializes the field.

## Files
- index.html — single self-contained runnable prototype

## Failure modes
- WebXR hand-tracking requires compatible headset + browser; most desktop users stay on pointer proxy.
- MLP is untrained (random init); outputs are stable but not optimized.
- IndexedDB persistence is stubbed only.
