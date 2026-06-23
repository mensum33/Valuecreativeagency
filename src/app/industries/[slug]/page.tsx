import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PackageCard from "@/components/ui/PackageCard";
import RecentWorkCard from "@/components/ui/RecentWorkCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { industries, getIndustryBySlug } from "@/data/industries";
import { getPackageBySlug } from "@/data/packages";
import { getWorkBySlug } from "@/data/recentWork";
import { getFaqById } from "@/data/faqs";
import { createMetadata } from "@/lib/metadata";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};
  return createMetadata({
    title: industry.seoTitle,
    description: industry.seoDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  const industryPackages = industry.packageSlugs
    .map((slug) => getPackageBySlug(slug))
    .filter(Boolean);

  const industryWork = industry.workSlugs
    .map((slug) => getWorkBySlug(slug))
    .filter(Boolean);

  const industryFaqs = industry.faqIds
    .map((id) => getFaqById(id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <>
      <div className="container-site section-padding">
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            { label: industry.name },
          ]}
        />

        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">
            {industry.heroTitle}
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">{industry.heroSubtitle}</p>
        </header>

        <section className="mt-12">
          <h2 className="text-2xl font-display font-semibold text-navy">Common challenges</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {industry.painPoints.map((point) => (
              <li key={point} className="card-premium p-4 text-sm text-muted">{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-display font-semibold text-navy">Recommended packages</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryPackages.map((pkg) => pkg && (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>

        {industryWork.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-navy">Recent work</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industryWork.map((w) => w && (
                <RecentWorkCard key={w.id} work={w} />
              ))}
            </div>
          </section>
        )}

        {industryFaqs.length > 0 && (
          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-display font-semibold text-navy">FAQ</h2>
            <div className="mt-6">
              <FAQAccordion items={industryFaqs} />
            </div>
          </section>
        )}
      </div>
      <CTASection
        heading={`Packages for ${industry.name}`}
        primaryHref="/packages"
      />
    </>
  );
}
