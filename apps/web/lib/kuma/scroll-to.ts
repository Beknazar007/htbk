export const SCROLL_STORAGE_KEY = "kumaScrollTo";

export function scrollToSection(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (!el) return false;

  const headerOffset = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}

/** Retry scroll until target section exists (after client navigation) */
export function scrollToSectionWithRetry(href: string, attempt = 0) {
  if (scrollToSection(href)) return;
  if (attempt < 25) {
    window.setTimeout(() => scrollToSectionWithRetry(href, attempt + 1), 80);
  }
}

export function queueHomeSectionScroll(href: string) {
  sessionStorage.setItem(SCROLL_STORAGE_KEY, href);
}

/** Scroll on home, or navigate to / and scroll after load */
export function navigateToHomeSection(
  href: string,
  isHome: boolean,
  navigate: (path: string) => void
) {
  if (isHome) {
    scrollToSectionWithRetry(href);
    return;
  }
  queueHomeSectionScroll(href);
  navigate("/");
}

/** Navigate to a dedicated page, or home section when on homepage */
export function navigateToPageOrSection(
  sectionHref: string,
  pagePath: string,
  isHome: boolean,
  navigate: (path: string) => void
) {
  if (isHome) {
    scrollToSectionWithRetry(sectionHref);
    return;
  }
  navigate(pagePath);
}
