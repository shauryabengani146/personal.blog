export default function Footer() {
  return (
    <footer
      className="relative py-8 px-6 md:px-8 text-center"
      style={{ borderTop: "1px solid var(--border-soft)" }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-xs"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--muted)",
          }}
        >
          © {new Date().getFullYear()} shaurya.log
        </span>
        <span
          className="text-xs"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--muted)",
          }}
        >
          Built with Next.js + Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
