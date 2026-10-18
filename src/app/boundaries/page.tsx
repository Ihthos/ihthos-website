import type { Metadata } from "next";
import { Boundaries } from "@/components/boundaries";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { PageHero } from "@/components/page-hero";
import { meta, ogImage, pageHero } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.boundaries.title },
  description: meta.boundaries.description,
  openGraph: {
    title: meta.boundaries.title,
    description: meta.boundaries.description,
    images: [ogImage],
  },
};

export default function BoundariesPage() {
  return (
    <>
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
