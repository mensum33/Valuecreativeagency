import { Suspense } from "react";
import CheckoutPageClient from "./CheckoutPageClient";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Checkout",
  description: "Secure checkout for Value Design & Print packages. Stripe integration coming soon.",
  path: "/checkout",
});

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="container-site section-padding text-muted">Loading checkout...</div>}>
      <CheckoutPageClient />
    </Suspense>
  );
}
