# F616 GPA calculator
Plain name: GPA calculator
Job: Enter your courses with credits and grades on a 4.0 letter or percent scale; see the weighted GPA update live, a simple bar breakdown of points, copy the summary line or download the full table as CSV; the list is saved on this device for next time.
Input: Course name (optional), credit hours, grade (A–F or 0–100), and a scale toggle.
Keeps: Copy the summary (GPA and total credits); download CSV of the table; last entries saved in localStorage.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (loan/mortgage and final-exam-grade tools exist, but no multi-course GPA with save/CSV) and docs/GAPS.md in atomeam/void-loop (final exam grade needed is listed, not a full GPA calculator).

## Architecture
- Single HTML file, no dependencies.
- Courses held in an array; on every change recompute weighted sum of grade-points × credits / total credits.
- Grade map: A=4, B=3, C=2, D=1, F=0; percent mapped linearly (90–100=4, 80–89=3, etc.) with optional custom.
- Canvas or CSS bars for visual of contribution per course.
- localStorage key `verse-f616-gpa`.
- Works offline, mobile-friendly, no network.

## Expected outcome
User can add 1–20 courses, see accurate GPA (to 2 decimals), export data, resume later. Honest: standard US 4.0 weighting, no plus/minus unless entered as percent.

## Mechanics
- Add row button appends a course card.
- Inputs fire input/change events that call recalc().
- Copy button uses navigator.clipboard.writeText.
- CSV download creates Blob and ObjectURL.
- Remove buttons splice the array.
- Scale switch converts existing grades on the fly.
