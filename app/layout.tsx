import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ceylon Voyages — Guide Premium du Sri Lanka",
    template: "%s | Ceylon Voyages",
  },
  description:
    "Découvrez le Sri Lanka : destinations, itinéraires sur mesure, infos pratiques et calculateur de budget. Le guide interactif pour préparer votre voyage sur l'île resplendissante.",
  keywords: [
    "Sri Lanka",
    "voyage",
    "guide",
    "itinéraire",
    "destinations",
    "Ceylan",
    "budget",
    "infos pratiques",
  ],
  openGraph: {
    title: "Ceylon Voyages — Guide Premium du Sri Lanka",
    description:
      "Le guide interactif pour préparer votre voyage au Sri Lanka. Destinations, itinéraires, budget et infos pratiques.",
    locale: "fr_FR",
    type: "website",
    siteName: "Ceylon Voyages",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
