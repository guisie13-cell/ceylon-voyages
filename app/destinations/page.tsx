import type { Metadata } from "next";
import { DestinationsContent } from "@/components/pages/DestinationsContent";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Découvrez les 10 destinations incontournables du Sri Lanka : Sigiriya, Kandy, Galle, Ella, Yala et bien plus. Filtrez par nature, culture, plage, aventure ou safari.",
  openGraph: {
    title: "Destinations Sri Lanka | Ceylon Voyages",
    description:
      "De la forteresse de Sigiriya aux plages de Mirissa — explorez les destinations qui font la richesse du Sri Lanka.",
    images: [
      {
        url: "https://images.pexels.com/photos/6128955/pexels-photo-6128955.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
      },
    ],
  },
};

export default function DestinationsPage() {
  return <DestinationsContent />;
}
