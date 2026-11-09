# F642 Orientation Reservoir Lattice Portals

Plain name: Orientation reservoir lattice portals
Job: Grant device motion; a local Echo-State reservoir reads tilt history and modulates a lattice-gas automaton on canvas; DOM portals ride density peaks; click a portal to reinforce the current readout; seal downloads the trained readout weights as JSON.

## Concept
DeviceOrientationEvent stream is windowed into a short history vector that drives a frozen random reservoir (Echo State Network, no recurrent training). Only the linear readout is adapted by a simple reward-modulated Hebbian update when the user clicks a portal. The readout outputs control injection strength and a bias direction for a 2D lattice-gas cellular automaton (HHP or similar discrete streaming + collision rules, previously unused kernel). High-density sites attract absolute-positioned DOM cards that display local density and can be dragged. IndexedDB persists the readout; BroadcastChannel allows optional genome exchange. Seal button serializes and downloads the genome.

## Novelty
Leaves the recent cluster of practical offline utilities (scoreboard F634, teleprompter F635, Morse F637, meme maker F638, label sheets F639, subscription tracker F641) and the occasional WebGPU wave/audio DOM morphs (F636, F640). Core novel combination is DeviceOrientation as causal input to a local Echo-State reservoir (frozen recurrent dynamics, readout-only learning) controlling a previously unused lattice-gas automaton kernel, with hybrid DOM portals that are both sensors and actuators under sealed genome transfer. Not pure practical forms, not spectral audio classifiers, not wave riders, not particle fields or NCA.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS + Canvas 2D (WebGPU fallback noted but 2D primary for reliability):

- Orientation listener (with permission request on click).
- Reservoir: N=40 nodes, spectral radius ~0.9, sparse random W, input weights; state update x = tanh(W x + W_in u).
- Readout W_out (2 outputs: inject strength, direction bias) adapted on click.
- Lattice gas: 64x64 grid, 4-direction streaming + collision (simple HPP-like).
- DOM portals: 4 absolute cards tracking density peaks (simple argmax bins).
- Persistence: IndexedDB `f642-readout`.
- Seal: download JSON {readout, fitness, timestamp}.

## Expected outcome
Runnable offline prototype. Tilt phone or use mouse-sim, lattice evolves, portals move, click reinforces, seal downloads valid JSON, reload restores weights.

## Mechanics
1. On load request orientation permission if needed; fallback to pointer for sim.
2. Each frame: sample orientation → update reservoir → readout → inject into lattice → step CA → find peaks → move portals.
3. Click portal: +reward, Hebbian update W_out += eta * reward * x * target.
4. Seal: JSON download.
5. localStorage/IndexedDB save on seal or periodically.

## Failure modes
- Orientation denied: pointer-driven mode.
- No IndexedDB: session only.
- Low-end device: reduce grid to 32x32.
- CA unstable: clamp densities.

## Measurement
Manual: tilt, observe flow bias, click portals, seal JSON opens, reload keeps behavior, offline after first load.

## Files
drafts/F642-orientation-reservoir-lattice-portals/SPEC.md
drafts/F642-orientation-reservoir-lattice-portals/index.html
