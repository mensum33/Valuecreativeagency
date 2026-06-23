const items = [
  "Fixed package pricing",
  "Two design options included",
  "Proof before print",
  "NZ-wide delivery",
  "16+ years hands-on experience",
  "Secure checkout",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-lightgrey py-6 md:py-8" aria-label="Trust highlights">
      <div className="container-site">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-10">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-black">
              <span className="h-1 w-4 bg-black shrink-0" aria-hidden="true" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
