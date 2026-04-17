"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CategoryFilter } from "@/components/destinations/CategoryFilter";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { destinations } from "@/lib/data/destinations";
import type { Category } from "@/lib/types";

export function DestinationsContent() {
  const [filter, setFilter] = useState("tout");

  const filtered =
    filter === "tout"
      ? destinations
      : destinations.filter((d) => d.category.includes(filter as Category));

  return (
    <>
      <section className="relative aspect-[4/5] sm:aspect-[16/9] max-h-[80vh] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/6128955/pexels-photo-6128955.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Plantations de thé du Sri Lanka"
          style={{ objectPosition: "center 60%" }}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-ceylon-charcoal/30 to-ceylon-charcoal/10" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-heading text-white">Destinations</h1>
          <p className="mt-3 max-w-xl text-base text-white/70">
            De la forteresse de Sigiriya aux plages de Mirissa, explorez les
            lieux qui font la richesse du Sri Lanka.
          </p>
        </div>
      </section>

      <section className="bg-ceylon-cream py-12 lg:py-16">
        <Container>
          <div className="mb-10">
            <CategoryFilter active={filter} onChange={setFilter} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-ceylon-charcoal/50">
              Aucune destination trouvée pour cette catégorie.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
