import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Clock, Wallet, ChevronRight, Lightbulb, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { destinations, getDestinationBySlug } from "@/lib/data/destinations";
import type { Metadata } from "next";
import type { Category } from "@/lib/types";

const categoryBadgeVariant: Record<Category, "nature" | "culture" | "plage" | "aventure" | "safari"> = {
  nature: "nature",
  culture: "culture",
  plage: "plage",
  aventure: "aventure",
  safari: "safari",
};

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return {};
  return {
    title: `${dest.name} — ${dest.tagline}`,
    description: dest.description.slice(0, 160),
    openGraph: {
      title: `${dest.name} | Ceylon Voyages`,
      description: dest.tagline,
      images: [{ url: dest.heroImage }],
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const nearby = dest.nearbyDestinations
    .map((s) => getDestinationBySlug(s))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
           src={dest.heroImage}
           alt={dest.name}
           fill
           priority
           className="object-cover"
           style={{ objectPosition: dest.heroPosition ?? "center center" }}
           sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/90 via-ceylon-charcoal/30 to-ceylon-charcoal/60" />
        <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-12 sm:px-6">
          <Container>
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-1.5 text-xs text-white/50" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white/80 transition-colors">Accueil</Link>
              <ChevronRight size={12} />
              <Link href="/destinations" className="hover:text-white/80 transition-colors">Destinations</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">{dest.name}</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-3">
              {dest.category.map((cat) => (
                <Badge key={cat} variant={categoryBadgeVariant[cat]}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Badge>
              ))}
            </div>
            <h1 className="font-heading text-white">{dest.name}</h1>
            <p className="mt-1 text-lg text-ceylon-gold-light">{dest.tagline}</p>
          </Container>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ceylon-cream py-12 lg:py-16">
        <Container>
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="prose-ceylon max-w-none">
                {dest.description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="mb-5 text-base leading-relaxed text-ceylon-charcoal/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-semibold text-ceylon-emerald-deep">
                  À ne pas manquer
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {dest.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <Star size={18} className="mt-0.5 shrink-0 text-ceylon-gold" />
                      <span className="text-sm text-ceylon-charcoal/80">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-semibold text-ceylon-emerald-deep">
                  Conseils de terrain
                </h2>
                <ol className="mt-6 space-y-4">
                  {dest.tips.map((tip, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ceylon-gold/10 text-sm font-semibold text-ceylon-gold">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-ceylon-charcoal/70">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Mini gallery */}
              <div className="mt-12">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {dest.images.slice(0, 3).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl"
                    >
                      <Image
                        src={img}
                        alt={`${dest.name} — photo ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="mt-10 lg:mt-0">
              <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-card">
                <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep mb-5">
                  Infos pratiques
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Calendar size={18} className="text-ceylon-gold" />
                    <div>
                      <p className="text-xs text-ceylon-charcoal/50">Meilleure saison</p>
                      <p className="text-sm font-medium text-ceylon-charcoal">{dest.bestSeason}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock size={18} className="text-ceylon-gold" />
                    <div>
                      <p className="text-xs text-ceylon-charcoal/50">Durée recommandée</p>
                      <p className="text-sm font-medium text-ceylon-charcoal">{dest.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Wallet size={18} className="text-ceylon-gold" />
                    <div>
                      <p className="text-xs text-ceylon-charcoal/50">Budget</p>
                      <p className="text-sm font-medium text-ceylon-charcoal">{dest.budget}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin size={18} className="text-ceylon-gold" />
                    <div>
                      <p className="text-xs text-ceylon-charcoal/50">Localisation</p>
                      <p className="text-sm font-medium text-ceylon-charcoal">{dest.location}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {dest.category.map((cat) => (
                    <Badge key={cat} variant={categoryBadgeVariant[cat]}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6">
                  <Button variant="primary" size="md" href="/contact" className="w-full">
                    Demander un devis
                  </Button>
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-lg bg-ceylon-gold/5 p-3">
                  <Lightbulb size={16} className="mt-0.5 shrink-0 text-ceylon-gold" />
                  <p className="text-xs text-ceylon-charcoal/60">
                    Cette destination fait partie de nos circuits{" "}
                    <Link href="/itineraires" className="text-ceylon-emerald underline">
                      itinéraires sur mesure
                    </Link>.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* Nearby destinations */}
          {nearby.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 font-heading text-2xl font-semibold text-ceylon-emerald-deep">
                Destinations proches
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {nearby.map((d) => (
                  <Link
                    key={d!.slug}
                    href={`/destinations/${d!.slug}`}
                    className="group relative overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={d!.heroImage}
                        alt={d!.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="font-heading text-lg font-semibold text-white">
                          {d!.name}
                        </h3>
                        <p className="text-xs text-white/60">{d!.tagline}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
