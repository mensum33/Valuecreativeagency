import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { faqs, faqGroups, getFaqsByGroup } from "@/data/faqs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about ordering, design, printing, delivery and artwork for Value Design & Print packages.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <div className="container-site section-padding">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
        <header className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-black">
            Questions before you order?
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Clear answers about our packages, design process, printing and delivery.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {faqGroups.map((group) => {
            const groupFaqs = getFaqsByGroup(group);
            if (groupFaqs.length === 0) return null;
            return (
              <section key={group}>
                <h2 className="text-xl font-display font-semibold text-navy mb-4">{group}</h2>
                <FAQAccordion items={groupFaqs} />
              </section>
            );
          })}
        </div>
      </div>
      <CTASection />
    </>
  );
}
