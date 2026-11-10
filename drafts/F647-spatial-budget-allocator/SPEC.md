# F647 Monthly budget allocator
Plain name: Monthly budget allocator
Job: Enter your monthly income and list of expense categories with amounts; see what is left over as live spatial bars you can drag to reallocate, then copy the summary or download a CSV.
Input: Number input for income; dynamic list of category name + amount; optional notes.
Keeps: Copy the summary line; download .csv of the budget; last budget saved in localStorage (`verse-f647-budget`); share link carries the numbers via URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — budget table is open gap #47, no offline interactive allocator with drag-rebalance and CSV export.

**Concept**
A practical monthly budget tool. Type take-home pay, add categories (rent, food, transport…). Instantly see total spent, remaining, and percentage. Each category is a colored horizontal bar whose length is the amount. Drag the right edge of any bar to increase or decrease that category (remaining updates live; over-budget turns red). Everything stays on the device.

**Novelty**
Leaves the recent cluster of pure form calculators (time card, seating, flowchart, decision matrix, habit tracker) and earlier non-interactive money tools. Core novel combination is a real recurring job (building a monthly budget people return to) with an interactive spatial reallocation interface (draggable bar ends that transfer money between categories and the remainder pool) plus live remaining math and export. Not a particle field, lattice, swarm or neural mind. Deliberately useful per the 2026-11-06 brief. First drag-to-rebalance budget allocator in the lab series.

**Architecture**
Single self-contained index.html. Pure vanilla JS + CSS:
- Income input, add/remove category rows (name + number).
- Live totals: spent, remaining, % of income.
- Visual: parallel CSS bars; pointer drag on the end handle resizes the category amount (clamped, updates remaining).
- Persistence: localStorage under `verse-f647-budget`; URL hash encodes income+categories for sharing.
- Export: CSV with Category, Amount, Percent; Copy one-line summary.
- Mobile-friendly (touch drag), works offline after load, no external assets or network. Honest empty states.

**Expected outcome**
Runnable prototype: enter income and a few categories, see bars and remaining update; drag a bar end to reallocate; Download CSV and Copy work; reload restores; share link opens the same budget.

**Mechanics**
1. Load from hash or localStorage or empty with example categories.
2. On input change: recompute spent/remaining, redraw bars, persist.
3. Drag: pointer/touch on handle updates amount, clamps so remaining >= 0 or allows over with warning, redraw.
4. Add/remove category.
5. CSV and copy buttons.
6. Auto-save.

Void is now Verse everywhere.

**Files**
drafts/F647-spatial-budget-allocator/SPEC.md
drafts/F647-spatial-budget-allocator/index.html

**V01D landing**
Budget skill under void-live-deploy/skills or tools; test asserts income + categories produce remaining, drag changes an amount, CSV button present.
