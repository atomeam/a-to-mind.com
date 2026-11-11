# F659 WebXR Hand Spectral Genome Mind

Plain name: Hand Spectral Genome

Job: Point your hand (or mouse) at the canvas to guide a spectral field; agents compete by depositing energy; high-fitness genomes seal and transfer to neighbors via IndexedDB and BroadcastChannel.

## Concept
True WebXR hand/gaze (with pointer fallback) provides causal input to a local tiny linear model (not MLP/RNN) that modulates a WebGPU compute spectral residual kernel (frequency bins updated by hand proximity residual). DOM portals sample spectral energy and morph. Multi-agent sealed genome transfer on high residual events. Branches from recent useful-tool cluster (seating/meal/notes) and orientation-MLP DOM portals.

## Novelty
Leaves the dominant recent cluster of offline useful tools (drag-drop meal/seating/note clusterers, subscription trackers F655–F658) and sensor-driven MLP/DOM portal minds. Core novel combination: WebXR Hand Input as causal driver of a previously unused spectral residual compute kernel, with linear local model and sealed genome transfer over shared fields.

## Architecture
- Single index.html, offline after load.
- Canvas2D primary visualization; WebGPU optional for compute.
- WebXR session for hand tracking if available; pointer proxy otherwise.
- IndexedDB for genomes; BroadcastChannel for multi-tab transfer.
- Interactive: drag portals, click to reward, seal button.

## Files
drafts/F659-webxr-hand-spectral-genome-mind/SPEC.md
drafts/F659-webxr-hand-spectral-genome-mind/index.html
