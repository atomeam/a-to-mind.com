import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { c as Lock, i as Shield, l as Clock, o as Play, s as Pause, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { n as Route$3 } from "./router-BSsvBPi5.mjs";
import { i as shortHash, n as formatUsd, r as nowIso } from "./utils-D-KiQzR7.mjs";
import { t as Button } from "./button-BAiRF30d.mjs";
import { t as Badge } from "./badge-M12gwWTj.mjs";
import { n as selectModel, t as MODEL_LABEL } from "./router-COOIpE1E.mjs";
import { n as templateById, t as TEMPLATES } from "./templates-COSeHVb3.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-CCjfBPIs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
async function sha256(text) {
	const data = new TextEncoder().encode(text);
	const buf = await crypto.subtle.digest("SHA-256", data);
	return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function uid(prefix) {
	return `${prefix}_${crypto.randomUUID().slice(0, 8)}`;
}
var SCREEN = {
	navigate: {
		label: "staging.payments.example/refunds",
		preview: "PAYMENTS STAGING\nRefunds  ·  Test mode\n\nOrder  #4821-K\nAmount  $12.40  USD\nReason  [ duplicate charge        ]\n\n[ Cancel ]   [ Submit refund ]"
	},
	"observe-empty": {
		label: "refund form idle",
		preview: "Form idle. Submit enabled. Selector [data-test=refund-submit] visible.\nNo confirmation banner. Last refund 14h ago."
	},
	submit: {
		label: "click refund-submit",
		preview: "Clicked [data-test=refund-submit]\nPOST /api/refunds  201\nbody { amount: 1240, currency: usd, order: 4821-K }"
	},
	verify: {
		label: "refund success",
		preview: "PAYMENTS STAGING\nRefunds  ·  Test mode\n\n  Refund issued\n  $12.40 returned to original method\n  id rfnd_8F21  ·  eta 3–5 days\n\nAcceptance: confirmation visible."
	},
	home: {
		label: "a-to-mind.com/",
		preview: "A-to-Mind — Durable AI execution\nAI workflows that finish — even when you step away.\nBring your own keys · zero token markup"
	},
	pricing: {
		label: "a-to-mind.com/pricing",
		preview: "Free $0  ·  sandbox, $2 cap, 7-day ledger\nPay-as-you-go $0 platform fee\nPro $29/mo + provider usage · 90-day ledger"
	},
	docs: {
		label: "a-to-mind.com/docs",
		preview: "Execution Contract v0.1\nAPI status: Coordinator\nCLI: atomind run | watch | approve | export"
	},
	security: {
		label: "a-to-mind.com/security",
		preview: "Default-deny tools. Hard spend caps. Human gates on writes.\nThis page describes target architecture, not a completed SOC2."
	},
	list: {
		label: ".github/workflows",
		preview: "ci.yml\nrelease.yml\nnightly-audit.yml"
	},
	scan: {
		label: "unpinned actions",
		preview: "ci.yml:18  actions/checkout@v4  (mutable tag)\nrelease.yml:9  docker/login-action@master\nnightly-audit.yml:4  permissions: write-all"
	},
	census: {
		label: "public claims",
		preview: "CLAIM  runs finish when you step away\nCLAIM  zero token markup\nCLAIM  security is production-ready\nDISLIKE  security page is target architecture"
	}
};
function event(kind, message, extra = {}) {
	return {
		id: uid("evt"),
		at: nowIso(),
		kind,
		message,
		...extra
	};
}
function createRun(templateId) {
	const t = templateById(templateId);
	if (!t) return null;
	const steps = t.steps.map((spec) => ({
		spec,
		status: "pending",
		model: selectModel(spec.kind),
		costUsd: 0,
		artifacts: []
	}));
	return {
		id: uid("run"),
		templateId: t.id,
		name: t.name,
		objective: t.objective,
		status: "planning",
		createdAt: nowIso(),
		policy: t.policy,
		steps,
		events: [event("run.created", `Created ${t.name}`, { data: { templateId: t.id } })],
		spentUsd: 0
	};
}
function attachPlan(run) {
	const plan = run.steps.map((s, i) => `${i + 1}. [${s.model}] ${s.spec.title}`).join("\n");
	const next = clone(run);
	next.status = "awaiting_approval";
	next.events.push(event("plan.ready", `Plan ready (${next.steps.length} steps)\n${plan}`), event("approval.required", "Human must approve the plan before any tool runs."));
	return next;
}
function approvePlan(run) {
	const next = clone(run);
	next.status = "running";
	next.events.push(event("plan.approved", "Plan approved. Execution started."));
	return next;
}
async function advanceRun(run) {
	if (run.status !== "running") return run;
	const idx = run.steps.findIndex((s) => s.status === "pending" || s.status === "running");
	if (idx < 0) return finalize(run);
	const next = clone(run);
	const step = next.steps[idx];
	if (step.status === "pending") {
		if (next.spentUsd + step.spec.estimatedUsd > next.policy.budgetUsd) {
			step.status = "blocked";
			next.status = "failed";
			next.events.push(event("step.failed", `Budget would exceed ${next.policy.budgetUsd} USD`, { stepId: step.spec.id }));
			return next;
		}
		if (step.spec.gate) {
			step.status = "awaiting_approval";
			next.status = "paused";
			next.events.push(event("approval.required", `Gate on ${step.spec.tool} — ${step.spec.title}`, {
				stepId: step.spec.id,
				tool: step.spec.tool,
				model: step.model
			}));
			return next;
		}
		step.status = "running";
		step.startedAt = nowIso();
		next.events.push(event("step.started", step.spec.title, {
			stepId: step.spec.id,
			model: step.model,
			tool: step.spec.tool
		}));
		return next;
	}
	const art = await artifactFor(step.spec.id, step.spec.title, JSON.stringify(step.spec.args));
	step.artifacts.push(art);
	step.costUsd = step.spec.estimatedUsd;
	step.endedAt = nowIso();
	step.status = "done";
	step.output = art.preview;
	next.spentUsd = round4(next.spentUsd + step.costUsd);
	next.events.push(event("artifact.hashed", `${art.type} ${art.hash.slice(0, 12)}…`, {
		stepId: step.spec.id,
		data: {
			hash: art.hash,
			bytes: art.bytes
		}
	}), event("step.completed", step.spec.title, {
		stepId: step.spec.id,
		model: step.model,
		tool: step.spec.tool,
		costUsd: step.costUsd
	}), event("budget.tick", `Spent ${next.spentUsd.toFixed(4)} / ${next.policy.budgetUsd.toFixed(2)} USD`, { costUsd: next.spentUsd }));
	return next;
}
async function approveGate(run, grant) {
	const idx = run.steps.findIndex((s) => s.status === "awaiting_approval");
	if (idx < 0) return run;
	const next = clone(run);
	const step = next.steps[idx];
	if (!grant) {
		step.status = "blocked";
		next.status = "cancelled";
		next.events.push(event("approval.denied", `Denied ${step.spec.tool}`, { stepId: step.spec.id }), event("run.cancelled", "Operator cancelled at gate."));
		return next;
	}
	next.events.push(event("approval.granted", `Granted ${step.spec.tool}`, {
		stepId: step.spec.id,
		tool: step.spec.tool
	}));
	step.status = "running";
	step.startedAt = nowIso();
	next.status = "running";
	next.events.push(event("step.started", step.spec.title, {
		stepId: step.spec.id,
		model: step.model,
		tool: step.spec.tool
	}));
	return next;
}
async function finalize(run) {
	const next = clone(run);
	const blocked = next.steps.some((s) => s.status === "blocked");
	const t = templateById(next.templateId);
	const shots = next.steps.flatMap((s) => s.artifacts.filter((a) => a.type === "screenshot"));
	const sent = next.steps.filter((s) => s.spec.tool === "slack.write" || s.spec.tool === "github.comment").some((s) => s.status === "done" && s.spec.tool === "slack.write");
	let verdict = "accepted";
	let note = "Acceptance criteria met. Writes remain gated or unsent.";
	if (blocked) {
		verdict = "rejected";
		note = "A step was blocked. Fail-closed.";
	} else if (t?.id === "staging-qa" && shots.length < 2) {
		verdict = "rejected";
		note = "twin.evaluate / evaluator: missing screenshot hash.";
	} else if (t?.id === "surface-ledger") {
		verdict = "accepted";
		note = "3 dislikes: packages listed as live but marked not for sale; CLI shows GA while /docs marks API as Coordinator; security is target architecture and Free ledger expires in 7 days.";
	} else if (sent) {
		verdict = "needs_human";
		note = "A write landed. Review the ledger before treating this as closed.";
	}
	next.verdict = verdict;
	next.verdictNote = note;
	next.status = verdict === "rejected" ? "failed" : "succeeded";
	next.events.push(event("evaluator.verdict", `${verdict}: ${note}`, {
		model: selectModel("evaluate"),
		costUsd: .05
	}), event("run.completed", `Run ${next.status}. Spent ${next.spentUsd.toFixed(4)} USD.`));
	next.spentUsd = round4(next.spentUsd + .05);
	return next;
}
async function artifactFor(stepId, title, seed) {
	const screen = SCREEN[stepId];
	const preview = screen?.preview ?? title;
	const hash = await sha256(`${stepId}:${seed}:${preview}`);
	const isShot = stepId === "navigate" || stepId === "observe-empty" || stepId === "verify" || stepId === "home" || stepId === "submit";
	return {
		id: uid("art"),
		type: isShot ? "screenshot" : stepId === "note" || stepId === "dissent" ? "markdown" : "json",
		hash,
		label: screen?.label ?? title,
		preview,
		bytes: preview.length + 2400
	};
}
function clone(v) {
	return structuredClone(v);
}
function round4(n) {
	return Math.round(n * 1e4) / 1e4;
}
function exportLedger(run) {
	return JSON.stringify({
		runId: run.id,
		templateId: run.templateId,
		objective: run.objective,
		status: run.status,
		spentUsd: run.spentUsd,
		policy: run.policy,
		verdict: run.verdict,
		verdictNote: run.verdictNote,
		steps: run.steps.map((s) => ({
			id: s.spec.id,
			title: s.spec.title,
			tool: s.spec.tool,
			model: s.model,
			status: s.status,
			costUsd: s.costUsd,
			artifacts: s.artifacts.map((a) => ({
				type: a.type,
				hash: a.hash,
				label: a.label
			}))
		})),
		events: run.events
	}, null, 2);
}
function patch(set, run) {
	set((s) => ({ runs: s.runs.map((r) => r.id === run.id ? run : r) }));
}
var useRuns = create((set, get) => ({
	runs: [],
	activeId: null,
	busy: false,
	seed: (templateId) => {
		const run = createRun(templateId);
		if (!run) return null;
		const planned = attachPlan(run);
		set((s) => ({
			runs: [planned, ...s.runs],
			activeId: planned.id
		}));
		return planned.id;
	},
	approve: () => {
		const { runs, activeId } = get();
		const run = runs.find((r) => r.id === activeId);
		if (!run) return;
		if (run.status === "awaiting_approval") patch(set, approvePlan(run));
	},
	deny: async () => {
		const { runs, activeId } = get();
		const run = runs.find((r) => r.id === activeId);
		if (!run) return;
		patch(set, await approveGate(run, false));
	},
	tick: async () => {
		const { runs, activeId, busy } = get();
		if (busy) return;
		const run = runs.find((r) => r.id === activeId);
		if (!run) return;
		if (run.status === "paused") {
			set({ busy: true });
			patch(set, await approveGate(run, true));
			set({ busy: false });
			return;
		}
		if (run.status !== "running") return;
		set({ busy: true });
		patch(set, await advanceRun(run));
		set({ busy: false });
	},
	setActive: (id) => set({ activeId: id })
}));
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var draftReleaseNote = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("7555f183bc5f0cbb90424326c94d2d8da79984248d371712db9f0f0cb46468b8"));
function toneFor(status) {
	if (status === "succeeded" || status === "done" || status === "accepted") return "ok";
	if (status === "failed" || status === "blocked" || status === "rejected" || status === "cancelled") return "danger";
	if (status === "paused" || status === "awaiting_approval" || status === "needs_human") return "warn";
	if (status === "running") return "accent";
	return "mute";
}
function RunBoard({ run }) {
	const { approve, deny, tick, busy } = useRuns();
	const [note, setNote] = (0, import_react.useState)(null);
	const [noteErr, setNoteErr] = (0, import_react.useState)(null);
	const [noteBusy, setNoteBusy] = (0, import_react.useState)(false);
	const timer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (run.status !== "running") return;
		timer.current = window.setTimeout(() => {
			tick();
		}, 700);
		return () => {
			if (timer.current) window.clearTimeout(timer.current);
		};
	}, [
		run.status,
		run.events.length,
		tick
	]);
	const pendingGate = run.steps.find((s) => s.status === "awaiting_approval");
	const pct = Math.min(100, run.spentUsd / run.policy.budgetUsd * 100);
	async function onNote() {
		setNoteBusy(true);
		setNoteErr(null);
		const res = await draftReleaseNote({ data: {
			artifacts: run.steps.flatMap((s) => s.artifacts.map((a) => `${a.label} ${a.hash}\n${a.preview}`)).join("\n---\n"),
			objective: run.objective
		} });
		if (res.ok) setNote(res.text);
		else setNoteErr(res.error);
		setNoteBusy(false);
	}
	function download() {
		const blob = new Blob([exportLedger(run)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${run.id}.json`;
		a.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-border bg-elevated p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-faint",
							children: run.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-2xl font-medium",
							children: run.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-prose text-sm text-muted",
							children: run.objective
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: toneFor(run.status),
						children: run.status.replace("_", " ")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Budget" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono tabular-nums",
							children: [
								formatUsd(run.spentUsd),
								" / ",
								formatUsd(run.policy.budgetUsd)
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1.5 overflow-hidden rounded-full bg-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-accent transition-[width] duration-[var(--motion-fast)]",
							style: { width: `${pct}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-2",
					children: run.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 rounded-lg border border-border bg-bg p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { status: s.status }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: s.spec.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: MODEL_LABEL[s.model] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[11px] text-faint",
											children: s.spec.tool
										}),
										s.spec.gate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-[11px] text-warn",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }), " gate"]
										}) : null
									]
								}), s.artifacts[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[11px] text-muted",
									children: [
										s.artifacts[0].type,
										" ",
										shortHash(s.artifacts[0].hash, 12)
									]
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tabular-nums text-faint",
								children: formatUsd(s.costUsd || s.spec.estimatedUsd)
							})
						]
					}, s.spec.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: [
						run.status === "awaiting_approval" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: approve,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), " Approve plan"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							onClick: () => void deny(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), " Cancel"]
						})] }) : null,
						run.status === "paused" && pendingGate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => void tick(),
							disabled: busy,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" }),
								" Grant ",
								pendingGate.spec.tool
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "danger",
							onClick: () => void deny(),
							children: "Deny write"
						})] }) : null,
						run.status === "succeeded" || run.status === "failed" || run.status === "cancelled" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: download,
							children: "Export ledger"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => void onNote(),
							disabled: noteBusy,
							children: "Draft note with Grok"
						})] }) : null
					]
				}),
				noteErr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-warn",
					children: noteErr
				}) : null,
				note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-4 whitespace-pre-wrap rounded-lg border border-border bg-bg p-4 font-sans text-sm leading-relaxed text-fg",
					children: note
				}) : null,
				run.verdict ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-lg border border-border bg-subtle p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-faint",
							children: "Evaluator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: toneFor(run.verdict),
								children: run.verdict
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: run.verdictNote
						})
					]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenPane, { run }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerPane, { run })]
		})]
	});
}
function StatusIcon({ status }) {
	const cls = "mt-0.5 size-4 shrink-0";
	if (status === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: `${cls} text-ok` });
	if (status === "running") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: `${cls} text-accent` });
	if (status === "awaiting_approval") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: `${cls} text-warn` });
	if (status === "blocked") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: `${cls} text-danger` });
	if (status === "skipped") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: `${cls} text-faint` });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: `${cls} text-faint` });
}
function ScreenPane({ run }) {
	const art = [...run.steps].reverse().find((s) => s.artifacts.some((a) => a.type === "screenshot"))?.artifacts.find((a) => a.type === "screenshot");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-border bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Computer use"
			}), art ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] text-faint",
				children: shortHash(art.hash, 14)
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "min-h-40 whitespace-pre-wrap bg-bg p-4 font-mono text-[11px] leading-relaxed text-accent",
			children: art?.preview ?? "No screenshot yet. Approve the plan to let Astra observe."
		})]
	});
}
function LedgerPane({ run }) {
	const end = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		end.current?.scrollIntoView({ block: "nearest" });
	}, [run.events.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border px-4 py-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Immutable ledger"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "max-h-80 overflow-auto p-3 font-mono text-[11px] leading-5",
			children: [run.events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-b border-border/60 py-2 last:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-faint",
						children: e.at.slice(11, 19)
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: e.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-wrap text-muted",
						children: e.message
					})
				]
			}, e.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: end })]
		})]
	});
}
function DemoPage() {
	const { template } = Route$3.useSearch();
	const { runs, activeId, seed, setActive } = useRuns();
	const run = runs.find((r) => r.id === activeId) ?? runs[0];
	const booted = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (booted.current && !template) return;
		booted.current = true;
		seed(template ?? "staging-qa");
	}, [template, seed]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-medium",
					children: "Live run"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-muted",
					children: "Approve the plan. Computer-use writes pause at the gate. The ledger is the product."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: run?.templateId === t.id ? "default" : "secondary",
						onClick: () => seed(t.id),
						children: t.name
					}, t.id))
				})]
			}),
			runs.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex gap-2 overflow-x-auto pb-2",
				children: runs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActive(r.id),
					className: `rounded-md border px-3 py-2 font-mono text-xs ${r.id === run?.id ? "border-accent text-fg" : "border-border text-muted"}`,
					children: r.id
				}, r.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: run ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RunBoard, { run }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-xl border border-border bg-elevated p-8 text-muted",
					children: "Pick a template to plan a run. Nothing is stored until you approve."
				})
			})
		]
	});
}
//#endregion
export { DemoPage as component };
