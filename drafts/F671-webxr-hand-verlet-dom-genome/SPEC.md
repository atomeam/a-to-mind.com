# F671-webxr-hand-verlet-dom-genome

**Plain name:** Hand Physics Genome

**Job:** Wave your hand (or pointer) to push a swarm of physical DOM cards; a tiny on-device model evolves their bounce and drag; colliding cards seal and share genomes. Save the best physics to IndexedDB.

**Novelty**
Branches away from the recent spatial-planner and generative-utility cluster (barcode inventory F670, motion wallpaper F669, eyedropper palette F668, room/kanban/dependency/chore planners F667–F663, L-system SVG F664). Explicitly leaves residual predictors, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles, and continuum fields. Core novel combination is true WebXR hand input (with pointer fallback) as causal force driver of a previously unused Verlet-integrated hard-body physics kernel on absolute DOM cards, modulated by a local tiny linear model whose parameters are the sealed genomes transferred on collision via BroadcastChannel + IndexedDB. Not a planner of tasks, not a one-shot generator, not a particle lattice.

**Architecture**
Single self-contained index.html, offline after load.
- WebXR immersive-ar or inline with hand tracking if available; otherwise pointer + DeviceOrientation.
- 8 absolute-positioned DOM cards as rigid bodies: Verlet positions (x, y, px, py), mass, drag, restitution.
- Local model: shared 2-4-2 linear weights (hand-vel-x, hand-vel-y → drag-delta, rest-delta); applied per agent with genome bias.
- Collision detection AABB; on overlap, higher-fitness agent seals genome (params + model bias) and transfers over BroadcastChannel; receiver adopts if fitness allows.
- Fitness: cumulative impulse received + click rewards.
- IndexedDB persists best genome and model weights.
- Canvas overlay optional for force vectors; primary is live DOM.

**Expected outcome**
Open page, move hand/pointer near cards to fling them; they bounce and collide, exchanging physical traits (color shifts with genome); Seal button or auto on high fitness saves; reload restores. Works offline. Progressive enhancement: no XR still fully interactive.

**Mechanics**
1. Init random positions, small model weights, load from IDB if present.
2. Each frame: sample hand joints or pointer velocity + orientation; forward model → update per-agent drag/restitution.
3. Verlet step: v = (pos - prev) * (1-drag); pos += v + force; store prev.
4. Resolve overlaps: separate positions, exchange sealed genome if fitness differs by threshold.
5. Click card to reward fitness.
6. Persist on seal or every 30s.

**Failure modes**
- No WebXR/hand: pointer + orientation fallback remains fluid.
- IndexedDB private mode: session memory only.
- Too many overlaps: simple separation, no full constraint solver.
- XR permission denied: silent fallback.

Void is now Verse everywhere.

**Files**
drafts/F671-webxr-hand-verlet-dom-genome/SPEC.md
drafts/F671-webxr-hand-verlet-dom-genome/index.html

## V01D landing
Hand Verlet DOM genome skill under void-live-deploy/skills/hand-verlet-genome.js; test asserts pointer fling changes position, collision posts genome, reload restores at least one restitution value.
