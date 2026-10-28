// Headless check: ES vs equal-budget random search, plus steering transfer to the live grid size.
const C = require('./core.js');
const GENS = +process.env.GENS || 10, POP = 12, SEEDS = [11, 22, 33];
const t0 = Date.now(); let esCurve = [];
const res = { es: [], rnd: [] };
for (const run of [1, 2]) {
  const es = C.makeES(6, 100 + run, { pop: POP, init: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5] });
  for (let g = 0; g < GENS; g++) { const gs = es.ask(); es.tell(gs, gs.map(x => C.evaluate(x))); if (run === 1) esCurve.push(+es.bestFit.toFixed(3)); }
  const r = C.rng(900 + run); let rb = -Infinity, rg = null;
  for (let i = 0; i < GENS * POP; i++) { const g = [0,0,0,0,0,0].map(() => r()); const f = C.evaluate(g); if (f > rb) { rb = f; rg = g; } }
  res.es.push({ train: es.bestFit, unseen: C.evaluate(es.best, { seeds: SEEDS }), genome: es.best });
  res.rnd.push({ train: rb, unseen: C.evaluate(rg, { seeds: SEEDS }) });
}
// Steering transfer: best ES genome on a 96 grid with R=10, sensing rotated toward a target at +y.
const best = res.es.sort((a, b) => b.unseen - a.unseen)[0].genome, p = C.decode(best);
const N = 96, R = 10; let A = new Float32Array(N*N), B = new Float32Array(N*N); C.seedBlob(A, N, R, 5);
const offs = C.kernel(p, R, 0, 1); let c0 = C.com(A, N), py = c0.y, ty = 0, alive = true;
for (let t = 0; t < 120; t++) { C.step(A, B, N, offs, p); [A, B] = [B, A]; if (t % 3 === 2) { const c = C.com(A, N); if (c.m < 0.15*c0.m || c.m > 2.5*c0.m) { alive = false; break; } ty += C.wrapD(c.y - py, N); py = c.y; } }
const mean = a => a.reduce((s, v) => s + v, 0) / a.length;
const out = { gens: GENS, pop: POP, esCurveRun1: esCurve,
  esUnseen: res.es.map(r => +r.unseen.toFixed(3)), randomUnseen: res.rnd.map(r => +r.unseen.toFixed(3)),
  esMeanUnseen: +mean(res.es.map(r => r.unseen)).toFixed(3), randomMeanUnseen: +mean(res.rnd.map(r => r.unseen)).toFixed(3),
  bestParams: Object.fromEntries(Object.entries(p).map(([k, v]) => [k, +v.toFixed(4)])),
  steerTransfer: { alive, massRatio: +(C.com(A,N).m/c0.m).toFixed(2), cellsTravelledTowardTarget: +ty.toFixed(1) }, seconds: (Date.now() - t0) / 1000 };
console.log(JSON.stringify(out, null, 1));
