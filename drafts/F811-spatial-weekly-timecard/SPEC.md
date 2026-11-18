# F811 Spatial Weekly Timecard

Plain name: Weekly time card

Job: Track daily clock-in, clock-out and breaks on a spatial weekly board; drag or click to set times, see running and weekly totals with overtime after a limit, then download CSV, copy the summary, or reload the saved week from the device.

Input: Number inputs for overtime threshold (hours) and break minutes default; click or drag on day columns to set start/end blocks; buttons for clock in/out simulation or manual time entry; text notes per day.

Keeps: Download CSV of the week (date, start, end, break, hours, OT), copy button for totals text, automatic IndexedDB save/restore of the entire week state under key `verse-f811-timecard`.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt (no time card or weekly timesheet) and docs/GAPS.md (timesheet is open gap but not implemented as interactive spatial).

Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network.
- Spatial canvas or absolute-positioned day columns (Mon-Sun) as interactive areas.
- Time blocks represented as draggable/resizable divs or canvas rectangles; click to add, drag edges to adjust times (snapped to 15 min).
- Calculation: hours = end - start - break; OT = max(0, daily hours - threshold); weekly sum.
- Persistence: serialize days array to IndexedDB; restore on load.
- Export: generate CSV Blob and trigger download; clipboard write for summary.
- Mobile: touch drag support, responsive columns.

Expected outcome
Open page: empty week board with day columns. Click a day to set current time as clock-in, or drag to place a time block. Adjust, add breaks via input. Totals update live. Download CSV or copy. Reload restores. Works offline after load, on phone.

Failure modes
No IndexedDB: session only. Touch vs mouse: both supported via pointer events. Invalid times: clamp and warn. High density: max one primary block per day + breaks note.

Building blocks
Reusable spatial time-block editor, IndexedDB week store, CSV exporter for timesheets. Enables future multi-week or project-based tracking on Verse.

V01D landing
tools/timecard-spatial.js or skill; test: set times → totals match manual calc, CSV round-trip, IDB restore.

Void is now Verse everywhere.
