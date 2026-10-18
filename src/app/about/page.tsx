import type { Metadata } from "next";
import { About } from "@/components/about";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { about, meta, ogImage, pageHero } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.about.title },
  description: meta.about.description,
  openGraph: {
    title: meta.about.title,
    description: meta.about.description,
    images: [ogImage],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label={pageHero.about.label}
        title={pageHero.about.heading}
        intro={pageHero.about.intro}
      />
      <About heading={false} body={false} />
      <CtaBand
        title={about.closeHeading}
        secondary={{ href: "/services", label: "See the services" }}
      />
    </>
  );
}
