import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/surface")({ component: SurfacePage });

const CLAIMS = [
  {
    url: "/",
    claim: "Workflows finish when you step away",
    status: "like" as const,
    proof: "Execution contract + Durable Object coordinator described in docs.",
  },
  {
    url: "/pricing",
    claim: "Zero token markup, BYOK",
    status: "like" as const,
    proof: "Pricing copy states provider bill only. No counterexample found.",
  },
  {
    url: "/pricing",
    claim: "Packages listed as available products",
    status: "dislike" as const,
    proof: "Cards read as live SKUs; inventory marks them not for sale.",
  },
  {
    url: "/docs",
    claim: "CLI is generally available",
    status: "dislike" as const,
    proof: "Marketing presents atomind run as GA; /docs marks REST as Coordinator.",
  },
  {
    url: "/security",
    claim: "Security posture is production-complete",
    status: "dislike" as const,
    proof: "Page is explicit target architecture. Free ledger retained 7 days.",
  },
];

function SurfacePage() {
  const dislikes = CLAIMS.filter((c) => c.status === "dislike").length;
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Machine Surface</p>
      <h1 className="mt-3 text-4xl font-medium">Public promises vs proofs</h1>
      <p className="mt-4 text-muted">
        Weekly census of our own pages. Evaluator accepted. {dislikes} dislikes published, not
        buried. slack.notify pending — not sent.
      </p>
      <ol className="mt-10 space-y-4">
        {CLAIMS.map((c) => (
          <li key={c.claim} className="rounded-xl border border-border bg-elevated p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs text-faint">{c.url}</p>
              <Badge tone={c.status === "like" ? "ok" : "warn"}>{c.status}</Badge>
            </div>
            <p className="mt-2 font-medium">{c.claim}</p>
            <p className="mt-2 text-sm text-muted">{c.proof}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <Button asChild>
          <Link to="/demo" search={{ template: "surface-ledger" }}>
            Re-run census
          </Link>
        </Button>
      </div>
    </main>
  );
}
