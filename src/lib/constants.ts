export const SITE_NAME = "Value Design & Print";
export const SITE_TAGLINE = "Big-agency style. Small-business pricing.";
export const SITE_DESCRIPTION =
  "Agency-quality design, print and digital media packages for New Zealand businesses.";

export const CONTACT = {
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "hello@valuedesignprint.co.nz",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "",
  location: "Christchurch, New Zealand",
};

export const TRUST_TAGS = [
  "2 design options",
  "Proof before print",
  "NZ-wide delivery",
] as const;

export const TRUST_LINE =
  "Christchurch · NZ-wide delivery · Two design options · Proof before print";

export const HERO_TRUST_LINE =
  "Christchurch based · NZ-wide delivery · Two design options · Proof before print";

export const PAYMENT_SUMMARY_LINE =
  "One payment to start your order · Two design options · Proof approval before print";

export const EXPERIENCE_HEADING = "Experience behind the work";

export const EXPERIENCE_COPY =
  "Our work is led by 16+ years of hands-on experience across design, print production and visual media — not a long company history, but deep practical knowledge built in the industry. That background includes work with three of New Zealand's largest printing companies, film production, and production training through the New Zealand Broadcasting School.";

export const EXPERIENCE_COPY_SECOND =
  "That experience helps us prepare artwork properly, understand print quality, manage finishing details, and deliver professional design and print packages for businesses across New Zealand.";

export const PAYMENT_TRUST_COPY =
  "Full payment is required to start your order. Every design package includes two design options and one minor revision. We send a final proof for approval before printing. Nothing is printed until you approve the final artwork.";

export const CHECKOUT_NOTICE =
  "Online card checkout is being finalised. You can order now by email — we will confirm your package, payment details and next steps within 1–2 business days.";

export function mailtoOrder(packageName?: string) {
  const subject = packageName
    ? `Order enquiry — ${packageName}`
    : "Order enquiry — Value Design & Print";
  const body = packageName
    ? `Hi,\n\nI would like to order: ${packageName}\n\nBusiness name:\nPhone:\nDelivery address:\n\nProject notes:\n`
    : `Hi,\n\nI would like to order a package.\n\nBusiness name:\nPhone:\nDelivery address:\n\nProject notes:\n`;
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function mailtoContact() {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent("Enquiry — Value Design & Print")}`;
}

export function mailtoUpload() {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent("Artwork upload — Value Design & Print")}&body=${encodeURIComponent("Hi,\n\nPlease find my project details below.\n\nPackage:\nOrder number (if any):\nBusiness name:\n\nNotes:\n\n(I will attach files to this email or send a transfer link if needed.)\n")}`;
}
