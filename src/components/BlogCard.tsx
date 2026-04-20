import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import { Clock, User } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group h-full flex">
      <article className="flex flex-col bg-muted/5 border border-muted/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--color-accent)]/50 transition-all duration-300 w-full">
        {/* Cover Image */}
        <div className="relative h-56 w-full overflow-hidden bg-muted/20">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-background/90 backdrop-blur-md text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2 group-hover:text-[var(--color-accent)] transition-colors">
            {post.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Footer Metadata */}
          <div className="flex items-center justify-between text-xs text-muted/80 font-medium pt-4 border-t border-muted/10 mt-auto">
            <div className="flex items-center gap-1.5">
              <User size={14} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{post.date}</span>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
