import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const exploreLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/itineraires", label: "Itinéraires" },
  { href: "/pratique", label: "Infos pratiques" },
  { href: "/galerie", label: "Galerie" },
  { href: "/budget", label: "Calculateur budget" },
];

const resourceLinks = [
  { href: "/pratique#faq", label: "FAQ" },
  { href: "/pratique#quand-partir", label: "Quand partir" },
  { href: "/pratique#visa", label: "Visa & entrée" },
  { href: "/pratique#budget", label: "Budget voyage" },
];

export function Footer() {
  return (
    <footer className="relative bg-ceylon-charcoal grain-texture">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-0.5">
              <span className="font-heading text-2xl font-normal tracking-wide text-white">
                Ceylon
              </span>
              <span className="font-heading text-2xl font-light italic text-ceylon-gold">
                Voyages
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Votre guide premium pour découvrir le Sri Lanka. Destinations,
              itinéraires sur mesure et conseils pratiques pour un voyage
              inoubliable.
            </p>
            {/* Social icons placeholder row */}
            <div className="mt-6 flex gap-3">
              {["Instagram", "Facebook", "YouTube"].map((name) => (
                <span
                  key={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-white/40 transition-colors hover:border-ceylon-gold/40 hover:text-ceylon-gold"
                  aria-label={name}
                >
                  {name[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Explorer */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-ceylon-gold">
              Explorer
            </h3>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ressources */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-ceylon-gold">
              Ressources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-ceylon-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:contact@ceylonvoyages.fr"
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Mail size={16} className="shrink-0 text-ceylon-gold/60" />
                  contact@ceylonvoyages.fr
                </a>
              </li>
              <li>
                <a
                  href="tel:+33123456789"
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Phone size={16} className="shrink-0 text-ceylon-gold/60" />
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33123456789"
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} className="shrink-0 text-ceylon-gold/60" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ceylon Voyages. Tous droits
            réservés.
          </p>
          <p className="text-xs text-white/30">
            Fait avec &hearts; pour le Sri Lanka
          </p>
        </div>
      </Container>
    </footer>
  );
}
