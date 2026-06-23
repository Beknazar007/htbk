"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  navigateToHomeSection,
  navigateToPageOrSection,
} from "@/lib/kuma/scroll-to";

export function useHomeSectionNav() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const goToSection = useCallback(
    (href: string) => {
      navigateToHomeSection(href, isHome, (path) => router.push(path));
    },
    [isHome, router]
  );

  const goToPageOrSection = useCallback(
    (sectionHref: string, pagePath: string) => {
      navigateToPageOrSection(sectionHref, pagePath, isHome, (path) => router.push(path));
    },
    [isHome, router]
  );

  const goToPage = useCallback(
    (pagePath: string) => {
      router.push(pagePath);
    },
    [router]
  );

  return { isHome, goToSection, goToPageOrSection, goToPage };
}
