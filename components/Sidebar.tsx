"use client";

import {
  ArrowRightLeft,
  Building2,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  MessageSquare,
  Users,
  Wrench
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Properties", icon: Building2 },
  { label: "Application", icon: FileText },
  { label: "Tenants", icon: Users },
  { label: "Maintenances", icon: Wrench },
  { label: "Transactions", icon: ArrowRightLeft },
  { label: "Message", icon: MessageSquare },
  { label: "Support", icon: LifeBuoy }
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          aria-label="Close navigation overlay"
        />
      )}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[250px] rounded-r-3xl border-r border-white/15 bg-white/5 px-5 pb-6 pt-24 shadow-glass backdrop-blur-2xl transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Primary navigation"
      >
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition hover:scale-[1.02] hover:bg-white/10 focus-visible:focus-ring ${
                  item.active
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-primary shadow-glass"
                    : "text-[var(--text-primary)]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-4 shadow-glass">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-2xl bg-blue-400/30">
              <span className="absolute inset-0 m-auto h-6 w-6 rounded-full bg-blue-500/60 blur-sm" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-primary)]">
                Vestibulum Maximum erat
              </p>
              <p className="text-[11px] text-[var(--text-muted)]">
                Premium coverage
              </p>
            </div>
          </div>
          <button
            type="button"
            className="neumorphic mt-4 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-xs font-semibold text-white transition hover:scale-105 focus-visible:focus-ring"
          >
            Upgrade
          </button>
        </div>
      </aside>
    </>
  );
}
