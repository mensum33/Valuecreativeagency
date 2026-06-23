const steps = [
  { number: "01", title: "Choose your package", description: "Pick a fixed-price package online." },
  { number: "02", title: "Upload your details", description: "Send your logo, wording, photos and notes." },
  { number: "03", title: "Receive two design options", description: "We create two design directions so you can choose your favourite." },
  { number: "04", title: "Approve your proof", description: "You approve the final artwork before production starts.", highlight: true },
  { number: "05", title: "We print and deliver", description: "We print, finish, assemble where needed, and deliver NZ-wide." },
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
      <div className="grid gap-6 md:gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`relative flex gap-5 md:gap-8 ${step.highlight ? "lg:pl-4" : ""}`}
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold z-10 ${
                step.highlight
                  ? "bg-black text-white ring-4 ring-black/10"
                  : "bg-charcoal text-white"
              }`}
            >
              {step.number}
            </div>
            <div
              className={`flex-1 p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                step.highlight
                  ? "bg-lightgrey border-black/20 shadow-card-hover"
                  : "card-premium"
              }`}
            >
              {step.highlight && (
                <p className="text-xs font-semibold uppercase tracking-wider text-black mb-2">
                  Main trust promise
                </p>
              )}
              <h3 className={`font-display font-semibold text-black ${step.highlight ? "text-xl md:text-2xl" : "text-lg"}`}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
