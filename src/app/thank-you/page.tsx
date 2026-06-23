import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { createMetadata } from "@/lib/metadata";

const nextSteps = [
  "We check your order details",
  "We prepare two design options",
  "You choose your preferred design",
  "We send final proof",
  "After approval, we print and deliver",
];

export const metadata = createMetadata({
  title: "Thank You",
  description: "Your order has been received. Here's what happens next.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: "Thank You" }]} />
      <div className="max-w-2xl mx-auto text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-trust/10 text-trust mb-6">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-semibold text-navy">
          Thanks — your order has been received.
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          We&apos;ll be in touch shortly to confirm your order and begin the design process.
        </p>

        <ol className="mt-10 text-left space-y-4">
          {nextSteps.map((step, i) => (
            <li key={step} className="flex items-start gap-4 card-premium p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm text-rich pt-1">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/upload-artwork" className="btn-primary">Upload artwork</Link>
          <Link href="/packages" className="btn-secondary">Shop more packages</Link>
        </div>
      </div>
    </div>
  );
}
