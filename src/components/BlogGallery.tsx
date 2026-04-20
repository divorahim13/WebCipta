"use client";

import { useState } from "react";
import { blogPosts, blogCategories, BlogCategory } from "@/lib/blog-data";
import BlogCard from "./BlogCard";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import StaggerContainer, { StaggerItem } from "./motion/StaggerContainer";
import FadeUp from "./motion/FadeUp";

export default function BlogGallery() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      <StaggerContainer className="flex flex-wrap items-center justify-center gap-4 mb-16" inView={false}>
        {blogCategories.map((category) => (
          <StaggerItem key={category}>
            <Button
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Blog Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" inView={true}>
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <StaggerItem key={post.id}>
              <FadeUp>
                <BlogCard post={post} />
              </FadeUp>
            </StaggerItem>
          ))}
        </AnimatePresence>
      </StaggerContainer>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-muted">
          No articles found for this category yet.
        </div>
      )}
    </>
  );
}
