"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileCheck, Sun, Wallet, HeartPulse, Train, Plug, HandHeart, Shield, ChevronDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { practicalInfos } from "@/lib/data/practicalInfo";
import { faqItems } from "@/lib/data/faq";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileCheck,
  Sun,
  Wallet,
  HeartPulse,
  Train,
  Plug,
  HandHeart,
  Shield,
};

export function PratiqueContent() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      {/* Mini hero */}
      <section className="relative aspect-[4/5] sm:aspect-[16/9] max-h-[80vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?w=1920&q=80"
          alt="Temple de Kandy, Sri Lanka"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-ceylon-charcoal/30 to-ceylon-charcoal/10" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-heading text-white">Infos Pratiques</h1>
          <p className="mt-3 max-w-xl text-base text-white/70">
            Tout ce qu&apos;il faut savoir avant de partir au Sri Lanka. Visa,
            budget, santé, transports et plus encore.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-ceylon-cream py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {practicalInfos.map((info) => {
              const Icon = iconMap[info.icon] ?? FileCheck;
              const isOpen = expanded === info.id;

              return (
                <div
                  key={info.id}
                  id={info.id}
                  className="group rounded-2xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover"
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : info.id)}
                    className="flex w-full items-center gap-4 p-6 text-left h-auto sm:h-[156px]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ceylon-emerald/10">
                      <Icon size={22} className="text-ceylon-emerald" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep leading-snug">
                        {info.title}
                      </h3>
                      <p className="mt-1 text-xs text-ceylon-charcoal/50">
                        {info.summary}
                      </p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "mt-1 shrink-0 text-ceylon-gold transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6">
                        <div className="border-t border-ceylon-sand pt-4">
                          {info.content.split("\n\n").map((p, i) => (
                            <p
                              key={i}
                              className="mb-3 text-sm leading-relaxed text-ceylon-charcoal/70 whitespace-pre-line"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Season chart */}
      <section id="quand-partir" className="bg-ceylon-sand py-12 lg:py-16">
        <Container>
          <SectionHeader
            title="Quand partir ?"
            subtitle="Le Sri Lanka se visite toute l'année — il suffit de choisir la bonne côte."
          />
          <div className="mx-auto max-w-3xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ceylon-emerald/10">
                  <th className="py-3 pr-4 text-left font-medium text-ceylon-charcoal/50">
                    Région
                  </th>
                  {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map(
                    (m, i) => (
                      <th
                        key={i}
                        className="px-1.5 py-3 text-center font-medium text-ceylon-charcoal/50"
                      >
                        {m}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    region: "Côte ouest & sud",
                    months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                  },
                  {
                    region: "Côte est",
                    months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                  },
                  {
                    region: "Triangle culturel",
                    months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                  },
                  {
                    region: "Montagnes",
                    months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                  },
                ].map((row) => (
                  <tr
                    key={row.region}
                    className="border-b border-ceylon-emerald/5"
                  >
                    <td className="py-3 pr-4 text-sm font-medium text-ceylon-charcoal/80 whitespace-nowrap">
                      {row.region}
                    </td>
                    {row.months.map((ok, i) => (
                      <td key={i} className="px-1.5 py-3 text-center">
                        <div
                          className={cn(
                            "mx-auto h-5 w-5 rounded-full",
                            ok
                              ? "bg-ceylon-emerald"
                              : "bg-ceylon-charcoal/10"
                          )}
                          title={ok ? "Bonne période" : "Mousson"}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex items-center gap-4 text-xs text-ceylon-charcoal/50">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-ceylon-emerald" /> Bonne période
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-ceylon-charcoal/10" /> Mousson
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-ceylon-cream py-12 lg:py-16">
        <Container>
          <SectionHeader
            title="Questions fréquentes"
            subtitle="Les réponses aux questions que tout voyageur se pose avant de partir."
          />
          <div className="mx-auto max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
