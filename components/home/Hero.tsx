"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/28838276/pexels-photo-28838276.jpeg?auto=compress&cs=tinysrgb&w=1920&q=85"
        alt="Sigiriya au lever du soleil, Sri Lanka"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/90 via-ceylon-charcoal/20 to-ceylon-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
        {/* Label */}
        <div
          className="mb-6 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="h-px w-8 bg-ceylon-gold" />
          <span className="text-xs font-medium tracking-[0.3em] text-ceylon-gold-light">
            SRI LANKA — OCÉAN INDIEN
          </span>
          <span className="h-px w-8 bg-ceylon-gold" />
        </div>

        {/* Title */}
        <h1
          className="max-w-4xl font-heading font-light text-white transition-all delay-150 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          L&apos;Île{" "}
          <em className="font-heading italic text-ceylon-gold-light">
            Resplendissante
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-4 text-sm tracking-[0.2em] text-white/60 transition-all delay-300 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Temples millénaires · Plages infinies · Nature sauvage
        </p>

        {/* Paragraph */}
        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 transition-all delay-[400ms] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Préparez votre voyage au Sri Lanka avec notre guide interactif : destinations inspirantes, itinéraires sur mesure et conseils de terrain.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col gap-4 sm:flex-row transition-all delay-500 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <Button variant="primary" size="lg" href="/itineraires">
            Planifier mon voyage
          </Button>
          <Button variant="outline-white" size="lg" href="/destinations">
            Explorer les destinations
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 transition-all delay-700 duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase">
          Défiler
        </span>
        <span className="h-8 w-px animate-pulse bg-white/30" />
      </div>
    </section>
  );
}
