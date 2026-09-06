import { createFileRoute, Link } from "@tanstack/react-router";
import { TEMPLATES } from "@/lib/engine/templates";
import { PACKAGES } from "@/lib/engine/packages";
import { MODEL_LABEL, selectModel } from "@/lib/engine/router";
import { formatUsd } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/templates")({ component: TemplatesPage });

function TemplatesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-medium">Templates</h1>
      <p className="mt-3 max-w-xl text-muted">
        Each template is a state machine: plan, gates, hashed artifacts, evaluator. Auto routes
        Flash for plan/eval and Astra for computer use.
      </p>
      <div className="mt-10 space-y-8">
        {TEMPLATES.map((t) => (
          <article key={t.id} className="rounded-xl border border-border bg-elevated p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-faint">
                  {PACKAGES.find((p) => p.id === t.packageId)?.name}
                </p>
                <h2 className="mt-1 text-2xl font-medium">{t.name}</h2>
              </div>
              <p className="font-mono text-sm tabular-nums text-muted">
                cap {formatUsd(t.policy.budgetUsd)}
              </p>
            </div>
            <p className="mt-3 max-w-prose text-sm text-muted">{t.objective}</p>
            <ol className="mt-5 divide-y divide-border rounded-lg border border-border">
              {t.steps.map((s, i) => (
                <li key={s.id} className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-sm">
                  <span className="text-muted">
                    {i + 1}. {s.title}
                  </span>
                  <span className="font-mono text-xs text-faint">
                    {MODEL_LABEL[selectModel(s.kind)]} · {s.tool}
                    {s.gate ? " · gate" : ""}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-5">
              <Button asChild>
                <Link to="/demo" search={{ template: t.id }}>
                  Plan this run
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
