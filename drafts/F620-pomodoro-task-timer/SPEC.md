# F620 Pomodoro task timer

Plain name: Pomodoro timer with tasks

Job: Add tasks, run 25-minute work sessions (or your length) on one of them with short and long breaks, see how many you finished today and per task; the list and tally stay on this device, copy or download the day's summary.

Input: Text box to add a task; buttons to start/pause a work or break session on a selected task; optional custom lengths; rate or just complete sessions.

Keeps: Tasks, per-task pomodoro counts and today's tally in localStorage (`verse-f620-pomo`); copy the summary text; download .txt or CSV of the list with counts.

Not on Verse yet: checked against llms.txt (stopwatch has interval timer but no task-tied Pomodoro with daily tally) and GAPS.md (meditation timer is different; no Pomodoro task tool).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Tasks rendered as a list (touch-friendly); selecting one sets it as current for the timer.
- Timer uses requestAnimationFrame + performance.now() for accuracy; modes: work (default 25), short break (5), long break (15).
- On work complete, increments that task's count and today's tally (date-keyed); auto-suggests break.
- Persistence via localStorage; date check resets today's tally if new day.
- Offline-capable; responsive for phone.
- Web Audio API generates a short end-of-session tone (no external files).

## Expected outcome
User adds 3–5 tasks, starts a work session on one, watches the countdown and progress ring, completes it (tally updates), takes a break, reloads the page and everything remains, copies or downloads the summary. Honest: no cloud sync; times are local; long-term stats not kept beyond current day and task totals.

## Mechanics
- Add task: append to array, render, save.
- Select task: highlight, set as active for next start.
- Start: begin countdown for current mode; pause/resume; skip to complete early if wanted.
- Complete work: +1 to task and today; switch mode suggestion.
- Export: generate text "Task: N pomodoros" list + "Today: M"; copy to clipboard; download as .txt or CSV.
- Reset today: button with confirm.
- Sound: oscillator beep on complete if AudioContext available.

## Novelty / Frontier note
First dedicated Pomodoro-with-task-list-and-daily-tally tool in the series (after the calculator cluster and the spatial flashcards/taskboard). Combines local persistence, accurate client timer, and per-task accounting into a practical productivity tool. Spatial arrangement optional via simple reorder (not a lattice or mind). Expands the useful-tool frontier with a session tracker people return to.

## Failure modes
- localStorage full or disabled: in-memory only, warning shown.
- No Web Audio: silent end.
- Tab backgrounded: timer continues via timestamps, not relying on continuous rAF.
- Invalid custom lengths: clamped to 1–90 min.

## Building blocks
Reusable client-side countdown + localStorage daily tally + task list for future time-tracking or habit tools.

**Files**: drafts/F620-pomodoro-task-timer/SPEC.md, drafts/F620-pomodoro-task-timer/index.html
