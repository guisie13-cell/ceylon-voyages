import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Destination, Category } from "@/lib/types";

const categoryBadgeVariant: Record<Category, "nature" | "culture" | "plage" | "aventure" | "safari"> = {
  nature: "nature",
  culture: "culture",
  plage: "plage",
  aventure: "aventure",
  safari: "safari",
};

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative overflow-hidden rounded-2xl shadow-card transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          style={{ objectPosition: destination.heroPosition ?? "center center" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-ceylon-charcoal/10 to-transparent transition-colors group-hover:from-ceylon-charcoal/50" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {destination.category.map((cat) => (
              <Badge key={cat} variant={categoryBadgeVariant[cat]}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Badge>
            ))}
          </div>
          <h3 className="font-heading text-xl font-semibold text-white">
            {destination.name}
          </h3>
          <p className="mt-0.5 text-sm text-white/60">
            {destination.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}
