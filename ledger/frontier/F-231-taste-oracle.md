# F-231 — Taste Oracle

Date: 2026-10-21 · Draft: `drafts/F231-taste-oracle/`

## Concept (novel combination)
Gaussian-process preference learning (pairwise "which do you like more" duels, Bradley–Terry likelihood with a Laplace approximation) + trust-region optimistic acquisition + WebGL2 raymarched SDF sculptures whose surface physically shows the model's uncertainty. The six knobs (blob↔torus, twist, spikes, hue, symmetry folds, smooth-union blend) define each sculpture. Every choice refits the latent taste function; the next pair is the current favourite (highest mean minus one sd among seen designs) against the challenger with the highest mean + sd inside a radius that grows when the challenger wins and shrinks when it loses. Designs the model is unsure about render with haze and a jittered, grainy march, so the visitor literally sees where the oracle is guessing. A 48×48 taste-map slice through the favourite shows mean as brightness and uncertainty as grain, on any two chosen knobs.

## Why it is not a variation
Grep of ledger, drafts and FEATURE_LEDGER.md before this run: gaussian process 0, bradley 0, preference learn 0, dueling 0, expected improvement 0, thompson 0, bayesian optim 0. Earlier minds learned from pointer/orientation/audio signals or self-play (MLP, RNN, NCA, spiking, n-gram, compression, hypervectors in F-227). None learned a person's taste from pairwise choices with a calibrated Bayesian model, and none rendered posterior uncertainty as surface material.

## Architecture
- `core.js` (ES module, Node + browser): `TasteGP({ell=0.5, sf=2, noise=0.3})`; Newton iterations `f ← K (I + W K)⁻¹ (W f + g)` where W is the duel-graph Hessian; predictive mean `k*ᵀ g(f̂)`, variance `k** − k*ᵀ (I + W K)⁻¹ W k*` (avoids inverting the singular W); `incumbent(kappa)`, `propose(r, {beta=1, pool=30, globalShare=0.05})`, `answer(choice)` with radius ×1.25 on challenger win, ×0.85 on loss (clamped 0.03–0.5); `makeTaster(seed, {bumps=3, width=0.4, temp})`, a hidden sum-of-Gaussians utility with logistic answer noise.
- `index.html`: one full-screen WebGL2 fragment shader draws both sculptures (split by screen half, 90-step sphere tracing, folded symmetry, twist, smooth-min lobe, sinusoidal spikes); uncertainty uniform drives haze mix and per-pixel march jitter; parameters glide between pairs; Canvas2D taste map; localStorage history with Undo/Reset; simulated "Auto taster"; `window.__f231`, `?auto=N`.

## Measured outcome
Node (`bench-node.json`, 30 seed-paired tasters, 60 duels, regret = true peak utility minus utility of the recommended design; peaks are about 1.0–1.4, a random design scores about 1.0 regret):
- Low answer noise (temp 0.08): GP mean regret 0.86 / 0.72 / 0.51 / 0.42 at 10 / 20 / 40 / 60 duels (median 0.25 at 60). A plain hill climb (keep winner, ±0.15 uniform mutation) got 0.79 / 0.66 / 0.43 / 0.40 (median 0.31). Random pairs stayed at 1.00.
- Noisy answers (temp 0.25): GP 1.03 → 1.07 (no progress), hill climb 0.92 → 0.90, random 1.05.
- So in this 6-D setting the GP matched a hill climb at best (better median, slightly worse mean) and lost when answers were noisy. That is the honest result; it did not beat the simple baseline.
- Timing: refit after 60 duels 5.5 ms, one prediction 0.006 ms, so the whole loop is instant in a page.
Headless Chrome (`bench-browser.json`, SwiftShader WebGL2): WebGL2 present, 40 simulated choices recorded and the model held 41 designs, history survived a reload, no page errors (one favicon 404). Regret after those 40 browser choices was 0.13, 0.59 and 0.64 on three runs (the saved JSON is the 0.64 run) (the page seeds its random choices from the clock, so runs differ).

## Failure modes / knowledge
- Sweeps (ell 0.2–0.5, beta 0–2, pool 10–400) showed a bigger candidate pool made results worse: maximising mean + sd over 400 candidates picks the model's most over-extrapolated points. Small pools inside a trust region worked best (a GP-screened hill climb).
- Picking challengers by UCB over the whole cube in 6-D is pure exploration: far points always have near-prior sd, so it never refines. Keep global points to about 5%.
- A preference GP only fixes differences, so absolute sd stays near the prior everywhere (1.4–1.5 of 2). Showing raw sd hazed everything; the page shows only the part above 55% of the prior sd.
- With noisy answers, a single Bradley–Terry fit with fixed noise 0.3 is overconfident and locks onto lucky wins; it needs the noise learned from data (or a probit with learned scale) before it can beat a hill climb there.
- The simulated taster is flat far from its bumps, so early answers are near coin flips for every method; real people likely give a gentler slope, which is untested.

## Building blocks for next runs
A tiny, instant Bayesian taste model with honest uncertainty and an uncertainty-as-material renderer. Next: learn the answer-noise scale and kernel lengthscale by maximising the Laplace evidence; let several visitors' duels share one model with per-person offsets kept local (no tracking across people); use it to tune F-227 dream worlds or store thumbnails by choice instead of sliders; try it on real people before claiming it beats a hill climb.
