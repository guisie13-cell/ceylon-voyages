import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Ceylon Voyages pour préparer votre voyage au Sri Lanka. Devis personnalisé sous 48h, conseils d'experts et itinéraires sur mesure.",
  openGraph: {
    title: "Nous Contacter | Ceylon Voyages",
    description:
      "Une question sur votre voyage au Sri Lanka ? Écrivez-nous et recevez une réponse personnalisée sous 48h.",
    images: [
      {
        url: "https://images.pexels.com/photos/28838276/pexels-photo-28838276.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
