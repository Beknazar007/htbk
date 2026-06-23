const V = "2";
const p = (file: string) => `/images/hero/${file}?v=${V}`;

export const KTM_IMAGES = {
  hero: p("slide-gt8.png"),
  force8000: p("slide-gt8.png"),
  titan11000: p("slide-gt11.png"),
  atlasFleet: p("slide-fleet.png"),
  voltE: p("slide-electric.png"),
  mountainPro: p("slide-logistics.png"),
  cityCargo: p("slide-showcase.png"),
  performance: p("slide-gt11.png"),
  engine: p("slide-gt8.png"),
  chassis: p("slide-logistics.png"),
  safety: p("slide-fleet.png"),
  comfort: p("slide-showcase.png"),
  exterior: p("slide-electric.png"),
} as const;
