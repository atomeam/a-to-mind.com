# F615 Packing list maker
Plain name: Packing list maker
Job: Choose trip length, type and conditions to get a suggested packing list you can edit, tick off, save on this device, copy as text or download as CSV.
Input: Trip name, days, trip type (beach, hiking, city, business, winter, road trip), and weather (hot, mild, cold, wet).
Keeps: Tick items as packed; add or remove items; the list is saved on the device for next time; copy the unchecked or full list as text; download CSV.
Not on Verse yet: checked against llms.txt and GAPS.md — grocery list exists but no dedicated trip packing list maker with categories, suggestions and persistence.

**What existing sites do**
Most packing apps need accounts, sync, or live weather. Online generators often require destination lookup or sign-up. Simple checklists are static.

**Better Verse version**
Fully offline after load. Pre-built sensible suggestions by trip type and conditions. Categorized (clothes, toiletries, documents, electronics, etc.). Fully editable. Persistence with localStorage. Copy-ready and CSV export. Works on phone. No account, nothing sent.

**Architecture**
- Single index.html (HTML/CSS/JS).
- localStorage key `verse-packing-list-v1` for the current list and settings.
- Suggestion engine is pure client-side lookup tables.
- Mobile-first responsive layout.
- Accessible checkboxes and buttons.

**Failure modes**
- Storage full or private mode: falls back to in-memory only, notes that saving may not persist.
- Empty list: clear empty state with prompt to generate or add.
- Duplicate items: allowed (user can remove).

**Files**: drafts/F615-packing-list-maker/SPEC.md, drafts/F615-packing-list-maker/index.html
