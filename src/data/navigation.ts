export interface NavLink {
  href: string;
  label: string;
}

export const mainNavLinks: NavLink[] = [
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/recent-work", label: "Recent Work" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/design-tips", label: "Design Tips" },
  { href: "/contact", label: "Contact" },
];

export const headerUtilityLinks: NavLink[] = [
  { href: "/upload-artwork", label: "Upload Artwork" },
  { href: "/packages", label: "Shop Packages" },
  { href: "/checkout", label: "Cart" },
];

export const footerColumns = {
  shop: [
    { href: "/packages", label: "Packages" },
    { href: "/packages/premium-laminated-business-cards", label: "Business Cards" },
    { href: "/packages/full-menu-book-package", label: "Menus" },
    { href: "/packages/pull-up-banner-package", label: "Banners" },
    { href: "/packages/real-estate-flyer-package", label: "Real Estate Flyers" },
    { href: "/packages/event-ticket-package", label: "Tickets" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/recent-work", label: "Recent Work" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/design-tips", label: "Design Tips" },
    { href: "/artwork-guidelines", label: "Artwork Guidelines" },
    { href: "/faq", label: "FAQ" },
    { href: "/upload-artwork", label: "Upload Artwork" },
  ],
  policies: [
    { href: "/shipping-delivery", label: "Shipping & Delivery" },
    { href: "/proof-approval-policy", label: "Proof Approval Policy" },
    { href: "/refund-reprint-policy", label: "Refund/Reprint Policy" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
  ],
} as const;
