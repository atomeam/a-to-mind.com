# F718 Subscription tracker

Plain name: Subscription tracker

Job: Add the services you pay for, their price and when they renew; see the monthly and yearly total at once; download calendar reminders as an .ics file or copy the summary. Everything stays on this device.

Input: A form for service name, price, billing period (monthly or yearly) and next renewal date. Add as many as you like.

Keeps: The list is saved on the device (localStorage). Download an .ics file of renewal reminders, or copy a plain-text summary of the totals and list.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt (no subscription tracker tool page) and docs/GAPS.md in atomeam/void-loop (not listed as an open gap).

**Concept**
A practical offline tool that tracks recurring subscriptions, computes aggregate costs, and generates standard .ics calendar events for renewal reminders. Persists via localStorage. Single self-contained HTML file. No particle fields, no neural minds, no WebGPU continuum, no sealed genomes.

**Novelty**
Branches away from the dominant recent cluster of WebGPU continuum/field kernels (Lennard-Jones, 3D Gray-Scott volume, Gaussian splats, Coulomb/advection portals) mixed with local statistical/ML controllers (Bayesian regression, Kalman filters, MLP, Q-learning, expression trees) and spatial audio or DOM physical UI "minds". This is a pure form-driven calculator + calendar export that a person returns to for a real job (keeping track of what they pay for).

**Architecture**
- Plain HTML form + table of added subscriptions.
- Pure JS calculation of monthly equivalent and yearly total.
- localStorage persistence of the array of {name, price, period, date}.
- Client-side generation of a VEVENT .ics file for each renewal (DTSTART on the date, yearly or monthly RRULE).
- Copy-to-clipboard of a formatted summary.
- Fully offline after load; works on phone; no external calls.

**Building blocks**
Reusable form-to-persisted-list + client .ics generator pattern for other recurring-event or cost-tracking tools.

Void is now Verse everywhere.

**Files**
- drafts/F718-subscription-tracker/SPEC.md
- drafts/F718-subscription-tracker/index.html
