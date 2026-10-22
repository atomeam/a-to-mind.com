# F-235 Forge Duel

**Area:** Cards and games (rotated from comics F-233 and music F-234, and away from the neural/swarm/field cluster).

**Plain name:** Forge Duel

**Concept:** Paste any text (an answer, a quote, a note) and it becomes a playable trading card. Its stats come only from what it says: numbers make Facts, questions make Ideas, feeling words make Feelings, verbs make Actions, sky and time words make Wonders. Word count sets cost and power, and word variety, longest word and length set rarity. Cards go into a binder that keeps every card's full text, and the first 12 binder cards join your deck for a six-turn, three-lane duel against Verse. Win two lanes to win. Win a duel and you keep one of Verse's cards.

**Novel combination:** text-to-card forging (deterministic, no model, same text always makes the same card) + a local Monte-Carlo opponent that plays from a hidden-information-correct view (it reshuffles your unseen hand and deck before every simulation) + a board that physically shows the opponent's reasoning: each lane tilts toward whoever Verse's simulations think is winning, with a bar and plain sentence giving the percent.

**Basics included:** help page, turn log, undo within a turn, save and resume (localStorage), win/loss/draw record, end screen, mobile layout, card share links (`#c=` carries only title and text; the card re-forges identically on the other side), binder remove.

**Rules:** energy each turn is the turn number plus one. Lane cap is 4 per side. Turns alternate who leads: on odd turns you lead and Verse picks blind, on even turns Verse's plays land first and you answer. Abilities: Steady (Fact, can't be weakened), Spark (Idea, +1 to your other cards in the lane), Rally (Feeling, +2 if you already hold the lane), Strike (Action, -2 to the strongest non-Fact enemy card in the lane), Surge (Wonder, +3 on the last turn).

**Honest results (headless Chrome, 2026-10-22):**
- Forging is deterministic; sample texts land in the expected types ("What if the moon could sing?" is an Idea, "I love you and miss you" is a Feeling, "Build a tiny boat" is an Action).
- First version made nearly every short card Rare and cost 1, which made turn 1 dead and decks lopsided. Rarity now weighs length, cost scales at about one per 3.5 words, and energy is turn+1. Across the 36 built-in texts: 27 Common, 9 Uncommon.
- Seat fairness: random-greedy vs random-greedy over 400 games was 205 Verse, 190 player, 5 draws (it was 250 to 142 before the turn-order alternation and shared deck pool).
- Verse's Monte-Carlo mind vs a random-greedy player over 120 games, alternating seats: 92-28 with a 5 ms budget (about 235 simulations per decision) and 98-21-1 at about 13 ms (about 540 simulations). The extra time helps a little.
- Full UI game played by clicks, including undo and a mid-game reload: completes, resumes on the same turn, shows the end screen and records the result, no console errors. Share link opens a "Someone shared a card" panel with Keep.
- One early UI run showed a game restarting to turn 1 after reload; it did not reproduce in four later runs and is noted, not fixed.

**Failure modes:** keyword lists are English-only; a determined player can farm Legendaries by writing long varied text (cost rises with length, which limits it); Verse's opponent is strong against random play but untested against strong humans; localStorage only, so the binder is per device.

**Builds on / next:** this is the first slice of the universal card format (one card shape for answers, deeds, battle cards and store items) and the binder. Next: let the live answer cards on a-to-mind.com save straight into this binder, add board-game deed cards in the same format, and add a two-player pass-and-play mode.
