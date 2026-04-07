import type { Metadata } from "next";
import { ItinerairesContent } from "@/components/pages/ItinerairesContent";

export const metadata: Metadata = {
  title: "Itinéraires",
  description:
    "Trois circuits sur mesure pour visiter le Sri Lanka : 7 jours L'Essentiel, 14 jours Le Classique, 21 jours Le Grand Tour. Programmes jour par jour, budgets et conseils.",
  openGraph: {
    title: "Itinéraires Sri Lanka | Ceylon Voyages",
    description:
      "7, 14 ou 21 jours au Sri Lanka — trois circuits pensés pour différents rythmes et budgets.",
    images: [
      {
        url: "https://images.pexels.com/photos/4769075/pexels-photo-4769075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
      },
    ],
  },
};

export default function ItinerairesPage() {
  return <ItinerairesContent />;
}
