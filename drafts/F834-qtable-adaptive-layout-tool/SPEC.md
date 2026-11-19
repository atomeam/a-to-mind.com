# F834 Adaptive Attention Layout
Plain name: Adaptive Attention Layout
Job: Paste a list of tasks or notes; each becomes a living card that uses its own local Q-table to learn preferred positions from your device tilt and clicks, then copy the ordered list or download the arrangement.
Input: Pasted text (one item per line)
Keeps: Copy ordered Markdown, download JSON of cards + learned positions
Not on Verse yet: checked against lab tools and recent F- drafts; no prior Q-table adaptive pure-DOM layout tool.

**Ledger ID**: F-834  
**Slug**: qtable-adaptive-layout-tool  
**Date**: 2026-11-19  

**Concept**
A useful spatial tool for The Verse: paste notes/tasks that become absolute-positioned DOM cards. Each card owns a tiny local Q-table (tabular reinforcement learning, previously unused in this series) whose state is a coarse binning of DeviceOrientation residual + pointer proximity + current grid cell. Actions are move-N/S/E/W or stay. Rewards come from user clicks (positive) and from aligning with tilt-implied preferred direction (orientation as selection pressure). Cards compete implicitly by occupying space and receiving attention. No continuum field, no particle simulation, no neural weights, no WebGPU kernel. Seal persists the highest-fitness Q-table + positions to IndexedDB and broadcasts via BroadcastChannel so other tabs/devices can adopt a stronger layout mind. Export gives the person the organized work.

**Novelty**
Deliberately leaves the recent dominant cluster of continuum/particle physics substrates (wavefields F829, FDTD photonic F828, Coulomb forces F830, Kalman chains F826, PSO layouts F827, Gray-Scott, NCA F833, MLP portals, GP expressions) controlled by neural/statistical models. Core novel combination is previously unused tabular Q-learning as the local causal mind of pure living DOM organisms, with DeviceOrientation as the sole environmental preference signal, multi-agent attention competition, and sealed Q-table genome transfer. Hybrid embodiment is the cards themselves. Not a toy field; a tool that takes input and returns ordered output.

**Architecture**
- Single self-contained index.html (offline after load, progressive, mobile-friendly)
- Input: textarea for one-item-per-line
- Agents: 4–12 absolute DOM cards, each with independent Q-table (state ~ 5×5 grid × 3 orient bins × 2 proximity = ~150 states, 5 actions)
- Learning: ε-greedy, α=0.2, γ=0.9; reward on click (+1) and orientation alignment (+0.2)
- Visualization: pure CSS, cards colored by fitness, draggable for manual override (which also gives reward)
- Persistence: IndexedDB `verse-f834-qtable`; BroadcastChannel `f834-genome`
- Export: copy Markdown ordered by fitness/position, download JSON
- Fallbacks: no DeviceOrientation → pointer velocity residual as preference; no IDB → session only

**Expected outcome**
User pastes a list → cards appear and gently migrate toward preferred regions as the device is tilted or the pointer moves; clicking a card reinforces its policy; Seal locks the best mind; copy or download the arrangement. Works offline, interactive, useful.

**Failure modes**
No orientation permission → pointer-only preference; large lists → cap at 12 cards; IndexedDB blocked → no seal persistence; low-end device → slower learning rate.

**Building blocks**
Reusable pure-JS Q-table agent for DOM, orientation-as-reward signal, sealed tabular genome transfer, export of learned spatial arrangement. Enables future multi-objective layout tools or competitive note organizers.

Void is now Verse everywhere.
