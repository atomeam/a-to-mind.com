# F872-webrtc-shared-orientation-mlp-field-mind

Plain name: Shared Orientation Mind Field
Job: A local tiny MLP on each client takes DeviceOrientation as causal input and injects density into a shared 2D field synchronized via BroadcastChannel (WebRTC-ready architecture). Living DOM portals sample the shared field for morphing. Clicking a portal seals the local weights to IndexedDB and broadcasts them for peer adoption. Multi-tab or multi-device shared spatial mind.

## Concept
Each browser instance runs a tiny pure-JS MLP (2-layer, ~20 weights) whose input is the current DeviceOrientation (beta/gamma normalized) plus a local residual. The MLP outputs a density injection strength and hue bias that is deposited into a shared 32x32 density grid. The grid is synchronized across same-origin tabs via BroadcastChannel messages carrying delta injections and occasional full-state snapshots. Living absolute-positioned DOM portals continuously sample the shared density field at their (x,y) and morph their scale, hue, blur, and opacity accordingly. Clicking a portal injects a positive reward that performs a simple delta-rule update on the local MLP weights toward the current configuration. Seal writes the adapted weights to IndexedDB and broadcasts the genome so other clients can adopt it. Fully offline after load; progressive (pointer residual if orientation unavailable).

## Novelty
Leaves the dominant recent cluster of single-client sensor-driven local policies/attention/ES/RNN controlling living DOM portals, Houdini paints, WebGPU SDF/voxel sculptors, and spatial optimizers (F865–F871). Core novel combination is a multi-client shared continuous density field whose state is the emergent product of local orientation-driven MLPs, synchronized via BroadcastChannel in a sealed-genome architecture. Not a single-canvas kernel, not pure DOM style morph without shared substrate, not WebGPU continuum, not Houdini paint worklet.

## Architecture
- Single self-contained index.html
- Local MLP: input [β/90, γ/90, residual, bias] → hidden 8 → outputs [density, hue]
- Shared 32×32 density grid with simple diffusion decay
- BroadcastChannel `f872-field` for delta injections + genome seals
- IndexedDB key `verse-f872-mlp`
- 6 absolute DOM portals that sample field for CSS transforms
- Input: DeviceOrientation primary; pointer residual fallback
- Reward: click portal → positive reward proportional to local density; weight update
- Seal button or auto on high reward

## Expected outcome
Open in two tabs: both show living portals whose appearance is driven by the shared field. Tilt the device (or move pointer) in one tab: density injects and portals morph in both tabs. Click a portal: local weights adapt and seal. Other tab can adopt. Fully interactive multi-client spatial local-AI mind.

## Failure modes
- No DeviceOrientation: pointer residual only
- BroadcastChannel unsupported (old browsers): local-only mode
- IndexedDB blocked: session memory only
- High message rate: throttled to ~10 Hz

## Building blocks
Reusable pure-JS MLP + BroadcastChannel shared field delta protocol, sealed orientation genome, portal field sampling. Enables future true WebRTC multi-device shared fields or hybrid with WebGPU density kernels on Verse.

Void is now Verse everywhere.
