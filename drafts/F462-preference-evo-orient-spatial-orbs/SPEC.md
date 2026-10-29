# F462 Preference-Driven Spatial Orb Evolution

**Slug:** F462-preference-evo-orient-spatial-orbs

**Architecture:** Canvas2D multi-attractor particle field (WebGPU compute path prepared for large-N force integration) whose attractor parameters (position, hue, strength, radius) constitute genomes in a local evolutionary population of size 6. User clicks near attractors award fitness; soft dwell rewards accumulate. Tournament selection + mutation evolves the champion. Hybrid DOM candidate cards display top genomes and support drag-to-adjust (reseed positions). DeviceOrientation supplies continuous tilt gravity bias to both particles and layout. Champion genome sealed to IndexedDB. Fully offline single-file prototype.

Extends Verse Brain imagination rollouts by adding interactive user-preference evolution of spatial generative attractor parameters, and the embodiment registry via orientation as causal gravity input.

**Expected outcome:** Interactive spatial canvas. Particles flock to evolving attractor orbs. Clicks reward preferred configurations, driving evolution. Drag cards to manually sculpt. Seal persists champion across sessions. Interface reports fitness and generation. Progressive: orientation permission optional, IDB optional.

**Mechanics:** Genome decode to attractors; particle integration with inverse-square attraction + tilt force + damping; click distance reward + occasional evolve; cards lerp-update from population; IndexedDB put/get of genome + meta.

**Failure modes:** High particle count drops frames (capped at 400); IndexedDB denied → in-memory only; no orientation → zero tilt (still fully playable); rapid clicks may over-reward.

**Builds on:** Prior spatial particle fields, sealed local minds, and hybrid DOM cards by introducing preference-driven evolutionary search over continuous generative parameters (distinct from agent genome competition, expression trees, L-systems, reservoirs, or decision trees), with explicit candidate visualization and orientation embodiment.

**Next building block:** Full WebGPU compute kernel for particle forces; multi-objective preference (click + dwell + audio feedback); WebXR hand-driven mutation; shared sealed genomes via WebRTC.
