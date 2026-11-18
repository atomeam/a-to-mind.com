# F793 Living DOM Agent RNN Proximity-Sealed Genome Mind

## Concept
Pure multi-agent competition where the agents *are* the living DOM portals. Each of 9 floating HTML elements carries its own tiny local Elman-style recurrent network (RNN). Inputs: relative position to viewport center, nearest-neighbor distance/angle, DeviceOrientation (or pointer velocity proxy), and own fitness. The RNN maintains a 4-dimensional hidden state and outputs velocity deltas, hue shift, and scale change. Agents move freely in the viewport with soft repulsion; when two approach within a seal radius the higher-fitness agent performs a sealed genome transfer (copies its RNN weights to the lower one). User clicks reward an agent (fitness boost + Hebbian weight nudge on current input). All genomes persist to IndexedDB and broadcast via BroadcastChannel for cross-tab sealed transfer. No underlying lattice, no particles, no central kernel — the DOM elements themselves are the embodied agents under local recurrent control.

## Novelty
Leaves the recent dominant cluster of kinetic/cellular lattice substrates (DLA F792, LGA F790, Cellular Potts F788, particle attractors F791, speech-CA, Voronoi, LBM, SPH, softbody, NCA, spectral) driven by local MLPs from orientation/hand/pointer, with portals as passive samplers. Core novel combination is hybrid physical-UI embodiment where each agent is a true living DOM element controlled by its own recurrent local model, with proximity-triggered sealed genome transfer occurring in the DOM spatial field itself (not on a substrate), DeviceOrientation as causal input to never-before-seen per-agent RNNs, and multi-agent competition via fitness-gated weight adoption. Not lattice kernels, not central policy, not residual predictors, not attention fields, not k-means.

## Architecture
- Single index.html, no external dependencies, fully offline after load.
- 9 agents: absolute-positioned divs with dynamic CSS (transform, background, content).
- Per-agent Elman RNN: input dim 7, hidden 4, output 4. Weights randomly initialized, mutated lightly on transfer.
- Update: requestAnimationFrame loop computes inputs → hidden = tanh(Win·in + Wrec·h + b) → out → integrate position with damping + inter-agent repulsion.
- Proximity seal: every few frames, for pairs with dist < 70px, if |fitness| difference > 0.5, higher copies weights to lower (sealed).
- Reward: click → fitness += 2, Hebbian outer-product nudge on weights.
- Persistence: IndexedDB object store `verse-f793-genomes`; BroadcastChannel `f793-genome`.
- Progressive: DeviceOrientationEvent or pointer-move velocity as orientation proxy. Optional WebXR session check (graceful skip).

## Expected outcome
Runnable interactive prototype. Tilt the device or move the pointer: agents accelerate according to their individual RNNs and form clusters, orbits, or scatter. Click an agent to reward it — it becomes more “fit” and can overwrite nearby rivals’ genomes on approach. Seal button freezes current best genomes and shares them to other tabs. Agents visually differentiate by hue/scale/fitness text. Works offline; graceful without sensors (pointer-driven).

## Failure modes
- No DeviceOrientation: pointer velocity used as proxy.
- IndexedDB unavailable (private mode): in-memory only, still interactive.
- Too many agents on low-end device: reduce to 6, increase damping.
- BroadcastChannel blocked: local-only seal.

## Building blocks
Per-agent recurrent policy on physical DOM elements, proximity-gated sealed weight transfer in shared spatial field, orientation-to-RNN causal channel, fitness-competitive multi-agent DOM swarm. Expands hybrid embodiment and sealed genome architectures for future Verse minds.

## Files
drafts/F793-living-dom-agent-rnn-genome-mind/SPEC.md
drafts/F793-living-dom-agent-rnn-genome-mind/index.html

Void is now Verse everywhere.
