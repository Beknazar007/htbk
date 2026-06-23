"use client";

import { KumaSubpageShell } from "./kuma-subpage-shell";
import { FleetPageClient } from "./fleet-page";

export function FleetPageWrapper() {
  return (
    <KumaSubpageShell>
      <FleetPageClient />
    </KumaSubpageShell>
  );
}
