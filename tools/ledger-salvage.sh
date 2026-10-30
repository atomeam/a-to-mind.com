#!/usr/bin/env bash
# Ledger salvage. Used by ledger-guard after it restores FEATURE_LEDGER.md.
# Usage: ledger-salvage.sh GOOD_COMMIT [FILE]
# A writer that rewrites the whole ledger loses the entry for the draft it adds.
# For every drafts/F*/ folder added after GOOD_COMMIT that FILE does not name,
# append an entry built from that draft's own SPEC.md. Prints one line per entry.
set -euo pipefail
good="$1"; f="${2:-FEATURE_LEDGER.md}"
git diff --name-only --diff-filter=A "$good" HEAD -- drafts/ \
  | awk -F/ 'NF>2 && $2 ~ /^F[0-9]/ {print $2}' | sort -u \
  | while read -r name; do
      spec="drafts/$name/SPEC.md"
      [ -f "$spec" ] || continue
      grep -qF "$name" "$f" && continue
      num=$(printf '%s' "$name" | sed -E 's/^F0*([0-9]+).*/\1/')
      day=$(git log -1 --format=%cs --diff-filter=A -- "$spec")
      files=$(cd "drafts/$name" && ls | sed "s|^|drafts/$name/|" | paste -sd, - | sed 's/,/, /g')
      {
        echo
        echo "## Frontier Engine F-$num ($day)"
        echo
        echo "**$name**"
        echo
        echo "Entry added by ledger-guard from $spec, after a full-file write dropped it."
        echo
        sed '1{/^# /d}' "$spec" | sed -E 's/^## (.*)$/**\1**/'
        echo
        echo "**Files**: $files"
      } >> "$f"
      echo "salvaged $name"
    done
