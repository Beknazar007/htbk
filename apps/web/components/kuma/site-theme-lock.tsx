"use client";

import { useEffect } from "react";

/** Overrides global body/dark styles on marketing pages */
export function SiteThemeLock() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.remove("dark");
    html.style.colorScheme = "light";
    body.dataset.siteTheme = "truck-bus";

    const prevBg = body.style.backgroundColor;
    const prevColor = body.style.color;
    const prevOverflow = body.style.overflowX;

    body.style.backgroundColor = "#ffffff";
    body.style.color = "#111827";
    body.style.overflowX = "hidden";

    return () => {
      delete body.dataset.siteTheme;
      body.style.backgroundColor = prevBg;
      body.style.color = prevColor;
      body.style.overflowX = prevOverflow;
    };
  }, []);

  return null;
}
