import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/whatsapp";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (!products.length) return null;
  return (
    <section className="mt-16">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          You may also love
        </h2>
        <Link to="/" className="text-sm font-medium text-primary hover:underline">
          See all →
        </Link>
      </div>
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:gap-5">
        {products.map((p) => (
          <Link
            key={p.id}
            to="/product/$id"
            params={{ id: p.id }}
            className="group w-[68%] shrink-0 snap-start overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft sm:w-[40%] md:w-[28%] lg:w-[22%]"
          >
            <div className="aspect-[4/5] overflow-hidden bg-cream-deep">
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 p-4">
              <h3 className="font-display text-base font-semibold text-foreground">{p.name}</h3>
              <p className="font-display text-sm font-semibold text-primary">
                {formatPrice(p.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
