import { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Featured Web Projects",
  description: "Browse through WebCipta's portfolio of stunning landing pages, dynamic e-commerce sites, and custom software.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Header Section */}
      <section className="w-full py-20 md:py-32 bg-muted/5 border-b border-muted/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Our <span className="text-[var(--color-accent)]">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            A showcase of digital excellence. We build digital products that leave a lasting impact.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-24 bg-background flex-1">
        <div className="container mx-auto px-4 max-w-7xl">
          <PortfolioGallery />
        </div>
      </section>
    </div>
  );
}
