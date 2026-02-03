"use client";

import {
  ChevronDown,
  Contrast,
  Menu,
  Moon,
  Search,
  SlidersHorizontal,
  Sun
} from "lucide-react";
import { NotificationBell } from "./NotificationBell";

type TopBarProps = {
  onMenuToggle: () => void;
  onThemeToggle: () => void;
  onContrastToggle: () => void;
  theme: "light" | "dark";
  highContrast: boolean;
};

export function TopBar({
  onMenuToggle,
  onThemeToggle,
  onContrastToggle,
  theme,
  highContrast
}: TopBarProps) {
  return (
    <header className="fixed top-4 z-50 w-full px-4 lg:px-10 lg:pl-[260px]">
      <div className="glass-panel glass-strong mx-auto flex max-w-screen-xl items-center justify-between rounded-3xl px-5 py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuToggle}
            className="rounded-xl border border-white/20 bg-white/10 p-2 text-[var(--text-primary)] shadow-glass transition hover:scale-105 focus-visible:focus-ring lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-gradient text-xl font-semibold">Logo</span>
          <div className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-[var(--text-muted)] shadow-glass md:flex">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Live updates connected
          </div>
        </div>

        <div className="hidden flex-1 justify-center px-8 lg:flex">
          <label className="relative w-full max-w-xl">
            <span className="sr-only">Search in pageini</span>
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="search"
              placeholder="Search in pageini"
              className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] backdrop-blur-2xl focus-visible:focus-ring"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="neumorphic hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[var(--text-primary)] transition hover:scale-105 focus-visible:focus-ring lg:flex"
            aria-label="Filter options"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filter
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onThemeToggle}
            className="rounded-full border border-white/20 bg-white/10 p-2 text-[var(--text-primary)] shadow-glass transition hover:scale-105 focus-visible:focus-ring"
            aria-label="Toggle color theme"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={onContrastToggle}
            className={`rounded-full border border-white/20 bg-white/10 p-2 text-[var(--text-primary)] shadow-glass transition hover:scale-105 focus-visible:focus-ring ${
              highContrast ? "ring-2 ring-blue-400/60" : ""
            }`}
            aria-label="Toggle high contrast mode"
          >
            <Contrast className="h-4 w-4" />
          </button>
          <NotificationBell />
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop"
              alt="User avatar"
              className="h-10 w-10 rounded-full border border-white/30 object-cover shadow-glass"
            />
            <span className="absolute -right-0.5 top-0 h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(255,105,180,0.9)]" />
          </div>
        </div>
      </div>
    </header>
  );
}
