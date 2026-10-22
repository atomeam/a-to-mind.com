# F-231 Taste Oracle

Two raymarched sculptures; you pick the one you like more. A Gaussian-process preference model (Bradley–Terry likelihood, Laplace approximation, RBF kernel over 6 design knobs) learns your taste from every choice and proposes the next pair from a trust region around your current favourite. The model's uncertainty is drawn on the sculptures themselves: haze and a grainy, jittered surface for designs it is unsure about, plus a 2-D taste map slice (brightness = predicted liking, grain = uncertainty).

Open `index.html` from a static server (ES module). Arrow keys or the buttons pick; Undo and Reset edit the history (kept in localStorage); "Auto taster" lets a simulated taster with a hidden utility play. `?auto=40` runs 40 simulated choices on load; `?lowres` halves render resolution. Test hooks are on `window.__f231`.

- `core.js`: `TasteGP` (fit, predict, incumbent, propose, answer), `makeTaster`, `rng`.
- `bench-node.mjs` → `bench-node.json`: seed-paired comparison against hill climbing and random pairs.
- `browser-test.cjs` → `bench-browser.json`, `shot-*.png`: headless Chrome (SwiftShader WebGL2) check.
