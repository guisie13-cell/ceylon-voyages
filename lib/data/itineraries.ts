import type { Itinerary } from "@/lib/types";

export const itineraries: Itinerary[] = [
  {
    slug: "essentiel-7-jours",
    title: "L'Essentiel",
    duration: 7,
    subtitle: "Les incontournables en une semaine",
    description:
      "Un concentré du meilleur du Sri Lanka pour ceux qui ont peu de temps. Ce circuit relie les sites majeurs du Triangle culturel aux montagnes et à la côte sud, avec un rythme soutenu mais sans précipitation.",
    forWho: "Voyageurs avec peu de temps, première visite au Sri Lanka",
    rhythm: "Dynamique — un nouveau lieu chaque jour",
    budgetRange: "800 – 1 200 € par personne",
    days: [
      {
        day: 1,
        title: "Arrivée à Colombo & Negombo",
        location: "Colombo / Negombo",
        description:
          "Arrivée à l'aéroport de Bandaranaike. Transfert vers Negombo, ville balnéaire animée à 10 minutes de l'aéroport. Balade sur la plage, découverte du marché aux poissons si arrivée matinale, et premier dîner de fruits de mer face à l'océan. Repos pour récupérer du décalage horaire.",
        tags: ["Arrivée", "Plage", "Fruits de mer"],
      },
      {
        day: 2,
        title: "Dambulla & Sigiriya",
        location: "Triangle culturel",
        description:
          "Route vers le centre de l'île (4h). Visite du temple d'or de Dambulla et ses cinq grottes ornées de fresques bouddhistes. Après-midi, ascension de Sigiriya ou de Pidurangala Rock pour un coucher de soleil mémorable sur la forteresse du Lion.",
        tags: ["UNESCO", "Temple", "Randonnée"],
      },
      {
        day: 3,
        title: "Kandy — Cœur culturel",
        location: "Kandy",
        description:
          "Matinée de route vers Kandy en traversant un jardin d'épices. Visite du Temple de la Dent Sacrée et cérémonie du soir (puja). Promenade autour du lac de Kandy et spectacle de danses traditionnelles kandiennes en soirée.",
        tags: ["UNESCO", "Temple", "Culture"],
      },
      {
        day: 4,
        title: "Train panoramique vers Ella",
        location: "Kandy → Ella",
        description:
          "Le trajet en train le plus spectaculaire d'Asie : 7 heures à travers plantations de thé, montagnes brumeuses et villages perchés. Arrivée à Ella en fin d'après-midi. Installation et premier dîner dans ce village de montagne cosmopolite.",
        tags: ["Train", "Panorama", "Montagne"],
      },
      {
        day: 5,
        title: "Randonnées à Ella",
        location: "Ella",
        description:
          "Lever de soleil au Little Adam's Peak (1h de marche facile). Visite du Nine Arches Bridge quand le train passe. Après-midi libre : baignade aux Ravana Falls, visite d'une plantation de thé ou repos dans un café avec vue sur la vallée.",
        tags: ["Randonnée", "Nature", "Cascades"],
      },
      {
        day: 6,
        title: "Galle — Fort colonial",
        location: "Galle",
        description:
          "Route vers la côte sud (4h) à travers les plantations. Découverte du fort de Galle classé UNESCO : remparts face à l'océan, ruelles pavées, boutiques de créateurs. Coucher de soleil depuis le phare. Dîner de fruits de mer dans le fort.",
        tags: ["UNESCO", "Colonial", "Plage"],
      },
      {
        day: 7,
        title: "Côte sud & retour",
        location: "Galle → Colombo",
        description:
          "Matinée libre pour profiter de la plage d'Unawatuna ou dernières emplettes dans le fort. Retour vers l'aéroport par l'autoroute du sud (2h30). Derniers achats de thé et d'épices en route.",
        tags: ["Plage", "Shopping", "Départ"],
      },
    ],
    includes: [
      "Hébergement en hôtel 3*/boutique",
      "Petit-déjeuner quotidien",
      "Transferts en véhicule privé climatisé",
      "Chauffeur-guide francophone",
      "Billets de train Kandy-Ella (2e classe réservée)",
      "Entrées aux sites (Sigiriya, Dambulla, Temple de la Dent, Fort de Galle)",
    ],
    excludes: [
      "Vols internationaux",
      "Visa ETA (~50 USD)",
      "Déjeuners et dîners (sauf mentionnés)",
      "Pourboires",
      "Assurance voyage",
      "Dépenses personnelles",
    ],
  },
  {
    slug: "classique-14-jours",
    title: "Le Classique",
    duration: 14,
    subtitle: "Le meilleur du Sri Lanka à un rythme confortable",
    description:
      "Deux semaines pour explorer le Sri Lanka en profondeur : Triangle culturel, montagnes du thé, safari à Yala et détente sur la côte sud. Le rythme permet de s'imprégner de chaque lieu avec des journées variées entre culture, nature et plage.",
    forWho: "Couples, familles, voyageurs souhaitant un rythme équilibré",
    rhythm: "Modéré — 1 à 2 nuits par étape",
    budgetRange: "1 500 – 2 500 € par personne",
    days: [
      {
        day: 1,
        title: "Arrivée à Colombo",
        location: "Colombo",
        description:
          "Accueil à l'aéroport et transfert à l'hôtel. Premiers pas dans la capitale : quartier de Pettah et ses marchés colorés, temple Gangaramaya, front de mer de Galle Face Green au coucher du soleil.",
        tags: ["Arrivée", "Ville", "Temple"],
      },
      {
        day: 2,
        title: "Colombo en profondeur",
        location: "Colombo",
        description:
          "Journée de découverte : Musée National, quartier colonial de Fort, street food à Pettah. Après-midi au quartier branché de Colombo 7 avec ses galeries et cafés. Dîner au Ministry of Crab ou dans un restaurant local.",
        tags: ["Culture", "Gastronomie", "Ville"],
      },
      {
        day: 3,
        title: "Anuradhapura — Cité sacrée",
        location: "Anuradhapura",
        description:
          "Route vers le nord (5h). Découverte de la cité sacrée en vélo : Sri Maha Bodhi, Ruwanwelisaya au coucher du soleil, bassins royaux Kuttam Pokuna. Atmosphère de dévotion dans cette ville-temple millénaire.",
        tags: ["UNESCO", "Temple", "Vélo"],
      },
      {
        day: 4,
        title: "Polonnaruwa & Sigiriya",
        location: "Triangle culturel",
        description:
          "Matinée au site archéologique de Polonnaruwa : Gal Vihara, Quadrilatère sacré, Vatadage. Route vers Sigiriya. Fin d'après-midi : ascension de Pidurangala Rock pour une vue spectaculaire sur le Rocher du Lion au coucher du soleil.",
        tags: ["UNESCO", "Archéologie", "Panorama"],
      },
      {
        day: 5,
        title: "Sigiriya & Minneriya",
        location: "Sigiriya",
        description:
          "Ascension matinale de Sigiriya : jardins d'eau, fresques des Demoiselles, ruines du palais au sommet. Après-midi safari en jeep à Minneriya ou Kaudulla pour observer les rassemblements d'éléphants sauvages autour du réservoir.",
        tags: ["UNESCO", "Randonnée", "Safari"],
      },
      {
        day: 6,
        title: "Kandy — Temple de la Dent",
        location: "Kandy",
        description:
          "Route vers Kandy via un jardin d'épices traditionnel. Visite du Jardin Botanique Royal de Peradeniya. Temple de la Dent Sacrée et cérémonie du soir. Spectacle de danses kandiennes et promenade nocturne autour du lac.",
        tags: ["UNESCO", "Temple", "Jardin botanique"],
      },
      {
        day: 7,
        title: "Kandy — Journée libre",
        location: "Kandy",
        description:
          "Matinée au marché central de Kandy : épices, artisanat, batik. Visite optionnelle d'un sanctuaire d'éléphants éthique. Après-midi libre pour explorer les collines environnantes ou un atelier de cuisine sri-lankaise.",
        tags: ["Marché", "Culture", "Cuisine"],
      },
      {
        day: 8,
        title: "Nuwara Eliya — Pays du thé",
        location: "Nuwara Eliya",
        description:
          "Route panoramique vers les hauts plateaux. Arrêt aux cascades de Ramboda Falls. Visite et dégustation dans une fabrique de thé. Promenade dans le village colonial et autour du lac Gregory. Soirée fraîche en altitude.",
        tags: ["Thé", "Cascades", "Colonial"],
      },
      {
        day: 9,
        title: "Train vers Ella",
        location: "Nuwara Eliya → Ella",
        description:
          "Trajet en train à travers les plus beaux paysages du Sri Lanka : ponts, tunnels, plantations de thé à flanc de montagne. Installation à Ella. Fin d'après-midi au Nine Arches Bridge.",
        tags: ["Train", "Panorama", "Montagne"],
      },
      {
        day: 10,
        title: "Ella — Randonnées",
        location: "Ella",
        description:
          "Lever de soleil au Little Adam's Peak. Option : ascension d'Ella Rock (3h) pour les plus sportifs. Après-midi détente : cafés, boutiques, baignade aux Ravana Falls. Dernière soirée en montagne.",
        tags: ["Randonnée", "Nature", "Cascades"],
      },
      {
        day: 11,
        title: "Safari à Yala",
        location: "Yala",
        description:
          "Route vers le sud-est. Safari matinal au parc national de Yala : sur les traces du léopard, éléphants, ours lippus et centaines d'espèces d'oiseaux. Second safari optionnel en fin d'après-midi. Nuit en lodge aux portes du parc.",
        tags: ["Safari", "Faune", "Nature"],
      },
      {
        day: 12,
        title: "Mirissa — Côte sud",
        location: "Mirissa",
        description:
          "Route vers Mirissa (2h30). Installation face à l'océan. Après-midi sur la plage en croissant : baignade, surf débutant. Montée à Coconut Tree Hill pour le coucher du soleil. Dîner de poisson grillé les pieds dans le sable.",
        tags: ["Plage", "Surf", "Coucher de soleil"],
      },
      {
        day: 13,
        title: "Galle — Fort historique",
        location: "Galle",
        description:
          "Option matinale : sortie observation des baleines (saison nov-avr). Puis route vers Galle (45 min). Exploration du fort : remparts, phare, ruelles, galeries, cafés. Shopping artisanat et derniers souvenirs.",
        tags: ["UNESCO", "Colonial", "Shopping"],
      },
      {
        day: 14,
        title: "Retour à Colombo",
        location: "Galle → Colombo",
        description:
          "Matinée libre à Galle ou plage d'Unawatuna. Retour vers l'aéroport par l'autoroute express du sud (2h30). Achats de dernière minute : thé, épices, souvenirs. Fin du voyage.",
        tags: ["Plage", "Shopping", "Départ"],
      },
    ],
    includes: [
      "Hébergement en hôtel 3-4*/boutique",
      "Petit-déjeuner quotidien + 3 dîners",
      "Véhicule privé climatisé avec chauffeur",
      "Guide francophone",
      "Train Nuwara Eliya-Ella (1ère classe)",
      "Safari Yala en 4x4 avec guide naturaliste",
      "Entrées à tous les sites majeurs",
      "Visite et dégustation dans une fabrique de thé",
    ],
    excludes: [
      "Vols internationaux",
      "Visa ETA (~50 USD)",
      "Repas non mentionnés",
      "Sortie baleines à Mirissa (~50 USD/pers)",
      "Pourboires",
      "Assurance voyage",
      "Dépenses personnelles",
    ],
  },
  {
    slug: "grand-tour-21-jours",
    title: "Le Grand Tour",
    duration: 21,
    subtitle: "L'île dans toute sa splendeur",
    description:
      "Trois semaines pour une immersion totale au Sri Lanka. Ce circuit exhaustif couvre l'intégralité de l'île, des cités anciennes du nord aux plages du sud, en passant par les montagnes du centre, la côte est méconnue et des expériences hors des sentiers battus.",
    forWho: "Voyageurs passionnés, longs séjours, amoureux de l'île",
    rhythm: "Détendu — 2 à 3 nuits par étape",
    budgetRange: "2 200 – 3 800 € par personne",
    days: [
      {
        day: 1,
        title: "Arrivée à Colombo",
        location: "Colombo",
        description:
          "Accueil VIP à l'aéroport. Installation dans un hôtel de charme. Première découverte de Colombo : Galle Face Green, temple Gangaramaya illuminé en soirée, dîner dans le quartier historique de Pettah.",
        tags: ["Arrivée", "Ville", "Culture"],
      },
      {
        day: 2,
        title: "Colombo en profondeur",
        location: "Colombo",
        description:
          "Journée complète : Musée National, mosquée Rouge de Pettah, quartier hollandais, déjeuner street food au marché de Manning. Après-midi au quartier de Colombo 7 : galerie Barefoot, cafés branchés. Cours de cuisine sri-lankaise en soirée.",
        tags: ["Culture", "Gastronomie", "Art"],
      },
      {
        day: 3,
        title: "Anuradhapura — Cité sacrée",
        location: "Anuradhapura",
        description:
          "Route matinale vers le nord. Après-midi à vélo dans la cité sacrée : Sri Maha Bodhi, Jetavanaramaya, Thuparamaya. Coucher de soleil au Ruwanwelisaya. Ambiance de pèlerinage au crépuscule.",
        tags: ["UNESCO", "Temple", "Vélo"],
      },
      {
        day: 4,
        title: "Mihintale & Polonnaruwa",
        location: "Anuradhapura → Polonnaruwa",
        description:
          "Matinée à Mihintale, berceau du bouddhisme sri-lankais : 1 840 marches jusqu'au sommet avec vue sur la jungle. Route vers Polonnaruwa. Visite du musée archéologique en fin d'après-midi.",
        tags: ["Temple", "Randonnée", "Histoire"],
      },
      {
        day: 5,
        title: "Polonnaruwa — Cité médiévale",
        location: "Polonnaruwa",
        description:
          "Journée complète au site : Gal Vihara et ses Bouddhas monumentaux, Quadrilatère sacré, Vatadage, palais royal. Vélo entre les ruines peuplées de singes et de varans. Coucher de soleil sur le lac Parakrama Samudra.",
        tags: ["UNESCO", "Archéologie", "Vélo"],
      },
      {
        day: 6,
        title: "Sigiriya — Le Rocher du Lion",
        location: "Sigiriya",
        description:
          "Ascension matinale de Sigiriya : jardins d'eau, fresques des Demoiselles, Mur Miroir, ruines du palais au sommet. Après-midi : safari en jeep à Minneriya pour les rassemblements d'éléphants.",
        tags: ["UNESCO", "Randonnée", "Safari"],
      },
      {
        day: 7,
        title: "Dambulla & route vers Kandy",
        location: "Dambulla → Kandy",
        description:
          "Visite des grottes de Dambulla : cinq cavernes ornées de fresques et de 150 statues de Bouddha. Route vers Kandy via un village traditionnel et un jardin d'épices. Installation en soirée.",
        tags: ["UNESCO", "Temple", "Épices"],
      },
      {
        day: 8,
        title: "Kandy — Temples et jardins",
        location: "Kandy",
        description:
          "Temple de la Dent Sacrée et cérémonie matinale. Jardin Botanique Royal de Peradeniya : orchidées, allée de palmiers, chauves-souris géantes. Spectacle de danses kandiennes en soirée.",
        tags: ["UNESCO", "Temple", "Jardin botanique"],
      },
      {
        day: 9,
        title: "Knuckles Mountain Range",
        location: "Knuckles",
        description:
          "Journée de trek dans la chaîne des Knuckles, classée au patrimoine mondial : forêts de nuages, cascades cachées, rizières en terrasses et villages isolés. Un Sri Lanka sauvage et préservé loin des circuits touristiques.",
        tags: ["Randonnée", "Nature", "UNESCO"],
      },
      {
        day: 10,
        title: "Nuwara Eliya — Pays du thé",
        location: "Nuwara Eliya",
        description:
          "Route vers les hauts plateaux. Arrêts aux cascades de Ramboda et St. Clair. Visite et dégustation à la Pedro Tea Factory. Promenade dans la ville coloniale. Nuit fraîche en altitude avec feu de cheminée.",
        tags: ["Thé", "Cascades", "Colonial"],
      },
      {
        day: 11,
        title: "Train vers Ella",
        location: "Nuwara Eliya → Ella",
        description:
          "Le plus beau trajet en train du monde : ponts vertigineux, tunnels dans la roche, mer de théiers. Installation à Ella. Fin d'après-midi au Nine Arches Bridge quand le train passe.",
        tags: ["Train", "Panorama", "Montagne"],
      },
      {
        day: 12,
        title: "Ella — Randonnées et détente",
        location: "Ella",
        description:
          "Lever de soleil au Little Adam's Peak. Option Ella Rock pour les sportifs. Après-midi : cours de cuisine, Ravana Falls, ou repos dans un café avec vue sur la vallée d'Ella Gap.",
        tags: ["Randonnée", "Nature", "Cuisine"],
      },
      {
        day: 13,
        title: "Udawalawe — Safari éléphants",
        location: "Udawalawe",
        description:
          "Route vers le sud. Safari au parc national d'Udawalawe : l'un des meilleurs endroits au monde pour observer les éléphants sauvages. Visite du centre de transit des éléphanteaux orphelins. Nuit en eco-lodge.",
        tags: ["Safari", "Éléphants", "Nature"],
      },
      {
        day: 14,
        title: "Safari à Yala",
        location: "Yala",
        description:
          "Route vers Yala. Double safari : matinal pour les léopards et crépusculaire pour les oiseaux et les crocodiles. La plus forte densité de léopards au monde dans un décor de bush aride et de lagons.",
        tags: ["Safari", "Léopard", "Faune"],
      },
      {
        day: 15,
        title: "Mirissa — Plage & baleines",
        location: "Mirissa",
        description:
          "Route vers Mirissa. Installation face à l'océan. Après-midi de plage et de farniente. Coconut Tree Hill au coucher du soleil. Dîner de poisson grillé sur la plage. Promenade nocturne sur le sable.",
        tags: ["Plage", "Détente", "Coucher de soleil"],
      },
      {
        day: 16,
        title: "Mirissa — Baleines & surf",
        location: "Mirissa",
        description:
          "Sortie observation des baleines bleues au lever du soleil (saison nov-avr). Retour et brunch. Après-midi surf ou snorkeling. Journée libre pour profiter du rythme balnéaire de la côte sud.",
        tags: ["Baleines", "Surf", "Nature"],
      },
      {
        day: 17,
        title: "Galle — Fort historique",
        location: "Galle",
        description:
          "Route vers Galle (45 min). Journée dans le fort classé UNESCO : remparts, phare, église hollandaise, temple, mosquée. Galeries d'art, boutiques de créateurs, cafés. Coucher de soleil sur les bastions.",
        tags: ["UNESCO", "Colonial", "Art"],
      },
      {
        day: 18,
        title: "Bentota — Rivière & plage",
        location: "Bentota",
        description:
          "Route côtière vers Bentota. Safari en bateau sur la rivière Madu : mangroves, îlots, temple bouddhiste sur l'eau, cannelle sauvage. Après-midi de plage sur l'une des plus belles côtes du Sri Lanka.",
        tags: ["Plage", "Mangrove", "Nature"],
      },
      {
        day: 19,
        title: "Trincomalee — Côte est",
        location: "Trincomalee",
        description:
          "Vol intérieur ou longue route vers la côte est. Découverte de Trincomalee : Fort Frederick, temple hindou de Koneswaram sur Swami Rock. Coucher de soleil depuis Lovers Leap. Plage d'Uppuveli.",
        tags: ["Plage", "Temple hindou", "Histoire"],
      },
      {
        day: 20,
        title: "Trincomalee — Pigeon Island",
        location: "Trincomalee",
        description:
          "Excursion en bateau à Pigeon Island : snorkeling dans les récifs coralliens, tortues, requins à pointe noire. Sources chaudes de Kanniya. Dernière journée de plage sur Nilaveli. Dîner de fruits de mer au coucher du soleil.",
        tags: ["Snorkeling", "Nature", "Plage"],
      },
      {
        day: 21,
        title: "Retour à Colombo — Fin du voyage",
        location: "Trincomalee → Colombo",
        description:
          "Vol retour vers Colombo ou route panoramique. Dernières heures pour les achats : thé de Ceylan, épices, artisanat. Transfert vers l'aéroport. Fin d'une aventure de trois semaines à travers l'île resplendissante.",
        tags: ["Shopping", "Départ"],
      },
    ],
    includes: [
      "Hébergement en hôtel 4*/boutique/eco-lodge",
      "Pension complète (tous les repas)",
      "Véhicule 4x4 privé climatisé avec chauffeur",
      "Guide francophone expérimenté",
      "Trains 1ère classe (Kandy-Ella)",
      "Vol intérieur Colombo-Trincomalee",
      "Safaris Minneriya + Udawalawe + Yala",
      "Sortie baleines à Mirissa",
      "Excursion Pigeon Island + snorkeling",
      "Trek guidé Knuckles Mountain Range",
      "Entrées à tous les sites et parcs nationaux",
      "Cours de cuisine sri-lankaise",
    ],
    excludes: [
      "Vols internationaux",
      "Visa ETA (~50 USD)",
      "Boissons alcoolisées",
      "Pourboires",
      "Assurance voyage",
      "Dépenses personnelles",
      "Surcharge chambre single",
    ],
  },
];

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}
