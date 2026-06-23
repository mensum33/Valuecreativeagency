import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import ProofWorkflow from "@/components/ui/ProofWorkflow";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/metadata";

const detailedSteps = [
  { step: "1", title: "Choose package", desc: "Browse fixed-price packages and select the one that fits your needs." },
  { step: "2", title: "Complete payment", desc: "Full payment starts your order and reserves design time." },
  { step: "3", title: "Upload details", desc: "Provide your logo, text, photos, brand colours and delivery address." },
  { step: "4", title: "Design starts", desc: "Our design team reviews your brief and begins creating your options." },
  { step: "5", title: "Two design options", desc: "You receive two distinct design directions to compare." },
  { step: "6", title: "Customer chooses", desc: "Select your preferred design direction." },
  { step: "7", title: "Minor revision", desc: "Request one minor revision if needed — included in every package." },
  { step: "8", title: "Final proof", desc: "Review and approve the final proof before production." },
  { step: "9", title: "Print and finish", desc: "We print, laminate, fold, bind or assemble as required." },
  { step: "10", title: "Dispatch and delivery", desc: "Your order is dispatched and delivered NZ-wide." },
  { step: "11", title: "Reorder or add-ons", desc: "Reorder easily or add digital media and extra quantities." },
];

const trustFaqs = faqs.filter((f) =>
  ["proof-before-print", "design-options", "request-changes", "delivery-nz"].includes(f.id)
);

export const metadata = createMetadata({
  title: "How It Works",
  description:
    "Choose a package, upload details, get two design options, approve your proof, and receive print delivered NZ-wide.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <div className="container-site section-padding">
        <Breadcrumbs items={[{ label: "How It Works" }]} />
        <header className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">
            How it works
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            A clear, trustworthy process from package selection to NZ-wide delivery. Nothing prints without your approval.
          </p>
        </header>

        <div className="mt-12">
          <ProcessTimeline />
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-display font-semibold text-navy">Detailed process</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {detailedSteps.map((s) => (
              <div key={s.step} className="card-premium p-5">
                <span className="text-xs font-bold text-muted">STEP {s.step}</span>
                <h3 className="mt-1 font-display font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 card-premium p-6 md:p-8 bg-black text-white">
          <h2 className="text-2xl font-display font-semibold text-white">Proof approval workflow</h2>
          <div className="mt-6">
            <ProofWorkflow />
          </div>
          <p className="mt-6 text-white/70 text-sm leading-relaxed">
            Nothing is printed until you explicitly approve the final proof. Please check spelling, contact details, prices, dates, QR codes and colours carefully.
          </p>
          <Link href="/proof-approval-policy" className="text-white font-semibold text-sm mt-4 inline-block hover:underline">
            Read full proof approval policy
          </Link>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-display font-semibold text-navy">Trust FAQ</h2>
          <div className="mt-6">
            <FAQAccordion items={trustFaqs} />
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
