"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PostPreview {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export default function BlogSection({ posts }: { posts: PostPreview[] }) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="relative py-24 px-6 md:px-8">
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
            ~/blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--fg)" }}>
            Latest Posts
          </h2>
          <p className="mt-3 text-base max-w-lg" style={{ color: "var(--muted)" }}>
            Thoughts on software, AI, and building things for the web.
          </p>
        </motion.div>

        {/* Post cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="glass-card block p-6 h-full no-underline group"
              >
                {/* Date */}
                <div
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--muted)",
                  }}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-accent"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--fg)",
                  }}
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "var(--bg-2)",
                        color: "var(--muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <span
                  className="text-xs transition-all duration-300 group-hover:gap-3 flex items-center gap-1.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--accent)",
                  }}
                >
                  Read more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm no-underline transition-all duration-300"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--fg-1)",
              border: "1px solid var(--border)",
            }}
          >
            View all posts →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
