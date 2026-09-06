import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRuns } from "@/lib/store";
import { MODEL_LABEL } from "@/lib/engine/router";
import { exportLedger } from "@/lib/engine/simulate";
import { draftReleaseNote } from "@/lib/ai/evaluator";
import { formatUsd, shortHash } from "@/lib/utils";
import type { Run, RunStatus } from "@/lib/engine/types";
import { Check, Clock, Lock, Pause, Play, Shield, X } from "lucide-react";

function toneFor(status: RunStatus | string): "mute" | "ok" | "warn" | "danger" | "accent" {
  if (status === "succeeded" || status === "done" || status === "accepted") return "ok";
  if (status === "failed" || status === "blocked" || status === "rejected" || status === "cancelled")
    return "danger";
  if (status === "paused" || status === "awaiting_approval" || status === "needs_human") return "warn";
  if (status === "running") return "accent";
  return "mute";
}

export function RunBoard({ run }: { run: Run }) {
  const { approve, deny, tick, busy } = useRuns();
  const [note, setNote] = useState<string | null>(null);
  const [noteErr, setNoteErr] = useState<string | null>(null);
  const [noteBusy, setNoteBusy] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (run.status !== "running") return;
    timer.current = window.setTimeout(() => {
      void tick();
    }, 700);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [run.status, run.events.length, tick]);

  const pendingGate = run.steps.find((s) => s.status === "awaiting_approval");
  const pct = Math.min(100, (run.spentUsd / run.policy.budgetUsd) * 100);

  async function onNote() {
    setNoteBusy(true);
    setNoteErr(null);
    const artifacts = run.steps
      .flatMap((s) => s.artifacts.map((a) => `${a.label} ${a.hash}\n${a.preview}`))
      .join("\n---\n");
    const res = await draftReleaseNote({ data: { artifacts, objective: run.objective } });
    if (res.ok) setNote(res.text);
    else setNoteErr(res.error);
    setNoteBusy(false);
  }

  function download() {
    const blob = new Blob([exportLedger(run)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${run.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-xl border border-border bg-elevated p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs text-faint">{run.id}</p>
            <h2 className="mt-1 text-2xl font-medium">{run.name}</h2>
            <p className="mt-2 max-w-prose text-sm text-muted">{run.objective}</p>
          </div>
          <Badge tone={toneFor(run.status)}>{run.status.replace("_", " ")}</Badge>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Budget</span>
            <span className="font-mono tabular-nums">
              {formatUsd(run.spentUsd)} / {formatUsd(run.policy.budgetUsd)}
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-subtle">
            <div
              className="h-full bg-accent transition-[width] duration-[var(--motion-fast)]"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <ol className="mt-6 space-y-2">
          {run.steps.map((s) => (
            <li
              key={s.spec.id}
              className="flex items-start gap-3 rounded-lg border border-border bg-bg p-3"
            >
              <StatusIcon status={s.status} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium">{s.spec.title}</p>
                  <Badge>{MODEL_LABEL[s.model]}</Badge>
                  <span className="font-mono text-[11px] text-faint">{s.spec.tool}</span>
                  {s.spec.gate ? (
                    <span className="inline-flex items-center gap-1 text-[11px] text-warn">
                      <Lock className="size-3" /> gate
                    </span>
                  ) : null}
                </div>
                {s.artifacts[0] ? (
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    {s.artifacts[0].type} {shortHash(s.artifacts[0].hash, 12)}
                  </p>
                ) : null}
              </div>
              <span className="font-mono text-xs tabular-nums text-faint">
                {formatUsd(s.costUsd || s.spec.estimatedUsd)}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex flex-wrap gap-2">
          {run.status === "awaiting_approval" ? (
            <>
              <Button onClick={approve}>
                <Play className="size-4" /> Approve plan
              </Button>
              <Button variant="secondary" onClick={() => void deny()}>
                <X className="size-4" /> Cancel
              </Button>
            </>
          ) : null}
          {run.status === "paused" && pendingGate ? (
            <>
              <Button onClick={() => void tick()} disabled={busy}>
                <Shield className="size-4" /> Grant {pendingGate.spec.tool}
              </Button>
              <Button variant="danger" onClick={() => void deny()}>
                Deny write
              </Button>
            </>
          ) : null}
          {run.status === "succeeded" || run.status === "failed" || run.status === "cancelled" ? (
            <>
              <Button variant="secondary" onClick={download}>
                Export ledger
              </Button>
              <Button variant="ghost" onClick={() => void onNote()} disabled={noteBusy}>
                Draft note with Grok
              </Button>
            </>
          ) : null}
        </div>

        {noteErr ? <p className="mt-3 text-sm text-warn">{noteErr}</p> : null}
        {note ? (
          <pre className="mt-4 whitespace-pre-wrap rounded-lg border border-border bg-bg p-4 font-sans text-sm leading-relaxed text-fg">
            {note}
          </pre>
        ) : null}
        {run.verdict ? (
          <div className="mt-4 rounded-lg border border-border bg-subtle p-4">
            <p className="text-xs uppercase tracking-wide text-faint">Evaluator</p>
            <p className="mt-1">
              <Badge tone={toneFor(run.verdict)}>{run.verdict}</Badge>
            </p>
            <p className="mt-2 text-sm text-muted">{run.verdictNote}</p>
          </div>
        ) : null}
      </section>

      <aside className="space-y-4">
        <ScreenPane run={run} />
        <LedgerPane run={run} />
      </aside>
    </div>
  );
}

function StatusIcon({ status }: { status: string }) {
  const cls = "mt-0.5 size-4 shrink-0";
  if (status === "done") return <Check className={`${cls} text-ok`} />;
  if (status === "running") return <Play className={`${cls} text-accent`} />;
  if (status === "awaiting_approval") return <Lock className={`${cls} text-warn`} />;
  if (status === "blocked") return <X className={`${cls} text-danger`} />;
  if (status === "skipped") return <Pause className={`${cls} text-faint`} />;
  return <Clock className={`${cls} text-faint`} />;
}

function ScreenPane({ run }: { run: Run }) {
  const shot = [...run.steps].reverse().find((s) => s.artifacts.some((a) => a.type === "screenshot"));
  const art = shot?.artifacts.find((a) => a.type === "screenshot");
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-elevated">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <p className="text-xs text-muted">Computer use</p>
        {art ? (
          <p className="font-mono text-[11px] text-faint">{shortHash(art.hash, 14)}</p>
        ) : null}
      </div>
      <pre className="min-h-40 whitespace-pre-wrap bg-bg p-4 font-mono text-[11px] leading-relaxed text-accent">
        {art?.preview ?? "No screenshot yet. Approve the plan to let Astra observe."}
      </pre>
    </div>
  );
}

function LedgerPane({ run }: { run: Run }) {
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => {
    end.current?.scrollIntoView({ block: "nearest" });
  }, [run.events.length]);
  return (
    <div className="rounded-xl border border-border bg-elevated">
      <div className="border-b border-border px-4 py-2">
        <p className="text-xs text-muted">Immutable ledger</p>
      </div>
      <ol className="max-h-80 overflow-auto p-3 font-mono text-[11px] leading-5">
        {run.events.map((e) => (
          <li key={e.id} className="border-b border-border/60 py-2 last:border-0">
            <span className="text-faint">{e.at.slice(11, 19)}</span>{" "}
            <span className="text-accent">{e.kind}</span>
            <p className="whitespace-pre-wrap text-muted">{e.message}</p>
          </li>
        ))}
        <div ref={end} />
      </ol>
    </div>
  );
}
