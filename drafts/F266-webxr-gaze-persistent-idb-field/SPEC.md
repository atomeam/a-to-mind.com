# F266 WebXR Gaze Persistent IndexedDB Memory Field

## Concept
True WebXR gaze-driven placement of spatial memory markers that persist across sessions and reloads via IndexedDB. Hybrid DOM HUD + WebGL canvas. No neural models, no WebGPU compute shaders, no residual predictors, no NCA, no spectral/audio, no pointer-history fields, no genome transfer.

Branches away from the recent dominant cluster of orientation-RNN/MLP physics arenas, WebXR hand-MLP-genome, volumetric residual attention, causal spectral portals, and WebRTC multi-agent competitions (F258–F265).

## Capabilities
- Enter immersive-vr WebXR (or fallback 2D click).
- Gaze (viewer pose) + trigger places a marker ~2m forward on floor plane.
- All markers loaded from / saved to IndexedDB on every placement.
- Offline-capable, single-file, no external deps.
- Markers rendered as points; age not used for residual prediction (pure persistence).

## Failure modes
- WebXR not supported → 2D click mode.
- No local-floor → may fail requestSession.
- IndexedDB quota or private mode → markers not persisted.
- Quaternion forward approx is crude; placement may drift.

## Next expansion
Could add multi-user WebRTC broadcast of new markers, or DeviceOrientation tilt bias on placement probability, or DOM labels floating above markers.
