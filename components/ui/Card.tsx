import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export function Card({ children, className, hover = true, style }: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white shadow-card",
        hover &&
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-card-hover hover:border-t-2 hover:border-ceylon-gold",
        className
      )}
    >
      {children}
    </div>
  );
}
