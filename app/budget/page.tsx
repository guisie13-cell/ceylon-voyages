import type { Metadata } from "next";
import { BudgetContent } from "@/components/pages/BudgetContent";

export const metadata: Metadata = {
  title: "Calculateur de Budget",
  description:
    "Estimez le budget de votre voyage au Sri Lanka en quelques clics : hébergement, repas, transports et activités selon votre style et la durée de votre séjour.",
  openGraph: {
    title: "Calculateur de Budget Sri Lanka | Ceylon Voyages",
    description:
      "Outil interactif pour estimer le coût de votre voyage au Sri Lanka selon votre style, durée et activités choisies.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
      },
    ],
  },
};

export default function BudgetPage() {
  return <BudgetContent />;
}
