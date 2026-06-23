import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import ImageWithFallback from "./ImageWithFallback";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card-premium group overflow-hidden">
      <Link href={`/design-tips/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <ImageWithFallback folder={post.imageFolder} alt={post.title} fill />
      </Link>
      <div className="p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">{post.category}</p>
        <Link href={`/design-tips/${post.slug}`}>
          <h3 className="mt-2 text-lg font-display font-semibold text-black group-hover:underline transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-muted line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-NZ", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
