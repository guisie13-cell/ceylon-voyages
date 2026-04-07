import type { Metadata } from "next";
import { PratiqueContent } from "@/components/pages/PratiqueContent";

export const metadata: Metadata = {
  title: "Infos Pratiques",
  description:
    "Tout savoir avant de partir au Sri Lanka : visa ETA, budget, vaccins, transports, décalage horaire, monnaie, sécurité et quand partir. Guide complet et FAQ.",
  openGraph: {
    title: "Infos Pratiques Sri Lanka | Ceylon Voyages",
    description:
      "Visa, budget, santé, transports, étiquette et sécurité — le guide pratique complet pour préparer votre voyage au Sri Lanka.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?w=1200&q=80",
      },
    ],
  },
};

export default function PratiquePage() {
  return <PratiqueContent />;
}
