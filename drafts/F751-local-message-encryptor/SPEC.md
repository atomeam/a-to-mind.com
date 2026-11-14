# F751 Local message encryptor
Plain name: Local message encryptor
Job: Encrypt or decrypt a message with a passphrase entirely in the browser using AES-GCM; copy the ciphertext or plaintext, or download it as a file.
Input: Text area for the message or ciphertext, password field for the passphrase, toggle for encrypt/decrypt mode.
Keeps: Copy button for the result; download as .txt Blob; last passphrase strength note saved locally (optional).
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (no local encryptor) and docs/GAPS.md in atomeam/void-loop (encrypt a message is open gap #97).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Uses Web Crypto API: PBKDF2 to derive key from passphrase + random salt, AES-GCM with random IV.
- Encrypt: outputs base64 of salt+IV+ciphertext.
- Decrypt: parses the base64, derives key, decrypts; shows error on failure (wrong passphrase or corrupt).
- Offline, works on phone, no account, nothing sent.
- Honest: notes that security depends on passphrase strength and that the page is for local use only.

## Expected outcome
A practical tool a person returns to for encrypting notes or messages before sharing, with results they can copy or keep.

## Novelty
Uses browser-native Web Crypto for real encryption in a frontier draft; prior drafts were mostly calculators, timers, or spatial minds. Combines local crypto with the required input/output of a Verse tool.

## V01D landing
tools/local-message-encryptor; testable via encrypt → copy ciphertext → decrypt recovers original.

**Void is now Verse everywhere.**
