import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import CTASection from "@/components/ui/CTASection";
import ExperienceBlock from "@/components/ui/ExperienceBlock";
import { HERO_TRUST_LINE } from "@/lib/constants";
import { getFeaturedWork } from "@/data/recentWork";

const differentiators = [
  {
    title: "Clear package pricing",
    description: "No confusing print jargon or surprise design costs.",
  },
  {
    title: "Two design options",
    description: "Every design package includes two creative directions to choose from.",
  },
  {
    title: "Proof before print",
    description: "Nothing is printed until the final artwork is approved.",
  },
  {
    title: "Design + print + finish",
    description:
      "We help with design, printing, lamination, folding, binding, padding, displays and digital media.",
  },
];

const capabilities = [
  "Business cards", "Flyers", "Menus", "Pull-up banners", "Light boxes",
  "Gift vouchers", "Loyalty cards", "Tickets", "Posters", "Booklets",
  "Binding", "Padding", "Lamination", "Table tents", "Digital media", "AI-enhanced design",
];

const processSteps = [
  { number: "01", title: "Choose your package", description: "Pick a fixed-price package that fits your business." },
  { number: "02", title: "Upload your details", description: "Send your logo, wording, photos and project notes." },
  { number: "03", title: "Receive two design options", description: "We create two creative directions for you to compare." },
  { number: "04", title: "Choose your favourite", description: "Select the direction that best represents your business." },
  { number: "05", title: "Approve your final proof", description: "Review and approve the final artwork before anything is printed.", highlight: true },
  { number: "06", title: "We print, finish and deliver NZ-wide", description: "Your order is printed, finished where needed, and delivered across New Zealand." },
];

export default function AboutPage() {
  const featuredWork = getFeaturedWork()[0];

  return (
    <>
      <section className="border-b border-border bg-offwhite">
        <div className="container-site section-padding pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="max-w-3xl mt-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
              Christchurch • NZ-wide
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-normal text-black leading-[1.08] text-balance">
              Helping Small Businesses Look Bigger
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
              Value Design &amp; Print is a Christchurch-based design, print and digital media studio helping New Zealand small businesses look professional without big-agency pricing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/packages" className="btn-primary text-center">Shop Packages</Link>
              <Link href="/recent-work" className="btn-secondary text-center">View Recent Work</Link>
            </div>
            <p className="mt-6 text-sm text-muted">{HERO_TRUST_LINE}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-black text-balance">
            Professional design should not be only for big companies.
          </h2>
          <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
            Most small businesses need polished business cards, flyers, menus, banners, tickets, posters and digital media — but big-agency pricing can feel out of reach. Value Design &amp; Print makes professional creative work easier with fixed-price packages, clear inclusions and a proof-before-print process.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-border">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">What makes us different</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <article key={item.title} className="card-premium p-6 md:p-7">
                <div className="h-px w-8 bg-black mb-5" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-black">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">
            Design, print, finish and digital media in one place.
          </h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {capabilities.map((item) => (
              <li key={item} className="rounded-full border border-border bg-lightgrey px-4 py-2 text-sm font-medium text-black">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-lightgrey border-y border-border">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">A simple process built around trust.</h2>
          <div className="mt-10 grid gap-5 md:gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className={`flex gap-5 md:gap-8 items-start ${step.highlight ? "md:pl-4" : ""}`}>
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${step.highlight ? "bg-black text-white ring-4 ring-black/10" : "bg-charcoal text-white"}`}>
                  {step.number}
                </div>
                <div className={`flex-1 rounded-2xl border p-5 md:p-6 ${step.highlight ? "bg-white border-black/20 shadow-card-hover" : "card-premium"}`}>
                  {step.highlight && <p className="text-xs font-semibold uppercase tracking-wider text-black mb-2">Your approval required</p>}
                  <h3 className={`font-display font-semibold text-black ${step.highlight ? "text-xl md:text-2xl" : "text-lg"}`}>{step.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <ExperienceBlock className="border-t-0 pt-0 mt-0 max-w-3xl" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["workspace", "printer", "finished-print", "behind-scenes"].map((label) => (
              <div key={label} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border img-bw">
                <ImageWithFallback folder="studio" alt={`Studio — ${label}`} fill />
              </div>
            ))}
            {featuredWork && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border img-bw group sm:col-span-2 lg:col-span-1">
                <ImageWithFallback folder={featuredWork.imageFolder} alt={featuredWork.title} fill className="group-hover:scale-105 transition-transform duration-500" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-border">
        <div className="container-site max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-black">
            Based in Christchurch. Serving businesses across New Zealand.
          </h2>
          <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
            We work with businesses, events and community groups across NZ. Whether you need business cards, restaurant menus, real estate flyers, event tickets, banners or digital graphics, the process is simple: choose a package, approve your proof and receive ready-to-use material.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/packages" className="btn-primary text-center">Shop Packages</Link>
            <Link href="/contact" className="btn-secondary text-center">Contact us</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
