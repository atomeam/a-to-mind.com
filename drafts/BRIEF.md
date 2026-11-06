# The brief for every draft (read this before you build)

Owner, 2026-11-06: "the lab experiments all seem pointless can you make them all more useful and meaningful and make grok build better and more useful things".

So from now on every draft is a **tool**: one page that does one real job a person would come back for. Not a field, swarm, lattice, orb, portal or "mind" to watch and poke, however clever the maths. Of the first 455 drafts, 5 did a job; the other 450 were demos. Their best ideas are now real tools on Verse (spirit level, file checksum checker, seamless pattern maker, palette from a photo, dictation, mind map maker), at https://a-to-mind.com/lab/. Do not build those again.

## What a draft must have

1. **A job a person has.** Something people search for or ask a friend for: split a bill, size a deck, make a chore rota, check a download. Say it in plain words a visitor would type.
2. **The person's own input.** A text, number, date or file box, a pasted list, a photo, or a sound or picture the page measures. A page that only reacts to the pointer is a toy.
3. **Something to keep.** A download (PNG, PDF, CSV, .txt, .ics), a copy button, a share link that carries the work, or the work saved on the device for next time.
4. **It works on a phone, offline after load, with no account and nothing sent anywhere.** Plain HTML, CSS and JS; WebGPU or WebXR only when the job needs them, with a 2D fallback.
5. **Honest output.** No invented scores, no medical or legal claims, no fake data. Say what the numbers rest on.

## SPEC.md, the first lines

```
# F<number> <Plain name>
Plain name: <what a visitor would type, e.g. "Bill splitter">
Job: <one sentence: who, what they put in, what they get back>
Input: <the box, file or sensor>
Keeps: <download / copy / link / saved>
Not on Verse yet: <checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop>
```

The `Job:` line is required. Verse grades every draft automatically with `tools/lab-grade.mjs` in atomeam/void-loop (the same rules as above): a draft graded a tool is listed with the Lab's tools; a toy is kept at its address but folded away and left out of the sitemap. Nobody reviews by hand. Each push is graded in this repo too, and the verdict lands in `drafts/GRADES.md`, newest first: read it before you start, and if your last draft was graded a toy, fix that draft (same folder) before you make a new one.

## What to pick

- First check Verse does not have it: https://raw.githubusercontent.com/atomeam/void-loop/main/void-live-deploy/llms.txt lists every tool page, and https://raw.githubusercontent.com/atomeam/void-loop/main/docs/GAPS.md lists the asks another builder is already on. Skip both.
- Then take the first unbuilt job from the list below, top first, one per run. When it is built, the next run takes the next one. When the list is empty, pick a job in the same spirit from a different area than the last three drafts (home, money, work, school, making, travel, events, files, phone sensors).
- Never two drafts of one job. To improve one, change that draft's folder (same number) instead of making a new one.

## Jobs to build, in order

1. Bill splitter: items, who had what, tax and tip shared fairly; copy the totals per person.
2. Tip calculator with rounding and per-person split; copy the line.
3. Sleep cycle calculator: when to go to bed for a wake-up time, in 90-minute cycles; add the alarm as .ics.
4. Packing list maker: trip length, weather, kind of trip; tick off, saved on the device, copy as text.
5. Loan and mortgage payment: amount, rate, years; the payment and a year-by-year table as CSV.
6. GPA calculator: courses, credits, grades on a 4.0 or percent scale; saved, copy the result.
7. Recipe scaler: paste a recipe, change servings, quantities scaled with sensible units; copy it.
8. Flashcards: paste "front, back" lines, study with spaced repetition saved on the device; export CSV.
9. Pomodoro timer with a task list and a day's tally saved on the device.
10. Signature pad: draw a signature, download a transparent PNG.
11. Sound level meter: the microphone's level in dBFS with a peak hold and a note that phones are not calibrated meters; copy the reading.
12. Text diff: paste two texts, see what changed line by line and word by word; copy a patch.
13. Regex tester: a pattern, flags and a text; matches and groups highlighted; a share link carries all three.
14. Flooring and tile estimator: room sizes, tile size, waste percent; boxes to buy; copy the list.
15. Paint estimator: walls, doors, windows, coats; litres or gallons to buy.
16. Concrete and mulch volume: slab, footing or bed sizes to cubic metres or yards and bags.
17. Trip fuel cost: distance, fuel use, price, people; cost each; copy the line.
18. Time card: clock in and out by day, breaks, overtime after a limit; weekly total as CSV.
19. Chore rota: people and chores, a fair weekly rota that rotates; print or download PNG.
20. Seating chart: guests and tables, keep-together and keep-apart pairs; drag to fix; download PNG or CSV.
21. Raffle and name draw: paste names, draw winners without repeats, show the seed so it can be checked.
22. Scoreboard for any game: players, rounds, running totals; saved on the device, share link.
23. Teleprompter: paste a script, speed, mirror, font size; full screen.
24. Morse code: text to Morse and back, with sound and flashlight-style blink; copy.
25. Meme maker: a picture, top and bottom text, download PNG.
26. Label and name tag sheet: names in, a printable sheet of labels of a chosen size as PDF or PNG.
27. Subscription tracker: services, prices, renewal dates; monthly and yearly total; reminders as .ics.
28. Receipt to expense list: type or paste lines, categories, totals as CSV.

## What not to build

- Particle fields, lattices, swarms, reaction-diffusion screensavers, neural "minds", sealed or attested state, competitions between agents, portals, orbs, morphs. They were built 450 times.
- Recreations of a named game, anything that needs an account or a server, tests that claim a score about a person (IQ, personality, hearing, colour blindness).
