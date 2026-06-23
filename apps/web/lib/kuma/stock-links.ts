import type { StockItem } from "./stock-inventory";

export function getStockItemHref(item: StockItem): string {
  if (item.productSlug) return `/products/${item.productSlug}`;
  return `/models/${item.slug}`;
}
