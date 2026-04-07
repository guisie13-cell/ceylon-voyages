"use client";

import { cn } from "@/lib/utils";

const categories = [
  { id: "tout", label: "Tout" },
  { id: "nature", label: "Nature" },
  { id: "culture", label: "Culture" },
  { id: "plage", label: "Plage" },
  { id: "aventure", label: "Aventure" },
  { id: "safari", label: "Safari" },
];

interface CategoryFilterProps {
  active: string;
  onChange: (id: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
            active === cat.id
              ? "bg-ceylon-emerald text-white shadow-md"
              : "bg-white text-ceylon-charcoal/60 hover:bg-ceylon-emerald/5 hover:text-ceylon-emerald"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
