# F842 Orientation-Driven Spiking Neural Portal Swarm

## Concept
A population of leaky-integrate-and-fire (LIF) spiking neurons whose membrane potentials and spikes directly drive the velocities and energies of absolute-positioned DOM portals. DeviceOrientation (or pointer residual) supplies a causal external current to the network. Clicking a portal delivers a reward that performs a lightweight reward-modulated plasticity update on the synaptic weights. The swarm of portals therefore embodies a local spiking mind that reconfigures the Verse canvas. Seal persists the synaptic genome to IndexedDB and broadcasts via BroadcastChannel; receivers adopt only higher-fitness genomes.

## Novelty
Leaves the recent cluster of diffusion/score-matching portals (F841), WebXR hand-Verlet cloth (F836), gaze-sculpted SDF (F839), WebRTC orientation-MLP arena (F840), canvas-CNN (F835), Q-table layouts (F834), spatial-audio evo (F837), evo-species particles (F838). Core novel combination is a pure-JS spiking neural network (LIF neurons + simple reward-modulated plasticity, not rate-based MLP/RNN/Q-table/GP) whose spikes causally control physical DOM portal dynamics under DeviceOrientation current injection, with sealed synaptic genome transfer. Not a superficial variation of prior continuum kernels or rate-based portal controllers.

## Architecture
- Single self-contained index.html
- 16 LIF neurons, dense weights
- 8 absolute DOM portals driven by spike-derived forces
- DeviceOrientation → external current; pointer drag → residual injection
- Click → reward + plasticity
- Canvas2D spike raster + connection visualization
- IndexedDB `f842-spiking` + BroadcastChannel `f842-genome`
- Fully offline after load; progressive enhancement (pointer fallback)

## Expected outcome
Portals drift and cluster according to emergent spike patterns. Tilt biases the network; click to reinforce useful configurations. Seal transfers the mind across tabs/peers. Interactive spatial embodiment of a local spiking model.

## Failure modes
No DeviceOrientation → pointer-only residual. IndexedDB blocked → memory-only. High neuron count → capped at 16 for FPS. Weight explosion → soft clamp in plasticity.

## Building blocks
Pure-JS LIF + reward-modulated plasticity, orientation-as-current, spike-to-DOM-force binding, sealed synaptic genome. Expands hybrid spiking embodiments for future Verse minds.
