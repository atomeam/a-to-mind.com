# F613 Tip calculator
Plain name: Tip calculator
Job: Enter a bill amount, tip percent and number of people; see the tip, total and each person's share with optional rounding; copy the summary line.
Input: Bill total, tip percentage (or presets), number of people, and rounding preference (none, nearest cent, nearest dollar).
Keeps: Copy the full breakdown as a single line of text; the last values are saved on the device for next time.
Not on Verse yet: checked against llms.txt and GAPS.md — no dedicated tip-with-rounding tool exists (basic tip math is available via formula calculators, but not this exact flow with copy-ready line and rounding modes).

## What existing sites do
Most tip calculators are simple total-and-percent forms that return tip and grand total. Few offer clear per-person rounding options or a ready-to-paste summary line. Many require network or ads.

## Better Verse version
Offline, private, single page. Preset tip buttons, custom percent, people count, three rounding modes. Instant live update. Persistent last settings in localStorage. One-click copy of a clean summary line. Works on phone, no account, nothing sent.

## Architecture
- Single index.html (HTML/CSS/JS).
- localStorage for persistence (key: verse-tip-calculator-v1).
- No network after load.
- Mobile-first responsive layout.
- Accessible form controls and live region for results.

## Failure modes
- Floating-point: all money math done in cents (integers) then formatted.
- Zero or negative bill: results stay zero with a soft cue.
- Zero people: treated as 1.
- Invalid input: ignored or clamped with visual feedback.
