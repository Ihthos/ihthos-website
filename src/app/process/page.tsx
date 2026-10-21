import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/process";
import { breadcrumbs, faqPage, graph, webPage } from "@/lib/schema";
import { meta, ogImage, pageHero } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.process.title },
  description: meta.process.description,
  alternates: { canonical: "/process/" },
  openGraph: {
    url: "/process/",
    title: meta.process.title,
    description: meta.process.description,
    images: [ogImage],
  },
};

const structuredData = graph([
  webPage({
    path: "/process/",
    title: meta.process.title,
    description: meta.process.description,
  }),
  breadcrumbs("/process/", "How it works"),
  faqPage("/process/"),
]);

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <PageHero
        label={pageHero.process.label}
        title={pageHero.process.heading}
        intro={pageHero.process.intro}
      />
      <Process heading={false} />
      <Faq />
      <CtaBand secondary={{ href: "/boundaries", label: "Read our boundaries" }} />
    </>
  );
}
