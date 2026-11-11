# F661 Label and name tag sheet
Plain name: Label and name tag sheet
Job: Paste a list of names; choose paper size, label dimensions and font; arrange them on a live printable sheet (drag to reorder); download a PNG ready to print or copy the list.
Input: Textarea of names (one per line); selects for paper (Letter/A4), label width/height (in or mm), font size; pointer drag on the preview sheet.
Keeps: Download PNG of the full sheet; copy button for the name list; last layout and settings restored from localStorage.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and GAPS.md — no dedicated printable name-tag / label sheet maker with live spatial reorder and PNG export.

## Concept
A practical spatial layout tool for The Verse canvas. User pastes names. The page computes a grid that fits the chosen paper and label size, renders a scaled preview sheet with absolute-positioned label cards, and lets the user drag cards to reorder them. A “Download PNG” button rasterizes the sheet at print resolution. Everything stays on-device.

## Novelty
Leaves the dominant recent cluster of pure form utilities (tip/subscription/meal/seating/voice) and spatial agent/portal/WebXR spectral minds (F653–F660). Core novel combination is interactive spatial packing of user-supplied text onto a real-world printable page with drag-reorder, live metric feedback (how many fit, waste), and direct PNG keep. Not a particle field, lattice, swarm, residual predictor, NCA, spectral residual, or sealed-genome competition.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Dynamic label cards absolutely positioned inside a scaled paper preview.
- Drag-and-drop reordering (pointer events).
- Canvas or offscreen canvas for high-res PNG export.
- localStorage persistence of names + settings.
- Responsive, works on phone, offline after load.

## Expected outcome
User pastes 20 names, picks Avery-style 1″ × 2.625″ labels on Letter, drags a few into preferred order, downloads a crisp PNG, and can reload later with the same list. Useful, keepable, graded as a tool.

## Failure modes
- Too many names for the sheet: show overflow count and offer multi-page or smaller labels.
- Invalid dimensions: clamp to sensible ranges.
- Canvas too large: scale export.
- Storage unavailable: session-only.

## Files
drafts/F661-label-name-tag-sheet/SPEC.md
drafts/F661-label-name-tag-sheet/index.html

Void is now Verse everywhere.
