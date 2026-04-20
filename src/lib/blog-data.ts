export type BlogCategory = "All" | "Web Design Tips" | "AI Trends" | "SEO Strategies";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-in-web-design",
    title: "How AI is Reshaping the Future of Web Design",
    excerpt: "Discover how generative AI and machine learning are automating tedious design processes and enabling hyper-personalized user experiences.",
    content: "<h2>The AI Revolution in Design</h2><p>Artificial Intelligence is no longer just a futuristic concept; it's actively reshaping how we build the web. Generative AI tools allow us to create dynamic layouts, generate high-fidelity mockups from text prompts, and even write boilerplate UI code.</p><h3>Hyper-Personalization</h3><p>One of the biggest impacts of AI is its ability to tailor web experiences to individual users. By analyzing user behavior in real-time, AI can adjust the layout, color palette, and content hierarchy to maximize engagement and conversion.</p>",
    category: "AI Trends",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    author: "Alex Mercer",
    date: "April 15, 2026",
    readTime: "4 min read"
  },
  {
    id: "2",
    slug: "essential-seo-strategies-2026",
    title: "Essential SEO Strategies for Next.js Applications in 2026",
    excerpt: "Master the technical intricacies of App Router SEO, metadata generation, and sitemap optimization to rank higher on Google.",
    content: "<h2>Beyond the Basics</h2><p>Next.js provides an incredible foundation for SEO, but achieving top rankings requires more than just utilizing the `Metadata` API. In 2026, search engines prioritize <strong>Performance Metrics (Core Web Vitals)</strong> and <strong>Semantic Relevance</strong>.</p><h3>Dynamic Open Graph Images</h3><p>Implement `next/og` to generate unique share images for every dynamic route. This greatly enhances click-through rates whenever your links are shared on social platforms.</p>",
    category: "SEO Strategies",
    imageUrl: "https://images.unsplash.com/photo-1432888117428-5ae1d5d9cddf?q=80&w=800&auto=format&fit=crop",
    author: "Sarah Chen",
    date: "April 10, 2026",
    readTime: "6 min read"
  },
  {
    id: "3",
    slug: "minimalism-in-modern-ui",
    title: "Mastering Minimalism in Modern UI Design",
    excerpt: "Why less is more, and how to effectively use negative space to draw users toward your primary call-to-actions.",
    content: "<h2>The Power of Empty Space</h2><p>Minimalism in web design doesn't simply mean having fewer elements. It's about intentionality. Every border, every shadow, and every pixel of padding must serve a deliberate purpose.</p><h3>Creating Visual Hierarchies</h3><p>By leveraging negative space (or whitespace), you can guide the user's eye exactly where you want it to go. Combine this with stark, high-contrast typography, and your calls-to-action become impossible to miss.</p>",
    category: "Web Design Tips",
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    author: "Sarah Chen",
    date: "April 02, 2026",
    readTime: "5 min read"
  },
  {
    id: "4",
    slug: "chatgpt-customer-support-integration",
    title: "Integrating ChatGPT for 24/7 Customer Support",
    excerpt: "A technical guide on how to integrate custom-trained LLMs into your SaaS product to handle tier-1 support queries.",
    content: "<h2>The Need for Speed</h2><p>Modern customers expect instant answers to their questions, regardless of the time zome. Support ticket backlogs lead to churn. Integrating a fine-tuned GPT model can resolve up to 70% of redundant API or billing requests instantly.</p><h3>Structuring Vector Data</h3><p>To make the LLM accurate, you must ground it using RAG (Retrieval-Augmented Generation). We recommend storing your product documentation in a vector database like Pinecone or Supabase pgvector.</p>",
    category: "AI Trends",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    author: "Marcus Thorne",
    date: "March 28, 2026",
    readTime: "8 min read"
  }
];

export const blogCategories: BlogCategory[] = ["All", "Web Design Tips", "AI Trends", "SEO Strategies"];
