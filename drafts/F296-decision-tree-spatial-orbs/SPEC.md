# F296 — Decision Tree Spatial Orbs

## Concept
A spatial particle field (Canvas2D primary, WebGPU compute path prepared) whose clusters form "orbs". User pointer gestures are featurized (position, velocity, local density) and fed to a local incremental decision tree running in a Web Worker. The tree classifies each gesture into actions (attract, repel, morph, persist, split). Classification steers particle forces and spawns or morphs floating DOM orbs that visualize the active decision path (branch labels as nested or connected elements). Champion tree (serialized nodes) persists to IndexedDB. Fully offline after load; progressive enhancement (pointer always works; orientation optional bias).

Deliberately branches from recent genome-transfer arenas, reservoir/echo lattices, self-listening spectral loops, residual predictors, NCA, WebXR hand/gaze primary, orientation-as-gravity, fluid/softbody, and pure MLP policies (F280–F295). Core novelty is the local decision-tree reasoning substrate (rule extraction from interaction features) controlling a spatial orb field + dynamic DOM visualization of the decision path + sealed growing tree.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Canvas2D: ~80 particles with attract/repel based on tree action; density sampling.
- Worker: incremental decision tree (simple binary splits on 4 features); grows on labeled examples from user "reward" clicks or implicit fitness.
- DOM orbs: 3–5 absolute cards; content and position reflect current classification and tree depth; lerp to cluster centroids.
- IndexedDB: seal/load serialized tree + generation.
- WebGPU: optional compute shader stub for particle update if available (fallback silent).
- Offline first; no permissions required beyond optional orientation.

## Expected outcome
Runnable interactive prototype. Move pointer: particles respond according to tree classification; orbs appear/morph showing the decision path. Click an orb to label/reward the current path, growing the tree. Seal persists the tree. Load restores reasoning. Offline-capable. Expands local symbolic decision-tree minds + spatial orb embodiment + path-visualizing physical UI + sealed incremental knowledge building blocks.

## Mechanics
1. Pointer features extracted each frame (x, y, dx, dy, density).
2. Worker evaluates tree → action label.
3. Particles integrate force based on action; clusters form orbs.
4. DOM orbs update labels/transforms from path; click rewards and adds example to tree.
5. Seal button stores tree JSON to IndexedDB; load restores.

## Failure modes
- No Worker → main-thread tree (slower).
- No IndexedDB → in-memory only.
- Small screens → fewer orbs, larger hit areas.
- No WebGPU → Canvas2D fully functional (primary).
- Tree grows too deep → prune low-utility leaves.

## Cross-reference
Avoided genome contact transfer, reservoir computing, spectral self-listening, residual morphs, NCA, WebXR, orientation-as-primary, fluid physics, MLP as core. Novel combination of local decision-tree classification of spatial gestures + particle orb field + dynamic DOM decision-path visualization + sealed incremental tree.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/decision-tree-spatial-orbs.js`; test: pointer produces classification, orb morphs with path, reward grows tree, seal/load restores nodes.
