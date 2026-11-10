# F652 Bill splitter

Plain name: Bill splitter
Job: Add people and items with prices and who had them, set tax and tip percentages, and see each person's fair share of the total; copy the breakdown or download a text summary, with the whole bill saved on the device and restorable from a share link.
Input: List of people, items (description, amount, which people share it), tax rate, tip percent.
Keeps: Copy button for a plain-text who-owes-what summary; download .txt of the same; last bill saved in localStorage (`verse-f652-bill`); share link encodes the bill in the URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no general offline itemized bill splitter with per-person assignment, proportional tax/tip, copy/download and device + hash persistence.

## Novelty
Leaves the recent cluster of converters, checkers, trackers and simple calculators. Core novel combination is an itemized assignment model (items can be shared by subsets of people) driving live proportional splits of subtotal + tax + tip, embodied as an editable list with immediate per-person totals, plus keepable export and persistence. Not a particle field, lattice, swarm or mind; a tool that produces a keepable fair split from the person's own bill.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Dynamic people and items lists.
- Live recalculation of shares (item cost divided equally among assignees, then tax and tip allocated proportionally to each person's subtotal).
- localStorage restore on load.
- URL hash (base64 JSON) for share/restore.
- Mobile-friendly responsive layout, works offline after load.

## Failure modes
- Empty people or items: show "add at least one person and one item".
- Invalid numbers: ignore or show zero.
- Hash too long: still works locally; share may truncate on some platforms.
- Storage unavailable: works in-memory for the session.

## Files
drafts/F652-bill-splitter/SPEC.md
drafts/F652-bill-splitter/index.html
