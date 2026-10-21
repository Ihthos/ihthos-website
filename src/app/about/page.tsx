import type { Metadata } from "next";
import { About } from "@/components/about";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbs, graph, webPage } from "@/lib/schema";
import { about, meta, ogImage, pageHero } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.about.title },
  description: meta.about.description,
  alternates: { canonical: "/about/" },
  openGraph: {
    url: "/about/",
    title: meta.about.title,
    description: meta.about.description,
    images: [ogImage],
  },
};

const structuredData = graph([
  webPage({
    path: "/about/",
    title: meta.about.title,
    description: meta.about.description,
    type: "AboutPage",
  }),
  breadcrumbs("/about/", "About"),
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={structuredData} />
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
