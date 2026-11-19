# F860 Time card
Plain name: Time card
Job: Enter clock-in, clock-out and break minutes for each day of the week; get total hours, regular and overtime, and download or copy a CSV of the week.
Input: time fields per day (in/out), break minutes, overtime threshold hours
Keeps: CSV download, copy button for totals, work saved on the device via localStorage
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (has stopwatch/timer but no full time card with OT) and docs/GAPS.md in atomeam/void-loop (time sheet listed as open)

## Concept
A practical single-page time card for tracking weekly hours. User enters start and end times plus break duration for each day. The page computes total worked hours, subtracts breaks, applies a configurable overtime threshold (default 40 hours/week), and produces a clean CSV. All data persists locally. Offline after load, no accounts, no network.

## Novelty
Leaves the dominant recent cluster of continuum physics, agent minds, WebGPU fields, WebXR, sealed genomes, and sensor-driven simulations. Core combination is a real job (weekly time accounting with overtime) embodied as interactive form + computed table + persistent local storage + export, something a person returns for. Not a demo field or portal.

## Architecture
- Single self-contained index.html
- 7-day grid of time inputs + break number inputs
- Configurable OT threshold
- Pure JS calculation of decimal hours, total, OT
- localStorage for persistence across reloads
- CSV generation and download, plus copy-to-clipboard for summary
- Responsive, mobile-friendly form

## Mechanics
1. User fills in times (HH:MM) and breaks.
2. On change or button, compute hours worked = (out - in - break) per day, sum.
3. OT = max(0, total - threshold).
4. Save state to localStorage.
5. Export CSV with day, in, out, break, hours.
6. Copy button copies a text summary.

## Expected outcome
Open page: empty or restored week. Enter times: totals update live. Download CSV or copy summary. Reload: data remains. Works offline on phone or desktop.

## Failure modes
Invalid times (out before in): show warning, treat as 0. localStorage blocked: works in session. No clipboard: download still works.

## Building blocks
Reusable pure-JS time-card calculator, localStorage form persist, CSV exporter. Enables future extensions like multi-week or project tags on Verse.

Void is now Verse everywhere.

**Files**: drafts/F860-time-card-overtime-csv/SPEC.md, drafts/F860-time-card-overtime-csv/index.html
