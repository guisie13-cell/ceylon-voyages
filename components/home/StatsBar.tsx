"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 8, suffix: "", label: "Sites UNESCO" },
  { value: 1340, suffix: " km", label: "de côtes" },
  { value: 15, suffix: "", label: "Parcs nationaux" },
  { value: 2500, suffix: "+", label: "Ans d'histoire" },
];

function AnimatedNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCurrent(start);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [active, target]);

  return (
    <span className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
      {current.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export function StatsBar() {
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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-ceylon-emerald-deep grain-texture"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:py-16">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 text-center"
          >
            <AnimatedNumber
              target={stat.value}
              suffix={stat.suffix}
              active={visible}
            />
            <span className="text-sm text-white/50">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
