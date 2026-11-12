# F699 Meeting cost calculator

Plain name: Meeting cost calculator

Job: Enter the number of people, their average hourly rate, and the planned length of the meeting; see the total cost and cost per minute, optionally start a live timer that shows the running cost, then copy the summary or download it.

Input: Number inputs for attendees (1–50), average hourly rate (any currency unit), planned duration in minutes; start/stop button for live running cost.

Keeps: Copy the full cost summary as plain text; download the summary as a .txt file; last inputs and any running session saved on the device in localStorage for next time.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no dedicated offline meeting cost calculator with live timer and export exists.

## Architecture
Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Form inputs update a live calculated total and per-minute cost.
- Optional live timer (requestAnimationFrame or setInterval based on Date.now() for accuracy even if tab backgrounded) increments elapsed time and running cost.
- Visual: simple CSS grid of person icons whose opacity or a progress bar reflects elapsed vs planned, plus a large cost display.
- localStorage key `verse-f699-meeting` stores inputs and timer state.
- Copy uses navigator.clipboard.writeText; download creates a Blob + object URL.

## Expected outcome
A person types 8 people at $75/hour for a 45-minute meeting, sees "$450 total ($10 per minute)", starts the timer, watches the running cost climb, copies the line to share in Slack, and on reload the numbers are still there. Honest: uses the entered rate; no inflation, no overhead, just people × rate × hours.

## Mechanics
1. On input: recompute total = attendees * rate * (minutes / 60); perMinute = total / minutes.
2. On start: record start timestamp; each second update elapsed, runningCost = attendees * rate * (elapsedSeconds / 3600).
3. On stop/reset: clear timer.
4. Save on change and before unload.
5. Restore on load.

## Failure modes
- Zero or negative numbers: clamp to sensible minima and show a note.
- Very large numbers: display with toLocaleString, no overflow.
- Clipboard denied: fallback to select-all on a textarea.
- localStorage blocked: works in memory, notes that saving may not persist.

## Building blocks
Reusable live cost-ticker + form-to-summary pattern for other time-based cost tools (e.g. contractor billing, event budgets).

Void is now Verse everywhere.
