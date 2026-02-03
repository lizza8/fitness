"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { Property3D } from "./Property3D";
import { useThemeMode } from "./ThemeContext";

type PropertyCardProps = {
  name: string;
  avatar: string;
  price: string;
  trend: number[];
  maintenanceRisk?: boolean;
  theme?: "light" | "dark";
};

export function PropertyCard({
  name,
  avatar,
  price,
  trend,
  maintenanceRisk,
  theme
}: PropertyCardProps) {
  const { theme: contextTheme } = useThemeMode();
  const resolvedTheme = theme ?? contextTheme;
  const [open, setOpen] = useState(false);
  const chartData = trend.map((value, index) => ({ value, index }));

  return (
    <>
      <motion.div
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        className="glass-panel relative flex flex-col gap-4 rounded-3xl p-5"
      >
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="h-10 w-10 rounded-full object-cover shadow-glass"
          />
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{name}</p>
            <p className="text-xs text-[var(--text-muted)]">1 year · Premium</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-2xl border border-white/15 bg-white/5 p-3 text-left shadow-glass transition hover:scale-[1.02] focus-visible:focus-ring"
          aria-label="Open 3D property viewer"
        >
          <Property3D compact theme={resolvedTheme} maintenanceRisk={maintenanceRisk} />
        </button>

        <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-2">
          <ResponsiveContainer width="100%" height={70}>
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#007bff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-[var(--text-muted)]">Rent</span>
          <span className="font-semibold text-[var(--text-primary)]">{price}</span>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="glass-panel w-full max-w-3xl rounded-3xl p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  360° Property View
                </h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-[var(--text-primary)] hover:scale-105 focus-visible:focus-ring"
                >
                  Close
                </button>
              </div>
              <div className="mt-4 h-[360px] rounded-2xl border border-white/15 bg-white/5">
                <Property3D theme={resolvedTheme} maintenanceRisk={maintenanceRisk} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
