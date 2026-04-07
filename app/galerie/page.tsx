import type { Metadata } from "next";
import { GalerieContent } from "@/components/pages/GalerieContent";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galerie photo du Sri Lanka : nature, temples, plages, vie locale, gastronomie et faune sauvage. Plus de 20 photos pour s'inspirer avant votre voyage.",
  openGraph: {
    title: "Galerie Sri Lanka | Ceylon Voyages",
    description:
      "Les plus belles photos du Sri Lanka — temples, plages, nature et vie locale pour vous donner envie de partir.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80",
      },
    ],
  },
};

export default function GaleriePage() {
  return <GalerieContent />;
}
