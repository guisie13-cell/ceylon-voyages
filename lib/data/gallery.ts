import type { GalleryImage } from "@/lib/types";

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&q=80`;

export const galleryImages: GalleryImage[] = [
  {
    src: pexels(28838276),
    alt: "Sigiriya au lever du soleil, forteresse du Lion",
    category: "temples",
    location: "Sigiriya",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Plage tropicale aux eaux turquoise",
    category: "plages",
    location: "Trincomalee",
  },
  {
    src: pexels(6128955),
    alt: "Plantations de thé en terrasses dans les montagnes",
    category: "nature",
    location: "Nuwara Eliya",
  },
  {
    src: pexels(14041994),
    alt: "Temple de la Dent Sacrée à Kandy",
    category: "temples",
    location: "Kandy",
  },
  {
    src: pexels(1005417),
    alt: "Plage de Mirissa bordée de cocotiers",
    category: "plages",
    location: "Mirissa",
  },
  {
    src: pexels(27037675),
    alt: "Léopard du Sri Lanka dans le parc de Yala",
    category: "faune",
    location: "Yala",
  },
  {
    src: pexels(4769075),
    alt: "Nine Arches Bridge à Ella dans la brume",
    category: "nature",
    location: "Ella",
  },
  {
    src: pexels(31194790),
    alt: "Fort de Galle — rue coloniale hollandaise",
    category: "temples",
    location: "Galle",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    alt: "Pêcheurs sur échasses au coucher du soleil",
    category: "vie-locale",
    location: "Weligama",
  },
  {
    src: pexels(13010771),
    alt: "Tortue de mer dans les eaux de Pigeon Island",
    category: "plages",
    location: "Nilaveli",
  },
  {
    src: pexels(86413),
    alt: "Éléphants sauvages dans leur habitat naturel",
    category: "faune",
    location: "Udawalawe",
  },
  {
    src: pexels(122253),
    alt: "Dagoba blanc de Ruwanwelisaya",
    category: "temples",
    location: "Anuradhapura",
  },
  {
    src: pexels(13764965),
    alt: "Bouddhas taillés dans le granit — Gal Vihara",
    category: "temples",
    location: "Polonnaruwa",
  },
  {
    src: pexels(27907358),
    alt: "Éléphant paré lors de l'Esala Perahera de Kandy",
    category: "vie-locale",
    location: "Kandy",
  },
  {
    src: pexels(29644514),
    alt: "Vue aérienne de la plage de Mirissa",
    category: "plages",
    location: "Mirissa",
  },
  {
    src: pexels(4696771),
    alt: "Baleine bleue dans les profondeurs de l'océan",
    category: "faune",
    location: "Mirissa",
  },
  {
    src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&q=80",
    alt: "Curry sri-lankais traditionnel servi sur feuille de bananier",
    category: "gastronomie",
    location: "Colombo",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    alt: "Cueillette du thé dans les plantations",
    category: "vie-locale",
    location: "Nuwara Eliya",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    alt: "Épices colorées sur un étal de marché",
    category: "gastronomie",
    location: "Kandy",
  },
  {
    src: pexels(2403209),
    alt: "Train bleu traversant les montagnes et la jungle",
    category: "vie-locale",
    location: "Ella",
  },
  {
    src: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&q=80",
    alt: "Rizières en terrasses verdoyantes",
    category: "nature",
    location: "Kandy",
  },
  {
    src: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80",
    alt: "Préparation du kottu roti dans un restaurant local",
    category: "gastronomie",
    location: "Galle",
  },
];

export const galleryCategories = [
  { id: "tout", label: "Tout" },
  { id: "nature", label: "Nature" },
  { id: "temples", label: "Temples" },
  { id: "plages", label: "Plages" },
  { id: "vie-locale", label: "Vie locale" },
  { id: "gastronomie", label: "Gastronomie" },
  { id: "faune", label: "Faune" },
] as const;
