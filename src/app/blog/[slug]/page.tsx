import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — shaurya.log`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="py-24 px-6 md:px-8">
      <article className="max-w-[720px] mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm no-underline transition-colors duration-200"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--muted)",
          }}
        >
          ← Back to blog
        </Link>

        {/* Post header */}
        <header className="mb-10">
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
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--fg)",
            }}
          >
            {post.title}
          </h1>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
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
        </header>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid var(--border-soft)", margin: "0 0 2rem 0" }} />

        {/* Post content */}
        <div className="prose-blog">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer nav */}
        <div
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border-soft)" }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm no-underline transition-colors duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--accent)",
            }}
          >
            ← All posts
          </Link>
        </div>
      </article>
    </div>
  );
}
