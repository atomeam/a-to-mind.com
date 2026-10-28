// Headless benchmark: ES vs random search vs hand default, equal evaluation budgets, unseen flow conditions.
import { fitness, esStep, rng, DEFAULT_GENOME, evaluate, score } from './core.js';
import { writeFileSync } from 'node:fs';
const seed = +(process.argv[2] || 1);
const TRAIN = [{ u0: 0.1, tau: 0.6 }, { u0: 0.08, tau: 0.56 }];
const TEST = [{ u0: 0.07, tau: 0.62 }, { u0: 0.09, tau: 0.58 }, { u0: 0.11, tau: 0.6 }, { u0: 0.06, tau: 0.53 }];
const GENS = 10, PAIRS = 4; const BUDGET = GENS * PAIRS * 2;
const r = rng(seed * 7919);
const ev = (g) => fitness(g, TRAIN);
let mean = DEFAULT_GENOME.slice(), best = { f: -1e9, cand: mean };
for (let gen = 0; gen < GENS; gen++) {
  const o = esStep(mean, 0.2, 0.9, PAIRS, ev, r); mean = o.mean;
  if (o.best.f > best.f) best = o.best;
  console.error('seed', seed, 'gen', gen, 'best', best.f.toFixed(3));
}
const meanF = ev(mean); const esPick = meanF > best.f ? mean : best.cand;
let rbest = { f: -1e9, cand: null }; const r2 = rng(seed * 104729);
for (let k = 0; k < BUDGET; k++) { const c = Array.from({ length: 5 }, () => r2()); const f = ev(c); if (f > rbest.f) rbest = { f, cand: c }; }
const unseen = (g) => TEST.map((c) => { const x = evaluate(g, c); return { ...x, s: score(x) }; });
const pack = (g) => { const u = unseen(g); return { genome: g.map((v) => +v.toFixed(3)), unseenMean: +(u.reduce((a, b) => a + b.s, 0) / u.length).toFixed(3), perCond: u.map((x) => ({ cl: +x.cl.toFixed(3), cd: +x.cd.toFixed(3), s: +x.s.toFixed(3) })) }; };
const out = { seed, budget: BUDGET, train: TRAIN, test: TEST, es: pack(esPick), random: pack(rbest.cand), default: pack(DEFAULT_GENOME) };
writeFileSync(`test-result-${seed}.json`, JSON.stringify(out, null, 1));
console.log(JSON.stringify({ seed, es: out.es.unseenMean, random: out.random.unseenMean, default: out.default.unseenMean, esG: out.es.genome, rG: out.random.genome }));
