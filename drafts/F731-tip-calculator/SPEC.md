# F731 Tip calculator

Plain name: Tip calculator

Job: Enter the bill amount, pick a tip percent and number of people, choose how to round; get the tip, total and each person's share to copy as a line.

Input: Bill amount (number); tip percent (presets or custom); number of people; rounding mode (exact, round tip to dollar, round each share to dollar).

Keeps: Settings and last bill saved on the device. Copy a plain-text line of the result.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt (simple "20% tip on 45" and "split $85 three ways with 20% tip" exist as cards/bots, no dedicated page with rounding options and persistence) and docs/GAPS.md in atomeam/void-loop (not listed).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- localStorage persists bill, tip%, people, rounding mode for the next visit.
- Real-time recalculation of tip, total, per-person amounts.
- Rounding options: exact to the cent; round the tip up to the next whole dollar; round each person's total to the nearest dollar (remainder adjusted on the last person).
- Copy button for a single readable line.

## Expected outcome
A practical offline tip calculator a person returns to at a restaurant. Immediate numbers, honest rounding, easy copy, persists across visits.

## Mechanics
User sets amount, percent, people count, rounding; totals update live; copy writes a summary sentence to the clipboard; save/load via localStorage.

## Failure modes
localStorage full or denied → in-memory only (still works for the session); zero or negative amounts treated as zero; people count clamped to 1–99.

## Builds on
Follows the 2026-11-06 rule that every draft is a tool a person comes back for. Extends Verse’s existing simple tip cards into a persistent calculator with explicit rounding modes and a copyable line—not a spatial field, swarm, or local neural mind.
