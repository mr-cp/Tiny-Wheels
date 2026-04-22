import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildGeneralWhatsAppLink, buildSupportWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-foreground">
              {siteConfig.brand}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium pre-loved ride-on toys, restored with care for the next little rider.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Promise
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li>· Inspected & sanitized</li>
              <li>· 7-day replacement</li>
              <li>· Pay on delivery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Order
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We take orders directly on WhatsApp for the fastest, most personal experience.
            </p>
            <a
              href={buildSupportWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-cta"
            >
              <MessageCircle className="h-4 w-4" />
              Message us
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.brand}. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
