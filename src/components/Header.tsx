import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {siteConfig.brand}
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            · pre-loved
          </span>
        </Link>
        <a
          href={buildGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-cta sm:px-4 sm:text-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Sell on Tinywheels</span>
          <span className="sm:hidden">Sell on Tinywheels</span>
        </a>
      </div>
    </header>
  );
}
