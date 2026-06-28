"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center px-6 md:px-8"
    >
      <div className="max-w-[800px] w-full">
        {/* Terminal label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: "var(--accent-glow)",
              color: "var(--accent)",
              border: "1px solid var(--border)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: "var(--accent)" }} />
            available for work
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--fg)",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shaurya
          </span>
        </motion.h1>

        {/* Terminal line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center gap-2 mb-8 text-lg md:text-xl"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span style={{ color: "var(--accent)" }}>&gt;</span>
          <span style={{ color: "var(--fg-1)" }}>software &amp; ai developer</span>
          <span
            className="inline-block w-2.5 h-5 animate-cursor"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg leading-relaxed mb-10 max-w-[600px]"
          style={{ color: "var(--muted)" }}
        >
          I build interactive web experiences, AI-powered tools, and creative games. 
          Welcome to my digital garden.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium no-underline transition-all duration-300"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              color: "var(--bg)",
              boxShadow: "0 0 20px var(--accent-glow)",
            }}
          >
            View Projects →
          </a>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium no-underline transition-all duration-300"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: "transparent",
              color: "var(--fg-1)",
              border: "1px solid var(--border)",
            }}
          >
            Read Blog
          </a>
        </motion.div>
      </div>
    </section>
  );
}
