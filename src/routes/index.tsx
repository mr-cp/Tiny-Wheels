import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustStrip } from "@/components/TrustStrip";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.brand} — ${siteConfig.tagline}` },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: `${siteConfig.brand} — ${siteConfig.tagline}` },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              ✦ Pre-loved · Premium
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Premium pre-loved rides for{" "}
              <span className="text-primary">little explorers</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Lovingly restored electric cars, jeeps, bikes and ride-ons for ages 3–12.
              Inspected, sanitized, and ready for the next big adventure.
            </p>
          </div>

          <div className="mt-10">
            <TrustStrip />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              The collection
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Hand-picked, workshop-restored. Tap any toy to order on WhatsApp.
            </p>
          </div>
          <p className="hidden text-sm text-muted-foreground sm:block">
            Limited stock available
          </p>
        </div>
        <ProductGrid products={products} />
      </section>

      <Footer />
    </div>
  );
}
