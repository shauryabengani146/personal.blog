"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "projects", href: "#projects" },
  { label: "blog", href: "#blog" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        background: "var(--terminal-bg)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: "15px", color: "var(--fg)" }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full animate-blink"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 12px var(--accent)",
            }}
          />
          shaurya.log
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-md text-[13px] no-underline transition-colors duration-200 hover:text-accent"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--fg-1)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--accent)";
                (e.target as HTMLElement).style.background = "var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--fg-1)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              ~/{link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Ctrl+K hint */}
          <button
            onClick={() => {
              window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
            }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: "var(--bg-2)",
              color: "var(--muted)",
              border: "1px solid var(--border-soft)",
            }}
          >
            <span>⌘K</span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
