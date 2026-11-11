# F658 Spatial Seating Chart
Plain name: Seating chart
Job: A host enters guest names and optional keep-together or keep-apart pairs, then drags guests onto numbered tables; the page highlights conflicts and gives back a downloadable PNG of the chart, a copyable assignment list, and a shareable link; everything is saved on the device.
Input: Text boxes for guest names (one per line) and constraint pairs; drag-and-drop onto table zones.
Keeps: Download PNG of the visual chart, copy the seating list as text, share link that encodes the full plan in the URL hash, last plan saved in localStorage.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no seating chart or table assignment tool exists (random team and secret santa are different).

**Concept**
A practical spatial seating chart tool for events on The Verse canvas. Hosts paste or type guest names, optionally mark pairs that must sit together or apart. Guests appear as draggable cards that can be dropped onto fixed table zones. Real-time visual feedback highlights constraint violations. The layout can be exported as a clean PNG, the assignments copied as text, and the whole plan shared via URL or restored from localStorage. Useful recurring job for parties, weddings, meetings.

**Novelty**
Leaves the recent cluster of form calculators, meal planners, and simple trackers. Core novel combination is interactive spatial drag-and-drop of living guest cards onto a fixed multi-table layout with live constraint conflict detection, plus canvas-based visual PNG export and sealed persistence. Not a particle field, lattice, swarm, orb or "mind"; a tool that produces a keepable seating plan from the person's own guest list.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Guest input and constraint editor.
- Table zones (default 6 tables of 8 seats) as drop targets with visual seats.
- HTML5 drag-and-drop or pointer events for assignment.
- Live conflict checker: same-table violations for apart pairs, different-table for together pairs.
- Canvas rendering of the current layout for PNG download.
- localStorage restore; URL hash (JSON) for share link.
- Mobile-friendly touch support; works offline after load.

**Expected outcome**
Runnable prototype. Add guests, set constraints, drag to tables, conflicts highlight, PNG downloads, copy works, reload restores, share link reloads the plan.

**Mechanics**
1. Load from hash/localStorage or empty with sample guests.
2. Render guest palette and table zones.
3. Drag-drop reassigns; update conflicts and seat counts.
4. Seal: copy list, download PNG, or share link.

**Failure modes**
- No guests: empty chart.
- Storage blocked: session only, share still works.
- Too many guests: tables overflow with scroll or warning.
- Constraints with missing names: ignored with note.

**Measurement**
Manual: drag assigns, conflicts appear for violated pairs, PNG is visual chart, copy has table lists, reload and share restore correctly, offline after load.

**Files**
drafts/F658-spatial-seating-chart/SPEC.md
drafts/F658-spatial-seating-chart/index.html

**V01D landing**
Spatial seating chart skill under void-live-deploy/skills/spatial-seating-chart.js; test asserts sample guests drag to tables, conflict class appears on violated pair, PNG download blob is image/png, localStorage roundtrip restores assignment.

**Void is now Verse everywhere.**
