"use client";

import { Bell } from "lucide-react";
import { useState } from "react";

export function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative rounded-full border border-white/20 bg-white/10 p-2 text-[var(--text-primary)] shadow-glass transition hover:scale-105 focus-visible:focus-ring"
        aria-label="Open notifications"
        aria-expanded={open}
      >
        <Bell className="h-4 w-4" />
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
      </button>
      {open && (
        <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/15 bg-white/10 p-3 text-sm text-[var(--text-primary)] shadow-glass backdrop-blur-2xl">
          <p className="font-semibold">Live alerts</p>
          <div className="mt-2 space-y-2 text-[var(--text-muted)]">
            <p>Payment #0023 completed • 2m ago</p>
            <p>AI detected a maintenance risk • 5m ago</p>
            <p>Tenant feedback received • 11m ago</p>
          </div>
        </div>
      )}
    </div>
  );
}
