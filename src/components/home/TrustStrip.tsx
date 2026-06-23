const items = [
  "Fixed package pricing",
  "Two design options included",
  "Proof before print",
  "NZ-wide delivery",
  "Recent client work",
  "Secure checkout",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-sky/25 via-ivory to-sky/20 py-6 md:py-8" aria-label="Trust highlights">
      <div className="container-site">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-navy/90">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
