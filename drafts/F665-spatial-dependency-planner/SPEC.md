# F665 Project dependency planner
Plain name: Project dependency planner
Job: Paste a list of tasks with durations and predecessors; the page lays them out as a spatial timeline of bars you can drag to reorder or adjust, computes the critical path and earliest starts locally, and gives back a downloadable PNG of the chart plus a copyable schedule.
Input: Textarea of tasks (one per line: name, duration in days, optional predecessor names separated by commas); pointer drag on the timeline bars.
Keeps: Download PNG of the Gantt-style chart, copy the ordered schedule as text or Markdown, last plan saved in localStorage, share link via URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no project planner, Gantt, or dependency timeline tool exists (flowchart is freeform boxes, seating and chore rota are different grids).

**Concept**
A practical spatial project planner for The Verse canvas. User enters tasks with durations and dependencies. The page performs a local topological sort and critical-path calculation (forward/backward pass for earliest/latest starts), then renders a horizontal timeline of colored bars. Users can drag bars to nudge positions or reorder non-conflicting tasks; the critical path is highlighted. Export produces a clean PNG of the current layout and a textual schedule. Everything stays on-device.

**Novelty**
Leaves the recent cluster of seating charts, chore rotas, label sheets, note clusterers, and text-to-flowchart. Core novel combination is interactive spatial Gantt bars driven by local dependency-graph analysis (topological order + critical path), user drag adjustments that respect predecessors, and canvas PNG keep. Not a particle field, lattice, swarm, orb, residual MLP, or sealed-genome mind; a tool that produces a keepable project schedule from the person's own task list.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Task editor textarea with simple parse (name | days | preds).
- Timeline canvas or SVG with absolute-positioned or drawn bars.
- Pointer-event drag for bar position (clamped by dependencies).
- Local algorithms: adjacency list, Kahn or DFS topo sort, forward pass for ES/EF, backward for LS/LF, slack, critical path.
- Live highlight of critical bars and total duration.
- Canvas rasterization for PNG download.
- localStorage + URL hash persistence.
- Mobile-friendly; offline after load.

**Expected outcome**
Runnable prototype. Paste 6–8 tasks with a few dependencies, see the timeline and critical path, drag a non-critical bar, download PNG, copy the schedule, reload restores the plan.

**Mechanics**
1. Parse input lines into tasks {id, name, duration, preds}.
2. Build graph; detect cycles (warn and ignore cyclic preds).
3. Compute ES/EF/LS/LF/slack; mark critical (slack=0).
4. Layout bars on a day-scale timeline starting from day 0.
5. Drag a bar horizontally; if new start violates a predecessor finish, snap or warn.
6. On change, recompute or keep user overrides for non-critical.
7. Export: draw chart to canvas → PNG; generate Markdown list of tasks with start/finish.

**Failure modes**
- Cycle: toast “cycle detected, ignored that dependency”.
- No tasks: empty prompt.
- Too many: clamp to 40 tasks.
- Storage blocked: session only.
- Touch: pointer events with drag threshold.

Void is now Verse everywhere.

**Files**
drafts/F665-spatial-dependency-planner/SPEC.md
drafts/F665-spatial-dependency-planner/index.html
