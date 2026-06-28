"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home", shortcut: "H" },
  { label: "Projects", href: "#projects", shortcut: "P" },
  { label: "Blog", href: "#blog", shortcut: "B" },
  { label: "About", href: "#about", shortcut: "A" },
  { label: "Contact", href: "#contact", shortcut: "C" },
];

const pages = [
  { label: "Blog Page", href: "/blog", shortcut: "G" },
];

const allItems = [...navItems, ...pages];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = allItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    setSearch("");
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle]);

  const navigate = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      navigate(filtered[selectedIndex].href);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={() => setIsOpen(false)}
          />
          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-[90vw] max-w-[520px] rounded-xl overflow-hidden"
            style={{
              background: "var(--bg-1)",
              border: "1px solid var(--border)",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.5)",
            }}
          >
            {/* Search input */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ borderBottom: "1px solid var(--border-soft)" }}
            >
              <span style={{ color: "var(--accent)" }} className="text-lg">
                &gt;
              </span>
              <input
                type="text"
                placeholder="Type a command..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                autoFocus
                className="flex-1 bg-transparent border-none outline-none text-sm"
                style={{
                  color: "var(--fg)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              />
              <kbd
                className="text-[10px] px-1.5 py-0.5 rounded"
                style={{
                  background: "var(--bg-2)",
                  color: "var(--muted)",
                  border: "1px solid var(--border-soft)",
                }}
              >
                ESC
              </kbd>
            </div>
            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <div
                  className="px-4 py-6 text-center text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  No results found
                </div>
              ) : (
                filtered.map((item, i) => (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left cursor-pointer transition-colors duration-150"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: i === selectedIndex ? "var(--accent)" : "var(--fg-1)",
                      background: i === selectedIndex ? "var(--accent-glow)" : "transparent",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span style={{ color: "var(--muted)" }}>~/</span>
                      {item.label.toLowerCase()}
                    </span>
                    <kbd
                      className="text-[10px] px-1.5 py-0.5 rounded"
                      style={{
                        background: "var(--bg-2)",
                        color: "var(--muted)",
                        border: "1px solid var(--border-soft)",
                      }}
                    >
                      {item.shortcut}
                    </kbd>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
