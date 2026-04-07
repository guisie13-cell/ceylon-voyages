import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 lg:mb-16", className)}>
      <div
        className={cn(
          "mb-4 h-0.5 w-12",
          light ? "bg-ceylon-gold-light" : "bg-ceylon-gold",
          centered && "mx-auto"
        )}
      />
      <h2
        className={cn(
          "font-heading font-semibold",
          light ? "text-white" : "text-ceylon-emerald-deep"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg",
            light ? "text-white/70" : "text-ceylon-charcoal/60",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
