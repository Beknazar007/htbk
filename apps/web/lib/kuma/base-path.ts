/**
 * Static assets referenced by a literal root-relative path (raw <img>/<a>
 * href, manifest link, OG image URLs) bypass Next's automatic basePath
 * rewriting, so under a subpath deploy (e.g. GitHub Pages project sites)
 * they 404. Prefix them explicitly with the same basePath the app was
 * built with.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return path.startsWith("/") ? `${base}${path}` : path;
}
