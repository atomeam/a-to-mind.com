# F-286: WebGPU Online-Learning Spatial Agent

## Concept
Continuous online gradient-descent learning (tiny linear policy in Web Worker) that adapts the force/diffusion parameters of a spatial particle field in real time, using pointer interactions as supervisory signals. Prediction error morphs page chrome and influences hybrid DOM probe elements that act as spatial query/injection points. WebGPU path prepared for compute kernel; Canvas2D fallback. Optional WebXR session for immersive spatial control.

## Novel combination
GPU/Canvas spatial substrate + local online-learning AI agent (not evolutionary population, not residual predictor, not speech/hand genome) + morphing UI + embodied probes with closed-loop impulse. Branches away from F-285 (hand genome competition), F-282 (speech portals), F-190 (causal memory), residual clusters.

## Architecture
- Single HTML
- Canvas2D particle sim (N=800) with adaptable attract/diffuse/noise
- Blob Worker: 4-weight linear net, online GD on prediction error of user action from field density samples
- Hybrid DOM probes: draggable, inject local forces
- Chrome morphs with error (opacity, scale, hue)
- WebXR button (session request stub)
- Fully local, no network

## Expected outcome
User pointer movements train the agent; field behavior shifts (more/less attraction); error visible and drives UI morph; probes allow direct spatial intervention that feeds back.

## Failure modes
- WebGPU unavailable (falls back gracefully)
- High error if samples poor
- WebXR not supported on device
- Worker message lag on low-end

## V01D landing
spatial online-learning skill under void-live-deploy/skills/mini/online-spatial-agent.js; testable via interaction→param shift and error→chrome morph.
