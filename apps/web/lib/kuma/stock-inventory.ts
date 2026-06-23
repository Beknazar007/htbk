import { STOCK_IMAGES } from "./site-images";

export type StockStatus = "in_stock" | "on_order";

export interface StockItem {
  model: string;
  slug: string;
  productSlug?: string;
  nameKey: string;
  image: string;
  count?: number;
  status: StockStatus;
}

export const STOCK_INVENTORY: StockItem[] = [
  { model: "GT8", slug: "gt8", nameKey: "stockModelGt8", image: STOCK_IMAGES.GT8, count: 3, status: "in_stock" },
  { model: "GT11", slug: "gt11", productSlug: "mighty-gt11", nameKey: "stockModelGt11", image: STOCK_IMAGES.GT11, count: 2, status: "in_stock" },
  {
    model: "Electric",
    slug: "gt8",
    productSlug: "mighty-electric",
    nameKey: "stockModelElectric",
    image: STOCK_IMAGES.Electric,
    status: "on_order",
  },
];
