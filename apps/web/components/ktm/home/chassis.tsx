"use client";

import { useKtm } from "../ktm-provider";
import { KTM_CHASSIS_FEATURES } from "@/lib/ktm/home-data";
import { KTM_IMAGES } from "@/lib/ktm/images";
import { FadeIn } from "../motion";
import { FeatureList, SplitSection } from "../ui/split-section";
import { SectionHeader } from "../ui/section-header";

export function KtmChassis() {
  const { t } = useKtm();

  return (
    <SplitSection image={KTM_IMAGES.chassis} reverse dark id="chassis">
      <FadeIn>
        <SectionHeader
          title={t("chassisTitle")}
          subtitle={t("chassisSubtitle")}
          dark
          centered={false}
          className="!text-left"
        />
      </FadeIn>
      <FeatureList items={KTM_CHASSIS_FEATURES} dark />
    </SplitSection>
  );
}
