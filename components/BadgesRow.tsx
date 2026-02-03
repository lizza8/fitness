"use client";

import { motion } from "framer-motion";
import { badges } from "../lib/mockData";
import { Trophy } from "lucide-react";

export function BadgesRow() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {badges.map((badge) => (
        <motion.div
          key={badge.id}
          className="glass-panel flex items-center gap-3 rounded-2xl p-3"
          whileHover={{ scale: 1.04, rotateY: 6 }}
          transition={{ type: "spring", stiffness: 160 }}
        >
          <motion.div
            className="rounded-xl bg-white/10 p-2 text-yellow-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Trophy className="h-4 w-4" />
          </motion.div>
          <div>
            <p className="text-xs text-[var(--text-muted)]">{badge.label}</p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              {badge.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
