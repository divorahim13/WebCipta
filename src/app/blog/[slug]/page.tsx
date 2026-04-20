import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { User, Clock, ArrowLeft, Share2, Link as LinkIcon, Mail } from "lucide-react";
import CommentSection from "@/components/CommentSection";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | WebCipta Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Article Header */}
      <section className="w-full relative pt-32 pb-16 bg-muted/5 border-b border-muted/20">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Link href="/blog" className="inline-flex items-center text-[var(--color-accent)] font-medium hover:underline mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Articles
          </Link>
          
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-medium">
            <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-full uppercase tracking-wider text-xs shadow-sm border border-[var(--color-accent)]/20">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-muted">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <div className="text-muted ml-auto">
              {post.date}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="w-full max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-muted/20">
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Content & Interactive Elements */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          
          {/* Main Body */}
          <article 
            className="prose prose-lg dark:prose-invert prose-headings:text-foreground prose-a:text-[var(--color-accent)] hover:prose-a:text-blue-500 max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Share Buttons */}
          <div className="flex items-center gap-4 py-8 border-y border-muted/20 mb-16">
            <span className="font-semibold text-foreground">Share this article:</span>
            <button className="w-10 h-10 rounded-full bg-muted/10 hover:bg-[var(--color-accent)]/10 flex items-center justify-center text-muted hover:text-[var(--color-accent)] transition-colors shadow-sm border border-muted/20" title="Share">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-muted/10 hover:bg-[var(--color-accent)]/10 flex items-center justify-center text-muted hover:text-[var(--color-accent)] transition-colors shadow-sm border border-muted/20" title="Copy Link">
              <LinkIcon size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-muted/10 hover:bg-[var(--color-accent)]/10 flex items-center justify-center text-muted hover:text-[var(--color-accent)] transition-colors shadow-sm border border-muted/20" title="Email to Friend">
              <Mail size={18} />
            </button>
          </div>

          {/* Comment Section (Interactive) */}
          <CommentSection />
        </div>
      </section>
    </div>
  );
}
