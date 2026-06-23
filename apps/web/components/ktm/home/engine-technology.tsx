"use client";

import { useKtm } from "../ktm-provider";
import { KTM_ENGINE_FEATURES } from "@/lib/ktm/home-data";
import { KTM_IMAGES } from "@/lib/ktm/images";
import { FadeIn } from "../motion";
import { FeatureList, SplitSection } from "../ui/split-section";
import { SectionHeader } from "../ui/section-header";

export function KtmEngineTechnology() {
  const { t } = useKtm();

  return (
    <SplitSection image={KTM_IMAGES.engine} id="engine">
      <FadeIn>
        <SectionHeader
          title={t("engineTitle")}
          subtitle={t("engineSubtitle")}
          centered={false}
          className="!text-left"
        />
      </FadeIn>
      <FeatureList items={KTM_ENGINE_FEATURES} />
    </SplitSection>
  );
}
