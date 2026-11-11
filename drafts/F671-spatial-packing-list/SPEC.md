# F671 Packing list maker
Plain name: Packing list maker
Job: Tell the page your trip length, kind of trip and weather; add items (with optional weight); drag them into bags or categories on a spatial board; the page totals the weight, suggests common missing items from local rules, and gives back a downloadable text checklist plus a PNG of the layout, saved on the device.
Input: Number for days, selects for trip type (beach, city, hiking, business) and weather (hot, mild, cold, wet); text field to add items with optional grams; pointer drag to move item cards between bag zones.
Keeps: Download the full list as .txt; download a PNG snapshot of the current spatial board; copy the checklist as text; last list restored from localStorage (`verse-f671-packing`); share link carries the items via URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline packing-list tool with spatial bag assignment, weight total, local suggestion rules, dual text+PNG keep and device persistence (simple lists exist in other forms but not this).

**Concept**
A practical spatial packing organizer for The Verse canvas. The person supplies trip parameters and their own items. Item cards live in a free spatial board divided into bag zones (Carry-on, Checked, Personal). Dragging moves them between zones. A local rule set (no external model) suggests essentials based on days/type/weather (e.g. “sunscreen” for beach+hot). Totals update live. Everything stays on-device.

**Novelty**
Leaves the recent cluster of spatial planners (dependency Gantt F665, kanban F666, room layout F667, barcode inventory F670, note clusterer F656) and residual physics/neural demos. Core novel combination is interactive spatial bag zones driven by the person’s own item list, local deterministic suggestion rules, live weight sum, and dual keep (text checklist + canvas PNG). Not a particle field, lattice, swarm, residual MLP, sealed genome, or orientation mind; a tool that produces a keepable packing plan.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Controls for trip params and add-item form.
- Spatial board with three absolute or flex bag zones; item cards are draggable DOM elements.
- Pointer events for drag-and-drop between zones.
- Suggestion engine: small hardcoded map of (type, weather, days) → item list; “Suggest” button adds missing ones.
- Weight sum of all items.
- localStorage + URL hash persistence.
- Export: generate plain-text checklist; render board to canvas for PNG download.
- Mobile-friendly; offline after load.

**Expected outcome**
Runnable prototype. Set a 5-day beach trip in hot weather, add a few items, drag them into bags, hit Suggest, see weight, download TXT and PNG, reload restores the list.

**Mechanics**
1. Parse or load items {name, weight, zone}.
2. Render cards in their zone containers.
3. Drag: on pointerup, detect which zone the card is over and reassign.
4. Suggest: filter rules by current params, add any not already present.
5. Update total weight display.
6. Export: build Markdown/text list grouped by zone; draw a simple canvas representation for PNG.

**Failure modes**
- No items: empty prompt.
- Too many: soft limit ~80.
- Storage blocked: session only.
- Touch: pointer events with drag threshold.
- Weight missing: treat as 0.

Void is now Verse everywhere.

**Files**
drafts/F671-spatial-packing-list/SPEC.md
drafts/F671-spatial-packing-list/index.html
