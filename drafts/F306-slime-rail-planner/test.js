// Headless check: ES vs random search (equal 96-eval budget) on unseen city layouts, plus hand default.
const C = require('./core.js'); const fs = require('fs');
const train = [1, 2], unseen = [11, 12, 13, 14], out = { runs: [] };
const def = [0.5, 0.4, 0.4, 0.6, 0.4, 0.4];
out.defaultUnseen = C.evaluate(def, unseen).fitness;
for (const rs of [5, 9]) {
  const es = new C.ES(rs); const curve = [];
  // fresh training layouts every generation so neither optimiser can memorise two maps
  for (let gen = 0; gen < 8; gen++) { const tr = [100 + gen * 2, 101 + gen * 2]; curve.push(+es.generation(6, g => C.evaluate(g, tr).fitness).mean.toFixed(3)); }
  const r = C.rng(rs * 101); let rb = null, rf = -1e9;
  for (let i = 0; i < 96; i++) { const gen = (i / 12) | 0, g = def.map(() => r()); const f = C.evaluate(g, [100 + gen * 2, 101 + gen * 2]).fitness; if (f > rf) { rf = f; rb = g; } }
  const esU = C.evaluate(es.mu, unseen), rnU = C.evaluate(rb, unseen);
  out.runs.push({ seed: rs, esCurve: curve, esBest: es.mu.map(v => +v.toFixed(3)), esUnseen: +esU.fitness.toFixed(3), esDet: esU.det, randUnseen: +rnU.fitness.toFixed(3), randDet: rnU.det });
  console.log('run', rs, 'ES', esU.fitness.toFixed(3), 'rand', rnU.fitness.toFixed(3), 'curve', curve.join(','));
}
out.esMean = out.runs.reduce((a, r) => a + r.esUnseen, 0) / out.runs.length;
out.randMean = out.runs.reduce((a, r) => a + r.randUnseen, 0) / out.runs.length;
// scale transfer: best ES genome on the live-size grid
const best = out.runs.sort((a, b) => b.esUnseen - a.esUnseen)[0].esBest;
out.liveScale = C.evaluate(best, [21, 22], { W: 220, H: 220, agents: 12000, steps: 400 }).det;
out.liveScaleDefault = C.evaluate(def, [21, 22], { W: 220, H: 220, agents: 12000, steps: 400 }).det;
console.log('default', out.defaultUnseen.toFixed(3), 'ESmean', out.esMean.toFixed(3), 'randMean', out.randMean.toFixed(3));
console.log('live', JSON.stringify(out.liveScale.map(d => +d.fitness.toFixed(2))), 'liveDefault', JSON.stringify(out.liveScaleDefault.map(d => +d.fitness.toFixed(2))));
fs.writeFileSync('test-result.json', JSON.stringify(out, null, 1));
