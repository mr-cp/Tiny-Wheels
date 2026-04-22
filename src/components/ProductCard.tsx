import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/whatsapp";
import { ConditionBadge } from "./ConditionBadge";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group fade-in flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft hover-lift"
      style={{ animationDelay: `${Math.min(index * 60, 360)}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3">
          <ConditionBadge condition={product.condition} />
        </div>
        {product.originalPrice && (
          <div className="absolute right-3 top-3 rounded-full bg-foreground/90 px-2.5 py-1 text-[11px] font-semibold text-background backdrop-blur">
            Save {formatPrice(product.originalPrice - product.price)}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {product.ageRange}
        </p>
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground sm:text-sm">{product.tagline}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
      <div className="aspect-[4/5] animate-pulse bg-muted" />
      <div className="space-y-2 p-4 sm:p-5">
        <div className="h-3 w-16 animate-pulse rounded bg-muted" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
        <div className="mt-2 h-6 w-1/3 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}
