"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/Button";

type Category = "All" | "Landing Page" | "E-Commerce" | "Custom App";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aura Skincare",
    category: "E-Commerce",
    description: "A high-conversion Shopify headless storefront built with Next.js for a premium skincare brand.",
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "FinDash",
    category: "Custom App",
    description: "A complex fintech dashboard tracking real-time crypto markets with generative AI insights.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Lumina Architect",
    category: "Landing Page",
    description: "A minimalist, WebGL-powered portfolio for an award-winning architecture firm in New York.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Trendsetter",
    category: "E-Commerce",
    description: "Modern apparel e-commerce with 3D product configurator and seamless checkout flow.",
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "HealthCore AI",
    category: "Custom App",
    description: "AI healthcare platform assisting doctors with patient triaging using large language models.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "SaaS Launchpad",
    category: "Landing Page",
    description: "High-converting dark mode landing page for a B2B SaaS startup with complex CSS animations.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const categories: Category[] = ["All", "Landing Page", "E-Commerce", "Custom App"];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

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
              className="group relative rounded-2xl overflow-hidden border border-muted/20 bg-muted/5 flex flex-col"
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
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-background text-foreground font-medium px-4 py-2 rounded-full flex items-center shadow-lg">
                    View Project <ExternalLink size={16} className="ml-2" />
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
    </div>
  );
}
