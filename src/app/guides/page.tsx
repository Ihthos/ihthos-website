import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { guides, guidesPage } from "@/lib/guides";
import { breadcrumbs, graph, webPage } from "@/lib/schema";
import { ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: guidesPage.title },
  description: guidesPage.description,
  alternates: { canonical: "/guides/" },
  openGraph: {
    url: "/guides/",
    title: guidesPage.title,
    description: guidesPage.description,
    images: [ogImage],
  },
};

const structuredData = graph([
  webPage({
    path: "/guides/",
    title: guidesPage.title,
    description: guidesPage.description,
    type: "CollectionPage",
  }),
  breadcrumbs("/guides/", "Guides"),
  {
    "@type": "ItemList",
    "@id": "https://ihthos.com/guides/#guides",
    name: "Ihthos guides",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.heading,
      url: `https://ihthos.com/guides/${guide.slug}/`,
    })),
  },
]);

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <PageHero
        label={guidesPage.label}
        title={guidesPage.heading}
        intro={guidesPage.intro}
      />

      <Section id="guides" rule={false}>
        <ul className="border-line divide-y divide-line border-y">
          {guides.map((guide, index) => (
            <Reveal key={guide.slug} delay={index * 0.04}>
              <li className="py-7">
                <Link
                  href={`/guides/${guide.slug}/`}
                  className="group block"
                >
                  <h2 className="text-ink group-hover:text-signal max-w-[46ch] text-[1.15rem] leading-snug tracking-tight transition-colors duration-150">
                    {guide.heading}
                  </h2>
                  <p className="text-muted mt-2 max-w-[68ch] text-[0.9375rem] leading-relaxed">
                    {guide.description}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
