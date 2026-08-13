import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: { default: "Luminary Educational Services Punjab", template: "%s | Luminary Punjab" },
    description: "Education guidance for students across Punjab: degree admissions, nursing and skill courses, ITI courses and WES evaluation assistance.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      type: "website",
      title: "Luminary Educational Services Punjab",
      description: "Punjab students deserve the right guidance.",
      images: [{ url: `${origin}/og.webp`, width: 1200, height: 630, alt: "Luminary Educational Services for Punjab students" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Luminary Educational Services Punjab",
      description: "Punjab students deserve the right guidance.",
      images: [`${origin}/og.webp`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Luminary Educational Services",
    areaServed: "Punjab, India",
    telephone: "+91 70537 32000",
    email: "luminaryedu@zohomail.com",
    founder: "Manpreet Saini",
  };
  return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />{children}</body></html>;
}
