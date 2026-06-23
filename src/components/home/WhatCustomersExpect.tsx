const expectations = [
  {
    title: "Clear communication",
    description: "We guide you from order to proof to final delivery.",
  },
  {
    title: "Design choice",
    description: "Every design package includes two options to choose from.",
  },
  {
    title: "Production confidence",
    description: "You approve the final proof before anything is printed.",
  },
  {
    title: "Ready-to-use results",
    description: "Your order is printed, finished and prepared for real business use.",
  },
];

export default function WhatCustomersExpect() {
  return (
    <section className="section-padding bg-white border-y border-border">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
            What customers can expect
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            A clear, professional process — from your first package choice to delivered print and digital media.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map((item) => (
            <article key={item.title} className="card-premium p-6 md:p-7">
              <div className="h-px w-8 bg-accent mb-5" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
