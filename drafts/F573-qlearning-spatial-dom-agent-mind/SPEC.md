# F573-qlearning-spatial-dom-agent-mind

## Concept
A local Q-learning agent whose policy directly morphs the spatial arrangement of interactive DOM tiles on The Verse canvas. The agent observes discretized layout states (cluster tightness), selects actions (spread, cluster, rotate, jitter, align), receives rewards from user interactions (clicks, hovers), and updates its Q-table via temporal-difference learning. Internal state is visualized via canvas overlays of connections. Persistence via localStorage (OPFS-ready). This is a novel combination of explicit reinforcement learning agent, spatial DOM morphing, and local interactive learning unlike prior NCA, particle, evolutionary, or attention-based frontier drafts.

## Architecture
- Pure client-side HTML/CSS/JS, fully offline and local.
- Absolute-positioned DOM tiles as the agent's spatial body and interactive environment.
- Q-table stored as nested object (state → action → value).
- Canvas overlay for mind visualization (fading field and inter-tile links).
- Reward signals from pointer events (click +1, hover +0.1) with decay.
- Periodic (every ~30 frames) policy execution, action application, and Q-update.
- Epsilon-greedy exploration decaying slowly.

## Expected Outcome
User interactions train the agent to discover and prefer spatial layouts that elicit more engagement. Over minutes of use, the arrangement evolves toward configurations with higher observed reward. Q-values grow for successful policies. The prototype is immediately runnable in any modern browser with no build step.

## Mechanics
- 8 interactive tiles initialized at random positions.
- States derived from average pairwise distance / variance: "tight" (<100px), "mid" (<250px), "spread" (otherwise).
- Actions apply geometric transforms with bounds clamping: radial spread/cluster toward center, incremental rotation, random jitter, horizontal alignment.
- TD(0) update: Q(s,a) ← Q(s,a) + α [r + γ max Q(s',·) - Q(s,a)].
- Visual reward flash on tiles; live display of current action, scaled reward, epsilon, and max Q.
- Auto-persist Q-table to localStorage every 5s; reload on start.

## Failure Modes
- Coarse state discretization limits generalization across continuous layouts.
- Sparse or delayed rewards can slow convergence.
- Aggressive clamping may produce boundary artifacts.
- This draft uses CPU/JS for control; future iterations can offload force fields or particle rendering to WebGPU compute shaders for scale.
- No multi-agent or peer sharing yet (see related but distinct drafts).

## Novelty Check
No prior F- draft implements an explicit Q-learning (or other model-free RL) agent whose actions are spatial transforms on live DOM elements, with rewards drawn from real user pointer interaction and persistent local Q-table. Prior work focused on unsupervised NCA, evolutionary genomes, attention lattices, or predictive MLPs without closed-loop RL on the canvas itself.
