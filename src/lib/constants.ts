export const SITE_NAME = "Value Design & Print";
export const SITE_TAGLINE = "Big-agency style. Small-business pricing.";
export const SITE_DESCRIPTION =
  "Agency-quality design, print and digital media packages for New Zealand small businesses.";

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
  "Based in Christchurch • Delivered NZ-wide • Two design options • Proof before print";

export const HERO_TRUST_LINE =
  "Christchurch based • NZ-wide delivery • Two design options • Proof before print";
