import { Suspense } from "react";
import CheckoutPageClient from "./CheckoutPageClient";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Checkout",
  description: "Order a fixed-price design and print package from Value Design & Print. Christchurch based, NZ-wide delivery.",
  path: "/checkout",
});

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="container-site section-padding text-muted">Loading checkout...</div>}>
      <CheckoutPageClient />
    </Suspense>
  );
}
