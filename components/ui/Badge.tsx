import { cn } from "@/lib/utils";

type BadgeVariant = "nature" | "culture" | "plage" | "aventure" | "safari" | "default";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  nature: "bg-ceylon-emerald/10 text-ceylon-emerald",
  culture: "bg-ceylon-gold/10 text-ceylon-gold",
  plage: "bg-ceylon-ocean/10 text-ceylon-ocean",
  aventure: "bg-ceylon-coral/10 text-ceylon-coral",
  safari: "bg-ceylon-emerald-deep/10 text-ceylon-emerald-deep",
  default: "bg-ceylon-charcoal/5 text-ceylon-charcoal/70",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
