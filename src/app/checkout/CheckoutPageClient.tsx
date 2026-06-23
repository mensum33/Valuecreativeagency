"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TrustBadges from "@/components/ui/TrustBadges";
import { packages } from "@/data/packages";
import { formatPrice } from "@/lib/format";
import { CHECKOUT_NOTICE, CONTACT, PAYMENT_TRUST_COPY, mailtoOrder } from "@/lib/constants";

export default function CheckoutPageClient() {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("package");
  const selectedPackage = packages.find((p) => p.slug === selectedSlug) ?? packages[0];

  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: "Checkout" }]} />
      <h1 className="text-3xl md:text-4xl font-display font-semibold text-black">Order your package</h1>
      <p className="mt-2 text-muted max-w-2xl">{CHECKOUT_NOTICE}</p>

      <div className="mt-6 rounded-2xl border border-border bg-lightgrey p-5 md:p-6 max-w-3xl">
        <p className="text-sm text-black font-semibold">Prefer to order by email?</p>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Email us your package choice and project details. We will confirm pricing, payment and next steps within 1–2 business days.
        </p>
        <a href={mailtoOrder(selectedPackage.name)} className="btn-primary mt-4 inline-flex">
          Email to order — {selectedPackage.name}
        </a>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section className="card-premium p-6 md:p-8">
            <h2 className="text-lg font-display font-semibold text-black">Order summary</h2>
            <div className="mt-4 flex justify-between items-start gap-4 border-b border-border pb-4">
              <div>
                <p className="font-semibold text-black">{selectedPackage.name}</p>
                <p className="text-sm text-muted mt-1">{selectedPackage.shortDescription}</p>
              </div>
              <p className="text-lg font-display font-semibold text-black shrink-0">
                {formatPrice(selectedPackage.price)}
              </p>
            </div>
            <p className="mt-4 text-sm text-muted">{PAYMENT_TRUST_COPY}</p>
          </section>

          <section className="card-premium p-6 md:p-8 opacity-75">
            <h2 className="text-lg font-display font-semibold text-black">Customer details</h2>
            <p className="mt-2 text-sm text-muted">Online checkout fields will appear here when card payment goes live.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {["Full name", "Email", "Phone", "Business name"].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-semibold text-black mb-1">{label}</label>
                  <input type="text" className="w-full rounded-lg border border-border px-4 py-3 text-sm bg-lightgrey" disabled />
                </div>
              ))}
            </div>
          </section>

          <section className="card-premium p-6 md:p-8 opacity-75">
            <h2 className="text-lg font-display font-semibold text-black">Upload details</h2>
            <p className="mt-2 text-sm text-muted">
              After ordering, upload your logo, text and images on our{" "}
              <Link href="/upload-artwork" className="text-black underline">upload page</Link> or attach them to your order email.
            </p>
          </section>

          <section className="card-premium p-6 md:p-8 border-dashed opacity-75">
            <h2 className="text-lg font-display font-semibold text-black">Card payment</h2>
            <p className="mt-2 text-sm text-muted">
              Secure card checkout is being finalised. For now, please order by email at{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-black underline">{CONTACT.email}</a>.
            </p>
            <button type="button" className="btn-primary mt-4 opacity-50 cursor-not-allowed" disabled>
              Pay online — coming soon
            </button>
          </section>
        </div>

        <aside>
          <div className="card-premium p-6 sticky top-24">
            <h2 className="font-display font-semibold text-black">Order total</h2>
            <p className="mt-4 text-3xl font-display font-semibold text-black">
              {formatPrice(selectedPackage.price)}
            </p>
            <p className="mt-2 text-xs text-muted">Delivery calculated separately</p>
            <div className="mt-6">
              <TrustBadges
                variant="grid"
                tags={["Two design options", "Proof before print", "NZ-wide delivery", "1 minor revision included"]}
              />
            </div>
            <a href={mailtoOrder(selectedPackage.name)} className="btn-primary mt-6 w-full text-center">
              Email to order
            </a>
            <Link href="/packages" className="btn-ghost mt-4 block text-center">
              Continue shopping
            </Link>
            <Link href="/contact" className="btn-ghost mt-2 block text-center text-sm">
              Ask a question first
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
