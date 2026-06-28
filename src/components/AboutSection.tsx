"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "AI / ML", "Computer Vision", "Game Dev", "CSS", "Node.js",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-8">
      <div className="max-w-[800px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span
            className="text-sm mb-2 block"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--accent)",
            }}
          >
            ~/about
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--fg)" }}>
            About Me
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card p-8 mb-8"
        >
          <div
            className="flex items-center gap-2 mb-4 pb-3"
            style={{ borderBottom: "1px solid var(--border-soft)" }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            <span
              className="ml-2 text-[11px]"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--muted)" }}
            >
              ~/about/bio.md
            </span>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--fg-1)" }}>
            <p>
              I&apos;m <strong style={{ color: "var(--fg)" }}>Shaurya Bengani</strong> — a software and AI developer 
              who loves building things at the intersection of creativity and code.
            </p>
            <p>
              From real-time computer vision trackers to multi-dimensional chess games, I enjoy 
              tackling problems that push boundaries. I work primarily with 
              <strong style={{ color: "var(--accent)" }}> Python</strong> and 
              <strong style={{ color: "var(--accent)" }}> JavaScript</strong>, 
              and I&apos;m always exploring new tools and frameworks.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring game design, experimenting with 
              AI models, or writing about the things I learn.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3
            className="text-sm mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--muted)",
            }}
          >
            technologies I work with:
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  background: "var(--accent-glow)",
                  color: "var(--accent)",
                  border: "1px solid var(--border)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
