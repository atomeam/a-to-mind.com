import { MODEL_IDS, type ModelId, type StepKind } from "./types";

export function selectModel(kind: StepKind, requested: ModelId = MODEL_IDS.auto): ModelId {
  if (requested !== MODEL_IDS.auto) return requested;
  switch (kind) {
    case "plan":
    case "decompose":
    case "evaluate":
    case "review":
      return MODEL_IDS.flash;
    case "computer_use":
    case "browser":
    case "code":
    case "swe":
      return MODEL_IDS.astra;
    case "cyber_review":
    case "audit":
      return MODEL_IDS.flash_cyber;
    case "notify":
    case "write":
      return MODEL_IDS.flash;
    default:
      return MODEL_IDS.flash;
  }
}

export const MODEL_LABEL: Record<ModelId, string> = {
  "gpt-6-astra": "Astra",
  "gemini-3.8-flash": "Flash",
  "gemini-3.8-flash-cyber": "Flash Cyber",
  "grok-4.5": "Grok 4.5",
  auto: "Auto",
};

export const MODEL_ROLE: Record<ModelId, string> = {
  "gpt-6-astra": "Computer use, visual grounding, SWE",
  "gemini-3.8-flash": "Plan, decompose, evaluate",
  "gemini-3.8-flash-cyber": "Defender review, audit",
  "grok-4.5": "Release note, dissent memo",
  auto: "Routed by step kind",
};
