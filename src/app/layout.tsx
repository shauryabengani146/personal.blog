import type { Metadata } from "next";
import { JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shaurya.log — Software & AI Developer",
  description:
    "Personal blog and portfolio of Shaurya Bengani. Exploring software engineering, AI, game development, and creative coding.",
  keywords: ["developer", "portfolio", "blog", "AI", "software engineering", "Shaurya Bengani"],
  openGraph: {
    title: "shaurya.log — Software & AI Developer",
    description:
      "Personal blog and portfolio of Shaurya Bengani. Exploring software engineering, AI, game development, and creative coding.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "shaurya.log — Software & AI Developer",
    description:
      "Personal blog and portfolio of Shaurya Bengani.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${jetbrainsMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col"
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontOpticalSizing: "auto",
        }}
      >
        {/* Inline script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dim' || t === 'light' || t === 'dark') {
                    document.documentElement.setAttribute('data-theme', t);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Atmospheric background */}
        <div className="bg-atmosphere">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="grain" />
          <div className="scanlines" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Command Palette */}
        <CommandPalette />
      </body>
    </html>
  );
}
