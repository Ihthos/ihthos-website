import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Services } from "@/components/services";
import { breadcrumbs, graph, serviceList, webPage } from "@/lib/schema";
import { meta, ogImage, pageHero, servicesClose } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.services.title },
  description: meta.services.description,
  alternates: { canonical: "/services/" },
  openGraph: {
    url: "/services/",
    title: meta.services.title,
    description: meta.services.description,
    images: [ogImage],
  },
};

const structuredData = graph([
  webPage({
    path: "/services/",
    title: meta.services.title,
    description: meta.services.description,
    type: "CollectionPage",
  }),
  breadcrumbs("/services/", "Services"),
  serviceList(),
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <PageHero
        label={pageHero.services.label}
        title={pageHero.services.heading}
        intro={pageHero.services.intro}
      />
      <Services heading={false} />

      <Section id="start" rule={false} className="pt-0">
        <Reveal className="border-line border-t pt-10">
          <h2 className="text-[1.5rem] leading-tight tracking-[-0.02em] md:text-[1.9rem]">
            {servicesClose.heading}
          </h2>
          <p className="text-muted mt-4 max-w-[58ch] text-base leading-relaxed">
            {servicesClose.body}
          </p>
          <ButtonLink href="/contact" className="mt-8" cursorLabel="Talk">
            {servicesClose.cta}
          </ButtonLink>
        </Reveal>
      </Section>

      <CtaBand secondary={{ href: "/process", label: "See how a project runs" }} />
    </>
  );
}
