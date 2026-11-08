# F629 Trip fuel cost

Plain name: Trip fuel cost

Job: Enter the distance, your vehicle's fuel use and the price; see the fuel volume and total cost, split per person, with a live dashboard drawing of the trip and gauge, then copy the summary line or download it; numbers stay on this device.

Input: Distance and unit (miles or km); efficiency (mpg, L/100km or km/L); fuel price and unit (per gallon or liter); number of people (1+); round-trip toggle; optional trip name.

Keeps: Copy the full cost summary; download .txt or CSV; last inputs and results saved in localStorage (`verse-f629-fuel`); share link carries the numbers via URL hash.

Not on Verse yet: checked against llms.txt and GAPS.md — floating pages can answer a single “gas cost for 320 miles at 28 mpg $3.59 a gallon” ask, but no offline multi-unit trip computer with per-person split, live spatial dashboard drawing, round-trip, and export exists.

## Architecture

Single self-contained HTML file. Pure vanilla JS + Canvas2D:

- Live conversion between imperial/metric units with honest factors (1 gal ≈ 3.785 L, 1 mi ≈ 1.609 km).
- Volume = distance / efficiency (adjusted for unit); cost = volume × price; per person = total / people.
- Canvas draws a simple car dashboard: speedometer-style distance arc, fuel gauge needle, cost bar, and a small road with car marker scaled to the trip.
- Updates on every input change; zero/negative values show clear notes and zero cost.
- URL hash + localStorage persistence; works offline after load; no external assets or network.

## Expected outcome

A person planning a drive enters the numbers once, sees the exact fuel volume, total and per-person cost plus a visual trip dashboard, copies or downloads the summary for the group chat or spreadsheet, and comes back because the saved settings and drawing make the estimate concrete instead of abstract math.

## Failure modes

- Zero or negative distance/efficiency/price show a clear note and zero results.
- Very large distances scale the dashboard so it stays readable.
- Only straight distance (no route elevation or real-time traffic); note says so.
- Storage blocked: works in memory, notes that saving may not persist.
- Unit conversions use standard factors; the page states the assumption.

## Frontier Engine F-629

Architecture: Multi-unit form + live Canvas2D spatial dashboard (distance arc, fuel gauge, cost bar, road marker) + unit-aware volume/cost engine + sealed localStorage/URL persistence.  
Expected outcome: interactive spatial trip computer whose dashboard drawing updates with every number change and whose cost summary (volume + total + per person) is ready to copy or download.  
Mechanics: live volume/cost calculation with unit conversion and round-trip, scaled canvas dashboard rendering, export and share.