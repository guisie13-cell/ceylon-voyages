import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ceylon-cream px-4 text-center">
      <p className="font-heading text-8xl font-light text-ceylon-gold/30">404</p>
      <h1 className="mt-4 font-heading text-3xl font-semibold text-ceylon-emerald-deep">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-sm text-ceylon-charcoal/60">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex gap-4">
        <Button variant="primary" href="/">
          Retour à l&apos;accueil
        </Button>
        <Button variant="ghost" href="/destinations">
          Explorer les destinations
        </Button>
      </div>
    </div>
  );
}
