# F672 Tilt Note Organizer
Plain name: Tilt Note Organizer
Job: Paste or type your notes; they become physical cards that respond to your device tilt through a tiny on-device RNN that adapts their clustering; arrange them by tilting the phone or moving the pointer, then download the grouped notes as text.
Input: Textarea to paste or type notes (one per line); DeviceOrientation sensor (or pointer + mouse as fallback) as causal input.
Keeps: Download the organized groups as .txt; copy the text; last notes and model state restored from IndexedDB.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no tilt-driven physical note organizer with local RNN adaptation and offline export.

**Concept**
A practical tool for The Verse canvas that turns a person's notes into interactive physical DOM cards. DeviceOrientation (or pointer velocity) feeds a tiny Elman RNN whose outputs modulate attraction forces toward two soft cluster centers. The person tilts to pull notes into groups; the RNN adapts slightly based on sustained tilt. Export yields grouped text.

**Novelty**
Branches away from the recent spatial-planner cluster (packing list F671, barcode inventory F670, room layout F667, kanban F666, dependency planner F665) and the hybrid sensor-generative cluster (eyedropper MLP palette F668, motion wallpaper F669, WebXR hand verlet genome F671). Explicitly leaves residual predictors, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN in pure demo form, k-means particles, and continuum fields. Core novel combination is DeviceOrientation as causal input to a previously unused local Elman RNN that controls physical parameters of user-supplied DOM note cards in a hybrid embodiment, with IndexedDB persistence and text export. Not a static drag planner, not a particle lattice, not a genome competition.

**Architecture**
Single self-contained index.html, offline after load.
- Textarea + Add button for notes (one per line).
- 2-4 absolute-positioned DOM cards (notes) with simple velocity physics.
- DeviceOrientationEvent for alpha/beta/gamma → normalized tilt vector.
- Local Elman RNN (hidden size 4): input (tiltX, tiltY, |tilt|) → outputs (attraction strength, cluster bias).
- Simple Hebbian-style adaptation on sustained input.
- Two soft cluster centers that notes are attracted toward based on RNN output.
- IndexedDB persists notes, positions, and RNN weights.
- Export button builds grouped text by nearest cluster.

**Expected outcome**
Open page, paste a few notes, grant orientation if prompted (or use pointer), tilt to cluster them, see RNN influence, download TXT, reload restores.

**Mechanics**
1. Load notes and weights from IDB or start empty.
2. On add: create card with random position.
3. Each frame: read orientation or pointer, forward RNN, apply force = attraction * direction to assigned/soft cluster, integrate velocity with damping.
4. Adapt RNN slightly if |tilt| high for several frames.
5. On export: assign each note to nearest cluster, format as text.
6. Persist on change or interval.

**Failure modes**
- No orientation: pointer drag + velocity fallback remains usable.
- IndexedDB blocked: session memory only.
- Too many notes: limit to 12 for performance.
- Permission denied: silent pointer mode.

Void is now Verse everywhere.

**Files**
drafts/F672-orientation-rnn-physical-note-sorter/SPEC.md
drafts/F672-orientation-rnn-physical-note-sorter/index.html

## V01D landing
Tilt note organizer skill under void-live-deploy/skills/tilt-note-sorter.js; test asserts paste creates cards, orientation (simulated) moves them, export produces grouped text, reload restores at least one note.
