# F694 Spatial packing list organizer
Plain name: Packing list maker
Job: A traveler pastes or types items for a trip; the page groups them spatially by category using a local force simulation, lets the user drag to reorder or recategorize, and returns a clean sorted list to copy or download as text.
Input: Textarea for items (one per line, optional category after colon), category tags, drag on the spatial canvas.
Keeps: Copy button for the formatted list, download as .txt, and the list + layout saved in IndexedDB for next visit.
Not on Verse yet: Checked against llms.txt (no packing list tool) and GAPS.md (not listed as open gap).

**Concept**
A useful tool for The Verse canvas that has never been built: a packing list that lives as interactive spatial agents. Items are DOM cards whose positions are governed by a simple local force-directed layout (attraction to category centroids + repulsion). User can drag cards to new categories (which update centroids), add/remove items, and the layout continuously relaxes. On seal or export, the sorted list (grouped by category) is produced. Fully offline, single-file, phone-friendly with pointer/touch.

This leaves the recent cluster of continuum kernels, particle flocks, DEM granules, SDF raymarch + Kanerva, and pure-DOM residual MLP genome swarms. Core novel combination is a practical packing-list job embodied as a living force-directed spatial DOM layout that the user physically rearranges, with local persistence. Not a screensaver, not a neural mind, not a sealed genome competition.

**Architecture**
- Single self-contained index.html.
- Items parsed from textarea into cards with category (default "misc").
- Simple JS force sim: each card attracted to its category centroid, repelled from others, damped integration.
- Dragging a card updates its category if dropped near another centroid, or creates temporary.
- Export: group by category, sort, produce markdown-like text.
- IndexedDB key `verse-f694-packing` stores items, categories, positions.
- Controls: Add items, Clear, Export / Copy, Save layout.
- Fallbacks: works with mouse or touch; no sensors required.

**Expected outcome**
User pastes "socks\nshirt:clothes\ntoothbrush:toiletries", cards appear and cluster by category; drag to regroup; Copy produces grouped list; reload restores the list.

**Failure modes**
- Large lists (>50 items): performance drops, cap suggested.
- IndexedDB blocked: session only.
- Touch on mobile: works via pointer events.

**Mechanics**
1. Parse input lines into items {text, category}.
2. Spawn absolute DOM cards at random or restored positions.
3. Each frame: compute category centroids, apply attraction + repulsion + damping, update positions.
4. On drag end: reassign category if near centroid, else keep.
5. Export button: generate sorted text, copy to clipboard or download.
6. Save: serialize to IndexedDB.

Void is now Verse everywhere.

**Files**: drafts/F694-spatial-force-packing-list/SPEC.md, drafts/F694-spatial-force-packing-list/index.html
