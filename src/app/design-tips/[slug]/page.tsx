import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PackageCard from "@/components/ui/PackageCard";
import { blogPosts, getBlogBySlug } from "@/data/blogPosts";
import { getPackageBySlug } from "@/data/packages";
import { createMetadata } from "@/lib/metadata";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};
  return createMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/design-tips/${post.slug}`,
  });
}

export default function BlogDetailPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  const relatedPackages = post.relatedPackageSlugs
    .map((slug) => getPackageBySlug(slug))
    .filter(Boolean);

  const paragraphs = post.content.split("\n\n");

  return (
    <article className="container-site section-padding">
      <Breadcrumbs
        items={[
          { label: "Design Tips", href: "/design-tips" },
          { label: post.title },
        ]}
      />

      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">{post.category}</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-display font-semibold text-navy">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-NZ", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="mt-12 max-w-3xl prose prose-neutral">
        {paragraphs.map((para, i) => {
          if (para.startsWith("**") && para.includes("**")) {
            const parts = para.split("**");
            return (
              <p key={i} className="mt-6 text-muted leading-relaxed">
                <strong className="text-navy">{parts[1]}</strong>
                {parts[2]}
              </p>
            );
          }
          return (
            <p key={i} className="mt-4 text-muted leading-relaxed whitespace-pre-line">
              {para.replace(/\*\*(.*?)\*\*/g, "")}
            </p>
          );
        })}
      </div>

      {relatedPackages.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-display font-semibold text-navy">Related packages</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {relatedPackages.map((pkg) => pkg && (
              <PackageCard key={pkg.id} pkg={pkg} variant="compact" />
            ))}
          </div>
          <Link href="/packages" className="btn-primary mt-8 inline-flex">
            Shop all packages
          </Link>
        </section>
      )}
    </article>
  );
}
