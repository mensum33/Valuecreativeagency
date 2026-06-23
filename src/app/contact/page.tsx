import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TrustBadges from "@/components/ui/TrustBadges";
import { CONTACT, PAYMENT_TRUST_COPY, mailtoContact } from "@/lib/constants";
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
        <h1 className="text-3xl md:text-5xl font-display font-semibold text-black">
          Let&apos;s talk about your project
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Questions about a package, artwork or the design process? Email us — we typically respond within 1–2 business days.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="card-premium p-6">
            <h2 className="font-display font-semibold text-black">Contact details</h2>
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
                <span className="text-black font-medium">{CONTACT.location}</span>
              </li>
            </ul>
          </div>

          <TrustBadges variant="grid" />

          <p className="text-sm text-muted leading-relaxed">{PAYMENT_TRUST_COPY}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={mailtoContact()} className="btn-primary text-center">Email us</a>
            <Link href="/upload-artwork" className="btn-secondary text-center">Upload artwork</Link>
          </div>

          <div className="text-sm text-muted space-y-2">
            <p>
              <Link href="/faq" className="text-black underline">FAQ</Link>
              {" · "}
              <Link href="/proof-approval-policy" className="text-black underline">Proof approval policy</Link>
              {" · "}
              <Link href="/shipping-delivery" className="text-black underline">Shipping &amp; delivery</Link>
            </p>
          </div>
        </div>

        <div className="card-premium p-6 md:p-8">
          <h2 className="font-display font-semibold text-black">Send us an email</h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            The fastest way to reach us is by email. Include your package choice, business name, delivery address and any project notes.
          </p>
          <a href={mailtoContact()} className="btn-primary mt-6 inline-flex w-full sm:w-auto justify-center">
            Open email — {CONTACT.email}
          </a>
          <p className="mt-6 text-xs text-muted">
            Christchurch based · NZ-wide delivery · Proof before print on every design package
          </p>
        </div>
      </div>
    </div>
  );
}
