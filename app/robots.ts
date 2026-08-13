import type { MetadataRoute } from "next";

function siteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";

  const url = configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;

  return url.replace(/\/$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
