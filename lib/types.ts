export type Category = "nature" | "culture" | "plage" | "aventure" | "safari";

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  category: Category[];
  heroImage: string;
  heroPosition?: string;
  images: string[];
  description: string;
  highlights: string[];
  bestSeason: string;
  duration: string;
  budget: string;
  location: string;
  tips: string[];
  nearbyDestinations: string[];
}

export interface DayPlan {
  day: number;
  title: string;
  location: string;
  description: string;
  tags: string[];
}

export interface Itinerary {
  slug: string;
  title: string;
  duration: number;
  subtitle: string;
  description: string;
  forWho: string;
  rhythm: string;
  budgetRange: string;
  days: DayPlan[];
  includes: string[];
  excludes: string[];
}

export interface PracticalInfo {
  id: string;
  icon: string;
  title: string;
  summary: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  city: string;
  duration: string;
  rating: number;
}

export type TravelStyle = "backpacker" | "comfort" | "luxury";

export interface BudgetRates {
  accommodation: Record<TravelStyle, number>;
  food: Record<TravelStyle, number>;
  transport: Record<TravelStyle, number>;
}

export interface Activity {
  id: string;
  label: string;
  price: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: "nature" | "temples" | "plages" | "vie-locale" | "gastronomie" | "faune";
  location: string;
}
