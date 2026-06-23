"use client";

import Link from "next/link";
import PackageCard from "@/components/ui/PackageCard";
import PackageGrid from "@/components/ui/PackageGrid";
import TrustBadges from "@/components/ui/TrustBadges";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import ProofWorkflow from "@/components/ui/ProofWorkflow";
import RecentWorkGrid from "@/components/ui/RecentWorkGrid";
import IndustryCard from "@/components/ui/IndustryCard";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { packages, getFeaturedPackages } from "@/data/packages";
import { getFeaturedWork } from "@/data/recentWork";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { faqs, homepageFaqIds, type FAQ } from "@/data/faqs";
import { HERO_TRUST_LINE } from "@/lib/constants";

const heroPackages = [
  packages.find((p) => p.slug === "premium-laminated-business-cards")!,
  packages.find((p) => p.slug === "pull-up-banner-package")!,
  packages.find((p) => p.slug === "full-menu-book-package")!,
];

const floatingMockups = [
  { folder: "packages/business-cards", label: "Business cards", className: "top-4 right-8 w-32 md:w-40 rotate-3" },
  { folder: "packages/full-menu-book", label: "Menu book", className: "top-24 left-4 w-28 md:w-36 -rotate-6" },
  { folder: "packages/event-tickets", label: "Tickets", className: "bottom-32 right-4 w-24 md:w-32 rotate-12" },
  { folder: "packages/pull-up-banner", label: "Pull-up banner", className: "bottom-16 left-8 w-28 md:w-36 -rotate-3" },
  { folder: "packages/light-box", label: "Light box", className: "top-1/2 right-1/4 w-24 md:w-28 rotate-6" },
  { folder: "packages/gift-vouchers", label: "Digital tile", className: "bottom-4 right-1/3 w-20 md:w-24 -rotate-12" },
];

const trustStripItems = [
  { label: "Clear package pricing", icon: "price" },
  { label: "Two design options included", icon: "options" },
  { label: "Final proof before print", icon: "proof" },
  { label: "NZ-wide delivery", icon: "delivery" },
  { label: "Real recent work", icon: "work" },
  { label: "Secure checkout", icon: "secure" },
];

const whyChooseUs = [
  { title: "Agency-quality design", desc: "Professional creative direction without agency hourly rates." },
  { title: "Clear package pricing", desc: "Fixed prices shown upfront — no surprise design fees." },
  { title: "Two design options", desc: "Choose between two creative directions on every package." },
  { title: "Proof before print", desc: "Nothing prints until you approve the final artwork." },
  { title: "Print + finishing", desc: "Lamination, folding, binding and assembly included where listed." },
  { title: "Digital media add-ons", desc: "Social graphics, PDFs and digital-ready files available." },
  { title: "NZ-wide delivery", desc: "Christchurch based, delivered to your door nationwide." },
  { title: "Human support", desc: "Real people guiding you from order to delivery." },
];

const aiCards = [
  { title: "Image enhancement", desc: "Improve low-resolution photos for print and digital use." },
  { title: "Premium backgrounds", desc: "Create polished visual environments for your products and services." },
  { title: "Social media graphics", desc: "Extend your print design into consistent online visuals." },
  { title: "Poster and banner concepts", desc: "Bold large-format ideas optimised for distance readability." },
];

const homepageFaqs: FAQ[] = homepageFaqIds
  .map((id) => faqs.find((f) => f.id === id))
  .filter((f): f is FAQ => Boolean(f));

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="container-site section-padding pb-12 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Christchurch • NZ-wide
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-normal text-navy leading-[1.1] text-balance">
                Big-Agency Style. Small-Business Pricing.
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-xl">
                Agency-quality design, print and digital media packages for New Zealand small businesses. Choose a package, get two design options, approve your proof, and receive ready-to-use material delivered NZ-wide.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/packages" className="btn-primary">
                  Shop Packages
                </Link>
                <Link href="/recent-work" className="btn-secondary">
                  View Recent Work
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted leading-relaxed">{HERO_TRUST_LINE}</p>
            </div>

            <div className="relative min-h-[420px] md:min-h-[480px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky/40 via-white to-border/30 border border-border" />
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Shop online — fixed prices</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                  {heroPackages.map((pkg, i) => (
                    <div
                      key={pkg.slug}
                      className="animate-fade-in-up animate-float"
                      style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                    >
                      <PackageCard pkg={pkg} variant="hero" />
                    </div>
                  ))}
                </div>
                {floatingMockups.map((mock, i) => (
                  <div
                    key={mock.label}
                    className={`absolute hidden md:block rounded-xl overflow-hidden border border-border shadow-premium opacity-85 animate-fade-in-up ${mock.className}`}
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    <div className="relative aspect-square">
                      <ImageWithFallback folder={mock.folder} alt={mock.label} fill />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust strip */}
      <section className="border-b border-border bg-white py-5">
        <div className="container-site">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-10">
            {trustStripItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-navy">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky/50 text-trust" aria-hidden="true">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: Featured packages */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
              Shop fixed-price creative packages
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Clear pricing, two design options, proof approval and NZ-wide delivery.
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <PackageGrid packages={getFeaturedPackages()} columns={3} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/packages" className="btn-secondary">
              View all packages
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Shop by business type */}
      <section className="section-padding bg-white border-y border-border">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
              Packages built around your business
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Start with your industry and choose the package that fits.
            </p>
          </div>
          <div className="mt-10 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <IndustryCard key={ind.id} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: How it works */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-2xl mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
              Simple, clear and approved before print
            </h2>
          </div>
          <ProcessTimeline />
          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="btn-ghost">
              See the full process
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Proof before print */}
      <section className="section-padding bg-navy text-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white">
              You approve before we print.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Every design package includes two design options. You choose the direction, request one minor revision, and approve the final proof before printing. Nothing is printed without your approval.
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <ProofWorkflow />
          </div>
          <div className="mt-8">
            <Link href="/proof-approval-policy" className="text-sm font-semibold text-accent hover:underline">
              Read our proof approval policy
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Recent work */}
      <section className="section-padding">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">Recent Work</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Real design, print and digital media projects for businesses, events and community groups.
              </p>
            </div>
            <Link href="/recent-work" className="btn-secondary shrink-0">
              View all work
            </Link>
          </div>
          <RecentWorkGrid items={getFeaturedWork()} />
        </div>
      </section>

      {/* Section 8: Why choose us */}
      <section className="section-padding bg-white border-y border-border">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy text-balance">
              Professional design should not be only for big companies.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We help small businesses look polished with fixed-price creative packages for business cards, flyers, menus, banners, tickets, digital media and more.
            </p>
          </div>
          <div className="mt-10 md:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card-premium p-5 md:p-6">
                <h3 className="font-display font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Services */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">More than printing</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn-ghost">Explore all services</Link>
          </div>
        </div>
      </section>

      {/* Section 10: AI-enhanced design */}
      <section className="section-padding bg-sky/20 border-y border-border">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
              AI-enhanced design for print and digital
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We can improve low-quality images, create premium visual concepts, enhance supplied photos and prepare artwork for print and online use.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiCards.map((card) => (
              <div key={card.title} className="card-premium p-5 md:p-6">
                <h3 className="font-display font-semibold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted italic">
            AI enhancement can improve many images, but final proof approval is always required before printing.
          </p>
        </div>
      </section>

      {/* Section 11: Studio trust */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
                Based in Christchurch. Serving businesses across New Zealand.
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Value Design &amp; Print helps small businesses look professional with affordable creative packages. From business cards and flyers to menus, banners, tickets, posters and digital media, we make the process simple and clear.
              </p>
              <p className="mt-4 text-sm font-semibold text-trust">
                Trusted for real design and print projects
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["workspace", "printer", "finished-print", "behind-scenes"].map((label) => (
                <div key={label} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <ImageWithFallback folder="studio" alt={`Studio — ${label}`} fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Client feedback placeholder */}
      <section className="section-padding bg-white border-y border-border">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy text-center mb-10">
            What clients appreciate
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Clear communication, professional design and everything ready for print."
              attribution="Small business client"
            />
            <TestimonialCard
              quote="The design options made it easy to choose the right look."
              attribution="Hospitality client"
            />
            <TestimonialCard
              quote="Helpful service from design through to final printed material."
              attribution="Event client"
            />
          </div>
        </div>
      </section>

      {/* Section 13: FAQ */}
      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy text-center mb-10">
            Frequently asked questions
          </h2>
          <FAQAccordion items={homepageFaqs} />
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-ghost">View all FAQs</Link>
          </div>
        </div>
      </section>

      {/* Section 14: Final CTA */}
      <CTASection />
    </>
  );
}
