import type { Metadata } from "next";
import { Boundaries } from "@/components/boundaries";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbs, graph, webPage } from "@/lib/schema";
import { meta, ogImage, pageHero } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.boundaries.title },
  description: meta.boundaries.description,
  alternates: { canonical: "/boundaries/" },
  openGraph: {
    url: "/boundaries/",
    title: meta.boundaries.title,
    description: meta.boundaries.description,
    images: [ogImage],
  },
};

const structuredData = graph([
  webPage({
    path: "/boundaries/",
    title: meta.boundaries.title,
    description: meta.boundaries.description,
  }),
  breadcrumbs("/boundaries/", "Boundaries"),
]);

export default function BoundariesPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <PageHero
        label={pageHero.boundaries.label}
        title={pageHero.boundaries.heading}
        intro={pageHero.boundaries.intro}
      />
      <Boundaries heading={false} />
      <Faq />
      <CtaBand secondary={{ href: "/about", label: "More about Ihthos" }} />
    </>
  );
}
