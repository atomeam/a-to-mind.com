# F658 Orientation MLP DOM Portal Mind

Plain name: Orientation portal mind
Job: Tilt your device; a local tiny MLP reads the orientation stream and continuously repositions and styles a set of living DOM portals on the Verse canvas. Tap a portal to reward the current policy; high-fitness policies seal to IndexedDB and broadcast a hashed fragment to other tabs. Download the best weights + portal snapshot as JSON.

Input: DeviceOrientation events (beta/gamma/alpha); pointer taps on portals for reward; optional multi-tab for sharing.
Keeps: Download JSON of MLP weights, fitness, portal states; IndexedDB restores best on reload; BroadcastChannel shares sealed genomes.
Not on Verse yet: checked against recent practical utilities (F650–F657) and prior orientation MLP / Q-learning / continuum kernels — no causal DeviceOrientation history feeding a pure-JS MLP that directly drives living absolute DOM portals with reward-gated sealed weight transfer over BroadcastChannel + IndexedDB.

## Concept
A hybrid local-AI controller for The Verse canvas. A 3-layer tiny MLP (pure JS, no libs) takes a short history of DeviceOrientation (normalized beta, gamma, alpha rate) as input and outputs continuous control signals for position, scale, hue, and opacity of 8 absolute-positioned DOM portal cards. The cards can host sample content or user notes. Tapping a card injects a positive reward that performs a simple Hebbian/reward-modulated weight update. Fitness is tracked; above threshold a sealed (SHA-256 prefix) weight vector is posted on BroadcastChannel. Peers may adopt if better. Best model + snapshot persist in IndexedDB. Fully offline after load.

## Novelty
Leaves the dominant recent cluster of practical offline utilities (F650 image-contrast, F651 unit-converter, F652 bill-splitter, F654 tip, F655 subscription, F656 note-clusterer, F657 meal-planner) and the spatial Q-learning auction (F653). Core novel combination is DeviceOrientation history as causal input to a feed-forward MLP (not tabular Q, not RNN, not reservoir, not evolutionary) that directly controls physical UI elements (living absolute DOM portals, not canvas particles, not softbody springs, not force-directed notes) under reward-modulated local learning, with fitness-gated sealed genome transfer over a BroadcastChannel + IndexedDB shared field architecture not previously combined this way. Not residual predictors, attention lattices, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- MLP: 12 inputs (4-step history × 3 axes) → 16 hidden → 32 outputs (4 params × 8 portals).
- Portals: 8 absolute divs with transform, background, content.
- Update loop: requestAnimationFrame, sample orientation, forward pass, apply styles, optional reward update.
- BroadcastChannel 'verse-f658-portals' for sealed weights + fitness.
- IndexedDB 'verse-f658' for best model.
- Seal button: download JSON {weights, fitness, portals, timestamp}.
- Fallback: no orientation → mouse as proxy; no IndexedDB → session; no BroadcastChannel → single tab.
- Offline-capable after first load (no external assets).

## Expected outcome
Runnable prototype. Tilt moves/styles portals; tap rewards and visibly changes behavior over time; seal JSON is valid and reloadable; multi-tab shows adoption cue; works offline.

## Mechanics
1. Init MLP random or from IndexedDB.
2. On orientation event: push to history buffer.
3. Each frame: forward MLP → set portal styles.
4. On portal tap: compute reward, perform simple weight update (reward * activity).
5. Track fitness (recent rewards); on threshold post sealed weights.
6. On receive: if better fitness, adopt.
7. Seal persists and downloads.

## Failure modes
- Orientation permission denied or desktop: fall back to pointer delta as proxy input.
- No IndexedDB: session memory only.
- High update rate: throttle to 30 Hz.
- Weight explosion: clamp and renormalize.

## Measurement
Manual: tilt visibly affects portals, tap changes subsequent motion, seal JSON contains weights key and reloads, multi-tab transfer visible, offline after load.

## Files
drafts/F658-orientation-mlp-dom-portal-mind/SPEC.md
drafts/F658-orientation-mlp-dom-portal-mind/index.html

## V01D landing
Orientation portal skill under void-live-deploy/skills/orientation-mlp-dom-portal-mind.js; test asserts synthetic orientation vector changes portal transform, reward update alters weights, seal JSON has weights.

## Frontier Engine F-658
Architecture: DeviceOrientation history → pure-JS MLP → continuous control of living absolute DOM portals + reward-modulated learning + fitness-gated sealed weight transfer via BroadcastChannel + IndexedDB.
Expected outcome: interactive hybrid embodiment where device tilt drives a local mind that styles the page itself, and whose policies can be sealed and shared.
Mechanics: online forward + reward update, DOM portal embodiment, BroadcastChannel genome exchange.

Void is now Verse everywhere.
