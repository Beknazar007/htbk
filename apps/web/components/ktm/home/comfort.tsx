"use client";

import { useKtm } from "../ktm-provider";
import { KTM_COMFORT_FEATURES } from "@/lib/ktm/home-data";
import { KTM_IMAGES } from "@/lib/ktm/images";
import { FadeIn } from "../motion";
import { FeatureList, SplitSection } from "../ui/split-section";
import { SectionHeader } from "../ui/section-header";

export function KtmComfort() {
  const { t } = useKtm();

  return (
    <SplitSection image={KTM_IMAGES.comfort} reverse id="comfort">
      <FadeIn>
        <SectionHeader
          title={t("comfortTitle")}
          subtitle={t("comfortSubtitle")}
          centered={false}
          className="!text-left"
        />
      </FadeIn>
      <FeatureList items={KTM_COMFORT_FEATURES} />
    </SplitSection>
  );
}
