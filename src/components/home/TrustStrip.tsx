const items = [
  "Fixed package pricing",
  "Two design options included",
  "Proof before print",
  "NZ-wide delivery",
  "Hands-on production experience",
  "Clear order process",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-lightgrey py-6 md:py-8" aria-label="Trust highlights">
      <div className="container-site">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-black">
              <span className="h-1 w-3 bg-black shrink-0" aria-hidden="true" />
              <span className="font-medium leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
