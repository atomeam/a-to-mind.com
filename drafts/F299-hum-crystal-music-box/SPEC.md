# F299 — Hum Crystals (hum-crystal-music-box)

A music toy regular visitors can use: hum a tune, each note grows a glowing crystal on a slowly turning 3D spiral (height = pitch), and an on-device music box learns your humming style and hums an answer back. Its unsure notes look frosted.

## Novel combination
Live mic pitch tracking (YIN-style cumulative-mean-normalized difference, parabolic refinement, note segmentation) + a tiny local learner (PPM-C prediction-by-partial-matching, orders 0–3, over interval+duration symbols, persisted in localStorage) + key-snapping call-and-response + a spatial visual where the learner's entropy physically changes crystal clarity + share-by-URL (4 chars per note) + WAV export through OfflineAudioContext. No server, no weights, no WebGPU requirement (plain canvas projection so it runs on every phone).

## Measured (headless Chromium, ?selftest=1)
`{"detector":{"notesPlayed":16,"notesFound":16,"exactPitchHits":16,"accuracy":1},"learner":{"testSteps":126,"ppmBitsPerNote":2.569,"order0BitsPerNote":3.846,"uniformBitsPerNote":6.229,"ppmTop1":0.516},"answer":{"len":8,"inKey":8,"endsHome":true},"share":{"chars":76,"roundTrip":true}}`
- Detector: 16/16 exact pitches on synthetic sawtooth hums with 1.2% vibrato, low-pass and noise.
- Learner: 2.57 bits/note vs 3.85 for an order-0 baseline and 6.23 uniform on held-out motif music; top-1 next-step 52%.
- Answers: 8/8 in key, resolve to the tune's first note. Share link round-trips.
- Desktop 1280x800 and phone 390x780: no page errors, toolbar fits.

## Limits / failure modes
- Synthetic test only; real humans glide between notes, and fast legato may merge into one note (0.8-semitone run tolerance).
- Major-key snapping only; minor or modal tunes get nudged toward major.
- Mic needs a gesture and permission; denial falls back to "Try a tune".

## Building blocks for later
`detectPitch`, `makeSegmenter`, `PPM` (serializable), `answer()` call-and-response, and the URL note codec are reusable for Verse films (score a film by humming), cards, and a sing-along game.
