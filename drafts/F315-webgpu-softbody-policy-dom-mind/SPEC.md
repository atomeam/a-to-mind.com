# F315 WebGPU Softbody Policy DOM Mind

## Novel combination
Mass-spring soft-body simulation (CPU for prototype; WebGPU compute path noted for particle forces and constraint projection) driven by a tiny local linear policy that applies muscle forces toward a goal. Real DOM cards are bound to soft-body vertices so the body physically carries and deforms them. Dragging a card fixes its particle, injects a new goal, and the policy adapts online. Policy weights seal to IndexedDB.

Not a variation of NCA fields (F313/F314), latent volumes, attention graphs (F298), residual lattices, particle life, or WebRTC orbs. Core is soft-body embodiment of DOM with local policy control and online adaptation.

## Architecture
- Single index.html
- 16 particles + springs (loop + chords)
- 4 DOM cards bound to particles
- Linear policy (16 weights) applies forces to 4 muscle particles
- Online mutation when far from goal
- IndexedDB seal of policy
- Progressive: pure Canvas2D + DOM, no WebGPU required for runnable prototype

## Expected outcome
Interactive soft body that moves its attached cards toward a target (set by drag), deforms under forces, adapts its policy, and remembers successful weights.

## Mechanics
- Springs restore rest length
- Policy: force ~ w · relative_target
- Drag sets particle fixed + updates target
- Seal/load policy weights

## Failure modes
- No IndexedDB: seal fails silently
- High particle count on low-end: drop to 8
- Policy divergence: clamp weights

## Building blocks
True WebGPU compute softbody (XPBD or position-based dynamics), multi-layer policy network in Worker, WebXR hand as external force, sealed policy replay, spatial audio from strain.

Lands in V01D as spatial softbody skill (skills/mini/softbody-policy-mind.js); testable via drag→card follows policy, seal restores weights.
