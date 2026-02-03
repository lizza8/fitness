"use client";

import { ReactNode, useEffect, useState } from "react";
import { ParallaxBackground } from "./ParallaxBackground";
import { NoiseOverlay } from "./NoiseOverlay";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { ThemeContext } from "./ThemeContext";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("theme") as "light" | "dark" | null)
        : null;
    const systemPrefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = stored ?? (systemPrefersDark ? "dark" : "light");
    setTheme(resolved);
    document.documentElement.dataset.theme = resolved;

    const storedContrast =
      typeof window !== "undefined" ? window.localStorage.getItem("contrast") : null;
    if (storedContrast === "high") {
      setHighContrast(true);
      document.documentElement.dataset.contrast = "high";
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.dataset.contrast = "high";
      window.localStorage.setItem("contrast", "high");
    } else {
      delete document.documentElement.dataset.contrast;
      window.localStorage.removeItem("contrast");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative min-h-screen">
        <ParallaxBackground />
        <NoiseOverlay />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <TopBar
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
          onThemeToggle={toggleTheme}
          onContrastToggle={toggleContrast}
          theme={theme}
          highContrast={highContrast}
        />
        <main className="pl-[0px] transition-all duration-300 px-4 pb-16 pt-28 lg:pl-[260px] lg:px-10">
          {children}
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
