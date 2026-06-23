export interface Industry {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoints: string[];
  packageSlugs: string[];
  workSlugs: string[];
  faqIds: string[];
  imageFolder: string;
  seoTitle: string;
  seoDescription: string;
}

export const industries: Industry[] = [
  {
    id: "restaurants-cafes",
    slug: "restaurants-cafes",
    name: "Restaurants & Cafés",
    shortDescription:
      "Menus, table displays, light boxes and vouchers designed for hospitality.",
    heroTitle: "Restaurant, café and takeaway design + print packages",
    heroSubtitle:
      "Professional menus, displays and promotional print for hospitality businesses across New Zealand.",
    painPoints: [
      "Menus that are hard to read or look outdated",
      "Inconsistent branding across print and digital",
      "Need for display-ready materials without agency pricing",
      "Unclear process for design revisions and proofing",
    ],
    packageSlugs: [
      "full-menu-book-package",
      "a3-door-menu-display",
      "laminated-table-tent-package",
      "a1-premium-slim-light-box",
      "gift-voucher-card-package",
    ],
    workSlugs: [
      "restaurant-menu-refresh",
      "laminated-table-tent-display",
      "a1-light-box-display",
    ],
    faqIds: ["design-options", "proof-before-print", "delivery-nz"],
    imageFolder: "clients",
    seoTitle: "Design & Print Packages for Restaurants & Cafés",
    seoDescription:
      "Fixed-price menu, display and voucher packages for restaurants and cafés in New Zealand.",
  },
  {
    id: "real-estate",
    slug: "real-estate-agents",
    name: "Real Estate Agents",
    shortDescription:
      "Flyers, banners and business cards for property marketing.",
    heroTitle: "Real estate design and print packages",
    heroSubtitle:
      "Professional flyers, banners and cards for listings, open homes and agency branding.",
    painPoints: [
      "Need fast turnaround for new listings",
      "Want consistent branding across marketing materials",
      "Require clear pricing without hidden design fees",
      "Need portable displays for open homes",
    ],
    packageSlugs: [
      "real-estate-flyer-package",
      "pull-up-banner-package",
      "premium-laminated-business-cards",
    ],
    workSlugs: ["real-estate-flyer-campaign", "pull-up-banner-promotion"],
    faqIds: ["design-options", "artwork-upload", "fixed-pricing"],
    imageFolder: "clients",
    seoTitle: "Design & Print Packages for Real Estate Agents",
    seoDescription:
      "Real estate flyers, banners and business card packages with fixed pricing.",
  },
  {
    id: "events",
    slug: "events-community",
    name: "Events & Community Groups",
    shortDescription:
      "Tickets, banners and promotional print for events and fundraisers.",
    heroTitle: "Event design and print packages",
    heroSubtitle:
      "Tickets, banners and promotional materials for community events, fundraisers and functions.",
    painPoints: [
      "Tight deadlines before event dates",
      "Need professional materials on a community budget",
      "Want numbered tickets and clear entry management",
      "Require portable event displays",
    ],
    packageSlugs: [
      "event-ticket-package",
      "pull-up-banner-package",
      "laminated-table-tent-package",
    ],
    workSlugs: [
      "event-ticket-package-project",
      "pull-up-banner-promotion",
    ],
    faqIds: ["design-options", "urgent-turnaround", "delivery-nz"],
    imageFolder: "clients",
    seoTitle: "Design & Print Packages for Events",
    seoDescription:
      "Event tickets, banners and promotional print packages for New Zealand events.",
  },
  {
    id: "beauty",
    slug: "beauty-salons",
    name: "Beauty & Salons",
    shortDescription:
      "Business cards, vouchers and promotional print for salons and spas.",
    heroTitle: "Beauty and salon design packages",
    heroSubtitle:
      "Elegant business cards, gift vouchers and promotional print for beauty businesses.",
    painPoints: [
      "Brand needs to feel premium and trustworthy",
      "Gift vouchers must match salon aesthetic",
      "Want cohesive materials without hiring an agency",
      "Need clear proofing before print",
    ],
    packageSlugs: [
      "premium-laminated-business-cards",
      "gift-voucher-card-package",
      "new-business-starter-pack",
    ],
    workSlugs: ["gift-voucher-project", "premium-business-card-project"],
    faqIds: ["design-options", "proof-before-print", "low-quality-images"],
    imageFolder: "clients",
    seoTitle: "Design & Print Packages for Beauty & Salons",
    seoDescription:
      "Business cards and gift voucher packages for beauty salons and spas.",
  },
  {
    id: "tradies",
    slug: "tradies-services",
    name: "Tradies & Service Businesses",
    shortDescription:
      "Business cards, flyers and starter packs for tradies and contractors.",
    heroTitle: "Tradie and service business packages",
    heroSubtitle:
      "Professional business cards, flyers and starter packs for tradies and service providers.",
    painPoints: [
      "Need to look established from day one",
      "Want durable, professional print materials",
      "Prefer fixed pricing over hourly design quotes",
      "Need materials delivered across New Zealand",
    ],
    packageSlugs: [
      "premium-laminated-business-cards",
      "new-business-starter-pack",
      "pull-up-banner-package",
    ],
    workSlugs: [
      "premium-business-card-project",
      "new-business-starter-pack-project",
    ],
    faqIds: ["fixed-pricing", "delivery-nz", "artwork-upload"],
    imageFolder: "clients",
    seoTitle: "Design & Print Packages for Tradies",
    seoDescription:
      "Business cards and starter packs for tradies and service businesses.",
  },
  {
    id: "retail",
    slug: "retail-shops",
    name: "Retail Shops",
    shortDescription:
      "Displays, vouchers and promotional print for retail businesses.",
    heroTitle: "Retail design and print packages",
    heroSubtitle:
      "Light boxes, vouchers, banners and promotional print for retail shops.",
    painPoints: [
      "Window and in-store displays need to attract attention",
      "Promotional materials must match brand identity",
      "Want print and digital-ready artwork",
      "Need reliable delivery for multiple locations",
    ],
    packageSlugs: [
      "a1-premium-slim-light-box",
      "gift-voucher-card-package",
      "pull-up-banner-package",
    ],
    workSlugs: ["a1-light-box-display", "gift-voucher-project"],
    faqIds: ["design-options", "delivery-nz", "fixed-pricing"],
    imageFolder: "clients",
    seoTitle: "Design & Print Packages for Retail Shops",
    seoDescription:
      "Retail display and promotional print packages with fixed pricing.",
  },
  {
    id: "new-business",
    slug: "new-businesses",
    name: "New Businesses",
    shortDescription:
      "Starter packs with matching cards, flyers and vouchers.",
    heroTitle: "New business starter packages",
    heroSubtitle:
      "Launch with matching business cards, flyers and vouchers — agency quality, clear pricing.",
    painPoints: [
      "Starting out without established brand assets",
      "Need multiple items with consistent design",
      "Budget-conscious but want professional results",
      "Want a simple online ordering process",
    ],
    packageSlugs: [
      "new-business-starter-pack",
      "premium-laminated-business-cards",
      "gift-voucher-card-package",
    ],
    workSlugs: [
      "new-business-starter-pack-project",
      "premium-business-card-project",
    ],
    faqIds: ["design-options", "fixed-pricing", "what-not-included"],
    imageFolder: "clients",
    seoTitle: "New Business Starter Packages",
    seoDescription:
      "Starter packs with business cards, flyers and vouchers for new businesses.",
  },
  {
    id: "schools",
    slug: "schools-churches",
    name: "Schools & Churches",
    shortDescription:
      "Event tickets, flyers and community print for schools and churches.",
    heroTitle: "School and church community packages",
    heroSubtitle:
      "Event tickets, flyers and promotional print for schools, churches and community groups.",
    painPoints: [
      "Community budgets require clear, fixed pricing",
      "Event materials need quick turnaround",
      "Volunteers need a simple upload and approval process",
      "Materials must be professional for public events",
    ],
    packageSlugs: [
      "event-ticket-package",
      "real-estate-flyer-package",
      "pull-up-banner-package",
    ],
    workSlugs: ["event-ticket-package-project"],
    faqIds: ["design-options", "proof-before-print", "delivery-nz"],
    imageFolder: "clients",
    seoTitle: "Design & Print for Schools & Churches",
    seoDescription:
      "Event tickets and promotional print packages for schools and churches.",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
