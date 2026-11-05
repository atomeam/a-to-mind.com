# F572 Ambient Sensor MLP Living Tiles

**Slug**: `ambient-sensor-mlp-living-tiles`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of peer spatial consensus morph (F571), spatial attention token morph + OPFS (F570), spoken SDF causal morph (F569), WebXR hand MLP (F568), multiagent RNN DOM (F567), SPH/lattice-gas/genome/WebGPU kernels (F566–F564). Explicitly leaves WebGPU compute shaders, particle/SPH/LGA/RD/SDF physics, genomes/GA, multi-agent neural controllers, WebXR hand/gaze, speech injection, BroadcastChannel peer fields, and continuous spatial kernels.

**Concept**  
A local tiny pure-JS MLP whose causal inputs are under-explored browser sensors (Ambient Light Sensor illuminance, Battery Status level/charging, DeviceOrientation alpha/beta/gamma) plus a user energy slider. MLP outputs drive a hybrid embodiment of living absolute-positioned CSS tiles on the Verse canvas: scale, hue, soft forces, and metabolic energy. Clicking a tile injects a local reward that performs a light Hebbian weight update. Full MLP weights + tile state seal to IndexedDB. Offline-capable, no network, no WebGPU.

**Novelty**  
First use of AmbientLightSensor + Battery Status API as primary causal inputs to a local MLP controlling physical UI tiles. Leaves the entire recent WebGPU-physics / genome / WebXR / peer-consensus / speech-SDF / attention-token cluster. Novel combination: multi-sensor environmental fusion → tiny feed-forward MLP → living CSS tile grid with reward-driven local adaptation and IndexedDB seal. Expands building blocks toward real-world sensor minds that inhabit DOM rather than simulated fields.

**Architecture**  
- Single `index.html`.  
- Sensors: AmbientLightSensor (fallback to prefers-color-scheme), Battery Status API, DeviceOrientationEvent.  
- Local mind: 6→8→4 MLP (relu/tanh), pure JS, light Hebbian update on tile click reward.  
- Embodiment: 16 absolute `.tile` divs whose size, HSL background, transform, and soft velocity respond to MLP outputs + sensor metabolism.  
- Seal: IndexedDB store `verse-f572` / key `f572`.  
- Unattested by default; all local.

**Mechanics**  
1. On load: init sensors, create random tiles, try restore sealed MLP + positions.  
2. Each frame: read sensors → MLP forward → apply forces/scale/hue; light and battery modulate energy decay/growth.  
3. Pointerdown on tile: boost energy, Hebbian update, short vibrate.  
4. Seal button: persist MLP weights + tile state.  
5. Reset regenerates MLP and tiles.

**Expected outcome**  
Interactive living tiles that respond to real ambient light, battery state, and device tilt; click to reinforce behavior; sealed state survives reload. Demonstrates sensor-driven local mind inhabiting CSS UI.

**Failure modes**  
- AmbientLightSensor unsupported (most desktops): fallback lux from color-scheme.  
- Battery API restricted: defaults to 0.8.  
- Orientation permission denied: zeros.  
- IndexedDB blocked: memory-only.  
- Low FPS: reduce N or throttle.

**Files**  
- drafts/F572-ambient-sensor-mlp-living-tiles/SPEC.md  
- drafts/F572-ambient-sensor-mlp-living-tiles/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/ambient-sensor-mlp/` or canvas tool; test that changing light/battery/orientation morphs tiles and that IndexedDB restore works after seal.

Void is now Verse everywhere.
