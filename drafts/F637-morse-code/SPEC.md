# F637 Morse code translator
Plain name: Morse code translator
Job: Type or paste text and get Morse code you can hear, see blink, and copy; or type dots and dashes and get the text back.
Input: A text box for plain text or for Morse (dots, dashes, spaces, slashes).
Keeps: Copy the Morse or the text; a share link that carries the message; the last message saved on the device.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt — no Morse tool listed.

## Concept
A single offline page that turns plain text into International Morse code and back. You type or paste, press Convert, and the page shows the Morse, plays it with a clear tone from the Web Audio API, and blinks a light on screen at the right timing. Type dots, dashes and spaces and it decodes to text. Works on a phone, nothing leaves the device, no account.

## Architecture
- Pure HTML/CSS/JS, no libraries.
- Standard Morse table for A–Z, 0–9, and common punctuation.
- Timing: dit = 60 ms (adjustable speed), dah = 3 dit, letter gap = 3 dit, word gap = 7 dit.
- Web Audio oscillator for the tone (frequency 600 Hz). Visual: a CSS circle that lights on during tone.
- localStorage for the last input.
- URL hash or query for share link (text encoded).
- Copy buttons for both directions.
- Honest: standard ITU Morse; phone speakers vary; visual is approximate.

## Expected outcome
A person types “SOS” or a message, hears and sees it in Morse, copies the code to send, or pastes Morse they received and reads the text. They can share the link with the message already filled in. Comes back to practice or to convert notes.

## Mechanics
1. Load: restore last text from localStorage; if ?m= or # has text, use that.
2. Convert text → Morse: map each letter, join with spaces, words with “ / ”.
3. Play: schedule oscillator starts/stops with the AudioContext currentTime.
4. Blink: setInterval or requestAnimationFrame synced to the same schedule, toggle a class.
5. Morse → text: split on spaces, look up table (reverse map).
6. Copy: navigator.clipboard.writeText.
7. Share: generate URL with encoded message, copy that.

## Failure modes
- Very long messages may hit URL length limits for share (trim or note it).
- Audio requires user gesture on some browsers (play button is the gesture).
- Non-ASCII characters are skipped or shown as “?”.
- No prosigns or special Morse beyond basic table.

## Files
drafts/F637-morse-code/SPEC.md
drafts/F637-morse-code/index.html
