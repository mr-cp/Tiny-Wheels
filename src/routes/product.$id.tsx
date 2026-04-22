import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustStrip } from "@/components/TrustStrip";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ConditionBadge } from "@/components/ConditionBadge";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { RelatedProducts } from "@/components/RelatedProducts";
import { getProductById, getRelatedProducts } from "@/data/products";
import { buildWhatsAppLink, formatPrice } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProductById(params.id);
    if (!product) throw notFound();
    const related = getRelatedProducts(product.id);
    return { product, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { product } = loaderData;
    const title = `${product.name} — ${siteConfig.brand}`;
    const description = `${product.shortDescription}. ${product.condition}, ${product.ageRange}. ${formatPrice(product.price)}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: product.images[0] },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: product.images[0] },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-5xl font-semibold text-foreground">Not found</h1>
        <p className="mt-3 text-muted-foreground">
          This toy may have already found a new home.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta"
        >
          Browse the collection
        </Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const [selected, setSelected] = useState<Record<string, string>>(() =>
    Object.fromEntries((product.variants ?? []).map((v) => [v.label, v.options[0]])),
  );

  const variantLabel = product.variants
    ? product.variants.map((v) => `${v.label}: ${selected[v.label]}`).join(", ")
    : null;

  const waLink = buildWhatsAppLink(product, variantLabel);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Header />

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to collection
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <div className="fade-in">
            <ProductCarousel images={product.images} alt={product.name} />
          </div>

          {/* Details */}
          <div className="fade-in space-y-6" style={{ animationDelay: "100ms" }}>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <ConditionBadge condition={product.condition} />
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary-foreground">
                  Ages {product.ageRange}
                </span>
              </div>
              <h1 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {product.name}
              </h1>
              <p className="text-base text-muted-foreground">{product.shortDescription}</p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-base text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                </>
              )}
            </div>

            {/* Variants */}
            {product.variants?.map((variant) => (
              <div key={variant.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">{variant.label}</span>
                  <span className="text-sm text-muted-foreground">{selected[variant.label]}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelected((s) => ({ ...s, [variant.label]: opt }))}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                        selected[variant.label] === opt
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card text-foreground hover:border-primary/40",
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA - desktop */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-transform hover:scale-[1.01] active:scale-[0.99] md:inline-flex"
            >
              <MessageCircle className="h-5 w-5" />
              Buy via WhatsApp
            </a>

            <TrustStrip compact />

            {/* Description */}
            <div className="space-y-2 pt-2">
              <h2 className="font-display text-xl font-semibold text-foreground">
                About this piece
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Specs */}
            <div className="space-y-3 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
              <h2 className="font-display text-xl font-semibold text-foreground">Specifications</h2>
              <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
                <SpecRow label="Age range" value={product.ageRange} />
                <SpecRow label="Dimensions" value={product.specs.dimensions} />
                <SpecRow label="Battery" value={product.specs.battery} />
                <SpecRow label="Max weight" value={product.specs.maxWeight} />
                <SpecRow label="Materials" value={product.specs.materials} />
                {product.specs.speed && <SpecRow label="Top speed" value={product.specs.speed} />}
              </dl>
            </div>
          </div>
        </div>

        <RelatedProducts products={related} />
      </div>

      <Footer />
      <StickyBuyBar product={product} href={waLink} />
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/40 pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  );
}
