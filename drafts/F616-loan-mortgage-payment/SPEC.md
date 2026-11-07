# F616 Loan and mortgage payment

Plain name: Loan and mortgage payment
Job: Enter a loan amount, interest rate and term; get the regular payment and a full year-by-year amortization table you can download as CSV or copy.
Input: Loan amount, annual interest rate (%), term in years, optional extra monthly payment, payment frequency (monthly).
Keeps: Copy the summary (payment + total interest); download the full amortization schedule as CSV; last inputs saved on the device for next time.
Not on Verse yet: checked against llms.txt and GAPS.md — formula calculators include basic loan math, but no dedicated offline page with editable extra payments, year-by-year table and CSV export.

**What existing sites do**
Most mortgage calculators are ad-heavy, require accounts for saving, or lock full schedules behind sign-up. Many only show monthly payment without a clean exportable table.

**Better Verse version**
Fully offline after load. Standard amortization formula, transparent. Extra payments reduce term and interest. Year-by-year summary plus full schedule. One-click CSV download and copyable summary. Inputs persist. Works on phone. No account, nothing sent, no invented scores.

**Architecture**
- Single index.html (HTML/CSS/JS).
- localStorage key `verse-loan-calc-v1` for last inputs.
- Pure math: M = P * r(1+r)^n / ((1+r)^n - 1) for monthly.
- Amortization loop generates schedule.
- Mobile-first responsive layout.
- Accessible form controls and table.

**Failure modes**
- Invalid inputs (rate ≤ 0, amount ≤ 0, term ≤ 0): show clear error, no NaN.
- Very long terms: table capped with note if > 50 years.
- Storage unavailable: works in-memory, notes that saving may not persist.

**Files**: drafts/F616-loan-mortgage-payment/SPEC.md, drafts/F616-loan-mortgage-payment/index.html
