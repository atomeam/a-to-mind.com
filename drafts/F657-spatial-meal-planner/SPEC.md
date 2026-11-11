Plain name: Spatial weekly meal planner
Job: Assign meals to days of the week by dragging cards into day slots, generate a consolidated grocery list from ingredients, copy the plan or list, download CSV, and restore from device storage or share link.
Input: Meal cards (name + ingredients list); drag onto Mon–Sun slots (multiple per day); optional notes.
Keeps: Copy plain-text weekly plan + grocery list; download .csv of meals and ingredients; last plan saved in localStorage (`verse-f657-meal`); share link encodes the plan in the URL hash.
Not on Verse yet: checked against llms.txt and recent F- (budget allocator, bill splitter, habit tracker, note clusterer) — no offline drag-to-day meal planner with auto grocery consolidation, export, and spatial reassignment.

**Concept**
A practical weekly meal planner for The Verse canvas. Create or edit meal cards with names and ingredient lists. Drag them into the seven day columns. Instantly see a consolidated grocery list (unique ingredients with quantities if specified). Everything stays on the device. Useful recurring job people return to.

**Novelty**
Leaves the recent cluster of form-based calculators, trackers, and force-directed note clusterers. Core novel combination is drag-and-drop spatial assignment of living meal cards onto a fixed weekly grid that drives live grocery aggregation, plus keepable export and persistence. Not a particle field, lattice, swarm or mind; a tool that produces a keepable meal plan and shopping list from the person's own meals.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Meal editor: name + textarea ingredients (one per line, optional qty).
- Day columns (Mon–Sun) that accept drops; multiple meals per day.
- Live grocery: parse ingredients, unique sorted list.
- localStorage restore; URL hash (compressed JSON) for share.
- Mobile-friendly; works offline after load.

**Expected outcome**
Runnable prototype. Add meals, drag to days, grocery updates, copy/download work, reload restores, share link works.

**Mechanics**
1. Load from hash/localStorage or empty with sample meals.
2. Render meal palette and day slots.
3. Drag-drop reassigns; update grocery.
4. Seal: copy or download.

**Failure modes**
- No meals: empty grocery.
- Storage blocked: session only.
- Long ingredient lists: still works.

**Measurement**
Manual: drag assigns, grocery consolidates duplicates, exports valid, reload restores, offline after load.

**Files**
drafts/F657-spatial-meal-planner/SPEC.md
drafts/F657-spatial-meal-planner/index.html

**V01D landing**
Spatial meal planner skill under void-live-deploy/skills/spatial-meal-planner.js; test asserts sample meals drag to days, grocery list has unique items, CSV export contains day columns.
