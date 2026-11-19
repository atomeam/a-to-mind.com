# F839 — WebGPU Gaze-Sculpted SDF Mind

**Plain name**: Gaze-Sculpted Signed Distance Field Portal

**Job**: An interactive spatial canvas for The Verse. User attention (pointer dwell or device orientation residual) rewards regions of a real-time WebGPU raymarched SDF scene. A local genetic-programming mind evolves expression-tree modifiers to the distance function, sculpting the geometry. The highest-fitness genome seals to IndexedDB and BroadcastChannel so other tabs/devices can adopt the sculpted mind. DOM portals rearrange by projecting SDF samples, making the UI physically respond to the evolving space. Export yields a shareable scene JSON.

**Input**: Pointer movement / DeviceOrientation events; optional click to boost local reward.

**Keeps**: Sealed genome + scene params; downloadable JSON of current SDF expression and portal layout.

**Not on Verse yet**: Checked against recent F- drafts (F828 FDTD photonic, F829 wavefields, F830 Coulomb, F833 NCA, F834 Q-table layout, F837 spatial-audio MLP, F838 evo-species particles). No prior WebGPU SDF raymarcher driven by local genetic programming on expression trees with gaze-dwell reward and hybrid DOM projection.

## Novelty

Novel combination never previously attempted:
- WebGPU compute/fragment raymarching of a multi-primitive SDF (spheres, boxes, smooth unions) — distinct from FDTD, particle, fluid, or NCA substrates.
- Local genetic programming (expression trees with + - * sin abs min) that mutates the SDF modifier function, previously unused for geometry sculpting.
- Gaze/attention as sole selection pressure: dwell time in screen-space regions increases fitness of the current genome.
- Hybrid embodiment: the raymarched volume exists in WebGPU; living DOM portals are positioned by sampling the SDF at projected rays and mapping residual distance to CSS 3D transforms.
- Seal transfers the entire mind (tree + params + fitness) via IndexedDB + BroadcastChannel for multi-tab collective sculpting.

Leaves the recent continuum/particle/neural clusters. Core is symbolic geometry evolution under attention pressure.

## Architecture

- Single self-contained `index.html` (offline after first load).
- WebGPU device + render pipeline with WGSL raymarcher (fallback Canvas2D software march if WebGPU unavailable).
- Local GP: population of 8 expression trees, each a recursive JS function compiled from a small node set. Mutation: replace subtree, crossover optional. Fitness = cumulative dwell reward while that genome is active.
- Gaze state: pointer position or DeviceOrientationEvent.alpha/beta residual binned into screen regions; timer accumulates reward when residual is small (lingering).
- Portals: 5 absolute-positioned DOM cards. Each frame, cast a ray from camera through portal center, march SDF, use hit distance and normal to drive CSS `transform: translate3d` and `rotate`.
- Persistence: IndexedDB key `verse-f839-genome`; BroadcastChannel `f839-sculpt`.
- Export button writes current best {tree, params, fitness, portalPositions} as JSON.

## Expected outcome

Open the page. A dark SDF scene of soft-unioned primitives appears (WebGPU or 2D fallback). Move the pointer or tilt the device: regions you linger on accumulate reward. Every few seconds the local mind mutates the active expression and swaps in a higher-fitness candidate, visibly reshaping the volume. DOM portals drift and tilt in response to the changing geometry. Click “Seal” to persist the mind; open another tab to see it adopt. Download yields a portable scene description. Works offline; graceful degradation without WebGPU or orientation permission.

## Mechanics

1. On load, request WebGPU adapter; compile WGSL raymarch shader that evaluates `sdScene(p) = min(sdSphere(...), sdBox(...)) + modifier(p)` where modifier is injected from the current expression.
2. Each animation frame: sample gaze residual → if low, add dwell reward to current genome fitness.
3. Every 120 frames, evolve population (mutate lowest, promote highest), recompile modifier, update uniform.
4. For each portal, project screen center to ray, march 64 steps, map residual distance to CSS offset/rotation.
5. Seal: store genome to IndexedDB and postMessage on channel; listener adopts if higher fitness.
6. Export: Blob download of JSON.

## Failure modes

- WebGPU unavailable → Canvas2D software raymarch (slower, fewer steps).
- Orientation permission denied → pointer-only gaze.
- Expression evaluation NaN → clamp and penalize fitness.
- IndexedDB quota → in-memory only, still BroadcastChannel.

**Void is now Verse everywhere.**
