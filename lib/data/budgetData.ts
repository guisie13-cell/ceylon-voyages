import type { BudgetRates, Activity, TravelStyle } from "@/lib/types";

export const budgetRates: BudgetRates = {
  accommodation: {
    backpacker: 15,
    comfort: 50,
    luxury: 150,
  },
  food: {
    backpacker: 8,
    comfort: 20,
    luxury: 50,
  },
  transport: {
    backpacker: 5,
    comfort: 15,
    luxury: 40,
  },
};

export const activities: Activity[] = [
  { id: "sigiriya", label: "Sigiriya (entrée)", price: 25 },
  { id: "yala-safari", label: "Safari Yala (demi-journée)", price: 35 },
  { id: "whale-watching", label: "Observation des baleines", price: 40 },
  { id: "cooking-class", label: "Cours de cuisine", price: 25 },
  { id: "surf-lesson", label: "Cours de surf", price: 20 },
  { id: "train-first-class", label: "Train 1ère classe Kandy-Ella", price: 8 },
  { id: "udawalawe-safari", label: "Safari Udawalawe", price: 30 },
  { id: "pigeon-island", label: "Excursion Pigeon Island", price: 20 },
  { id: "knuckles-trek", label: "Trek Knuckles Range", price: 35 },
  { id: "diving", label: "Plongée sous-marine", price: 45 },
];

export const miscDailyRate: Record<TravelStyle, number> = {
  backpacker: 3,
  comfort: 8,
  luxury: 20,
};

export const travelStyleLabels: Record<TravelStyle, { label: string; description: string }> = {
  backpacker: {
    label: "Backpacker",
    description: "Guesthouses, street food, transports publics",
  },
  comfort: {
    label: "Confort",
    description: "Hôtels 3-4*, restaurants variés, chauffeur",
  },
  luxury: {
    label: "Luxe",
    description: "Hôtels 5*, gastronomie, guide privé",
  },
};
