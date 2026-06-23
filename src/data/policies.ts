export interface PolicySection {
  heading: string;
  content: string;
}

export interface Policy {
  slug: string;
  title: string;
  description: string;
  sections: PolicySection[];
}

export const policies: Policy[] = [
  {
    slug: "shipping-delivery",
    title: "Shipping & Delivery",
    description:
      "NZ-wide delivery from our Christchurch studio. Delivery costs calculated at checkout.",
    sections: [
      {
        heading: "Delivery area",
        content:
          "We deliver across New Zealand from our Christchurch base. Whether you are in Christchurch, Auckland, Wellington or a regional area, we ship to your door.",
      },
      {
        heading: "Delivery costs",
        content:
          "Delivery costs are calculated at checkout based on package size, weight and destination. You'll see the full cost before completing your order.",
      },
      {
        heading: "Rural and bulky items",
        content:
          "Rural delivery addresses and bulky items such as light boxes and banner stands may incur additional charges. Any surcharge will be shown at checkout or communicated before your order is confirmed.",
      },
      {
        heading: "Turnaround",
        content:
          "Production begins after final proof approval. Standard turnaround is typically 7–14 business days from approval, plus delivery time. Urgent turnaround may be available as an add-on.",
      },
      {
        heading: "Tracking",
        content:
          "Where available, we provide tracking information once your order is dispatched. You'll receive notification by email.",
      },
    ],
  },
  {
    slug: "artwork-guidelines",
    title: "Artwork Guidelines",
    description:
      "How to prepare and supply artwork for your design and print package.",
    sections: [
      {
        heading: "Accepted file types",
        content:
          "We accept PDF, PNG, JPG, SVG, AI and EPS files where possible. Vector files are preferred for logos. For photos, supply the highest resolution available.",
      },
      {
        heading: "Image quality",
        content:
          "For print, images should ideally be 300 DPI at final print size. Low-resolution images may appear blurry when printed. Our AI enhancement add-on can improve many images — ask us for advice.",
      },
      {
        heading: "Bleed and margins",
        content:
          "Professional print requires bleed beyond the trim edge. If you supply print-ready artwork, include 3mm bleed. Our design packages handle bleed automatically.",
      },
      {
        heading: "Text and content",
        content:
          "You are responsible for supplying accurate text, prices, dates, contact details and spelling. Please proofread your content before submitting. We will flag obvious issues but cannot verify factual accuracy.",
      },
      {
        heading: "Large files",
        content:
          "Very large files may need to be shared via a file transfer link. Contact us if your upload exceeds the form limit and we'll provide an alternative method.",
      },
    ],
  },
  {
    slug: "proof-approval-policy",
    title: "Proof Approval Policy",
    description:
      "Nothing prints without your approval. Review carefully before confirming.",
    sections: [
      {
        heading: "Our commitment",
        content:
          "We never print without your explicit approval of the final proof. This protects you and ensures you receive exactly what you expect.",
      },
      {
        heading: "What to check",
        content:
          "Before approving, carefully review: spelling and grammar, phone numbers and email addresses, prices and dates, QR codes and URLs, colours and layout, image quality and placement, and all business details.",
      },
      {
        heading: "Approval means production",
        content:
          "Once you approve the final proof, your order moves to production. Changes requested after approval may incur additional costs for reprinting or redesign.",
      },
      {
        heading: "Design options and revisions",
        content:
          "Each package includes two design options and one minor revision on your chosen direction. Additional revisions are available as an optional add-on.",
      },
      {
        heading: "Colour variation",
        content:
          "Screen colours may differ slightly from printed colours due to monitor calibration and print processes. We prepare files to professional print standards, but exact colour matching to a screen preview cannot be guaranteed.",
      },
    ],
  },
  {
    slug: "refund-reprint-policy",
    title: "Refund & Reprint Policy",
    description:
      "Fair policies for custom printed products and production errors.",
    sections: [
      {
        heading: "Custom products",
        content:
          "Our products are custom-designed and printed to your specifications. As such, refunds for change of mind are generally not available after proof approval and production.",
      },
      {
        heading: "Our errors",
        content:
          "If a production error is caused by us — such as incorrect printing, wrong quantities, or defects in finishing — we will reprint or rectify the issue at no additional charge.",
      },
      {
        heading: "Customer-approved errors",
        content:
          "If you approve a proof containing incorrect text, spelling, prices, contact details or layout, reprinting may incur additional costs. This is why we emphasise careful proof review.",
      },
      {
        heading: "Damaged in transit",
        content:
          "If your order arrives damaged, contact us promptly with photos. We will arrange a replacement or reprint where the damage occurred during shipping.",
      },
      {
        heading: "Cancellations",
        content:
          "Orders may be cancelled before design work begins for a full refund. Once design work has started, cancellation may incur a design fee proportional to work completed.",
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How we collect, use and protect your personal information.",
    sections: [
      {
        heading: "Information we collect",
        content:
          "We collect information you provide when ordering, uploading artwork or contacting us — including name, email, phone, business details, delivery address and uploaded files.",
      },
      {
        heading: "How we use your information",
        content:
          "We use your information to process orders, create designs, communicate about your project, deliver products and improve our services. We do not sell your personal information.",
      },
      {
        heading: "File storage",
        content:
          "Uploaded artwork and project files are stored securely for the duration of your project and a reasonable period thereafter for reorder purposes. You may request deletion of your files.",
      },
      {
        heading: "Payment security",
        content:
          "Payments are processed securely via Stripe. We do not store credit card details on our servers.",
      },
      {
        heading: "Contact",
        content:
          "For privacy enquiries, contact us at hello@valuedesignprint.co.nz.",
      },
    ],
  },
  {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    description:
      "General terms for using Value Design & Print services.",
    sections: [
      {
        heading: "Services",
        content:
          "Value Design & Print provides design, print, finishing and digital media services through fixed-price packages as described on our website. Custom work may be quoted separately.",
      },
      {
        heading: "Orders and payment",
        content:
          "Orders are confirmed upon successful payment. Prices are in NZD and include GST where applicable. Package prices are fixed as shown; add-ons are priced separately.",
      },
      {
        heading: "Design process",
        content:
          "Each design package includes two design options and one minor revision. Final proof approval is required before printing. See our Proof Approval Policy for details.",
      },
      {
        heading: "Intellectual property",
        content:
          "Upon full payment and project completion, you receive rights to use the final approved artwork for your business purposes. We retain the right to display completed work in our portfolio unless otherwise agreed.",
      },
      {
        heading: "Liability",
        content:
          "Our liability is limited to the value of the order. We are not liable for indirect or consequential losses. We carry professional indemnity appropriate to our services.",
      },
      {
        heading: "Governing law",
        content:
          "These terms are governed by the laws of New Zealand. Disputes will be resolved in New Zealand courts.",
      },
    ],
  },
];

export function getPolicyBySlug(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
