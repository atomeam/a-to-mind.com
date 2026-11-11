# F656 Spatial note clusterer
Plain name: Spatial note clusterer
Job: Paste or type your notes (one per line); the page groups similar ones spatially using local word-overlap similarity and a force-directed layout, lets you drag cards to refine, then download the clusters as JSON or a map SVG, or copy the grouped text.
Input: Textarea of notes, one per line; optional similarity threshold.
Keeps: Download JSON of clusters and positions; download SVG map; copy grouped text; last notes and layout saved in localStorage (`verse-f656-notes`); share link carries the notes via URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline spatial note clusterer that uses local lexical similarity + force-directed layout on living DOM/SVG cards with export.

## Concept
A practical offline tool that turns a list of personal notes into an interactive spatial map. Notes are compared by simple bag-of-words overlap (local "AI" similarity, no external model). A force-directed simulation pulls similar notes together and repels others, laying them out on a canvas of absolute-positioned cards or SVG. Users drag any card to override positions. Export keeps the groups and map. Fully self-contained, offline after load, phone-friendly.

## Novelty
Leaves the recent cluster of practical utilities (F652 bill splitter, F655 subscription tracker, F654 tip, F645 flowchart) and prior spatial physics/neural demos. Core novel combination is lexical similarity matrix driving a pure-JS force-directed layout of living note cards (not flowchart parser, not Q-learning auction, not continuum kernels), producing keepable clusters and a visual map from the person's own text. Not a particle swarm to watch, a tool that organizes and exports your notes.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Textarea for notes.
- On "Cluster": tokenize, compute pairwise Jaccard or cosine on word sets, run 200-step force simulation (attraction by similarity, repulsion, damping).
- Render as absolute DOM cards with drag.
- localStorage + hash share.
- Downloads: JSON {notes, positions, clusters}, SVG of the map.
- Threshold slider to control grouping.

## Expected outcome
Runnable prototype. Paste sample notes; similar ones cluster spatially; drag works; downloads produce valid files; reload restores; works offline.

## Mechanics
1. Load from hash/localStorage or empty with examples.
2. Parse lines into notes.
3. Compute similarity matrix.
4. Simulate forces to positions.
5. Position cards; enable drag.
6. Seal: export or copy.

## Failure modes
- Too many notes (>50): limit or warn, sim slower.
- No words: treat as unique.
- Storage blocked: session only.

## Measurement
Manual: notes cluster by topic, drag updates, exports valid and reloadable, works offline after load.

## Files
drafts/F656-spatial-note-clusterer/SPEC.md
drafts/F656-spatial-note-clusterer/index.html

## V01D landing
Spatial note cluster skill under void-live-deploy/skills/spatial-note-clusterer.js; test asserts sample notes produce clustered groups, export JSON has positions key.

## Frontier Engine F-656
Architecture: Local lexical similarity (Jaccard on word sets) → force-directed layout → living draggable note cards on the Verse canvas with JSON/SVG export + IndexedDB/localStorage seal.
Expected outcome: interactive spatial organizer for personal notes that groups by content similarity and produces keepable maps and clusters.
Mechanics: online similarity computation, force simulation, DOM-card embodiment, export of layout and groups.

Void is now Verse everywhere.
