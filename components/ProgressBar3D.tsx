"use client";

import { motion } from "framer-motion";

type ProgressBar3DProps = {
  value: number;
  total: number;
  color: string;
  label: string;
  valueLabel?: string;
  totalLabel?: string;
};

export function ProgressBar3D({
  value,
  total,
  color,
  label,
  valueLabel,
  totalLabel
}: ProgressBar3DProps) {
  const percentage = Math.min(100, Math.round((value / total) * 100));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span>{label}</span>
        <span className="font-semibold text-[var(--text-primary)]">
          {valueLabel ?? value}/{totalLabel ?? total}
        </span>
      </div>
      <div className="h-3 rounded-full bg-white/10 p-0.5 shadow-glass">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, rgba(255,255,255,0.7))`,
            boxShadow: `0 0 12px ${color}`
          }}
        />
      </div>
    </div>
  );
}
