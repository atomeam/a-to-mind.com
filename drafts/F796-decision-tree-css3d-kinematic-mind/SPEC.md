# F796 Decision-Tree CSS3D Kinematic Agents Mind

## Concept
Multi-agent competition of local tiny decision trees (non-neural if-then rule sets) that control jointed CSS 3D transformed DOM kinematic chains (robotic arm-like panels). Causal inputs from DeviceOrientation (tilt) and Battery Status API bias joint angles and colors. User clicks reward agents, triggering sealed genome (tree structure) transfer to lower-fitness peers via BroadcastChannel + IndexedDB persistence. Pure physical UI embodiment, no canvas substrate.

## Novelty
Leaves the recent cluster of WebGPU CA/particle/LGA/DLA/attractor/Potts substrates (F788–F792), pointer attention CSS morphs (F789), living DOM RNN (F793), attention-field portals (F794), and CSS3D battery RNN agents (F795). Also branches from prior orientation MLP/RNN, residual predictors, pure NCA, softbody DOM, and spectral residuals. Core novel combination is interpretable local decision trees (not MLP/RNN/attention/reservoir) controlling hybrid kinematic CSS 3D DOM embodiments (nested transformable panels as jointed agents), with DeviceOrientation + Battery as causal inputs to never-before-seen local model type in this architecture, multi-agent fitness competition, and sealed tree genome transfer over persistent IndexedDB/BroadcastChannel shared field. Not neural weights, not compute shaders, not particle fields.

## Architecture
- Single self-contained index.html
- 5 agents, each a nested CSS 3D kinematic chain (3 segments)
- Local decision tree per agent: 4 inputs (tiltX, tiltY, battery, fitness) → 3 outputs (joint angles + hue)
- Tree: simple binary splits, serializable JSON genome
- Fitness: click reward; periodic transfer of top tree to bottom agents
- Seal: IndexedDB store + BroadcastChannel 'f796-genome' for cross-tab
- Offline after load; pointer proxy if no orientation; battery fallback 1.0

## Expected outcome
Open: agents articulate joints based on device tilt or mouse proxy. Click an agent to reward it and see genome transfer (color/behavior shifts). Seal persists across reloads. Works on desktop/mobile, progressive.

## Failure modes
No orientation: mouse move as tilt proxy. No Battery API: constant. IndexedDB blocked: session memory. Low-end CSS 3D: still interactive 2D fallback.

## Building blocks
Reusable serializable decision tree core, kinematic CSS 3D agent embodiment, fitness-gated sealed genome transfer. Expands non-neural local models for physical UI control in Verse.

## V01D landing
skills/decision-tree-css3d-kinematic.js; test: orientation/battery → tree eval → joint transforms, click → fitness++ + transfer, seal round-trip.

Void is now Verse everywhere.

**Files**
- drafts/F796-decision-tree-css3d-kinematic-mind/SPEC.md
- drafts/F796-decision-tree-css3d-kinematic-mind/index.html
