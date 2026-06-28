"use client";

import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/shauryabengani146",
    icon: "⟐",
  },
  {
    label: "Email",
    href: "mailto:shauryabengani146@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shauryabengani",
    icon: "◈",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-8">
      <div className="max-w-[600px] mx-auto text-center">
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
            ~/contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--fg)" }}>
            Get In Touch
          </h2>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            Have a project idea or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              whileHover={{ y: -3 }}
              className="glass-card flex items-center gap-3 px-6 py-3 no-underline"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "14px",
                color: "var(--fg-1)",
              }}
            >
              <span className="text-lg">{social.icon}</span>
              {social.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
