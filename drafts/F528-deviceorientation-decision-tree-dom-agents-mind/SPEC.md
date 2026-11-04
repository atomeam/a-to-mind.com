# F528 DeviceOrientation Decision-Tree DOM Agents Mind

## Concept
Novel combination: DeviceOrientation (tilt as causal environmental signal, pointer velocity fallback) drives a population of local tiny decision trees (non-neural, axis-aligned splits on [tiltX, tiltY, pointerDx, pointerDy, localDensity]). Each tree outputs velocity bias and style modulation for an absolute-positioned Verse DOM agent card. Agents compete for spatial territory (coverage + low collision + center bias fitness). On contact or button, the higher-fitness agent's tree genome is sealed (SHA-256 hash of the serialized splits + leaves + fitness) and posted via BroadcastChannel; receivers adopt a mutated copy only if the hash verifies and local fitness is lower. Full population seals to IndexedDB for offline restore. Pure local JS + DOM physics, no WebGPU, no neural nets, no continuous fields, no NCA. Fully offline after load.

This deliberately leaves the recent cluster of WebGPU continuum/discrete physics kernels (CA-rule, sandpile, embedding diffusion, PSO, Langton's ant, attention weaver) combined with local MLP/RNN policies and sensor-driven DOM probes (orientation genome, speech RNN, accel RNN, XR hand RNN). Decision-tree rule policies as the local model, with DeviceOrientation as the primary causal input to a non-neural architecture and sealed tree-genome multi-tab transfer, is previously unused.

## Architecture
- Single self-contained index.html.
- 6 Verse agent cards (absolute, CSS transforms, neon borders, fitness glow).
- Input: DeviceOrientationEvent (alpha/beta/gamma → normalized tilt) + pointer deltas; permission button.
- Policy: per-agent decision tree (depth 3, 7 nodes: 3 splits + 4 leaves); splits on feature thresholds, leaves emit [vx, vy, hueShift, scale].
- Physics: velocity += tree_output * scale + soft repulsion from neighbors + damping; position update via CSS left/top.
- Fitness: territory (unique cells covered in a coarse grid) + inverse collisions + proximity bonus.
- Transfer: BroadcastChannel 'f528-trees'; on collision or seal button, post {hash, tree, fitness}; listeners verify hash and adopt if better.
- Seal: crypto.subtle.digest SHA-256 on JSON.stringify(tree + metrics) → IndexedDB object store 'f528'.
- Status: orientation support, agent count, last seal, avg fitness.

## Expected outcome
Interactive spatial mind: tilt the device (or move pointer) and agents move according to their decision-tree rules, competing for space; cards morph and glow with fitness; sealing and multi-tab genome transfer works; runnable offline; graceful pointer-only fallback.

## Mechanics
- Orientation: request permission on gesture; low-pass filter tilt.
- Tree forward: traverse from root on current features.
- Mutation on adopt: randomly perturb one threshold or leaf value.
- Seal on button or double-click highest-fitness agent.
- Progressive: if no orientation, pure pointer mode.

## Failure modes
- DeviceOrientation denied or unsupported → pointer-only, status note.
- BroadcastChannel or IndexedDB blocked → local only, unattested toast.
- Too much motion → clamp velocities.
- Private mode → in-memory only.

## Next building blocks
- Evolve tree structure (add/remove nodes) on transfer.
- OPFS persistence of full population histories.
- WebXR gaze as an additional feature input to the trees.
- Hybrid with a tiny MLP leaf for continuous output.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations plus sensor-driven agents (F520–F527).

**Void is now Verse everywhere.**
