# F654 Tip calculator with history suggestion and spatial shares

Plain name: Tip calculator

Job: Enter the bill amount and number of people; a local history of your past tips suggests a percentage (or pick one); see each person's share with rounding options; drag bars on a canvas to reallocate the tip amount between people; copy the per-person totals or download a CSV of this bill and your tip history.

Input: Bill amount, people count, tip % (or accept suggestion), rounding choice; pointer drags on the canvas bars.

Keeps: Copy button for a plain-text who-pays-what line; download CSV of the current split plus tip history; last bill and full tip history saved in localStorage (`verse-f654-tip`); share link encodes the current bill via URL hash.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline tip calculator with history-based percentage suggestion and interactive spatial reallocation of shares on a canvas.

**What existing sites do**

Tip calculators take bill, tip %, people and show equal shares. Some round. None keep a private history of your actual tip percentages to suggest the next one, and none let you drag visual bars to give one person more of the tip than another while keeping the total fixed. Most are online-only or send nothing private.

**Better Verse version**

Fully offline after load. Nothing leaves the device. Your past tip percentages (stored only here) suggest a starting % based on similar bill sizes. Equal split by default; drag the bars to adjust individual shares of the tip. Rounding to nearest dollar or cent. Copy the line for a text, download CSV for a spreadsheet, history sticks for next time. Works on a phone.

**Architecture**

Single self-contained index.html. Pure vanilla HTML/CSS/JS, no libraries, no network.

- Inputs for bill, people (2–12), tip % with "use suggestion" button.

- localStorage stores an array of {bill, tipPct, date} for suggestion: weighted average of past tips, higher weight for bills within 30% of current amount. Minimum 3 past tips before suggesting.

- Canvas draws one bar per person whose height is their share; drag a bar to increase/decrease that person's tip portion (others adjust proportionally to keep total tip fixed).

- Rounding: none, nearest cent, nearest dollar.

- Copy and CSV download (current + history).

- Progressive: works without canvas interaction (equal split).

**Expected outcome**

Someone at dinner types $87.50 and 4 people; the page suggests 20% because their last few similar bills were around there; they see four bars, drag one taller for the person who bought dessert; copy "Alex $25.40, ..." and later download the CSV of all their tip history.

**Failure modes**

No history yet: defaults to 18% and says so. Canvas not supported: falls back to equal shares with number inputs. Very large people count: bars become thin. localStorage full: still works for the session.

**Files**

drafts/F654-tip-calculator-suggest-spatial/SPEC.md

drafts/F654-tip-calculator-suggest-spatial/index.html

Void is now Verse everywhere.
