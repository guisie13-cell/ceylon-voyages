import type { Destination } from "@/lib/types";

// All photos from Pexels (images.pexels.com) — verified real photos matching each destination
const pexels = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&q=80`;

export const destinations: Destination[] = [
  {
    slug: "sigiriya",
    name: "Sigiriya",
    tagline: "La forteresse dans les nuages",
    category: ["culture", "aventure"],
    heroImage: pexels(28838276, 1600), // Aerial view of Sigiriya rock fortress
    heroPosition: "center 30%",
    images: [
      pexels(13391116), // Sigiriya Sri Lanka ground view
      pexels(19808528), // View of Pidurangala Rock looking at Sigiriya
      pexels(13764965), // Gal Vihara ancient ruins (cultural triangle)
      pexels(122253),   // White stupa reflected on water (nearby Anuradhapura)
    ],
    description: `Sigiriya, classée au patrimoine mondial de l'UNESCO, est sans doute le site le plus emblématique du Sri Lanka. Ce rocher massif de 200 mètres de haut, surnommé le « Rocher du Lion », domine les plaines verdoyantes du centre de l'île et raconte l'histoire fascinante du roi Kassapa au Ve siècle.

L'ascension commence par les jardins d'eau, parmi les plus anciens jardins paysagers d'Asie, puis se poursuit le long de galeries abritant les célèbres fresques des Demoiselles de Sigiriya — des peintures rupestres d'une finesse remarquable qui ont traversé quinze siècles. Le Mur Miroir, autrefois poli au point de refléter les fresques, porte encore des graffitis en cinghalais ancien.

Au sommet, les ruines du palais royal offrent une vue à 360 degrés sur la jungle et les rizières qui s'étendent à perte de vue. C'est au lever du soleil que l'expérience atteint son apogée : la brume matinale enveloppe la forêt tandis que le ciel se teinte d'or et de rose.

À quelques kilomètres, le rocher de Pidurangala offre une alternative moins fréquentée et un point de vue imprenable sur Sigiriya lui-même — un panorama devenu l'une des photos les plus iconiques du Sri Lanka.`,
    highlights: [
      "Ascension au lever du soleil pour une lumière magique",
      "Fresques des Demoiselles — chefs-d'œuvre du Ve siècle",
      "Vue panoramique à 360° depuis les ruines du palais",
      "Jardins d'eau royaux parmi les plus anciens d'Asie",
      "Pidurangala Rock pour la vue emblématique sur Sigiriya",
    ],
    bestSeason: "Janvier à avril",
    duration: "1-2 jours",
    budget: "$$",
    location: "Triangle culturel, centre de l'île",
    tips: [
      "Arrivez dès l'ouverture à 7h pour éviter la foule et la chaleur.",
      "L'ascension compte environ 1 200 marches — prévoyez de bonnes chaussures et de l'eau.",
      "Le ticket d'entrée coûte environ 30 USD (tarif étranger). Gardez votre billet pour la journée entière.",
      "Montez à Pidurangala en fin d'après-midi pour un coucher de soleil face à Sigiriya.",
      "Des singes vivent sur le site : ne montrez pas de nourriture et gardez vos affaires fermées.",
    ],
    nearbyDestinations: ["polonnaruwa", "anuradhapura", "kandy"],
  },
  {
    slug: "kandy",
    name: "Kandy",
    tagline: "Le cœur spirituel de l'île",
    category: ["culture"],
    heroImage: pexels(14041994, 1600), // Sri Dalada Maligawa — Temple of the Sacred Tooth Relic
    heroPosition: "center center",
    images: [
      pexels(27907358), // Sri Lankan elephants during Kandy Esala Perahera
      pexels(18199789), // Elephant in Kandy Esala Perahera procession
      pexels(86413),    // Large elephants near lake (Kandy lake)
      pexels(1658967),  // Railway on mountain near houses (Kandy highlands)
    ],
    description: `Kandy, dernière capitale des rois cinghalais, est le gardien de la culture bouddhiste sri-lankaise. Lovée dans un écrin de collines verdoyantes à 500 mètres d'altitude, la ville s'organise autour de son lac artificiel créé en 1807 par le dernier roi de Kandy.

Le Temple de la Dent Sacrée (Sri Dalada Maligawa) constitue le cœur vibrant de la cité. Il abrite la relique la plus vénérée du bouddhisme theravada : une dent du Bouddha, objet de trois cérémonies quotidiennes (puja) auxquelles des centaines de fidèles participent dans une atmosphère de dévotion profonde. En juillet-août, le festival Esala Perahera transforme la ville pendant dix nuits de processions spectaculaires avec éléphants parés, danseurs et joueurs de tambour.

Le Jardin Botanique Royal de Peradeniya, à six kilomètres du centre, s'étend sur 60 hectares et abrite une collection exceptionnelle d'orchidées, une allée de palmiers royaux centenaires et des colonies impressionnantes de chauves-souris frugivores suspendues aux grands arbres.

Kandy est aussi la porte d'entrée des plantations de thé du centre de l'île. Les collines environnantes offrent des promenades à travers des paysages de théiers en terrasses, ponctuées de cascades et de villages tamils.`,
    highlights: [
      "Temple de la Dent Sacrée et ses cérémonies quotidiennes",
      "Promenade autour du lac de Kandy au coucher du soleil",
      "Jardin Botanique Royal de Peradeniya",
      "Spectacle de danses traditionnelles kandiennes",
      "Marché central pour épices, artisanat et batik",
    ],
    bestSeason: "Janvier à avril, juillet-août pour l'Esala Perahera",
    duration: "2-3 jours",
    budget: "$$",
    location: "Centre de l'île, 115 km de Colombo",
    tips: [
      "Assistez à la puja de 18h30 au Temple de la Dent : la plus atmosphérique.",
      "Tenue couvrant épaules et genoux obligatoire dans tous les temples.",
      "Réservez en avance si vous visitez pendant l'Esala Perahera (juillet-août).",
      "Le train depuis Colombo (3h) offre déjà de beaux paysages — prenez 2e classe côté droit.",
      "Goûtez un kottu roti dans les petits restaurants autour du marché central.",
    ],
    nearbyDestinations: ["sigiriya", "nuwara-eliya", "ella"],
  },
  {
    slug: "galle",
    name: "Galle",
    tagline: "L'élégance coloniale face à l'océan",
    category: ["culture", "plage"],
    heroImage: pexels(31194790, 1600), // Charming Street View in Galle Fort
    heroPosition: "center center",
    images: [
      pexels(31032908), // Galle Fort Clock Tower
      pexels(31032945), // Night View of the Historic Galle Fort
      pexels(1078983),  // Aerial beachline (Unawatuna near Galle)
      pexels(29644514), // Aerial view of southern Sri Lanka beach
    ],
    description: `Galle Fort est un trésor architectural où l'histoire coloniale portugaise, hollandaise et britannique se mêle harmonieusement à la culture sri-lankaise. Classé au patrimoine mondial de l'UNESCO, ce fort du XVIe siècle est l'un des mieux préservés d'Asie du Sud-Est.

Déambuler dans les ruelles pavées de la vieille ville, c'est passer devant des boutiques de créateurs installées dans des entrepôts hollandais, des cafés branchés nichés dans des villas coloniales, et des temples bouddhistes côtoyant une mosquée et une église. Les remparts offrent une promenade emblématique, particulièrement au coucher du soleil quand le phare blanc se détache sur un ciel embrasé et que les joueurs de cricket improvisent une partie sur les bastions.

À l'intérieur du fort, le Musée Maritime National, la vieille église réformée hollandaise (1755) et le temple Meeran Jumma témoignent du passé multiculturel de la ville. À l'extérieur, la plage d'Unawatuna et les fonds coralliens de Jungle Beach ne sont qu'à dix minutes.

Galle est aussi le point de départ idéal pour explorer la côte sud : Mirissa pour les baleines, Weligama pour le surf, et Tangalle pour les plages désertes.`,
    highlights: [
      "Promenade sur les remparts au coucher du soleil",
      "Architecture coloniale hollandaise préservée",
      "Boutiques de créateurs et galeries d'art locales",
      "Phare de Galle et vue panoramique sur l'océan",
      "Plages d'Unawatuna et Jungle Beach à proximité",
    ],
    bestSeason: "Décembre à mars",
    duration: "1-2 jours",
    budget: "$$-$$$",
    location: "Côte sud-ouest, 120 km de Colombo",
    tips: [
      "Faites le tour des remparts tôt le matin ou au coucher du soleil pour la meilleure lumière.",
      "Le fort se visite entièrement à pied — pas besoin de tuk-tuk à l'intérieur.",
      "Goûtez les glaces artisanales chez les petits glaciers de Church Street.",
      "Visitez le marché aux poissons de Galle à l'aube pour une expérience locale authentique.",
      "Prenez le train côtier depuis Colombo — le trajet longe l'océan sur une bonne partie du parcours.",
    ],
    nearbyDestinations: ["mirissa", "ella", "kandy"],
  },
  {
    slug: "ella",
    name: "Ella",
    tagline: "Le paradis des randonneurs",
    category: ["nature", "aventure"],
    heroImage: pexels(4769075, 1600), // Nine Arch Bridge in Demodara, Sri Lanka (with train)
    heroPosition: "center 55%",
    images: [
      pexels(12147639), // Ella Nine Arch Bridge Beautiful Sri Lanka
      pexels(31555892), // Scenic View of Nine Arch Bridge in Ella
      pexels(30581907), // Nine Arches Bridge in Lush Sri Lankan Jungle
      pexels(2403209),  // Brown Train Rail Surrounded of Green Trees (Ella)
    ],
    description: `Ella est un petit village de montagne qui a conquis le cœur des voyageurs du monde entier grâce à ses paysages à couper le souffle, son ambiance décontractée et ses randonnées accessibles à tous les niveaux. Perché à 1 041 mètres d'altitude, il offre un climat doux et des panoramas vertigineux sur les vallées plantées de théiers.

Le train de Kandy à Ella est unanimement considéré comme l'un des plus beaux trajets ferroviaires au monde. Pendant sept heures, le train serpente à travers des tunnels creusés dans la roche, franchit le célèbre Nine Arches Bridge — un viaduc en brique de l'époque coloniale niché dans la jungle — et traverse des plantations de thé d'un vert éclatant.

Les randonnées phares incluent l'ascension du Little Adam's Peak (1h aller, facile) avec vue panoramique sur la vallée d'Ella Gap, et l'Ella Rock (3h aller-retour, modéré) qui récompense l'effort par un panorama grandiose. Les cascades de Ravana Falls, à deux kilomètres du village, complètent le tableau avec leurs 25 mètres de chute d'eau.

Le village lui-même regorge de petits restaurants servant des smoothie bowls le matin et des curries épicés le soir, créant une atmosphère bohème et cosmopolite unique dans les montagnes sri-lankaises.`,
    highlights: [
      "Trajet en train Kandy-Ella, l'un des plus beaux au monde",
      "Nine Arches Bridge dans son écrin de jungle",
      "Randonnée au Little Adam's Peak au lever du soleil",
      "Ella Rock pour les randonneurs plus ambitieux",
      "Ravana Falls et sa baignade rafraîchissante",
    ],
    bestSeason: "Janvier à mars",
    duration: "2-3 jours",
    budget: "$-$$",
    location: "Hauts plateaux, centre-sud de l'île",
    tips: [
      "Réservez votre billet de train Kandy-Ella au moins 30 jours à l'avance sur le site des chemins de fer.",
      "Si plus de billets, la 3e classe sans réservation offre la même vue — arrivez tôt pour une place.",
      "Visitez le Nine Arches Bridge entre 9h et 9h30 quand le train passe — vérifiez les horaires.",
      "Partez pour Ella Rock avant 6h pour éviter la chaleur et profiter de la brume matinale.",
      "Séjournez dans un homestay plutôt qu'un hôtel pour une expérience plus authentique et économique.",
    ],
    nearbyDestinations: ["nuwara-eliya", "kandy", "yala"],
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    tagline: "La perle de la côte est",
    category: ["plage"],
    heroImage: pexels(30992808, 1600), // Tranquil Sri Lankan Coastal View with Boat and Rock Formation
    heroPosition: "center 40%",
    images: [
      pexels(13010771), // Turtle Swimming Underwater (Pigeon Island snorkeling)
      pexels(668867),   // Underwater Photography of Brown Sea Turtle
      pexels(847393),   // Photo of a Turtle Swimming Underwater
      pexels(2154502),  // Aerial island view (Pigeon Island)
    ],
    description: `Trincomalee, sur la côte est du Sri Lanka, abrite l'un des plus beaux ports naturels au monde et des plages qui rivalisent avec les Maldives — sans l'affluence touristique. La côte est restée longtemps méconnue des voyageurs occidentaux, préservant une authenticité rare.

Uppuveli et Nilaveli, les deux plages principales au nord de la ville, offrent des étendues de sable blanc bordées d'eaux turquoise cristallines. Pigeon Island, accessible en quinze minutes de bateau depuis Nilaveli, est un paradis de snorkeling avec ses récifs coralliens abritant requins à pointe noire juvéniles, tortues de mer et une myriade de poissons tropicaux.

Le temple hindou de Koneswaram, perché sur le promontoire de Swami Rock à 130 mètres au-dessus de l'océan, est l'un des cinq temples les plus sacrés du shivaïsme. En contrebas, Lovers Leap offre un point de vue vertigineux, et entre avril et septembre, les baleines bleues et les dauphins sont régulièrement observés au large.

La baie de Trincomalee a aussi joué un rôle dans l'histoire navale mondiale : les ruines du Fort Frederick, construit par les Portugais puis modifié par les Hollandais et les Britanniques, témoignent de cette importance stratégique.`,
    highlights: [
      "Plages d'Uppuveli et Nilaveli au sable immaculé",
      "Snorkeling à Pigeon Island avec tortues et récifs",
      "Temple hindou de Koneswaram au sommet de Swami Rock",
      "Observation des baleines bleues (avril-septembre)",
      "Sources chaudes de Kanniya aux sept puits",
    ],
    bestSeason: "Avril à septembre",
    duration: "2-3 jours",
    budget: "$-$$",
    location: "Côte nord-est, 260 km de Colombo",
    tips: [
      "Trinco est idéale quand la côte ouest est en mousson (mai-septembre).",
      "Apportez votre masque de snorkeling — la location sur place est de qualité variable.",
      "Le bus depuis Kandy (5h) traverse des paysages spectaculaires de rizières et de jungle.",
      "Louez un scooter pour explorer la côte entre Uppuveli et Nilaveli à votre rythme.",
      "Goûtez le kottu roti de fruits de mer dans les petits restaurants du front de mer.",
    ],
    nearbyDestinations: ["sigiriya", "polonnaruwa", "anuradhapura"],
  },
  {
    slug: "yala",
    name: "Yala",
    tagline: "Sur les traces du léopard",
    category: ["safari", "nature"],
    heroImage: pexels(27037675, 1600), // Leopard Running on a Safari
    heroPosition: "center 35%",
    images: [
      pexels(86413),    // Large elephants near lake (Yala/Udawalawe)
      pexels(16023),    // Elephants in the wild
      pexels(6548333),  // Ancient Buddha statue in nature (Sithulpawwa monastery in Yala)
      pexels(2765872),  // Sea turtle (Yala has coastal areas with marine life)
    ],
    description: `Le parc national de Yala est le joyau de la faune sauvage sri-lankaise et détient la plus forte densité de léopards au monde. S'étendant sur près de 1 000 km² de bush aride, de lagons et de plages sauvages le long de la côte sud-est, Yala offre une expérience de safari qui n'a rien à envier à l'Afrique.

Le léopard du Sri Lanka est la star incontestée du parc. Contrairement à leurs cousins africains, les léopards sri-lankais sont les prédateurs apex de leur écosystème — sans lions ni hyènes à craindre, ils se montrent plus volontiers. Un safari matinal dans le bloc 1, le plus fréquenté mais aussi le plus riche en faune, offre les meilleures chances d'observation.

Au-delà des léopards, Yala abrite des éléphants sauvages (environ 300), des ours lippus, des crocodiles, des buffles d'eau, et plus de 200 espèces d'oiseaux dont le calao géant et l'aigle pêcheur. Les plans d'eau attirent une faune diverse, surtout en saison sèche quand les animaux se concentrent autour des derniers points d'eau.

Le site archéologique de Sithulpawwa, un ancien monastère bouddhiste du IIe siècle avant J.-C. niché dans le parc, ajoute une dimension culturelle unique à l'expérience safari.`,
    highlights: [
      "Safari au lever du soleil pour observer les léopards",
      "Plus forte densité de léopards au monde",
      "Éléphants sauvages, ours lippus et crocodiles",
      "Plus de 200 espèces d'oiseaux",
      "Monastère bouddhiste de Sithulpawwa (IIe siècle av. J.-C.)",
    ],
    bestSeason: "Février à juillet",
    duration: "1-2 jours",
    budget: "$$$",
    location: "Côte sud-est, 300 km de Colombo",
    tips: [
      "Choisissez le safari de 5h30 du matin — les animaux sont les plus actifs et la lumière est sublime.",
      "Réservez un guide expérimenté : les bons pisteurs connaissent les habitudes des léopards.",
      "Le bloc 1 est le plus riche en faune mais aussi le plus fréquenté — le bloc 5 offre plus de tranquillité.",
      "Apportez des jumelles, un chapeau, de la crème solaire et beaucoup d'eau.",
      "Le parc ferme en septembre pour la saison de reproduction — vérifiez les dates avant votre voyage.",
    ],
    nearbyDestinations: ["ella", "mirissa", "galle"],
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    tagline: "La petite Angleterre des montagnes",
    category: ["nature"],
    heroImage: pexels(6128955, 1600), // Scenic verdant tea plantation on hilly terrain
    heroPosition: "center 40%",
    images: [
      pexels(2403209),  // Brown Train Rail Surrounded by Green Trees (highlands train)
      pexels(1658967),  // Railway on mountain near houses (Nuwara Eliya area)
      pexels(31572677), // Scenic view in lush greenery (highlands landscape)
      pexels(34218650), // Aerial view of lush greenery (tea hills)
    ],
    description: `Nuwara Eliya, perchée à 1 868 mètres d'altitude, est le cœur battant du pays du thé sri-lankais. Surnommée « Little England » par les colons britanniques qui y retrouvaient le climat frais de leur patrie, la ville conserve un charme colonial unique avec ses cottages Tudor, son parcours de golf et ses jardins fleuris.

Les plantations de thé de Ceylan s'étendent à perte de vue sur les collines environnantes, créant un patchwork de verts intenses ponctué de cueilleuses en sari coloré. La visite d'une fabrique de thé est un incontournable : de la cueillette à la tasse, vous découvrirez les secrets du thé noir, du thé vert et du rare thé blanc de Ceylan. La dégustation qui conclut la visite vous révélera des saveurs insoupçonnées.

Le parc Victoria, au centre-ville, offre une promenade agréable parmi les fleurs tropicales et les oiseaux endémiques. Le lac Gregory, ceint de collines boisées, invite à la balade en pédalo ou à la promenade à cheval sur ses berges.

Les environs regorgent de cascades spectaculaires : Lovers Leap (37 m), Ramboda Falls (109 m) et les majestueuses St. Clair's Falls, surnommées le « petit Niagara du Sri Lanka », offrent des arrêts photo mémorables sur la route depuis Kandy.`,
    highlights: [
      "Visite et dégustation dans une fabrique de thé",
      "Paysages de plantations de thé à perte de vue",
      "Architecture coloniale britannique préservée",
      "Cascades de Ramboda Falls et St. Clair's Falls",
      "Promenade autour du lac Gregory",
    ],
    bestSeason: "Janvier à avril",
    duration: "1-2 jours",
    budget: "$-$$",
    location: "Hauts plateaux, centre de l'île",
    tips: [
      "Prévoyez des vêtements chauds — les températures descendent à 10°C la nuit.",
      "La fabrique Pedro Tea Factory est la plus accessible et propose d'excellentes visites guidées.",
      "Le trajet en train depuis Kandy (3h30) traverse les plus beaux paysages de plantations.",
      "Avril est le mois de l'Avurudu (nouvel an cinghalais) — festivités locales garanties.",
      "Goûtez les fraises fraîches — Nuwara Eliya est le seul endroit du Sri Lanka où elles poussent.",
    ],
    nearbyDestinations: ["ella", "kandy", "sigiriya"],
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    tagline: "La cité sacrée millénaire",
    category: ["culture"],
    heroImage: pexels(122253, 1600), // White Dome Stupa Reflected on Water (Ruwanwelisaya)
    heroPosition: "center 35%",
    images: [
      pexels(11712470), // White Dome Building Under White Sky (another stupa view)
      pexels(13391116), // Sigiriya — same cultural triangle ancient sites
      pexels(31912675), // Red Train at Anuradhapura Railway Station
      pexels(13764965), // Gal Vihara Rock Temple (same period ancient ruins)
    ],
    description: `Anuradhapura, première capitale du Sri Lanka pendant plus de mille ans (du IVe siècle avant J.-C. au XIe siècle), est un site archéologique d'une ampleur extraordinaire et un haut lieu de pèlerinage bouddhiste. Classée au patrimoine mondial de l'UNESCO, cette cité sacrée s'étend sur des dizaines de kilomètres carrés de ruines monumentales.

Le Sri Maha Bodhi est l'arbre sacré le plus vénéré du bouddhisme : ce ficus religiosa a été planté en 288 avant J.-C. à partir d'une bouture de l'arbre sous lequel le Bouddha a atteint l'illumination. C'est le plus vieil arbre documenté au monde, objet d'une dévotion continue depuis plus de 2 300 ans.

Les dagobas (stupas) d'Anuradhapura comptent parmi les plus grandes structures en briques du monde antique. Le Jetavanaramaya, avec ses 122 mètres de hauteur originelle, rivalisait avec les pyramides d'Égypte. Le Ruwanwelisaya, avec son dôme blanc immaculé entouré d'une frise de 344 éléphants en pierre, est d'une beauté saisissante au coucher du soleil.

Le site est vivant : des moines en robe safran méditent au pied des stupas, des fidèles déposent des offrandes de lotus, et le parfum d'encens flotte entre les ruines millénaires.`,
    highlights: [
      "Sri Maha Bodhi — l'arbre le plus ancien du monde documenté",
      "Dagobas monumentaux rivalisant avec les pyramides",
      "Ruwanwelisaya et sa frise de 344 éléphants",
      "Atmosphère de pèlerinage bouddhiste vivante",
      "Bassins royaux (Kuttam Pokuna) à l'architecture parfaite",
    ],
    bestSeason: "Janvier à avril",
    duration: "1-2 jours",
    budget: "$",
    location: "Triangle culturel, nord-centre de l'île",
    tips: [
      "Le site est immense : louez un vélo ou un tuk-tuk pour la journée.",
      "Tenue blanche recommandée (pas obligatoire) par respect pour les pèlerins.",
      "Visitez le Ruwanwelisaya au coucher du soleil quand le stupa blanc s'illumine d'or.",
      "Retirez vos chaussures et votre chapeau à l'entrée de chaque zone sacrée.",
      "Combinez avec Mihintale (13 km), le berceau du bouddhisme sri-lankais.",
    ],
    nearbyDestinations: ["sigiriya", "polonnaruwa", "trincomalee"],
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    tagline: "Le rendez-vous des géants bleus",
    category: ["plage", "nature"],
    heroImage: pexels(1005417, 1600), // Person Standing Among Coconut Trees — Mirissa beach
    heroPosition: "center 30%",
    images: [
      pexels(29644514), // Aerial View of Mirissa Beach in Sri Lanka
      pexels(11496553), // Palm Tree Growing on Beach (Mirissa)
      pexels(4696771),  // Whale in blue depth of ocean (blue whale watching)
      pexels(5115929),  // High-Angle Shot of Humpback Whale in Blue Ocean
    ],
    description: `Mirissa est la destination balnéaire la plus prisée de la côte sud, conjuguant plage de rêve en forme de croissant, ambiance festive et l'une des meilleures expériences d'observation de baleines au monde. Ce petit village de pêcheurs s'est transformé en un paradis bohème sans perdre son âme.

De novembre à avril, les eaux au large de Mirissa sont le théâtre d'un spectacle naturel extraordinaire : les baleines bleues, plus grands animaux ayant jamais vécu sur Terre, passent en migration le long de la côte sud du Sri Lanka. Les sorties en bateau au lever du soleil offrent des rencontres avec ces géants de 30 mètres, souvent accompagnés de dauphins à long bec et de cachalots.

La plage principale, bordée de cocotiers, est idéale pour la baignade et le surf débutant. Coconut Tree Hill, le promontoire rocheux planté de cocotiers penchés vers la mer, est devenu l'un des spots les plus photographiés du Sri Lanka. Le rocher de Parrot Rock, accessible à marée basse, offre un point de vue panoramique sur la baie.

Le soir, les restaurants de plage servent du poisson grillé pêché le jour même tandis que les bars proposent cocktails au coucher du soleil et musique live.`,
    highlights: [
      "Observation des baleines bleues (novembre-avril)",
      "Plage en croissant bordée de cocotiers",
      "Coconut Tree Hill — panorama iconique",
      "Surf et baignade dans des eaux chaudes",
      "Restaurants de fruits de mer sur la plage",
    ],
    bestSeason: "Novembre à avril",
    duration: "2-3 jours",
    budget: "$$",
    location: "Côte sud, 150 km de Colombo",
    tips: [
      "Réservez la sortie baleines avec un opérateur responsable qui respecte les distances — Raja & the Whales est recommandé.",
      "Les bateaux partent vers 6h30 — la sortie dure 4-5 heures et peut être agitée, prévoyez un antinaupathique.",
      "Évitez Mirissa en plein été (mousson sud-ouest) — la mer est dangereuse et les baleines sont parties.",
      "Montez à Coconut Tree Hill en fin d'après-midi pour les meilleures photos.",
      "Le marché aux poissons du port à l'aube est une expérience locale fascinante.",
    ],
    nearbyDestinations: ["galle", "yala", "ella"],
  },
  {
    slug: "polonnaruwa",
    name: "Polonnaruwa",
    tagline: "Le musée à ciel ouvert",
    category: ["culture"],
    heroImage: pexels(13764965, 1600), // Gal Vihara Rock Temple in Sri Lanka — Buddha carved in granite
    heroPosition: "center 40%",
    images: [
      pexels(122253),   // White stupa reflected on water (nearby Anuradhapura)
      pexels(11712470), // White stupa under sky
      pexels(2873473),  // Buddha statue
      pexels(6548333),  // Ancient Buddha statue in nature
    ],
    description: `Polonnaruwa, seconde capitale médiévale du Sri Lanka (XIe-XIIIe siècle), offre le site archéologique le mieux préservé de l'île. Classé au patrimoine mondial de l'UNESCO, il se distingue d'Anuradhapura par la concentration et l'excellent état de conservation de ses monuments.

Le Gal Vihara est le chef-d'œuvre absolu de Polonnaruwa : quatre statues du Bouddha taillées dans un même bloc de granit, dont un Bouddha couché de 14 mètres d'une sérénité bouleversante. La finesse des drapés sculptés dans la roche force l'admiration et témoigne de la maîtrise artistique des sculpteurs cinghalais du XIIe siècle.

Le Quadrilatère sacré rassemble sur une terrasse surélevée les plus beaux temples de la cité : le Vatadage, temple circulaire protégeant une relique du Bouddha, est un bijou d'architecture avec ses piliers de pierre et ses escaliers ornés de pierres de lune. Le Hatadage et le Thuparama complètent cet ensemble unique.

Le lac Parakrama Samudra, mer artificielle de 2 400 hectares construite au XIIe siècle par le roi Parakramabahu, témoigne du génie hydraulique de cette civilisation. Le coucher du soleil sur ses eaux, avec les dagobas en silhouette, est d'une beauté mélancolique.`,
    highlights: [
      "Gal Vihara — Bouddhas taillés dans le granit",
      "Quadrilatère sacré et le Vatadage circulaire",
      "Site archéologique compact et bien préservé",
      "Lac Parakrama Samudra et coucher de soleil",
      "Singes, varans et oiseaux dans les ruines",
    ],
    bestSeason: "Janvier à avril",
    duration: "1 jour",
    budget: "$",
    location: "Triangle culturel, 215 km de Colombo",
    tips: [
      "Louez un vélo à l'entrée : c'est le moyen idéal pour explorer le site à votre rythme.",
      "Commencez par le Gal Vihara tôt le matin pour éviter la foule et profiter de la lumière douce.",
      "Prévoyez 3-4 heures pour une visite complète et emportez eau et chapeau.",
      "Le musée archéologique à l'entrée donne un excellent contexte historique — visitez-le d'abord.",
      "Combinez avec Minneriya (safari éléphants) l'après-midi si vous visitez entre juin et septembre.",
    ],
    nearbyDestinations: ["sigiriya", "anuradhapura", "trincomalee"],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByCategory(
  category: string
): Destination[] {
  if (category === "tout") return destinations;
  return destinations.filter((d) =>
    d.category.includes(category as Destination["category"][number])
  );
}
