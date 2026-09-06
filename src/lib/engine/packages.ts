import { MODEL_IDS, type PackageSpec } from "./types";

export const PACKAGES: PackageSpec[] = [
  {
    id: "promise-ledger",
    name: "Promise Ledger",
    tagline: "You versus last checkpoint. Durable state, no notify.",
    evaluatorCapUsd: 0.05,
    planModel: MODEL_IDS.flash,
    executeKinds: ["audit", "computer_use", "evaluate"],
    actionClasses: ["census", "concordance", "evaluate"],
    invariants: [
      "Evaluator fail-closed at $0.05",
      "No slack.write without approval",
      "Last checkpoint is the only durable state",
    ],
  },
  {
    id: "folk-spec",
    name: "Folk Spec",
    tagline: "Model echo against a human-written spec.",
    evaluatorCapUsd: 0.3,
    planModel: MODEL_IDS.flash,
    executeKinds: ["review", "computer_use", "evaluate"],
    actionClasses: ["echo", "evidence", "dissent"],
    invariants: [
      "Echo may not invent claims",
      "Evidence must cite a hashed artifact",
      "Dissent is first-class, not a footnote",
    ],
  },
  {
    id: "machine-surface",
    name: "Machine Surface",
    tagline: "Public promises versus public proofs.",
    evaluatorCapUsd: 0.2,
    planModel: MODEL_IDS.flash,
    executeKinds: ["browser", "audit", "evaluate"],
    actionClasses: ["probe", "concordance", "surface-ledger"],
    invariants: [
      "Probes are read-only",
      "Claims extracted from HTML, not memory",
      "Dislikes are published, not buried",
    ],
  },
  {
    id: "counterparty-twin",
    name: "Counterparty Twin",
    tagline: "Hostile self-due-diligence. Paste only. Twin cannot publish.",
    evaluatorCapUsd: 0.05,
    planModel: MODEL_IDS.flash,
    executeKinds: ["audit", "evaluate", "cyber_review"],
    actionClasses: ["census", "twin.evaluate", "twin.gate"],
    invariants: [
      "twin.evaluate fail-closed, cap $0.05",
      "twin.gate required before any external-visible write",
      "Rejected if screenshot, hash, or approval is missing",
    ],
  },
];
