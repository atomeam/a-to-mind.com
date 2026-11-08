# F630 Time card

Plain name: Time card
Job: Clock in and out by day, subtract breaks, add overtime after a limit, see the week's total hours and pay estimate, then copy the summary or download a CSV.
Input: Per day: start time, end time, break minutes; overtime threshold (daily or weekly); optional hourly rate; week start date.
Keeps: Copy the weekly summary line; download .csv of the timesheet; last week saved in localStorage (`verse-f630-timecard`); share link carries the numbers via URL hash.
Not on Verse yet: checked against llms.txt and GAPS.md — floating pages have stopwatch/timer but no offline weekly time card with breaks, overtime threshold, visual timeline bars, and CSV export.

## Concept
A practical weekly timesheet tool. Enter clock-in, clock-out and breaks for each day of the week. Set an overtime threshold. Instantly see regular hours, overtime hours, total hours and optional pay. Visual horizontal bars on a 24-hour timeline show each day's work period. Everything stays on the device.

## Novelty
Leaves the recent cluster of pure calculators (fuel cost, paint, flooring, recipe scaler, GPA) and earlier spatial/particle "minds". Core combination is a real job (weekly time card that people actually use) with an interactive spatial timeline visualization of the work periods (CSS/JS bars you can read at a glance, click to highlight) plus live overtime math and export. Not a particle field, not a neural mind, not a demo lattice. Deliberately useful per the 2026-11-06 brief.

## Architecture
Single self-contained HTML file. Pure vanilla JS + CSS:

- Seven day rows with <input type="time"> for start/end and number for break minutes.
- Overtime mode: daily threshold (default 8 h) or weekly (default 40 h).
- Optional rate for pay estimate (honest: "estimate only, not a payroll system").
- Live calculation: worked = (end - start) - break; regular vs OT split according to threshold.
- Visual: each day has a 24 h timeline track; a colored bar shows the worked interval (handles overnight if end < start by adding 24 h).
- Persistence: localStorage under `verse-f630-timecard`; URL hash encodes the inputs for sharing.
- Export: CSV with headers Date, Start, End, Break (min), Hours, Regular, OT, Notes.
- Copy: one-line summary "Week of YYYY-MM-DD: X.Xh total (Y.Y regular + Z.Z OT)".
- Mobile-friendly, works offline after load, no external assets or network.

## Expected outcome
Runnable prototype: enter times, see bars and totals update live, adjust threshold, copy or download the sheet, reload and numbers are still there. Graceful on phones (native time pickers). Honest notes when times are missing or negative.

## Mechanics
1. Initialize from localStorage or URL hash, else empty week starting today.
2. On any input change: parse times, compute minutes worked per day, apply OT logic, update totals and bars.
3. Timeline bars: width and left offset proportional to minutes past midnight.
4. Save button or auto-save on change to localStorage.
5. CSV download via Blob + a.download.
6. Copy via navigator.clipboard.writeText with fallback.

## Files
drafts/F630-time-card/SPEC.md
drafts/F630-time-card/index.html

## V01D landing
Weekly timesheet card under void-live-deploy skills or tools; test asserts start/end/break → correct hours and OT split, CSV headers present.
