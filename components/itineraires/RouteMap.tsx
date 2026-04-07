interface RouteMapProps {
  itinerarySlug: string;
}

const locations: Record<string, { x: number; y: number; label: string }> = {
  colombo: { x: 80, y: 290, label: "Colombo" },
  negombo: { x: 75, y: 260, label: "Negombo" },
  anuradhapura: { x: 130, y: 100, label: "Anuradhapura" },
  polonnaruwa: { x: 200, y: 145, label: "Polonnaruwa" },
  sigiriya: { x: 170, y: 160, label: "Sigiriya" },
  dambulla: { x: 155, y: 175, label: "Dambulla" },
  kandy: { x: 145, y: 220, label: "Kandy" },
  "nuwara-eliya": { x: 155, y: 260, label: "Nuwara Eliya" },
  ella: { x: 180, y: 290, label: "Ella" },
  yala: { x: 215, y: 350, label: "Yala" },
  mirissa: { x: 130, y: 380, label: "Mirissa" },
  galle: { x: 105, y: 375, label: "Galle" },
  trincomalee: { x: 230, y: 105, label: "Trincomalee" },
  bentota: { x: 85, y: 330, label: "Bentota" },
  udawalawe: { x: 165, y: 330, label: "Udawalawe" },
  knuckles: { x: 170, y: 200, label: "Knuckles" },
};

const routes: Record<string, string[]> = {
  "essentiel-7-jours": [
    "negombo", "dambulla", "sigiriya", "kandy", "ella", "galle", "colombo",
  ],
  "classique-14-jours": [
    "colombo", "anuradhapura", "polonnaruwa", "sigiriya", "kandy",
    "nuwara-eliya", "ella", "yala", "mirissa", "galle", "colombo",
  ],
  "grand-tour-21-jours": [
    "colombo", "anuradhapura", "polonnaruwa", "sigiriya", "dambulla",
    "kandy", "knuckles", "nuwara-eliya", "ella", "udawalawe", "yala",
    "mirissa", "galle", "bentota", "trincomalee", "colombo",
  ],
};

export function RouteMap({ itinerarySlug }: RouteMapProps) {
  const route = routes[itinerarySlug] ?? [];
  const points = route.map((id) => locations[id]).filter(Boolean);

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div className="relative mx-auto w-full max-w-xs">
      <svg
        viewBox="0 0 300 440"
        className="w-full"
        aria-label="Carte du circuit au Sri Lanka"
        role="img"
      >
        {/* Island silhouette */}
        <path
          d="M 95 50 C 60 80, 40 150, 50 200 C 55 240, 60 270, 65 300 C 70 330, 80 360, 100 390 C 120 410, 140 400, 160 390 C 180 375, 210 350, 230 320 C 245 295, 255 260, 250 220 C 245 180, 240 140, 230 110 C 220 85, 200 60, 170 50 C 145 42, 115 42, 95 50 Z"
          fill="#e8f5f0"
          stroke="#2a7a6a"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Route line */}
        {points.length > 1 && (
          <path
            d={pathD}
            fill="none"
            stroke="#c8963e"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />
        )}

        {/* Points */}
        {points.map((p, i) => (
          <g key={`${p.label}-${i}`}>
            <circle
              cx={p.x}
              cy={p.y}
              r={8}
              fill="#1a4a3a"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={p.x}
              y={p.y}
              dy="-14"
              textAnchor="middle"
              className="fill-ceylon-charcoal text-[9px] font-medium"
            >
              {p.label}
            </text>
            <text
              x={p.x}
              y={p.y}
              dy="3.5"
              textAnchor="middle"
              className="fill-white text-[7px] font-bold"
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
