# F641 Subscription tracker

Plain name: Subscription tracker
Job: Add your services with prices and renewal dates; see monthly and yearly totals; download a CSV or generate .ics reminders for renewals.
Input: Service name, price, billing cycle (monthly/yearly), renewal date, optional notes.
Keeps: Download CSV of all subscriptions and totals; download .ics calendar file with renewal reminders; data saved in localStorage for next visit.
Not on Verse yet: checked against llms.txt and GAPS.md — no offline subscription tracker with renewal totals and .ics export.

## Concept
A practical offline tool to track recurring subscriptions, calculate spending, and export reminders. Enter services, see at-a-glance monthly/yearly cost, mark active/cancelled, and seal the list as CSV or calendar events. Works on phone, nothing sent anywhere.

## Novelty
Leaves the recent cluster of raffle draws, scoreboards, teleprompters, Morse tools, meme makers, label sheets, and audio/DOM morph experiments (F633–F640). First dedicated subscription tracker with dual CSV + ICS keep, cycle-aware totals, and local persistence. Useful tool per the 2026-11-06 brief. Not a field, lattice, or neural mind.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:

- Form to add/edit service (name, amount, cycle, next renewal date, notes, status).
- Table of subscriptions sorted by next renewal.
- Live totals: monthly equivalent, yearly.
- localStorage key `verse-f641-subs`.
- CSV download of the list + summary.
- ICS generation with VEVENT for each upcoming renewal (and optional yearly).
- Mobile-friendly, offline after load, no external deps.

## Expected outcome
Runnable prototype: add several subscriptions, totals update, edit/delete, reload keeps data, download CSV and ICS. Honest empty state. Phone usable.

## Mechanics
1. Load from localStorage on start.
2. Add form validates name + positive price + date.
3. Totals recompute on change: monthly = sum (price if monthly else price/12), yearly = monthly * 12.
4. Export CSV: headers + rows + summary row.
5. Export ICS: standard VCALENDAR with SUMMARY, DTSTART, RRULE if yearly.
6. Persist after every mutation.

## Failure modes
- Invalid date: ignore or prompt.
- Empty list: show helpful empty message, exports disabled or empty files.
- Large list: table scrolls.
- ICS import may vary by calendar app (tested format is standard).

## Measurement
Manual: add 5 services of mixed cycles, verify totals, download files open correctly, reload persists, works offline.
