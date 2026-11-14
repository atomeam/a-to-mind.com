# F752 Local SSH key generator

Plain name: Local SSH key generator
Job: Generate an Ed25519 SSH key pair entirely in the browser; copy the public key in OpenSSH format, download the private key as a PEM file, and see a spatial fingerprint of the public key.
Input: Optional comment field, optional passphrase to encrypt the private key (or leave blank for unencrypted).
Keeps: Copy button for the public key; download private key as id_ed25519.pem; fingerprint image download as PNG; last generation saved in localStorage for restore.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (password generator exists but no SSH key pair) and docs/GAPS.md in atomeam/void-loop (generate an ssh key is open gap #99).

**Architecture**
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Uses Web Crypto API: crypto.subtle.generateKey for Ed25519, exportKey for raw and PKCS8.
- Public key encoded to OpenSSH authorized_keys format (ssh-ed25519 AAA... comment).
- Private key as PKCS#8 PEM; if passphrase given, notes that full OpenSSH encrypted format is complex and provides the unencrypted PEM with a warning, or uses simple encryption.
- Spatial fingerprint: Canvas draws a unique visual pattern from the 32-byte public key (color grid or random-art style) so the key has a visual identity.
- Offline, works on phone, no account, nothing sent. Keys never leave the device unless the user downloads them.
- Honest: notes that the private key must be kept secret, and that browsers may have limited support for Ed25519 in very old environments (fallback message).

**Expected outcome**
A practical tool a person returns to for generating SSH keys for GitHub, servers, or devices without trusting a third party, with a visual fingerprint to recognize the key later.

**Novelty**
First frontier draft to generate real cryptographic key pairs with Web Crypto Ed25519 and produce OpenSSH-compatible public keys, combined with a spatial Canvas fingerprint visualization driven by the key bytes themselves. Leaves pure calculators, encryptors (F751), and all prior spatial minds/swarms.

**V01D landing**
tools/ssh-key-generator; testable via generate → public key starts with ssh-ed25519 → private PEM downloads → fingerprint renders.

Void is now Verse everywhere.

**Files**: drafts/F752-local-ssh-key-generator/SPEC.md, drafts/F752-local-ssh-key-generator/index.html
