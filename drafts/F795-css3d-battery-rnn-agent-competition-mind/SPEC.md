# F795 CSS3D Battery-RNN Agent Competition

Plain name: Tilt-trained floating panel minds
Job: Tilt your phone or move the pointer to train tiny recurrent networks that move floating panels in 3D; drag them, click to reward the best behavior, seal the genome to keep it.
Input: DeviceOrientation (or pointer proxy) + Battery level
Keeps: Sealed genome in localStorage / BroadcastChannel for other tabs
Not on Verse yet: checked against lab tools; this is a frontier spatial embodiment experiment.

**Ledger ID**: F-795
**Slug**: css3d-battery-rnn-agent-competition-mind
**Date**: 2026-11-18

**Concept**
Local tiny RNNs (Elman-style recurrent) per agent receive DeviceOrientation + Battery Status API level as causal inputs and output 3D velocities. Agents are pure CSS 3D transformed DOM panels in a perspective scene. Users drag panels, click to reward (Hebbian-like weight nudge), agents mildly compete by proximity. Best genome seals to localStorage and transfers via BroadcastChannel.

**Novelty / Branch from**
Deliberately leaves the recent dominant cluster of discrete kinetic/aggregation/attention substrates (Kohonen SOM F787, Cellular Potts F788, pointer-attention CSS morph F789, WebXR LGA F790, particle attractors F791, DLA causal MLP F792, living DOM RNN F793, attention-field portals F794). Moves to continuous CSS 3D hybrid embodiment driven by recurrent nets modulated by the under-used Battery Status API as additional causal channel. Not lattice CA, not particle fields, not attention over history, not pure MLP feedforward, not WebXR hand primary.

**Architecture**
- Single self-contained index.html
- 6 DOM agent panels in CSS perspective
- Tiny RNN: 4→6 (recurrent)→3 per agent
- Input: DeviceOrientationEvent or pointermove proxy + navigator.getBattery()
- Reward: click → fitness++ + weight nudge
- Seal: localStorage + BroadcastChannel 'f795-genome'
- Offline after load; progressive (pointer always works)

**Expected outcome**
Open page: panels drift according to tilt or pointer. Drag to reposition. Click to reward and adapt the local mind. Seal persists across reloads and tabs. Battery level subtly affects behavior. Fully interactive offline.

**Failure modes**
No orientation permission: pointer proxy. No Battery API: level=1.0 constant. localStorage blocked: session only.

**Building blocks**
Reusable tiny recurrent net core, Battery-as-causal input, CSS3D agent embodiment with sealed genome transfer. Expands hybrid physical UI control for future Verse.

**V01D landing**
skills/css3d-battery-rnn-agents.js; test: orientation/battery → RNN forward → transform update, click reward → weight change, seal round-trip.

Void is now Verse everywhere.

**Files**
- drafts/F795-css3d-battery-rnn-agent-competition-mind/SPEC.md
- drafts/F795-css3d-battery-rnn-agent-competition-mind/index.html
