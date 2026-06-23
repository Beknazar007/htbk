"use client";

import { useEffect } from "react";
import { SCROLL_STORAGE_KEY, scrollToSectionWithRetry } from "@/lib/kuma/scroll-to";

export function ScrollFix() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const pending = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (pending) {
      sessionStorage.removeItem(SCROLL_STORAGE_KEY);
      scrollToSectionWithRetry(pending);
      return;
    }

    const hash = window.location.hash;
    if (hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
      scrollToSectionWithRetry(hash);
      return;
    }

    window.scrollTo(0, 0);
  }, []);

  return null;
}
