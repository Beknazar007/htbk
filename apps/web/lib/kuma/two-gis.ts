/** 2GIS map helpers — https://2gis.kg */

export interface TwoGisPoint {
  city: string;
  lat: number;
  lng: number;
  label?: string;
}

/** Main showroom / office — Бишкек, пр. Чуй 150 */
export const TWO_GIS_MAIN_OFFICE: TwoGisPoint = {
  city: "bishkek",
  lat: 42.8746,
  lng: 74.6044,
  label: "Биринчи",
};

/** Embedded map iframe (2GIS web) — coords order: lng, lat */
export function buildTwoGisEmbedUrl(
  point: Pick<TwoGisPoint, "city" | "lat" | "lng">,
  zoom = 16
): string {
  return `https://2gis.kg/${point.city}?m=${point.lng},${point.lat}/${zoom}`;
}

/** Open location in 2GIS app / website */
export function buildTwoGisOpenUrl(
  point: Pick<TwoGisPoint, "city" | "lat" | "lng">,
  zoom = 16
): string {
  return `https://2gis.kg/${point.city}/geo/${point.lng},${point.lat}?m=${point.lng},${point.lat}/${zoom}`;
}

/** Build route to destination (start = user's location in 2GIS) */
export function buildTwoGisRouteUrl(point: Pick<TwoGisPoint, "city" | "lat" | "lng">): string {
  return `https://2gis.kg/${point.city}/directions/points/|${point.lng},${point.lat}`;
}
