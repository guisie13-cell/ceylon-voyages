import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-ceylon-emerald via-ceylon-teal to-ceylon-ocean py-20 lg:py-28 grain-texture">
      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-white">
          Prêt à explorer l&apos;île{" "}
          <em className="italic text-ceylon-gold-light">resplendissante</em> ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
          Commencez à planifier votre voyage au Sri Lanka dès maintenant.
          Nos itinéraires, conseils et outils sont là pour vous guider.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="primary" size="lg" href="/itineraires">
            Planifier mon voyage
          </Button>
          <Button variant="outline-white" size="lg" href="/contact">
            Nous contacter
          </Button>
        </div>
      </Container>
    </section>
  );
}
