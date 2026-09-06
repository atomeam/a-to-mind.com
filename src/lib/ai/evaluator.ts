import { createServerFn } from "@tanstack/react-start";

export const draftReleaseNote = createServerFn({ method: "POST" })
  .validator((input: { artifacts: string; objective: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return {
        ok: false as const,
        error: "Evaluator offline — using ledger artifacts only.",
      };
    }
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 280,
        messages: [
          {
            role: "system",
            content:
              "You write a release note from hashed run artifacts only. Do not invent UI you cannot see. Cite hashes. 120 words max. Plain prose.",
          },
          {
            role: "user",
            content: `Objective:\n${data.objective}\n\nArtifacts:\n${data.artifacts.slice(0, 2500)}`,
          },
        ],
      }),
    });
    if (!res.ok) {
      return { ok: false as const, error: `Evaluator error ${res.status}` };
    }
    const body = (await res.json()) as {
      choices: { message: { content: string } }[];
    };
    return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
  });
