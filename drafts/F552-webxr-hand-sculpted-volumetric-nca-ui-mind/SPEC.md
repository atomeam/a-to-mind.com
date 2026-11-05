# F552: WebXR Hand-Sculpted Volumetric NCA UI Mind

## Concept
A WebXR (or pointer-proxy) hand-sculpting interface injects activation into a volumetric Neural Cellular Automaton. The NCA evolves emergent structures on WebGPU compute (Canvas2D slice fallback). A local mind samples energy clusters and morphs floating UI panels in space—resizing, repositioning, and reorienting them around the living volume the user sculpts. Hands grow the mind; the mind rearranges the Verse interface in response.

## Branch
Away from acoustic fluid portals (F551), gaze-predictive agents (F550), spectral living cards, orientation MLPs, and prior NCA/WebGPU particle systems.

## Novelty
- First hand-tracked (or high-precision pointer) direct sculpting of a volumetric NCA as the causal substrate.
- Closed loop: user sculpts emergent volume → local cluster-mind interprets → physical XR/DOM UI panels morph and orbit the structures.
- Volumetric growth as living interface architect, never previously attempted.

## Architecture
- Single index.html: WebXR session request with hand-tracking preferred; pointer fallback for desktop.
- WebGPU compute shader for NCA step (or JS/Canvas 2D cellular for compatibility).
- Per-frame: inject at hand/pointer, evolve NCA, detect high-energy clusters, drive panel transforms.
- Panels are DOM elements projected or absolutely positioned relative to volume.

## Expected outcome
Users can "sculpt" thought-structures with hands or mouse; the UI panels organically rearrange themselves around the growing patterns, creating a living spatial interface that responds to the emergent mind.

## Failure modes
- No WebXR/WebGPU: pointer + Canvas2D NCA.
- High resolution: cap grid size.
- No hand tracking: treat controllers or pointer as injectors.

## Files
- index.html (self-contained, runnable)
- SPEC.md

## Integration
Lands as Verse canvas prototype; expands building blocks for WebXR hand input + volumetric NCA + AI-driven spatial UI morphing.
