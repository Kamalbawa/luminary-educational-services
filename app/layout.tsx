import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Luminary Educational Services", template: "%s | Luminary" },
  description: "Personal guidance for degree admissions, ITI skill courses and WES credential evaluation assistance.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
