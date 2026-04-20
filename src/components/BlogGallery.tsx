"use client";

import { useState } from "react";
import { blogPosts, blogCategories, BlogCategory } from "@/lib/blog-data";
import BlogCard from "./BlogCard";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogGallery() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {blogCategories.map((category) => (
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

      {/* Blog Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredPosts.map((post) => (
            <motion.div
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-muted">
          No articles found for this category yet.
        </div>
      )}
    </>
  );
}
