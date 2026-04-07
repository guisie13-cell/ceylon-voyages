export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number, currency = "€"): string {
  return `${amount.toLocaleString("fr-FR")}${currency}`;
}
