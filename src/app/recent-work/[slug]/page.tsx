import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ImageGallery from "@/components/ui/ImageGallery";
import PackageCard from "@/components/ui/PackageCard";
import CTASection from "@/components/ui/CTASection";
import { recentWork, getWorkBySlug } from "@/data/recentWork";
import { packages } from "@/data/packages";
import { createMetadata } from "@/lib/metadata";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return recentWork.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: Props) {
  const work = getWorkBySlug(params.slug);
  if (!work) return {};
  return createMetadata({
    title: work.seoTitle,
    description: work.seoDescription,
    path: `/recent-work/${work.slug}`,
  });
}

export default function RecentWorkDetailPage({ params }: Props) {
  const work = getWorkBySlug(params.slug);
  if (!work) notFound();

  const relatedPackages = packages
    .filter((p) => work.services.some((s) => p.category.includes(s) || p.name.toLowerCase().includes(s.toLowerCase())))
    .slice(0, 3);

  return (
    <>
      <div className="container-site section-padding">
        <Breadcrumbs
          items={[
            { label: "Recent Work", href: "/recent-work" },
            { label: work.title },
          ]}
        />

        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">{work.industry}</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-display font-semibold text-black">{work.title}</h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">{work.summary}</p>
          {work.clientWebsite && (
            <a
              href={work.clientWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 inline-flex"
            >
              Visit client website
            </a>
          )}
        </header>

        <div className="mt-12">
          <ImageGallery folder={work.imageFolder} alt={work.title} />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">Overview</h2>
            <p className="mt-4 text-muted leading-relaxed">{work.summary}</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">The brief</h2>
            <p className="mt-4 text-muted leading-relaxed">{work.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">What we created</h2>
            <p className="mt-4 text-muted leading-relaxed">{work.solution}</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">Deliverables</h2>
            <ul className="mt-4 space-y-2">
              {work.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-rich">
                  <span className="text-black" aria-hidden="true">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 card-premium p-6 md:p-8 bg-lightgrey">
          <h2 className="text-2xl font-display font-semibold text-black">Outcome</h2>
          <p className="mt-4 text-muted leading-relaxed">{work.outcome}</p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-display font-semibold text-navy">Related packages</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} variant="compact" />
            ))}
          </div>
          <Link href="/packages" className="btn-ghost mt-6 inline-flex">
            View all packages
          </Link>
        </section>
      </div>
      <CTASection />
    </>
  );
}
