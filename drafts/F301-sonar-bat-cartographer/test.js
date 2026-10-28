const S = require('./sonar-core.js');
const A = S.agent(); const r = S.rng(7);
// train on 20 caves
for (let k=0;k<20;k++){ const w=S.world(48,32,1000+k); A.eps=Math.max(.05,.3-k*.015); for(let i=0;i<20000;i++) S.step(w,A,true); }
function evalOn(seed, mode){ const w=S.world(48,32,seed); const E={...A,eps:.05};
  for(let i=0;i<4000;i++) S.step(w, mode==='rl'?E:null, false, mode==='rand'?(()=> (r()*3)|0):null); return w; }
let rl=0, rd=0, rb=0, bb=0; const N=10;
for (let k=0;k<N;k++){ const a=evalOn(9000+k,'rl'), b=evalOn(9000+k,'rand'); rl+=a.caught; rd+=b.caught; rb+=a.bumps; bb+=b.bumps; }
const out={unseenCaves:N, stepsEach:4000, rlMoths:rl/N, randomMoths:rd/N, rlBumps:rb/N, randomBumps:bb/N};
console.log(JSON.stringify(out));
// determinism
const c1=S.makeCave(48,32,42), c2=S.makeCave(48,32,42); if (c1.g.join()!==c2.g.join()) throw 'nondeterministic';
if (!(out.rlMoths > 2*out.randomMoths)) { console.error('FAIL: learner not clearly better'); process.exit(1); }
console.log('PASS');
