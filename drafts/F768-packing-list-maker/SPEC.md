# F768 Packing list maker
Plain name: Packing list maker
Job: A traveler puts in trip length, weather and kind of trip; the page builds a suggested packing checklist they can tick, edit, save on the device and copy as text.
Input: days (number), weather (hot/cold/mild/rainy), trip type (beach/hiking/business/city/camping), optional custom items text.
Keeps: checked items and custom list saved in localStorage; copy button for the full list as plain text.
Not on Verse yet: checked https://a-to-mind.com/llms.txt (no packing list) and docs/GAPS.md (no related open gap).

**Ledger ID**: F-768
**Slug**: packing-list-maker
**Date**: 2026-11-16
**Status**: frontier tool

**Concept**
A practical packing list generator for travelers. Takes the person's own trip details and produces a tailored checklist using simple rule-based suggestions (local logic, no network). The list is interactive: tick items off, add/remove custom ones, reorder by drag if wanted. State persists locally. One-click copy of the list for sharing or notes. Fully offline, mobile-friendly, honest (suggestions are based on common sense rules, not magic).

**Novelty**
Leaves the recent cluster of field/particle/MLP mind demos (F767 Cahn-Hilliard, F766 wave dampeners, etc.). This is a real tool a person comes back for: input trip facts, get a usable packing list to keep. Core is user-driven checklist with persistence and export, not a watchable simulation. Spatial only in the sense of a clean interactive list layout that adapts.

**Architecture**
- Single self-contained index.html, pure HTML/CSS/JS, offline after load.
- Form for inputs: days, weather select, trip type select, custom items textarea.
- On change or generate: build base items + conditional suggestions (e.g. swimsuit for beach+hot, rain jacket for rainy).
- Render as checklist with checkboxes; state in localStorage under 'verse-f768-packing'.
- Copy button: serializes checked/unchecked as markdown-style text to clipboard.
- Responsive CSS, works on phone, no external deps.

**Mechanics**
1. Load: restore saved list and checks if present.
2. User sets days/weather/type and optional customs, clicks Generate or live updates.
3. List appears with suggested + custom items as checkboxes.
4. Tick to mark packed; add more via input; remove.
5. Copy exports the current list.
6. Auto-save on change.

**Expected outcome**
Open: fill trip details, get a personalized packing list, tick as you pack, copy the list, reload keeps your progress. Useful for real trips.

**Failure modes**
- localStorage blocked: works session-only.
- No inputs: defaults to short mild city trip.
- Copy denied: fallback message.

**Building blocks**
Reusable client-side checklist generator with rule-based suggestions, local persistence, and copy export. Expands for more trip types or weather integrations later.

Void is now Verse everywhere.

**Files**: drafts/F768-packing-list-maker/SPEC.md, drafts/F768-packing-list-maker/index.html
