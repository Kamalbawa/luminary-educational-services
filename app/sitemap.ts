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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl();

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/courses/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
