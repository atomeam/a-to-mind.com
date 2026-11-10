# F653 Spatial Q-Learning Auction DOM Agents

Plain name: Spatial auction mind
Job: DOM agent cards compete to claim resources on a live spatial grid using local tabular Q-learning; pointer injects demand or rewards; multi-tab BroadcastChannel shares positions and fitness-gated sealed Q-tables; seal downloads best policies + grid snapshot as JSON, restored from IndexedDB.
Input: Pointer clicks/drags to inject resources or reward agents; optional tilt for bias; multi-tab open for competition.
Keeps: Download JSON of best Q-tables, agent states, grid snapshot; IndexedDB restores best on reload; share via BroadcastChannel live.
Not on Verse yet: checked against recent F- (practical tools F641–F652, continuum LBM/Gray-Scott/n-body F644/F648/F649) — no discrete multi-agent Q-learning auction on a shared spatial resource lattice with living DOM bidders and sealed policy transfer.

## Concept
A discrete spatial market for The Verse canvas. A 16×16 resource grid (Canvas2D) holds depleting claimable value. 6 absolute-positioned DOM agent cards are controlled by independent local tabular Q-learners (state: local 3×3 resource + own position bin; actions: move N/S/E/W or Claim; epsilon-greedy). Successful claims yield reward and update Q via standard TD. High-fitness agents broadcast a sealed (hashed prefix) Q-table fragment over BroadcastChannel; peers accept if superior. Pointer click injects resource or rewards the nearest agent. Best Q + grid persist in IndexedDB. Fully offline after load, progressive enhancement.

## Novelty
Leaves the dominant recent cluster of practical offline utilities (F641–F652 bill-splitters, converters, trackers) and WebGPU continuum kernels (LBM fluid F644, Gray-Scott RD F648, n-body Elman F649, reservoir lattice-gas F642, audio spectral F640). Core novel combination is discrete tabular Q-learning (not MLP/RNN/reservoir/evolutionary params) as the local policy mind whose causal input is local spatial resource observations + pointer events, controlling living DOM bidder agents that compete on a shared resource lattice (not continuum physics, not RD, not n-body forces, not NCA), with fitness-gated sealed Q-table genome transfer over BroadcastChannel + IndexedDB. Not residual predictors, attention lattices, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Resource grid: 16×16 Canvas2D, values decay or deplete on claim.
- Agents: 6 absolute DOM cards with Q-tables (states discretized, ~50 states × 5 actions).
- Q-update: standard one-step TD with reward = claim value or small move cost.
- BroadcastChannel 'f653-auction-swarm' for pos/fitness/Q-seal.
- IndexedDB 'verse-f653' for best Q.
- Pointer: click injects resource; drag near agent rewards it.
- Seal: download JSON {qtables, fitness, grid_snapshot, timestamp}.
- Fallback: no BroadcastChannel → single tab; no IndexedDB → session.

## Expected outcome
Runnable prototype. Agents move and claim under Q-learning, respond to pointer injections, share across tabs, transfer policies on high fitness, Seal produces valid JSON, reload restores best. Works offline.

## Mechanics
1. Init agents with random or loaded Q; spawn on grid.
2. Each frame: observe local state → epsilon-greedy action → move or claim → TD update → post state.
3. Draw grid on canvas; position agent DOM over cells.
4. On click: inject resource or +reward nearest.
5. On fitness threshold, post sealed Q prefix; accept if better.
6. Seal persists and downloads.

## Failure modes
- No IndexedDB: session only.
- Low FPS: reduce grid or agent count.
- Unstable Q: clamp learning rate, add small exploration.
- Hash too long: truncate genome for channel.

## Measurement
Manual: agents explore and claim, pointer affects grid, click changes behavior, seal JSON valid and reloadable, multi-tab shows transfer cue, works offline after load.

## Files
drafts/F653-spatial-qlearning-auction-dom-agents/SPEC.md
drafts/F653-spatial-qlearning-auction-dom-agents/index.html

## V01D landing
Spatial auction skill under void-live-deploy/skills/spatial-qlearning-auction-dom-agents.js; test asserts synthetic resource injection changes agent action, genome post on high fitness, seal JSON contains qtables key.

## Frontier Engine F-653
Architecture: Local tabular Q-learning on spatial resource observations → discrete claim/move actions → living DOM bidder agents on shared lattice with fitness-gated sealed Q-table transfer + IndexedDB + BroadcastChannel.
Expected outcome: interactive spatial auction whose policies evolve under pointer demand and whose competing agents can be sealed and shared across tabs.
Mechanics: online TD Q-update, resource lattice, DOM-agent embodiment, BroadcastChannel policy exchange.

Void is now Verse everywhere.
