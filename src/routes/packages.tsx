import { createFileRoute } from "@tanstack/react-router";
import { PACKAGES } from "@/lib/engine/packages";
import { MODEL_LABEL } from "@/lib/engine/router";
import { formatUsd } from "@/lib/utils";

export const Route = createFileRoute("/packages")({ component: PackagesPage });

function PackagesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-medium">Packages</h1>
      <p className="mt-3 max-w-xl text-muted">
        Governance that makes Critical-capability computer use shippable. Evaluator caps, action
        classes, and fail-closed invariants — aligned to Astra / Flash routing.
      </p>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {PACKAGES.map((p) => (
          <article key={p.id} className="rounded-xl border border-border bg-elevated p-6">
            <h2 className="text-2xl font-medium">{p.name}</h2>
            <p className="mt-2 text-sm text-muted">{p.tagline}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-faint">Plan model</dt>
                <dd className="font-mono">{MODEL_LABEL[p.planModel]}</dd>
              </div>
              <div>
                <dt className="text-faint">Evaluator cap</dt>
                <dd className="font-mono tabular-nums">{formatUsd(p.evaluatorCapUsd)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs uppercase tracking-wide text-faint">Invariants</p>
            <ul className="mt-2 space-y-2 text-sm text-muted">
              {p.invariants.map((i) => (
                <li key={i} className="border-l-2 border-accent/40 pl-3">
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[11px] text-faint">
              {p.actionClasses.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
