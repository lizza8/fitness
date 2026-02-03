"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tenants = [
  {
    id: "tenant-1",
    name: "Liam Gardner",
    role: "Premium tenant",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "tenant-2",
    name: "Sienna Hart",
    role: "Verified tenant",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop"
  }
];

export function TenantProfilesModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-[var(--text-primary)] shadow-glass hover:scale-105 focus-visible:focus-ring"
      >
        View tenant profiles
      </button>

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
              className="glass-panel w-full max-w-lg rounded-3xl p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Tenant profiles
                </h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-[var(--text-primary)]"
                >
                  Close
                </button>
              </div>
              <div className="mt-4 space-y-3">
                {tenants.map((tenant) => (
                  <div
                    key={tenant.id}
                    className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3"
                  >
                    <img
                      src={tenant.avatar}
                      alt={tenant.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {tenant.name}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">{tenant.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
