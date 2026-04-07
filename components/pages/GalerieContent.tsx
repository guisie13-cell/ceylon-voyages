"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/ui/Lightbox";
import { galleryImages, galleryCategories } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

export function GalerieContent() {
  const [filter, setFilter] = useState("tout");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "tout"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter]
  );

  return (
    <>
      {/* Mini hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1920&q=80"
          alt="Plage tropicale au Sri Lanka"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-ceylon-charcoal/30 to-ceylon-charcoal/10" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-heading text-white">Galerie</h1>
          <p className="mt-3 max-w-xl text-base text-white/70">
            Laissez-vous inspirer par les paysages, la culture et la vie
            quotidienne du Sri Lanka.
          </p>
        </div>
      </section>

      <section className="bg-ceylon-cream py-12 lg:py-16">
        <Container>
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  filter === cat.id
                    ? "bg-ceylon-emerald text-white shadow-md"
                    : "bg-white text-ceylon-charcoal/60 hover:bg-ceylon-emerald/5 hover:text-ceylon-emerald"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filtered.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid"
              >
                <div className="relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400 + (i % 3) * 100}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-ceylon-charcoal/0 transition-colors duration-300 group-hover:bg-ceylon-charcoal/20" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-xs font-medium text-white drop-shadow-lg">
                      {img.alt}
                    </p>
                    <p className="text-[10px] text-white/70">{img.location}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + filtered.length) % filtered.length
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % filtered.length)
          }
        />
      )}
    </>
  );
}
