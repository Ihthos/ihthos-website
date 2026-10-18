import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/process";
import { meta, ogImage, pageHero } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.process.title },
  description: meta.process.description,
  openGraph: {
    title: meta.process.title,
    description: meta.process.description,
    images: [ogImage],
  },
};

export default function ProcessPage() {
  return (
    <>
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
