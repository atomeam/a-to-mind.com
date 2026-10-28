# F300 — Orient-Causal MLP Physical DOM Agents

## Concept
DeviceOrientation (beta/gamma tilt) as the primary causal input to a population of local tiny MLPs (one per agent). Each MLP (4→8→2) outputs a 2D force. Agents are pure physical DOM elements (absolute-positioned circular divs) with simple Euler physics, damping, bounds, and mild inter-agent repulsion. Canvas background visualizes the orientation vector. User can drag agents; Seal writes the highest-fitness MLP weights to IndexedDB; Transfer injects a mutated copy into a random agent.

## Branch away from
Attention message-passing graphs (F298), Hebbian kernels (F297), residual trajectory morphs (F284), online-learning spatial agents (F286), WebXR hand genome competitions (F285), speech-RNN portals (F282), hum-crystal audio (F299), and prior residual/attention/spectral/pointer-history clusters.

## Novelty
Local tiny models that directly control the physical dynamics of real DOM UI elements, driven by DeviceOrientation as the sole causal channel. Hybrid DOM+canvas embodiment. Sealed genome transfer. Fully offline after load.

## Architecture
- Single self-contained `index.html`
- Canvas2D background (orientation arrow + agent glows)
- 6 absolute-positioned DOM agents
- Pure JS MLP forward passes (no Worker needed for this scale)
- IndexedDB for genome seal
- Mouse proxy when DeviceOrientation unavailable
- Progressive, no external deps

## Interaction
- Tilt phone / move mouse → forces on agents
- Drag agents to reposition
- Seal Best Genome / Transfer to Random / Reset

## Failure modes
- DeviceOrientation requires HTTPS + user permission on some browsers
- No IndexedDB → seal is memory-only
- High N would need spatial hash; kept small for reliability

## Building blocks for next
True WebGPU compute force kernel for many DOM proxies, WebXR hand as additional input channel, WebRTC multi-user genome broadcast, larger RNN controllers.
