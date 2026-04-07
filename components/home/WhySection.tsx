"use client";

import { useRef, useState, useEffect } from "react";
import { Leaf, Landmark, UtensilsCrossed, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const reasons = [
  {
    icon: Leaf,
    title: "Nature Époustouflante",
    description:
      "Des forêts tropicales aux récifs coralliens, des plantations de thé aux parcs nationaux : une biodiversité inouïe concentrée sur une île de la taille de l'Irlande.",
  },
  {
    icon: Landmark,
    title: "Culture Millénaire",
    description:
      "Huit sites UNESCO, des fresques du Ve siècle, des temples bouddhistes et hindous vivants, et 2 500 ans d'histoire ininterrompue à explorer.",
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomie Épicée",
    description:
      "Curries parfumés à la noix de coco, hoppers croustillants, street food savoureuse et le meilleur thé au monde, cultivé dans les brumes des montagnes.",
  },
  {
    icon: Heart,
    title: "Hospitalité Légendaire",
    description:
      "Un accueil chaleureux à chaque étape, des sourires sincères et une générosité naturelle qui transforment un voyage en une expérience profondément humaine.",
  },
];

export function WhySection() {
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
          title="Un monde entier sur une seule île"
          subtitle="Le Sri Lanka concentre une diversité extraordinaire de paysages, de cultures et d'expériences sur un territoire compact et facile à parcourir."
        />

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Card
              key={reason.title}
              className="p-6 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 100}ms`,
              } as React.CSSProperties}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ceylon-emerald/10">
                <reason.icon size={28} className="text-ceylon-emerald" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ceylon-emerald-deep">
                {reason.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ceylon-charcoal/70">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
