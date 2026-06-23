export interface FAQ {
  id: string;
  question: string;
  answer: string;
  group: string;
}

export const faqs: FAQ[] = [
  {
    id: "print-ready-artwork",
    question: "Do I need print-ready artwork?",
    answer:
      "No. Our design packages are built for businesses that may only have a logo, photos and text notes. We create the artwork for you. If you already have print-ready files, you can upload them — we'll review and advise if anything needs adjustment.",
    group: "Artwork",
  },
  {
    id: "design-options",
    question: "How many design options do I get?",
    answer:
      "Every design package includes two design options. You choose your preferred direction, can request one minor revision, and then approve the final proof before anything is printed.",
    group: "Design",
  },
  {
    id: "request-changes",
    question: "Can I request changes?",
    answer:
      "Yes. Each package includes one minor revision on your chosen design direction. Additional revisions can be added as an optional extra. Major redesigns or multiple revision rounds are not included in the base package price.",
    group: "Revisions",
  },
  {
    id: "proof-before-print",
    question: "Do you print before I approve?",
    answer:
      "Never. Nothing is printed until you approve the final proof. You will receive a proof to review spelling, contact details, colours, layout and all content before production begins.",
    group: "Design",
  },
  {
    id: "delivery-nz",
    question: "Do you deliver outside Christchurch?",
    answer:
      "Yes. We deliver nationwide across New Zealand. Delivery costs are calculated at checkout. Rural or bulky items may incur additional charges — we'll make this clear before you complete your order.",
    group: "Delivery",
  },
  {
    id: "artwork-upload",
    question: "Can I upload my own artwork?",
    answer:
      "Yes. You can upload logos, photos, existing artwork and inspiration images when placing your order or via our Upload Artwork page. We accept PDF, PNG, JPG, SVG, AI and EPS where possible.",
    group: "Artwork",
  },
  {
    id: "fixed-pricing",
    question: "Are prices fixed?",
    answer:
      "Yes. Package prices are fixed and clearly shown on each product page. Add-ons such as extra revisions, urgent turnaround or additional quantities are priced separately and shown before checkout.",
    group: "Ordering",
  },
  {
    id: "what-not-included",
    question: "What is not included?",
    answer:
      "Packages do not include logo creation (unless purchased separately), major redesigns, extra revisions beyond one minor revision, urgent turnaround, rural delivery surcharges, or special materials unless listed in the package description.",
    group: "Ordering",
  },
  {
    id: "low-quality-images",
    question: "What if my supplied image is low quality?",
    answer:
      "We can often improve low-quality images using our AI-enhanced design service (from $49). We'll advise you during the design process if an image may not print well and suggest options before proceeding.",
    group: "Artwork",
  },
  {
    id: "custom-work",
    question: "Can I order custom work?",
    answer:
      "Yes. Custom work can be requested if your project does not fit one of the listed packages. Contact us with your requirements and we'll advise on scope and pricing.",
    group: "Ordering",
  },
  {
    id: "payment-before-design",
    question: "When does design work start?",
    answer:
      "Design work starts after full payment is received.",
    group: "Payments",
  },
  {
    id: "pay-before-approval",
    question: "Do I pay before design approval?",
    answer:
      "Yes. Full payment is required to start the order. You still approve the final proof before printing.",
    group: "Payments",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept secure online card payments via Stripe at checkout. Payment is required when placing your order to begin the design process.",
    group: "Payments",
  },
  {
    id: "turnaround",
    question: "How long does delivery take?",
    answer:
      "Turnaround varies by package and current workload. Standard packages typically take 7–14 business days from proof approval. Urgent turnaround is available as an add-on for selected packages.",
    group: "Delivery",
  },
  {
    id: "refund-policy",
    question: "Can I get a refund?",
    answer:
      "Custom printed products cannot usually be refunded for change of mind after proof approval. If a production error is caused by us, we will fix or reprint at no charge. See our Refund/Reprint Policy for full details.",
    group: "Refunds/Reprints",
  },
  {
    id: "urgent-turnaround",
    question: "Do you offer urgent turnaround?",
    answer:
      "Yes, urgent turnaround is available as an add-on from $75 depending on the package. Contact us or select the add-on at checkout where available.",
    group: "Delivery",
  },
];

export const faqGroups = [
  "Ordering",
  "Design",
  "Printing",
  "Delivery",
  "Artwork",
  "Payments",
  "Revisions",
  "Refunds/Reprints",
];

export function getFaqsByGroup(group: string): FAQ[] {
  return faqs.filter((f) => f.group === group);
}

export function getFaqById(id: string): FAQ | undefined {
  return faqs.find((f) => f.id === id);
}

export const homepageFaqIds = [
  "print-ready-artwork",
  "design-options",
  "request-changes",
  "proof-before-print",
  "delivery-nz",
  "artwork-upload",
  "fixed-pricing",
  "what-not-included",
  "low-quality-images",
  "custom-work",
  "payment-before-design",
  "pay-before-approval",
];
