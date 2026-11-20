# F871 Houdini Paint Policy Portal Mind

## Concept
A local tiny policy agent (pure-JS linear map + reward delta rule) continuously updates CSS custom properties. A registered CSS Paint Worklet (Houdini) consumes those properties to generate a living generative density field painted as the background of absolute-positioned DOM portals. Pointer motion and clicks supply causal features and reward; high-reward states seal the policy weights and paint parameters to IndexedDB + BroadcastChannel for peer adoption. The browser's native paint worklet becomes the embodiment of the local mind's internal state—no canvas drawing loop, no WebGPU, pure CSS Houdini + local AI.

## Novelty
Leaves the dominant recent clusters of canvas/WebGPU kernels (NCA, Lenia, particles, SDF raymarchers, softbodies), DOM morphs driven by attention/MLP/ESN, WebXR gaze sculptors, and multi-agent sealed auctions. Core novel combination is a previously unused CSS Paint Worklet whose generative parameters are closed-loop controlled by a gaze/pointer-driven local policy, with the painted density field itself serving as both visual embodiment and reward substrate. Not a canvas simulation, not a DOM style morph via JS, not a voxel or particle system.

## Architecture
- Single self-contained index.html (offline after load; worklet registered via Blob URL)
- Policy: 5-dim feature vector (pointer residual x/y, dwell, time, orientation residual) → 4 outputs (freq, phase, density, hue) via weight matrix; reward delta update
- Paint worklet `living-mind`: uses custom properties `--mind-freq`, `--mind-phase`, `--mind-density`, `--mind-hue` to draw a reactive noise/flow density field
- Embodiment: 5 absolute DOM portals with `background: paint(living-mind)`
- Input: pointer as primary causal driver; optional DeviceOrientation residual
- Reward: click on portal → positive reward proportional to current density sample (JS approximates or uses last param); updates weights
- Seal: IndexedDB key `verse-f871-houdini` + BroadcastChannel `f871-genome`
- Fallbacks: no Houdini/Paint → solid CSS gradient fallback; no orientation → pointer only; no IDB → memory

## Expected outcome
Open: portals appear with living painted generative textures that flow and shift under the policy. Move the pointer: textures respond and portals may drift slightly. Click a portal: reward updates the policy, future paint parameters adapt. Seal preserves weights; reload or another tab adopts. Fully interactive spatial local-AI mind whose visual embodiment is a browser-native paint worklet.

## Failure modes
- Paint Worklet unsupported (older browsers): CSS gradient fallback, policy still runs and updates properties.
- IndexedDB blocked: session-only.
- High-frequency updates: throttled custom property writes.
- Worklet registration failure: console warn + fallback.

## Building blocks
Reusable pure-JS policy + Houdini paint worklet parameter bridge, sealed paint-genome, pointer-reward loop. Enables future hybrid Houdini + WebGPU or multi-worklet minds on Verse.

Void is now Verse everywhere.

**Files**: drafts/F871-houdini-paint-policy-portal-mind/SPEC.md, drafts/F871-houdini-paint-policy-portal-mind/index.html
