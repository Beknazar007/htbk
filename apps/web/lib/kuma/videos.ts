import { SITE_IMAGES } from "./site-images";
import type { PromoVideo } from "./promo-videos";

export type VideoCategory = "review" | "test-drive";

export interface SiteVideo {
  id: string;
  titleKey: string;
  descKey: string;
  youtubeId: string;
  category: VideoCategory;
}

export interface TestDriveVideo {
  id: string;
  titleKey: string;
  descKey: string;
  previewImage: string;
  promoId: string;
  youtubeId?: string;
}

/** Тест-драйв карточкалары — локалдык превью + промо-видео */
export const TEST_DRIVE_VIDEOS: TestDriveVideo[] = [
  {
    id: "test-drive-gt8",
    titleKey: "testDriveGt8Title",
    descKey: "testDriveGt8Desc",
    previewImage: SITE_IMAGES.gt8,
    promoId: "promo-gt8",
    youtubeId: "N_l5x9H38-E",
  },
  {
    id: "test-drive-gt11",
    titleKey: "testDriveGt11Title",
    descKey: "testDriveGt11Desc",
    previewImage: SITE_IMAGES.gt11,
    promoId: "promo-gt11",
    youtubeId: "5E-xpL0u7_4",
  },
  {
    id: "test-drive-electric",
    titleKey: "testDriveElectricTitle",
    descKey: "testDriveElectricDesc",
    previewImage: SITE_IMAGES.electric,
    promoId: "promo-electric",
    youtubeId: "L_jWHffIx5k",
  },
];

/** YouTube видеолор — кошумча review категориясы */
export const SITE_VIDEOS: SiteVideo[] = [
  {
    id: "gt8-review",
    titleKey: "videoGt8Title",
    descKey: "videoGt8Desc",
    youtubeId: "N_l5x9H38-E",
    category: "review",
  },
  {
    id: "gt11-review",
    titleKey: "videoGt11Title",
    descKey: "videoGt11Desc",
    youtubeId: "5E-xpL0u7_4",
    category: "review",
  },
  {
    id: "mighty-electric",
    titleKey: "videoElectricTitle",
    descKey: "videoElectricDesc",
    youtubeId: "L_jWHffIx5k",
    category: "review",
  },
];

export function getPromoById(id: string, promos: PromoVideo[]): PromoVideo | undefined {
  return promos.find((p) => p.id === id);
}

export function youtubeThumbnail(id: string): string {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}
