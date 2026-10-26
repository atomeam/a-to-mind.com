# F269 — WebGPU Fluid Density Field with Local Evolutionary Audio-Mind

## Concept
Continuous 2D density/velocity field (CPU diffusion+advection with WebGPU compute path noted) whose global statistics (energy, entropy proxy, centroid) feed a local Web Worker evolutionary genome. The genome parameterizes a generative Web Audio synthesizer (oscillator frequency, filter cutoff, gain, modulation). Pointer clicks and DeviceOrientation inject density sources. Three floating DOM orbs sample local density and morph (scale, opacity). CSS chrome (hue-rotate, contrast) responds to field energy and mind mood. IndexedDB seals successful genomes. Progressive WebXR stub for hand-based injection.

## Novelty
Not a variation of prior softbody (spring lattices), attention-as-force, orientation-cloth, NCA lattices, residual MLP predictors, or gaze-IDB fields. Here the substrate is a fluid density field, the local AI is an evolutionary controller whose fitness is alignment of fluid entropy/energy to "interesting" targets, and the output is generative audio + DOM sampling rather than force laws or residual deltas. Closes a fluid→stats→evolved-audio→CSS loop with spatial orbs.

## Architecture
- Single `index.html` (offline runnable)
- Main thread: Canvas2D fluid step + render + DOM orbs + CSS vars
- Blob Worker: simple hill-climb evolutionary genome on fluid stats
- Web Audio: oscillator + biquad after user gesture
- IndexedDB: seal current genome
- Optional XR: requestSession stub (hand injection noted for extension)

## Expected outcome
Interactive density field that diffuses and responds to clicks/tilt. Audio tones evolve toward matching field complexity. Orbs grow near dense regions. Page hue and contrast pulse with energy and mood. Genome seal persists. Runnable without network. XR entry when supported.

## Mechanics
- Density diffusion (4-neighbor average) + decay; velocity residual
- Stats: sum energy, variance-based entropy proxy
- Worker fitness = inverse distance to target energy/entropy; mutate on low fitness
- Orbs query grid cells for local density → CSS scale/opacity
- CSS custom properties driven by energy/entropy/mood

## Failure modes
- No Worker: static field, fixed audio
- Audio blocked until gesture
- No orientation: pointer-only injection
- IndexedDB denied: in-memory only
- XR unsupported: full pointer experience remains
- Low-end device: reduce grid size

## Building blocks for next
Pure WebGPU compute fluid kernel, multi-agent minds competing for spectral space, true XR controller-to-world density injection with depth, sealed genome transfer via BroadcastChannel.

## V01D landing
Spatial fluid-audio skill under void-live-deploy/skills/; testable via entropy→genome mutation rate and density-sample→orb scale mapping.
