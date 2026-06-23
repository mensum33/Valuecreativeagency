const cards = [
  {
    title: "Two design options",
    description: "You choose the creative direction.",
  },
  {
    title: "One minor revision",
    description: "We refine the selected option.",
  },
  {
    title: "Proof before print",
    description: "Nothing goes to production without your approval.",
  },
];

export default function PackageReassurance() {
  return (
    <section className="py-12 md:py-16 bg-lightgrey border-y border-border">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-black text-balance">
            Designed to feel safe before you print.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Buying design online can feel risky. That&apos;s why every design package includes two design options, one minor revision and final proof approval before anything is printed.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <div key={card.title} className="rounded-2xl border border-border bg-white p-6 text-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm font-bold text-black">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display font-semibold text-black">{card.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
