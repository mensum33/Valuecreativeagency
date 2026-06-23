export type PackageCategory =
  | "Business Cards"
  | "Hospitality"
  | "Banners & Displays"
  | "Flyers & Marketing"
  | "Events"
  | "Real Estate"
  | "Digital Media"
  | "Starter Packs";

export interface PackageAddOn {
  name: string;
  price: number;
  note: string;
}

export interface Package {
  id: string;
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  includedItems: string[];
  notIncludedItems: string[];
  addOns?: PackageAddOn[];
  trustTags: string[];
  category: PackageCategory;
  industryTags: string[];
  imageFolder: string;
  featured: boolean;
  buyButtonLabel: string;
  seoTitle: string;
  seoDescription: string;
}

const defaultTrustTags = [
  "2 design options",
  "Proof before print",
  "NZ-wide delivery",
];

const defaultNotIncluded = [
  "Logo creation unless purchased separately",
  "Major redesigns beyond one minor revision",
  "Extra revisions beyond package allowance",
  "Urgent turnaround unless add-on selected",
  "Rural delivery surcharge where applicable",
  "Special materials unless listed in package",
];

export const packages: Package[] = [
  {
    id: "business-cards",
    slug: "premium-laminated-business-cards",
    name: "Premium Laminated Business Cards",
    price: 199,
    shortDescription:
      "250 premium laminated business cards with custom design, print and matt or gloss finish.",
    longDescription:
      "Make a confident first impression with 250 premium laminated business cards. We design two options for you to choose from, print on quality stock, and finish with your choice of matt or gloss lamination. Perfect for tradies, salons, consultants and new businesses across New Zealand.",
    includedItems: [
      "Custom business card design — two design options",
      "One minor revision on chosen direction",
      "250 full-colour business cards",
      "Matt or gloss lamination",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Business Cards",
    industryTags: [
      "tradie",
      "beauty",
      "retail",
      "new-business",
      "real-estate",
    ],
    imageFolder: "packages/business-cards",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "Premium Laminated Business Cards Package — $199",
    seoDescription:
      "250 premium laminated business cards with custom design, two design options, proof approval and NZ-wide delivery.",
  },
  {
    id: "pull-up-banner",
    slug: "pull-up-banner-package",
    name: "Pull-Up Banner Package",
    price: 299,
    shortDescription:
      "Custom design, full-colour banner print, stand and carry bag.",
    longDescription:
      "A professional pull-up banner package for events, markets, receptions and retail spaces. Includes custom design with two options, premium full-colour print, retractable stand and carry bag. Ideal for promotions, open homes and brand visibility.",
    includedItems: [
      "Custom pull-up banner design — two design options",
      "One minor revision on chosen direction",
      "Full-colour banner print",
      "Retractable stand",
      "Carry bag",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Banners & Displays",
    industryTags: ["events", "real-estate", "retail", "tradie"],
    imageFolder: "packages/pull-up-banner",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "Pull-Up Banner Package — $299",
    seoDescription:
      "Custom pull-up banner with design, print, stand and carry bag. Two design options and proof before print.",
  },
  {
    id: "light-box",
    slug: "a1-premium-slim-light-box",
    name: "A1 Premium Slim Light Box Package",
    price: 499,
    shortDescription:
      "Custom design, A1 backlit print and premium slim LED light box, wall-mount-ready like a photo frame.",
    longDescription:
      "Illuminate your brand with an A1 premium slim LED light box. Custom design, backlit print and a sleek wall-mount-ready frame — perfect for menus, promotions and retail displays in restaurants, cafés and shops.",
    includedItems: [
      "Custom A1 light box design — two design options",
      "One minor revision on chosen direction",
      "A1 backlit print",
      "Premium slim LED light box frame",
      "Wall-mount-ready setup",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Banners & Displays",
    industryTags: ["hospitality", "retail"],
    imageFolder: "packages/light-box",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "A1 Premium Slim Light Box Package — $499",
    seoDescription:
      "A1 backlit light box with custom design, premium slim LED frame and NZ-wide delivery.",
  },
  {
    id: "door-menu",
    slug: "a3-door-menu-display",
    name: "A3 Door Menu Display Package",
    price: 399,
    shortDescription:
      "A3 menu design, printed insert and solid aluminium freestanding display stand.",
    longDescription:
      "Present your menu professionally at the entrance with an A3 door menu display. Includes custom menu design, printed insert and a solid aluminium freestanding stand — built for hospitality businesses that want clarity and polish.",
    includedItems: [
      "Custom A3 menu design — two design options",
      "One minor revision on chosen direction",
      "Printed A3 menu insert",
      "Solid aluminium freestanding display stand",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Hospitality",
    industryTags: ["hospitality"],
    imageFolder: "packages/door-menu-display",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "A3 Door Menu Display Package — $399",
    seoDescription:
      "A3 door menu display with custom design, printed insert and aluminium stand.",
  },
  {
    id: "table-tents",
    slug: "laminated-table-tent-package",
    name: "Laminated Table Tent Package",
    price: 199,
    shortDescription:
      "20 custom-designed laminated table tents, printed, laminated, folded and assembled.",
    longDescription:
      "Table-ready promotional displays for restaurants, cafés and events. Twenty custom-designed table tents, printed, laminated, folded and assembled — ideal for specials, promotions and event information.",
    includedItems: [
      "Custom table tent design — two design options",
      "One minor revision on chosen direction",
      "20 laminated table tents",
      "Printed, folded and assembled",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Hospitality",
    industryTags: ["hospitality", "events"],
    imageFolder: "packages/table-tents",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "Laminated Table Tent Package — $199",
    seoDescription:
      "20 custom laminated table tents with design, print, assembly and NZ-wide delivery.",
  },
  {
    id: "real-estate-flyers",
    slug: "real-estate-flyer-package",
    name: "Real Estate Flyer Package",
    price: 249,
    shortDescription:
      "500 A5 real estate flyers with custom design and full-colour print.",
    longDescription:
      "Professional A5 flyers for open homes, listings and agency marketing. Custom design with two options, full-colour print on 500 flyers, and proof approval before production — built for real estate agents across New Zealand.",
    includedItems: [
      "Custom A5 flyer design — two design options",
      "One minor revision on chosen direction",
      "500 full-colour A5 flyers",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Real Estate",
    industryTags: ["real-estate"],
    imageFolder: "packages/real-estate-flyers",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "Real Estate Flyer Package — $249",
    seoDescription:
      "500 A5 real estate flyers with custom design, two options and proof before print.",
  },
  {
    id: "full-menu-book",
    slug: "full-menu-book-package",
    name: "Full Menu Book Package",
    price: 699,
    shortDescription:
      "Complete restaurant menu design with 25 printed menu books and digital PDF copy.",
    longDescription:
      "A complete menu solution for restaurants and cafés. Professional menu book design, 25 printed copies, and a digital PDF for online use. Two design directions, proof approval, and a polished result ready for your tables and website.",
    includedItems: [
      "Complete menu book design — two design options",
      "One minor revision on chosen direction",
      "25 printed menu books",
      "Digital PDF copy",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Hospitality",
    industryTags: ["hospitality"],
    imageFolder: "packages/full-menu-book",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "Full Menu Book Package — $699",
    seoDescription:
      "Restaurant menu book design with 25 printed copies and digital PDF. Two design options included.",
  },
  {
    id: "event-tickets",
    slug: "event-ticket-package",
    name: "Event Ticket Package",
    price: 149,
    shortDescription:
      "200 custom-designed event tickets with numbering option.",
    longDescription:
      "Custom event tickets for community events, fundraisers, concerts and functions. Includes design with two options, print on 200 tickets, and optional numbering for organised entry management.",
    includedItems: [
      "Custom ticket design — two design options",
      "One minor revision on chosen direction",
      "200 printed tickets",
      "Numbering option available",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Events",
    industryTags: ["events", "schools"],
    imageFolder: "packages/event-tickets",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "Event Ticket Package — $149",
    seoDescription:
      "200 custom event tickets with design, print and optional numbering.",
  },
  {
    id: "gift-vouchers",
    slug: "gift-voucher-card-package",
    name: "Gift Voucher Card Package",
    price: 149,
    shortDescription:
      "100 custom gift voucher cards with design and print.",
    longDescription:
      "Branded gift voucher cards for salons, restaurants, retail shops and service businesses. Custom design, 100 printed cards, and a professional finish that encourages repeat visits and referrals.",
    includedItems: [
      "Custom gift voucher design — two design options",
      "One minor revision on chosen direction",
      "100 printed gift voucher cards",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Flyers & Marketing",
    industryTags: ["beauty", "hospitality", "retail"],
    imageFolder: "packages/gift-vouchers",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "Gift Voucher Card Package — $149",
    seoDescription:
      "100 custom gift voucher cards with design, print and proof approval.",
  },
  {
    id: "new-business-starter",
    slug: "new-business-starter-pack",
    name: "New Business Starter Pack",
    price: 349,
    shortDescription:
      "Business cards, flyers and loyalty or voucher cards with a matching design style.",
    longDescription:
      "Launch your business with a cohesive brand look. This starter pack includes business cards, flyers and loyalty or voucher cards — all designed in a matching style with two design options and proof approval before print.",
    includedItems: [
      "Matching brand design — two design options",
      "One minor revision on chosen direction",
      "Business cards",
      "Marketing flyers",
      "Loyalty or voucher cards",
      "Final proof approval before print",
      "NZ-wide delivery",
    ],
    notIncludedItems: defaultNotIncluded,
    trustTags: defaultTrustTags,
    category: "Starter Packs",
    industryTags: ["new-business", "tradie", "beauty", "retail"],
    imageFolder: "packages/new-business-starter",
    featured: true,
    buyButtonLabel: "Buy Package",
    seoTitle: "New Business Starter Pack — $349",
    seoDescription:
      "Business cards, flyers and voucher cards with matching design for new businesses.",
  },
];

export const packageCategories: PackageCategory[] = [
  "Business Cards",
  "Hospitality",
  "Banners & Displays",
  "Flyers & Marketing",
  "Events",
  "Real Estate",
  "Digital Media",
  "Starter Packs",
];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getFeaturedPackages(): Package[] {
  return packages.filter((p) => p.featured);
}

export function getPackagesByCategory(category: PackageCategory): Package[] {
  return packages.filter((p) => p.category === category);
}

export function getPackagesByIndustryTag(tag: string): Package[] {
  return packages.filter((p) => p.industryTags.includes(tag));
}

export const packageAddOns = [
  { name: "Extra revision", price: 35, note: "Per additional revision round" },
  {
    name: "Digital social media design",
    price: 49,
    note: "From $49 depending on scope",
  },
  {
    name: "AI image enhancement",
    price: 49,
    note: "From $49 depending on image complexity",
  },
  {
    name: "Urgent turnaround",
    price: 75,
    note: "From $75 depending on package",
  },
  {
    name: "Extra quantities",
    price: 0,
    note: "Varies by product — contact for quote",
  },
];

export const customerRequirements = [
  "Logo (if available)",
  "Business name",
  "Contact details",
  "Wording and text content",
  "Photos and images",
  "Brand colours (if any)",
  "Delivery address",
  "Notes and inspiration",
];
