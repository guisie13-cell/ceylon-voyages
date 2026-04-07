"use client";

import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="bg-ceylon-sand py-20 lg:py-28">
      <Container>
        <SectionHeader
          title="Ce qu'ils en disent"
          subtitle="Des voyageurs francophones partagent leur expérience au Sri Lanka."
        />

        <div className="mx-auto max-w-3xl text-center">
          {/* Stars */}
          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-ceylon-gold text-ceylon-gold"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="relative">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-heading text-6xl text-ceylon-gold/20">
              &ldquo;
            </span>
            <p className="font-heading text-lg leading-relaxed text-ceylon-charcoal/90 font-medium sm:text-xl lg:text-2xl">
              {t.quote}
            </p>
          </blockquote>

          {/* Author */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ceylon-emerald text-lg font-semibold text-white">
              {t.name[0]}
            </div>
            <div>
              <p className="font-medium text-ceylon-charcoal">{t.name}</p>
              <p className="text-sm text-ceylon-charcoal/50">
                {t.city} — {t.duration}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current
                    ? "w-8 bg-ceylon-gold"
                    : "w-2 bg-ceylon-charcoal/15 hover:bg-ceylon-charcoal/30"
                )}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
