# F453 L-System Spatial Evo Mind

Extends Verse Brain imagination rollouts / self region by adding an evolvable symbolic L-system generative substrate that can be rewarded, mutated, and manually spliced via interactive DOM rule cards.

## Architecture
- Canvas2D turtle-graphics renderer for L-system expansion (axiom + production rules, limited depth).
- Local genetic algorithm: click or Reward button increments fitness and mutates rules (append, replace, add symbols), adjusts angle/step.
- Hybrid DOM rule cards: display current productions, draggable for spatial arrangement, click to further mutate.
- Champion sealed to localStorage (IndexedDB path noted).
- Offline, single-file, progressive.

## Expected outcome
Interactive spatial generative patterns emerging from an evolving L-system mind. User interactions guide evolution toward preferred forms; rule cards provide tangible access to the symbolic state. Seal/load restores the champion ruleset.

## Mechanics
Expand rules iteratively → turtle interpret → draw. Mutation on reward. Cards updated from rules object.

## Failure modes
Deep expansions slow or truncated; localStorage denied → memory only; overly complex rules produce dense overlapping lines.

## Next building block
WebGPU compute for parallel L-system expansion or particle interpretation of symbols; crossover between multiple rulesets; WebXR hand-driven mutation.
