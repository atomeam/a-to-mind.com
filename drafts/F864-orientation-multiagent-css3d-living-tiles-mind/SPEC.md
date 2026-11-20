# F864 – Orientation Multi-Agent CSS3D Living Tiles Mind

## Concept
A colony of simple local rule-based agents embodied as absolute-positioned, contenteditable Verse tiles inside a CSS 3D perspective scene. Each agent has a small genome (hue preference, wander speed, vertical bias, social attraction). DeviceOrientation (or pointer residual) supplies a shared gravity/tilt vector that physically slides the tiles. Agents continuously update their positions with local rules + genome. User drag repositions, click rewards the agent (reinforces genome via simple Hebbian-style update). High collective fitness or explicit seal stores the agent genomes to IndexedDB and broadcasts via BroadcastChannel so other tabs can adopt or compete. Web Audio oscillators give each agent a soft voice modulated by its activity. Fully offline single-file prototype.

## Novelty
Leaves recent clusters (ESN/CSS3D resonators F863, granular DEM+MLP F861, L-systems F849–850, acoustic waves, heat equations, boids+MLP, WebXR Verlet, etc.). Core novel combination is a multi-agent local rule system (not single reservoir/MLP/ESN/spiking, not continuum field, not particle physics) whose individual genomes evolve under user reward, physically embodied as living CSS 3D tiles that slide under orientation gravity, with sealed genome transfer and per-agent generative audio. UI physically changes as the agents reason and move.

## Architecture
- Single self-contained `index.html`
- 6–8 agent tiles: position (x,y,z), velocity, genome {hue, speed, biasY, social}
- Physics: Euler integration + orientation-derived gravity + soft boundaries + weak inter-agent repulsion/attraction
- Reward: click → genome moves toward current state (simple online update)
- Seal: IndexedDB key `verse-f864-genomes` + BroadcastChannel `f864-genomes`
- Audio: one OscillatorNode + Gain per agent, frequency from genome + activity
- Fallbacks: no DeviceOrientation → pointer velocity residual as tilt; no IDB → sessionStorage; AudioContext resume button

## Expected outcome
Open the page: living tiles gently drift and float in 3D space, each with its own color and soft tone. Tilt the device (or move the pointer): gravity shifts and tiles slide. Drag a tile to reposition it; click it to reward and see its behavior/color/tone adapt. Seal preserves the current colony genomes; open a second tab to receive or compete. Offline after load. Interactive spatial local multi-agent mind for Verse.

## Failure modes
- DeviceOrientation permission denied or unavailable → pointer residual.
- AudioContext suspended until user gesture.
- IndexedDB quota or blocked → no persistence across reloads.
- Too many agents on low-end device → reduce count.

## Building blocks
Reusable pure-JS multi-agent genome + CSS 3D physical embodiment + orientation gravity channel + reward-gated genome adaptation + sealed BroadcastChannel transfer + per-agent Web Audio. Enables future hybrid multi-agent + WebGPU world or WebXR hand-as-reward on Verse.

Void is now Verse everywhere.
