"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/providers/i18n-provider";

export function SignOutButton() {
  const { t } = useI18n();
  return (
    <Button variant="ghost" size="sm" onClick={() => signOut({ callbackUrl: "/" })}>
      {t("nav.signOut")}
    </Button>
  );
}
