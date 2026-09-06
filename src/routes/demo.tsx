import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RunBoard } from "@/components/run-board";
import { TEMPLATES } from "@/lib/engine/templates";
import { useRuns } from "@/lib/store";

type Search = { template?: string };

export const Route = createFileRoute("/demo")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    template: typeof s.template === "string" ? s.template : undefined,
  }),
  component: DemoPage,
});

function DemoPage() {
  const { template } = Route.useSearch();
  const { runs, activeId, seed, setActive } = useRuns();
  const run = runs.find((r) => r.id === activeId) ?? runs[0];
  const booted = useRef(false);

  useEffect(() => {
    if (booted.current && !template) return;
    booted.current = true;
    seed(template ?? "staging-qa");
  }, [template, seed]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-medium">Live run</h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Approve the plan. Computer-use writes pause at the gate. The ledger is the product.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {TEMPLATES.map((t) => (
            <Button
              key={t.id}
              size="sm"
              variant={run?.templateId === t.id ? "default" : "secondary"}
              onClick={() => seed(t.id)}
            >
              {t.name}
            </Button>
          ))}
        </div>
      </div>

      {runs.length > 1 ? (
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {runs.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActive(r.id)}
              className={`rounded-md border px-3 py-2 font-mono text-xs ${
                r.id === run?.id ? "border-accent text-fg" : "border-border text-muted"
              }`}
            >
              {r.id}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-8">
        {run ? (
          <RunBoard run={run} />
        ) : (
          <p className="rounded-xl border border-border bg-elevated p-8 text-muted">
            Pick a template to plan a run. Nothing is stored until you approve.
          </p>
        )}
      </div>
    </main>
  );
}
