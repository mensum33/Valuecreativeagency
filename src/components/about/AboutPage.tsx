import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import CTASection from "@/components/ui/CTASection";
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
  "Business cards",
  "Flyers",
  "Menus",
  "Pull-up banners",
  "Light boxes",
  "Gift vouchers",
  "Loyalty cards",
  "Tickets",
  "Posters",
  "Booklets",
  "Binding",
  "Padding",
  "Lamination",
  "Table tents",
  "Digital media",
  "AI-enhanced design",
];

const processSteps = [
  { number: "01", title: "Choose your package", description: "Pick a fixed-price package that fits your business." },
  { number: "02", title: "Upload your details", description: "Send your logo, wording, photos and project notes." },
  { number: "03", title: "Receive two design options", description: "We create two creative directions for you to compare." },
  { number: "04", title: "Choose your favourite", description: "Select the direction that best represents your business." },
  {
    number: "05",
    title: "Approve your final proof",
    description: "Review and approve the final artwork before anything is printed.",
    highlight: true,
  },
  {
    number: "06",
    title: "We print, finish and deliver NZ-wide",
    description: "Your order is printed, finished where needed, and delivered across New Zealand.",
  },
];

const studioPhotos = [
  { folder: "studio", alt: "Value Design & Print studio workspace" },
  { folder: "studio", alt: "Print production in the studio" },
  { folder: "studio", alt: "Finished print close-up" },
];

export default function AboutPage() {
  const featuredWork = getFeaturedWork()[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-paper">
        <div
          className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-sky/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-site section-padding pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="max-w-3xl mt-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Christchurch • NZ-wide
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-normal text-navy leading-[1.08] text-balance">
              Helping Small Businesses Look Bigger
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
              Value Design &amp; Print is a Christchurch-based design, print and digital media studio helping New Zealand small businesses look professional without big-agency pricing.
            </p>
            <p className="mt-4 text-base text-navy/80 leading-relaxed">
              Agency-quality design, print and digital media packages for NZ businesses — with clear pricing, two design options and proof approval before print.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/packages" className="btn-primary text-center">
                Shop Packages
              </Link>
              <Link href="/recent-work" className="btn-secondary text-center">
                View Recent Work
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">{HERO_TRUST_LINE}</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy text-balance">
              Professional design should not be only for big companies.
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              Most small businesses need polished business cards, flyers, menus, banners, tickets, posters and digital media — but big-agency pricing can feel out of reach. Value Design &amp; Print makes professional creative work easier with fixed-price packages, clear inclusions and a proof-before-print process.
            </p>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="section-padding bg-white border-y border-border">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
            What makes us different
          </h2>
          <div className="mt-10 md:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <article key={item.title} className="card-premium p-6 md:p-7">
                <div className="h-px w-8 bg-accent mb-5" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Studio capability */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
              Design, print, finish and digital media in one place.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              From first concept to finished product — one clear package, one trusted process.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {capabilities.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-ivory px-4 py-2 text-sm font-medium text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-sky/20 border-y border-border">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
            A simple process built around trust.
          </h2>
          <div className="mt-10 md:mt-14 grid gap-5 md:gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className={`flex gap-5 md:gap-8 items-start ${step.highlight ? "md:pl-4" : ""}`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    step.highlight
                      ? "bg-trust text-white ring-4 ring-trust/20 scale-110"
                      : "bg-navy text-white"
                  }`}
                >
                  {step.number}
                </div>
                <div
                  className={`flex-1 rounded-2xl border p-5 md:p-6 ${
                    step.highlight
                      ? "bg-trust/5 border-trust/30 shadow-card-hover"
                      : "card-premium"
                  }`}
                >
                  {step.highlight && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-trust mb-2">
                      Your approval required
                    </p>
                  )}
                  <h3
                    className={`font-display font-semibold text-navy ${
                      step.highlight ? "text-xl md:text-2xl" : "text-lg"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/how-it-works" className="btn-ghost">
              See the full process
            </Link>
          </div>
        </div>
      </section>

      {/* Studio photos */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-2xl mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
              Real work from a real studio.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Design, production and finishing — the kind of work small businesses rely on every day.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {studioPhotos.map((photo) => (
              <div
                key={photo.alt}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-card"
              >
                <ImageWithFallback folder={photo.folder} alt={photo.alt} fill />
              </div>
            ))}
            {featuredWork && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-card group">
                <ImageWithFallback
                  folder={featuredWork.imageFolder}
                  alt={`Recent work — ${featuredWork.title}`}
                  fill
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    Recent work
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white line-clamp-2">
                    {featuredWork.title}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-8">
            <Link href="/recent-work" className="btn-secondary">
              View recent work
            </Link>
          </div>
        </div>
      </section>

      {/* Christchurch / NZ-wide */}
      <section className="section-padding bg-white border-y border-border">
        <div className="container-site">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
              Based in Christchurch. Serving businesses across New Zealand.
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              We work with businesses, events and community groups across NZ. Whether you need business cards, restaurant menus, real estate flyers, event tickets, banners or digital graphics, the process is simple: choose a package, approve your proof and receive ready-to-use material.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/packages" className="btn-primary text-center">
                Shop Packages
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
