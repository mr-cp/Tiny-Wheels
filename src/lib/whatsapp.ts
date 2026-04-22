import { siteConfig } from "@/config/site";
import type { Product } from "@/data/products";

export function formatPrice(price: number): string {
  return `${siteConfig.currency}${price.toLocaleString(siteConfig.locale)}`;
}

export function buildWhatsAppLink(product: Product, variant?: string | null): string {
  const lines = [
    `Hi ${siteConfig.brand}! I'd like to order:`,
    ``,
    `*${product.name}*`,
    variant ? `Variant: ${variant}` : null,
    `Price: ${formatPrice(product.price)}`,
    ``,
    `Could you share the next steps?`,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function buildGeneralWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? `Hi ${siteConfig.brand}!
I’d like to sell a kids ride-on toy.

Here are the details:
• Product type:
• Condition:
• Age used:
• Expected price:

Please let me know the next steps.
`,
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function buildSupportWhatsAppLink() {
  const message = `Hi Tinywheels!
I have a question / feedback:

Message:

Thanks!
`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
