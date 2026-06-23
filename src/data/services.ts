export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  items: string[];
  packageSlugs: string[];
}

export const services: Service[] = [
  {
    id: "design",
    slug: "design",
    name: "Design",
    description:
      "Agency-quality graphic design for print and digital — tailored for small businesses with clear package pricing.",
    items: [
      "Business cards",
      "Flyers and brochures",
      "Menus and menu books",
      "Posters and banners",
      "Vouchers and tickets",
      "Digital graphics and social media",
    ],
    packageSlugs: [
      "premium-laminated-business-cards",
      "full-menu-book-package",
      "event-ticket-package",
    ],
  },
  {
    id: "print",
    slug: "print",
    name: "Print",
    description:
      "Professional print production for cards, flyers, menus, banners, tickets and promotional material.",
    items: [
      "Business cards",
      "Flyers and brochures",
      "Posters",
      "Menus and booklets",
      "Banners",
      "Tickets and vouchers",
    ],
    packageSlugs: [
      "premium-laminated-business-cards",
      "real-estate-flyer-package",
      "pull-up-banner-package",
    ],
  },
  {
    id: "finish",
    slug: "finishing",
    name: "Finish",
    description:
      "Professional finishing including lamination, folding, binding, padding and display-ready assembly.",
    items: [
      "Lamination — matt and gloss",
      "Folding and creasing",
      "Binding and padding",
      "Table tent assembly",
      "Display-ready products",
    ],
    packageSlugs: [
      "laminated-table-tent-package",
      "premium-laminated-business-cards",
      "full-menu-book-package",
    ],
  },
  {
    id: "digital",
    slug: "digital-media",
    name: "Digital Media",
    description:
      "Digital-ready files for social media, websites, PDF menus and online promotions.",
    items: [
      "Social media posts and graphics",
      "Digital menu PDFs",
      "Website banners",
      "Print-ready PDF exports",
      "AI-enhanced visuals",
    ],
    packageSlugs: [
      "full-menu-book-package",
      "gift-voucher-card-package",
      "new-business-starter-pack",
    ],
  },
];

export const additionalServices = [
  {
    id: "ai-design",
    name: "AI-Enhanced Design",
    description:
      "We can improve low-quality images, create premium visual concepts, enhance supplied photos and prepare artwork for print and online use.",
    items: [
      "Image enhancement",
      "Premium backgrounds",
      "Social media graphics",
      "Poster and banner concepts",
    ],
    note: "AI enhancement can improve many images, but final proof approval is always required before printing.",
  },
  {
    id: "large-format",
    name: "Large Format Printing",
    description:
      "Banners, light boxes, posters and display graphics produced at sizes suited to retail, events and hospitality.",
    items: [
      "Pull-up banners",
      "A1 light boxes",
      "Posters",
      "Display graphics",
    ],
  },
  {
    id: "binding",
    name: "Binding and Padding",
    description:
      "Menu books, booklets, training manuals and padded note pads finished for professional use.",
    items: [
      "Menu book binding",
      "Booklet binding",
      "Padding",
      "Saddle stitch",
    ],
  },
  {
    id: "lamination",
    name: "Lamination and Table Displays",
    description:
      "Durable laminated finishes and table-ready displays for hospitality and events.",
    items: [
      "Matt and gloss lamination",
      "Table tents",
      "Menu displays",
      "Counter cards",
    ],
  },
];
