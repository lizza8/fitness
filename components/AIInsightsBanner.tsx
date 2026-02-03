"use client";

import { Sparkles } from "lucide-react";

export function AIInsightsBanner() {
  return (
    <div className="glass-panel rounded-3xl border border-white/20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-4">
      <div className="flex items-center gap-3">
        <span className="rounded-2xl bg-white/15 p-2 text-blue-200 shadow-glass">
          <Sparkles className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            AI Analytics
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Overdue risks down 15% — optimize with auto-reminders.
          </p>
        </div>
      </div>
    </div>
  );
}
