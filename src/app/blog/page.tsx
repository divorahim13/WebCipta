import { Metadata } from "next";
import BlogGallery from "@/components/BlogGallery";

export const metadata: Metadata = {
  title: "Blog & Insights | WebCipta",
  description: "Read the latest thoughts, news, and strategies on web development, AI integrations, and technical SEO from the WebCipta team.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Header Section */}
      <section className="w-full py-20 md:py-32 bg-muted/5 border-b border-muted/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Our <span className="text-[var(--color-accent)]">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Deep dives, trends, and strategies on navigating the intersection of web design, architecture, and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <BlogGallery />
        </div>
      </section>
    </div>
  );
}
