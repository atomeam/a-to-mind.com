#!/usr/bin/env bash
# Ledger guard. Suggested-by: Void (run 118).
# Refuses a FEATURE_LEDGER.md that lost its required sections or was blanked.
set -euo pipefail
f="${1:-FEATURE_LEDGER.md}"
fail(){ echo "LEDGER GUARD FAILED: $1 ($f). Write the ledger with git on disk; never full-file API writes." >&2; exit 1; }
[ -f "$f" ] || fail "file missing"
grep -q '^## Rules for every future run' "$f" || fail "missing '## Rules for every future run'"
grep -q '^## Used' "$f" || fail "missing '## Used'"
grep -q '^## Queue' "$f" || fail "missing '## Queue'"
grep -q '^## Halt (run ' "$f" || fail "missing any '## Halt (run N)'"
grep -qx 'PLACEHOLDER' "$f" && fail "contains bare PLACEHOLDER"
n=$(wc -l < "$f"); [ "$n" -ge 40 ] || fail "only $n lines (looks truncated)"
echo "ledger ok: $n lines"
