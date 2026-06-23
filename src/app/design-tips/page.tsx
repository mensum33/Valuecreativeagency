import BlogCard from "@/components/ui/BlogCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Design Tips",
  description:
    "Practical design and print tips for New Zealand small businesses — logos, menus, banners and more.",
  path: "/design-tips",
});

export default function DesignTipsPage() {
  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: "Design Tips" }]} />
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">Design Tips</h1>
        <p className="mt-4 text-muted leading-relaxed">
          Practical advice on artwork, print and design for small businesses.
        </p>
      </header>

      <div className="mt-6 flex flex-wrap gap-2">
        {blogCategories.map((cat) => (
          <span key={cat} className="rounded-full bg-sky/40 px-3 py-1 text-xs font-medium text-navy">
            {cat}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
