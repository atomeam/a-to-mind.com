#!/usr/bin/env bash
# Fails when two draft folders share a number (drafts/NUMBERS.md). F021 and F-21 count as the same number.
set -euo pipefail
cd "$(dirname "$0")/.."
dups=$(ls drafts | sed -nE 's/^F-?0*([0-9]+)-.*/\1/p' | sort -n | uniq -d)
if [ -n "$dups" ]; then
  for n in $dups; do echo "DRAFT NUMBER SHARED: F$n is used by: $(ls drafts | grep -E "^F-?0*$n-" | tr '\n' ' ')" >&2; done
  echo "Give the newer draft the number from tools/next-draft-number.sh (drafts/NUMBERS.md)." >&2
  exit 1
fi
echo "draft numbers ok: $(ls drafts | grep -c '^F') drafts, no number shared; next is $(tools/next-draft-number.sh)"
