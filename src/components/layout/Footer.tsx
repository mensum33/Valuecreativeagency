import Link from "next/link";
import { CONTACT, TRUST_LINE } from "@/lib/constants";
import { footerColumns } from "@/data/navigation";

const footerLinks = footerColumns;

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site section-padding pb-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="font-display text-2xl font-semibold text-white">
              Value Design<span className="text-accent">&amp;</span>Print
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
              Agency-quality design, print and digital media packages for small businesses across New Zealand.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
                  {CONTACT.phone}
                </a>
              </p>
              <p>{CONTACT.location}</p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Shop</h3>
              <ul className="space-y-2">
                {footerLinks.shop.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Policies</h3>
              <ul className="space-y-2">
                {footerLinks.policies.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-white/50">{TRUST_LINE}</p>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Value Design &amp; Print. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
