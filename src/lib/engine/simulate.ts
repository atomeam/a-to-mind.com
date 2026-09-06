import { sha256, uid } from "./hash";
import { selectModel } from "./router";
import { templateById } from "./templates";
import type { Artifact, LedgerEvent, Run, StepRuntime } from "./types";
import { nowIso } from "../utils";

const SCREEN: Record<string, { label: string; preview: string }> = {
  navigate: {
    label: "staging.payments.example/refunds",
    preview:
      "PAYMENTS STAGING\nRefunds  ·  Test mode\n\nOrder  #4821-K\nAmount  $12.40  USD\nReason  [ duplicate charge        ]\n\n[ Cancel ]   [ Submit refund ]",
  },
  "observe-empty": {
    label: "refund form idle",
    preview:
      "Form idle. Submit enabled. Selector [data-test=refund-submit] visible.\nNo confirmation banner. Last refund 14h ago.",
  },
  submit: {
    label: "click refund-submit",
    preview:
      "Clicked [data-test=refund-submit]\nPOST /api/refunds  201\nbody { amount: 1240, currency: usd, order: 4821-K }",
  },
  verify: {
    label: "refund success",
    preview:
      "PAYMENTS STAGING\nRefunds  ·  Test mode\n\n  Refund issued\n  $12.40 returned to original method\n  id rfnd_8F21  ·  eta 3–5 days\n\nAcceptance: confirmation visible.",
  },
  home: {
    label: "a-to-mind.com/",
    preview:
      "A-to-Mind — Durable AI execution\nAI workflows that finish — even when you step away.\nBring your own keys · zero token markup",
  },
  pricing: {
    label: "a-to-mind.com/pricing",
    preview:
      "Free $0  ·  sandbox, $2 cap, 7-day ledger\nPay-as-you-go $0 platform fee\nPro $29/mo + provider usage · 90-day ledger",
  },
  docs: {
    label: "a-to-mind.com/docs",
    preview:
      "Execution Contract v0.1\nAPI status: Coordinator\nCLI: atomind run | watch | approve | export",
  },
  security: {
    label: "a-to-mind.com/security",
    preview:
      "Default-deny tools. Hard spend caps. Human gates on writes.\nThis page describes target architecture, not a completed SOC2.",
  },
  list: {
    label: ".github/workflows",
    preview: "ci.yml\nrelease.yml\nnightly-audit.yml",
  },
  scan: {
    label: "unpinned actions",
    preview:
      "ci.yml:18  actions/checkout@v4  (mutable tag)\nrelease.yml:9  docker/login-action@master\nnightly-audit.yml:4  permissions: write-all",
  },
  census: {
    label: "public claims",
    preview:
      "CLAIM  runs finish when you step away\nCLAIM  zero token markup\nCLAIM  security is production-ready\nDISLIKE  security page is target architecture",
  },
};

function event(
  kind: LedgerEvent["kind"],
  message: string,
  extra: Partial<LedgerEvent> = {},
): LedgerEvent {
  return {
    id: uid("evt"),
    at: nowIso(),
    kind,
    message,
    ...extra,
  };
}

export function createRun(templateId: string): Run | null {
  const t = templateById(templateId);
  if (!t) return null;
  const steps: StepRuntime[] = t.steps.map((spec) => ({
    spec,
    status: "pending",
    model: selectModel(spec.kind),
    costUsd: 0,
    artifacts: [],
  }));
  const run: Run = {
    id: uid("run"),
    templateId: t.id,
    name: t.name,
    objective: t.objective,
    status: "planning",
    createdAt: nowIso(),
    policy: t.policy,
    steps,
    events: [
      event("run.created", `Created ${t.name}`, { data: { templateId: t.id } }),
    ],
    spentUsd: 0,
  };
  return run;
}

export function attachPlan(run: Run): Run {
  const plan = run.steps.map((s, i) => `${i + 1}. [${s.model}] ${s.spec.title}`).join("\n");
  const next = clone(run);
  next.status = "awaiting_approval";
  next.events.push(
    event("plan.ready", `Plan ready (${next.steps.length} steps)\n${plan}`),
    event("approval.required", "Human must approve the plan before any tool runs."),
  );
  return next;
}

export function approvePlan(run: Run): Run {
  const next = clone(run);
  next.status = "running";
  next.events.push(event("plan.approved", "Plan approved. Execution started."));
  return next;
}

export async function advanceRun(run: Run): Promise<Run> {
  if (run.status !== "running") return run;
  const idx = run.steps.findIndex((s) => s.status === "pending" || s.status === "running");
  if (idx < 0) return finalize(run);

  const next = clone(run);
  const step = next.steps[idx];

  if (step.status === "pending") {
    if (next.spentUsd + step.spec.estimatedUsd > next.policy.budgetUsd) {
      step.status = "blocked";
      next.status = "failed";
      next.events.push(
        event("step.failed", `Budget would exceed ${next.policy.budgetUsd} USD`, {
          stepId: step.spec.id,
        }),
      );
      return next;
    }
    if (step.spec.gate) {
      step.status = "awaiting_approval";
      next.status = "paused";
      next.events.push(
        event("approval.required", `Gate on ${step.spec.tool} — ${step.spec.title}`, {
          stepId: step.spec.id,
          tool: step.spec.tool,
          model: step.model,
        }),
      );
      return next;
    }
    step.status = "running";
    step.startedAt = nowIso();
    next.events.push(
      event("step.started", step.spec.title, {
        stepId: step.spec.id,
        model: step.model,
        tool: step.spec.tool,
      }),
    );
    return next;
  }

  // complete running step
  const art = await artifactFor(step.spec.id, step.spec.title, JSON.stringify(step.spec.args));
  step.artifacts.push(art);
  step.costUsd = step.spec.estimatedUsd;
  step.endedAt = nowIso();
  step.status = "done";
  step.output = art.preview;
  next.spentUsd = round4(next.spentUsd + step.costUsd);
  next.events.push(
    event("artifact.hashed", `${art.type} ${art.hash.slice(0, 12)}…`, {
      stepId: step.spec.id,
      data: { hash: art.hash, bytes: art.bytes },
    }),
    event("step.completed", step.spec.title, {
      stepId: step.spec.id,
      model: step.model,
      tool: step.spec.tool,
      costUsd: step.costUsd,
    }),
    event("budget.tick", `Spent ${next.spentUsd.toFixed(4)} / ${next.policy.budgetUsd.toFixed(2)} USD`, {
      costUsd: next.spentUsd,
    }),
  );
  return next;
}

export async function approveGate(run: Run, grant: boolean): Promise<Run> {
  const idx = run.steps.findIndex((s) => s.status === "awaiting_approval");
  if (idx < 0) return run;
  const next = clone(run);
  const step = next.steps[idx];
  if (!grant) {
    step.status = "blocked";
    next.status = "cancelled";
    next.events.push(
      event("approval.denied", `Denied ${step.spec.tool}`, { stepId: step.spec.id }),
      event("run.cancelled", "Operator cancelled at gate."),
    );
    return next;
  }
  next.events.push(
    event("approval.granted", `Granted ${step.spec.tool}`, {
      stepId: step.spec.id,
      tool: step.spec.tool,
    }),
  );
  step.status = "running";
  step.startedAt = nowIso();
  next.status = "running";
  next.events.push(
    event("step.started", step.spec.title, {
      stepId: step.spec.id,
      model: step.model,
      tool: step.spec.tool,
    }),
  );
  return next;
}

async function finalize(run: Run): Promise<Run> {
  const next = clone(run);
  const blocked = next.steps.some((s) => s.status === "blocked");
  const t = templateById(next.templateId);
  const shots = next.steps.flatMap((s) => s.artifacts.filter((a) => a.type === "screenshot"));
  const writesPending = next.steps.filter(
    (s) => s.spec.tool === "slack.write" || s.spec.tool === "github.comment",
  );
  const sent = writesPending.some((s) => s.status === "done" && s.spec.tool === "slack.write");

  let verdict: Run["verdict"] = "accepted";
  let note = "Acceptance criteria met. Writes remain gated or unsent.";
  if (blocked) {
    verdict = "rejected";
    note = "A step was blocked. Fail-closed.";
  } else if (t?.id === "staging-qa" && shots.length < 2) {
    verdict = "rejected";
    note = "twin.evaluate / evaluator: missing screenshot hash.";
  } else if (t?.id === "surface-ledger") {
    verdict = "accepted";
    note =
      "3 dislikes: packages listed as live but marked not for sale; CLI shows GA while /docs marks API as Coordinator; security is target architecture and Free ledger expires in 7 days.";
  } else if (sent) {
    verdict = "needs_human";
    note = "A write landed. Review the ledger before treating this as closed.";
  }

  next.verdict = verdict;
  next.verdictNote = note;
  next.status = verdict === "rejected" ? "failed" : "succeeded";
  next.events.push(
    event("evaluator.verdict", `${verdict}: ${note}`, {
      model: selectModel("evaluate"),
      costUsd: 0.05,
    }),
    event("run.completed", `Run ${next.status}. Spent ${next.spentUsd.toFixed(4)} USD.`),
  );
  next.spentUsd = round4(next.spentUsd + 0.05);
  return next;
}

async function artifactFor(stepId: string, title: string, seed: string): Promise<Artifact> {
  const screen = SCREEN[stepId];
  const preview = screen?.preview ?? title;
  const hash = await sha256(`${stepId}:${seed}:${preview}`);
  const isShot =
    stepId === "navigate" ||
    stepId === "observe-empty" ||
    stepId === "verify" ||
    stepId === "home" ||
    stepId === "submit";
  return {
    id: uid("art"),
    type: isShot ? "screenshot" : stepId === "note" || stepId === "dissent" ? "markdown" : "json",
    hash,
    label: screen?.label ?? title,
    preview,
    bytes: preview.length + 2400,
  };
}

function clone<T>(v: T): T {
  return structuredClone(v);
}

function round4(n: number) {
  return Math.round(n * 10000) / 10000;
}

export function exportLedger(run: Run) {
  return JSON.stringify(
    {
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
        artifacts: s.artifacts.map((a) => ({ type: a.type, hash: a.hash, label: a.label })),
      })),
      events: run.events,
    },
    null,
    2,
  );
}
