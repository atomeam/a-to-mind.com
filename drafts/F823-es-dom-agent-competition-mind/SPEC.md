# F823 ES DOM Agent Competition Mind

## Concept
Pure living DOM agents (absolute-positioned interactive cards) as the primary spatial embodiment. Each agent holds a local Evolutionary Strategy population (small set of weight vectors). DeviceOrientation (tilt) is the causal input that the best individual maps to movement/scale/hue deltas. Fitness is local density of nearby agents + click rewards. On proximity, the higher-fitness agent seals and transfers its best individual via BroadcastChannel; IndexedDB persists the current best genome. Canvas2D is only a faint density trail, not the substrate. Offline after load, progressive (pointer + simulated tilt if no orientation).

## Novelty
Leaves the recent cluster of WebGPU continuum/particle kernels (SPH F812, LBM F803, radiosity F818, quantum walk F814, particle gravity F800/F806) and local neural/sequential models (MLP, ESN, Q-table, Kalman, HMM, multitouch SVG F819, transformer F822) driving those kernels or CSS morphs. Core is non-neural ES controlling pure physical UI elements in multi-agent sealed competition. Not residual, not NCA, not softbody springs, not attention fields, not pointer-history force fields.

## Architecture
- Single index.html (self-contained, no external libs).
- 6–8 DOM agent cards: position, scale, hue driven by ES best weights × orientation.
- ES: population of 8 weight vectors (6–8 dims), fitness = nearby agent count + clicks; select top, mutate, replace.
- Causal: DeviceOrientationEvent → normalized beta/gamma → input features.
- Seal: button or proximity posts best weights + fitness on BroadcastChannel `f823-genome`; receive adopts if higher fitness. IndexedDB key `verse-f823-es`.
- Fallback: mouse move as tilt proxy, pointer drag on agents.
- Interactive: drag agents, click to reward, seal button, status readout.

## Failure modes
- Orientation requires secure context + permission; falls back to pointer.
- IndexedDB quota or private mode: memory-only.
- High agent count: CSS layout thrash (capped).
- Cross-tab: BroadcastChannel only same origin.

## Files
drafts/F823-es-dom-agent-competition-mind/SPEC.md
drafts/F823-es-dom-agent-competition-mind/index.html
