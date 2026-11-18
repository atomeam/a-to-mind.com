# F817-sealed-genome-resource-capture-arena

## Concept
A competitive multi-agent arena on the Verse canvas. 6 living DOM agent cards, each controlled by a tiny local MLP (6-8-4), forage and compete for resources on a shared 2D lattice field rendered on Canvas2D. DeviceOrientation tilt and pointer proximity supply continuous causal inputs that bias the agents' policies. When one agent captures another (proximity + higher fitness), it performs a sealed partial genome transfer (crossover of weights). Agents embody their state via CSS transforms (position, scale, rotation, hue). Fully offline single-file prototype. Persistence via IndexedDB; cross-tab competition via BroadcastChannel.

## Novelty
Deliberately branches away from the recent dominant cluster of continuum physics kernels (SPH/LBM/lattice-gas/quantum walk), attention lattices and content-attention note forces (F813), softbody/reservoir DOM (F814), pure orientation-evo spatial audio hybrids (F815), online-MLP particle swarms (F816), residual predictors, volumetric injection, pure NCA, spectral/audio residuals, pointer-history fields, and k-means particles. 

Core novel combination: sealed-genome multi-agent competition on a discrete resource lattice, where local MLP policies are causally driven by DeviceOrientation + pointer and immediately embodied as morphing CSS cards that physically capture and transfer genomes. First competitive resource-capture arena with online sealed transfer on The Verse.

## Architecture
- Single index.html (progressive enhancement; works without orientation/WebGPU).
- 6 absolute-positioned agent cards.
- Shared 64x64 resource lattice (Canvas2D visualization, JS array update).
- Each agent: MLP 6→8→4 (pure JS, tanh), inputs: local resource density, tilt.x/y, pointer dist/angle, own energy, neighbor count.
- Outputs: dx, dy, scaleDelta, attack.
- Capture: if dist < 40 and fitnessA > fitnessB, A steals 30% of B's weights (sealed crossover) and gains energy.
- Persistence: IndexedDB `verse-f817-genomes`.
- Seal/transfer: BroadcastChannel `f817-genomes` broadcasts best genome; higher-fitness replaces with light mutation.

## Expected outcome
Open: agents spawn and forage. Tilt device or move pointer to bias movement. Agents cluster on resources, capture each other, genomes evolve visibly (color/scale shift). Seal button persists and broadcasts. Offline capable.

## Failure modes
- No DeviceOrientation: pointer-only + random bias.
- No IndexedDB: in-memory only.
- High update rate: throttle lattice to 10 Hz.

## Building blocks
Reusable sealed-genome capture transfer, resource lattice substrate, orientation-causal MLP policy for DOM agents. Enables future multi-agent WebXR contests or shared WebRTC arenas.

Void is now Verse everywhere.
