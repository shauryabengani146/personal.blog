"use client";

import { useEffect, useState } from "react";

const themes = ["dark", "dim", "light"] as const;
type Theme = (typeof themes)[number];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved && themes.includes(saved)) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const cycle = () => {
    const next = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const icons: Record<Theme, string> = {
    dark: "🌙",
    dim: "🌗",
    light: "☀️",
  };

  return (
    <button
      onClick={cycle}
      aria-label={`Switch theme (current: ${theme})`}
      className="relative w-[70px] h-8 rounded-full border cursor-pointer overflow-hidden"
      style={{
        background: "var(--bg-2)",
        borderColor: "var(--border-soft)",
      }}
    >
      {/* Track icons */}
      <span className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none text-xs opacity-50">
        <span>🌙</span>
        <span>☀️</span>
      </span>
      {/* Thumb */}
      <span
        className="absolute top-[3px] w-[26px] h-[26px] rounded-full grid place-items-center text-xs transition-transform duration-500"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
          boxShadow: "0 2px 10px var(--accent-glow)",
          transform: `translateX(${theme === "dark" ? 3 : theme === "dim" ? 22 : 41}px)`,
        }}
      >
        {icons[theme]}
      </span>
    </button>
  );
}
