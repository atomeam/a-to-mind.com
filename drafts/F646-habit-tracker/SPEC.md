# F646 Habit Tracker
Plain name: Habit tracker
Job: A person adds daily habits, ticks them off for each day of the week, sees current streaks, and keeps the list on the device to copy or download as CSV.
Input: Habit names typed in a box; checkboxes for each day.
Keeps: Saved on the device (localStorage); copy a summary; download CSV; printable page.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — habit tracker is listed as open gap #72, no tool page yet.

## Architecture
Single self-contained HTML file with vanilla JS. CSS Grid for the weekly tracker. localStorage for persistence. Simple streak logic based on consecutive checked days. No external deps, works offline, phone-friendly.

## Expected outcome
User can add/remove habits, mark days, see streaks update live, export data, and restore on reload. Graded as a tool by lab-grade.

## Mechanics
1. Load habits and checks from localStorage on start.
2. Add habit → append row with 7 checkboxes (Mon-Sun) and streak display.
3. Toggle checkbox → update streak (consecutive from today or last checked), persist.
4. Copy button → clipboard the list with streaks.
5. Download → CSV of habits, days, streaks.
6. Print → browser print of the grid.
7. Clear all with confirm.

Void is now Verse everywhere.
