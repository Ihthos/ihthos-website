import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Ambience } from "@/components/ambience";
import { CursorDot } from "@/components/cursor-dot";
import { JsonLd } from "@/components/json-ld";
import { MotionProvider } from "@/components/motion-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteGraph, siteUrl } from "@/lib/schema";
import { brand, meta } from "@/lib/site";
import "./globals.css";

/* One family for all text. TWK Lausanne is commercial, so it is declared as a
   plain @font-face in globals.css against locally self-hosted files kept out
   of git. Work Sans is loaded only as the fallback an unlicensed build
   degrades to, so the site never ships a system-default sans as its own
   choice. */
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/**
 * The domain was confirmed by the owner on 2026-10-16, so metadataBase is
 * always absolute. Canonicals are declared per page rather than here — a
 * canonical inherited by every route would point them all at the home page.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: meta.home.title,
    template: "%s | Ihthos",
  },
  description: meta.home.description,
  applicationName: brand.name,
  category: "technology",
  creator: brand.name,
  publisher: brand.name,
  authors: [{ name: brand.founder, url: `${siteUrl}/about/` }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: meta.home.title,
    description: meta.home.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} h-full antialiased`}
    >
      <body className="bg-base text-ink flex min-h-full flex-col">
        <JsonLd data={siteGraph} />
        {/* The hero highlight panels are drawn in by script, so they ship
            hidden. Without JavaScript nothing draws them; show them complete. */}
        <noscript>
          <style>{`[data-highlight-box]{opacity:1!important;clip-path:none!important}`}</style>
        </noscript>
        <Ambience />
        <MotionProvider>
          <CursorDot />
          <SiteHeader />
          <main id="main" className="relative z-10 flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
