"use client";

import { useRef, useState, useEffect } from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { itineraries } from "@/lib/data/itineraries";

export function ItineraryPreview() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ceylon-cream py-20 lg:py-28">
      <Container>
        <SectionHeader
          title="Itinéraires sur mesure"
          subtitle="Trois circuits pensés pour différents rythmes et budgets, du voyage express à l'immersion totale."
        />

        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {itineraries.map((it, i) => {
            const keyStops = it.days
              .filter((_, idx) => idx % Math.ceil(it.days.length / 5) === 0)
              .map((d) => d.location.split(" → ")[0].split(" / ")[0]);

            return (
              <Card
                key={it.slug}
                className="flex flex-col p-6 lg:p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${i * 120}ms`,
                } as React.CSSProperties}
              >
                {/* Duration badge */}
                <div className="mb-4 flex items-center gap-2 text-ceylon-gold">
                  <Clock size={18} />
                  <span className="text-sm font-semibold">
                    {it.duration} jours
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-semibold text-ceylon-emerald-deep">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ceylon-charcoal/60">
                  {it.subtitle}
                </p>

                {/* Key stops */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {keyStops.map((stop) => (
                    <Badge key={stop} variant="default">
                      <MapPin size={12} className="mr-1" />
                      {stop}
                    </Badge>
                  ))}
                </div>

                {/* Budget */}
                <p className="mt-5 text-sm text-ceylon-charcoal/50">
                  À partir de{" "}
                  <span className="font-semibold text-ceylon-emerald">
                    {it.budgetRange}
                  </span>
                </p>

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    href="/itineraires"
                    className="group w-full justify-between"
                  >
                    Voir le détail
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
