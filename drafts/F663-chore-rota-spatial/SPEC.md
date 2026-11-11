# F663 Chore rota maker
Plain name: Chore rota maker
Job: A household enters people and chores, then drags chores onto a weekly grid of people and days; a local balancer keeps the load fair, and the page gives back a downloadable PNG of the chart, a copyable list, and a shareable link; everything is saved on the device.
Input: Text boxes for people (one per line) and chores (one per line, optional difficulty 1-5 after a comma); drag-and-drop of chore cards onto day cells.
Keeps: Download PNG of the visual weekly chart, copy the assignment list as text or Markdown, share link that encodes the full plan in the URL hash, last plan saved in localStorage.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no chore rota or weekly assignment tool with spatial drag and local fairness balancer exists (random team and secret santa are different; seating chart is tables not days).

**Concept**
A practical spatial weekly chore rota for The Verse canvas. People and chores are entered; chores appear as draggable cards that can be dropped onto a grid of people × days of the week. A local pure-JS fairness balancer (greedy load-minimizing assignment with optional difficulty weights) proposes an even distribution; the user can drag to override any cell. Real-time visual feedback shows per-person load and overall fairness. The layout can be exported as a clean PNG, the assignments copied as text, and the whole plan shared via URL or restored from localStorage. Useful recurring job for households, roommates, or teams.

**Novelty**
Leaves the recent cluster of seating charts, note layouts, and form calculators. Core novel combination is interactive spatial drag-and-drop of living chore cards onto a fixed multi-person multi-day grid with live local load-balancing optimizer, plus canvas-based visual PNG export and sealed persistence. Not a particle field, lattice, swarm, orb or "mind"; a tool that produces a keepable fair weekly rota from the person's own people and chore list. Spatial embodiment of assignments + local optimizer that responds to user drags.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS:
- People and chore input editors.
- Weekly grid (people rows × 7 days) as drop targets with visual load bars.
- HTML5 drag-and-drop or pointer events for assignment of chore cards.
- Local balancer: computes total difficulty per person, greedily assigns unassigned chores to lowest-load person for each day, or full rebalance button.
- Live conflict/fairness display (max load difference, average).
- Canvas rendering of the current grid for PNG download.
- localStorage restore; URL hash (JSON) for share link.
- Mobile-friendly touch support; works offline after load.

**Expected outcome**
Runnable prototype. Add people and chores, auto-balance or drag to assign, fairness updates live, PNG downloads, copy works, reload restores, share link reloads the plan.

**Mechanics**
1. Load from hash/localStorage or start empty.
2. Parse people and chores (with optional difficulty).
3. On balance: for each day, assign chores round-robin or by lowest current load.
4. Drag chore card onto cell to place or move; empty cells accept drops; drag out to unassign.
5. Update load bars and fairness score each change.
6. Seal/export: canvas draw of grid → PNG; text list of assignments.
7. Persist to localStorage and encode to hash on change.

**Failure modes**
- No people or chores: show empty state and prompt.
- Too many: clamp to 12 people / 40 chores and warn.
- No localStorage: session only.
- Touch devices: pointer events + long-press drag fallback.

Void is now Verse everywhere.

**Files**
drafts/F663-chore-rota-spatial/SPEC.md
drafts/F663-chore-rota-spatial/index.html
