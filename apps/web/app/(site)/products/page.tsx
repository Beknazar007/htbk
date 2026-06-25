import { Suspense } from "react";
import { ProductsCatalogPage } from "@/components/kuma/products-catalog";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="kuma-container py-32">...</div>}>
      <ProductsCatalogPage />
    </Suspense>
  );
}
