import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tapradar.app";
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin/", "/dashboard/", "/app", "/collect/", "/invite/"] },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
