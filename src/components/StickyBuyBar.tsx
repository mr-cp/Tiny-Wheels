import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/whatsapp";

export function StickyBuyBar({
  product,
  href,
}: {
  product: Product;
  href: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 px-4 py-3 shadow-lift backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Price</span>
          <span className="font-display text-lg font-semibold text-foreground">
            {formatPrice(product.price)}
          </span>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-cta px-5 py-3 text-sm font-semibold text-primary-foreground shadow-cta transition-transform active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          Buy via WhatsApp
        </a>
      </div>
    </div>
  );
}
