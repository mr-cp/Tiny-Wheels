/**
 * Site-wide configuration.
 * Swap whatsappNumber with your real business number when ready.
 * Format: country code + number, no "+" or spaces. Example: "919876543210" for India.
 */
export const siteConfig = {
  brand: "Tinywheels",
  tagline: "Premium pre-loved rides for little explorers",
  description:
    "Carefully curated, inspected and sanitized ride-on toys for kids aged 3–12. Order on WhatsApp.",
  // TODO: Replace with your WhatsApp Business number (digits only, with country code).
  whatsappNumber: "+918129393700",
  currency: "₹",
  locale: "en-IN",
  url: "https://tinywheels.example",
} as const;
