# F-227 Hypervector Dreamer

Paint a 24×24 example land. A hyperdimensional memory (one random 8192-dimension hypervector per tile, one bundled accumulator per direction) learns which tiles sit next to which. The memory is decoded by matching pursuit (find the key that best explains the bundle, subtract it, repeat until what is left is crosstalk noise), the recovered rules drive wave function collapse, and a 48×48 world is dreamed in WebGL2 while undecided cells stand as see-through pillars whose height is the number of options left.

- Open `index.html` over any static server (ES module). `?auto=1` runs a synthetic painter for tests.
- `node bench-node.mjs` reproduces `bench-node.json` (set `ZT=3` or `ZT=5` to change the stop threshold). `bench-oneshot-z4.json` is the same bench with plain one-shot thresholded scoring instead of matching pursuit.
- `browser-test.cjs` (needs `playwright-core` and Chrome) writes `bench-browser.json` and the screenshots.
