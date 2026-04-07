"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Users, Calendar, Backpack, Hotel, UtensilsCrossed, Bus, Ticket, ShoppingBag, Download,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  budgetRates,
  activities,
  miscDailyRate,
  travelStyleLabels,
} from "@/lib/data/budgetData";
import type { TravelStyle } from "@/lib/types";

const durations = [7, 14, 21];

export function BudgetContent() {
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(14);
  const [style, setStyle] = useState<TravelStyle>("comfort");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const budget = useMemo(() => {
    const accommodation = budgetRates.accommodation[style] * days * travelers;
    const food = budgetRates.food[style] * days * travelers;
    const transport = budgetRates.transport[style] * days;
    const activitiesTotal = selectedActivities.reduce((sum, id) => {
      const act = activities.find((a) => a.id === id);
      return sum + (act ? act.price * travelers : 0);
    }, 0);
    const misc = miscDailyRate[style] * days * travelers;
    const total = accommodation + food + transport + activitiesTotal + misc;
    const perDay = Math.round(total / days);

    return { accommodation, food, transport, activities: activitiesTotal, misc, total, perDay };
  }, [travelers, days, style, selectedActivities]);

  const maxCategory = Math.max(
    budget.accommodation,
    budget.food,
    budget.transport,
    budget.activities,
    budget.misc
  );

  const categories = [
    { label: "Hébergement", value: budget.accommodation, icon: Hotel, color: "bg-ceylon-emerald" },
    { label: "Repas", value: budget.food, icon: UtensilsCrossed, color: "bg-ceylon-teal" },
    { label: "Transport", value: budget.transport, icon: Bus, color: "bg-ceylon-ocean" },
    { label: "Activités", value: budget.activities, icon: Ticket, color: "bg-ceylon-gold" },
    { label: "Divers", value: budget.misc, icon: ShoppingBag, color: "bg-ceylon-coral" },
  ];

  return (
    <>
      {/* Mini hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Marché coloré au Sri Lanka"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-ceylon-charcoal/30 to-ceylon-charcoal/10" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-heading text-white">Calculateur de Budget</h1>
          <p className="mt-3 max-w-xl text-base text-white/70">
            Estimez le budget de votre voyage au Sri Lanka en quelques clics.
          </p>
        </div>
      </section>

      <section className="bg-ceylon-cream py-12 lg:py-16">
        <Container>
          <div className="lg:grid lg:grid-cols-5 lg:gap-10">
            {/* Controls */}
            <div className="lg:col-span-3 space-y-8">
              {/* Travelers */}
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={20} className="text-ceylon-gold" />
                  <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep">
                    Voyageurs
                  </h3>
                </div>
                <input
                  type="range"
                  min={1}
                  max={6}
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full accent-ceylon-gold"
                />
                <p className="mt-2 text-center text-2xl font-semibold text-ceylon-emerald">
                  {travelers} {travelers === 1 ? "voyageur" : "voyageurs"}
                </p>
              </div>

              {/* Duration */}
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={20} className="text-ceylon-gold" />
                  <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep">
                    Durée
                  </h3>
                </div>
                <div className="flex gap-3">
                  {durations.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={cn(
                        "flex-1 rounded-xl py-3 text-sm font-medium transition-all",
                        days === d
                          ? "bg-ceylon-emerald text-white shadow-md"
                          : "bg-ceylon-sand text-ceylon-charcoal/60 hover:bg-ceylon-emerald/5"
                      )}
                    >
                      {d} jours
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="text-xs text-ceylon-charcoal/50">
                    Ou personnalisé :
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={days}
                    onChange={(e) => setDays(Math.max(1, Math.min(60, Number(e.target.value))))}
                    className="ml-2 w-20 rounded-lg border border-ceylon-emerald/20 px-3 py-1.5 text-sm focus:border-ceylon-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Style */}
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Backpack size={20} className="text-ceylon-gold" />
                  <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep">
                    Style de voyage
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {(Object.keys(travelStyleLabels) as TravelStyle[]).map(
                    (key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setStyle(key)}
                        className={cn(
                          "rounded-xl p-4 text-left transition-all",
                          style === key
                            ? "bg-ceylon-emerald text-white shadow-md"
                            : "bg-ceylon-sand text-ceylon-charcoal/70 hover:bg-ceylon-emerald/5"
                        )}
                      >
                        <p className="font-semibold text-sm">
                          {travelStyleLabels[key].label}
                        </p>
                        <p
                          className={cn(
                            "mt-1 text-xs",
                            style === key
                              ? "text-white/70"
                              : "text-ceylon-charcoal/50"
                          )}
                        >
                          {travelStyleLabels[key].description}
                        </p>
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Activities */}
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Ticket size={20} className="text-ceylon-gold" />
                  <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep">
                    Activités optionnelles
                  </h3>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {activities.map((act) => (
                    <button
                      key={act.id}
                      type="button"
                      onClick={() => toggleActivity(act.id)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all",
                        selectedActivities.includes(act.id)
                          ? "bg-ceylon-gold/10 text-ceylon-gold ring-1 ring-ceylon-gold/30"
                          : "bg-ceylon-sand text-ceylon-charcoal/60 hover:bg-ceylon-gold/5"
                      )}
                    >
                      <span>{act.label}</span>
                      <span className="font-semibold">{act.price}€</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 lg:col-span-2 lg:mt-0">
              <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-card">
                <h3 className="font-heading text-xl font-semibold text-ceylon-emerald-deep mb-6">
                  Estimation du budget
                </h3>

                {/* Total */}
                <div className="mb-6 rounded-xl bg-ceylon-emerald/5 p-5 text-center">
                  <p className="text-sm text-ceylon-charcoal/50">Budget total estimé</p>
                  <p className="mt-1 font-heading text-4xl font-semibold text-ceylon-emerald">
                    {budget.total.toLocaleString("fr-FR")} €
                  </p>
                  <p className="mt-1 text-sm text-ceylon-charcoal/50">
                    soit ~{budget.perDay.toLocaleString("fr-FR")} €/jour
                  </p>
                </div>

                {/* Breakdown bars */}
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <div key={cat.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <cat.icon size={14} className="text-ceylon-charcoal/40" />
                          <span className="text-sm text-ceylon-charcoal/70">
                            {cat.label}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-ceylon-charcoal">
                          {cat.value.toLocaleString("fr-FR")} €
                        </span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-ceylon-sand">
                        <div
                          className={cn("h-full rounded-full transition-all duration-500", cat.color)}
                          style={{
                            width: maxCategory > 0 ? `${(cat.value / maxCategory) * 100}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Copy summary */}
                <button
                  type="button"
                  onClick={() => {
                    const text = `Budget Sri Lanka — ${travelers} voyageur(s), ${days} jours, style ${travelStyleLabels[style].label}\n\nHébergement: ${budget.accommodation}€\nRepas: ${budget.food}€\nTransport: ${budget.transport}€\nActivités: ${budget.activities}€\nDivers: ${budget.misc}€\n\nTotal: ${budget.total}€ (~${budget.perDay}€/jour)`;
                    navigator.clipboard.writeText(text);
                  }}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ceylon-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ceylon-gold-light"
                >
                  <Download size={16} />
                  Copier mon estimation
                </button>

                <p className="mt-4 text-center text-[10px] text-ceylon-charcoal/40">
                  Estimation indicative basée sur les prix moyens 2024-2025
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
