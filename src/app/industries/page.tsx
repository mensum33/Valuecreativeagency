import IndustryCard from "@/components/ui/IndustryCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { industries } from "@/data/industries";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Creative Packages by Industry",
  description:
    "Design and print packages built for restaurants, real estate, events, beauty, tradies and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <div className="container-site section-padding">
        <Breadcrumbs items={[{ label: "Industries" }]} />
        <header className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">
            Creative packages for small businesses across New Zealand
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Start with your industry and discover packages designed for your business type.
          </p>
        </header>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <IndustryCard key={ind.id} industry={ind} />
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
