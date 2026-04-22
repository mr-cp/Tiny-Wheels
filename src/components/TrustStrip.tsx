import { ShieldCheck, RefreshCw, Truck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Inspected & Sanitized", sub: "Workshop-tested" },
  { icon: RefreshCw, label: "7-Day Replacement", sub: "No questions" },
  { icon: Truck, label: "Delivery Available", sub: "Across the city" },
];

export function TrustStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "grid grid-cols-3 gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-soft"
          : "grid grid-cols-1 gap-3 sm:grid-cols-3"
      }
    >
      {items.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className={
            compact
              ? "flex flex-col items-center gap-1 text-center"
              : "flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-soft"
          }
        >
          <div
            className={
              compact
                ? "flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"
                : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
            }
          >
            <Icon className="h-4 w-4" />
          </div>
          <div className={compact ? "text-center" : ""}>
            <p className="text-xs font-semibold text-foreground sm:text-sm">{label}</p>
            <p className="text-[11px] text-muted-foreground sm:text-xs">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
