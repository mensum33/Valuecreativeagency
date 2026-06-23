import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TrustBadges from "@/components/ui/TrustBadges";
import { CONTACT } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Value Design & Print. Christchurch-based, serving businesses across New Zealand.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">
          Let&apos;s talk about your project
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Questions about a package? Need help choosing? We&apos;re here to help.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="card-premium p-6">
            <h2 className="font-display font-semibold text-navy">Contact details</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="text-muted">Email: </span>
                <a href={`mailto:${CONTACT.email}`} className="text-black font-medium hover:underline">
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.phone ? (
                <li>
                  <span className="text-muted">Phone: </span>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-black font-medium hover:underline">
                    {CONTACT.phone}
                  </a>
                </li>
              ) : null}
              <li>
                <span className="text-muted">Location: </span>
                <span className="text-navy font-medium">{CONTACT.location}</span>
              </li>
            </ul>
          </div>

          <TrustBadges variant="grid" />

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/upload-artwork" className="btn-secondary text-center">Upload artwork</Link>
            <Link href="/packages" className="btn-primary text-center">Shop packages</Link>
          </div>

          <p className="text-sm text-muted">
            We typically respond within 1–2 business days. NZ-wide service with proof before print on every design package.
          </p>
        </div>

        <form className="card-premium p-6 md:p-8 space-y-5" aria-label="Contact form">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-semibold text-navy mb-1">Name *</label>
            <input id="contact-name" type="text" required className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold text-navy mb-1">Email *</label>
            <input id="contact-email" type="email" required className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-semibold text-navy mb-1">Message *</label>
            <textarea id="contact-message" rows={5} required className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto" disabled>
            Send message (coming soon)
          </button>
        </form>
      </div>
    </div>
  );
}
