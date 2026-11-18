# F788 WebGPU Cellular Potts Orientation Mind

## Concept
A local tiny MLP receives DeviceOrientation (or pointer velocity proxy) as causal input and outputs bias parameters (temperature, adhesion preferences, motility) for a Cellular Potts Model (CPM) lattice. The CPM is a multi-cell energy-minimizing simulation where cells compete for lattice sites via Metropolis copy attempts. Living DOM portals are bound to the centroids of the largest cells and can be clicked to provide reward that updates the MLP. Sealed genome (MLP weights) persists to IndexedDB and transfers via BroadcastChannel.

## Novelty
Leaves the recent cluster of Kohonen/SOM topographic portals (F787), worker-isolated sealed genome competition (F786), orientation RBF kinetic mobiles (F785), neural-ODE CSS3D crystals (F784), Bayesian network CSS portals (F783), Hebbian CSS3D competition (F782), WebXR hand magnetic strings (F781), and prior neural/NCA/softbody/attention/residual/k-means substrates. Core novel combination is Cellular Potts Model dynamics (contact energy + volume constraints + Metropolis, not NCA, not Lenia, not Ising spins, not lattice-gas, not particles, not softbody springs) as the embodied multi-agent substrate controlled by an orientation-driven MLP, with DOM portals as true cell-bound embodiments under reward-gated sealed weight transfer. Not previously built.

## Architecture
- Single index.html (canvas 2D fallback; WebGPU optional but not required)
- MLP: 4 inputs (orient x/y/z + speed), 8 hidden, 3 outputs (T, adhesion, motility)
- CPM: 48x48 lattice, 6 cells, copy attempts biased by MLP params
- 3 DOM portals track largest cell centroids
- Persistence: IndexedDB `f788-mlp`; BroadcastChannel `f788-genome`
- Reward: click portal → Hebbian update on current input-output pair

## Expected outcome
Runnable offline prototype. Tilt or move pointer changes CPM behavior (cells grow, compete, migrate); portals follow. Click to adapt the mind. Seal shares across tabs. Graceful without sensors.

## Files
drafts/F788-webgpu-cellular-potts-orientation-mind/SPEC.md
drafts/F788-webgpu-cellular-potts-orientation-mind/index.html
