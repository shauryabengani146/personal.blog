"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="text-sm mb-2 block"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--accent)",
            }}
          >
            ~/projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--fg)" }}>
            Things I&apos;ve Built
          </h2>
          <p className="mt-3 text-base max-w-lg" style={{ color: "var(--muted)" }}>
            A collection of projects spanning AI, game development, and creative web experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
