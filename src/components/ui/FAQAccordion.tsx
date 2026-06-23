"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQ[];
  limit?: number;
}

export default function FAQAccordion({ items, limit }: FAQAccordionProps) {
  const displayItems = limit ? items.slice(0, limit) : items;
  const [openId, setOpenId] = useState<string | null>(displayItems[0]?.id ?? null);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden">
      {displayItems.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-ivory/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy pr-4">{faq.question}</span>
              <span
                className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-border transition-transform ${isOpen ? "rotate-180 bg-sky/40" : ""}`}
                aria-hidden="true"
              >
                <svg className="h-4 w-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 md:px-6 md:pb-6">
                <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
