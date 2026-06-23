"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TrustBadges from "@/components/ui/TrustBadges";
import { packages } from "@/data/packages";
import { formatPrice } from "@/lib/format";

export default function CheckoutPageClient() {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("package");
  const selectedPackage = packages.find((p) => p.slug === selectedSlug) ?? packages[0];

  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: "Checkout" }]} />
      <h1 className="text-3xl md:text-4xl font-display font-semibold text-navy">Checkout</h1>
      <p className="mt-2 text-muted">Secure checkout — Stripe integration prepared for launch.</p>

      <div className="mt-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section className="card-premium p-6 md:p-8">
            <h2 className="text-lg font-display font-semibold text-navy">Order summary</h2>
            <div className="mt-4 flex justify-between items-start gap-4 border-b border-border pb-4">
              <div>
                <p className="font-semibold text-navy">{selectedPackage.name}</p>
                <p className="text-sm text-muted mt-1">{selectedPackage.shortDescription}</p>
              </div>
              <p className="text-lg font-display font-semibold text-accent shrink-0">
                {formatPrice(selectedPackage.price)}
              </p>
            </div>
            <p className="mt-4 text-sm text-muted">Includes two design options and proof before print.</p>
          </section>

          <section className="card-premium p-6 md:p-8">
            <h2 className="text-lg font-display font-semibold text-navy">Customer details</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {["Full name", "Email", "Phone", "Business name"].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-semibold text-navy mb-1">{label}</label>
                  <input type="text" className="w-full rounded-lg border border-border px-4 py-3 text-sm" disabled />
                </div>
              ))}
            </div>
          </section>

          <section className="card-premium p-6 md:p-8">
            <h2 className="text-lg font-display font-semibold text-navy">Project details</h2>
            <p className="mt-2 text-sm text-muted">
              After payment, you&apos;ll upload your logo, text and images. Or{" "}
              <Link href="/upload-artwork" className="text-accent hover:underline">upload now</Link>.
            </p>
            <textarea rows={4} className="mt-4 w-full rounded-lg border border-border px-4 py-3 text-sm" placeholder="Project notes..." disabled />
          </section>

          <section className="card-premium p-6 md:p-8">
            <h2 className="text-lg font-display font-semibold text-navy">Delivery address</h2>
            <div className="mt-4 space-y-4">
              <input type="text" placeholder="Street address" className="w-full rounded-lg border border-border px-4 py-3 text-sm" disabled />
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="w-full rounded-lg border border-border px-4 py-3 text-sm" disabled />
                <input type="text" placeholder="Postcode" className="w-full rounded-lg border border-border px-4 py-3 text-sm" disabled />
              </div>
            </div>
          </section>

          <section className="card-premium p-6 md:p-8 border-dashed">
            <h2 className="text-lg font-display font-semibold text-navy">Payment</h2>
            <p className="mt-2 text-sm text-muted">
              Stripe Checkout will call <code className="text-xs bg-ivory px-1 rounded">POST /api/checkout</code> with the package slug.
              Price is resolved server-side — never from the client.
            </p>
            <button type="button" className="btn-primary mt-4 opacity-60 cursor-not-allowed" disabled>
              Pay {formatPrice(selectedPackage.price)} — Coming soon
            </button>
          </section>
        </div>

        <aside>
          <div className="card-premium p-6 sticky top-24">
            <h2 className="font-display font-semibold text-navy">Order total</h2>
            <p className="mt-4 text-3xl font-display font-semibold text-accent">
              {formatPrice(selectedPackage.price)}
            </p>
            <p className="mt-2 text-xs text-muted">Delivery calculated at checkout</p>
            <div className="mt-6">
              <TrustBadges variant="grid" tags={["Secure checkout", "Proof before print", "2 design options", "NZ-wide delivery"]} />
            </div>
            <Link href="/packages" className="btn-ghost mt-6 block text-center">
              Continue shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
