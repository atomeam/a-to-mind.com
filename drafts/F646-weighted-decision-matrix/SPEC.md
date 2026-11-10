# F646 Weighted decision matrix
Plain name: Weighted decision matrix
Job: List your options and the criteria that matter, give each criterion a weight and score each option; see the ranked totals update live, then copy the ranking or download it as CSV.
Input: Dynamic lists for options and criteria; number inputs for weights (1–10) and scores (1–5 or 1–10); optional notes.
Keeps: Copy the ranked summary as text; download CSV of all scores and weighted totals; last matrix saved in localStorage (`verse-f646-decision`); share link carries the data via URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline weighted decision matrix with live ranking, CSV export and share link.

## Concept
A practical offline tool that turns a set of options and weighted criteria into a clear ranked decision. Add options and criteria, enter weights and per-option scores, see live weighted totals and ranking, then keep the result as copyable text or CSV. Works on a phone, nothing sent anywhere, honest arithmetic only.

## Novelty
Leaves the recent cluster of practical form utilities (receipt parsers, subscription trackers, flowcharts, paint/fuel estimators, scoreboards) and any continuum physics or neural morph experiments. Core novel combination is a previously unused pure-JS weighted-sum ranking engine embodied as an editable table with live sort, dual text/CSV keep, and hash-share persistence. Not a particle field, lattice, swarm, or neural mind; a tool that produces a keepable ranked list from the person's own criteria and scores.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Dynamic add/remove for options and criteria.
- Table of scores with number inputs.
- Live computation of weighted totals, sort by total descending.
- localStorage restore; URL hash encode for share.
- Download CSV; copy summary.
- Progressive: works without any extra APIs.

## Expected outcome
Runnable offline prototype. Add a few options and criteria, enter scores, see ranking update; Download CSV and Copy produce valid output; share link and reload restore the matrix.

Void is now Verse everywhere.
