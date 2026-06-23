import { organizationJsonLd, localBusinessJsonLd } from "@/lib/kuma/seo";
import type { KumaLocale } from "@/lib/kuma/types";

export function JsonLd({ locale = "ru" }: { locale?: KumaLocale }) {
  const schemas = [organizationJsonLd(locale), localBusinessJsonLd(locale)];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
