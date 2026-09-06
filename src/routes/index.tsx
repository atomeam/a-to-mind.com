import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { TEMPLATES } from "@/lib/engine/templates";
import { PACKAGES } from "@/lib/engine/packages";
import { ArrowRight, Scale, Shield, Wallet } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Durable execution</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.1] sm:text-6xl">
          AI that finishes under contract.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Astra does the work. A-to-Mind signs the ledger. Hard budgets. Human gates.
          Default-deny tools. An append-only record you can hand to legal.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/demo">View live ledger</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/templates">Browse templates</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-elevated">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3">
          {[
            {
              icon: Wallet,
              title: "Spend caps",
              body: "Server-side USD, token, retry, and wall-clock limits. No surprise charges.",
            },
            {
              icon: Shield,
              title: "Write gates",
              body: "slack.write, deploy, comment — blocked until a human grants the step.",
            },
            {
              icon: Scale,
              title: "Court reporter",
              body: "Every model call, screenshot hash, and approval is an immutable event.",
            },
          ].map((c) => (
            <div key={c.title} className="bg-elevated p-6 sm:p-8">
              <c.icon className="size-5 text-accent" strokeWidth={1.5} />
              <h2 className="mt-4 text-xl font-medium">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-medium">This week’s surface ledger</h2>
          <Link to="/surface" className="inline-flex items-center gap-1 text-sm text-accent no-underline">
            Full census <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-6 rounded-xl border border-border bg-elevated p-5">
          <p className="text-sm text-muted">
            We ran Machine Surface against our own public copy. Evaluator accepted with three
            dislikes — not a marketing page.
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="border-b border-border pb-3">
              Packages listed as live, marked “not for sale.”
            </li>
            <li className="border-b border-border pb-3">
              CLI presented as GA; docs mark the API as Coordinator.
            </li>
            <li>Security copy is target architecture. Free ledger expires in 7 days.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-2xl font-medium">Templates</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TEMPLATES.map((t) => (
            <Link
              key={t.id}
              to="/demo"
              search={{ template: t.id }}
              className="rounded-xl border border-border bg-elevated p-5 no-underline transition-colors hover:border-accent/40"
            >
              <p className="text-xs uppercase tracking-wide text-faint">
                {PACKAGES.find((p) => p.id === t.packageId)?.name}
              </p>
              <h3 className="mt-1 text-lg font-medium text-fg">{t.name}</h3>
              <p className="mt-2 text-sm text-muted">{t.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
