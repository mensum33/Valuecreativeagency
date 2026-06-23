import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TrustBadges from "@/components/ui/TrustBadges";
import ImageGallery from "@/components/ui/ImageGallery";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import ProductJsonLd from "@/components/ui/ProductJsonLd";
import RecentWorkCard from "@/components/ui/RecentWorkCard";
import {
  packages,
  getPackageBySlug,
  packageAddOns,
  customerRequirements,
} from "@/data/packages";
import { recentWork } from "@/data/recentWork";
import { faqs } from "@/data/faqs";
import { formatPrice } from "@/lib/format";
import { createMetadata } from "@/lib/metadata";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return {};
  return createMetadata({
    title: pkg.seoTitle,
    description: pkg.seoDescription,
    path: `/packages/${pkg.slug}`,
  });
}

export default function PackageDetailPage({ params }: Props) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) notFound();

  const relatedWork = recentWork
    .filter((w) => pkg.industryTags.some((tag) => w.industry.toLowerCase().includes(tag) || w.services.some((s) => pkg.category.toLowerCase().includes(s.toLowerCase()))))
    .slice(0, 3);

  const productFaqs = faqs.filter((f) =>
    ["design-options", "proof-before-print", "request-changes", "delivery-nz"].includes(f.id)
  );

  return (
    <>
      <ProductJsonLd pkg={pkg} />
      <div className="container-site section-padding">
        <Breadcrumbs
          items={[
            { label: "Packages", href: "/packages" },
            { label: pkg.name },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <ImageGallery folder={pkg.imageFolder} alt={pkg.name} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">{pkg.category}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-display font-semibold text-navy">{pkg.name}</h1>
            <p className="mt-3 text-3xl font-display font-semibold text-accent">{formatPrice(pkg.price)}</p>
            <p className="mt-4 text-muted leading-relaxed">{pkg.shortDescription}</p>

            <TrustBadges
              tags={["2 design options included", "1 minor revision", "Proof before print", "NZ-wide delivery"]}
              className="mt-6"
            />

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href={`/checkout?package=${pkg.slug}`} className="btn-primary flex-1 text-center">
                Buy This Package
              </Link>
              <Link href="/contact" className="btn-secondary flex-1 text-center">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 space-y-16">
          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">What&apos;s included</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {pkg.includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-rich">
                  <span className="text-trust mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card-premium p-6 md:p-8 bg-sky/10 border-sky/30">
            <h2 className="text-2xl font-display font-semibold text-navy">How the design process works</h2>
            <p className="mt-4 text-muted leading-relaxed">
              After ordering, upload your logo, wording, images and notes. We create two design options. You choose one direction, request one minor revision if needed, and approve the final proof before printing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">What we need from you</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {customerRequirements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-rich">
                  <span className="text-accent mt-0.5" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/upload-artwork" className="btn-ghost mt-4 inline-flex">
              Upload artwork
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">What&apos;s not included</h2>
            <ul className="mt-4 space-y-2">
              {pkg.notIncludedItems.map((item) => (
                <li key={item} className="text-sm text-muted">• {item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">Delivery and turnaround</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Standard turnaround is typically 7–14 business days from final proof approval, plus delivery time. We deliver NZ-wide from Christchurch. Delivery costs are calculated at checkout. Urgent turnaround may be available as an add-on.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">Add-ons</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {packageAddOns.map((addon) => (
                <div key={addon.name} className="card-premium p-4">
                  <div className="flex justify-between items-start gap-2">
                    <p className="font-semibold text-navy">{addon.name}</p>
                    {addon.price > 0 && (
                      <p className="text-accent font-semibold">+{formatPrice(addon.price)}</p>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted">{addon.note}</p>
                </div>
              ))}
            </div>
          </section>

          {relatedWork.length > 0 && (
            <section>
              <h2 className="text-2xl font-display font-semibold text-navy">Recent related work</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedWork.map((w) => (
                  <RecentWorkCard key={w.id} work={w} />
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-display font-semibold text-navy">FAQ</h2>
            <div className="mt-6">
              <FAQAccordion items={productFaqs} />
            </div>
          </section>
        </div>
      </div>

      <CTASection
        heading={`Ready to order ${pkg.name}?`}
        text="Buy online, upload your details, choose from two design options, and approve your proof before we print."
        primaryLabel="Buy This Package"
        primaryHref={`/checkout?package=${pkg.slug}`}
      />
    </>
  );
}
