"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { destinations } from "@/lib/data/destinations";
import type { Category } from "@/lib/types";

const featured = destinations[0];
const others = destinations.slice(1, 6);

const categoryBadgeVariant: Record<Category, "nature" | "culture" | "plage" | "aventure" | "safari"> = {
  nature: "nature",
  culture: "culture",
  plage: "plage",
  aventure: "aventure",
  safari: "safari",
};

export function DestinationGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ceylon-sand py-20 lg:py-28">
      <Container>
        <SectionHeader
          title="Destinations incontournables"
          subtitle="De la forteresse de Sigiriya aux plages de Mirissa, chaque destination révèle une facette unique de l'île."
        />

        <div
          ref={ref}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Featured card - spans 2 cols */}
          <Link
            href={`/destinations/${featured.slug}`}
            className="group relative col-span-1 overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[500px]">
              <Image
                src={featured.heroImage}
                alt={featured.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <div className="mb-3 flex gap-2">
                  {featured.category.map((cat) => (
                    <Badge key={cat} variant={categoryBadgeVariant[cat]}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white lg:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  {featured.tagline}
                </p>
              </div>
            </div>
          </Link>

          {/* Other cards */}
          {others.map((dest, i) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${(i + 1) * 80}ms`,
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={dest.heroImage}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-transparent to-transparent transition-colors group-hover:from-ceylon-charcoal/50" />
                <div className="absolute bottom-0 left-0 p-5">
                  <Badge variant={categoryBadgeVariant[dest.category[0]]}>
                    {dest.category[0].charAt(0).toUpperCase() +
                      dest.category[0].slice(1)}
                  </Badge>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-white">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-white/60">{dest.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-10 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-medium text-ceylon-emerald transition-colors hover:text-ceylon-gold"
          >
            Toutes les destinations
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
