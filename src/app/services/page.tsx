import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { services, additionalServices } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Design, Print, Finish & Digital Media",
  description:
    "Professional design, print, finishing and digital media services for New Zealand small businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <div className="container-site section-padding">
        <Breadcrumbs items={[{ label: "Services" }]} />
        <header className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">
            Design, Print, Finish &amp; Digital Media
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Agency-quality creative services with clear package pricing. Every design package includes two options and proof approval before print.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <div className="mt-16 space-y-12">
          {additionalServices.map((service) => (
            <section key={service.id} className="card-premium p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-navy">{service.name}</h2>
              <p className="mt-3 text-muted leading-relaxed">{service.description}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-rich">
                    <span className="text-accent mt-1" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              {"note" in service && service.note && (
                <p className="mt-4 text-sm text-muted italic">{service.note}</p>
              )}
              <Link href="/packages" className="btn-ghost mt-5 inline-flex">
                View relevant packages
              </Link>
            </section>
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
