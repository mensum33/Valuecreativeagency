import type { Policy } from "@/data/policies";
import Breadcrumbs from "./Breadcrumbs";

interface PolicyPageLayoutProps {
  policy: Policy;
}

export default function PolicyPageLayout({ policy }: PolicyPageLayoutProps) {
  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: policy.title }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-display font-semibold text-navy">{policy.title}</h1>
        <p className="mt-4 text-muted leading-relaxed">{policy.description}</p>
      </header>
      <div className="mt-12 max-w-3xl space-y-10">
        {policy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-display font-semibold text-navy">{section.heading}</h2>
            <p className="mt-3 text-muted leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
