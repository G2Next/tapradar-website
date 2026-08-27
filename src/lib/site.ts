/**
 * The canonical public origin is intentionally not configurable.
 *
 * Preview and local deployments must never leak their host into canonical URLs,
 * robots.txt, or the sitemap. Runtime callback URLs can continue to use
 * NEXT_PUBLIC_SITE_URL where the deployment host is relevant.
 */
export const PUBLIC_SITE_URL = "https://www.tapradar.app";
