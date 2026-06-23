import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  heading = "Ready to make your business look professional?",
  text = "Choose a fixed-price package, get two design options, approve your proof and receive ready-to-use print and digital media delivered NZ-wide.",
  primaryLabel = "Shop Packages",
  primaryHref = "/packages",
  secondaryLabel = "View Recent Work",
  secondaryHref = "/recent-work",
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`section-padding ${dark ? "bg-navy" : "bg-sky/30"}`}>
      <div className="container-site text-center max-w-3xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-display font-semibold text-balance ${dark ? "text-white" : "text-navy"}`}>
          {heading}
        </h2>
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
          {text}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className="btn-primary min-w-[180px]">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className={dark ? "btn-secondary" : "btn-secondary"}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
