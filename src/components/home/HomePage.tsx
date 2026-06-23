"use client";

import Link from "next/link";
import HeroVisualBoard from "@/components/home/HeroVisualBoard";
import TrustStrip from "@/components/home/TrustStrip";
import PackageReassurance from "@/components/home/PackageReassurance";
import WhatCustomersExpect from "@/components/home/WhatCustomersExpect";
import ExperienceBlock from "@/components/ui/ExperienceBlock";
import PackageGrid from "@/components/ui/PackageGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import ProofWorkflow from "@/components/ui/ProofWorkflow";
import RecentWorkGrid from "@/components/ui/RecentWorkGrid";
import IndustryCard from "@/components/ui/IndustryCard";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { packages } from "@/data/packages";
import { getFeaturedWork } from "@/data/recentWork";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { faqs, homepageFaqIds, type FAQ } from "@/data/faqs";
import { HERO_TRUST_LINE, PAYMENT_SUMMARY_LINE } from "@/lib/constants";

const whyChooseUs = [
  { title: "Agency-quality design", desc: "Professional creative direction without agency hourly rates." },
  { title: "Clear package pricing", desc: "Fixed prices shown upfront — no surprise design fees." },
  { title: "Two design options", desc: "Choose between two creative directions on every package." },
  { title: "Proof before print", desc: "Nothing prints until you approve the final artwork." },
  { title: "Hands-on production experience", desc: "Led by 16+ years of practical design, print and visual media experience." },
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
      {/* Section 1: Premium trust-first hero */}
      <section className="relative overflow-hidden border-b border-border bg-offwhite">
        <div className="container-site section-padding pb-12 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
                Christchurch • NZ-wide
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-normal text-black leading-[1.08]">
                Big-Agency Style.
                <br />
                Small-Business Pricing.
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-xl">
                Creative agency quality, packaged for small businesses. We design, print, finish and prepare digital media that helps New Zealand businesses look professional online and in print.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/packages" className="btn-primary text-center">
                  Shop Packages
                </Link>
                <Link href="/recent-work" className="btn-secondary text-center">
                  View Recent Work
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted leading-relaxed">{HERO_TRUST_LINE}</p>
              <p className="mt-2 text-sm text-black/80 leading-relaxed">{PAYMENT_SUMMARY_LINE}</p>
            </div>

            <div className="relative lg:pl-4 hidden md:block">
              <HeroVisualBoard />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Section 3: Shop fixed-price packages */}
      <section id="packages" className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">
              Shop Fixed-Price Packages
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Clear prices, two design options, proof approval and NZ-wide delivery.
            </p>
            <p className="mt-4 text-sm text-black/80 leading-relaxed border-l-2 border-black pl-4">
              Every package includes two design options and proof approval before print — so you know exactly what you&apos;re getting before production starts.
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <PackageGrid packages={packages} columns={3} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/packages" className="btn-secondary">
              View all packages
            </Link>
          </div>
        </div>
      </section>

      <PackageReassurance />

      {/* Section 5: How it works */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-2xl mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">
              Simple, clear and approved before print.
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
      <section className="section-padding bg-black text-white">
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
            <Link href="/proof-approval-policy" className="text-sm font-semibold text-white hover:underline">
              Read our proof approval policy
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Recent work */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">Recent Work</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Design, print and digital media projects for businesses, events and community groups.
              </p>
            </div>
            <Link href="/recent-work" className="btn-secondary shrink-0">
              View all work
            </Link>
          </div>
          <RecentWorkGrid items={getFeaturedWork()} />
        </div>
      </section>

      {/* Section 8: Packages by business type */}
      <section className="section-padding border-y border-border">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">
              Packages built around your business.
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

      {/* Section 9: Why small businesses choose us */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-black text-balance">
              Professional design should not be only for big companies.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We help small businesses look polished with fixed-price creative packages for business cards, flyers, menus, banners, tickets, digital media and more.
            </p>
          </div>
          <div className="mt-10 md:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card-premium p-5 md:p-6">
                <div className="h-px w-6 bg-black mb-4" aria-hidden="true" />
                <h3 className="font-display font-semibold text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Services overview */}
      <section className="section-padding border-y border-border">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">More than printing.</h2>
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

      {/* Section 11: AI-enhanced design */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">
              Photo enhancement for print and digital.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We can improve low-quality images, refine supplied photos and prepare artwork for print and online use — always with human review and final proof approval.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiCards.map((card) => (
              <div key={card.title} className="card-premium p-5 md:p-6">
                <h3 className="font-display font-semibold text-black">{card.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Image enhancement can improve many photos, but final proof approval is always required before printing.
          </p>
        </div>
      </section>

      {/* Section 12: Studio trust */}
      <section className="section-padding border-y border-border">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">
                Based in Christchurch. Serving businesses across New Zealand.
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Value Design &amp; Print helps businesses look professional with fixed-price creative packages. From business cards and flyers to menus, banners, tickets, posters and digital media, we make the process simple and clear.
              </p>
              <ExperienceBlock />
              <Link href="/about" className="btn-secondary mt-8 inline-flex">
                About Value Design &amp; Print
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["workspace", "printer", "finished-print", "behind-scenes"].map((label) => (
                <div key={label} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border img-bw">
                  <ImageWithFallback folder="studio" alt={`Studio — ${label}`} fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatCustomersExpect />

      {/* Section 14: FAQ */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-black text-center mb-10">
            Questions before you order?
          </h2>
          <FAQAccordion items={homepageFaqs} />
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-ghost">View all FAQs</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
