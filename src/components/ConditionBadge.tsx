import { Sparkles } from "lucide-react";
import type { ProductCondition } from "@/data/products";
import { cn } from "@/lib/utils";

export function ConditionBadge({
  condition,
  className,
}: {
  condition: ProductCondition;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-success",
        className,
      )}
    >
      <Sparkles className="h-3 w-3" />
      {condition}
    </span>
  );
}
