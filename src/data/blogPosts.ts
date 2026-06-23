export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  content: string;
  relatedPackageSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  imageFolder: string;
}

export const blogCategories = [
  "Artwork Setup",
  "Business Cards",
  "Restaurant Menus",
  "Banners",
  "Real Estate",
  "Events",
  "Digital Media",
  "AI Design",
];

export const blogPosts: BlogPost[] = [
  {
    id: "logo-for-print",
    slug: "how-to-prepare-your-logo-for-print",
    title: "How to Prepare Your Logo for Print",
    excerpt:
      "A practical guide to supplying logo files that print clearly on business cards, flyers and banners.",
    category: "Artwork Setup",
    publishedAt: "2025-11-01",
    readTime: "5 min read",
    content: `Getting your logo print-ready saves time and ensures crisp results on every material.

**Preferred file formats**
Vector files (AI, EPS, SVG) are ideal because they scale without losing quality. High-resolution PNG files with transparent backgrounds also work well for most print jobs.

**Resolution matters**
For raster images, aim for at least 300 DPI at the final print size. A logo that looks fine on screen may appear blurry when printed large.

**Colour modes**
Print uses CMYK colour. If you only have RGB files, we can convert them — but colours may shift slightly. Supplying Pantone or brand colour references helps us match accurately.

**What to send us**
Upload your best available logo file along with any brand guidelines. If your logo is low resolution, ask about our AI image enhancement add-on.`,
    relatedPackageSlugs: [
      "premium-laminated-business-cards",
      "new-business-starter-pack",
    ],
    seoTitle: "How to Prepare Your Logo for Print",
    seoDescription:
      "Tips for preparing logo files for professional print on business cards, flyers and banners.",
    imageFolder: "blog",
  },
  {
    id: "bc-mistakes",
    slug: "business-card-design-mistakes-to-avoid",
    title: "Business Card Design Mistakes to Avoid",
    excerpt:
      "Common business card design pitfalls and how to create cards that look professional.",
    category: "Business Cards",
    publishedAt: "2025-11-05",
    readTime: "6 min read",
    content: `Your business card is often the first physical impression you make. Here are mistakes we see regularly — and how to avoid them.

**Too much information**
Cramming every service onto a card makes it hard to read. Focus on name, role, phone, email and website.

**Tiny text**
If you need reading glasses to read your own card, your customers will too. Keep body text at a comfortable size.

**Low-contrast colours**
Light grey text on white looks elegant on screen but can disappear in print. Ensure strong contrast for readability.

**Missing bleed**
Professional print requires bleed area beyond the trim edge. Our design packages handle this — but it's worth knowing why margins matter.

**Skipping proof approval**
Always review your proof carefully. Once approved, spelling and layout changes may incur reprint costs.`,
    relatedPackageSlugs: ["premium-laminated-business-cards"],
    seoTitle: "Business Card Design Mistakes to Avoid",
    seoDescription:
      "Avoid common business card design mistakes for a more professional result.",
    imageFolder: "blog",
  },
  {
    id: "matte-vs-gloss",
    slug: "matte-vs-gloss-lamination",
    title: "Matte vs Gloss Lamination",
    excerpt:
      "Choosing the right lamination finish for your business cards, menus and table tents.",
    category: "Business Cards",
    publishedAt: "2025-11-10",
    readTime: "4 min read",
    content: `Lamination protects your print and adds a premium feel. The finish you choose affects both appearance and usability.

**Gloss lamination**
Gloss creates a shiny, vibrant surface that makes colours pop. It's popular for business cards and promotional material where bold colour impact matters.

**Matt lamination**
Matt offers a sophisticated, tactile finish with reduced glare. It's excellent for menus, premium cards and materials handled under bright lighting.

**Which to choose?**
Consider where the item will be used. Gloss suits marketing impact; matt suits readability and an understated premium feel. Our packages let you choose either finish.`,
    relatedPackageSlugs: [
      "premium-laminated-business-cards",
      "laminated-table-tent-package",
    ],
    seoTitle: "Matte vs Gloss Lamination",
    seoDescription:
      "Compare matte and gloss lamination for business cards and print materials.",
    imageFolder: "blog",
  },
  {
    id: "takeaway-menu",
    slug: "what-to-include-on-a-takeaway-menu",
    title: "What to Include on a Takeaway Menu",
    excerpt:
      "Essential sections and layout tips for takeaway and delivery menus.",
    category: "Restaurant Menus",
    publishedAt: "2025-11-15",
    readTime: "5 min read",
    content: `A well-structured takeaway menu helps customers order quickly and reduces confusion.

**Essential sections**
Group items logically: starters, mains, sides, drinks, desserts. Include clear prices and portion sizes where relevant.

**Dietary information**
Mark vegetarian, gluten-free, dairy-free and allergen information clearly. This builds trust and reduces enquiries.

**Contact and ordering**
Include phone number, website, delivery platforms and opening hours. A QR code linking to online ordering can be useful.

**Branding consistency**
Match your in-venue menus and digital presence. Our menu packages include a digital PDF for online use.`,
    relatedPackageSlugs: [
      "full-menu-book-package",
      "a3-door-menu-display",
    ],
    seoTitle: "What to Include on a Takeaway Menu",
    seoDescription:
      "Guide to takeaway menu content, layout and design for restaurants and cafés.",
    imageFolder: "blog",
  },
  {
    id: "event-promotion",
    slug: "how-to-promote-an-event-with-tickets-posters-and-social-media",
    title: "How to Promote an Event with Tickets, Posters and Social Media",
    excerpt:
      "Coordinate print and digital materials for a cohesive event promotion.",
    category: "Events",
    publishedAt: "2025-11-20",
    readTime: "7 min read",
    content: `Successful event promotion uses consistent branding across every touchpoint.

**Start with a visual system**
Choose colours, typography and a key image that work across tickets, banners and social posts. Our design packages create this consistency.

**Print essentials**
Tickets with numbering, pull-up banners for venues, and table tents for information points cover most community events.

**Digital support**
Social media graphics and a shareable event image extend your reach beyond printed materials.

**Timeline**
Order print materials at least two weeks before your event to allow design, proofing and delivery time.`,
    relatedPackageSlugs: [
      "event-ticket-package",
      "pull-up-banner-package",
    ],
    seoTitle: "Event Promotion with Tickets, Posters and Social Media",
    seoDescription:
      "Tips for promoting events with coordinated print and digital materials.",
    imageFolder: "blog",
  },
  {
    id: "proof-approval",
    slug: "why-proof-approval-matters-before-printing",
    title: "Why Proof Approval Matters Before Printing",
    excerpt:
      "Understanding the proofing process and why your approval protects your investment.",
    category: "Artwork Setup",
    publishedAt: "2025-11-25",
    readTime: "4 min read",
    content: `Proof approval is the most important step in any print project.

**What is a proof?**
A proof is a final preview of your artwork showing exactly how it will print — including text, images, colours and layout.

**What to check**
Review spelling, phone numbers, email addresses, prices, dates, QR codes, colours and overall layout. Enlarge the proof and read every word.

**Why it matters**
Once approved, your order goes to production. Changes after approval may require a reprint at additional cost. Taking time to review carefully saves money and stress.

**Our commitment**
We never print without your explicit approval. Two design options and one minor revision are included so you can be confident in the final result.`,
    relatedPackageSlugs: [
      "premium-laminated-business-cards",
      "event-ticket-package",
    ],
    seoTitle: "Why Proof Approval Matters Before Printing",
    seoDescription:
      "Why proof approval is essential before printing custom materials.",
    imageFolder: "blog",
  },
  {
    id: "ai-enhancement",
    slug: "how-ai-enhanced-design-can-improve-low-quality-images",
    title: "How AI-Enhanced Design Can Improve Low-Quality Images",
    excerpt:
      "When AI image enhancement helps — and why proof approval still matters.",
    category: "AI Design",
    publishedAt: "2025-12-01",
    readTime: "5 min read",
    content: `Not every business has professional photography. AI-enhanced design can bridge the gap.

**What it can improve**
Low-resolution photos, noisy images, flat lighting and basic backgrounds can often be enhanced for print and digital use.

**What it cannot fix**
Extremely blurry images, heavily cropped faces or images with fundamental composition problems may still not print well. We'll advise honestly.

**How we use it**
AI enhancement is a tool in our design process — not a replacement for professional design. Every enhanced image goes through proof approval before print.

**Add-on pricing**
AI image enhancement starts from $49 depending on complexity. Ask us during your project if your images need attention.`,
    relatedPackageSlugs: ["premium-laminated-business-cards"],
    seoTitle: "AI-Enhanced Design for Low-Quality Images",
    seoDescription:
      "How AI image enhancement can improve photos for print and digital use.",
    imageFolder: "blog",
  },
  {
    id: "banner-tips",
    slug: "pull-up-banner-design-tips-for-events-and-markets",
    title: "Pull-Up Banner Design Tips for Events and Markets",
    excerpt:
      "Design principles for banners that read well from a distance at events and markets.",
    category: "Banners",
    publishedAt: "2025-12-05",
    readTime: "5 min read",
    content: `Pull-up banners compete for attention in busy environments. Design for distance and clarity.

**Less text, more impact**
Viewers have seconds to absorb your message. Lead with a bold headline and one clear call to action.

**High contrast**
Ensure text stands out against the background. Avoid busy photographic backgrounds behind small text.

**Logo placement**
Position your logo prominently but don't let it dominate — the message matters more at events.

**Safe zones**
Keep critical content away from edges. Our designers account for banner dimensions and stand hardware.

**Proof at full size**
Review your proof imagining it at full banner height. What looks fine on screen may need larger text in reality.`,
    relatedPackageSlugs: ["pull-up-banner-package"],
    seoTitle: "Pull-Up Banner Design Tips",
    seoDescription:
      "Design tips for effective pull-up banners at events and markets.",
    imageFolder: "blog",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
