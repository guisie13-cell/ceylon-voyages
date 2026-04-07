import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ceylon-gold text-white hover:bg-ceylon-gold-light active:bg-ceylon-gold",
  secondary:
    "bg-ceylon-emerald text-white hover:bg-ceylon-teal active:bg-ceylon-emerald",
  ghost:
    "bg-transparent text-ceylon-emerald hover:bg-ceylon-emerald/5 active:bg-ceylon-emerald/10",
  "outline-white":
    "bg-white/5 text-white border-2 border-white/80 hover:bg-white/20 hover:border-white active:bg-white/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-400",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ceylon-gold",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
