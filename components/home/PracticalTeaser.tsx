import Link from "next/link";
import { FileCheck, Clock, Wallet, Syringe } from "lucide-react";
import { Container } from "@/components/ui/Container";

const teasers = [
  { icon: FileCheck, label: "Visa ETA ~50$", href: "/pratique#visa" },
  { icon: Clock, label: "Décalage +4h30", href: "/pratique#pratique" },
  { icon: Wallet, label: "Budget dès 30€/j", href: "/pratique#budget" },
  { icon: Syringe, label: "Pas de vaccin obligatoire", href: "/pratique#sante" },
];

export function PracticalTeaser() {
  return (
    <section className="border-y border-ceylon-emerald/10 bg-ceylon-sand">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="grid w-full grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-8 lg:gap-12">
            {teasers.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className="flex items-center gap-2.5 text-sm text-ceylon-charcoal/70 transition-colors hover:text-ceylon-emerald"
              >
                <t.icon size={18} className="shrink-0 text-ceylon-gold" />
                <span className="font-medium">{t.label}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/pratique"
            className="shrink-0 text-sm font-medium text-ceylon-emerald hover:text-ceylon-gold transition-colors"
          >
            Guide complet &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
