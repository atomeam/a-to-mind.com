export const MODEL_IDS = {
  astra: "gpt-6-astra",
  flash: "gemini-3.8-flash",
  flash_cyber: "gemini-3.8-flash-cyber",
  grok: "grok-4.5",
  auto: "auto",
} as const;

export type ModelId = (typeof MODEL_IDS)[keyof typeof MODEL_IDS];

export type StepKind =
  | "plan"
  | "decompose"
  | "evaluate"
  | "review"
  | "computer_use"
  | "browser"
  | "code"
  | "swe"
  | "cyber_review"
  | "audit"
  | "notify"
  | "write";

export type ToolName =
  | "computer.observe"
  | "computer.act"
  | "browser.act"
  | "model.call"
  | "http.read"
  | "slack.write"
  | "github.read"
  | "github.comment";

export type RunStatus =
  | "queued"
  | "planning"
  | "awaiting_approval"
  | "running"
  | "paused"
  | "succeeded"
  | "failed"
  | "cancelled";

export type EvaluatorVerdict = "accepted" | "rejected" | "needs_human";

export type LedgerEventKind =
  | "run.created"
  | "plan.ready"
  | "plan.approved"
  | "step.started"
  | "step.completed"
  | "step.failed"
  | "approval.required"
  | "approval.granted"
  | "approval.denied"
  | "artifact.hashed"
  | "budget.tick"
  | "evaluator.verdict"
  | "run.completed"
  | "run.cancelled";

export interface Policy {
  budgetUsd: number;
  maxSteps: number;
  approvalMode: "required" | "writes_only" | "none";
  toolAllowlist: ToolName[];
}

export interface StepSpec {
  id: string;
  title: string;
  kind: StepKind;
  tool: ToolName;
  args: Record<string, unknown>;
  gate: boolean;
  estimatedUsd: number;
}

export interface Artifact {
  id: string;
  type: "screenshot" | "markdown" | "json" | "note" | "dom";
  hash: string;
  label: string;
  preview: string;
  bytes: number;
}

export interface LedgerEvent {
  id: string;
  at: string;
  kind: LedgerEventKind;
  stepId?: string;
  model?: ModelId;
  tool?: ToolName;
  costUsd?: number;
  message: string;
  data?: Record<string, unknown>;
}

export interface StepRuntime {
  spec: StepSpec;
  status: "pending" | "running" | "awaiting_approval" | "done" | "blocked" | "skipped";
  model: ModelId;
  startedAt?: string;
  endedAt?: string;
  costUsd: number;
  artifacts: Artifact[];
  output?: string;
}

export interface Template {
  id: string;
  name: string;
  blurb: string;
  packageId: string;
  policy: Policy;
  objective: string;
  steps: StepSpec[];
  acceptance: string[];
}

export interface PackageSpec {
  id: string;
  name: string;
  tagline: string;
  evaluatorCapUsd: number;
  planModel: ModelId;
  executeKinds: StepKind[];
  actionClasses: string[];
  invariants: string[];
}

export interface Run {
  id: string;
  templateId: string;
  name: string;
  objective: string;
  status: RunStatus;
  createdAt: string;
  policy: Policy;
  steps: StepRuntime[];
  events: LedgerEvent[];
  spentUsd: number;
  verdict?: EvaluatorVerdict;
  verdictNote?: string;
}
