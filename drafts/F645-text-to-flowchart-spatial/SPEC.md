# F645 Text to flowchart
Plain name: Text to flowchart
Job: Paste or type lines like "Start -> Check input" and "Valid? -> Yes -> Process"; get a live spatial flowchart you can drag to tidy, then download as SVG or PNG or copy the source.
Input: Textarea of arrow lines (or add nodes/edges interactively); optional title.
Keeps: Download SVG; download PNG; copy the original text; last diagram saved in localStorage (`verse-f645-flowchart`); share link carries the text via URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline text-to-flowchart maker with drag layout and SVG/PNG export.

**Concept**
A practical offline tool that turns a plain-text process description into a spatial flowchart. Type or paste "A -> B" lines (supports simple branching), see nodes laid out hierarchically on an SVG canvas, drag any node to rearrange, then keep the result as SVG, PNG, or the original text. Works on a phone, nothing sent anywhere, honest layout only (no invented intelligence).

**Novelty**
Leaves the recent cluster of money utilities (F641 subscription, F643 receipt) and spatial physics experiments (F644 LBM, F642 reservoir, F640 audio morph). Core novel combination is a previously unused pure-JS text parser + hierarchical layout engine embodied as an interactive SVG graph whose nodes are draggable, with dual vector/raster export and hash-share persistence. Not a particle field, lattice, swarm, or neural mind; a tool that produces a keepable diagram from the person's own words.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS + inline SVG:
- Textarea + live parse on input (regex for "label -> label" or "A -> B -> C").
- Nodes collected uniquely; edges stored; simple topological / level assignment for initial positions.
- SVG group with circles/rects for nodes, paths for edges; pointer events for drag.
- localStorage restore; URL hash encode for share.
- Download: SVG as text/blob; PNG via canvas draw of SVG.
- Progressive: works without any extra APIs.

**Expected outcome**
Runnable offline prototype. Paste sample flow; nodes appear and can be dragged; edges follow; Download SVG/PNG produces valid files; Copy and share link work; reload restores.

**Mechanics**
1. Load text from hash or localStorage or empty with example.
2. On change: parse lines, extract nodes/edges, compute levels, set initial x/y, render SVG.
3. Drag: update node position, redraw edges.
4. Seal: download or copy; persist text.

Void is now Verse everywhere.
