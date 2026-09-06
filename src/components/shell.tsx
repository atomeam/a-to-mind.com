import { Link } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/templates", label: "Templates" },
  { to: "/packages", label: "Packages" },
  { to: "/surface", label: "Surface ledger" },
  { to: "/demo", label: "Live run" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-fg no-underline">
            <Scale className="size-4 text-accent" strokeWidth={1.75} />
            <span className="font-display text-lg tracking-tight">A-to-Mind</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm text-muted no-underline hover:bg-subtle hover:text-fg [&.active]:text-fg"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
