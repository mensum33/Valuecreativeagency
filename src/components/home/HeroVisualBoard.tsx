"use client";

import { motion } from "framer-motion";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const capabilityLabels = ["Design", "Print", "Finish", "Digital Media"];

const boardItems = [
  {
    id: "business-card",
    label: "Business cards",
    folder: "packages/business-cards",
    className: "top-[8%] left-[6%] w-[38%] rotate-[-4deg] z-20",
    delay: 0,
  },
  {
    id: "menu",
    label: "Menu spread",
    folder: "packages/full-menu-book",
    className: "top-[4%] right-[4%] w-[42%] rotate-[3deg] z-10",
    delay: 0.1,
  },
  {
    id: "tickets",
    label: "Event tickets",
    folder: "packages/event-tickets",
    className: "bottom-[28%] left-[4%] w-[34%] rotate-[2deg] z-30",
    delay: 0.2,
  },
  {
    id: "banner",
    label: "Pull-up banner",
    folder: "packages/pull-up-banner",
    className: "bottom-[12%] right-[8%] w-[36%] rotate-[-2deg] z-20",
    delay: 0.15,
  },
  {
    id: "social",
    label: "Digital tile",
    folder: "packages/gift-vouchers",
    className: "top-[42%] left-[32%] w-[28%] rotate-[6deg] z-40",
    delay: 0.25,
  },
  {
    id: "lightbox",
    label: "Light box",
    folder: "packages/light-box",
    className: "bottom-[38%] right-[30%] w-[30%] rotate-[-6deg] z-15",
    delay: 0.3,
  },
];

function ProofApprovedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute top-[52%] right-[2%] z-50 rounded-xl border border-trust/30 bg-white/95 px-4 py-3 shadow-premium backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-trust/15 text-trust">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-xs font-semibold text-navy">Proof Approved</span>
      </div>
    </motion.div>
  );
}

export default function HeroVisualBoard() {
  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-square max-h-[560px]">
      {/* Soft background shape */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky/50 via-white to-ivory border border-border shadow-premium overflow-hidden crop-marks" aria-hidden="true" />

      {/* Paper layer accents */}
      <div className="absolute top-6 right-6 h-24 w-20 rounded-lg bg-white/60 border border-border/80 rotate-12 shadow-sm" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 h-16 w-28 rounded-lg bg-white/40 border border-dashed border-border rotate-[-8deg]" aria-hidden="true" />

      {/* Capability labels */}
      <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2 z-50">
        {capabilityLabels.map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="rounded-full bg-navy/90 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white"
          >
            {label}
          </motion.span>
        ))}
      </div>

      {/* Floating mockup cards */}
      {boardItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: item.delay }}
          className={`absolute ${item.className}`}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5 + item.delay * 2, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl border border-border bg-white p-1.5 shadow-card-hover"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <ImageWithFallback folder={item.folder} alt={item.label} fill sizes="(max-width: 768px) 40vw, 200px" />
            </div>
            <p className="mt-1.5 px-1 text-[10px] font-medium text-muted truncate">{item.label}</p>
          </motion.div>
        </motion.div>
      ))}

      <ProofApprovedCard />

      {/* Table tent silhouette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-[6%] left-[38%] w-[22%] z-10"
        aria-hidden="true"
      >
        <div className="h-16 bg-gradient-to-b from-white to-border/30 border border-border rounded-t-lg shadow-sm" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }} />
        <p className="text-center text-[9px] text-muted mt-1">Table tent</p>
      </motion.div>
    </div>
  );
}
