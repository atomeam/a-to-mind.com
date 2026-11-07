# F617 Recipe scaler

Plain name: Recipe scaler

Job: Paste a recipe (ingredients with quantities), set the original and desired number of servings, see every quantity scaled to sensible numbers and units, then copy the full scaled recipe or download it as a text file; the last recipe stays on this device.

Input: A text box for the full recipe (one ingredient per line, e.g. "2 cups all-purpose flour" or "1/2 tsp salt"), number inputs for original servings and new servings.

Keeps: Copy button (navigator.clipboard) of the scaled recipe text; download as .txt Blob; last recipe and servings saved in localStorage under `verse-f617-recipe`.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt (no recipe or ingredient scaler) and docs/GAPS.md in atomeam/void-loop (no match).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network.
- Parser: line-by-line regex for leading quantity (integer, decimal, fraction like 1/2 or 1 1/2, mixed) + optional unit + rest of line.
- Scaler: factor = newServings / originalServings; scale number, round to practical fractions (1/4, 1/3, 1/2, 2/3, 3/4 or decimal if large); keep unit; non-quantity lines (headers, instructions) copied unchanged.
- Live update on input.
- Mobile-friendly, works offline after load.

## Expected outcome
User pastes a recipe, changes servings from 4 to 6, sees "3 cups flour" become "4.5 cups flour" (or "4 1/2"), copies or downloads the result, reloads page and the recipe is still there. Honest: scales numbers only; does not invent substitutions or nutrition.

## Mechanics
- Textarea + two number inputs fire input events → parseAndScale().
- Results shown in a pre or another textarea, read-only.
- Copy writes the output text.
- Download creates Blob and temporary <a> click.
- Clear button resets.
- Fraction display uses Unicode fractions where nice.

## Novelty / Frontier note
While prior F- drafts focused on WebGPU minds, lattices and swarms, this is a practical tool a person returns to. The parsing and fraction-sensible scaling is new in the Verse lab series; no prior recipe or quantity scaler exists. Progressive: pure local computation.

## Failure modes
- Unparseable lines left as-is.
- Zero original servings → factor 1, note shown.
- Very large numbers → decimal.
- localStorage full → in-memory only.

## Building blocks
Reusable quantity parser for future unit-aware tools (paint, flooring already exist; this is food-specific).

**Files**: drafts/F617-recipe-scaler/SPEC.md, drafts/F617-recipe-scaler/index.html
