"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import { Button } from "./ui/Button";

type Category = "All" | "Web Design" | "E-commerce" | "AI Solutions";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  content: string;
  services: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aura Skincare",
    category: "E-commerce",
    description: "A high-conversion Shopify headless storefront built with Next.js for a premium skincare brand.",
    content: "We partnered with Aura Skincare to completely overhaul their digital storefront. By migrating them to a headless Shopify implementation using Next.js, we achieved a perfect 100 Lighthouse performance score. The new platform increased their conversion rate by 45% within the first month and significantly reduced cart abandonment through a streamlined checkout flow.",
    services: ["E-commerce Development", "UI/UX Design", "Headless CMS", "Performance Optimization"],
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Lumina Architect",
    category: "Web Design",
    description: "A minimalist, WebGL-powered portfolio for an award-winning architecture firm in New York.",
    content: "Lumina Architect needed a digital presence that matched their physical building designs: minimal, stark, and breathtaking. We utilized WebGL to render interactive 3D models of their architecture directly in the browser, wrapped in a smooth, high-end Web Design that screams luxury.",
    services: ["Web Design", "WebGL / Three.js", "Brand Identity", "Interactive Animations"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "HealthCore AI",
    category: "AI Solutions",
    description: "AI healthcare platform assisting doctors with patient triaging using large language models.",
    content: "HealthCore AI required a secure, HIPAA-compliant platform capable of parsing thousands of patient intake forms in real-time. We integrated a custom-trained LLM that highlights risk-factors automatically, saving doctors an average of 3 hours of manual data entry per week.",
    services: ["AI Integrations", "Custom LLM Training", "Secure Backend", "Web App UI"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Trendsetter",
    category: "E-commerce",
    description: "Modern apparel e-commerce with 3D product configurator and seamless checkout flow.",
    content: "For Trendsetter, we built a fully dynamic e-commerce catalog featuring a 3D product configurator. Users can mix and match apparel pieces and see their avatars try them on before purchase, decreasing return rates significantly.",
    services: ["E-commerce Development", "3D Product Viewer", "Payment Gateway Integration"],
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "FinDash",
    category: "AI Solutions",
    description: "A complex fintech dashboard tracking real-time crypto markets with generative AI insights.",
    content: "FinDash aggregates millions of data points across the stock and crypto markets. We implemented an AI agent that automatically generates natural-language market summaries for specific portfolios, giving retail investors hedge-fund scale intelligence.",
    services: ["AI Data Pipelines", "Finance Dashboard", "Next.js Development", "WebSockets"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "SaaS Launchpad",
    category: "Web Design",
    description: "High-converting dark mode landing page for a B2B SaaS startup with complex CSS animations.",
    content: "We helped this new B2B startup establish immediate trust with a meticulously crafted marketing site. Focusing entirely on conversion-driven Web Design, we integrated social proof, interactive pricing toggles, and striking dark-mode aesthetics.",
    services: ["Web Design", "Conversion Rate Optimization", "Frontend Development"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const categories: Category[] = ["All", "Web Design", "E-commerce", "AI Solutions"];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden border border-muted/20 bg-muted/5 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted/10">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title + " - " + project.category + " Project Mockup"} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-background text-foreground font-medium px-4 py-2 rounded-full flex items-center shadow-lg">
                    View Details <ExternalLink size={16} className="ml-2" />
                  </span>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-background rounded-3xl border border-muted/20 shadow-2xl overflow-hidden my-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/50 hover:bg-background text-foreground rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">{selectedProject.title}</h2>
                  
                  <div className="prose prose-sm dark:prose-invert mb-8 text-muted leading-relaxed">
                    <p>{selectedProject.content}</p>
                  </div>
                  
                  <div className="mb-10">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">Services Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted/10 border border-muted/20 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-muted/20">
                    <Link href="/contact" onClick={() => setSelectedProject(null)} className="inline-block w-full">
                      <Button size="lg" className="w-full group">
                        Work With Us <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
