import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import CTASection from "@/components/ui/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Christchurch-based design, print and digital media studio helping New Zealand small businesses look professional.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="container-site section-padding">
        <Breadcrumbs items={[{ label: "About" }]} />
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">
            Helping small businesses look bigger
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Value Design &amp; Print is a Christchurch-based design, print and digital media studio serving businesses across New Zealand.
          </p>
        </header>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-navy">Our mission:</strong> To make agency-quality design and professional print accessible to small businesses through clear package pricing.
            </p>
            <p>
              We believe professional design should not be reserved for large companies with big budgets. Our fixed-price packages give you two design options, proof approval before print, and NZ-wide delivery — all with the polish of a creative agency.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <ImageWithFallback folder="studio" alt="Value Design & Print studio" fill />
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Our approach", desc: "Clear packages, honest pricing, and a human design process from brief to delivery." },
            { title: "Why packages", desc: "Fixed prices remove uncertainty. You know what you're getting and what it costs before you commit." },
            { title: "Proof before print", desc: "Every package includes two design options and final proof approval. Nothing prints without your sign-off." },
            { title: "Studio capability", desc: "Design, print, finishing and digital media — all under one roof in Christchurch." },
            { title: "NZ-wide service", desc: "We serve businesses across New Zealand with reliable nationwide delivery." },
          ].map((item) => (
            <div key={item.title} className="card-premium p-6">
              <h2 className="font-display font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/recent-work" className="btn-secondary">View recent work</Link>
        </div>
      </div>
      <CTASection />
    </>
  );
}
