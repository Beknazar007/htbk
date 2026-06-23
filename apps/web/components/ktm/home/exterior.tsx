"use client";

import { useKtm } from "../ktm-provider";
import { KTM_EXTERIOR_FEATURES } from "@/lib/ktm/home-data";
import { KTM_IMAGES } from "@/lib/ktm/images";
import { FadeIn } from "../motion";
import { FeatureList, SplitSection } from "../ui/split-section";
import { SectionHeader } from "../ui/section-header";

export function KtmExterior() {
  const { t } = useKtm();

  return (
    <SplitSection image={KTM_IMAGES.exterior} dark id="exterior">
      <FadeIn>
        <SectionHeader
          title={t("exteriorTitle")}
          subtitle={t("exteriorSubtitle")}
          dark
          centered={false}
          className="!text-left"
        />
      </FadeIn>
      <FeatureList items={KTM_EXTERIOR_FEATURES} dark />
    </SplitSection>
  );
}
