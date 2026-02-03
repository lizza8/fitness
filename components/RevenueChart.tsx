"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, Brush } from "recharts";

const data = Array.from({ length: 24 }).map((_, index) => ({
  month: `M${index + 1}`,
  value: Math.round(120 + Math.sin(index / 2) * 40 + index * 2)
}));

export function RevenueChart() {
  return (
    <div className="glass-panel rounded-3xl p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[var(--text-primary)]">Revenue pulse</p>
        <span className="text-xs text-[var(--text-muted)]">Zoom &amp; pan</span>
      </div>
      <div className="mt-3 h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" hide />
            <Tooltip
              contentStyle={{
                background: "rgba(8,12,24,0.7)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            />
            <Line type="monotone" dataKey="value" stroke="#6f42c1" strokeWidth={2} dot={false} />
            <Brush dataKey="month" height={20} stroke="#007bff" travellerWidth={10} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
