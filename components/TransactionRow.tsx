"use client";

import { CheckCircle2, XCircle } from "lucide-react";

type TransactionRowProps = {
  label: string;
  amount: string;
  status: "Completed" | "Declined";
};

export function TransactionRow({ label, amount, status }: TransactionRowProps) {
  const isCompleted = status === "Completed";
  return (
    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3">
      <div>
        <p className="text-sm font-medium text-[var(--text-primary)]">{label}</p>
        <p className="text-xs text-[var(--text-muted)]">Today · Auto-sync</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-[var(--text-primary)]">
          {amount}
        </span>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
            isCompleted
              ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-200"
              : "bg-red-500/20 text-red-600 dark:text-red-200"
          }`}
        >
          {isCompleted ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
          {status}
        </span>
      </div>
    </div>
  );
}
