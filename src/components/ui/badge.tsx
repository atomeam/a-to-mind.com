import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "mute",
  children,
}: {
  className?: string;
  tone?: "mute" | "ok" | "warn" | "danger" | "accent";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide",
        tone === "mute" && "bg-subtle text-muted",
        tone === "ok" && "bg-ok/15 text-ok",
        tone === "warn" && "bg-warn/15 text-warn",
        tone === "danger" && "bg-danger/15 text-danger",
        tone === "accent" && "bg-accent/15 text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
