# F776 WebXR-Ready Orientation MLP CSS3D Agent Swarm Mind

## Concept
A pure-DOM spatial multi-agent system on The Verse canvas. 8–12 absolute-positioned CSS 3D transformed agent cards each carry their own local feed-forward MLP. Causal inputs are DeviceOrientation (beta/gamma), relative vector to nearest neighbor, and pointer proximity. Outputs are velocity deltas, rotation rates, and scale/hue biases. Agents compete on a fitness that rewards spatial diversity + pointer “attention” dwell time. Highest-fitness genome is sealed (weights copied to others + persisted in IndexedDB) and optionally broadcast via BroadcastChannel for multi-tab sharing. Progressive enhancement: if WebXR is available, hand/gaze positions become additional causal inputs that “pinch” agents toward the hand. Fully offline after load; no canvas continuum kernel.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum PDE/field kernels (Kuramoto phase oscillators F770, Biot-Savart magnetic fields F773, SDF metaball raymarchers F774, Cahn-Hilliard, wave dampeners, LBM/SPH/N-body, spectral, Lenia, Physarum, etc.) with MLP parameter control and DOM as passive or sampling portals. Core novel combination is pure hybrid CSS 3D embodiment (agents *are* the physical UI elements under continuous local MLP control) driven by DeviceOrientation as primary causal input, with competitive sealed genome transfer over IndexedDB + BroadcastChannel, and optional true WebXR hand/gaze injection into the same MLP. Not a field simulation, not particles on canvas, not NCA, not softbody springs, not spectral residuals.

## Architecture
- Single self-contained index.html
- 10 agent DOM elements (absolute, perspective CSS 3D)
- Each: 8→12→6 MLP (orient + relative pos + pointer + optional XR hand → vx, vy, rot, scale, hue)
- Physics: simple Euler integration with soft collision repulsion
- Fitness: inverse density + pointer dwell
- Seal button + auto-seal on high fitness
- IndexedDB persistence; BroadcastChannel for peer genome
- WebXR session optional (hand tracking if supported)
- Fallback: pointer + orientation only

## Mechanics
1. Load: spawn agents with random MLPs, restore sealed genome if present.
2. Each frame: read orientation / pointer / XR hands → MLP forward → integrate motion → update CSS transforms.
3. Pointer drag or hover rewards nearest agent.
4. Seal: copy best weights, store, broadcast.
5. Optional: enter WebXR immersive-ar or inline to inject hand positions.

## Expected outcome
Open: floating 3D cards drift, rotate, and recolor under device tilt. They repel and cluster. Pointer “feeds” nearby agents. Seal locks a successful spatial policy. Works offline. WebXR hand can grab/influence if available.

## Failure modes
No orientation: pointer-only. No XR: seamless fallback. IDB blocked: session memory. Low FPS: fewer agents.

## Building blocks
Reusable pure-DOM CSS3D agent swarm with per-agent MLP, orientation-causal policy, sealed IndexedDB+BroadcastChannel genome, progressive WebXR hand input. Expands for next XR-native hybrid embodiments.

Void is now Verse everywhere.
