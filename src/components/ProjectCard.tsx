"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  featured: boolean;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card block p-6 h-full no-underline group"
      >
        {/* Terminal header */}
        <div
          className="flex items-center gap-2 mb-4 pb-3"
          style={{ borderBottom: "1px solid var(--border-soft)" }}
        >
          <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          <span
            className="ml-2 text-[11px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--muted)",
            }}
          >
            ~/{project.id}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-accent"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--fg)",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: "var(--accent-glow)",
                color: "var(--accent)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link indicator */}
        <div
          className="flex items-center gap-1.5 text-xs transition-all duration-300 group-hover:gap-3"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--accent)",
          }}
        >
          <span>View Demo</span>
          <span>→</span>
        </div>
      </a>
    </motion.div>
  );
}
