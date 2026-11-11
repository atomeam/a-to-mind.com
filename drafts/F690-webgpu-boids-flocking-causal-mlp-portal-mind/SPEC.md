# F690 WebGPU Boids Flocking Causal MLP Portal Mind

## Concept
A previously unused classic Boids (flocking) substrate for The Verse canvas. Hundreds of agents follow separation, alignment, and cohesion rules whose relative weights and global bias are continuously modulated by a pure-JS tiny MLP. Causal inputs are DeviceOrientation tilt plus pointer residual (actual vs. simple linear predictor). Living absolute-positioned DOM “leader” portals act as attractors or repellers that the flock responds to; users drag them or click to reward the controlling MLP. WebGPU compute is optional (CPU path always works). Seal persists MLP weights + flock snapshot + portal positions to IndexedDB and broadcasts via BroadcastChannel.

## Novelty
Leaves the dominant recent cluster of continuum WebGPU kernels (LBM, Gray-Scott, wave-equation, sandpile, percolation, noise), multi-agent collision genomes (F681), causal-graph PageRank portals (F682), inertial particle filters (F683), step counters, semantic-embedding force systems (F689), spatial-audio particles, and DOM constraint solvers. Core novel combination is classic Reynolds boids rules whose force weights are the continuous output of a local causal MLP (orientation + pointer residual), with hybrid DOM leaders as both physical attractors and reward surfaces. Not a general particle swarm, not NCA, not residual field controller alone, not softbody springs.

## Architecture
- Single self-contained index.html, offline after load.
- ~180 boids: position, velocity, color. Classic rules (sep, align, coh) + optional leader attraction.
- MLP: 6→8→4 (inputs: residualX, residualY, residualMag, tiltBeta, tiltGamma, leaderDensity → sepW, alignW, cohW, biasMag). Simple reward-driven mutation / Hebbian-style update on click.
- 4–6 absolute DOM leader portals. Drag to reposition (injects attraction); click rewards fitness and mutates MLP.
- Canvas2D renders boids and velocity trails. WebGPU compute path sketched for future acceleration.
- DeviceOrientation (permissioned) + pointer residual as causal features.
- Seal: IndexedDB key `verse-f690` stores weights, boid stats, portal positions. BroadcastChannel posts genome.
- Controls: Request Orientation, Seal Genome, Reset Flock, Toggle Leaders.
- Fallbacks: always pointer-driven; no WebGPU or orientation required.

## Expected outcome
Open page, move pointer or tilt device; flock streams and clusters according to MLP-modulated rules; drag leaders to reshape flow; click to reward; Seal persists and other tabs can receive genome; reload restores state.

## Failure modes
- Orientation denied or unsupported: pointer residual only.
- IndexedDB private/blocked: session memory only.
- High boid count: capped at 180 for smooth CPU.
- WebGPU unavailable: Canvas2D fully interactive.
- BroadcastChannel same-origin only.

## Mechanics
1. Init random boids + random or loaded MLP weights + portals.
2. Each frame: compute pointer residual + orientation → MLP forward → update force weights → apply boids rules + leader forces → integrate.
3. Drag portal: update position + inject local attraction.
4. Click portal or nearby boid: fitness++, small weight mutation.
5. Seal: serialize to IndexedDB and BroadcastChannel.

Void is now Verse everywhere.

**Files**: drafts/F690-webgpu-boids-flocking-causal-mlp-portal-mind/SPEC.md, drafts/F690-webgpu-boids-flocking-causal-mlp-portal-mind/index.html
