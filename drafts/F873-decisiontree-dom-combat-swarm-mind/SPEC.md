# F873 Decision-Tree DOM Combat Swarm Mind

**Ledger ID**: F-873  
**Slug**: decisiontree-dom-combat-swarm-mind  
**Date**: 2026-11-21  
**Status**: frontier prototype  

## Concept
Multi-agent competition on the Verse canvas where the agents *are* living absolute-positioned DOM cards. Each agent owns a local decision tree (non-neural if-then rules on coarse spatial bins + orientation residual) that outputs velocity and "aggression" scale. Agents move continuously; on spatial overlap the higher-fitness agent conquers the lower, seals the winner's tree genome, and transfers it via BroadcastChannel + IndexedDB. DeviceOrientation acts as environmental tilt bias (preferred direction pressure), not direct policy input. Canvas overlay draws trails. Fully offline after load.

## Novelty
Leaves the dominant recent cluster of orientation/sensor-driven neural/statistical policies (ES F865, predictive RNN SVG F866, causal attention portals F868, MLP voxel/SDF/Houdini/mic-speech F869–F872) controlling portals, lattices, SVG genomes, CSS3D tiles, WebGPU sculptors, and synesthesia loops. Core novel combination is previously unused local decision trees as the sealed mind of pure physical UI combatants, with victory-by-overlap genome transfer (not click-reward delta, not continuum kernel sampling). Not MLP/RNN/ES/attention weights, not WebGPU compute fields, not speech/mic primary, not residual predictors, not NCA, not softbody.

## Architecture
- Single self-contained index.html
- 6–8 DOM agent cards (absolute, draggable for override)
- Decision tree: fixed depth-2 structure with evolvable thresholds and action leaves (velocity x/y, scale); state = binned dx/dy to nearest rival + orientation residual
- Combat: overlap detection; fitness = survival time + conquests; winner adopts loser's position slightly, seals tree
- Seal: IndexedDB `verse-f873-dt-combat` + BroadcastChannel `f873-genome` (adopt higher fitness tree)
- Orientation: DeviceOrientationEvent tilts global preferred velocity bias
- Visual: CSS transforms for position/hue by fitness; canvas for short trails
- Fallbacks: no orientation → pointer residual; no IDB → memory; no BC → local only

## Expected outcome
Agents drift and jostle; overlaps trigger conquest flashes and genome adoption. Tilt device to bias the swarm. Drag agents to force encounters. Seal and open another tab: higher-fitness trees transfer. Interactive spatial multi-agent local-AI with sealed combat transfer.

## Failure modes
- Orientation permission denied → pointer mode.
- Many agents → cap at 8, cull lowest fitness.
- IDB/BC blocked → still runs locally with in-memory seal.

## Building blocks
Reusable pure-JS decision-tree controller + DOM combat agents + victory-gated sealed transfer. Enables future non-neural hybrid embodiments or evolutionary rule systems on Verse.

Void is now Verse everywhere.

**Files**: drafts/F873-decisiontree-dom-combat-swarm-mind/SPEC.md, drafts/F873-decisiontree-dom-combat-swarm-mind/index.html
