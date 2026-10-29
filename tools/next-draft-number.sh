#!/usr/bin/env bash
# Prints the next free frontier draft number: the highest number used in drafts/F* or ledger/frontier/F-*, plus one (drafts/NUMBERS.md).
set -euo pipefail
cd "$(dirname "$0")/.."
max=$( { ls drafts; ls ledger/frontier; } | sed -nE 's/^F-?0*([0-9]+).*/\1/p' | sort -n | tail -1)
echo $((max + 1))
