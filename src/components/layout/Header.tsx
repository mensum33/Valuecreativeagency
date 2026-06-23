"use client";

import { useState } from "react";
import Link from "next/link";

import { mainNavLinks } from "@/data/navigation";

const navLinks = mainNavLinks;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ivory/95 backdrop-blur-md">
      <div className="container-site">
        <div className="flex h-16 md:h-[72px] items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2 shrink-0" aria-label="Value Design & Print — Home">
            <span className="font-display text-lg md:text-xl font-semibold text-navy tracking-tight">
              Value Design<span className="text-accent">&amp;</span>Print
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:text-navy hover:bg-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/upload-artwork" className="text-sm font-semibold text-navy hover:text-accent transition-colors whitespace-nowrap">
              Upload Artwork
            </Link>
            <Link href="/packages" className="btn-primary py-2.5 px-5 text-sm whitespace-nowrap">
              Shop Packages
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden border-t border-border bg-ivory overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-site py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base font-medium text-navy hover:bg-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <Link href="/upload-artwork" className="btn-secondary" onClick={() => setMobileOpen(false)}>
              Upload Artwork
            </Link>
            <Link href="/packages" className="btn-primary" onClick={() => setMobileOpen(false)}>
              Shop Packages
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
