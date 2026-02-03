"use client";

import { useEffect, useMemo, useState } from "react";
import { TransactionRow } from "./TransactionRow";
import { transactions as baseTransactions } from "../lib/mockData";
import { motion } from "framer-motion";

type SortKey = "amount" | "status";

export function TransactionHistory() {
  const [sortKey, setSortKey] = useState<SortKey>("amount");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSeconds((prev) => (prev + 1) % 60);
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const sortedTransactions = useMemo(() => {
    const parsed = [...baseTransactions];
    return parsed.sort((a, b) => {
      const aVal = sortKey === "amount" ? parseFloat(a.amount) : a.status;
      const bVal = sortKey === "amount" ? parseFloat(b.amount) : b.status;
      const compare =
        typeof aVal === "number" && typeof bVal === "number"
          ? aVal < bVal
            ? -1
            : aVal > bVal
              ? 1
              : 0
          : (aVal as string).localeCompare(bVal as string);
      return sortDir === "asc" ? compare : -compare;
    });
  }, [sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }
    setSortKey(key);
    setSortDir("desc");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          Transaction History
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--text-muted)]">
            Live sync: {seconds}s
          </span>
          <button
            type="button"
            onClick={() => toggleSort("amount")}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-[var(--text-primary)] shadow-glass"
          >
            Sort by amount
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-xs text-[var(--text-muted)]">
        <button type="button" onClick={() => toggleSort("status")} className="text-left">
          Payment Number
        </button>
        <span className="text-center">Amount</span>
        <span className="text-right">Status</span>
      </div>
      <div className="space-y-3">
        {sortedTransactions.map((txn, index) => (
          <motion.div
            key={txn.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <TransactionRow label={txn.label} amount={txn.amount} status={txn.status as "Completed" | "Declined"} />
          </motion.div>
        ))}
      </div>
      <div className="glass-panel relative overflow-hidden rounded-2xl px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--text-muted)]">Completed payments</span>
          <span className="text-sm font-semibold text-emerald-300">+12% this week</span>
        </div>
        <div className="absolute right-4 top-2 flex gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-emerald-300"
              animate={{ y: [0, -8, 0], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
