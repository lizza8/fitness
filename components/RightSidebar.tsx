"use client";

import { ChevronDown } from "lucide-react";
import { ProgressBar3D } from "./ProgressBar3D";
import { UpperFiles } from "./UpperFiles";

export function RightSidebar() {
  return (
    <aside className="space-y-4">
      <div className="glass-panel rounded-3xl p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[var(--text-primary)]">Show Today</span>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-[var(--text-primary)]"
          >
            Today <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="mt-4 space-y-3">
          <div className="glass-panel rounded-2xl p-3">
            <p className="text-xs text-[var(--text-muted)]">Suggested fee</p>
            <p className="text-lg font-semibold text-emerald-300">560</p>
          </div>
          <div className="glass-panel rounded-2xl p-3">
            <p className="text-xs text-[var(--text-muted)]">Overdue</p>
            <p className="text-lg font-semibold text-red-300">21K</p>
          </div>
          <div className="glass-panel rounded-2xl p-3">
            <ProgressBar3D
              value={24}
              total={90}
              color="#4d9bff"
              label="Balance"
              valueLabel="24"
              totalLabel="90"
            />
          </div>
          <div className="glass-panel rounded-2xl p-3">
            <ProgressBar3D
              value={100}
              total={140}
              color="#ff9f43"
              label="Order Value"
              valueLabel="100K"
              totalLabel="140K"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full border border-white/20 bg-white/10 py-2 text-xs text-[var(--text-primary)] shadow-glass hover:scale-105 focus-visible:focus-ring"
          >
            View all
          </button>
        </div>
      </div>
      <UpperFiles />
    </aside>
  );
}
