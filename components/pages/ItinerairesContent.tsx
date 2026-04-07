"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Users, TrendingUp, Wallet, Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RouteMap } from "@/components/itineraires/RouteMap";
import { itineraries } from "@/lib/data/itineraries";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export function ItinerairesContent() {
  const [activeTab, setActiveTab] = useState(0);
  const it = itineraries[activeTab];

  return (
    <>
      {/* Mini hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/4769075/pexels-photo-4769075.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Nine Arches Bridge, Ella, Sri Lanka"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-ceylon-charcoal/30 to-ceylon-charcoal/10" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-heading text-white">Itinéraires</h1>
          <p className="mt-3 max-w-xl text-base text-white/70">
            Trois circuits pensés pour différents rythmes et budgets, du voyage
            express à l&apos;immersion totale.
          </p>
        </div>
      </section>

      <section className="bg-ceylon-cream py-12 lg:py-16">
        <Container>
          {/* Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {itineraries.map((tab, i) => (
              <button
                key={tab.slug}
                type="button"
                onClick={() => setActiveTab(i)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300",
                  activeTab === i
                    ? "bg-ceylon-emerald text-white shadow-md"
                    : "bg-white text-ceylon-charcoal/60 hover:bg-ceylon-emerald/5 hover:text-ceylon-emerald"
                )}
              >
                {tab.title} ({tab.duration}j)
              </button>
            ))}
          </div>

          {/* Summary bar */}
          <div className="mb-10 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-card sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-ceylon-gold" />
              <div>
                <p className="text-xs text-ceylon-charcoal/50">Durée</p>
                <p className="text-sm font-semibold">{it.duration} jours</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp size={20} className="text-ceylon-gold" />
              <div>
                <p className="text-xs text-ceylon-charcoal/50">Rythme</p>
                <p className="text-sm font-semibold">{it.rhythm}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users size={20} className="text-ceylon-gold" />
              <div>
                <p className="text-xs text-ceylon-charcoal/50">Pour qui</p>
                <p className="text-sm font-semibold">{it.forWho}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wallet size={20} className="text-ceylon-gold" />
              <div>
                <p className="text-xs text-ceylon-charcoal/50">Budget</p>
                <p className="text-sm font-semibold">{it.budgetRange}</p>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Map */}
            <div className="mb-10 lg:mb-0 lg:col-span-1">
              <div className="sticky top-24">
                <RouteMap itinerarySlug={it.slug} />
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 h-full w-px bg-ceylon-emerald/20 sm:left-6" />

                <div className="space-y-8">
                  {it.days.map((day) => (
                    <div key={day.day} className="relative flex gap-5 sm:gap-6">
                      {/* Day circle */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ceylon-emerald text-sm font-bold text-white shadow-md sm:h-12 sm:w-12">
                        J{day.day}
                      </div>

                      {/* Content */}
                      <div className="flex-1 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-card">
                        <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep">
                          {day.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-ceylon-charcoal/50">
                          {day.location}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-ceylon-charcoal/70">
                          {day.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {day.tags.map((tag) => (
                            <Badge key={tag} variant="default">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes / Excludes */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-ceylon-emerald/5 p-6">
                  <h3 className="mb-4 font-heading text-lg font-semibold text-ceylon-emerald-deep">
                    Ce circuit inclut
                  </h3>
                  <ul className="space-y-2.5">
                    {it.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ceylon-charcoal/70">
                        <Check size={16} className="mt-0.5 shrink-0 text-ceylon-emerald" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-ceylon-coral/5 p-6">
                  <h3 className="mb-4 font-heading text-lg font-semibold text-ceylon-coral">
                    Non inclus
                  </h3>
                  <ul className="space-y-2.5">
                    {it.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ceylon-charcoal/70">
                        <X size={16} className="mt-0.5 shrink-0 text-ceylon-coral" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <Button variant="primary" size="lg" href="/contact">
                  Demander un devis personnalisé
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
