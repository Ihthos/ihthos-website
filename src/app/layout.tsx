import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Ambience } from "@/components/ambience";
import { CursorDot } from "@/components/cursor-dot";
import { MotionProvider } from "@/components/motion-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
 * The domain is not confirmed yet, so metadataBase is only set when a real
 * site URL is provided through the environment. Without it Next would have
 * to invent an absolute base for Open Graph URLs, and the brief forbids
 * publishing an unverified address as fact.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: meta.home.title,
    template: "%s | Ihthos",
  },
  description: meta.home.description,
  applicationName: brand.name,
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
