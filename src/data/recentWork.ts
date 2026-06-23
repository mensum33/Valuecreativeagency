export type WorkIndustry =
  | "Hospitality"
  | "Events"
  | "Real Estate"
  | "Business Branding"
  | "Display"
  | "Digital Media";

export interface RecentWork {
  id: string;
  slug: string;
  title: string;
  clientName?: string;
  clientWebsite?: string;
  industry: WorkIndustry;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  outcome: string;
  services: string[];
  imageFolder: string;
  featured: boolean;
  externalLinkLabel?: string;
  externalLinkUrl?: string;
  seoTitle: string;
  seoDescription: string;
}

export const recentWork: RecentWork[] = [
  {
    id: "business-card-project",
    slug: "premium-business-card-project",
    title: "Premium Business Card Project",
    industry: "Business Branding",
    summary:
      "Custom business card design and premium laminated print for a local service business.",
    challenge:
      "The client needed professional cards that reflected quality workmanship without a large design budget.",
    solution:
      "We created two design directions with clean typography, brand colours and a premium laminated finish.",
    deliverables: [
      "Business card design — two options",
      "250 laminated business cards",
      "Print-ready digital files",
    ],
    outcome:
      "Ready-to-use printed business cards with a consistent, professional brand presentation.",
    services: ["Design", "Print", "Lamination"],
    imageFolder: "recent-work/business-card-project",
    featured: true,
    seoTitle: "Premium Business Card Project",
    seoDescription:
      "Business card design and premium laminated print for a New Zealand small business.",
  },
  {
    id: "restaurant-menu",
    slug: "restaurant-menu-refresh",
    title: "Restaurant Menu Refresh",
    industry: "Hospitality",
    summary:
      "Full menu book redesign with printed copies and digital PDF for a Christchurch café.",
    challenge:
      "An established café needed updated menus that were easier to read and matched their refreshed interior.",
    solution:
      "We redesigned the menu layout, organised sections clearly, and prepared files for print and digital use.",
    deliverables: [
      "Menu book design",
      "25 printed menu books",
      "Digital PDF menu",
    ],
    outcome:
      "Professional menu files prepared for print and digital use, with a cohesive hospitality look.",
    services: ["Design", "Print", "Digital Media"],
    imageFolder: "recent-work/restaurant-menu-refresh",
    featured: true,
    seoTitle: "Restaurant Menu Refresh",
    seoDescription:
      "Restaurant menu redesign with printed menu books and digital PDF.",
  },
  {
    id: "event-tickets",
    slug: "event-ticket-package-project",
    title: "Event Ticket Package",
    industry: "Events",
    summary:
      "Custom event tickets with numbering for a community fundraiser.",
    challenge:
      "The organiser needed professional tickets that were easy to scan at entry and reflected the event branding.",
    solution:
      "We designed branded tickets with clear event details, numbering and a layout suited to quick entry management.",
    deliverables: [
      "Ticket design — two options",
      "200 numbered tickets",
      "Print-ready artwork",
    ],
    outcome:
      "Ready-to-use printed tickets with consistent event branding and organised numbering.",
    services: ["Design", "Print"],
    imageFolder: "recent-work/event-ticket-package",
    featured: true,
    seoTitle: "Event Ticket Package Project",
    seoDescription:
      "Custom event ticket design and print for a community fundraiser.",
  },
  {
    id: "pull-up-banner",
    slug: "pull-up-banner-promotion",
    title: "Pull-Up Banner Promotion",
    industry: "Display",
    summary:
      "Pull-up banner design and print for a market and event promotion.",
    challenge:
      "The client needed a portable, professional display for weekend markets and community events.",
    solution:
      "We created a bold banner design optimised for distance readability, with full kit including stand and bag.",
    deliverables: [
      "Pull-up banner design",
      "Full-colour banner print",
      "Retractable stand and carry bag",
    ],
    outcome:
      "A portable display ready for events, markets and promotional use.",
    services: ["Design", "Print", "Large Format"],
    imageFolder: "recent-work/pull-up-banner-promotion",
    featured: true,
    seoTitle: "Pull-Up Banner Promotion",
    seoDescription:
      "Pull-up banner design and print for market and event promotion.",
  },
  {
    id: "real-estate-flyers",
    slug: "real-estate-flyer-campaign",
    title: "Real Estate Flyer Campaign",
    industry: "Real Estate",
    summary:
      "A5 flyer design and print for property marketing and open home promotion.",
    challenge:
      "A real estate agent needed consistent flyer layouts for multiple listings with clear property details.",
    solution:
      "We developed a flexible flyer template with strong photography placement and readable property information.",
    deliverables: [
      "A5 flyer design",
      "500 printed flyers",
      "Editable template structure",
    ],
    outcome:
      "Consistent design across print marketing with professional property presentation.",
    services: ["Design", "Print"],
    imageFolder: "recent-work/real-estate-flyer-campaign",
    featured: true,
    seoTitle: "Real Estate Flyer Campaign",
    seoDescription:
      "Real estate flyer design and print for property marketing.",
  },
  {
    id: "table-tents",
    slug: "laminated-table-tent-display",
    title: "Laminated Table Tent Display",
    industry: "Hospitality",
    summary:
      "Table tent design, print and assembly for restaurant specials and promotions.",
    challenge:
      "The restaurant wanted table displays that were durable, on-brand and easy to update for seasonal offers.",
    solution:
      "We designed laminated table tents with clear typography and brand accents, printed and assembled ready for tables.",
    deliverables: [
      "Table tent design",
      "20 laminated table tents",
      "Folded and assembled",
    ],
    outcome:
      "Display-ready table tents for in-venue promotions.",
    services: ["Design", "Print", "Finishing"],
    imageFolder: "recent-work/table-tent-display",
    featured: true,
    seoTitle: "Laminated Table Tent Display",
    seoDescription:
      "Table tent design, lamination and assembly for restaurant promotions.",
  },
  {
    id: "light-box",
    slug: "a1-light-box-display",
    title: "A1 Light Box Display",
    industry: "Display",
    summary:
      "A1 backlit light box design and installation-ready display for a retail front window.",
    challenge:
      "The client wanted an eye-catching illuminated display that worked day and night in their shop front.",
    solution:
      "We designed a backlit graphic with high contrast visuals and supplied a slim LED light box frame.",
    deliverables: [
      "A1 light box design",
      "Backlit print",
      "Premium slim LED light box",
    ],
    outcome:
      "Wall-mount-ready illuminated display for retail visibility.",
    services: ["Design", "Print", "Large Format"],
    imageFolder: "recent-work/light-box-display",
    featured: false,
    seoTitle: "A1 Light Box Display",
    seoDescription:
      "A1 light box design and backlit display for retail.",
  },
  {
    id: "gift-vouchers",
    slug: "gift-voucher-project",
    title: "Gift Voucher Project",
    industry: "Business Branding",
    summary:
      "Branded gift voucher cards for a beauty salon with matching brand styling.",
    challenge:
      "The salon wanted voucher cards that felt premium and matched their existing brand materials.",
    solution:
      "We designed voucher cards with elegant typography and brand colours, ready for print and in-salon use.",
    deliverables: [
      "Gift voucher design",
      "100 printed voucher cards",
    ],
    outcome:
      "Ready-to-use branded voucher cards for client gifting and promotions.",
    services: ["Design", "Print"],
    imageFolder: "recent-work/gift-voucher-project",
    featured: false,
    seoTitle: "Gift Voucher Project",
    seoDescription:
      "Gift voucher card design and print for a beauty salon.",
  },
  {
    id: "new-business-starter",
    slug: "new-business-starter-pack-project",
    title: "New Business Starter Pack",
    industry: "Business Branding",
    summary:
      "Matching business cards, flyers and voucher cards for a new tradie business launch.",
    challenge:
      "A new business owner needed a cohesive brand look across multiple print items on a clear budget.",
    solution:
      "We developed a unified design system applied across cards, flyers and vouchers with two design directions.",
    deliverables: [
      "Business cards",
      "Marketing flyers",
      "Voucher cards",
      "Matching brand design",
    ],
    outcome:
      "Consistent design across print and ready-to-use launch materials.",
    services: ["Design", "Print", "Brand Packages"],
    imageFolder: "recent-work/new-business-starter",
    featured: false,
    seoTitle: "New Business Starter Pack Project",
    seoDescription:
      "Starter pack with business cards, flyers and vouchers for a new business.",
  },
  {
    id: "training-manual",
    slug: "training-manual-booklet-project",
    title: "Training Manual / Booklet Project",
    industry: "Digital Media",
    summary:
      "Training booklet design, print and digital PDF for a workplace programme.",
    challenge:
      "The client needed a professional training manual that worked in print and as a digital reference.",
    solution:
      "We structured content into a clear booklet layout with section dividers, diagrams and readable typography.",
    deliverables: [
      "Booklet design and layout",
      "Printed booklets",
      "Digital PDF version",
    ],
    outcome:
      "Professional training material in print and digital formats.",
    services: ["Design", "Print", "Binding", "Digital Media"],
    imageFolder: "recent-work/training-manual-project",
    featured: false,
    seoTitle: "Training Manual Booklet Project",
    seoDescription:
      "Training booklet design, print and digital PDF for workplace use.",
  },
];

export const workIndustries: WorkIndustry[] = [
  "Hospitality",
  "Events",
  "Real Estate",
  "Business Branding",
  "Display",
  "Digital Media",
];

export function getWorkBySlug(slug: string): RecentWork | undefined {
  return recentWork.find((w) => w.slug === slug);
}

export function getFeaturedWork(): RecentWork[] {
  return recentWork.filter((w) => w.featured);
}

export function getWorkByIndustry(industry: WorkIndustry): RecentWork[] {
  return recentWork.filter((w) => w.industry === industry);
}
