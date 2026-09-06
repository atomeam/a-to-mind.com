import { create } from "zustand";
import type { Run } from "./engine/types";
import {
  advanceRun,
  approveGate,
  approvePlan,
  attachPlan,
  createRun,
} from "./engine/simulate";

interface Store {
  runs: Run[];
  activeId: string | null;
  busy: boolean;
  seed: (templateId: string) => string | null;
  approve: () => void;
  deny: () => Promise<void>;
  tick: () => Promise<void>;
  setActive: (id: string | null) => void;
}

function patch(set: (fn: (s: Store) => Partial<Store>) => void, run: Run) {
  set((s) => ({
    runs: s.runs.map((r) => (r.id === run.id ? run : r)),
  }));
}

export const useRuns = create<Store>((set, get) => ({
  runs: [],
  activeId: null,
  busy: false,
  seed: (templateId) => {
    const run = createRun(templateId);
    if (!run) return null;
    const planned = attachPlan(run);
    set((s) => ({ runs: [planned, ...s.runs], activeId: planned.id }));
    return planned.id;
  },
  approve: () => {
    const { runs, activeId } = get();
    const run = runs.find((r) => r.id === activeId);
    if (!run) return;
    if (run.status === "awaiting_approval") {
      patch(set, approvePlan(run));
    }
  },
  deny: async () => {
    const { runs, activeId } = get();
    const run = runs.find((r) => r.id === activeId);
    if (!run) return;
    patch(set, await approveGate(run, false));
  },
  tick: async () => {
    const { runs, activeId, busy } = get();
    if (busy) return;
    const run = runs.find((r) => r.id === activeId);
    if (!run) return;
    if (run.status === "paused") {
      set({ busy: true });
      const granted = await approveGate(run, true);
      patch(set, granted);
      set({ busy: false });
      return;
    }
    if (run.status !== "running") return;
    set({ busy: true });
    patch(set, await advanceRun(run));
    set({ busy: false });
  },
  setActive: (id) => set({ activeId: id }),
}));
