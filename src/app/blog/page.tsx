import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — shaurya.log",
  description: "All blog posts by Shaurya Bengani on software, AI, and creative coding.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-24 px-6 md:px-8">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span
            className="text-sm mb-2 block"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--accent)",
            }}
          >
            ~/blog
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--fg)" }}>
            All Posts
          </h1>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            {posts.length} {posts.length === 1 ? "post" : "posts"} published
          </p>
        </div>

        {/* Post list */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card block p-6 no-underline group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h2
                  className="text-lg font-semibold transition-colors duration-300 group-hover:text-accent"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--fg)",
                  }}
                >
                  {post.title}
                </h2>
                <span
                  className="text-xs shrink-0"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--muted)",
                  }}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
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
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16" style={{ color: "var(--muted)" }}>
            <p
              className="text-lg mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              No posts yet.
            </p>
            <p className="text-sm">Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
