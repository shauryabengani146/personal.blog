import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <>
      <Hero />
      <ProjectsSection />
      <BlogSection posts={posts} />
      <AboutSection />
      <ContactSection />
    </>
  );
}
