# F538 WebXR Hand Tendril Sealed Genome Field Mind

## Concept
Novel combination for The Verse canvas: true WebXR hand tracking (or pointer fallback) controls a custom Verlet-integrated tendril chain (points + hard distance constraints + damping; no library softbody). Grip/spread and motion grow or retract the chain and modulate stiffness. Autonomous floating agents share the space. On contact between tendril tip and agent, a sealed genome (compact 8-float behavior vector: growth, stiffness, hue, mutation rate, etc.) is transferred only if the receiver verifies a local seal hash; successful transfers mutate the genome slightly and update the agent's phenotype. Genomes persist in IndexedDB. Visualization is Canvas2D lines/points with optional WebXR overlay path. Offline after first load. Deliberately branches away from orientation-MLP lattice/DOM clusters (Ising, SIR, lattice gas), residual predictors, NCA/Lenia, spectral/audio, pointer-history fields, softbody DOM, and pure particle policies. Core novel pieces: WebXR-hand-driven Verlet tendril embodiment + sealed contact genome transfer with local hash verification + persistent multi-agent field.

## Architecture
- Single `index.html` (no external deps)
- Verlet: 12-24 points per tendril, fixed-length constraints iterated 3-5 times, velocity damping
- Hand input: WebXR hand joints (index tip, thumb, palm) if session available; else mouse/pointer as proxy "hand" with click-drag for grip
- Agents: 6 floating orbs with position, velocity, and genome; simple repulsion
- Contact: tip-to-agent distance < radius → check seal (simple FNV-like hash of genome prefix) → transfer + mutate (Gaussian noise) → phenotype update (color, size, speed)
- IndexedDB store `f538-tendril-genomes`: load best on start, Seal saves current field
- Fitness proxy: number of successful transfers + chain length stability
- Fallback always works in 2D canvas; XR button attempts immersive-ar/vr with hand tracking

## Expected outcome
Runnable prototype in which the user grows and steers a tendril with mouse or XR hand, touches agents to exchange and evolve sealed genomes, sees phenotype changes, and can Seal the field to IndexedDB. Contact transfers are visible (flash + color shift). Offline capable.

## Mechanics
1. Initialize random agents with genomes; load from IndexedDB if present.
2. Pointer or XR hand updates the root of the Verlet chain each frame.
3. Integrate Verlet, solve constraints, detect contacts, attempt sealed transfers.
4. Render tendrils as polylines, agents as colored circles.
5. Seal button persists genomes + fitness.

## Files
- drafts/F538-webxr-hand-tendril-sealed-genome-mind/SPEC.md
- drafts/F538-webxr-hand-tendril-sealed-genome-mind/index.html

## V01D landing
Hand-tendril sealed genome stage under `void-live-deploy/skills/webxr-hand-tendril-genome.js`; test asserts contact distance → seal check → genome mutation and IndexedDB roundtrip.
