# F655 Subscription tracker

Plain name: Subscription tracker

Job: Add your subscriptions with name, price, billing cycle and next renewal date; see monthly and yearly totals, a timeline of upcoming renewals, and download calendar reminders as .ics or a CSV of the list.

Input: Name, price, cycle (monthly/yearly/weekly), next date for each service; add/edit/remove rows.

Keeps: Copy the summary totals and list as text; download CSV of all subscriptions; download .ics with one VEVENT per renewal (and recurring if monthly/yearly); last list saved in localStorage (`verse-f655-subs`); share link carries the encoded list via URL hash.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline subscription tracker with renewal dates, monthly/yearly rollups, visual timeline, CSV and .ics export.

## What existing sites do

Subscription managers are usually tied to bank accounts or apps that require login and send data. Simple spreadsheets exist but no one-page offline tool that calculates totals, shows a timeline of next charges, and generates ready-to-import calendar reminders.

## Better Verse version

Fully offline after load. Nothing leaves the device. Add services freely. Live totals for monthly and yearly spend. Visual horizontal timeline of the next 90 days with renewal markers you can hover. One-click .ics for all upcoming renewals (with RRULE for recurring). CSV for a spreadsheet. List persists on the device and can be shared via link.

## Architecture

Single self-contained index.html. Vanilla HTML/CSS/JS.

- Dynamic table of subscriptions.
- Computed monthly equivalent and yearly total.
- Canvas timeline of next 90 days.
- localStorage persistence.
- Hash-based share.
- ICS generator with DTSTART and RRULE.
- Works on phone, offline.

## Expected outcome

Someone lists Netflix $15.99 monthly next on the 15th, Spotify $9.99, gym $49 yearly. Sees ~$32/month and ~$384/year. Downloads an .ics that adds reminders to their calendar. Copies the list for a friend.

## Failure modes

No dates: still totals the prices. localStorage blocked: works for session. Very many subs: table scrolls. Invalid date: ignored for timeline.

## Files

drafts/F655-subscription-tracker/SPEC.md
drafts/F655-subscription-tracker/index.html

Void is now Verse everywhere.
